<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo">
                    <h4>Codigos Vinculados</h4>
                </div>
                <button type="button" class="btn btn-primary mt-2 mb-2" data-toggle="modal" data-target="#code">
                    Vincular Codigo
                </button>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nombre Tutor</th>
                            <th>Codigo</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody v-for="(code, key) in codes" :key="key">
                        <tr>
                            <td>{{code.name_tutor}}</td>
                            <td>{{code.code_vinculated}}</td>
                            <td>
                                <button class="btn btn-primary" v-on:click="edit(code)">Editar</button>
                                <button class="btn btn-danger" v-on:click="dropVinculation(code.id)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                                    
                <div class="modal fade" id="code" tabindex="-1" role="dialog" aria-labelledby="codeLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="codeLabel">Codigo a Vincular</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="code">Codigo</label>
                                    <input type="text" class="form-control" name="code" v-model="code">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary" v-on:click="consultCode">Consultar Codigo</button>
                                </div>
                                <div v-if="isEmpty === true">
                                    <p>No se encuentra información del codigo</p>
                                </div>
                            </div>
                            <div class="modal-footer" v-show="isEmpty === false">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" v-on:click="saveCodes">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['user'],
        data(){
            return{
                code:"",
                codes:[],
                contentData:{},
                isEmpty: true
            }
        },
        mounted(){
            this.getCodes();
        },
        methods:{
            getCodes(){
                axios.get('vinculationsTutor').then((response)=>{                    
                    let codes = response.data;                
                    codes.forEach((element)=>{
                        axios.get(`api/tutor/${element.id_tutor}/profile`).then((response)=>{
                            this.codes.push({
                                id: element.id,
                                code_vinculated: element.code_vinculated,
                                name_tutor: response.data.name+' '+response.data.last_name  
                            })
                        })
                    })
                })
            },
            
            consultCode(){
                axios.get(`codes/${this.code}`).then((response)=>{
                    this.contentData = response.data;
                    if(Object.keys(response.data).length === 0 ){
                        this.isEmpty = true
                    }else{                    
                        this.isEmpty = false
                    }
                })
            },

            edit(data){
                console.log(data);
                this.code = data.code_vinculated,
                this.id_to_edit= data.id;
                $("#code").modal("show");
            },

            saveCodes(){
                if(this.id_to_edit === ""){
                    axios.post('vinculationsTutor',{
                        id_tutor: this.contentData.id_tutor,
                        id_student: this.user.id,
                        code_vinculated: this.code
                    }).then((response)=>{
                        toastr.success(response.data);
                        window.location = "/tutorCodeVinculation"
                        $("#code").modal("hide");
                    }).catch((error)=>{
                        toastr.info("Upss ha ocurrido un error, intenta de nuevo mas tarde");
                        console.log(error)
                    })   
                }else{
                    axios.patch(`vinculationsTutor/${this.id_to_edit}`,{
                        id_tutor: this.contentData.id_tutor,
                        id_student: this.user.id,
                        code_vinculated: this.code
                    }).then((response)=>{
                        toastr.success(response.data);
                        window.location = "/tutorCodeVinculation"
                        $("#code").modal("hide");
                    }).catch((error)=>{
                        toastr.info("Upss ha ocurrido un error, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }            
            },

            dropVinculation(id){
                if(window.confirm("Seguro que desea eliminar este dato?")){
                    axios.delete(`vinculationsTutor/${id}`).then((response)=>{
                        toastr.success(response.data);
                        window.location = "/tutorCodeVinculation"
                    })
                }
            }
        }
    }
</script>


<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo">
                    <h4>Mis Aulas</h4>
                </div>
                <div class="text-left">
                    <button v-if="user.type_user === 1" type="button" class="btn btn-primary mt-2 mb-2" data-toggle="modal" data-target="#code" v-on:click="getCleanModal()">
                        Crear Aula de clase
                    </button>
                    <button v-else type="button" class="btn btn-primary mt-2 mb-2" data-toggle="modal" data-target="#code" v-on:click="getAreas(); getCleanModal()">
                        Crear Aula de clase
                    </button>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Codigo</th>
                            <th>Area</th>
                            <th v-show="user.type_user === 1">Tutor</th>
                            <th>Fecha</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody v-for="(code, key) in codes" :key="key">
                        <tr>
                            <td>{{ code.name }}</td>
                            <td>{{ code.description }}</td>
                            <td>{{ code.code }}</td>
                            <td>{{ code.area_name }}</td>
                            <td v-show="user.type_user === 1">{{ code.tutor_name }}</td>
                            <td>{{ code.date }}</td>
                            <td>
                                <button class="btn btn-primary" v-on:click="edit(code)">Editar</button>
                                <button class="btn btn-danger" v-on:click="dropCode(code.id)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div class="modal fade" id="code" tabindex="-1" role="dialog" aria-labelledby="codeLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="codeLabel">Nueva Aula</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="name">Nombre</label>
                                    <input type="text" class="form-control" name="name" v-model="name">
                                </div>

                                <div class="form-group">
                                    <label for="description">Descripción</label>
                                    <textarea name="description" id="description" class="form-control" v-model="description"></textarea>
                                </div>

                                <div class="form-group" v-show="id_to_update !== ''">
                                    <label for="code">Codigo</label>
                                    <input type="code" class="form-control" name="code" v-model="code" disabled>
                                </div>

                                <div v-if="user.type_user === 1 && id_to_update === ''">
                                    <select class="form-group btn btn-select letra-boldfont" v-model="userSelected" name="type" v-on:change="getAreas()">
                                        <option disabled selected hidden value="0">Seleccione un tutor</option>
                                        <option v-for="(tutor,key) in tutors" :key="key" :value="tutor.id">{{ tutor.name +' '+tutor.last_name +'-'+tutor.id}}</option>
                                    </select>
                                </div>

                                <div class="form-group" v-show="id_to_update === ''">
                                    <label for="area">Area a asignar Código</label>
                                    <multiselect name="cicleSelect" v-model="saveAreas" :options="areas" :multiple="false"
                                        :close-on-select="false" :clear-on-select="false"
                                        :preserve-search="true" placeholder="Seleccione una"
                                        label="text" track-by="id" :preselect-first="true">
                                        <template slot="selection" slot-scope="{ values, isOpen }">
                                            <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                                {{ values.length }}
                                                opciones
                                                selecionadas
                                            </span>
                                        </template>
                                    </multiselect>
                                </div>

                                <div class="form-group">
                                    <label for="dateCode">Fecha inicio Reunion</label>
                                    <input type="datetime-local" class="form-control" name="dateCode" v-model="date">
                                </div>
                            </div>
                            <div class="modal-footer">
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
    import Multiselect from "vue-multiselect";
    Vue.component("multiselect", Multiselect);
    export default {
        props:['user'],
        data(){
            return{
                codes:[],
                areas:[],
                tutors:[],
                saveAreas:{},
                id_to_update:"",
                name:"",
                description:"",
                code:"",
                date:"",
                userSelected:0,
            }
        },
        components: {
            Multiselect
        },
        mounted(){
            this.getCodes();
            this.getTutors();
        },
        methods:{
            getCodes(){
                axios.get('codes').then((response)=>{
                    this.codes = response.data
                })
            },

            getAreas(){
                this.areas=[];
                axios.get(`/getArearByTutor/${this.userSelected}`).then((response) => {
                    this.areas = response.data;
                    console.log(this.areas);
                });
            },

            getCleanModal(){
                this.saveAreas={};
                this.id_to_update = '';
                this.name = '';
                this.description = '';
            },

            getTutors(){
                axios.get(`/getUsersTutor`).then((response) => {
                    this.tutors = response.data;
                    console.log(this.tutors);
                });
            },

            dropCode(id){
                if(window.confirm("Seguro que desea eliminar este dato?")){
                    axios.delete(`codes/${id}`).then((response)=>{
                        toastr.info(response.data);
                        this.getCodes();
                    }).catch((error)=>{
                        toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }
            },

            edit(data){
                this.id_to_update = data.id;
                this.name = data.name;
                this.description = data.description;
                this.code = data.code;
                this.saveAreas={
                    id: data.id_area,
                    id_area: data.id_area,
                    text: data.area_name
                }
                this.date = data.date;
                $("#code").modal("show");
            },

            cleanForm(){
                this.id_to_update = "";
                this.name = "";
                this.description = "";
                this.code = "";
                this.course ={};
                this.date = "";
            },

            saveCodes(){
                if(this.id_to_update != ""){
                    axios.patch(`codes/${this.id_to_update}`,{
                        name: this.name,
                        description: this.description,
                        date: this.date,
                        id_area: this.saveAreas.id,
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.getCodes();
                        this.cleanForm()
                        $("#code").modal("hide");
                    }).catch((error)=>{
                        toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }else{
                    if(this.user.type_user === 1){
                        axios.post('codes',{
                        name: this.name,
                        description: this.description,
                        date: this.date,
                        id_area: this.saveAreas.id,
                        id_user: this.userSelected,
                        }).then((response)=>{
                            toastr.success(response.data);
                            this.getCodes();
                            this.cleanForm()
                            $("#code").modal("hide");
                        }).catch((error)=>{
                            toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                            console.log(error)
                        })
                    }else{
                        axios.post('codes',{
                        name: this.name,
                        description: this.description,
                        date: this.date,
                        id_area: this.saveAreas.id,
                        }).then((response)=>{
                            toastr.success(response.data);
                            this.getCodes();
                            this.cleanForm()
                            $("#code").modal("hide");
                        }).catch((error)=>{
                            toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                            console.log(error)
                        })
                    }
                }
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.btn-select{
    background-color: #39ffe5;
    font-weight: 600;
    border-color: #39b0ff;
    color: black;
}
</style>


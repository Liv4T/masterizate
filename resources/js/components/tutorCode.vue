<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header text-center fondo">
                        <h4>Codigos</h4>
                    </div>
                    <div class="card-body">
                        <div id="accordion" v-for="(codes, key) in codes" :key="key">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapseOne${key.replace(/ /g, '')}`" aria-expanded="true" :aria-controls="`collapseOne${key.replace(/ /g, '')}`">
                                            {{key}}
                                        </button>
                                    </h5>
                                </div>

                                <div :id="`collapseOne${key.replace(/ /g, '')}`" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                        <table>
                                            <thead>
                                                <th>
                                                    <td>Nombre</td>
                                                    <td>Descripción</td>
                                                    <td>Codigo</td>
                                                    <td>Fecha</td>
                                                    <td>Acción</td>
                                                </th>
                                            </thead>
                                            <tbody v-for="(code, key) in codes" :key="key">
                                                <th>
                                                    <tr>{{code.name}}</tr>
                                                    <tr>{{code.description}}</tr>
                                                    <tr>{{code.code}}</tr>
                                                    <tr>{{code.date}}</tr>
                                                    <tr></tr>
                                                </th>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
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
        data(){
            return{
                codes:[],
            }
        },
        methods:{
            getCodes(){
                axios.get('codes').then((response)=>{
                    this.groupData(response.data)
                })
            },

            groupData(data){
                const result = _.chain(data).groupBy("course").value();
                this.codes = result
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

            saveCodes(){
                if(this.id_to_update != ""){
                    axios.put(`codes/${id_to_update}`,{
                        name: this.name,
                        description: this.description,
                        code: this.code,
                        course: this.course,
                        date: this.date,
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.getCodes();
                    }).catch((error)=>{
                        toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }else{
                    axios.post('codes',{
                        name: this.name,
                        description: this.description,
                        code: this.code,
                        course: this.course,
                        date: this.date,
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.getCodes();
                    }).catch((error)=>{
                        toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }
            }
        }
    }
</script>


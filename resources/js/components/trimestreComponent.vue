<template>
    <div class="back container-fluid">
        <div class="card">
            <div class="card-header fondo">
                <h4>Trimestres</h4>
            </div>
            <div class="card-body">
                <button type="button" class="btn btn-primary float-left mt-3 mb-3" data-toggle="modal" data-target="#exampleModal">
                    Crear
                </button>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(trim, key) in trimestres"  :key="key">
                            <td>{{trim.nombre}}</td>
                            <td>
                                <button class="btn btn-primary" v-on:click="getQuaterly(trim)">Editar</button>
                                <button class="btn btn-danger" v-on:click="deleteQuaterly(trim.id)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Trimestres</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="cleanData">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Período</label>
                            <input type="text" name="name" id="name" class="form-control" v-model="nombre"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="cleanData">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveQuaterly">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            trimestres:[],
            nombre:"",
            id_quaterly:"",
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            axios.get('/trimestres').then((response)=>{
                this.trimestres = response.data
            })
        },
        saveQuaterly(){
            if(this.id_quaterly===""){
                axios.post('/trimestres',{
                    nombre: this.nombre
                }).then((response)=>{
                    toastr.success(response.data);
                    $('#exampleModal').modal('hide');
                    this.cleanData();
                    this.getData();
                }).catch((error)=>{
                    toastr.info("Intenta de nuevo mas tarde");
                    console.log(error.data)
                })
            }else{
                axios.put(`/trimestres/${this.id_quaterly}`,{
                    nombre: this.nombre
                }).then((response)=>{
                    toastr.success(response.data);
                    $('#exampleModal').modal('hide');
                    this.cleanData();
                    this.getData();
                }).catch((error)=>{
                    toastr.info("Intenta de nuevo mas tarde");
                    console.log(error.data)
                })
            }
        },
        getQuaterly(data){
            this.id_quaterly = data.id;
            this.nombre= data.nombre;
            $('#exampleModal').modal('show');
        },
        deleteQuaterly(id){
            if(window.confirm('Desea Eliminar este Trimestre?')){
                axios.delete(`/trimestres/${id}`).then((response)=>{
                    toastr.success(response.data);
                    this.getData();
                }).catch((error)=>{
                    toastr.info("Intenta de nuevo mas tarde");
                    console.log(error.data);
                })
            }
        },
        cleanData(){
            this.nombre= "";
            this.id_quaterly="";
        }
    },
};
</script>
<style></style>

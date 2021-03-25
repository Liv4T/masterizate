<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="text-center card-header fondo">
                        Legislación
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#modalCreate">Crear</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>Legislación</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(data, id) in legislationData" :key="id">
                                <tr>
                                    <td>{{data.legislation}}</td>
                                    <td>                                    
                                        <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#modalEdit" v-on:click="edit(data)">Editar</button>
                                        <button class="btn btn-danger btn-xs" v-on:click="deleteLegislation(data.id)">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal crear Legislación-->
        <div class="modal fade" id="modalCreate" tabindex="-1" role="dialog" aria-labelledby="modalCreateLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCreateLabel">Creación de Legislación</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Legislación</label>
                            <textarea v-model="legislation" class="form-control"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="createLegislation()">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Editar Legislación-->
        <div class="modal fade" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="modalEditLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalEditLabel">Editar Legislación</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Legislación</label>
                             <textarea v-model="legislationToEdit" class="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="editLegislation()">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['user'],
        data() {
            return {
                legislation: "",
                legislationData:[],
                legislationToEdit:"",
                idLegislation: "",
            }
        },
        mounted(){
            this.getLegislation();
        },
        methods: {
            getLegislation(){
                axios.get('/getLegislation').then((response)=>{
                    this.legislationData = response.data
                }).catch((error)=>{
                    console.log(error);
                })
            },
            createLegislation() {
                axios.post('/schoolGobernment',{legislation: this.legislation, user_id: this.user.id}).then(() => {
                    toastr.success("Legislación creada");
                    $("#modalCreate").modal("hide");
                    this.getLegislation();
                }).catch(() => {
                    toast.danger("Intentalo de nuevo mas tarde");
                })
            },
            edit(data){
                this.idLegislation = data.id;
                this.legislationToEdit = data.legislation;
            },
            editLegislation(){
                axios.put(`/schoolGobernment/${this.idLegislation}`,{legislation: this.legislationToEdit}).then(() => {
                    toastr.success("Legislación Actualizada");
                    $("#modalEdit").modal("hide");
                    this.getLegislation();
                }).catch((error) => {
                    console.log(error)
                    toast.danger("Intentalo de nuevo mas tarde");
                })
            },
            deleteLegislation(id){
                let confirmToDelete = confirm("Desea eliminar el dato?");
                if (confirmToDelete == true) {
                    axios.delete(`schoolGobernment/${id}`).then((response)=>{
                        toastr.success(response.data);
                        this.getLegislation();
                    }).catch((error)=>{
                        console.log(error);
                        toastr.error("Intentalo de nuevo mas tarde")
                    })
                }
            }
        }
    }

</script>

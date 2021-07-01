<template>
    <div>
        <div id="crud" class="row justify-content-center">
            <div class="col-sm-10">
                <div class="custom-card">
                    <h3 class="card-header fondo text-center">Asistencias</h3>
                    
                    <button type="button" class="btn btn-primary mt-2" data-toggle="modal" data-target="#motiveModal">
                        Crear Asistencia
                    </button>
                    
                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped text-center">
                            <thead>
                                <tr>
                                    <th>Motivo</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(data, key) in motives" :key="key">
                                <tr>
                                    <td>
                                        {{ data.motive }}
                                    </td> 
                                    <td>
                                        <button class="btn btn-primary" v-on:click="editMotive(data)">Editar</button>
                                        <button class="btn btn-danger" v-on:click="deleteMotive(data.id)">Eliminar</button>
                                    </td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="motiveModal" tabindex="-1" role="dialog" aria-labelledby="motiveModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="motiveModalLabel">Motivo de Inasistencia</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="CleanData">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="motive">Motivo</label>
                            <input id="motive" type="text" class="form-control" v-model="saveMotiveInput">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-on:click="CleanData">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveMotive()">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "toastr/toastr.scss";
export default {
    data() {
        return {
            motives:[],
            saveMotiveInput:"",
            idToUpdate:null,
        };
    },
    mounted() {
        this.getMotives();
    },
    methods: {
        getMotives() {
            axios.get('getMotives').then(response => {
                this.motives = response.data;
            });
        },

        CleanData(){
            this.saveMotiveInput = '';
            this.idToUpdate = '';
            $("#motiveModal").modal('hide');
        },

        saveMotive(){
            if(this.idToUpdate == null){
                axios.post('motiveAssistants',{
                    motive: this.saveMotiveInput,
                }).then((response)=>{
                    toastr.success(response.data);
                    this.getMotives();
                    this.CleanData();
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error)
                });
            }else{
                axios.put(`motiveAssistants/${this.idToUpdate}`,{
                    motive: this.saveMotiveInput,
                }).then((response)=>{
                    toastr.success(response.data);                    
                    this.getMotives();
                    this.CleanData();
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error)
                });
            }
        },

        editMotive(data){
            this.idToUpdate = data.id;
            this.saveMotiveInput = data.motive;
            $('#motiveModal').modal('show');
        },

        deleteMotive(id){
            if(window.confirm('Está seguro de eliminar este dato?')){
                axios.delete(`motiveAssistants/${id}`).then((response)=>{
                    toastr.success(response.data);
                    this.getMotives();                    
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error);
                });
            }
        }
    }
};
</script>

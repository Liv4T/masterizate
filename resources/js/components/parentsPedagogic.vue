<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header fondo text-center mb-3">
                    <h4>Académico</h4>
                </div>
                <div class="card">
                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <thead>
                                <tr>
                                    <th>Actividad Pedagogica</th>
                                    <th>Fecha / hora de Salida</th>
                                    <th>Fecha / hora de LLegada</th>
                                    <th>Estudiante Invitado</th>
                                    <th>Descripción</th>
                                    <th>Permiso</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(pedag, key) in getPermission" :key="key">
                                <tr>
                                    <td>{{pedag.pedagogical_activity}}</td>
                                    <td>{{pedag.departure_time}}</td>
                                    <td>{{pedag.time_arrival}}</td>
                                    <td>{{pedag.name_student}}</td>
                                    <td>{{pedag.description}}</td>
                                    <th>{{pedag.permission === true ? 'Permitido' : 'Sin Permiso'}}</th>
                                    <td>
                                        <button class="btn btn-primary" v-on:click="aprobalReject(pedag)">Aprobar / Rechazar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Permiso de Salida</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">Actividad: </label>
                        <br>
                        <strong>{{pedagogical_activity}}</strong>
                    </div>

                    <div class="form-group">
                        <label for="">Fecha / Hora Salida: </label>
                        <br>
                        <strong>{{departure_time}}</strong>
                    </div>

                    <div class="form-group">
                        <label for="">Fecha / Hora Llegada: </label>
                        <br>
                        <strong>{{time_arrival}}</strong>
                    </div>

                    <div class="form-group">
                        <label for="">Descripción: </label>
                        <br>
                        <strong>{{description}}</strong>
                    </div>

                    <div class="form-group">
                        <label for="">Permiso</label>
                        <br>
  
                        <input type="radio" name="gender" :value="true" v-model="permission">
                        <label>Permitir</label>
                        <input type="radio" name="gender" :value="false" v-model="permission">
                        <label>Denegar</label><br>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="savePermission">Guardar</button>
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
                getPermission:[],
                pedagogical_activity:'',
                departure_time:'',
                time_arrival:'',
                description:'',
                permission:null,
                id_to_update:''
            }
        },
        mounted() {
            this.getPedagogics();
        },
        
        methods: {
            getPedagogics() {
                axios.get('/getPedagogicalToAprove').then((response) => {
                    let getPermission = response.data;
                    getPermission.forEach((element)=>{
                        axios.get(`permissionPedagogics/${element.id_student}`).then((response)=>{
                            if(response.data.permission !== undefined){
                                this.getPermission.push({
                                    id_to_update: response.data.id,
                                    pedagogical_activity: element.pedagogical_activity,
                                    departure_time: element.departure_time,
                                    time_arrival: element.time_arrival,
                                    description: element.description,
                                    pedagogical_id: element.pedagogical_id,
                                    id_student: element.id_student,
                                    name_student: element.name_student,
                                    parent_id: element.parent_id,
                                    permission: response.data.permission === "1" ? true : false
                                })
                            }else{
                                this.getPermission.push({
                                    pedagogical_activity: element.pedagogical_activity,
                                    departure_time: element.departure_time,
                                    time_arrival: element.time_arrival,
                                    description: element.description,
                                    pedagogical_id: element.pedagogical_id,
                                    id_student: element.id_student,
                                    name_student: element.name_student,
                                    parent_id: element.parent_id
                                })
                            }
                        })
                    })
                }) 
            },
            aprobalReject(data){
                this.id_to_update= data.id_to_update,
                //datos por defecto en el modal
                this.pedagogical_activity = data.pedagogical_activity,
                this.departure_time = data.departure_time,
                this.time_arrival= data.time_arrival,
                this.description = data.description,

                //Datos ids para guardar en tabla
                this.pedagogical_id = data.pedagogical_id
                this.id_student = data.id_student
                this.parent_id = data.parent_id
                this.permission = data.permission
                $('#exampleModal').modal('show');
            },
            savePermission(){
                if(this.id_to_update){
                    axios.put(`/permissionPedagogics/${this.id_to_update}`,{
                        pedagogical_activity:this.pedagogical_activity,
                        pedagogical_id: this.pedagogical_id,
                        id_student:this.id_student,
                        parent_id: this.parent_id,
                        permission: this.permission
                    }).then((response)=>{
                        toastr.success(response.data);
                        window.location = '/parentsPedagogic';
                    }).catch((error)=>{
                        toastr.info('Ups, algo ha sucedido, intenta mas tarde');
                        console.log(error)
                    })
                }else{
                    axios.post('/permissionPedagogics',{
                        pedagogical_activity:this.pedagogical_activity,
                        pedagogical_id: this.pedagogical_id,
                        id_student:this.id_student,
                        parent_id: this.parent_id,
                        permission: this.permission
                    }).then((response)=>{
                        toastr.success(response.data);
                        window.location= '/parentsPedagogic';
                    }).catch((error)=>{
                        toastr.info('Ups, algo ha sucedido, intenta mas tarde');
                        console.log(error)
                    })
                }
            }
        }
    }

</script>

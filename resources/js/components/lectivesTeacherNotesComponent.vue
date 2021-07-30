<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header fondo mb-2 text-center">
                    <h3>Notas De Electiva</h3>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="card" v-for="(clas, key) in clases" :key="key">
                        <div class="card-header" :id="`headingOne${key}`">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" v-on:click="showActivities(clas)" type="button" data-toggle="collapse" :data-target="`#collapseOne${key}`" aria-expanded="true" :aria-controls="`collapseOne${key}`">
                                    {{clas.lective.name}}
                                </button>
                            </h2>
                        </div>
                        <div :id="`collapseOne${key}`" class="collapse" :aria-labelledby="`headingOne${key}`" data-parent="#accordionExample">
                            <div class="card-body">
                                <table class="table table-responsive table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nombre de Estudiante</th>
                                            <th>Nombre de Clase</th>
                                            <th>Nombre de Actividad</th>
                                            <th>Pregunta de Actividad</th>
                                            <th>Respuesta de Estudiante</th>
                                            <th>Fecha de Respuesta</th>
                                            <th>Calificación</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(actives, key) in activsToCalificate" :key="key">
                                            <td>{{actives.student_name+' '+actives.student_last_name}}</td>
                                            <td>{{actives.lective_class_name}}</td>
                                            <td>{{actives.lective_activity_name}}</td>
                                            <td>{{actives.lective_activity_question_question}}</td>
                                            <td>{{actives.lective_activity_question_answer_response}}</td>
                                            <td>{{actives.lective_activity_question_answer_created_at}}</td>
                                            <td>{{actives.calification ? actives.calification : '-'}}</td>
                                            <td>
                                                <button v-on:click="showModal(actives)" class="btn btn-primary">Calificar</button>                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Calificación </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">                                            
                        <p><strong>Estudiante: </strong>{{actives.student_name+' '+actives.student_last_name}}</p>
                        <p><strong>Clase: </strong>{{actives.lective_class_name}}</p>
                        <p><strong>Actividad: </strong>{{actives.lective_activity_name}}</p>
                        <p><strong>Pregunta: </strong>{{actives.lective_activity_question_question}}</p>
                        <p><strong>Respuesta: </strong>{{actives.lective_activity_question_answer_response}}</p>
                        <p><strong>Respuesta Correcta?: </strong>{{actives.lective_activity_question_answer_is_correct === 'S' ? 'Si' : 'No'}}</p>
                        <p><strong>Fecha de respuesta: </strong>{{actives.lective_activity_question_answer_created_at}}</p>

                        <label for="note"><strong>Calificación</strong></label>
                        <input type="number" class="form-control" name="note" v-model="calification"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveNotes(actives)">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            clases:[],
            activsToCalificate:[],
            id_to_update:null,
            actives:{},
            calification:""
        }
    },

    mounted(){
        this.getData();
    },

    methods:{
        getData(){
            axios.get("/api/lectives").then((response) => {
                this.clases =response.data
            });
        },

        showActivities(data){
            axios.get(`/getLectivesActivitiesCal/${data.id_planification}`).then((response)=>{
                this.activsToCalificate = response.data;
            });
        },

        showModal(data){
            this.actives = data;
            this.calification = data.calification;
            this.id_to_update = data.calification_lectives_activities_id ? data.calification_lectives_activities_id : null;
            $("#exampleModal").modal("show");
        },

        saveNotes(data){
            if(this.id_to_update != null){
                axios.put(`/CalLectivesActivities/${this.id_to_update}`,{
                    id_lective_planification: data.lective_planification_id,
                    id_lective_activity: data.lective_activity_id,
                    id_class: data.lective_class_id,
                    id_student: data.student_id,
                    calification: this.calification,
                }).then((response)=>{
                    toastr.success(response.data);
                }).catch((error)=>{
                    toastr.info("Hay un error");
                    console.log(error.data);
                })
                this.id_to_update = null
            }else{
                axios.post(`/CalLectivesActivities`,{
                    id_lective_planification: data.lective_planification_id,
                    id_lective_activity: data.lective_activity_id,
                    id_class: data.lective_class_id,
                    id_student: data.student_id,
                    calification: this.calification,
                }).then((response)=>{
                    toastr.success(response.data);
                }).catch((error)=>{
                    toastr.info("Hay un error");
                    console.log(error.data);
                })
            }
            location.reload();
            $("#exampleModal").modal("hide");
        }
    }
}
</script>
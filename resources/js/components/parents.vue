<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div id="accordion">
                    <div class="card" v-for="(studentClass, key) in studentClass" :key="key">
                        <div class="card-header fondo" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" style="color:white" data-toggle="collapse" :data-target="'#'+key | upper"
                                    aria-expanded="true" :aria-controls="key | upper">
                                    {{key}}
                                </button>
                            </h5>
                        </div>

                        <div :id="key | upper" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordion">
                            <div class="card-body">
                                <table class="table table-responsive-xl table-hover table-striped center">
                                    <thead>
                                        <tr>
                                            <th>Nombre de la materia</th>
                                            <th>Notas</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(studentClass, id) in studentClass" :key="id">
                                        <tr>
                                            <td>{{studentClass.text}}</td>
                                            <td>
                                                <div>
                                                    <button type="button" class="btn btn-warning"
                                                        v-on:click="getNotes(studentClass.id_student,studentClass.id_area,studentClass.id_classroom)">
                                                        Ver
                                                    </button>
                                                </div>
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


        <!-- Modal de Notas-->
        <div class="modal fade" id="notesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Notas</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <thead>
                                <tr>
                                    <th>Actividad</th>
                                    <th>Progreso</th>
                                    <th>Nota</th>
                                </tr>
                            </thead>
                            <tbody v-for="(notes, id) in notes" :key="id">
                                <tr>
                                    <td>{{notes.driving_question}}</td>
                                    <td v-if="notes.score>-1">{{notes.progress}}%</td>
                                    <td v-else>-</td>
                                    <td v-if="notes.score>-1">{{notes.score}}/5</td>
                                    <td v-else>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal de Notas-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                notes: [],
                studentClass: [],
                inData: false,
            }
        },
        mounted() {
            this.getClasses();
        },
        filters: {
            upper: function (value) {
                return value.trim().replace(/\s/g,"");
            }
        },
        methods: {
            getClasses() {
                axios.get('/getAreas').then((response) => {
                    console.log(response.data)
                    this.studentClass = response.data;
                }).catch((error) => {
                    console.log(error);
                })
            },
            getNotes(id_student, id_area, id_classroom) {
                return new Promise((resolve, reject) => {
                    axios.get(
                        `/api/teacher/area/${id_area}/classroom/${id_classroom}/student/${id_student}/module`
                    ).then(response => {
                        this.notes = response.data;
                        $("#notesModal").modal("show");
                        resolve();
                    }, e => reject(e));
                })
            }
        }
    }

</script>

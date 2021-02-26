<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center" v-for="(data, id) in data" :key="id">
                    <h3 class="card-header fondo">{{data.name}}</h3>
                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <thead>
                                <tr>
                                    <th>Nombre de la materia</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(material, id) in data.materials" :key="id">
                                <tr>
                                    <td>{{material.name}}</td>
                                    <td>
                                        <div>
                                            <button type="button" class="btn btn-warning" data-toggle="modal"
                                                data-target="#notesModal" v-on:click="getNotes(material.note)">
                                                Notas
                                            </button>
                                            <button type="button" class="btn btn-warning" data-toggle="modal"
                                                data-target="#observationModal" v-on:click="getObservation(material.observation)">
                                                Observación
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
                                    <th>Nota</th>
                                    <th>Puntaje</th>
                                </tr>
                            </thead>
                            <tbody v-for="(notes, id) in notes" :key="id">
                                <tr>
                                    <td>{{notes.name}}</td>
                                    <td>{{notes.note}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal de Notas-->

        <!-- Modal de Observación-->
        <div class="modal fade" id="observationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Observaciónes</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>{{observationNote}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal de Observación-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                notes: [],
                observationNote:"",
                inData: false,
                data: [{
                    id: 1,
                    name: "Estudiante 1",
                    materials: [{
                        id: 1,
                        name: "Matematicas",
                        id_student: 1,
                        note: [{
                            name: "Comportamiento",
                            note:35
                        },{
                            name: "Rendimiento",
                            note:35
                        },{
                            name: "Nota Final",
                            note:35
                        }],
                        observation: "Sigue Mejorando"

                    }, {
                        id: 2,
                        name: "Español",
                        id_student: 1,
                        note: [{
                            name: "Comportamiento",
                            note:40
                        },{
                            name: "Rendimiento",
                            note:40
                        },{
                            name: "Nota Final",
                            note:40
                        }],
                        observation: "Vas Bien"
                    }, {
                        id: 3,
                        name: "Fisica",
                        id_student: 1,
                        note: [{
                            name: "Comportamiento",
                            note:50
                        },{
                            name: "Rendimiento",
                            note:50
                        },{
                            name: "Nota Final",
                            note:50
                        }],
                        observation: "Excelente"
                    }]
                }, {
                    id: 2,
                    name: "Estudiante 2",
                    materials: [{
                        id: 1,
                        name: "Ed fisica",
                        id_student: 2,
                        note: [{
                            name: "Comportamiento",
                            note:35
                        },{
                            name: "Rendimiento",
                            note:35
                        },{
                            name: "Nota Final",
                            note:35
                        }],
                        observation: "Excelente"
                    }, {
                        id: 2,
                        name: "Fisica",
                        id_student: 2,
                        note: [{
                            name: "Comportamiento",
                            note:45
                        },{
                            name: "Rendimiento",
                            note:45
                        },{
                            name: "Nota Final",
                            note:45
                        }],
                        observation: "Vas bien",
                    }, {
                        id: 3,
                        name: "Quimica",
                        id_student: 2,
                        note: [{
                            name: "Comportamiento",
                            note:46
                        },{
                            name: "Rendimiento",
                            note:46
                        },{
                            name: "Nota Final",
                            note:46
                        }],
                        observation: "Sigue mejorando"
                    }]
                }]
            }
        },
        mounted(){},
        methods: {
            getNotes(notes){
                this.notes = notes;
            },
            getObservation(observation){
                this.observationNote = observation
            }
        }
    }

</script>

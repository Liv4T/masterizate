<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="card mb-3">
                    <div class="card-header fondo text-center">
                        <h3>Asistencias</h3>
                    </div>
                </div>
                <button class="btn btn-primary mt-3 mb-3" data-toggle="modal" data-target="#createAssistants">Crear Asistencia</button>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-stripped table-hover">
                                <thead>
                                    <tr>
                                        <th>Estudiante</th>
                                        <th>Fecha</th>
                                        <th>Asistencia</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Brayan</td>
                                        <td>2021 - 04- 14</td>
                                        <td>Asistencia confirmada</td>
                                        <td>
                                            <button class="btn btn-primary">Actualizar</button>
                                            <button class="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="createAssistants" tabindex="-1" role="dialog" aria-labelledby="createAssistantsLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="createAssistantsLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="students">Estudiante</label>

                            <multiselect v-model="student" :options="studentsOption" :multiple="true"
                                :close-on-select="false" :clear-on-select="false"
                                :preserve-search="true" placeholder="Seleccione una o varias"
                                label="text" track-by="id" :preselect-first="true">
                                    <template slot="selection" slot-scope="{ values, isOpen }">
                                        <span
                                            class="multiselect__single"
                                            v-if="values.length &amp;&amp; !isOpen">{{ values.length }}
                                                opciones
                                                selecionadas
                                            </span>
                                    </template>
                            </multiselect>
                        </div>

                        <div class="form-group">
                            <label for="flexRadioDefault1">Asistió</label>
                            <input class="form-check-input ml-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="assistance">
                        </div>

                        <div class="form-group">
                            <label for="flexRadioDefault2">Excusa</label>
                            <input class="form-check-input ml-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="excuse">
                        </div>

                        <div class="form-group">
                            <label for="flexRadioDefault3">Otro Motivo</label>
                            <input class="form-check-input ml-3" type="radio" name="flexRadioDefault" id="flexRadioDefault3" v-model="other_motive">
                            {{other_motive}}
                            <input v-if="other_motive === true" type="text" class="form-control" v-model="motive"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveAssistants">Save changes</button>
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
        props: ["user"],
        data(){
            return{
                studentsOption:[],
                student:{},
                assistance: false,
                excuse: false,
                other_motive: false,
                motive:''
            }
        },
        methods:{
            getAssistants(){
                axios.get('/getAssistants').then((response)=>{
                    this.assistants = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            saveAssistants(){
                let assistance = $('input[id="flexRadioDefault1"]:checked').val();
                let excuse_check = $('input[id="flexRadioDefault2"]:checked').val();
                let other_motive_check = $('input[id="flexRadioDefault3"]:checked').val();
                console.log({
                    // student_id:this.student_id,
                    // teacher_id: this.user.id,
                    course: this.course,
                    assistance: assistance === 'on' ? true: false,
                    excuse: excuse_check === 'on' ? true: false,
                    other_motive: other_motive_check  === 'on' ? true: false,
                    excuse: this.excuse,
                })
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
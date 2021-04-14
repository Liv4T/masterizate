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
                                        <th>Curso</th>
                                        <th>Asistencia</th>
                                        <th>Fecha</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(assistant, key) in assistants" :key="key">
                                        <td>{{assistant.student_name}}</td>
                                        <td>{{assistant.course}}</td>
                                        <td v-if="assistant.assistance === 1">Asistencia Confirmada</td>

                                        <td v-else-if="assistant.excuse === 1">Excusa Presentada</td>

                                        <td v-else-if="assistant.other_motive === 1">{{assistant.motive}}</td>
                                        <td>{{assistant.created_at.date}}</td>
                                        <td>
                                            <button class="btn btn-primary" v-on:click="updateData(assistant)">Actualizar</button>
                                            <button class="btn btn-danger" v-on:click="deleteData(assistant.id)">Eliminar</button>
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
                        <h5 class="modal-title" id="createAssistantsLabel">Asistencia</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="students">Areas</label>

                            <multiselect v-model="areaSave" :options="area_option" :multiple="false"
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
                        <button class="btn btn-primary" v-on:click="getStudents">Consultar Estudiantes</button>
                        <div v-if="studentsOption.length > 0" class="form-group">
                            <label for="students">Estudiante</label>

                            <multiselect v-model="student" :options="studentsOption" :multiple="false"
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
                            <input class="form-check-input ml-3" :value="assistance" v-on:click="activeMotive" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        </div>

                        <div class="form-group">
                            <label for="flexRadioDefault2">Excusa</label>
                            <input class="form-check-input ml-3" :value="excuse" v-on:click="activeMotive" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        </div>

                        <div class="form-group">
                            <label for="flexRadioDefault3">Otro Motivo</label>
                            <input class="form-check-input ml-3" :value="other_motive" v-on:click="activeMotive" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                            <input v-if="other_motive === true" type="text" class="form-control" v-model="motive"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveAssistants">Guardar Asistencia</button>
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
                motive:'',
                other_motive:false,
                assistance: false,
                excuse: false,
                other_motive: false,
                area_option:[],
                areaSave:{},
                assistants:[]
            }
        },
        mounted(){
            this.getAssistants();
            axios.get('/GetArearByUser').then(response => {
                this.areas = response.data;
                if(this.areas.length>0)
                {
                    this.area_option=this.areas;
                }
            });
        },
        methods:{
            getAssistants(){
                axios.get('/getAssistants').then((response)=>{
                    this.assistants = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            getStudents()
            {
                this.studentsOption=[]
                    axios.get(`/api/teacher/area/${this.areaSave.id}/classroom/${this.areaSave.id_classroom}/student`).then(response => {
                        let students = response.data;
                        students.forEach((student)=>{
                            this.studentsOption.push({
                                id: student.user_id,
                                text: student.user_name
                            })
                        })
                    });
            },
            activeMotive(){
                let other_motive_check = $('input[id="flexRadioDefault3"]:checked').val();
                let assistance = $('input[id="flexRadioDefault1"]:checked').val();
                let excuse = $('input[id="flexRadioDefault2"]:checked').val();

                this.assistance = assistance === 'on' ? true : false,
                this.excuse = excuse  === 'on' ? true: false,
                this.other_motive =  other_motive_check  === 'on' ? true: false;

                if(this.other_motive === false){
                    this.motive = '';
                }
            },
            saveAssistants(){
                axios.post('assistance',{
                    id_student:this.student.id,
                    id_teacher: this.user.id,
                    assistance: this.assistance,
                    excuse: this.excuse,
                    other_motive: this.other_motive,
                    motive: this.motive,
                    course: this.areaSave.text
                }).then((response)=>{
                    toastr.success(response.data);
                    this.getAssistants();
                }).catch((error) => {
                    toastr.info('Ha ocurrido algo, Intenta de nuevo mas tarde');
                    console.log(error);
                })
            },
            updateData(data){
                this.student.id = data.id_student,
                this.assistance = data.assistance === 1 ? 'on' : 'off',
                this.excuse = data.excuse === 1 ? 'on' : 'off',
                this.other_motive = data.other_motive === 1 ? 'on' : 'off',
                this.motive = data.motive,
                this.course = data.course

                $('#createAssistants').modal('show');
            },
            deleteData(id){
                axios.delete(`assistance/${id}`).then((response)=>{
                    toastr.success(response.data)
                }).catch((error)=>{
                    toastr.info('No se ha podido eliminar el dato, Intenta de nuevo mas tarde');
                    console.log(error);
                })
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
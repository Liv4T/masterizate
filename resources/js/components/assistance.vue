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
                            <input type="text" class="form-control" placeholder="Buscar Por Nombre del Estudiante" v-model="search_filter">
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
                                <tbody class="card-header" v-for="(assistant, key) in assistants" :key="key"> 
                                    <tr v-if="search_filter =='' || filterNameStudent(assistant.student_name)">
                                        <td>{{assistant.student_name}}</td>
                                        <td>{{assistant.course}}</td>
                                        <td v-if="assistant.assistance === 1">Asistencia Confirmada</td>
                                        <td v-else-if="assistant.excuse === 1">Excusa Presentada</td>

                                        <td v-else-if="assistant.other_motive === 1">{{assistant.motive}}</td>
                                        <td>{{assistant.created_at.date}}</td>
                                        <td>
                                            <button class="btn btn-primary" v-on:click="updateData(assistant.id)">Actualizar</button>
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
                            <div v-if="updated === false">
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
                                <button class="btn btn-primary mt-2" v-on:click="getStudents">Consultar Estudiantes</button>
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
                            </div>
                            <div v-else>
                                <p>Estudiante: {{student_name}}</p>
                                <br>
                                <p>Curso / Salon: {{course_registred}}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="flexRadioDefault1">Asistió</label>
                            <input class="form-check-input ml-3"  v-on:click="activeMotive" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        </div>

                        <div class="form-group">
                            <label for="flexRadioDefault2">Excusa</label>
                            <input class="form-check-input ml-3" v-on:click="activeMotive" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        </div>

                        <div class="form-group">
                            <label for="flexRadioDefault3">Otro Motivo</label>
                            <input class="form-check-input ml-3" v-on:click="activeMotive" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
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
                area_option:[],
                areaSave:{},
                assistants:[],
                updated:false,
                student_name:'',
                course_registred:'',
                id_to_update: '',
                search_filter: ''
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
                if(this.updated === false){
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
                }else if(this.updated === true){
                    axios.put(`assistance/${this.id_to_update}`,{
                        assistance: this.assistance,
                        excuse: this.excuse,
                        other_motive: this.other_motive,
                        motive: this.motive
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.getAssistants();
                        this.updated = false;
                        $('#createAssistants').modal('hide');
                    }).catch((error) => {
                        toastr.info('Ha ocurrido algo, Intenta de nuevo mas tarde');
                        console.log(error);
                    })
                }
            },
            updateData(id){
                this.id_to_update = id;
                axios.get(`assistance/${id}`).then((response)=>{
                    let assistant = response.data;
                    assistant.forEach((assist)=>{
                        this.student_name = assist.student_name;
                        if(assist.assistance === 1){
                            this.assistance = true;
                            $('input[id="flexRadioDefault1"]').prop("checked", true) 
                        }else{
                            this.assistance = false;
                        }

                        if(assist.excuse === 1){
                            this.excuse = true;    
                            $('input[id="flexRadioDefault2"]').prop("checked", true)
                        }else{
                            this.excuse = false;
                        }

                        if(assist.other_motive === 1){
                            this.other_motive = true;
                            $('input[id="flexRadioDefault3"]').prop("checked", true)
                        }
                        else{
                            this.other_motive = false;
                        }

                        this.motive = assist.motive,
                        this.course_registred = assist.course
                    })
                })
                this.updated = true;
                $('#createAssistants').modal('show');
            },
            deleteData(id){
                axios.delete(`assistance/${id}`).then((response)=>{
                    toastr.success(response.data);
                    this.getAssistants();
                }).catch((error)=>{
                    toastr.info('No se ha podido eliminar el dato, Intenta de nuevo mas tarde');
                    console.log(error);
                })
            },
            filterNameStudent(studentName){
                return studentName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            },
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
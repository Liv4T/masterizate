<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="card mb-3">
                    <div class="card-header fondo text-center">
                        <h3>Efectividad</h3>
                    </div>
                </div>
                <button class="btn btn-primary mt-3 mb-3" data-toggle="modal" data-target="#createEffectiveness">Crear Efectividad</button>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <input type="text" class="form-control" placeholder="Buscar Por Nombre del Estudiante" v-model="search_filter">
                            <table class="table table-stripped table-hover">
                                <thead>
                                    <tr>
                                        <th>Estudiante</th>
                                        <th>Curso</th>
                                        <th>Efectividad</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(effectiveness, key) in dataEffectiveness" :key="key" class="card-header"> 
                                    <tr v-if="search_filter =='' || filterNameStudent(effectiveness.student_name)">
                                        <td>{{effectiveness.student_name}}</td>
                                        <td>{{effectiveness.course}}</td>
                                        <td>{{effectiveness.effectiveness}}</td>
                                        <td>
                                            <button class="btn btn-primary" v-on:click="editEffectiveness(effectiveness.id)">Actualizar</button>
                                            <button class="btn btn-danger" v-on:click="deleteEffectiveness(effectiveness.id)">Eliminar</button>
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
        <div class="modal fade" id="createEffectiveness" tabindex="-1" role="dialog" aria-labelledby="createEffectivenessLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="createEffectivenessLabel">Efectividad</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="students">Estudiantes con asistencias confirmadas</label>
                            <multiselect v-model="saveStudent" :options="dataToCreateEffectiveness" :multiple="false"
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
                            <label for="effectiveness">Efectividad</label>
                            <input type="number" v-model="score_effectiveness" name="effectiveness" class="form-control"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveEffectiveness">Guardar Efectividad</button>
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
        data(){
            return{
                dataEffectiveness:[],
                dataToCreateEffectiveness:[],
                search_filter:'',
                saveStudent: [],
                score_effectiveness:'',
                update: false,
                id_to_update: '',
            }
        },
        mounted(){
            this.getData();  
        },
        methods:{
            getData(){
                this.getAssistants();
                axios.get('getEffectiveness').then((response)=>{
                    this.dataEffectiveness = response.data;
                })
            },
            getAssistants(){
                axios.get('/getAssistants').then((response)=>{
                    let assistants = response.data;
                    assistants.forEach(element => {
                        if(element.assistance === 1){
                            this.dataToCreateEffectiveness.push({
                                id:element.id,
                                id_student: element.id_student,
                                course: element.course,
                                text: element.student_name+' '+element.course,
                            });
                        }
                    });
                }).catch((error)=>{
                    console.log(error);
                })
            },
            saveEffectiveness(){
                if(this.update === false){
                    axios.post('effectiveness',{
                        student_id: this.saveStudent.id_student,
                        course: this.saveStudent.course,
                        score_effectiveness: this.score_effectiveness
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.saveStudent = {};
                        this.score_effectiveness = '';
                        this.getData();
                        $('#createEffectiveness').modal('hide');
                    }).catch((error)=>{
                        toastr.info('Algo anda mal, intenta de nuevo mas tarde');
                        console.log(error);
                    })
                }else if(this.update === true){
                    axios.put(`effectiveness/${this.id_to_update}`,{
                        student_id: this.saveStudent.id_student,
                        course: this.saveStudent.course,
                        score_effectiveness: this.score_effectiveness
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.saveStudent = {};
                        this.score_effectiveness = '';
                        this.update = false;
                        this.id_to_update = '';
                        this.getData();
                        $('#createEffectiveness').modal('hide');
                    }).catch((error)=>{
                        toastr.info('Algo anda mal, intenta de nuevo mas tarde');
                        console.log(error);
                    })
                }
                
            },
            editEffectiveness(id){
                axios.get(`effectiveness/${id}`).then((response)=>{
                    this.saveStudent.id_student = response.data.student_id,
                    this.saveStudent.course = response.data.course,
                    this.score_effectiveness = response.data.score_effectiveness,
                    this.update = true;
                    this.id_to_update = id
                    $('#createEffectiveness').modal('show');
                })
            },
            deleteEffectiveness(id){
                axios.delete(`effectiveness/${id}`).then((response)=>{
                    toastr.success(response.data);
                    this.getData();
                }).catch((error) =>{
                    toastr.info('Algo anda Mal, intenta de nuevo mas tarde');
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
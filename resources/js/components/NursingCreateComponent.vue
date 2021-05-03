<template>
    <div class="modal fade" id="modalNursingCreate" tabindex="-1" role="dialog" aria-labelledby="modalNursingCreateLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalNursingCreateLabel">Creación de Registro</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">Estudiante</label>
                        <multiselect v-model="saveStudents" :options="studentsOptions" :multiple="false"
                            :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                            placeholder="Seleccione una o varias" label="text" track-by="id"
                            :preselect-first="true">
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
                        <label for="blood_rh">Rh Sanguineo</label>
                        <input type="text" placeholder="Ej: O+" name="blood_rh" class="form-control" v-model="blood_rh"/>
                    </div>

                    <div class="form-group">
                        <label for="alergies">Alergias</label>
                        <input type="text" name="alergies" class="form-control" v-model="alergies"/>
                    </div>

                    <div class="form-group">
                        <label for="diet">Dieta</label>
                        <select name="diet" class="form-control" v-model="diet">
                            <option value="Normal">Normal</option>
                            <option value="Vegetariano">Vegetariano</option>
                            <option value="Dieta">Dieta</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <div v-if="diet === 'Otro' || diet === 'Dieta'">
                            <input type="text" placeholder="Especificar Dieta" name="diet" class="form-control mt-3" v-model="other_diet"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="observation">Observación</label>
                        <textarea name="observation" class="form-control" v-model="observation"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="saveNursing">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'; 
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);

export default {
    components: { 
    },
    data(){
        return{
            getDataFoods:[],
            saveStudents:{},
            studentsOptions:[],
            blood_rh:"",
            alergies:"",
            diet:"",
            other_diet:"",
            observation:""
        }
    },
    mounted(){
        this.getCoursesAndStudents();
    },
    methods:{
        getCoursesAndStudents(){
            axios.get('getCoursesAndStudents').then((response)=>{
                let coursesStudents = response.data;
                const result = _.chain(coursesStudents).groupBy("grade").value();
                    
                const students = Object.values(result);
                students.forEach((element)=>{
                    console.log()
                    element.forEach((el)=>{
                        this.studentsOptions.push({
                            id: el.id_student,
                            id_student: el.id_student,
                            text: `${el.name_student}`+'' +`${el.lastName_student}`,
                            grade: el.grade,
                            id_grade: el.id_grade,
                        }); 
                    })
                })
            })
        },
        saveNursing(){  
            axios.post('nursing',{
                id_student: this.saveStudents.id_student,
                student: this.saveStudents.text,
                id_course: this.saveStudents.id_grade,
                course: this.saveStudents.grade,
                blood_rh: this.blood_rh,
                alergies: this.alergies,
                diet: this.diet === 'Otro' ? this.other_diet : this.diet,
                observation: this.observation
            }).then((response)=>{
                toastr.success(response.data);
                window.location = "/nursing";
            })
        },
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
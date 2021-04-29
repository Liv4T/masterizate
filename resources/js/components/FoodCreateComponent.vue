<template>
    <div class="modal fade" id="modalFoodCreate" tabindex="-1" role="dialog" aria-labelledby="modalFoodCreateLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalFoodCreateLabel">Creación de Alimentos</h5>
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
                        <label for="dieta">Alimento</label>
                        <select class="form-control" name="dieta" v-model="diet">
                            <option value="Normal">
                                Normal
                            </option>
                            <option value="Vegetariano">
                                Vegetariano
                            </option>
                            <option value="otro">
                                Otro
                            </option>
                        </select>

                        <div v-if="diet === 'otro'">
                            <input type="text" class="form-control mt-2" placeholder="Ej: Veganismo" v-model="other_diet"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="observation">Observación</label>
                        <textarea name="observation" class="form-control" v-model="observation"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="saveFood">Save changes</button>
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
            diet:"",
            other_diet: "",
            observation:""
        }
    },
    mounted(){
        this.getCoursesAndStudents();
    },
    methods:{
        getCoursesAndStudents(){
            axios.get('getCoursesAndStudents').then((response)=>{
                let coursesStudents = response.data
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
                            id_classroom: el.id_classroom,
                        }); 
                    })

                })
            })
        },
        saveFood(){
            console.log({
                name_student: this.saveStudents.text,
                diet: this.diet === 'otro' ? this.other_diet : this.diet,
                observation: this.observation,
                id_classroom: this.saveStudents.id_classroom,
                id_course: this.saveStudents.id_grade,
                course: this.saveStudents.grade
            })
        },
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
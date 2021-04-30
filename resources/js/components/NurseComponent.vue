<template>
    <div class="back row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <div class="card-header fondo">
                    <h4>Enfermeria</h4>
                </div>
            </div>
            <button class="mb-4 btn btn-primary" data-toggle="modal" data-target="#modalNursingCreate">Crear Registro</button>
            <div id="accordion">
                <div class="card" v-for="(nurse, key) in nurseData" :key="key">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse${key}`" aria-expanded="true" :aria-controls="`collapse${key}`">
                        {{key}}
                        </button>
                    </h5>
                    </div>

                    <div :id="`collapse${key}`" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Estudiante</th>
                                    <th>RH Sanguineo</th>
                                    <th>Alergias</th>
                                    <th>Dieta</th>
                                    <th>Observación</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(nurs, key) in nurse" :key="key">
                                    <td>{{nurs.student}}</td>
                                    <td>{{nurs.blood_rh}}</td>
                                    <td>{{nurs.alergies}}</td>
                                    <td>{{nurs.diet}}</td>
                                    <td>{{nurs.observation}}</td>
                                    <td>
                                        <button class="btn btn-primary" v-on:click="editDataNurse(nurs)">Editar</button>
                                        <button class="btn btn-danger" v-on:click="deleteData(nurs.id)">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <nurse-create-component></nurse-create-component>
                <nurse-update-component :saveStudents="saveStudents" :blood_rh="blood_rh" :alergies="alergies" :diet="diet" :observation="observation" :id_to_update="id_to_update"></nurse-update-component>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'; 
import nurseCreateComponent from './NursingCreateComponent';
import nurseUpdateComponent from './NursingUpdateComponent';
export default {
    components: { 
        nurseCreateComponent,
        nurseUpdateComponent
    },
    data(){
        return{
            nurseData:[],
            id_to_update:"",
            saveStudents:{},
            blood_rh:"",
            alergies:"",
            diet: "",
            observation: "",
        }
    },
    mounted(){
        this.getNursing();
    },
    methods:{
        getNursing(){
            axios.get('getNursing').then((response)=>{
                let nurseData = response.data
                this.groupData(nurseData)
            })   
        },
        groupData(data){
            const result = _.chain(data).groupBy("course").value();
            this.nurseData = result
        },

        editDataNurse(data){
            this.id_to_update = data.id
            this.saveStudents= {
                id: data.id_student,
                id_student: data.id_student,
                text: `${data.student}`,
                grade: data.course,
                id_grade: data.id_course,
            }
            this.blood_rh = data.blood_rh;
            this.alergies = data.alergies;
            this.diet = data.diet;
            this.observation = data.observation;
            $("#modalNursingUpdate").modal('show');
        },

        deleteData(id){
            if(window.confirm("Realmente deseas Eliminar este dato?")){
                axios.delelte(`nursing/${id}`).then((response)=>{
                    toastr.info(response.data);
                    this.getNursing();
                })
            }
        }
    }
}
</script>
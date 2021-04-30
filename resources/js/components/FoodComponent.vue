<template>
    <div class="back row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <div class="card-header fondo">
                    <h4>Alimentos</h4>
                </div>
            </div>
            <button class="mb-4 btn btn-primary" data-toggle="modal" data-target="#modalFoodCreate">Crear Registro</button>
            <div id="accordion">
                <div class="card" v-for="(food, key) in getDataFoods" :key="key">
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
                                    <th>Dieta</th>
                                    <th>Observación</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(fod, key) in food" :key="key">
                                    <td>{{fod.name_student}}</td>
                                    <td>{{fod.diet}}</td>
                                    <td>{{fod.observation}}</td>
                                    <td>
                                        <button class="btn btn-primary" v-on:click="editFood(fod)">Editar</button>
                                        <button class="btn btn-danger" v-on:click="deleteFood(fod.id)">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <food-create-component></food-create-component>
                <food-update-component :saveStudents="saveStudents" :diet="diet" :other_diet="other_diet" :observation="observation" :id_to_update="id_to_update"></food-update-component>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'; 
import foodCreateComponent from './FoodCreateComponent';
import foodUpdateComponent from './FoodUpdateComponent';
export default {
    components: { 
        foodCreateComponent,
        foodUpdateComponent
    },
    data(){
        return{
            getDataFoods:[],
            saveStudents:{},
            id_to_update:"",
            diet: "",
            other_diet:"",
            observation: "",
        }
    },
    mounted(){
        this.getFoods();
    },
    methods:{
        getFoods(){
            axios.get('getFoods').then((response)=>{
                let getDataFoods = response.data
                this.groupData(getDataFoods)
            })
        },
        groupData(data){
            const result = _.chain(data).groupBy("course").value();
            this.getDataFoods = result
        },
        editFood(data){
            this.id_to_update = data.id,
            this.saveStudents ={
                id: data.id_student,
                id_student: data.id_student,
                text: `${data.name_student}`,
                grade: data.course,
                id_grade: data.id_course,
                id_classroom: data.id_classroom,
            };
            if(data.diet !== 'Normal' || data.diet !== 'Vegetariano'){
                this.diet = 'otro'
                this.other_diet = data.diet
            }else{
                this.diet = data.diet
            }
            this.observation = data.observation
            $("#modalFoodUpdate").modal('show');
        },
        deleteFood(id){
            if(window.confirm("Desea Eliminar El dato?")){
                axios.delete(`foods/${id}`).then((response)=>{
                    toastr.info(response.data);
                    this.getFoods();
                })
            }
        }
    }
}
</script>
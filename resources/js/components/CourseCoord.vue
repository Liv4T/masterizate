<template>
    <div class="back row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <div class="card-header fondo">
                    <h4>Clases</h4>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="input-group mb-3 mt-3">
                        <input type="text" class="form-control" placeholder="Buscar Salón" v-model="search_filter">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div id="accordion">
                        <div class="card" v-for="(courses, grade) in courses" :key="grade">
                            <div v-if="search_filter =='' || filterPlanification(grade)" class="card-header" :id="`${grade}`">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" :data-target="`#heading${grade}`" aria-expanded="true" aria-controls="collapseOne">
                                        {{grade}}
                                    </button>
                                </h5>
                            </div>

                            <div :id="`heading${grade}`" class="collapse hide" :aria-labelledby="`${grade}`" data-parent="#accordion">
                                <div class="card-body">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Materia</th>
                                                <th>Ciclo</th>
                                                <th>Clase</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(course, key) in courses" :key="key">
                                            <tr v-if="course.materia = 'Español'">
                                                <td>{{course.materia}}</td>
                                                <td>{{course.ciclo}}</td>
                                                <td>{{course.class}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'; 
export default {
    props:["user"],
    data(){
        return{
            courses:[],
            search_filter:"",
            materias:[]
        }
    },
    mounted(){
        this.getCourses();
    },
    watch: {
      courses: (value) => {
          const data = value;
          console.log(data);
      },
    },
    methods:{
        filterPlanification(class_name){
            return class_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        },
        getCourses(){
            if(this.user.new_coord_area === "Primaria"){
                axios.get('showClassPrimary').then((response)=>{
                    this.groupData(response.data);
                })
            }else if(this.user.new_coord_area === "Secundaria"){
                axios.get('showClassSecundary').then((response)=>{
                    this.groupData(response.data);
                })
            }else if(this.user.new_coord_area === "General"){
                axios.get('showAllClass').then((response)=>{
                    this.groupData(response.data);
                })
            }
        },

        groupData(data){
            const result = _.chain(data).groupBy("grade").value();
            this.courses = result
        }
    }
}
</script>
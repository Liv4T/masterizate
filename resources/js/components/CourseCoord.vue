<template>
    <div class="back row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <div class="card-header fondo">
                    <h4>Clases</h4>
                </div>
            </div>
            <div v-if="loaded === true" class="card">
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
                        <!-- Acordeon para mostrar las materias por grado -->
                        <div class="card" v-for="(courses, grade) in courses" :key="grade">
                            <div v-if="search_filter =='' || filterPlanification(grade)" class="card-header" :id="`${grade}`">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" :data-target="`#heading${grade}`" aria-controls="collapseOne">
                                        {{grade}}
                                    </button>
                                </h5>
                            </div>

                            <div :id="`heading${grade}`" class="collapse hide" :aria-labelledby="`${grade}`" data-parent="#accordion">
                                <div class="card-body">
                                    <div class="input-group mb-3 mt-3">
                                        <input type="text" class="form-control" placeholder="Buscar Ciclo" v-model="search_filter_cicle">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                            </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- Acordeon para mostrar los ciclos por materias -->
                                    <div v-for="(mat, llave) in materias" :key="llave">
                                        <div v-for="(mate, key) in mat" :key="key">
                                            <div v-show="grade === mate[0].grade" class="card">
                            
                                                <div class="card-header">                                                    
                                                    {{key}}
                                                </div>

                                                <div>
                                                    <div class="card-body">
                                                        <table class="table table-stripped table-hover" >
                                                            <thead>
                                                                <tr>
                                                                    <th>Ciclo</th>
                                                                    <th>Clase</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody v-for="(mater, id) in mate" :key="id">
                                                                <tr v-if="search_filter_cicle =='' || filterCiclo(mater.ciclo)">
                                                                    <td>{{mater.ciclo}}</td>
                                                                    <td>{{mater.class}}</td>
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
            search_filter_cicle:"",
            materias:[],
            loaded:false
        }
    },
    mounted(){
        this.getCourses();
    },
    methods:{
        filterPlanification(class_name){
            return class_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        },
        filterCiclo(class_name){
            return class_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter_cicle.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
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

            this.loaded = true;
        },

        groupData(data){
            let materiasClean = []
            const result = _.chain(data).groupBy("grade").value();
            Object.keys(result).map(function(key, index) {
                let data = _.chain(result[key]).groupBy("materia").value();
                materiasClean.push(data);
            });
            this.materias = materiasClean;
            this.courses = result;
        }
    }
}
</script>
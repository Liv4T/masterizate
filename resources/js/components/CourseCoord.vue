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
                    <div id="accordion">
                        <div class="card" v-for="(courses, grade) in courses" :key="grade">
                            <div class="card-header" :id="`${grade}`">
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
                                            <tr>
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
        }
    },
    mounted(){
        this.getCourses();
    },
    methods:{
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
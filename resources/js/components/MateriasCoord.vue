<template>
    <div class="back row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <div class="card-header fondo">
                    <h4>Materias</h4>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div id="accordion">
                        <div class="card" v-for="(materias, grade) in materias" :key="grade">
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
                                                <th>Profesor</th>
                                                <th>Planificación Anual</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(mat, key) in materias" :key="key">
                                            <tr>
                                                <td>{{mat.materia}}</td>
                                                <td>{{mat.teacher_name+' '+mat.teacher_lastName}}</td>
                                                <td>{{mat.annual_planification}}</td>
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
            materias:[],
        }
    },
    mounted(){
        this.getMaterias();
    },
    methods:{
        getMaterias(){
            if(this.user.newCoordArea === "Primaria"){
                axios.get('showPrimaryStudents').then((response)=>{
                    this.groupData(response.data);
                })
            }else if(this.user.newCoordArea === "Secundaria"){
                axios.get('showSecundaryStudents').then((response)=>{
                    this.groupData(response.data);
                })
            }else if(this.user.newCoordArea === "General"){
                axios.get('showStudentsGrade').then((response)=>{
                    this.groupData(response.data);
                })
            }
        },

        groupData(data){
            const result = _.chain(data).groupBy("grade").value();
            this.materias = result
        }
    }
}
</script>
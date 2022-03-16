<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo mb-2 row">
                    <div class="card-center">
                        <label class="card-text">Mis estudiantes</label>
                    </div>
                    <div style="margin-left:auto">
                        <a class="btn" @click="toggle">
                            <i class="fa fa-question-circle" style="font-size:35px; color:orange;"></i>
                        </a>
                    </div>
                </div>
                <Drawer @close="toggle" align="right" :maskClosable="true" :zIndex="1003" :closeable="true">
                    <div v-if="open">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Mis estudiantes</h1>
                                <p>Este modulo permite ver a todos los estudiantes vinculados a cada aula de clase.</p>
                                <img src="../assets/img/my_students.png" alt="my_students" width="350px" height="350px" style="margin-bottom:10px">
                                <p>Se listan todas las aulas de clase de cada tutor y haciendo click sobre una en especifico se abre un listado de estudiantes vinculados a esa aula.</p>
                                <img src="../assets/img/student_list.png" alt="student_list" width="350px" height="350px" style="margin-bottom:10px">
                            </div>
                        </div>
                    </div>
                </Drawer>
                <div id="accordion">
                    <div class="card" v-for="(classroom, key) in classrooms" :key="key">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapseOne${key}`" aria-expanded="true" :aria-controls="`collapseOne${key}`">
                                    {{ classroom.area_name }}
                                </button>
                            </h5>
                        </div>

                        <div :id="`collapseOne${key}`" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nombre Estudiante</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(student, key_s) in classroom.students" :key="key_s">
                                        <tr>
                                            <td>{{ key_s+1 }}</td>
                                            <td>{{ student.student_name }}</td>
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
</template>
<script>
    import _ from 'lodash';
    import Drawer from "vue-simple-drawer";
    export default {
        props:['user'],
        data(){
            return{
                classrooms:[],
                open: false,
            }
        },
        components: {
            Drawer
        },
        mounted(){
            this.getCodes();
        },
        methods:{
            toggle() {
                this.open = !this.open;
            },
            getCodes(){
                axios.get('getVinculationsTutor').then((response)=>{
                    this.classrooms = response.data;
                    console.log(this.classrooms);
                })
            },
            groupData(data){
                const result = _.chain(data).groupBy("code_vinculated").value();
                this.codes= result
            },
        }
    }
</script>
<style>

</style>


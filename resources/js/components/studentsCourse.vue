<template>
    <div id="accordion">
        <input type="text" class="form-control mb-2" placeholder="Buscar Salon" v-model="search_class">
        <div v-for="(students, key) in optionsMap" :key="key" >
            <div class="card" v-if="search_class =='' || filterClass(key)">
                <div class="card-header" :id="`headingOne${key}`">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse${key}`" aria-expanded="false" :aria-controls="`collapse${key}`">
                            {{key}}
                        </button>
                    </h5>
                </div>

                <div :id="`collapse${key}`"  class="collapse show" :aria-labelledby="`headingOne${key}`" data-parent="#accordion">
                    <input type="text" class="form-control mb-2" placeholder="Buscar Por Nombre" v-model="search_student">
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Usuario</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(student, key) in students" :key="key">
                                <tr v-if="search_student =='' || filterStudent(student.user_name)">
                                    <td>{{student.user_name}}</td>
                                    <td>{{student.user_last_name}}</td>
                                    <td>{{student.userName}}</td>
                                    <td><button class="btn btn-primary" v-on:click="()=>getIdUser(student)">Enviar Mensaje</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    import _ from 'lodash';
    export default {
        props:["getIdUser","findStudentOrTeacher"],
        data() {
            return {
                optionsEst: [],
                optionsDoc: [],
                optionsMap: [],
                search_class:"",
                search_student:"",
                findDataEst:""
            };
        },
        watch:{
            findStudentOrTeacher: function(val) {
                if(val == 1){
                    this.optionsMap = this.optionsEst
                }else if(val == 2){
                    this.optionsMap = this.optionsDoc
                }
            }
        },
        mounted(){
            this.getStudents();
            this.getTeachers();
        },
        methods: {
            getTeachers(){
                axios.get('getTeachersByClassroom').then((response) => {
                    this.groupDataDoc(response.data);
                });
            },
            getStudents(){
                axios.get('getStudentsByClassroom').then((response) => {
                    this.groupData(response.data);
                });
            },
            groupData(data){
                const result = _.chain(data).groupBy("classroom_name").value();
                this.optionsEst = result
            },
            groupDataDoc(data){
                const result = _.chain(data).groupBy("classroom_name").value();
                this.optionsDoc = result
            },
            filterClass(clas){
                return clas.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_class.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            },
            filterStudent(student){
                return student.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_student.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            }
        },
    };
</script>
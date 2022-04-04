<template>
    <div id="accordion">
        <input type="text" class="form-control mb-2" :placeholder="$t('lang.table.findByClassroom')" v-model="search_class">
        <div v-for="(students, key) in optionsMap" :key="key" >
            <div class="card" v-if="search_class =='' || filterClass(key)">
                <div class="card-header" :id="`headingOne${key.replace(/ /g, '')}`">
                    <h5 class="mb-0">
                        <button type="button" class="btn btn-link" data-toggle="collapse" :data-target="`#collapse${key.replace(/ /g, '')}`" aria-expanded="false" :aria-controls="`collapse${key.replace(/ /g, '')}`">
                            {{key}}
                        </button>
                    </h5>
                </div>

                <div :id="`collapse${key.replace(/ /g, '')}`"  class="collapse show" :aria-labelledby="`headingOne${key.replace(/ /g, '')}`" data-parent="#accordion">
                    <input type="text" class="form-control mb-2" :placeholder="$t('lang.table.findByName')" v-model="search_student">
                    <div class="card-body" v-if="view === 1">
                        <div v-if="students[0].students.length > 0">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>
                                            {{ $t('lang.table.name') }}
                                        </th>
                                        <th>
                                            {{ $t('lang.table.action') }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-for="(student, key) in students[0].students" :key="key">
                                    <tr v-if="search_student =='' || filterStudent(student.user_name)">
                                        <td>{{student.user_name}}</td>
                                        <td><button type="button" class="btn btn-primary" v-on:click="()=>getIdUser(student)">Seleccionar</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-else>
                            <h5>No hay estudiantes registrados</h5>
                        </div>
                    </div>
                    <div class="card-body" v-if="view === 2">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        {{ $t('lang.table.name') }}
                                    </th>
                                    <th>
                                        {{ $t('lang.table.last_name') }}
                                    </th>
                                    <th>
                                        {{ $t('lang.table.action') }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-for="(student, key) in students" :key="key">
                                <tr v-if="search_student =='' || filterStudent(student.tutor_name)">
                                    <td>{{student.tutor_name}}</td>
                                    <td></td>
                                    <td><button type="button" class="btn btn-primary" v-on:click="()=>getIdUser(student)">Seleccionar</button></td>
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
                findDataEst:"",
                view:"",
            };
        },
        watch:{
            findStudentOrTeacher: function(val) {
                if(val == 1){
                    this.optionsMap = this.optionsEst;
                    this.view = val;
                    console.log(this.optionsMap);
                }else if(val == 2){
                    this.optionsMap = this.optionsDoc;
                    this.view = val;
                    console.log(this.optionsMap);
                }
            }
        },
        mounted(){
            this.getStudents();
            this.getTeachers();
        },
        methods: {
            // getTeachers(){
            //     axios.get('getTeachersByClassroom').then((response) => {
            //         this.groupDataDoc(response.data);
            //     });
            // },
            // getStudents(){
            //     axios.get('getStudentsByClassroom').then((response) => {
            //         this.groupData(response.data);
            //     });
            // },
            getTeachers(){
                axios.get('getVinculationsTutorMessage').then((response) => {
                    this.groupDataDoc(response.data);
                });
            },
            getStudents(){
                axios.get('getVinculationsTutorMessage').then((response)=>{
                    this.groupData(response.data);
                    console.log(response.data);
                })
            },
            groupData(data){
                //const result = _.chain(data).groupBy("classroom_name").value();
                const result = _.chain(data).groupBy("area_name").value();
                this.optionsEst = result
            },
            groupDataDoc(data){
                const result = _.chain(data).groupBy("area_name").value();
                this.optionsDoc = result
            },
            filterClass(clas){
                return clas.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_class.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            },
            filterStudent(student){
                return student.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_student.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            },
        },
    };
</script>

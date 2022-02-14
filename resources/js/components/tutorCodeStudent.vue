<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo mb-2">
                    <h4>Estudiantes Vinculados con Codigo</h4>
                </div>
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
    export default {
        props:['user'],
        data(){
            return{
                classrooms:[],
            }
        },
        mounted(){
            this.getCodes();
        },
        methods:{
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


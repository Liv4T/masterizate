<template>
    <div id="accordion">
        <div class="card" v-for="(students, key) in optionse" :key="key">
            <div class="card-header" :id="`headingOne${key}`">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse${key}`" aria-expanded="false" :aria-controls="`collapse${key}`">
                        {{key}}
                    </button>
                </h5>
            </div>

            <div :id="`collapse${key}`"  class="collapse show" :aria-labelledby="`headingOne${key}`" data-parent="#accordion">
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
                            <tr>
                                <td>{{student.user_name}}</td>
                                <td>{{student.user_last_name}}</td>
                                <td>{{student.userName}}</td>
                                <td><button class="btn btn-primary">Enviar Mensaje</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    export default {
        
        data() {
            return {
                optionse: [],
            };
        },
        mounted() {
            this.getStudents()
        },
        methods: {
            getStudents(){
                axios.get('getStudentsByClassroom').then((response) => {
                    this.groupData(response.data);
                });
            },
            groupData(data){
                console.log("datosya.com",data)
                const result = _.chain(data).groupBy("classroom_name").value();
                this.optionse = result
            },
        },
    };
</script>
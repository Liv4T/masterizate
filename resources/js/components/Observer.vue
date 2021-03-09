<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <h1 class="text-center mb-4">Observaciones</h1>
                <div v-show="students  != [] && parents != []">
                    <button class="btn btn-primary mb-3" data-toggle="modal" data-target="#createModal">
                        Crear Observación
                    </button>
                </div>
                
                <div class="card" >                    
                    <div class="card-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Estudiante</th>
                                    <th>Detalle de la Observación</th>
                                    <th>Creador de la Observación</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(student, id) in observers" :key="id">
                                <tr>
                                    <td>{{student.name_student}}</td>
                                    <td>{{student.observation}}</td>
                                    <td>{{student.user_creator}}</td>
                                    <td>
                                        <button class="btn btn-primary" data-toggle="modal" data-target="#EditModal" v-on:click="edit(student)">Editar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <modal-observer-component v-bind:students="students" v-bind:parents="parents" v-bind:user="user">
        </modal-observer-component>

        <modal-edit-observer-component v-bind:students="students" v-bind:parents="parents" v-bind:studentsEdit="studentEdit">
        </modal-edit-observer-component>
    </div>
</template>
<script>
    export default {
        props: ['user'],
        data() {
            return {
                studentEdit:{},
                students: [],
                parents: [],
                observers: []
            }
        },
        mounted() {
            this.getData();
        },
        filters: {
            addPrhase: function (value) {
                return "uno" + value
            }
        },
        methods: {
            getData() {
                axios.get('/GetArearByUser').then((response) => {
                    const data = response.data;
                    if (data.length > 0) {
                        data.forEach(element => {
                            axios.get(`/api/teacher/area/${element.id}/classroom/${element.id_classroom}/student`).then((response) => {
                                let studentData = response.data;
                                if(studentData.length > 0){
                                    this.students.push(studentData);
                                    var hash = {};
                                    this.students = this.students.filter(function(current) {
                                        var exists = !hash[current.id];
                                        hash[current.id] = true;
                                        return exists;
                                    });
                                }
                            })
                        });
                    }
                }).catch((error) => {
                    console.log(error)
                });

                axios.get('/dataUsers').then((response)=>{
                    if(response.data.length > 0){
                        this.parents = response.data[1];
                        this.observers = response.data[0]
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            edit(value){
                this.studentEdit = value;
            }
        }
    }

</script>

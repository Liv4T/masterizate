<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Estudiantes</h3>
                    <div class="card-body">
                    <table v-if="tipo==='visits'">
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                            <th></th>
                            <th></th>
                            <th>Visitas</th>
                        </tr>
                        <tr v-for="(student,t) in students" :key="t">
                            <td><img v-bind:src="student.picture" alt="" width="32px" height="16px"></td>
                            <td><a class="text-link" :href="'/reportVisits/' + student.id">{{ student.name + student.last_name }}</a></td>
                            <td></td>
                            <td></td>
                            <td>{{ student.count}}</td>
                        </tr>
                    </table>
                    <table v-if="tipo==='notes'">
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                        <tr v-for="(student,t) in students" :key="t">
                            <td><img v-bind:src="student.picture" alt="" width="32px" height="16px"></td>
                            <td><a class="text-link" :href="'/notes/' + student.id">{{ student.name + student.last_name }}</a></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["tipo"],
    data(){
        return {
            students: [],
        };
    },
    mounted() {
        var url="/getStudentsList";
        axios.get(url).then((response) => {
            this.students = response.data;
        });
    },
    methods: {
        getNotes(id_student, id_area, id_classroom) {
                return new Promise((resolve, reject) => {
                    axios.get(
                        `/api/teacher/area/${id_area}/classroom/${id_classroom}/student/${id_student}/module`
                    ).then(response => {
                        this.notes = response.data;
                        $("#notesModal").modal("show");
                        resolve();
                    }, e => reject(e));
                })
            }
    },
}
</script>
<style>
.text-link{
    color: black;
    font-size: 18px;
}
</style>
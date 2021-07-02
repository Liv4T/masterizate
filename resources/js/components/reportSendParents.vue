<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header fondo">
                        <strong>Reportes</strong>
                    </div>
                    <div class="card-body">
                        <div id="accordion">
                            <div class="card" v-for="(data, key) in areas" :key="key">
                                <div class="card-header" :id="`headingOne${data.text.replace(/\s/g, '')}`">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" v-on:click="()=>getStudents(data)" data-toggle="collapse" :data-target="`#collapseOne${data.text.replace(/\s/g, '')}`" aria-expanded="true" :aria-controls="`collapseOne${data.text.replace(/\s/g, '')}`">
                                            {{data.text}}
                                        </button>
                                    </h5>
                                </div>

                                <div :id="`collapseOne${data.text.replace(/\s/g, '')}`" class="collapse hide" :aria-labelledby="`headingOne${data.text.replace(/\s/g, '')}`" data-parent="#accordion">
                                    <div class="card-body">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Nombre</th>
                                                    <th>Apellido</th>
                                                    <th>acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(student, key) in students" :key="key">
                                                    <td>{{student.user_name}}</td>
                                                    <td>{{student.user_lastname}}</td>
                                                    <td><button class="btn btn-primary" v-on:click="sendMessage(student, data.classroom_name)">Enviar Reporte a Padres</button></td>
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
</template>
<script>
export default {
    data(){
        return{
            students:[],
            areas:[],
        }
    },
    mounted(){
        this.getAreasByUser();
    },
    methods:{
        getAreasByUser(){
            axios.get('GetArearByUser').then((response)=>{
                this.areas = response.data
            })
        },

        getStudents(data){
            axios.get(`/api/teacher/area/${data.id}/classroom/${data.id_classroom}/student`).then((response)=>{
                this.students = response.data;
            })
        },

        sendMessage(data, classroom_name){
            axios.get(`getAllRecentActivities/${classroom_name}`).then((response)=>{
                console.log(response.data);
            })
            console.log(data);
        }
    }
}
</script>
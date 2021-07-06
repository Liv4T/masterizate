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
                                                    <td><button class="btn btn-primary" v-on:click="sendMessage(student, data.id_area)">Enviar Reporte a Padres</button></td>
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
import moment from 'moment';
export default {
    data(){
        return{
            students:[],
            areas:[],
            assistances:[],
            notes:[]
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

        sendMessage(data, area_id){
            this.dataInformation = [];
            axios.get(`/getAllRecentActivities/${area_id}`).then((response)=>{
                let activities = response.data;

                axios.get(`/getAllAssistances/${data.user_name}`).then((response)=>{
                    this.assistances = response.data;
                    console.log('Asistencias: ',response.data)
                

                    axios.get(`/getNotesBySudentAndArea/${data.user_id}`).then((response)=>{
                        let notes = response.data;

                        console.log({
                            class: activities.area_name+' '+activities.classroom_name,
                            logro: activities.logro,                        
                            title_activity: activities.activity_name,
                            activity_date: activities.activity_date,
                            activity_description: activities.activity_description,                        
                            activity: activities.weekly_plan_driving_question,
                            percentage_activity: activities.percentage+' %',
                            nota_class: notes.score,
                            student: data.user_name+' '+data.user_lastname,
                            email: data.user_email
                        })
                    })
                })                
            })
        }
    }
}
</script>
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
                                                    <td><button class="btn btn-primary" v-on:click="sendMessage(student, data.classroom_name, data.area_name)">Enviar Reporte a Padres</button></td>
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

        sendMessage(data, classroom_name, area_name){
            axios.get(`/getAllRecentActivities/${classroom_name}/${area_name}`).then((response)=>{
                let activities = response.data;

                axios.get(`/getAllAssistances/${area_name}/${classroom_name}`).then((response)=>{
                    console.log(response.data);
                })
                
                activities.forEach((e)=>{   
                    let actualDate= moment().format('YYYY-MM-DD');
                    let activityDate = moment(e.activity_date).format('YYYY-MM-DD');

                    if(actualDate <= activityDate){
                        console.log({
                            name_student: data.user_name+' '+data.user_lastname,
                            student_email: data.user_email,
                            classroom: area_name+' '+classroom_name,
                            progress: data.progress,
                            score: data.score = -1 ? 0 : data.score,
                            score_base: data.score_base,
                            actual_class: e.class_name,
                            actual_activity_name: e.activity_name,
                            actual_activity_date_delivery: e.activity_date,
                            actual_cicle: e.weekly_plan_driving_question                            
                        });
                    }
                })
            })
        }
    }
}
</script>
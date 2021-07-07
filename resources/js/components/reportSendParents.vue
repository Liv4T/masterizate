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
                                                    <td><button class="btn btn-primary" v-on:click="sendMessage(student, data.id_area, data.id_classroom)">Enviar Reporte a Padres</button></td>
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
        <!-- Modal -->
        <div class="modal fade" id="reports" tabindex="-1" role="dialog" aria-labelledby="reportsLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="reportsLabel">Enviar Reporta a Padres</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label><strong>Nombre de Estudiante</strong></label>
                            <p>{{dataStudent.student}}</p>
                        </div>
                        <div class="form-group">
                            <label><strong>Nombre de Acudiente</strong></label>
                            <p>{{dataStudent.parent_name}}</p>
                        </div>
                        <div class="form-group">
                            <label><strong>Email de Acudiente</strong></label>
                            <p> {{dataStudent.parent_email}}</p>
                        </div>
                        <div class="form-group">
                            <label><strong>Nota del Estudiante</strong></label>
                            <p>{{dataStudent.nota_class}}</p>
                        </div>

                        <div class="form-group">
                            <label>Observación</label>
                            <input type="text" class="form-control" v-model="observation">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveData">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>

        <table id="tableReport">
            <thead>
                <tr>
                    <th>Clase</th>
                    <th>Logro Actual</th>
                    <th>Titulo de Actividad</th>
                    <th>Fecha de actividad</th>
                    <th>Descripción </th>
                    <th>Actividad</th>
                    <th>Porcentaje</th>
                    <th>Nota</th>
                    <th>Estudiante</th>
                    <th>Correo</th>
                    <th>Asistencia</th>
                    <th>Clases en Total</th>
                    <th>Correo de Acudiente</th>
                    <th>Nombre de Acudiente</th>
                </tr>
            </thead> 
            <tbody>
                <tr>
                    <td>{{dataStudent.class}}</td>
                    <td>{{dataStudent.logro}}</td>
                    <td>{{dataStudent.title_activity}}</td>
                    <td>{{dataStudent.activity_date}}</td>
                    <td>{{dataStudent.activity_description}}</td>
                    <td>{{dataStudent.activity}}</td>
                    <td>{{dataStudent.percentage_activity}}</td>
                    <td>{{dataStudent.nota_class}}</td>
                    <td>{{dataStudent.student}}</td>
                    <td>{{dataStudent.email}}</td>
                    <td>{{dataStudent.Assistances}}</td>
                    <td>{{dataStudent.total_classes}}</td>
                    <td>{{dataStudent.parent_email}}</td>
                    <td>{{dataStudent.parent_name}}</td>
                </tr>
            </tbody>   
        </table>
    </div>
</template>
<script>
// import moment from 'moment';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
export default {
    data(){
        return{
            students:[],
            areas:[],
            parent:{},
            dataStudent:{},
            observation:""
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

        sendMessage(data, area_id, classroom_id){
            this.dataInformation = [];
            axios.get(`/getAllRecentActivities/${area_id}`).then((response)=>{
                let activities = response.data;

                axios.get(`/getAllAssistances/${data.user_id}/${area_id}/${classroom_id}`).then((response)=>{
                    let assistances = response.data;
                    
                    if(assistances.parent_id){
                        axios.get(`/showUser/${assistances.parent_id}`).then((response)=>{
                            this.parent = response.data;                            
                        })
                    }
                    axios.get(`/getNotesBySudentAndArea/${data.user_id}`).then((response)=>{
                        let notes = response.data;
                        this.dataStudent={}
                        this.dataStudent = {
                            class: activities.area_name+' '+activities.classroom_name,
                            logro: activities.logro,                        
                            title_activity: activities.activity_name,
                            activity_date: activities.activity_date,
                            activity_description: activities.activity_description,                        
                            activity: activities.weekly_plan_driving_question,
                            percentage_activity: activities.percentage+' %',
                            nota_class: notes.score ? notes.score : 0,
                            student: data.user_name+' '+data.user_lastname,
                            email: data.user_email,
                            Assistances: assistances.total_assistances,
                            total_classes: assistances.total_class,
                            parent_id: assistances.parent_id ? assistances.parent_id : null,
                            parent_email: this.parent.email ? this.parent.email : null,
                            parent_name: (this.parent.name && this.parent.last_name) ? this.parent.name+' '+this.parent.last_name: null
                        }
                    })
                })                
            })
            $('#reports').modal('show');
        },

        saveData(){
            console.log(this.dataStudent)
            console.log(this.observation)

            var pdf = new jsPDF('p', 'pt', 'letter');
    
            pdf.autoTable({ 
                html: '#tableReport',
                columnStyles: { halign: 'center', fillColor: [0, 255, 0] }
            })
        
            pdf.save('Test.pdf');
        }
    }
}
</script>
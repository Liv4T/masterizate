<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header fondo">
                Reportes de actividades y planificación anual
            </div>
        </div>
        <div v-show="downloading">
            <div class="alert alert-success" role="alert">
                Descargando Reporte
            </div>
        </div>        
        <button v-on:click="download" class="btn btn-primary">
            Descargar Actividades
        </button>

        <button v-on:click="download2" class="btn btn-primary">
            Descargar Planificación Anual
        </button>
        <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Actividades
                        </button>
                    </h2>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <table id="tableReport" class="table table-striped table-hover table-responsive">
                            <thead>
                                <tr>
                                    <th>Area / Salon</th>
                                    <th>Clase</th>
                                    <th>Descripción</th>
                                    <th>Actividad</th>
                                    <th>Docente</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, key) in weeklyPlan" :key="key">
                                    <td>{{data.area_name+' '+data.classroom_name}}</td>
                                    <td>{{data.class_name}}</td>
                                    <td>{{data.class_description}}</td>
                                    <td>{{data.driving_question}}</td>                                    
                                    <td>{{data.user_name+' '+data.user_last_name}}</td>                                
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="falsee" aria-controls="collapseTwo">
                        Planificación Anual
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        <table id="tableReport2" class="table table-striped table-hover table-responsive">
                            <thead>
                                <tr>
                                    <th>Area</th>
                                    <th>Logro</th>
                                    <th>Salon de Clase</th>
                                    <th>Docente</th>
                                    <th>Fecha de Creación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, key) in annual" :key="key">
                                    <td>{{data.area_name}}</td>
                                    <td>{{data.achievement_planification}}</td>
                                    <td>{{data.classroom_name}}</td>
                                    <td>{{data.user_name+' '+data.user_last_name}}</td>
                                    <td>{{data.created_at}}</td>
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

import jsPDF from 'jspdf';
import 'jspdf-autotable';
export default {
    data(){
        return{
            weeklyPlan:[],
            annual:[],
            downloading: false
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get('ReportWeeklyPlan').then((response)=>{
                this.weeklyPlan = response.data;
            }).catch((error)=>{
                console.log(error);
            });

            axios.get('ReportAnnualPlanification').then((response)=>{
                this.annual = response.data;
            }).catch((error)=>{
                console.log(error)
            })
        },
        download(){
            this.downloading = true;   
            let pdf = new jsPDF('p', 'pt', 'letter');
            
            setTimeout(()=>{
                pdf.autoTable({ 
                    html: '#tableReport',
                    columnStyles: {
                        0: {columnWidth: 110},
                        1: {columnWidth: 110},
                        2: {columnWidth: 110},                    
                        3: {columnWidth: 110},                    
                        4: {columnWidth: 110},                    
                    }
                });
                
                pdf.save(`Informe Actividades.pdf`);
                this.downloading = false;             
            },1000)                
        },
        download2(){
            this.downloading = true;   
            let pdf = new jsPDF('p', 'pt', 'letter');
            setTimeout(()=>{
                pdf.autoTable({ 
                    html: '#tableReport2',
                    columnStyles: {
                        0: {columnWidth: 110},
                        1: {columnWidth: 110},
                        2: {columnWidth: 110},                    
                        3: {columnWidth: 110},                    
                        4: {columnWidth: 110},                    
                    }
                })
                pdf.save(`Informe Planificación Anual.pdf`);
                this.downloading = false;

            },1000)            
        }
    }
}
</script>
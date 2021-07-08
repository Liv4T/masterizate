<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header fondo">
                        <strong>Reportes</strong>
                    </div>
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
        

        <!-- <table id="tableReport" style="width:100%" hidden>
            <tr class="header">
                <th colspan="8">REPORTE DE {{dataStudent.student ? dataStudent.student.toUpperCase() : ''}}</th>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
            
            <tr>                  
                <th class="label">CLASE: </th>
                <td class="label-content">{{dataStudent.class}}</td>
                
                <td></td>
                
                <th class="label">LOGRO: </th>
                <td class="label-content">{{dataStudent.logro}}</td>
            </tr>
            
            <tr>
                <th class="label"> ESTUDIANTE: </th>
                <td class="label-content">{{dataStudent.student}}</td>
                  
                <td></td>

                <th class="label">CORREO: </th>
                <td class="label-content">{{dataStudent.email}}</td>
            
                <td></td>
            </tr>
            
            <tr>
                <td style="height:5px" colspan="8"></td>
            </tr>
            <tr>
                <th class="label">ACTIVIDAD: </th>
                <td class="label-content">{{dataStudent.activity}}</td>
                
                <td></td>
                
                <th class="label">DESCRIPCIÓN: </th>
                <td class="label-content">{{dataStudent.activity_description}}</td>
                
                <td></td>
                
                <th class="label">FECHA ACTIVIDAD</th>
                <td class="label-content">{{dataStudent.activity_date}}</td>
                
            </tr>
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
                
            <tr>
                <th class="label">PORCENTAJE DE ACTIVIDAD: </th>
                <td class="label-content">{{dataStudent.percentage_activity}}</td>
                
                <td></td>
                
                <th class="label">NOTA GENERAL: </th>
                <td class="label-content">{{dataStudent.nota_class}}</td>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
            
            <tr>
                <th class="label">TOTAL ASISTENCIAS: </th>
                <td class="label-content">{{dataStudent.Assistances}}</td>
                
                <td></td>
                
                <th class="label">TOTAL CLASES: </th>
                <td class="label-content">{{dataStudent.total_classes}}</td>
            </tr>

            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
            
            <tr>
                <th class="label">NOMBRE DE ACUDIENTE: </th>
                <td class="label-content">{{dataStudent.parent_name ? dataStudent.parent_name : 'Sin Información'}}</td>
                  
                <td></td>
                  
                <th class="label">CORREO DE ACUDIENTE: </th>
                <td class="label-content">{{dataStudent.parent_email ? dataStudent.parent_email : 'Sin Información'}}</td>
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
                
            <tr>
                <th class="label">OBSERVACIÓN DEL DOCENTE: </th>
                <td>{{observation}}</td>         
            </tr>
            
            <tr>
                <td style="height:10px" colspan="8"></td>
            </tr>
        </table> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get('ReportWeeklyPlan').then((response)=>{
                console.log(response.data);
            }).catch((error)=>{
                console.log(error);
            });

            axios.get('ReportAnnualPlanification').then((response)=>{
                console.log(response.data)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>
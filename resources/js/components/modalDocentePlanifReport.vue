<template>
    <div class="modal fade bd-example-modal-lg" id="reportTeacherPlanifModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Reporte de Notas</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-goup">
                        <label>Fecha</label>
                        <select v-model="dateToExport" class="form-control">
                            <option value="1">Un Mes</option>
                            <option value="2">Tres Meses</option>
                            <option value="3">Seis Meses</option>
                            <option value="4">Un Año</option>
                        </select>
                    </div>
                    <div class="form-goup">
                        <label>Docente</label>
                        <multiselect v-model="saveTeachers" :options="teachersOptions" :multiple="false"
                            :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Seleccione una"
                            label="text" track-by="id" :preselect-first="true">
                                <template slot="selection" slot-scope="{ values, isOpen }">
                                    <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                        {{ values.length }}
                                        opciones
                                        selecionadas
                                    </span>
                                </template>
                        </multiselect>
                    </div>
                    <div class="form-goup">
                        <label>Area</label>
                        <multiselect v-model="saveAreas" :options="areasOptions" :multiple="false"
                            :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Seleccione una"
                            label="text" track-by="id" :preselect-first="true">
                                <template slot="selection" slot-scope="{ values, isOpen }">
                                    <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                        {{ values.length }}
                                        opciones
                                        selecionadas
                                    </span>
                                </template>
                        </multiselect>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" v-on:click="exportData()">Exportar</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Datos</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
import jsPDF from "jspdf";
import {GenerateData, CreateHeaders} from "./ExportPDF/export";
export default {
    data(){
        return{
            dateToExport:"",
            teachersOptions:[],
            areasOptions:[],
            dataToExport:[],
            planification:[],
            saveTeachers:{},
            saveAreas:{},
            areasByTeacher:{}
        }
    },
    mounted(){
        this.getTeachers();
    },
    components: {
        Multiselect,
    },
    methods:{
        getTeachers(){
            axios.get('getTeachers').then(response => {
                response.data.forEach(element => {
                    this.teachersOptions.push({
                        id: element.id,
                        text: `${element.name}`+` ${element.last_name}` 
                    })
                });
            })
        },
        exportData(){
            axios.get(`GetAreaToReport/${this.saveTeachers.id}`).then((response) => {
                response.data.forEach(area => {
                    axios.get(`GetPlanificationTeacher/${this.saveTeachers.id}/${area.id}/${area.id_classroom}`).then((response) => {
                        let anual = response.data;
                        this.planification.push({
                            name: area.text,
                            achievement: anual.achievements,
                            courses: anual.courses,
                            quaterly: anual.quaterly
                        })
                        console.log(this.planification)
                    })
                })
            });
            
            // var headers = CreateHeaders([
            //     "id",
            //     "clase",
            //     "Estudiante",
            //     "Progreso",
            //     "Nota",
            // ]);
            // if(this.dataToExport.length > 0){
            //     var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });
            //     doc.table(1, 1, GenerateData(this.dataToExport), headers, { autoSize: true });
            //     doc.save("ReporteNotas.pdf");
            //     this.dataToExport = []
            // }else{
            //     toastr.info("No hay datos disponibles")
            // }                     
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
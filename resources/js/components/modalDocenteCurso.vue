<template>
    <div class="modal fade bd-example-modal-lg" id="reportTeacherCourseModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Reporte de Curso</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
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
                    <div class="form-group">
                        <button class="btn btn-primary mt-2 mb-2" v-on:click="getArea()">
                            Consultar Area
                        </button>
                    </div>
                    <div v-if="areaOptions.length > 0" class="form-goup">
                        <label>Areas Disponibles</label>
                        <multiselect v-model="saveArea" :options="areaOptions" :multiple="true"
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
                    <div v-else class="form-goup">
                        <strong>No existen Areas Disponibles</strong>
                    </div>                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" v-on:click="exportData()">Exportar</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
import exportFromJSON from 'export-from-json';
export default {
    data(){
        return{
            dateToExport:"",
            teachersOptions:[],
            areaOptions:[],
            dataToExport:[],
            saveArea:[],
            saveTeachers:{}
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
        getArea(){
            axios.get(`GetAreaToReport/${this.saveTeachers.id}`).then((response) => {
                let area = response.data;
                area.forEach(element => {
                    this.areaOptions.push({
                        id: element.id,
                        id_area: element.id_area,
                        id_classroom: element.id_classroom,
                        text: element.text,
                        classroom: element.classroom
                    })
                })
            });
        },
        
        exportData(){        
            this.saveArea.forEach(area => {        
                axios.get(`/api/teacher/area/${parseInt(area.id_area)}/classroom/${parseInt(area.id_classroom)}/student`).then((response) => {
                    let dataExport = response.data;
                    dataExport.forEach(data => {
                        this.dataToExport.push({
                            estudiante: data.user_name+ '' +data.user_lastname,
                            materia: area.text,
                            curso: area.classroom
                        })
                    })
                });
            })
            if(this.dataToExport.length > 0){
                const data = this.dataToExport;
                const fileName = 'Reporte Notas'
                const exportType = 'xls'
                this.dataToExport = [],
                this.saveTeachers = [],
                this.saveArea = [],
                $('#reportTeacherCourseModal').modal('hide');
                exportFromJSON({ data, fileName, exportType })
            }else{
                toastr.info("No hay datos disponibles")
            }          
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
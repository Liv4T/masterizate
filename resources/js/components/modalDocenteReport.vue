<template>
    <div class="modal fade bd-example-modal-lg" id="reportTeacherModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
                        <label>Estudiante</label>
                        <multiselect v-model="saveStudents" :options="studentsOptions" :multiple="true"
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
            studentsOptions:[],
            dataToExport:[],
            saveStudents:[],
            saveTeachers:{}
        }
    },
    mounted(){
        this.getTeachers();
        this.getStudents();
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
        getStudents(){
            axios.get('getStudents').then(response => {
                response.data.forEach(element => {
                    this.studentsOptions.push({
                        id: element.id,
                        text: `${element.name}`+` ${element.last_name}` 
                    })
                });
            })
        },
        exportData(){
            axios.get(`GetAreaToReport/${this.saveTeachers.id}`).then((response) => {
                let areas = response.data;
                areas.forEach(area => {
                    this.saveStudents.forEach(saveStudents => {
                        axios.get(`/api/teacher/area/${parseInt(area.id)}/classroom/${parseInt(area.id_classroom)}/student/${parseInt(saveStudents.id)}`).then((response) => {
                            let classRoom = response.data;
                            this.dataToExport.push({
                                clase: area.text,
                                Estudiante: classRoom.name,
                                Progreso: `${classRoom.progress === -1 ? 0 : classRoom.progress.toString()} %`,
                                Nota: `${classRoom.score === -1 ? 0 : classRoom.score.toString()} / ${classRoom.score_base.toString()}`,
                            })
                        });
                    })
                })
                if(this.dataToExport.length > 0){
                    const data = this.dataToExport;
                    const fileName = 'Reporte Notas'
                    const exportType = 'xls'
                    
                    exportFromJSON({ data, fileName, exportType })
                }else{
                    toastr.info("No hay datos disponibles")
                }
            });            
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
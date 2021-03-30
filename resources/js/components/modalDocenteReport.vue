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
                        <input v-model="dateToExport" type="date" class="form-control"/>
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
                    <div class="form-group">
                        <button class="btn btn-primary mt-2 mb-2" v-on:click="getArea()">
                            Consultar Area
                        </button>
                    </div>
                    <div v-if="areaOptions.length > 0" class="form-goup">
                        <label>Areas Consultadas</label>
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
                    <div v-if="areaOptions.length > 0" class="form-group">
                        <button class="btn btn-primary mt-2 mb-2" v-on:click="getStudents()">
                            Obtener Estudiante
                        </button>
                    </div>
                    <div v-if="studentsOptions.length > 0" class="form-goup">
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
            studentsOptions:[],
            saveStudents:[],
            saveArea:[],
            DataToExport:[],
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
            axios.get(`GetAreaTeacher/${this.saveTeachers.id}`).then((response) => {
                let area = response.data;
                area.forEach(element => {
                    this.areaOptions.push({
                        id: element.id,
                        id_area: element.id_area,
                        id_classroom: element.id_classroom,
                        text: element.text
                    })
                })
            });
        },
        getStudents(){
            this.saveArea.forEach(area=>{
                axios.get(`/api/teacher/area/${area.id}/classroom/${area.id_classroom}/student`).then(response => {
                    response.data.forEach(element => {
                        this.studentsOptions.push({
                            id: element.user_id,
                            text: `${element.user_name}`+` ${element.user_lastname}` 
                        })
                    });

                    var hash = {};
                    this.studentsOptions = this.studentsOptions.filter(function(current) {
                        var exists = !hash[current.id];
                        hash[current.id] = true;
                        return exists;
                    });
                });
            })
        },
        exportData(){
            this.saveArea.forEach(area => {
                this.saveStudents.forEach(saveStudents => {
                    window.open(`reportNotes/${parseInt(area.id)}/${parseInt(area.id_classroom)}/${parseInt(saveStudents.id)}`, "_self")
                })
            })
            // if(this.DataToExport.length > 0){
            //     const data = this.DataToExport;
            //     const fileName = 'Reporte Notas'
            //     const exportType = 'xls'
            //     this.dateToExport = "",
            //     this.DataToExport = [];
            //     this.saveTeachers = [];
            //     this.areaOptions = [];
            //     this.saveStudents=[];
            //     this.saveArea=[];
            //     this.studentsOptions = [];
            //     $("#reportTeacherModal").modal('hide');
            //     exportFromJSON({ data, fileName, exportType })
            // }else{
            //     toastr.info("No hay datos disponibles")
            // }           
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
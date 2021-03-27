<template>
    <div class="modal fade bd-example-modal-lg" id="reportMateriasModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Reporte de Materias</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-goup">
                        <label>Docente</label>
                        <multiselect v-model="saveTeachers" :options="teachersOptions" :multiple="true"
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
            teachersOptions:[],
            saveTeachers:[],
            DataToExport:[],
            
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
            this.saveTeachers.forEach(teacher => {
                axios.get(`GetAreaToReport/${teacher.id}`).then((response) => {
                    let findedTeachers = response.data;
                    findedTeachers.forEach(element => {
                        this.DataToExport.push({
                            Salon: element.classroom,
                            Area: element.text,
                            Profesor_asignado: teacher.text
                        })
                    })
                });
            })
            if(this.DataToExport.length > 0){
                const data = this.DataToExport;
                const fileName = 'Reporte Materias'
                const exportType = 'xls'
                this.DataToExport = [];
                this.saveTeachers = [];
                $("#reportMateriasModal").modal('hide');
                exportFromJSON({ data, fileName, exportType })
            }else{
                toastr.info("No hay datos disponibles")
            }           
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
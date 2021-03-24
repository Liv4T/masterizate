<template>
    <div class="modal fade bd-example-modal-lg" id="reportEstudianteModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Reporte de Estudiantes</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
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
            studentsOptions:[],
            saveStudents:[],
            DataToExport:[]
        }
    },
    mounted(){
        this.getStudents();
    },
    components: {
        Multiselect,
    },
    methods:{
        getStudents(){
            axios.get('getAllStudents').then(response => {
                response.data.forEach(element => {
                    this.studentsOptions.push({
                        id: element.id,
                        text: `${element.name}`+` ${element.last_name}`,
                        parent_id: element.parent_id 
                    })
                });
            });
        },
        exportData(){
            this.saveStudents.forEach(student => {
                if(student.id && student.parent_id){
                    axios.get(`reportStudents/${student.id}/${student.parent_id}`).then((response) => {
                        console.log(response.data);
                        this.DataToExport.push(response.data);
                    });
                }else{
                    toastr.info(`El estudiante ${student.text} no cuenta con un acudiente asignado`);
                }
            })
            if(this.DataToExport.length > 0){
                const data = this.DataToExport;
                const fileName = 'Reporte Notas'
                const exportType = 'xls'
                this.DataToExport = [];
                $("reportEstudianteModal").modal("hide");
                exportFromJSON({ data, fileName, exportType })
            }else{
                toastr.info("No hay datos disponibles")
            }
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
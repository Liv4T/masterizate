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
                        <div class="form-check mb-5">
                            <input class="form-check-input" type="checkbox" v-model="type_export" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                                <span class="dot dot_orange"></span> Reporte de Notas por Docente
                            </label>
                        </div>
                        <div v-show="type_export === true">
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
                    <div v-show="type_export === false">
                        <p>Consulta el salon requerido y realiza la exportación</p>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary mt-2 mb-2" v-on:click="getAreaOrClassroom()">
                           {{ type_export === true ? 'Consultar Area' : 'Consultar Salon'}}
                        </button>
                    </div>
                    <div v-if="areaOptions.length > 0" class="form-goup">
                        <div v-if="type_export === true">
                            <label>Areas Consultadas</label>
                        </div>
                        <div v-else>
                            <label>Salones Consultados</label>
                        </div>
                        <multiselect v-model="saveArea" :options="areaOptions" :multiple="false"
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
                    <button v-show="areaOptions.length > 0" type="button" class="btn btn-primary" v-on:click="exportData()">Exportar</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
    data(){
        return{
            type_export: true,
            teachersOptions:[],
            areaOptions:[],
            saveArea:{},
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
        getAreaOrClassroom(){
            if(this.type_export === true){
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
            }else{
                axios.get(`getClassroom`).then((response) => {
                    let areaOrClassroom = response.data;
                    areaOrClassroom.forEach(element => {
                        this.areaOptions.push({
                            id: element.id,
                            text: element.clasroom
                        })
                    })
                });
            }
        },
        exportData(){
            if(this.type_export === true){
                window.open(`reportNotes/${parseInt(this.saveArea.id)}/${parseInt(this.saveArea.id_classroom)}/${this.saveTeachers.text}/${this.saveArea.text}`, "_self")           
            }else{
                window.open(`reportAllCourse/${parseInt(this.saveArea.id)}`, "_self")           
            }
            
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
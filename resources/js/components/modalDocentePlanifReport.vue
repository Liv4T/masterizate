<template>
    <div class="modal fade bd-example-modal-lg" id="reportTeacherPlanifModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Reporte de Planeación</h5>
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
                    <div v-else>
                        <strong>No se encuentran areas disponibles</strong>
                    </div>
                    <div v-show="areaOptions.length > 0" class="form-goup">
                        <label>Filtro</label>
                        <div class="form-check">
                            <input v-model="planification" class="form-check-input" type="radio" name="filter" id="filter1" value="anual">
                            <label class="form-check-label" for="filter1">
                                Anual
                            </label>
                        </div>
                        <div class="form-check">
                            <input v-model="planification" class="form-check-input" type="radio" name="filter" id="filter2" value="quarters">
                            <label class="form-check-label" for="filter2">
                                Trimestral
                            </label>
                        </div>
                        <div class="form-check">
                            <input v-model="planification" class="form-check-input" type="radio" name="filter" id="filter3" value="clases">
                            <label class="form-check-label" for="filter3">
                                Clases
                            </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" v-on:click="dataExport()">Exportar</button>
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
            areaOptions:[],
            saveTeachers:{},
            planification:"",
            saveArea:[],
            anualPlanification:[],
            quaterlyPlanification:[],
            DataToExport:[]
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
                console.log(response.data)
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
        dataExport(){            
            //Organizacion de datos para exportacion mediante Planificación Anual
            if(this.planification === "anual"){
                window.open(`GetPlanificationTeacher/${this.saveTeachers.id}/${this.saveArea.id_area}/${this.saveArea.id_classroom}/${this.saveTeachers.text}`, "_self");
            //Organizacion de datos para exportacion mediante Planificación Trimestral
            }else if(this.planification === "quarters"){
                window.open(`GetPlanificationQuaterlyTeacher/${this.saveTeachers.id}/${this.saveArea.id_area}/${this.saveArea.id_classroom}/${this.saveTeachers.text}`, "_self");
            }else if (this.planification === "clases"){
                window.open(`GetPlanificationCoursesTeacher/${this.saveArea.id_area}/${this.saveArea.id_classroom}/${this.saveTeachers.text}`, "_self");
            }
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
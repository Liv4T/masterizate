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
                    <div class="form-check mb-5">
                        <input class="form-check-input" type="checkbox" v-model="show_type_import" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            <span class="dot dot_orange"></span> Reporte por Docente
                        </label>
                    </div>
                    <div v-if="show_type_import === true" class="form-goup">
                        <label>Reporte por Docente</label>
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
                    <div v-else>
                        <p>Puedes oprimir el boton de exportar para descargar el reporte completo de Materias</p>
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
export default {
    data(){
        return{
            teachersOptions:[],
            saveTeachers:{},
            DataToExport:[],
            show_type_import:true,
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
            if(this.show_type_import){
                window.open(`GetAreaToReport/${this.saveTeachers.id}`, "_self")
            }else{
                window.open(`GetMateriasToReport`, "_self")
            }       
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
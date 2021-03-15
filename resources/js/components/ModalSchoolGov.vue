<template>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Reporte de {{title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Fecha</label>
                        <input type="date" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Estudiante</label>
                        <multiselect v-model="studentsToSearch" :options="studentsOption" :multiple="false"
                            :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                            placeholder="Seleccione una o varias" label="text" track-by="id"
                            :preselect-first="false">
                            <template slot="selection" slot-scope="{ values, isOpen }"><span
                                class="multiselect__single"
                                v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                selecionadas</span></template>
                        </multiselect>
                    </div>
                    <div class="form-group">
                        <label>Docente</label>
                        <multiselect v-model="teachersToSearch" :options="teachersOption" :multiple="false"
                            :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                            placeholder="Seleccione una o varias" label="text" track-by="id"
                            :preselect-first="false">
                            <template slot="selection" slot-scope="{ values, isOpen }"><span
                                class="multiselect__single"
                                v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                selecionadas</span></template>
                        </multiselect>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Exportar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Multiselect from "vue-multiselect";
    Vue.component("multiselect", Multiselect);
    export default {
        data() {
            return {
                title:"Notas",
                studentsOption:[],
                teachersOption:[],
                teachersToSearch:{},
                studentsToSearch:{}
            }
        },
        mounted(){
            this.getTeachers();
            this.getStudents();
        },
        methods:{
            getTeachers(){
                axios.get('getTeachers').then((response)=>{                    
                    let dataTeachers = response.data;
                    if(dataTeachers){

                        dataTeachers.forEach(e => {
                            this.teachersOption.push({
                                id: e.id,
                                id_teacher: e.id,
                                text: `${e.name}`,
                            });
                        });
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            },
            getStudents(){
                axios.get('getStudents').then((response)=>{
                    let studentsData = response.data;
                    if(studentsData){
                        studentsData.forEach(e => {
                            this.studentsOption.push({
                                id: e.id,
                                id_student: e.id,
                                text: `${e.name}`,
                            });
                        });
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            }
        }
    }

</script>

<template>
    <div>
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-12">
                <div class="card mt-2 ml-3 mr-3">
                    <div class="card-header text-center">
                        <h4>Selección de estudiantes PIAR</h4>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary mt-2 ml-3" data-toggle="modal" data-target="#exampleModal">Crear Registro</button>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Grado</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Registro de estudiantes PIAR</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="students">Estudiante</label>
                            <multiselect v-model="studentsOptions" :options="allStudents" :multiple="true"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una o varias" label="text" track-by="id"
                                :preselect-first="true" required>
                                    <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                            selecionadas</span>
                                    </template>
                            </multiselect>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="updatePIARStudents">Guardar</button>
                    </div>
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
                allStudents:[],
                studentsOptions:[]
            }
        },
        
        mounted(){
            this.getAllStudents();
        },

        components: {
            Multiselect
        },

        methods:{
            getAllStudents(){
                axios.get('getAllStudents').then((response)=>{
                    let students = response.data;
                    students.forEach((el)=>{
                        this.allStudents.push({
                            id: el.user_id,
                            id_grade: el.id_grade,
                            grade: el.grade,
                            course: el.course,
                            text: el.name+' '+el.last_name
                        })
                    })
                })
            },

            updatePIARStudents(){
                this.studentsOptions.forEach((el)=>{
                    axios.put(`piar/${el.id}`,{                        
                        isPiar: true,
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>
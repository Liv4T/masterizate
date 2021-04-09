<template>
    <div class="back">
        <div id="crud" class="row justify-content-center">
            <div class="col-sm-10">
                <div class="card-header fondo text-center mb-3">
                    <h4>Activación de permiso para eliminar Clase o Ciclo</h4>
                </div>
                <div>
                    <button class="btn btn-primary mb-3" data-toggle="modal" data-target="#createRegister">Crear Registro</button>
                </div>
                <div class="card">
                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Clases</th>
                                    <th>Ciclos</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody >
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
        <div class="modal fade" id="createRegister" tabindex="-1" role="dialog" aria-labelledby="createRegisterLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="createRegisterLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="selectClass">Clase</label>
                            <multiselect name="selectClass" v-model="saveClass" :options="ClassOptions" :multiple="true"
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
                        <p class="mt-2 mb-2">Al consultar los ciclos, se habilitará el permiso para eliminar unicamente el/los ciclo(s) seleccionado(s)</p>
                        <button class="btn btn-primary mb-2" v-on:click="getCicles">Consultar Ciclo</button>
                        <div v-show="CicleOptions.length > 0" class="form-group">
                            <label for="cicleSelect">Ciclo</label>
                            <multiselect name="cicleSelect" v-model="saveCicle" :options="CicleOptions" :multiple="true"
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
                            <label for="date">Fecha para activar el permiso de eliminar</label>
                            <input v-model="date" name="date" type="date" class="form-control"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
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
        data() {
            return {
                saveClass:[],
                ClassOptions:[],
                CicleOptions:[],
                saveCicle:[],
                date:''
            }
        },
        mounted() {
            this.getArea();
        },
        components: {
            Multiselect,
        },
        methods: {
            getArea(){
                axios.get(`GetArearByUser`).then((response) => {
                    let className = response.data;
    
                    for(let i = 0; i < className.length; i++){
                        this.ClassOptions.push({
                            id: i,
                            id_area: className[i].id,
                            id_classroom: className[i].id_classroom,
                            text: className[i].text
                        })
                    }
                });
            },
            getCicles(){
                if(this.saveClass.length > 0){
                    this.CicleOptions=[];
                    this.saveClass.forEach(clas =>{
                        axios.get(`editGetWeek/${clas.id}/${clas.id_classroom}`).then((response)=> {
                            let cicles = response.data;
                            if(!cicles.length){
                                toastr.info(`No se encuentran ciclos registrados a la clase ${clas.text}`)
                            }
                            for(let i = 0; i < cicles.length; i++){
                                this.CicleOptions.push({
                                    id: cicles[i].id,
                                    text: clas.text+' - '+cicles[i].text,
                                    class: clas.text,
                                })
                            }
                        })
                    })
                }
            },
            savePermission(){

            }
        }
    }

</script>

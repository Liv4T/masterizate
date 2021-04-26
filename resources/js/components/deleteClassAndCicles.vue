<template>
    <div class="back">
        <div id="crud" class="row justify-content-center">
            <div class="col-sm-10">
                <div class="card-header fondo text-center mb-3">
                    <h4>Activación de permiso para eliminar Ciclo</h4>
                </div>
                <div>
                    <button class="btn btn-primary mb-3" data-toggle="modal" data-target="#createRegister">Crear Registro</button>
                </div>
                <div class="card">
                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Ciclos</th>
                                    <th>Fecha Inicio de permiso para Eliminar Dato</th>
                                    <th>Fecha Fin de permiso para Eliminar Dato</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(data, key) in dataToIterate" :key="key">
                                <tr>
                                    <td>{{data.text}}</td>
                                    <td>{{data.date_to_activate_btn}}</td>
                                    <td>{{data.date_to_deactivate_btn}}</td>
                                    <td>
                                        <button class="btn btn-primary mb-2 mr-2" v-on:click="update(data)">Editar</button>
                                        <button class="btn btn-primary" v-on:click="dropData(data.id)">Eliminar</button>    
                                    </td>
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
                        <h5 class="modal-title" id="createRegisterLabel">Creación de Permiso</h5>
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

                        <div class="form-group">
                            <label for="date_end">Fecha para desactivar el permiso de eliminar</label>
                            <input v-model="date_end" name="date_end" type="date" class="form-control"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" v-on:click="savePermission">Guardar Cambios</button>
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
                dataToIterate:[],
                date:'',
                date_end:'',
                is_updated: false,
                id_to_update:'',
            }
        },
        mounted() {
            this.getArea();
            this.getPermissions();
        },
        components: {
            Multiselect,
        },
        methods: {
            getPermissions(){
                axios.get('getPermissions').then((response)=>{
                    this.dataToIterate= response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            getArea(){
                axios.get(`GetArearByUser`).then((response) => {
                    let className = response.data;
    
                    for(let i = 0; i < className.length; i++){
                        this.ClassOptions.push({
                            id: className[i].id+className[i].id_classroom,
                            id_area: className[i].id,
                            id_classroom: className[i].id_classroom,
                            text: className[i].text
                        })
                    }
                });
            },
            getCicles($id_cicle){
                if(this.saveClass.length > 0){
                    this.CicleOptions=[];
                    this.saveClass.forEach(clas =>{
                        axios.get(`editGetWeek/${clas.id_area}/${clas.id_classroom}`).then((response)=> {
                            let cicles = response.data;
                            if(!cicles.length){
                                toastr.info(`No se encuentran ciclos registrados a la clase ${clas.text}`)
                            }
                            for(let i = 0; i < cicles.length; i++){
                                this.CicleOptions.push({
                                    id: cicles[i].id,
                                    text: clas.text+' - '+cicles[i].text,
                                    class: clas.text,
                                    class_selected: clas.id_classroom,
                                    area_selected: clas.id_area,
                                })
                            }
                            if($id_cicle !== null){
                                for(let i = 0; i < cicles.length; i++){
                                    if($id_cicle === cicles[i].id){
                                        this.saveCicle.push({
                                            id: cicles[i].id,
                                            text: clas.text+' - '+cicles[i].text,
                                            class: clas.text,
                                            class_selected: clas.id_classroom,
                                            area_selected: clas.id_area,
                                        })
                                    }
                                }
                            }
                        })
                    })
                }
            },
            savePermission(){
                if(this.is_updated === false){
                    if(this.saveCicle.length > 0){
                        this.saveCicle.forEach(cicle => {
                            axios.post('activeElimination',{
                                id_cicle: cicle.id,
                                date_to_activate_btn:this.date,
                                date_to_deactivate_btn:this.date_end,
                                text: cicle.text,
                                class_selected: cicle.class_selected,
                                area_selected: cicle.area_selected,
                            }).then((response)=> {
                                this.date = '',
                                this.date_end = '',
                                this.saveCicle = []
                                toastr.success(response.data)
                            }).catch((error)=> { 
                                toastr.info('Intentalo de nuevo mas tarde')
                            })
                        })
                    }
                    this.getPermissions();
                    $('#createRegister').modal('hide');
                }else{
                    if(this.saveCicle.length > 0){
                        this.saveCicle.forEach(cicle => {
                            axios.put(`activeElimination/${this.id_to_update}`,{
                                id_cicle: cicle.id,
                                date_to_activate_btn:this.date,
                                date_to_deactivate_btn:this.date_end,
                                text: cicle.text,
                                class_selected: cicle.class_selected,
                                area_selected: cicle.area_selected
                            }).then((response)=> {
                                this.date = '',
                                this.date_end = '',
                                this.saveCicle = []
                                toastr.success(response.data)
                            }).catch((error)=> { 
                                toastr.info('Intentalo de nuevo mas tarde')
                            })
                        })
                    }
                    this.getPermissions();
                    this.saveClass = [];
                    this.saveCicle = [];
                    $('#createRegister').modal('hide');
                }
                
            },
            update(data){
                this.is_updated = true;
                this.date = data.date_to_activate_btn
                this.date_end = data.date_to_deactivate_btn
                this.saveClass.push({
                    id: data.area_selected+data.class_selected,
                    id_area: data.area_selected,
                    id_classroom: data.class_selected,
                    text: data.text,
                })
                this.id_to_update = data.id;
                this.getCicles(data.id_cicle);
                    
                $('#createRegister').modal('show');
            },
            dropData(id){
                axios.delete(`activeElimination/${id}`).then((response)=>{
                    toastr.info(response.data);
                    this.getPermissions();
                }).catch((error)=>{
                    toastr.error('Hubo un problema, intentelo de nuevo mas tarde');
                    console.log(error);
                    this.getPermissions();
                })
            }
        }
    }

</script>
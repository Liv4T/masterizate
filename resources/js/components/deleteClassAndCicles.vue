<template>
    <div>
        <div id="crud" class="row justify-content-center">
            <button class="btn btn-primary mb-3 ml-2" data-toggle="modal" data-target="#createRegister">Crear Registro</button>
            <button class="btn btn-primary mb-3 ml-2" v-on:click="showTablePermission">{{showPermission ? 'Ocultar Permisos': 'Mostrar Permisos'}}</button>
            <button class="btn btn-primary mb-3 ml-2" v-on:click="showAllCicles">{{showCicles ? 'Ocultar Todos Ciclos': 'Mostrar Todos Ciclos'}}</button>
        </div>
        <div v-if="showCicles === false">
            <div>
                <div id="crud" class="row justify-content-center">
                    <div class="col-sm-11">
                        <table-delete-class-and-cicles :showPermission="showPermission" :getCicles="getCicles"></table-delete-class-and-cicles>
                        <div class="card-header fondo text-center mb-3">
                            <h4>Registro de Permiso para eliminar Ciclo</h4>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <input type="text" class="form-control mb-2" placeholder="Buscar Por Materia - Salon" v-model="search_class">
                                <div id="accordion" v-for="(data, key) in dataToIterate" :key="key">
                                    <div class="card" v-if="search_class =='' || filterClass(key)">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse${key.replace(/ /g, '')}`" aria-expanded="true" :aria-controls="`collapse${key.replace(/ /g, '')}`">
                                                    {{key}}
                                                </button>
                                            </h5>
                                        </div>

                                        <div :id="`collapse${key.replace(/ /g, '')}`" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body">
                                                <input type="text" class="form-control" placeholder="Buscar Por Ciclo" v-model="search_filter">
                                                <table class="table table-responsive-xl table-hover table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Ciclos</th>
                                                            <th>Fecha Inicio de permiso para Eliminar Dato</th>
                                                            <th>Fecha Fin de permiso para Eliminar Dato</th>
                                                            <th>Acción</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-for="(data, key) in data" :key="key">
                                                        <tr v-if="search_filter =='' || filterCicle(data.text)">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <teacher-courses></teacher-courses>
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
import TableDeleteClassAndCicles from './TableDeleteClassAndCicles.vue';
    Vue.component("multiselect", Multiselect);
    export default {
        data() {
            return {
                showCicles:false,
                saveClass:[],
                ClassOptions:[],
                CicleOptions:[],
                saveCicle:[],
                dataToIterate:[],
                date:'',
                date_end:'',
                is_updated: false,
                search_filter:'',
                search_class: '',
                id_to_update:'',
                showPermission: false
            }
        },
        mounted() {
            this.getData();
        },
        components: {
            Multiselect,
            TableDeleteClassAndCicles,
        },
        methods: {
            getData(){
                this.getArea();
                this.getPermissions();
            },
            getPermissions(){
                axios.get('getPermissions').then((response)=>{
                    this.groupData(response.data);
                    
                }).catch((error)=>{
                    console.log(error);
                })
            },
            groupData(data){
                const result = _.chain(data).groupBy("class").value();
                this.dataToIterate = result
            },
            showTablePermission(){
                this.showPermission = !this.showPermission;
            },
            showAllCicles(){
                this.showCicles = !this.showCicles;
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
                            console.log('Ciclo',cicle)
                            axios.post('deleteClassAndCicles',{
                                id_cicle: cicle.id,
                                date_to_activate_btn:this.date,
                                date_to_deactivate_btn:this.date_end,
                                text: cicle.text,
                                class: cicle.class,
                                class_selected: cicle.class_selected,
                                area_selected: cicle.area_selected,
                            }).then((response)=> {
                                if(this.id_to_update){
                                    axios.put(`updatedResponded_at/${this.id_to_update}`);
                                }
                                this.date = '',
                                this.date_end = '',
                                this.saveCicle = []
                                toastr.success(response.data)
                            }).catch((error)=> { 
                                toastr.info('Intentalo de nuevo mas tarde')
                            })
                        })
                    }
                    this.saveClass = [];
                    this.saveCicle = [];
                    this.getPermissions();
                    $('#createRegister').modal('hide');
                }else{
                    if(this.saveCicle.length > 0){
                        this.saveCicle.forEach(cicle => {
                            axios.put(`deleteClassAndCicles/${this.id_to_update}`,{
                                id_cicle: cicle.id,
                                date_to_activate_btn:this.date,
                                date_to_deactivate_btn:this.date_end,
                                text: cicle.text,
                                class: cicle.class,
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
                    id_area: data.area_selected ? data.area_selected : data.id_area,
                    id_classroom: data.class_selected ? data.class_selected : data.id_classroom,
                    text: data.text ? data.text : data.cicle,
                })
                this.id_to_update = data.id;
                this.getCicles(data.id_cicle);
                    
                $('#createRegister').modal('show');
            },            
            dropData(id){
                if (window.confirm("Desea Eliminar este Ciclo?")) {
                    axios.delete(`deleteClassAndCicles/${id}`).then((response)=>{
                        toastr.info(response.data);
                        this.getPermissions();
                    }).catch((error)=>{
                        toastr.error('Hubo un problema, intentelo de nuevo mas tarde');
                        console.log(error);
                        this.getPermissions();
                    })
                }
            },
            filterCicle(cicleName){
                return cicleName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            },        
            filterClass(clas){
                return clas.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_class.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            },
        }
    }
</script>
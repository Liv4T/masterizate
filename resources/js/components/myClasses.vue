<template>
    <div v-if="createClas === 'hide'">
        <div class="card-header text-center fondo row" data-v-step="0">
            <div class="card-center">
                <label class="card-text">Mis clases</label>
            </div>
            <div style="margin-left:auto">
                <a class="btn" @click="toggle">
                    <i class="fa fa-question-circle" style="font-size:35px; color:#278080;"></i>
                </a>
            </div>
        </div>
        <tour-configuration :step="steps" :condition="condition"></tour-configuration>
        <Drawer @close="toggle" align="right" :maskClosable="true" :zIndex="1003" :closeable="true">
            <div v-if="open">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Mis clases</h1>
                        <p>Desde aquí podrás crear tus clases, haciendo click en el botón de "Crear clase" te lleva al formulario para crear la clase.</p>
                        <img src="../assets/img/my_classes.png" alt="my_classes" width="350px" height="350px" style="margin-bottom:10px">
                        <p>En la parte inferior hay una tabla donde se listan las clases creadas.</p>
                        <img src="../assets/img/table_my_classes.png" alt="table_my_classes" width="350px" height="350px" style="margin-bottom:10px">
                    </div>
                </div>
            </div>
        </Drawer>
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-12" style="padding: 0;">
                <div class="card text-center">
                    <span class="classroom-label">{{ nameArea }}</span>
                    <div class="card-body">
                        <div class="text-left">
                            <!-- <a v-if="cleanIdModule" class="btn btn-primary" v-on:click="cleanIdModule">Regresar</a> -->
                            <a class="btn btn-primary"  href="/inicio">Regresar</a>
                            <a class="btn btn-primary" v-on:click="createClass(idClassroom)" data-v-step="2" style="color:#ffffff">Crear
                                Clase</a>
                            <a class="btn btn-primary text-right" :href="''"
                                v-on:click.prevent="openModal()" data-v-step="1">Eliminar</a>
                        </div>
                        <br>
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <thead>
                                <tr>
                                    <th class="text-center">Clases</th>
                                    <th class="text-center">Acción</th>
                                    <!--<th class="text-center">Estado</th>-->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(clas, t) in fillS" :key="t">
                                    <td v-if="clas.status!=0">{{ clas.name }}</td>
                                    <td v-if="clas.status!=0">
                                        <a class="btn btn-primary" v-on:click="getClass(clas.id)">Ir a clase</a>
                                    </td>
                                    <!-- <td>
                                          <span class="class-inactive" v-if="clas.status==1">Clase cerrada</span>
                                        <button v-if="clas.status==0" class="btn btn-primary" @click="enabledClass(clas)">Cerrar clase</button>
                                    </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="openModal">
            <div class="modal-lg modal-dialog">
                <div class="modal-content">
                    <form class="needs-validation" v-on:submit.prevent="deactivateData()" novalidate>
                        <div class="modal-header">
                            <h4>Eliminar Clase</h4>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group row justify-content-center">
                                <div class="col-md-6">
                                    <label for="name">Ciclos</label>
                                    <multiselect v-model="ciclesData" :options="cicles" :multiple="false"
                                        :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                        placeholder="Seleccione una o varias" label="text" track-by="id"
                                        :preselect-first="true">
                                        <template slot="selection" slot-scope="{ values, isOpen }"><span
                                                class="multiselect__single"
                                                v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                                selecionadas</span></template>
                                    </multiselect>
                                </div>
                                <div class="col-md-6">
                                    <label for="name">Clases</label>
                                    <multiselect v-model="clasesByCiclesData" :options="clasesByCicles" :multiple="true"
                                        :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                        placeholder="Seleccione una o varias" label="text" track-by="id"
                                        :preselect-first="true">
                                        <template slot="selection" slot-scope="{ values, isOpen }"><span
                                                class="multiselect__single"
                                                v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                                selecionadas</span></template>
                                    </multiselect>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="submit" class="btn btn-danger" value="Eliminar" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="createClas === 'show'">
        <teacher-course :id_classroom="idClassroom" :id_area="idAreas" :id_class="0" :cleanCreateClas="cleanCreateClas"></teacher-course>
    </div>
    <div v-else-if="createClas === 'showEdit'">
        <teacher-course :id_classroom="idClassroom" :id_area="idAreas" :id_class="idClass" :cleanCreateClas="cleanCreateClas"></teacher-course>
    </div>
</template>
<script>
    import {
        RsiIndicator
    } from "@syncfusion/ej2-vue-charts";
    import Drawer from "vue-simple-drawer";
    export default {
        props: ["idAreas","idClassroom","user"],
        data() {
            return {
                clases: [],
                areas: [],
                cicles: [],
                clasesByCicles: [],
                clasesByCiclesData: [],
                ciclesData: {},
                descripcion: "",
                logro: "",
                fechaE: "",
                fechaR: "",
                id_act: "",
                errors: [],
                fillS: [],
                nameWeekly: "",
                nameArea: "",
                id_area: "",
                id_classroom: "",
                createClas: 'hide',
                idClass:"",
                open: false,
                steps: [
                    {
                        target: '[data-v-step="0"]',
                        header: {
                            title: 'Mis clases',
                        },
                        content: `Desde aquí podrás <strong>crear tus clases</strong> para cada programa!`,
                        params: {
                            placement: 'bottom', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                            enableScrolling: false
                        }
                    },
                    {
                        target: '[data-v-step="1"]',
                        content: 'Las clases se pueden eliminar!',
                        params: {
                            placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                            enableScrolling: false,
                        }
                    },
                    {
                        target: '[data-v-step="2"]',
                        content: 'Aquí puedes crear tus clases haciendo click en el botón!',
                        params: {
                            placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                            enableScrolling: false
                        }
                    }
                ],
                condition:"my_classes",
            };
        },
        components: {
            Drawer,
        },
        created() {},
        mounted() {
            this.getData();
        },
        watch:{
            ciclesData(newData){
                if(newData){
                    this.getClassToDelete(newData.id);
                }
            }
        },
        methods: {
            getData(){
                this.fillS = [];
                this.areas = [];
                this.getClasses();

            },
            toggle() {
                this.open = !this.open;
            },
            enabledClass: function (clas) {
                axios.put(`/api/admin/module/${this.id_module}/class/${clas.id}/close`).then(response => {
                    this.getClasses();
                });
            },
            getClasses() {
                var urlr = window.location.origin + "/showClassByClassroom/" + this.idAreas + "/" + this.idClassroom;
                axios.get(urlr).then(response => {
                    this.fillS = response.data.clase;

                    if (response.data.area && response.data.classroom)
                        this.nameArea = response.data.classroom.name;

                        this.id_area = response.data.area;
                        this.id_classroom = response.data.classroom.id;
                });
            },

            getClassToDelete(id_cicle){
                var urls = window.location.origin + "/showClass/" + id_cicle;
                axios.get(urls).then(response => {
                    var clasesClean = response.data.clase;
                    for (const key in clasesClean) {
                        if (clasesClean[key].state === 1) {
                            this.clasesByCicles.push({
                                'id': clasesClean[key].id,
                                'id_weekly_plan': clasesClean[key].id_weekly_plan,
                                'text': clasesClean[key].name,
                            })
                        }
                    }
                }).catch(error => {
                    console.log(error);
                })
            },
            //Funcion creada para Mostrar el modal
            openModal() {
                $("#openModal").modal("show");
            },
            /*
                Funcion para recoger la data acumulada de las clases y los ciclos para su desactivación.
                se comenta la linea 203 la cual obtiene los ciclos seleccionados, en caso de ser necesarios
                se puede descomentar la linea para settear el array de ciclos al backend
            */
            deactivateData() {
                var dataToDeactivate = [{
                    // 'cicles': this.ciclesData,
                    'clases': this.clasesByCiclesData
                }]
                axios.put('/test', dataToDeactivate).then(response => {
                    toastr.success("Dato desactivado correctamente");
                    $("#openModal").modal("hide");
                    this.getClasses();
                }).catch(error => {
                    console.log(error);
                })
            },

            createClass(id_classroom){
                console.log('id_classroom',id_classroom);
                if(id_classroom){
                    this.createClas = 'show';
                }
            },

            getClass(id_class){
                if(id_class){
                    this.idClass = id_class;
                    this.createClas = 'showEdit'
                }
            },

            cleanCreateClas(){
                this.createClas = 'hide';
                this.getData();
            },
        }
    };

</script>
<style>
    .class-inactive {
        margin: 10px;
        font-weight: bold;
        color: #F79D52;
    }

</style>

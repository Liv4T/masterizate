<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h5 class="card-header fondo">Ciclo</h5>
                    <h3 class="card-header fondo">{{ nameWeekly }}</h3>
                    <span class="classroom-label">{{ nameArea }}</span>
                    <div class="card-body">
                        <div class="text-left">
                            <a class="btn btn-primary" :href="'/docente/modulo/' + id_module +'/clase/nueva'">Crear
                                Clase</a>
                            <a class="btn btn-primary text-right" :href="''"
                                v-on:click.prevent="openModal()">Eliminar</a>
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
                                        <a class="btn btn-primary" :href="
                                            '/docente/modulo/' +
                                                id_module +
                                            '/clase/' +
                                                clas.id
                                        ">Ir a clase</a>
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
                                    <multiselect v-model="ciclesData" :options="cicles" :multiple="true"
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
</template>
<script>
    import {
        RsiIndicator
    } from "@syncfusion/ej2-vue-charts";
    export default {
        props: ["id_module"],
        data() {
            return {
                clases: [],
                areas: [],
                cicles: [],
                clasesByCicles: [],
                clasesByCiclesData: [],
                ciclesData: [],
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
                id_classroom: ""
            };
        },
        created() {},
        mounted() {
            this.fillS = [];
            this.areas = [];
            this.getClasses();
            var urls = window.location.origin + "/GetNameWeekly/" + this.id_module;

            axios.get(urls).then(response => {
                this.nameWeekly = response.data;
                this.getCiclesAndClasses();
            });
        },
        methods: {
            enabledClass: function (clas) {
                axios.put(`/api/admin/module/${this.id_module}/class/${clas.id}/close`).then(response => {
                    this.getClasses();
                });
            },
            getClasses() {
                var urlr = window.location.origin + "/showClass/" + this.id_module;
                axios.get(urlr).then(response => {
                    this.fillS = response.data.clase;

                    if (response.data.area && response.data.classroom)
                        this.nameArea = `${response.data.area.name} ${response.data.classroom.name}`;

                    this.id_area = response.data.area.id;
                    this.id_classroom = response.data.classroom.id;
                });
            },
            //Funcion para obtener las clases y los ciclos para mostrar en los multiselect 
            async getCiclesAndClasses() {
                this.ciclesData.push({
                    'id': this.id_module,
                    'id_area': this.id_area,
                    'id_classroom': this.id_classroom,
                    'text': this.nameWeekly
                })

                var urlsel = "/editGetWeek/" + this.id_area + "/" + this.id_classroom;
                axios.get(urlsel).then((response) => {
                    /* 
                        Se asigna la data a la variable ciclesClean 
                        para su mejor uso paso seguido se itera y asigna al array cicles
                    */
                    var ciclesClean = response.data;
                    for (const key in ciclesClean) {
                        this.cicles.push({
                            'id': ciclesClean[key].id,
                            'id_area': ciclesClean[key].id_area,
                            'id_classroom': ciclesClean[key].id_classroom,
                            'text': ciclesClean[key].text,
                        })
                    }

                    /*
                        Se itera nuevamente los ciclos 
                        ya organizados para poder obtener 
                        todas las clases de los ciclos ya consultados
                    */
                    for (const key in ciclesClean) {
                        var urls = window.location.origin + "/showClass/" + ciclesClean[key].id;
                        axios.get(urls).then(response => {
                            var clasesClean = response.data.clase;
                            for (const key in clasesClean) {
                                if (clasesClean[key].status === 1) {
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
                    }
                }).catch(error => {
                    console.log(error);
                });

            },
            //Funcion creada para Mostrar el modal
            openModal() {
                $("#openModal").modal("show");
            },
            /* 
                Funcion para recoger la data acumulada de las clases y los ciclos para su desactivación.
                se comenta la linea 216 la cual obtiene los ciclos seleccionados, en caso de ser necesarios 
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
            }
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

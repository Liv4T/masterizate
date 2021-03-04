<template>
    <div>
        <div class="row">
            <div class="col-md-11">
                <div class="row justify-content-center">
                    <h4>Reuniones</h4>
                </div>
                <div class="row" v-for="(parents, k) in parents" :key="k">
                    <div class="col-12">
                        <div class="card">
                            <div class="class-event">
                                <div class="class-event-info">{{parents.name_event}} </div>
                                <div class="class-event-date">
                                    <div>
                                        <small>Desde:</small>
                                        <span>{{parents.date_start}}</span>
                                    </div>
                                    <div>
                                        <small>Hasta:</small>
                                        <span>{{parents.date_end}}</span>
                                    </div>
                                </div>
                                <div class="class-event-action">
                                    <a class="btn btn-primary" html:type="_blank" :href="parents.link">Ir a
                                        Reunion</a>
                                </div>
                            </div>
                            <div class="class-event-footer ">
                                <div class="class-event-action">
                                    <button class="btn btn-primary"
                                        v-on:click.prevent="editE(parents.id)">Editar</button>
                                    <button class="btn btn-danger"
                                        v-on:click.prevent="deleteE(parents.id)">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editE">
            <div class="modal-lg modal-dialog">
                <div class="modal-content">
                    <form class="needs-validation" v-on:submit.prevent="updateInvitation" novalidate>
                        <div class="modal-header">
                            <h4>Editar evento</h4>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group row justify-content-center">
                                <div class="col-md-6">
                                    <label for="name">Evento concurrente</label>
                                    <select class="form-control" v-model="typeEvent" @change="selectChange" readonly>
                                        <option :value="options.id" v-for="(options, key) in concurrent" :key="key">
                                            {{
                                                options.type
                                            }}
                                        </option>
                                    </select>
                                </div>
                                <div style="display: none;" id="divDia" class="col-md-6">
                                    <label id="diaLabel">Dia de la semana</label>
                                    <select class="form-control" name="dia" id="dia" v-model="day_week" readonly>
                                        <option :value="options.id" v-for="(options, key) in dias" :key="key">
                                            {{
                                            options.dia
                                        }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="name">Nombre del evento</label>
                                    <input type="text" name="name" class="form-control" v-model="name_event" />
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="name">Desde</label>
                                    <datetime v-model="date_start"></datetime>
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                                <div class="col-md-6">
                                    <label for="name">Hasta</label>
                                    <datetime v-model="date_end"></datetime>
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="col-md-6">
                                    <strong for="name">Enlace de Meet</strong>
                                    <input type="text" name="name" class="form-control" v-model="link" />
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="submit" class="btn btn-warning" value="Guardar" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import moment from 'moment'

    moment.tz.setDefault("America/Bogota");
    moment.locale('es');

    import datetime from "vuejs-datetimepicker";
    import Multiselect from "vue-multiselect";
    Vue.use(require("vue-moment"));
    Vue.component("multiselect", Multiselect);
    export default {
        props: [
            "concurrent",
            "type_u",
            "user",
            "dias"
        ],
        data() {
            return {
                parents: [],
                typeEvent: "",
                name_event: "",
                link: "",
                idToEdit:"",
                formatDate:"",
                day_week:"",
                date_start: [],
                date_end: [],
            }
        },
        mounted() {
            this.getData();
        },
        filters: {
            formatDate: (value) => {
                if (value) {
                    return moment(String(value)).format('DD MMMM YYYY hh:mm a')
                }
            }
        },
        components: {
            datetime,
            Multiselect
        },
        methods: {
            getData() {
                axios.get("/getInvitations").then((response) => {
                    this.parents = response.data;
                }).catch(() => {
                    toastr.error("Intenta de nuevo mas tarde")
                })
            },
            editE(id) {
                this.dataToEdit = [];
                var urlM = "/parents/" + id;
                axios.get(urlM).then((response) => {
                    this.dataToEdit = response.data;
                    this.name_event = this.dataToEdit.name_event;
                    this.date_start = this.dataToEdit.date_start;
                    this.date_end = this.dataToEdit.date_end;
                    this.link = this.dataToEdit.link;
                    this.typeEvent = this.dataToEdit.type_event ? parseInt(this.dataToEdit.type_event) : 0,
                    this.idToEdit = id;
                });
                $("#editE").modal("show");
            },
            deleteE(id) {
                if (window.confirm("Deseas eliminar este dato?")) {
                    axios.delete("/parents/" + id).then(() => {
                        toastr.success("Dato Eliminado")
                    });
                    this.getData();
                }
            },
            selectChange() {
                if (this.typeEvent === "2") {
                    document.getElementById("divDia").style.display = "block";
                    this.formatDate = "H:i:s";
                } else if (this.typeEvent === "3") {
                    document.getElementById("divDia").style.display = "none";
                    this.formatDate = "YYYY-MM-DD H:i:s";
                } else if (this.typeEvent === "1") {
                    document.getElementById("divDia").style.display = "none";
                    this.formatDate = "H:i:s";
                } else if (this.typeEvent === "0") {
                    document.getElementById("divDia").style.display = "none";
                    this.formatDate = "YYYY-MM-DD H:i:s";
                }
            },
            updateInvitation(){
                axios.put("parents/"+this.idToEdit,{
                    name_event: this.name_event,
                    date_start: this.date_start,
                    date_end: this.date_end,
                    link:this.link
                }).then(()=>{
                    toastr.success("Datos Actualizados");
                    this.getData();
                    $("#editE").modal("hide");
                }).catch(()=>{
                    toastr.error("Intenta de nuevo mas tarde")
                })
            }
        }
    }

</script>

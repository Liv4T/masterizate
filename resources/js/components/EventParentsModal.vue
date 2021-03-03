<template>
    <div class="modal fade" id="createEvent">
        <div class="modal-lg modal-dialog">
            <div class="modal-content">
                <form class="needs-validation" v-on:submit.prevent="createInvitation" novalidate>
                    <div class="modal-header">
                        <h4>Crear evento para alguien</h4>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row justify-content-center">
                            <div class="col-md-6">
                                <label for="name">Evento concurrente</label>
                                <select class="form-control" v-model="typeEvent" @change="selectChange">
                                    <option :value="options.id" v-for="(options, key) in concurrent" :key="key">
                                        {{
                                            options.type
                                        }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label style="display: none;" id="labeldia">Dia de la semana</label>
                                <select class="form-control" name="dia" id="dia" v-model="diaSemana"
                                    style="display:none">
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
                                <input type="text" name="name" class="form-control" v-model="nameEvent" />
                                <div class="invalid-feedback">Please fill out this field</div>
                            </div>
                            <div class="col-md-6">
                                <label for="name">Asunto del evento</label>
                                <input type="text" name="subject" class="form-control" v-model="subject" />
                                <div class="invalid-feedback">Please fill out this field</div>
                            </div>
                            <div class="col-md-6">
                                <label for="invitations">Invitaciones</label>
                                <multiselect v-model="invitationsGet" :options="invitations" :multiple="true"
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
                        <div class="form-group row">
                            <div class="col-md-6">
                                <label for="name">Desde</label>
                                <datetime :format="formatDate" v-model="desde"></datetime>
                                <div class="invalid-feedback">Please fill out this field</div>
                            </div>
                            <div class="col-md-6">
                                <label for="name">Hasta</label>
                                <datetime :format="formatDate" v-model="hasta"></datetime>
                                <div class="invalid-feedback"></div>
                            </div>
                            <div class="col-md-6">
                                <strong for="name">Enlace de Meet</strong>
                                <input type="text" name="name" class="form-control" v-model="nameMeet" />
                                <div class="invalid-feedback">Please fill out this field</div>
                            </div>
                        </div>
                        <div class="col-md-6" style="display: none;">
                            <strong for="name">id ultimo</strong>
                            <input type="text" name="id_padre" class="form-control" v-model="lastId" />
                            <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                        <div class="modal-footer">
                            <input type="submit" class="btn btn-warning" value="Guardar" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment'

    moment.tz.setDefault("America/Bogota");
    moment.locale('es');

    import datetime from "vuejs-datetimepicker";
    import Multiselect from "vue-multiselect";
    Vue.use(require("vue-moment"));
    Vue.component("multiselect", Multiselect);
    export default {

        props: ["concurrent", "type_u", "dias", "clases", "user","getInvitations"],
        data() {
            return {
                desde: "",
                hasta: "",
                nameEvent: "",
                nameMeet: "",
                diaSemana: "",
                formatDate: "",
                typeEvent: "",
                subject:"",
                lastId: [],
                invitations: [],
                invitationsGet: []
            };
        },
        components: {
            datetime,
            Multiselect
        },
        filters: {
            formatDate: (value) => {
                if (value) {
                    return moment(String(value)).format('DD MMMM YYYY hh:mm a')
                }
            }
        },
        mounted() {
            console.log("datos del usuario", this.user);
            var urlUsers = 'invitations'
            axios.get(urlUsers).then((response) => {
                let arrayData = response.data;

                arrayData[0].forEach(e => {
                    this.invitations.push({
                        is_lective: true,
                        id: e.id,
                        email: e.email,
                        text: e.name + ' ----- '+' Administrador '
                    });
                });

                arrayData[1].forEach(e => {
                    this.invitations.push({
                        is_lective: true,
                        id: e.id,
                        email: e.email,
                        text: e.name + ' ----- '+' Docente '
                    });
                });
                 
                arrayData[2].forEach(e => {
                    this.invitations.push({
                        is_lective: true,
                        id: e.id,
                        email: e.email,
                        text: e.name + ' ----- '+' Psicologia '
                    });
                });
            });
        },
        methods: {
            selectChange() {
                if (this.typeEvent == 2) {
                    document.getElementById("dia").style.display = "block";
                    document.getElementById("labeldia").style.display = "block";
                    this.formatDate = "H:i:s";
                    this.last_insert()
                } else if (this.typeEvent == 3) {
                    document.getElementById("dia").style.display = "none";
                    document.getElementById("labeldia").style.display = "none";
                    this.formatDate = "YYYY-MM-DD H:i:s";
                } else if (this.typeEvent == 1) {
                    document.getElementById("dia").style.display = "none";
                    document.getElementById("labeldia").style.display = "none";
                    this.formatDate = "H:i:s";
                    this.last_insert()
                } else if (this.typeEvent == 0) {
                    document.getElementById("dia").style.display = "none";
                    document.getElementById("labeldia").style.display = "none";
                    this.formatDate = "YYYY-MM-DD H:i:s";
                }
            },
            last_insert() {
                var urlId = "lastId";
                axios.get(urlId).then((response) => {
                    this.lastId = response.data;
                    console.log(response.data);
                })
            },
            createInvitation() {
                const url = 'notes';
                this.invitationsGet.forEach(element => {
                    axios.post(url, {
                        name_event:this.nameEvent,
                        date_start: this.desde,
                        date_end: this.hasta,
                        link: this.nameMeet,
                        day_week: this.diaSemana,
                        type_event: this.typeEvent,
                        email_invited: element.email,
                        id_invited: element.id,
                        id_sender: this.user.id
                    }).then(response=>{
                        console.log(response)
                        this.getInvitations;
                        toastr.success("Invitación enviada correctamente");
                    })
                });
                this.nameEvent ="",
                this.desde ="",
                this.hasta = "",
                this.nameMeet = "",
                this.diaSemana = "",
                this.subject = "",
                this.typeEvent = [],
                this.invitationsGet= []
            }
        }
    }

</script>

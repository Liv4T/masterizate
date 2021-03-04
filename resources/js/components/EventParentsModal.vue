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

        props: ["concurrent", "type_u", "dias", "clases", "user", "getInvitations"],
        data() {
            return {
                desde: "",
                hasta: "",
                nameEvent: "",
                nameMeet: "",
                diaSemana: "",
                formatDate: "",
                typeEvent: "",
                lastId: [],
                invitations: [],
                invitationsGet: [],
                arrayDaysEvent: [],
                arrayDaysEventMes: [],
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
            var urlUsers = 'invitations'
            axios.get(urlUsers).then((response) => {
                let arrayData = response.data;

                arrayData[0].forEach(e => {
                    this.invitations.push({
                        is_lective: true,
                        id: e.id,
                        email: e.email,
                        text: e.name + ' ----- ' + ' Administrador '
                    });
                });

                arrayData[1].forEach(e => {
                    this.invitations.push({
                        is_lective: true,
                        id: e.id,
                        email: e.email,
                        text: e.name + ' ----- ' + ' Docente '
                    });
                });

                arrayData[2].forEach(e => {
                    this.invitations.push({
                        is_lective: true,
                        id: e.id,
                        email: e.email,
                        text: e.name + ' ----- ' + ' Psicologia '
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
                })
            },
            concurrentDays() {
                if (this.typeEvent ==
                    1) { //Crear eventos de lunes a viernes y omitimos los dias que ya pasaron de la semana

                    var date2 = new Date();
                    if (date2.getDay() == 6) {
                        date2.setDate(date2.getDate() + 2);
                    }
                    if (date2.getDay() == 0) {
                        date2.setDate(date2.getDate() + 1);
                    }
                    var dayOfWeek = date2.getDay();
                    this.arrayDaysEvent = [];
                    for (var i = 0; i < 5; i++) {
                        if (i - dayOfWeek != -1) {
                            var days = i - dayOfWeek + 1;
                            var newDate = new Date(date2.getTime() + (days * 24 * 60 * 60 * 1000));
                            newDate = moment(String(newDate)).format('YYYY-MM-DD');
                            if (i + 1 >= dayOfWeek) {
                                this.arrayDaysEvent.push(newDate);
                            }
                        } else {
                            var date3 = moment(String(date2)).format('YYYY-MM-DD');
                            this.arrayDaysEvent.push(date3);
                        }
                    }
                }
                if (this.typeEvent == 2) { //Crear eventos un dia especifico de la semana 

                    this.arrayDaysEvent = [];
                    var hoy = new Date();
                    var hasta = new Date();
                    hasta.setDate(hasta.getDate() + 365);

                    while (moment(hoy).isSameOrBefore(hasta)) {

                        if (this.diaSemana == hoy.getDay()) {

                            this.arrayDaysEvent.push(moment(hoy).format('YYYY-MM-DD'));

                        }

                        hoy.setDate(hoy.getDate() + 1);

                    }
                }

                if (this.typeEvent == 3) { //Crear evento una vez por mes

                    this.arrayDaysEvent = [];
                    this.arrayDaysEventMes = [];
                    var desde = new Date(this.desde);
                    var hasta = new Date(this.desde);
                    var desde2 = new Date(this.hasta);
                    var hasta2 = new Date(this.hasta);
                    hasta.setDate(hasta.getDate() + 365);
                    hasta2.setDate(hasta2.getDate() + 365);
                    var dia = desde.getDate(desde);
                    var dia2 = desde2.getDate(desde2);
                    while (moment(desde).isSameOrBefore(hasta)) {
                        var dayMonth = desde.getDate(desde);
                        if (dayMonth == dia) {

                            this.arrayDaysEvent.push(moment(desde).format('YYYY-MM-DD H:mm:ss'));

                        }
                        desde.setDate(desde.getDate() + 1);
                    }
                    while (moment(desde2).isSameOrBefore(hasta2)) {
                        var dayMonth = desde2.getDate(desde2);
                        if (dayMonth == dia2) {

                            this.arrayDaysEventMes.push(moment(desde2).format('YYYY-MM-DD H:mm:ss'));

                        }

                        desde2.setDate(desde2.getDate() + 1);

                    }
                }
                if (this.typeEvent == 0) {

                    this.arrayDaysEvent = [];
                    this.formatDate = "YYYY-MM-DD H:i:s";

                }
            },
            createInvitation() {
                this.concurrentDays();
                const url = 'parents';
                if (this.typeEvent == 0) {
                    this.invitationsGet.forEach(element => {
                        axios.post(url, {
                            name_event: this.nameEvent,
                            date_start: this.desde,
                            date_end: this.hasta,
                            link: this.nameMeet,
                            day_week: this.diaSemana,
                            type_event: this.typeEvent,
                            email_invited: element.email,
                            id_invited: element.id,
                            id_sender: this.user.id
                        }).then(() => {
                            toastr.success("Invitación enviada correctamente");
                            $("#createEvent").modal("hide");
                        })
                    });
                } else if (this.typeEvent == 1 || this.typeEvent == 2) {
                    for (let i = 0; i < this.invitationsGet.length; i++) {
                        for (let j = 0; j < this.arrayDaysEvent.length; j++) {
                            axios.post(url, {
                                name_event: this.nameEvent,
                                date_start: this.arrayDaysEvent[j] + " " + this.desde,
                                date_end: this.arrayDaysEvent[j] + " " + this.hasta,
                                link: this.nameMeet,
                                day_week: this.diaSemana,
                                type_event: this.typeEvent,
                                email_invited: this.invitationsGet[i].email,
                                id_invited: this.invitationsGet[i].id,
                                id_sender: this.user.id
                            }).then(() => {
                                toastr.success("Invitación enviada correctamente");
                            })
                        }
                    }
                }else if (this.typeEvent == 3) {
                    for (let i = 0; i < this.invitationsGet.length; i++) {
                        for (let j = 0; j < this.arrayDaysEvent.length; j++) {
                            axios.post(url, {
                                name_event: this.nameEvent,
                                date_start: this.arrayDaysEvent[j],
                                date_end: this.arrayDaysEventMes[j],
                                link: this.nameMeet,
                                day_week: this.diaSemana,
                                type_event: this.typeEvent,
                                email_invited: this.invitationsGet[i].email,
                                id_invited: this.invitationsGet[i].id,
                                id_sender: this.user.id
                            }).then(() => {
                                this.getInvitations;
                                toastr.success("Invitación enviada correctamente");
                            })
                        }
                    }
                }
                this.nameEvent = "",
                this.desde = "",
                this.hasta = "",
                this.nameMeet = "",
                this.diaSemana = "",
                this.typeEvent = [],
                this.invitationsGet = [],
                this.arrayDaysEvent = [],
                this.arrayDaysEventMes = []
            }
        }
    }

</script>

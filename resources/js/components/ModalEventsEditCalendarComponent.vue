<template>
    <!-- Modal de edición de evento -->
    <div class="modal fade" id="editEv">
        <div class="modal-lg modal-dialog">
            <div class="modal-content">
                <form class="needs-validation" v-on:submit.prevent="updateEvent" novalidate>
                    <div class="modal-header">
                        <h4>Editar evento</h4>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row justify-content-center">
                            <div class="col-md-6">
                                <label for="name">Nombre del evento</label>
                                <input type="text" name="name" class="form-control" v-model="nameUp" />
                                <div class="invalid-feedback">Please fill out this field</div>
                            </div>
                            <div class="col-md-6">
                                <label for="name">Materia</label>
                                <select class="form-control" v-model="areaUp" required>
                                    <option :value="option.id + '/' + option.id_classroom" v-for="(option, k_option) in myOptions" v-bind:key="k_option">
                                    {{ option.text }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-6">
                            <label for="name">Desde</label>
                            <datetime format="YYYY-MM-DD H:i:s" v-model="fromUp"></datetime>
                            <div class="invalid-feedback">Por favor ingresa la fecha</div>
                            </div>
                            <div class="col-md-6">
                            <label for="name">Hasta</label>
                            <datetime format="YYYY-MM-DD H:i:s" v-model="toUp"></datetime>
                            <div class="invalid-feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Hasta aquí el modal de editar evento -->
</template>

<script>
    import Vue from "vue";
    import moment from "moment";

    moment.tz.setDefault("America/Bogota");
    moment.locale("es");

    import Multiselect from "vue-multiselect";
    Vue.use(require("vue-moment"));
    Vue.component("multiselect", Multiselect);
    import datetime from "vuejs-datetimepicker";
    export default {
        props:[
            "concurrent",
            "dias",
            "myOptions",
            "getMenu",
            "evenUp",
            "nameUp", 
            "areaUp",
            "fromUp", 
            "toUp",
            "meetUp", 
            "id_padreUp", 
            "idUp",
        ],
        data() {
            return {
                typeEvent:'',
                diaSemana:'',
                nameEvent:'',
                materia: '',
                desde: '',
                hasta: '',
                nameMeet:'',
                lastId: '',
                formatDate: "",
                display: "none"
            };
        },
        components: {
            datetime,
            Multiselect,
        },
        filters: {
            formatDate: (value) => {
                if (value) {
                    return moment(String(value)).format("DD MMMM YYYY hh:mm a");
                }
            },
        },
        mounted() {
        
        },
        methods: {
            createEvent() {
                var url = "createEvent";
                this.concurrentDays();
                if (this.typeEvent == 0) {
                    if (this.materia.length >= 1) {
                        for (let i = 0; i < this.materia.length; i++) {
                        axios
                            .post(url, {
                            //Cursos generales
                            name: this.nameEvent,
                            startDateTime: this.desde,
                            endDateTime: this.hasta,
                            id_area: this.materia[i].id,
                            id_classroom: this.materia[i].id_classroom,
                            url: this.nameMeet,
                            id_padre: null,
                            })
                            .then((response) => {
                            toastr.success("Nuevo evento creado exitosamente");
                            this.getMenu();
                            })
                            .catch((error) => {});
                        }
                    }
                } else if (this.typeEvent == 1 || this.typeEvent == 2) {
                    if (this.materia.length >= 1 && this.arrayDaysEvent.length >= 1) {
                        for (let i = 0; i < this.materia.length; i++) {
                            for (let j = 0; j < this.arrayDaysEvent.length; j++) {
                                axios
                                .post(url, {
                                    //Cursos generales
                                    name: this.nameEvent,
                                    startDateTime: this.arrayDaysEvent[j] + " " + this.desde,
                                    endDateTime: this.arrayDaysEvent[j] + " " + this.hasta,
                                    id_area: this.materia[i].id,
                                    id_classroom: this.materia[i].id_classroom,
                                    url: this.nameMeet,
                                    id_padre: this.lastId + 1,
                                })
                                .then((response) => {
                                    toastr.success("Nuevo evento creado exitosamente");
                                    this.getMenu();
                                })
                                .catch((error) => {});
                            }
                        }
                    }
                } else if (this.typeEvent == 3) {
                    if (this.materia.length >= 1 && this.arrayDaysEvent.length >= 1) {
                        for (let i = 0; i < this.materia.length; i++) {
                        for (let j = 0; j < this.arrayDaysEvent.length; j++) {
                            axios
                            .post(url, {
                                //Cursos generales
                                name: this.nameEvent,
                                startDateTime: this.arrayDaysEvent[j],
                                endDateTime: this.arrayDaysEventMes[j],
                                id_area: this.materia[i].id,
                                id_classroom: this.materia[i].id_classroom,
                                url: this.nameMeet,
                                id_padre: this.lastId + 1,
                            })
                            .then((response) => {
                                toastr.success("Nuevo evento creado exitosamente");
                                this.getMenu();
                            })
                            .catch((error) => {});
                        }
                        }
                    }
                }
            },
            concurrentDays() {
                if (this.typeEvent == 1) {
                    //Crear eventos de lunes a viernes y omitimos los dias que ya pasaron de la semana
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
                            var newDate = new Date(date2.getTime() + days * 24 * 60 * 60 * 1000);
                            newDate = moment(String(newDate)).format("YYYY-MM-DD");
                            if (i + 1 >= dayOfWeek) {
                                this.arrayDaysEvent.push(newDate);
                            }
                        } else {
                            var date3 = moment(String(date2)).format("YYYY-MM-DD");
                            this.arrayDaysEvent.push(date3);
                        }
                    }
                }
                if (this.typeEvent == 2) {
                    //Crear eventos un dia especifico de la semana

                    this.arrayDaysEvent = [];
                    var hoy = new Date();
                    var hasta = new Date();
                    hasta.setDate(hasta.getDate() + 365);

                    while (moment(hoy).isSameOrBefore(hasta)) {
                        if (this.diaSemana == hoy.getDay()) {
                            this.arrayDaysEvent.push(moment(hoy).format("YYYY-MM-DD"));
                        }

                        hoy.setDate(hoy.getDate() + 1);
                    }
                    //console.log(this.arrayDaysEvent);
                }
                if (this.typeEvent == 3) {
                    //Crear evento una vez por mes
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
                            this.arrayDaysEvent.push(moment(desde).format("YYYY-MM-DD H:mm:ss"));
                        }

                        desde.setDate(desde.getDate() + 1);
                    }
                    while (moment(desde2).isSameOrBefore(hasta2)) {
                        var dayMonth = desde2.getDate(desde2);
                        if (dayMonth == dia2) {
                        this.arrayDaysEventMes.push(moment(desde2).format("YYYY-MM-DD H:mm:ss"));
                        }

                        desde2.setDate(desde2.getDate() + 1);
                    }
                    console.log(this.arrayDaysEventMes);
                }
                if (this.typeEvent == 0) {
                this.arrayDaysEvent = [];
                this.formatDate = "YYYY-MM-DD H:i:s";
                }
            },
            updateEvent() {
                var url = "updateEvent";
                if (this.id_padreUp === null) {
                axios
                    .put(url, {
                    //Cursos generales
                    id: this.idUp,
                    name: this.nameUp,
                    startDateTime: this.fromUp,
                    endDateTime: this.toUp,
                    id_area: this.areaUp,
                    url: this.meetUp,
                    id_padre: this.id_padreUp,
                    todos: false,
                    })
                    .then((response) => {
                    this.getMenu();
                    toastr.success("Evento actualizado exitosamente");
                    })
                    .catch((error) => {});
                } else {
                    var resp = confirm("Este evento es concurrente, ¿desea editar todos los eventos?");

                    axios.put(url, {
                        //Cursos generales
                        id: this.idUp,
                        name: this.nameUp,
                        startDateTime: this.fromUp,
                        endDateTime: this.toUp,
                        id_area: this.areaUp,
                        url: this.meetUp,
                        id_padre: this.id_padreUp,
                        todos: resp,
                    })
                    .then((response) => {
                        this.getMenu();
                        toastr.success("Evento actualizado exitosamente");
                    })
                    .catch((error) => {});
                }
            },
        },
    };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .back-calendar {
    padding-left: 290px;
  }

  .class-event {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
  }

  .class-event-info {
    font-size: 1.2em;
    font-weight: 600;
    max-width: 280px;
    text-align: left;
  }

  .class-event-date {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .class-event-date > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .class-event-date > div > small {
    font-size: 0.8em;
  }

  .class-event-date > div > span {
    font-size: 1em;
  }

  .class-event-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .class-event-action {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
  }

  .class-event-action button {
    margin-right: 5px;
  }

  .justify-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .dot {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    display: inline-block;
  }

  .dot_blue {
    background-color: #3788d8;
  }

  .dot_red {
    background-color: #d8374d;
  }
  .padding-10 {
    padding: 10px;
  }
</style>

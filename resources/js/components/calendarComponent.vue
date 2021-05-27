<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <div class="card-header fondo">
          <h4>Calendario</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6 justify-content">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn" v-bind:class="{ 'btn-primary': initialView == 'dayGridMonth' }" @click="changeCalendarView('dayGridMonth')">Mensual</button>
                <button type="button" class="btn" v-bind:class="{ 'btn-primary': initialView == 'timeGridWeek' }" @click="changeCalendarView('timeGridWeek')">Semanal</button>
              </div>
            </div>
            <div class="col-6">
              <div class="justify-content">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="display_activities" @change="displayActivitiesChange()" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1"> <span class="dot dot_blue"></span> Actividades </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="display_events" @change="displayEventsChange()" id="defaultCheck2" />
                  <label class="form-check-label" for="defaultCheck2"> <span class="dot dot_red"></span> Clases presenciales </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="display_tutorials" @change="displayTutorialsChange()" id="defaultCheck3" />
                  <label class="form-check-label" for="defaultCheck3"> <span class="dot dot_green"></span> Tutorías </label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <FullCalendar ref="fullCalendar" :options="calendarOptions" />
            </div>
          </div>
          <div class="row" v-show="type_u === 2 || type_u === 4 || type_u === 8">
            <a class="btn btn-warning float-right mt-2 ml-3" v-on:click.prevent="createE()">Crear evento</a>
          </div>
          <div v-show="type_u == 4 || type_u == 8">
            <!-- Modal para crear evento para padres y coordinadores -->
            <event-parents-modal :concurrent.sync="concurrent" :type_u.sync="type_u" :dias.sync="dias" :clases.sync="clases" :user.sync="user" :getMenu.sync="getMenu"></event-parents-modal>
          </div>
          <div v-show="type_u == 1 || type_u == 2 || type_u == 4 || type_u == 8">
            <!-- Modal para editar información del evento -->
            <modal-edit-parents-info :concurrent.sync="concurrent" :type_u.sync="type_u" :user.sync="this.user" :dias.sync="dias" :getMenu.sync="getMenu"></modal-edit-parents-info>
          </div>
          <div class="row" v-show="type_u == 7">
            <a class="btn btn-warning float-right mt-2 ml-3" href="/tutor/cronograma">Registrar horario de tutorías</a>
          </div>
          <br />
          <!-- Modal para listar clases, listar tutorias y eliminar eventos -->
          <calendar-class-component :type_u.sync="type_u" :clases.sync="clases" :tutorEvents.sync="tutorEvents" :concurrent.sync="concurrent" :dias.sync="dias" :myOptions.sync="myOptions" :getMenu.sync="getMenu"></calendar-class-component>
        </div>
      </div>
    </div>
    <!-- Modal para crear eventos -->
    <calendar-modal-event :concurrent.sync="concurrent" :dias.sync="dias" :myOptions.sync="myOptions" :getMenu.sync="getMenu"></calendar-modal-event>

    </div>
</template>

<script>
  import Vue from "vue";
  import FullCalendar from "@fullcalendar/vue";
  import esLocale from "@fullcalendar/core/locales/es";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import momentPlugin from "@fullcalendar/moment";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import momentTimezonePlugin from "@fullcalendar/moment-timezone";
  import interactionPlugin from "@fullcalendar/interaction";
  import moment from "moment";

  moment.tz.setDefault("America/Bogota");
  moment.locale("es");

  Vue.use(require("vue-moment"));
  export default {
        props: ["type_u", "user"],
        data() {
            return {
                display_events: true,
                display_activities: true,
                display_tutorials: true,
                clases: [],
                myOptions: [],
                concurrent: [
                    { id: "0", type: "No" },
                    { id: "1", type: "De lunes a viernes" },
                    { id: "2", type: "Un dia en especifico" },
                    { id: "3", type: "Menusal" },
                ],
                dias: [
                    { id: "0", dia: "Domingo" },
                    { id: "1", dia: "Lunes" },
                    { id: "2", dia: "Martes" },
                    { id: "3", dia: "Miercoles" },
                    { id: "4", dia: "Jueves" },
                    { id: "5", dia: "Viernes" },
                    { id: "6", dia: "Sabado" },
                ],
                diaSemana: "",
                typeEvent: "",
                lective_planification: {},
                initialView: "dayGridMonth",
                arrayDaysEventMes: [],
                calendarOptions: {
                    locale: esLocale,
                    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, momentTimezonePlugin, momentPlugin],
                    initialView: "dayGridMonth", //timeGridWeek
                    themeSystem: "bootstrap",
                    //   dateClick: this.handleDateClick,
                    timeZone: "America/Bogota",
                    titleFormat: "D MMMM YYYY",
                    events: [],
                    eventClick: this.handleEventClick,
                    eventDidMount: this.handleEventDidMount,
                },
                tutorEvents: [],
            };
        },
        components: {
            FullCalendar,
        },
        mounted() {
            this.getTutorEvents();
            this.getData();
        },
        methods: {
            getData() {
                const fullCalendarApi = this.$refs.fullCalendar.getApi();
                this.getInvitations();

                if (this.type_u === 4) {
                    var urlP = window.location.origin + "/api/event/getStudentsClass";
                    axios.get(urlP).then((response) => {
                        this.clases = response.data;
                        if (this.clases && this.clases.length > 0) {
                            this.clases.forEach((meeting) => {
                                fullCalendarApi.addEvent({
                                title: `${meeting.student_name} | ${meeting.area} ${meeting.classroom} | Clase ${meeting.name}`,
                                start: meeting.dateFrom,
                                end: meeting.dateTo,
                                description: meeting.name,
                                url: meeting.hangout,
                                backgroundColor: "blue",
                                });
                            });
                        }
                    });
                }

                var urlM = window.location.origin + "/getAllEvents";
                axios.get(urlM).then((response) => {
                    this.clases = response.data;
                    if (this.clases && this.clases.length > 0) {
                        this.clases.forEach((meeting) => {
                            fullCalendarApi.addEvent({
                                title: `${meeting.area} ${meeting.classroom} | Clase ${meeting.name}`,
                                start: meeting.dateFrom,
                                end: meeting.dateTo,
                                description: meeting.name,
                                url: meeting.hangout,
                                backgroundColor: "red",
                            });
                        });
                    }
                });
                var url = window.location.origin + "/GetArearByUser";
                axios.get(url).then((response) => {
                    this.myOptions = response.data;

                    axios.get("/api/lectives").then((response) => {
                        this.lective_planification = response.data;

                        response.data.forEach((e) => {
                            this.myOptions.push({
                                is_lective: true,
                                id: e.lective.id,
                                id_classroom: 0,
                                id_planification: e.id_planification,
                                text: `Electiva ${e.lective.name} Trimestre ${e.period_consecutive}`,
                            });
                        });
                    });
                });
            },
            getInvitations() {
                const fullCalendarApi = this.$refs.fullCalendar.getApi();
                if (this.type_u != 3) {
                    axios.get("/getInvitations").then((response) => {
                        this.clases = response.data;
                        console.log("datos aqui", response.data);
                        if (this.clases && this.clases.length > 0) {
                            this.clases.forEach((dataParent) => {
                                if (dataParent.id_sender === this.user.id || dataParent.id_invited === this.user.id) {
                                    console.log("pasé");
                                    fullCalendarApi.addEvent({
                                        title: dataParent.name_event,
                                        start: dataParent.date_start,
                                        end: dataParent.date_end,
                                        description: dataParent.description ? dataParent.description : "",
                                        url: dataParent.link,
                                        backgroundColor: "blue",
                                    });
                                }
                            });
                        }
                    });
                }
            },
            displayActivitiesChange() {
                const fullCalendarApi = this.$refs.fullCalendar.getApi();

                if (this.display_activities) {
                    this.getInvitations();
                } else {
                    const currentEvents = fullCalendarApi.getEvents();
                    currentEvents.forEach((event) => {
                        if (event.backgroundColor == "blue") {
                            event.remove();
                        }
                    });
                }
            },
            displayEventsChange() {
                const fullCalendarApi = this.$refs.fullCalendar.getApi();

                if (this.display_events) {
                    this.clases.forEach((meeting) => {
                        fullCalendarApi.addEvent({
                        title: `${meeting.area} ${meeting.classroom} | Clase ${meeting.name}`,
                        start: meeting.dateFrom,
                        end: meeting.dateTo,
                        description: meeting.name,
                        url: meeting.hangout,
                        backgroundColor: "red",
                        });
                    });
                } else {
                    const currentEvents = fullCalendarApi.getEvents();
                    currentEvents.forEach((event) => {
                        if (event.backgroundColor == "red") {
                            event.remove();
                        }
                    });
                }
            },
            displayTutorialsChange() {
                const fullCalendarApi = this.$refs.fullCalendar.getApi();

                if (this.display_tutorials) {
                    this.tutorEvents.forEach((tutorial) => {
                        fullCalendarApi.addEvent({ title: `TUTORÍA: ${tutorial.name}`, start: tutorial.date_from, end: tutorial.date_to, description: tutorial.name, url: tutorial.url, backgroundColor: "#37d875" });
                    });
                } else {
                    const currentEvents = fullCalendarApi.getEvents();
                    currentEvents.forEach((event) => {
                        if (event.backgroundColor == "#37d875") {
                            event.remove();
                        }
                    });
                }
            },
            getTutorEvents() {
                const fullCalendarApi = this.$refs.fullCalendar.getApi();

                axios.get("/api/tutor-schedule/event").then((response) => {
                    this.tutorEvents = response.data;
                    if (this.tutorEvents && this.tutorEvents.length > 0) {
                        this.tutorEvents.forEach((tutorial) => {
                            fullCalendarApi.addEvent({ title: `TUTORÍA: ${tutorial.name}`, start: tutorial.date_from, end: tutorial.date_to, description: tutorial.name, url: tutorial.url, backgroundColor: "#37d875" });
                        });
                    }
                });
            },
        
            // handleDateClick(arg) {
            //     //alert('date click! ' + arg.dateStr)
            // },
            handleEventClick(info) {
                info.jsEvent.preventDefault();

                if (info.event.url) {
                    window.open(info.event.url);
                }
            },
            handleEventDidMount(info) {
                console.log("PREV");
                /* var tooltip = new Tooltip(info.el, {
                    title: info.event.extendedProps.description,
                    placement: 'top',
                    trigger: 'hover',
                    container: 'body'
                });*/
            },
            changeCalendarView(view) {
                this.initialView = view;
                this.calendarOptions.initialView = view;
                this.$refs.fullCalendar.getApi().changeView(view);
            },
            getMenu() {
                window.location = "/calendar";
            },
            createE() {
                if(this.type_u === 4 || this.type_u === 8) {
                  $("#createEvent").modal("show");
                } else {
                    $("#createE").modal("show");
                }
            },
        },
    };
</script>
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
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
          <div class="row" v-show="type_u === 2 || type_u === 4">
            <a class="btn btn-warning float-right mt-2 ml-3" v-on:click.prevent="createE()">Crear evento</a>
          </div>
          <div v-show="type_u == 4">
            <event-parents-modal :concurrent="concurrent" :type_u="type_u" :dias="dias" :clases="clases" :user="user" :getMenu="getMenu"></event-parents-modal>
          </div>
          <div v-show="type_u == 1 || type_u == 2 || type_u == 4">
            <modal-edit-parents-info :concurrent="concurrent" :type_u="type_u" :user="this.user" :dias="dias" :getMenu="getMenu"></modal-edit-parents-info>
          </div>
          <div class="row" v-show="type_u == 7">
            <a class="btn btn-warning float-right mt-2 ml-3" href="/tutor/cronograma">Registrar horario de tutorías</a>
          </div>
          <br />
          <div class="row">
            <div class="col-md-11" v-if="type_u != 4">
              <div v-if="type_u != 7" class="row justify-content-center">
                <h4>Clases presenciales</h4>
              </div>
              <div class="row" v-for="(clas, k) in filterPendingEvents(clases)" v-bind:key="k">
                <div class="col-12">
                  <div class="card">
                    <div class="class-event">
                      <div class="class-event-info">{{ !clas.classroom ? "Lectiva " : "" }} {{ clas.area }} {{ clas.classroom ? clas.classroom : "" }}: {{ clas.name }}</div>
                      <div class="class-event-date">
                        <div>
                          <small>Desde:</small>
                          <span>{{ clas.dateFrom | formatDate }}</span>
                        </div>
                        <div>
                          <small>Hasta:</small>
                          <span>{{ clas.dateTo | formatDate }}</span>
                        </div>
                      </div>
                      <div class="class-event-action">
                        <a class="btn btn-primary" html:type="_blank" :href="clas.hangout">Ir a clase</a>
                        <a href="/assistance" class="btn btn-primary ml-1" v-show="type_u == 2">Asistencia</a>
                      </div>
                    </div>
                    <div class="class-event-footer ">
                      <div class="class-event-action">
                        <button class="btn btn-primary" v-show="type_u == 2" v-on:click.prevent="editE(clas.id)">Editar</button>
                        <button class="btn btn-danger" v-show="type_u == 2" v-on:click.prevent="viewDelete(clas.id, clas.name)">Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="type_u == 7">
                <!-- IS TUTOR -->
                <div class="row justify-content-center">
                  <h4>Tutorías programadas</h4>
                </div>
                <div class="row" v-for="(tutorial, k_tutorial) in tutorEvents" v-bind:key="k_tutorial">
                  <div class="col-12">
                    <div class="card">
                      <div class="class-event">
                        <div class="class-event-info">{{ tutorial.name }}</div>
                        <div class="class-event-date">
                          <div>
                            <small>Desde:</small>
                            <span>{{ tutorial.date_from | formatDate }}</span>
                          </div>
                          <div>
                            <small>Hasta:</small>
                            <span>{{ tutorial.date_to | formatDate }}</span>
                          </div>
                        </div>
                        <div class="class-event-action">
                          <a class="btn btn-primary" v-if="tutorial.url" :type="'_blank'" :href="tutorial.url">Ir a clase</a>
                        </div>
                      </div>
                      <div class="row padding-10">
                        <div class="col-12">
                          <label>Temas a revisar:</label>
                        </div>
                        <div class="col-12">
                          <textarea class="form-control" rows="3" readonly="readonly" v-model="tutorial.observations"></textarea>
                        </div>
                      </div>
                      <div class="row padding-10">
                        <div class="col-8">
                          <input type="text" class="form-control" placeholder="Link de reunión" v-model="tutorial.url" />
                        </div>
                        <div class="col-4">
                          <button class="btn btn-primary" @click="UpdateLinkTutorial(tutorial)">Actualizar link</button>
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
    </div>
    <div class="modal fade" id="createE">
      <div class="modal-lg modal-dialog">
        <div class="modal-content">
          <form class="needs-validation" v-on:submit.prevent="createEvent" novalidate>
            <div class="modal-header">
              <h4>Crear evento</h4>
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group row justify-content-center">
                <div class="col-md-6">
                  <label for="name">Evento concurrente</label>
                  <select class="form-control" v-model="typeEvent" @change="cambio">
                    <option :value="options.id" v-for="(options, key) in concurrent" :key="key">
                      {{ options.type }}
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label v-bind:style="{ display: display }">Dia de la semana</label>
                  <select class="form-control" name="dia" id="dia" v-model="diaSemana" v-bind:style="{ display: display }">
                    <option :value="options.id" v-for="(options, key) in dias" :key="key">
                      {{ options.dia }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row justify-content-center">
                <div class="col-md-6">
                  <label for="name">Nombre del evento</label>
                  <input type="text" name="name" class="form-control" v-model="nameEvent" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Materia</label>
                  <multiselect v-model="materia" :options="myOptions" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleccione una o varias" label="text" track-by="id" :preselect-first="true">
                    <template slot="selection" slot-scope="{ values, isOpen }"
                      ><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones selecionadas</span></template
                    >
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
                <div class="col-md-6" style="display: none;">
                  <strong for="name">id ultimo</strong>
                  <input type="text" name="id_padre" class="form-control" v-model="lastId" />
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
            <div class="modal fade" id="createE">
              <div class="modal-lg modal-dialog">
                <div class="modal-content">
                  <form class="needs-validation" v-on:submit.prevent="createEvent" novalidate>
                    <div class="modal-header">
                      <h4>Crear evento</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group row justify-content-center">
                        <div class="col-md-6">
                          <label for="name">Evento concurrente</label>
                          <select class="form-control" v-model="typeEvent">
                            <option :value="options.id" v-for="(options, key) in concurrent" :key="key">
                              {{ options.type }}
                            </option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <label style="display: none;" id="labeldia">Dia de la semana</label>
                          <select class="form-control" name="dia" id="dia" v-model="diaSemana" style="display:none">
                            <option :value="options.id" v-for="(options, key) in dias" :key="key">
                              {{ options.dia }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row justify-content-center">
                        <div class="col-md-6">
                          <label for="name">Nombre del evento</label>
                          <input type="text" name="name" class="form-control" v-model="nameEvent" />
                          <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                        <!-- <div class="col-md-6">
                                    <label for="name">Materia</label>
                                    <select class="form-control" v-model="materia" required>
                                        <option :value="option.id+'/'+option.id_classroom " v-for="option in myOptions">
                                        {{
                                        option.text
                                        }}
                                        </option>
                                    </select>
                                </div> -->
                        <div class="col-md-6">
                          <label for="name">Materia</label>
                          <multiselect v-model="materia" :options="myOptions" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleccione una o varias" label="text" track-by="id" :preselect-first="true">
                            <template slot="selection" slot-scope="{ values, isOpen }"
                              ><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones selecionadas</span></template
                            >
                          </multiselect>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-md-6">
                          <label for="name">Desde</label>
                          <datetime format="YYYY-MM-DD H:i:s" v-model="desde"></datetime>
                          <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                        <div class="col-md-6">
                          <label for="name">Hasta</label>
                          <datetime format="YYYY-MM-DD H:i:s" v-model="hasta"></datetime>
                          <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-md-6">
                          <strong for="name">Enlace de Meet</strong>
                          <input type="text" name="name" class="form-control" v-model="nameMeet" />
                          <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                        <!-- <div class="col-md-6" style="display: none;">
                                            <strong for="name">id ultimo</strong>
                                            <input type="text" name="id_padre" class="form-control" v-model="lastId" />
                                            <div class="invalid-feedback">Please fill out this field</div>
                                        </div> -->
                      </div>
                      <div class="modal-footer">
                        <input type="submit" class="btn btn-warning" value="Guardar" />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-md-6">
                  <strong for="name">Enlace de Meet</strong>
                  <input type="text" name="name" class="form-control" v-model="meetUp" />
                  <div class="invalid-feedback">Por favor ingresa la fecha</div>
                </div>
                <div class="col-md-6" style="display: none;">
                  <strong for="name">id ultimo</strong>
                  <input type="text" name="id_padre" class="form-control" v-model="id_padreUp" />
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
    <div class="modal fade" id="deleteE">
      <div class="modal-sm modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row text-center">
              <label for="name">Esta seguro que desea eliminar {{ delName }} ?</label>
            </div>
            <div class="modal-footer">
              <a class="btn btn-danger float-right" href v-on:click.prevent="deleteEvent(delId)">Si</a>
              <a class="btn btn-warning" href v-on:click.prevent="deletE()">Cancelar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  import datetime from "vuejs-datetimepicker";
  import Multiselect from "vue-multiselect";
  Vue.use(require("vue-moment"));
  Vue.component("multiselect", Multiselect);
  export default {
    props: ["type_u", "user"],
    data() {
      return {
        diaSemana: null,
        typeEvent: null,
        concurrent: [],
        dias: [],
        display_events: true,
        display_activities: true,
        display_tutorials: true,
        desde: "",
        hasta: "",
        nameEvent: "",
        nameMeet: "",
        clases: [],
        value: [],
        myOptions: [],
        materia: [],
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
        meetUp: "",
        nameUp: "",
        fromUp: "",
        toUp: "",
        formatDate: "",
        id_padreUp: "",
        id_padreDel: "",
        editConcurrent: "",
        areaUp: "",
        evenUp: [],
        display: "none",
        delId: "",
        delName: "",
        idUp: "",
        typeEvent: "",
        daysWeek: [],
        lastId: [],
        lective_planification: {},
        initialView: "dayGridMonth",
        arrayDaysEvent: [],
        arrayDaysEventMes: [],
        calendarOptions: {
          locale: esLocale,
          plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, momentTimezonePlugin, momentPlugin],
          initialView: "dayGridMonth", //timeGridWeek
          themeSystem: "bootstrap",
          dateClick: this.handleDateClick,
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
      datetime,
      FullCalendar,
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
      this.getTutorEvents();
      this.getData();
    },
    methods: {
      selectChange() {},
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
      filterPendingEvents: (events) => {
        return events.filter((e) => moment(e.dateTo) >= moment());
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
      cambio() {
        if (this.typeEvent == 2) {
          this.display = "block";
          this.formatDate = "H:i:s";
          this.last_insert();
        } else if (this.typeEvent == 3) {
          this.display = "none";
          this.formatDate = "YYYY-MM-DD H:i:s";
          this.last_insert();
        } else if (this.typeEvent == 1) {
          this.display = "none";
          this.formatDate = "H:i:s";
          this.last_insert();
        } else if (this.typeEvent == 0) {
          this.display = "none";
          this.formatDate = "YYYY-MM-DD H:i:s";
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
      UpdateLinkTutorial(tutorial) {
        axios.put(`/api/tutor-schedule/event/${tutorial.id_schedulestudent}/link`, { link: tutorial.url }).then((response) => {
          toastr.success("Link de evento actualizado correctamente");
        });
      },
      handleDateClick(arg) {
        //alert('date click! ' + arg.dateStr)
      },
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
        if (this.type_u != 4) {
          $("#createE").modal("show");
        } else {
          $("#createEvent").modal("show");
        }
      },
      editE(id) {
        this.evenUp = [];
        var urlM = window.location.origin + "/editEvent/" + id;
        axios.get(urlM).then((response) => {
          this.evenUp = response.data;
          this.nameUp = this.evenUp.name;
          this.areaUp = this.evenUp.id_area + "/" + this.evenUp.id_classroom;
          this.fromUp = this.evenUp.date_from;
          this.toUp = this.evenUp.date_to;
          this.meetUp = this.evenUp.url;
          this.id_padreUp = this.evenUp.id_padre;
          this.idUp = id;
        });
        $("#editEv").modal("show");
      },
      deletE() {
        $("#deleteE").modal("hide");
      },
      deleteEvent(id) {
        var url = "deleteEvent";
        if (this.id_padreDel === null) {
          axios
            .put(url, {
              id: id,
              id_padre: this.id_padreDel,
              todos: false,
            })
            .then((response) => {
              this.getMenu();
              toastr.success("Evento actualizado exitosamente");
            })
            .catch((error) => {});
        } else {
          // falta cambiar la funcion de eliminar por la de cambiar el update_at
          var resp = confirm("Este evento es concurrente, ¿desea editar todos los eventos?");
          axios
            .put(url, {
              id: id,
              id_padre: this.id_padreDel,
              todos: resp,
            })
            .then((response) => {
              this.getMenu();
              toastr.success("Evento actualizado exitosamente");
            })
            .catch((error) => {});
        }
      },
      viewDelete(id, name) {
        this.delName = name;
        this.delId = id;
        this.evenDel = [];
        var urlM = window.location.origin + "/editEvent/" + id;
        axios.get(urlM).then((response) => {
          this.evenDel = response.data;
          this.id_padreDel = this.evenDel.id_padre;
        });
        $("#deleteE").modal("show");
      },
      last_insert() {
        var urlId = "lastId";
        axios.get(urlId).then((response) => {
          this.lastId = response.data;
        });
      },
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
              todos: resp,
            })
            .then((response) => {
              this.getMenu();
              toastr.success("Evento actualizado exitosamente");
            })
            .catch((error) => {});
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

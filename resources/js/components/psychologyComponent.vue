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
                        <button type="button" class="btn" v-bind:class="{ 'btn-primary': (initialView=='dayGridMonth')  }" @click="changeCalendarView('dayGridMonth')">Mensual</button>
                        <button type="button" class="btn" v-bind:class="{ 'btn-primary': (initialView=='timeGridWeek') }" @click="changeCalendarView('timeGridWeek')">Semanal</button>
                    </div>
                </div> 
            </div>
            <div class="col-6">
                    <div class="justify-content">
                         <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="display_solicitud" @change="displaySolicitudChange()" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                                <span class="dot dot_orange"></span> Solicitud
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="display_seguimiento" @change="displaySeguimientoChange()" id="defaultCheck2">
                            <label class="form-check-label" for="defaultCheck2">
                                <span class="dot dot_yellow"></span> Seguimiento
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="display_cita" @change="displayCitaChange()" id="defaultCheck3">
                            <label class="form-check-label" for="defaultCheck3">
                                <span class="dot dot_blue"></span> Cita
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="display_reunion" @change="displayReunionChange()" id="defaultCheck4">
                            <label class="form-check-label" for="defaultCheck4">
                                <span class="dot dot_green"></span> Reunión
                            </label>
                        </div>
                    </div>
                </div>
            <div class="row">
                <div class="col-12">
                    <FullCalendar ref="fullCalendar"  :options="calendarOptions" />
                </div>
            </div>
          <div class="row">
            <a class="btn btn-warning float-right" v-on:click.prevent="createEven()">Crear evento</a>
          </div>
          <br />
          <div class="row">
            <div class="col-md-11">
              <div class="row justify-content-center">
                <h4>Eventos</h4>
              </div>
              <div class="row" v-for="(even, k) in filterPendingEvents(todos)" v-bind:key="k">
                <div class="col-12">
                  <div class="card">
                      <div class="class-event">
                        <div class="class-event-info">{{even.name}} </div>
                        <div class="class-event-info" v-if="even.tipoEvento == 1">Solicitud</div>
                        <div class="class-event-info" v-if="even.tipoEvento == 2">Seguimiento</div>
                        <div class="class-event-info" v-if="even.tipoEvento == 3">Cita</div>
                        <div class="class-event-info" v-if="even.tipoEvento == 4">Reunión</div>
                        <div class="class-event-date">
                          <div>
                            <small>Desde:</small>
                            <span>{{even.start}}</span>
                          </div>
                          <div>
                            <small>Hasta:</small>
                            <span>{{even.end}}</span>
                          </div>
                        </div>
                        <div class="class-event-action">
                            <a class="btn btn-primary" html:type="_blank" :href="even.hangout">Ir al Evento</a>
                        </div>
                      </div>
                      <div class="class-event-footer ">
                        <div class="class-event-action">
                            <button class="btn btn-primary" v-on:click.prevent="editE(even.id)">Editar</button>
                            <button class="btn btn-danger"  v-on:click.prevent="viewDelete(even.id,even.name)">Eliminar</button>
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
    <div class="modal fade" id="createEvent">
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
                  <label for="name">Tipo de evento a crear</label>
                  <select class="form-control" v-model="typeEvent" @change="selectChange" >
                    <option :value="options.id" v-for="options in eventType">
                      {{
                      options.name
                      }}
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <div id="inviteUser" style="display:none;">
                    <label>Invitar usuario</label>
                    <multiselect v-model="user_invited" :options="myUsers" :multiple="true"
                        :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                        placeholder="Seleccione una o varias" label="text" track-by="id"
                        :preselect-first="true">
                        <template slot="selection" slot-scope="{ values, isOpen }"><span
                          class="multiselect__single"
                          v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                          selecionadas</span>
                        </template>
                    </multiselect>
                  </div>
                </div>
              </div>
              <div class="form-group row justify-content-center">
                <div class="col-md-6">
                  <label for="name">Nombre del evento</label>
                  <input type="text" name="name" class="form-control" v-model="nameEvent" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col-md-6">
                  <strong for="name">Enlace de Meet</strong>
                  <input type="text" name="name" class="form-control" v-model="nameMeet" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="name">Desde</label>
                  <datetime v-model="desde"></datetime>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Hasta</label>
                  <datetime v-model="hasta"></datetime>
                  <div class="invalid-feedback"></div>
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
    <div class="modal fade" id="editE">
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
                  <strong for="name">Enlace de Meet</strong>
                  <input type="text" name="name" class="form-control" v-model="meetUp" />
                  <div class="invalid-feedback">Por favor ingresa la fecha</div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="name">Desde</label>
                  <datetime v-model="fromUp"></datetime>
                  <div class="invalid-feedback">Por favor ingresa la fecha</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Hasta</label>
                  <datetime v-model="toUp"></datetime>
                  <div class="invalid-feedback"></div>
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
import FullCalendar from '@fullcalendar/vue'
import esLocale from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid'
import momentPlugin from '@fullcalendar/moment'
import timeGridPlugin from '@fullcalendar/timegrid';
import momentTimezonePlugin from '@fullcalendar/moment-timezone'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment'

moment.tz.setDefault("America/Bogota");
moment.locale('es');

import datetime from "vuejs-datetimepicker";
import Multiselect from "vue-multiselect";
Vue.use(require("vue-moment"));
Vue.component("multiselect", Multiselect);
export default {
  props: ["type_u"],
  data() {
    return {
      display_solicitud:true,
      display_seguimiento:true,
      display_cita:true,
      display_reunion:true,
      desde: "",
      hasta: "",
      nameEvent: "",
      nameMeet: "",
      todos: [],
      value:[],
      myOptions:[],
      materia: [],
      eventType: [{'id':'1','name':'Solicitud'},{'id':'2', 'name':'Seguimiento'}, {'id':'3', 'name':'Cita'}, {'id':'4', 'name':'Reunión'}],
      myUsers: [],
      user_invited:[],
      delId: "",
      delName: "",
      formatDate: "",
      idUp: "",
      meetUp: "",
      nameUp: "",
      fromUp: "",
      toUp: "",
      typeEvent: "",
      daysWeek:[],
      lastId: [],
      errors: [],
      initialView:'dayGridMonth',
      calendarOptions: {
        locale: esLocale,
        plugins: [ dayGridPlugin, interactionPlugin,timeGridPlugin,momentTimezonePlugin,momentPlugin ],
        initialView: 'dayGridMonth',//timeGridWeek
        themeSystem:'bootstrap',
        dateClick: this.handleDateClick,
        timeZone: 'America/Bogota',
        titleFormat: 'D MMMM YYYY',
        events: [],
        eventClick:this.handleEventClick,
        eventDidMount:this.handleEventDidMount
      }
    };
  },
  components: {
    datetime,
    FullCalendar,
    Multiselect
  },
  filters:{
      formatDate:(value)=>{
        if (value) {
            return moment(String(value)).format('DD MMMM YYYY hh:mm a')
        }
      }
  },
  mounted() {
    const fullCalendarApi=this.$refs.fullCalendar.getApi();
    
    var urlSol = window.location.origin + "/getSolEvents"; //Trae los eventos de Solicitud del calendario
    axios.get(urlSol).then((response) => {
        this.solicitud = response.data;
        if (this.solicitud && this.solicitud.length > 0) {

            this.solicitud.forEach(meeting => {
                this.todos.push({id: meeting.id, name: meeting.name, start: meeting.dateFrom, end: meeting.dateTo, hangout: meeting.hangout, tipoEvento: meeting.tipoEvento});
                fullCalendarApi.addEvent({
                    title: `${meeting.name}`,
                    start: meeting.dateFrom,
                    end: meeting.dateTo,
                    description: meeting.name,
                    url: meeting.hangout,
                    backgroundColor: '#e48a20'
                });
            })
        }
    });

    var urlSeg = window.location.origin + "/getSegEvents"; //Trae los eventos de seguimiento del calendario
    axios.get(urlSeg).then((response) => {
        this.seguimiento = response.data;
        if (this.seguimiento && this.seguimiento.length > 0) {

          this.seguimiento.forEach(meeting => {
              this.todos.push({id: meeting.id, name: meeting.name, start: meeting.dateFrom, end: meeting.dateTo, hangout: meeting.hangout, tipoEvento: meeting.tipoEvento});
              fullCalendarApi.addEvent({
                  title: `${meeting.name}`,
                  start: meeting.dateFrom,
                  end: meeting.dateTo,
                  description: meeting.name,
                  url: meeting.hangout,
                  backgroundColor: '#ffc200'
              });
          })
        }
    });

    var urlCita = window.location.origin + "/getCitaEvents"; //Trae los eventos de cita del calendario
    axios.get(urlCita).then((response) => {
        this.cita = response.data;
        if (this.cita && this.cita.length > 0) {

            this.cita.forEach(meeting => {
                this.todos.push({id: meeting.id, name: meeting.name, start: meeting.dateFrom, end: meeting.dateTo, hangout: meeting.hangout, tipoEvento: meeting.tipoEvento});
                fullCalendarApi.addEvent({
                    title: `${meeting.name}`,
                    start: meeting.dateFrom,
                    end: meeting.dateTo,
                    description: meeting.name,
                    url: meeting.hangout,
                    backgroundColor: '#9fdee1'
                });
            })
        }
    });

    var urlReu = window.location.origin + "/getReuEvents"; //Trae los eventos de seguimiento del calendario
    axios.get(urlReu).then((response) => {
        this.reunion = response.data;
        if (this.reunion && this.reunion.length > 0) {

            this.reunion.forEach(meeting => {
                this.todos.push({id: meeting.id, name: meeting.name, start: meeting.dateFrom, end: meeting.dateTo, hangout: meeting.hangout, tipoEvento: meeting.tipoEvento});
                fullCalendarApi.addEvent({
                    title: `${meeting.name}`,
                    start: meeting.dateFrom,
                    end: meeting.dateTo,
                    description: meeting.name,
                    url: meeting.hangout,
                    backgroundColor: '#0b8043'
                });
            })
        }
    });
    
    var url = window.location.origin + "/getAllUsers";
    axios.get(url).then((response) => {
      let arrayData = response.data;
      arrayData[0].forEach(e => {
        this.myUsers.push({
            is_lective: true,
            id: e.id,
            email: e.email,
            text: e.name + e.last_name + ' -- ' + ' Administrador '
        });
      });
      arrayData[1].forEach(e => {
        this.myUsers.push({
            is_lective: true,
            id: e.id,
            email: e.email,
            text: e.name + e.last_name + ' -- ' + ' Docente '
        });
      });
      arrayData[2].forEach(e => {
        this.myUsers.push({
            is_lective: true,
            id: e.id,
            email: e.email,
            text: e.name + e.last_name + ' -- ' + ' Padres '
        });
      });
      arrayData[3].forEach(e => {
        this.myUsers.push({
            is_lective: true,
            id: e.id,
            email: e.email,
            text: e.name + e.last_name + ' -- ' + ' Psicologia '
        });
      });
    });
  },
  methods: {
    filterPendingEvents:(events)=>{
          return events.filter(e=>moment(e.start)>=moment());
      },
      displaySolicitudChange(){
        const fullCalendarApi=this.$refs.fullCalendar.getApi();

          if(this.display_solicitud)
          {
            console.log(this.solicitud);
            this.solicitud.forEach(meeting=>{
            fullCalendarApi.addEvent({ title: ` ${meeting.name}`, 
                                       start: meeting.dateFrom,
                                       end:meeting.dateTo,
                                       description: meeting.name,
                                       url:meeting.hangout ,
                                       backgroundColor:'#e48a20'});
            })
          }
          else{
            const currentEvents=  fullCalendarApi.getEvents();
            currentEvents.forEach(event=>{
                if(event.backgroundColor=='#e48a20')
                {
                    event.remove();
                }
            });
          }
      },
      displaySeguimientoChange(){
           const fullCalendarApi=this.$refs.fullCalendar.getApi();

          if(this.display_seguimiento)
          {
            this.seguimiento.forEach(meeting=>{
            fullCalendarApi.addEvent({ title: `${meeting.name}`,
                                        start: meeting.dateFrom,
                                        end:meeting.dateTo,
                                        description: meeting.name,
                                        url:meeting.hangout ,
                                        backgroundColor:'#ffc200'});
            })
          }
          else{
            const currentEvents=  fullCalendarApi.getEvents();
            currentEvents.forEach(event=>{
                if(event.backgroundColor=='#ffc200')
                {
                    event.remove();
                }
            });
          }
      },
      displayCitaChange(){
           const fullCalendarApi=this.$refs.fullCalendar.getApi();

          if(this.display_cita)
          {
            this.cita.forEach(meeting=>{
            fullCalendarApi.addEvent({ title: `${meeting.name}`,
                                        start: meeting.dateFrom,
                                        end:meeting.dateTo,
                                        description: meeting.name,
                                        url:meeting.hangout ,
                                        backgroundColor:'#9fdee1'});
            })
          }
          else{
            const currentEvents=  fullCalendarApi.getEvents();
            currentEvents.forEach(event=>{
                if(event.backgroundColor=='#9fdee1')
                {
                    event.remove();
                }
            });
          }
      },
      displayReunionChange(){
           const fullCalendarApi=this.$refs.fullCalendar.getApi();

          if(this.display_reunion)
          {
            this.reunion.forEach(meeting=>{
            fullCalendarApi.addEvent({ title: `${meeting.name}`,
                                        start: meeting.dateFrom,
                                        end:meeting.dateTo,
                                        description: meeting.name,
                                        url:meeting.hangout ,
                                        backgroundColor:'#0b8043'});
            })
          }
          else{
            const currentEvents=  fullCalendarApi.getEvents();
            currentEvents.forEach(event=>{
                if(event.backgroundColor=='#0b8043')
                {
                    event.remove();
                }
            });
          }
      },
    handleEventClick(info){

        info.jsEvent.preventDefault();

        if (info.event.url) {
            window.open(info.event.url);
        }
    },
    handleEventDidMount(info){
         console.log('PREV');
    },
    changeCalendarView(view){
        this.initialView=view;
        this.calendarOptions.initialView=view;
        this.$refs.fullCalendar.getApi().changeView(view);
    }, 
    selectChange() {
        if (this.typeEvent == 2 || this.typeEvent == 4) {
          document.getElementById("inviteUser").style.display = "block";
        } else if (this.typeEvent == 1 || this.typeEvent == 3) {
          document.getElementById("inviteUser").style.display = "none";
        }
      },
    getMenu() {
      window.location = "/psychology";
    },
    createEven(){
      $("#createEvent").modal("show");
    }, 
    createEvent() {
      var url = "createEventP";
      
      if (this.user_invited.length >= 1 ){
        var id_users=[];
        for(let i = 0; i < this.user_invited.length; i++){
          if(i + 1 < this.user_invited.length){
           id_users = id_users + this.user_invited[i].id + ",";
          }else{
            id_users = id_users + this.user_invited[i].id;
          }
        }
      }

      if (this.typeEvent == 1 || this.typeEvent== 3){
        
        axios
          .post(url, {
            //Eventos sin invitacion
            name: this.nameEvent,
            startDateTime: this.desde,
            endDateTime: this.hasta,
            url: this.nameMeet,
            type_event: this.typeEvent,
            user_invited: null,
          })
          .then((response) => {
            toastr.success("Nuevo evento creado exitosamente");
            this.getMenu();

          })
          .catch((error) => {});
          
      }else if(this.typeEvent == 2 || this.typeEvent== 4) {
         
        axios
          .post(url, {
            //Eventos con invitacion
            name: this.nameEvent,
            startDateTime: this.desde,
            endDateTime: this.hasta,
            url: this.nameMeet,
            type_event: this.typeEvent,
            user_invited: id_users,
          })
          .then((response) => {
            toastr.success("Nuevo evento creado exitosamente");
            this.getMenu();

          })
          .catch((error) => {}); 
      }  
    },
    editE(id) {
      this.evenUp = [];
      var urlM = window.location.origin + "/editEventP/" + id;
      axios.get(urlM).then((response) => {
          this.evenUp = response.data;
          this.nameUp = this.evenUp.name;
          this.fromUp = this.evenUp.date_from;
          this.toUp = this.evenUp.date_to;
          this.meetUp = this.evenUp.url;
          this.idUp = id;
      });
      $("#editE").modal("show");
    },
    updateEvent() {
      var url = "updateEventP";

      axios
        .put(url, {
          id: this.idUp,
          name: this.nameUp,
          startDateTime: this.fromUp,
          endDateTime: this.toUp,
          id_area: this.areaUp,
          url: this.meetUp,
        })
        .then((response) => {
          this.getMenu();
          toastr.success("Evento actualizado exitosamente");
        })
        .catch((error) => {});
    },
    deletE() {
      $("#deleteE").modal("hide");
    },
    deleteEvent(id) {
      var url = "deleteEventP";
      
          axios
          .put(url, {
              id: id,
          }).then((response) => {
              this.getMenu();
              toastr.success("Evento actualizado exitosamente");
          })
          .catch((error) => {});
    },
    viewDelete(id, name) {
      this.delName = name;
      this.delId = id;
      $("#deleteE").modal("show");
    },    
  },
};
</script>
<style>
  .back-calendar {
  padding-left: 290px;
}
.class-event{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
}
.class-event-info{
    font-size: 1.2em;
    font-weight: 600;
    max-width: 280px;
    text-align: left;
}

.class-event-date{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.class-event-date>div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
}
.class-event-date>div>small{
    font-size:0.8em;
}
.class-event-date>div>span{
    font-size:1em;

}
.class-event-footer{
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
}
.class-event-action{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
}
.class-event-action button{
    margin-right: 5px;
}
.justify-content{
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
.dot_orange{
  background-color: #e48a20;
}
.dot_yellow{
    background-color: #ffc200;
}
.dot_blue{
    background-color: #9fdee1;
}
.dot_green{
    background-color: #0b8043;
}
</style>
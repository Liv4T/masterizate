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
                  <input class="form-check-input" type="checkbox" v-model="display_respositories" @change="displayRepositoriesChange()" id="defaultCheck3" />
                  <label class="form-check-label" for="defaultCheck3"> <span class="dot dot_red"></span> Repositorio </label>
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
          <div class="row" style="margin-top:20px">
            <div class="col-8">
              <h4>Clases presenciales</h4>
              <div class="row" v-for="(meeting, i_meeting) in meetings" v-bind:key="i_meeting">
                <div class="col-12">
                  <div class="card class-event">
                    <div class="class-event-info">{{ meeting.area }} {{ meeting.classroom }}: {{ meeting.name }}</div>
                    <div class="class-event-date">
                      <div>
                        <small>Desde:</small>
                        <span>{{ meeting.dateFrom | formatDate }}</span>
                      </div>
                      <div>
                        <small>Hasta:</small>
                        <span>{{ meeting.dateTo | formatDate }}</span>
                      </div>
                    </div>
                    <div class="class-event-action">
                      <a class="btn btn-primary" html:type="_blank" :href="meeting.hangout">Ir a clase</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top:20px">
                <div class="col-12">
                    <h4>Actividades pendientes</h4>
                    <div class="row">
                        <div class="col-12">
                            <div class="card activity-event-container">
                                <div class="activity-event" v-for="(activity,i_activity) in activities" v-bind:key="i_activity">
                                    <div class="activity-event-info">
                                        <span>[{{activity.area_name}} {{activity.classroom_name}}]<br>{{activity.name}}</span>
                                    </div>

                                    <div class="activity-event-date">
                                        <small>Inicio de Clase:</small>
                                        <span>{{activity.date_init_class|formatDate}}</span>
                                    </div>

                                    <div class="activity-event-date">   
                                      <small>URL de Clase:</small>                                     
                                        <a :href="activity.url_class" class="badge badge-primary" target="_blank">{{activity.url_class}}</a>
                                    </div>

                                    <div class="activity-event-date" v-if="activity.interaction_state==2">
                                        <small>Fecha Retroalimentación:</small>
                                        <span>{{activity.feedback_date|formatDate}}</span>
                                    </div>
                                    <div class="activity-event-date" v-else>
                                        <small>Fecha máxima entrega:</small>
                                        <span>{{activity.delivery_max_date|formatDate}}</span>
                                    </div>                                    

                                    <div class="activity-event-action">
                                        <a v-if="activity.interaction_state==2" class="btn btn-link" :href="`/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`">Retroalimentación</a>
                                        <a v-else class="btn btn-link" :href="`/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`">Entregar</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
               <div class="row" v-if="tutorEvents.length>0">
                <div class="col-12">
                  <h4>Tutorías programadas</h4>
                  <div class="row">
                    <div class="col-12">
                      <div class="card activity-event-container">
                        <div class="activity-event event-green" v-for="(tutorial, i_tutorial) in tutorEvents" v-bind:key="i_tutorial">
                          <div class="activity-event-info">
                            <span>{{ tutorial.name }}</span>
                          </div>
                          <div class="activity-event-date">
                            <small>Fecha Inicio:</small>
                            <span>{{ tutorial.date_from | formatDate }}</span>
                          </div>
                          <div class="activity-event-date">
                            <small>Fecha Fin:</small>
                            <span>{{ tutorial.date_to | formatDate }}</span>
                          </div>
                          <div class="activity-event-action">
                            <a  class="btn btn-link" :href="tutorial.url">Ver</a>
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
  export default {
    components: {
      FullCalendar, // make the <FullCalendar> tag available
    },
    props: ["type_u","user"],
    data() {
      return {
        display_events: true,
        display_activities: true,
        display_respositories: true,
        display_tutorials:true,
        meetings: [],
        activities: [],
        respositories: [],
        initialView: "dayGridMonth",
        calendarOptions: {
          locale: esLocale,
          plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, momentTimezonePlugin, momentPlugin],
          initialView: "dayGridMonth", //timeGridWeek
          themeSystem: "bootstrap",
          dateClick: this.handleDateClick,
          timeZone: "America/Bogota",
          titleFormat: "D MMMM YYYY",
          events: [
            /*{ title: 'event 1', date: '2021-01-08 05:00:00',description: 'description for Long Event 11',url:'http://google.com/' },
          { title: 'event 2', date: '2020-12-31 07:00:00',description: 'description for Long Event 22' }*/
          ],
          eventClick: this.handleEventClick,
          eventDidMount: this.handleEventDidMount,
        },
        tutorEvents: [],
      };
    },
    mounted() {
      const fullCalendarApi = this.$refs.fullCalendar.getApi();
    axios.get("/getAllEvents").then((response) => {
        this.meetings = response.data;
        if (this.meetings && this.meetings.length > 0) {
          this.meetings.forEach((meeting) => {
            fullCalendarApi.addEvent({ title: `${meeting.area} ${meeting.classroom} | Clase ${meeting.name}`, start: meeting.dateFrom, end: meeting.dateTo, description: meeting.name, url: meeting.hangout, backgroundColor: "red" });
          });
          //this.calendarOptions.events= this.meetings.map(meeting=>{return { title: `[${meeting.area} ${meeting.classroom}] ${meeting.name}`, date: meeting.dateFrom,description: meeting.name,url:meeting.hangout }});
        }
      });
        axios.get("/api/student/activity").then((response) => {
            let activs = []
            activs = Object.values(response.data);
            console.log("activs",activs)
            activs.forEach((el)=>{
                if(el.activityForAllStudents == 1){
                    
                    if(el.selectedStudents == "[]" || el.selectedStudents == null){
                        this.activities.push(el)
                    }

                }else if(el.activityForPIARStudents == 1){

                    let PIARStudents= JSON.parse(el.selectedStudents);
                    PIARStudents.forEach((e)=>{
                        if(e.id == this.user.id){
                            this.activities.push(el)   
                        }
                    });

                }else if(el.activityForSelectStudents == 1){
                    
                    let selectedStudents= JSON.parse(el.selectedStudents);
                    selectedStudents.forEach((e)=>{
                        if(e.id == this.user.id){
                            this.activities.push(el)   
                        }
                    });

                }
            })

            if (this.activities && this.activities.length > 0) {
                this.activities.forEach((activity) => {
                    if (activity.interaction_state == 1) {
                        //delivery max
                        fullCalendarApi.addEvent({
                            title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`,
                            date: activity.delivery_max_date,
                            description: activity.description,
                            url: `/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`,
                            backgroundColor: "blue",
                        });
                    } else if (activity.interaction_state == 2) {
                        //feedback
                        fullCalendarApi.addEvent({
                            title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`,
                            date: activity.feedback_date,
                            description: activity.description,
                            url: `/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`,
                            backgroundColor: "blue",
                        });
                    } else {
                        fullCalendarApi.addEvent({
                            title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`,
                            date: activity.delivery_max_date,
                            description: activity.description,
                            url: `/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`,
                            backgroundColor: "blue",
                        });
                    }
                });
                //this.calendarOptions.events= this.meetings.map(meeting=>{return { title: `[${meeting.area} ${meeting.classroom}] ${meeting.name}`, date: meeting.dateFrom,description: meeting.name,url:meeting.hangout }});
            }
      });
      axios.get("/api/repository/student").then((response) => {
        this.respositories = response.data;
        if (this.respositories && this.respositories.length > 0) {
          this.respositories.forEach((repository) => {
            fullCalendarApi.addEvent({ title: `${repository.area_name} ${repository.classroom_name} | Repositorio: ${repository.name}`, date: repository.date, description: repository.description, url: repository.file, backgroundColor: "orange" });
          });
        }
      });
      this.getTutorEvents();
    },
    methods: {
        displayActivitiesChange() {
            const fullCalendarApi = this.$refs.fullCalendar.getApi();
            if (this.display_activities) {
                this.activities.forEach((activity) => {
                    if (activity.interaction_state == 1) {
                        //delivery max
                        fullCalendarApi.addEvent({
                            title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`,
                            date: activity.delivery_max_date,
                            description: activity.description,
                            url: `/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`,
                            backgroundColor: "blue",
                        });
                    } else if (activity.interaction_state == 2) {
                        //feedback
                        fullCalendarApi.addEvent({
                            title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`,
                            date: activity.feedback_date,
                            description: activity.description,
                            url: `/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`,
                            backgroundColor: "blue",
                        });
                    } else {
                        fullCalendarApi.addEvent({
                            title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`,
                            date: activity.delivery_max_date,
                            description: activity.description,
                            url: `/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`,
                            backgroundColor: "blue",
                        });
                    }
                });
            } else {
                const currentEvents = fullCalendarApi.getEvents();
                currentEvents.forEach((event) => {
                    if (event.backgroundColor == "blue") {
                        event.remove();
                    }
                });
            }
        },
//      methods: {
        filterPendingEvents:(events)=>{
            var momento = moment();
            return events.filter(e=>moment(e.dateTo)>= moment());
            //   return events.filter(e=>moment(e.dateTo)>=moment().add(5, 'hours'));
            // return events.filter((e) => moment(e.dateTo).format('MMMM Do YYYY, h:mm:ss a') >= moment().format('MMMM Do YYYY, h:mm:ss a'));
        },
        displayActivitiesChange(){
            const fullCalendarApi=this.$refs.fullCalendar.getApi();
            if(this.display_activities)
            {
                this.activities.forEach(activity=>{
                    if(activity.interaction_state==1)//delivery max
                    {
                        fullCalendarApi.addEvent({ title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`, date: activity.delivery_max_date ,description: activity.description,url:`/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}` ,backgroundColor:'blue' });
                    }
                    else if(activity.interaction_state==2){//feedback
                        fullCalendarApi.addEvent({ title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`, date: activity.feedback_date ,description: activity.description,url:`/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}` ,backgroundColor:'blue' });
                    }
                    else
                    {
                        fullCalendarApi.addEvent({ title: `${activity.area_name} ${activity.classroom_name} | Actividad: ${activity.name}`, date: activity.delivery_max_date ,description: activity.description,url:`/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}` ,backgroundColor:'blue' });
                    }
                })
            }
            else{
                const currentEvents=  fullCalendarApi.getEvents();
                currentEvents.forEach(event=>{
                    if(event.backgroundColor=='blue')
                    {
                        event.remove();
                    }
                });
            }
        },
        displayEventsChange() {
            const fullCalendarApi = this.$refs.fullCalendar.getApi();
            if (this.display_events) {
            this.meetings.forEach((meeting) => {
                fullCalendarApi.addEvent({ title: `${meeting.area} ${meeting.classroom} | Clase ${meeting.name}`, start: meeting.dateFrom, end: meeting.dateTo, description: meeting.name, url: meeting.hangout, backgroundColor: "red" });
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
        displayRepositoriesChange() {
            const fullCalendarApi = this.$refs.fullCalendar.getApi();
            if (this.display_respositories) {
                this.respositories.forEach((repository) => {
                    fullCalendarApi.addEvent({ title: `${repository.area_name} ${repository.classroom_name} | Repositorio: ${repository.name}`, date: repository.date, description: repository.description, url: repository.file, backgroundColor: "orange" });
                });
            } else {
                const currentEvents = fullCalendarApi.getEvents();
                currentEvents.forEach((event) => {
                    if (event.backgroundColor == "orange") {
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
        },
        filters: {
            formatDate: (value) => {
                if (value) {
                return moment(String(value)).format("DD MMMM YYYY hh:mm a");
                }
            },
        },
    }
//   }
</script>
<style>
  .fc-daygrid-event .fc-event-title {
    color: black;
  }
  .fc-daygrid-event .fc-event-time {
    color: black;
  }
  .fc-button-primary {
    background-color: #ffc039;
    font-weight: 600;
    color: #ffffff;
    border-color: #ffc039;
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
  .activity-event-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .activity-event {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0px;
    padding: 5px 8px;
    margin-left: 10px;
    width: 90%;
  }
  .activity-event.event-blue{
    border-left: 4px solid rgb(0, 113, 189);
  }
  .activity-event.event-orange{
    border-left: 4px solid rgb(189, 91, 0);
  }
  .activity-event.event-green{
    border-left: 4px solid #37d875;
  }
  .activity-event:hover {
    background: #f2f2f2;
    cursor: default;
  }
  .activity-event-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .activity-event-info > span {
    font-weight: 600;
    width: 100%;
    text-align: left;
  }
  .activity-event-date {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 6px 0px;
  }
  .activity-event-date > small {
    font-size: 0.8em;
  }
  .activity-event-date > span {
    font-size: 1em;
  }
  .activity-event-action {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
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
  .dot_green {
    background-color: #37d875;
  }
</style>
<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <div class="card-header fondo">
          <h4>Horario de tutorías</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="accordion" id="accordionExample">
                <div class="card" v-for="(area, t) in areas" :key="t">
                  <div class="card-header">
                    <h2 class="mb-0">
                      <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse' + t"  aria-controls="collapse">
                        <label class="btn-link_bold">{{ area.text }}</label>
                      </button>
                    </h2>
                  </div>
                  <div :id="'collapse' + t" class="collapse hide collapse-body" aria-labelledby="heading" data-parent="#accordionExample">
                    <div class="collapse-body-container">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th colspan="3" class="text-left">
                              <div class="row">
                                <div class="col-3">
                                  <datetime format="YYYY-MM-DD" v-model="date_find"></datetime>
                                </div>
                                <div class="col-4">
                                  <button class="btn btn-primary" @click.prevent="SearchSchedules(area.id, area.id_classroom, area.code_id)" :disabled="!date_find">Consultar disponibilidad</button>
                                </div>
                                <div class="col-5 text-right">
                                  <button class="btn btn-default" @click.prevent="SearchSchedules(area.id, area.id_classroom, area.code_id)">Refrescar</button>
                                </div>
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th class="text-center">Horario</th>
                            <th class="text-center" colspan="2">Profesor</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="loading">
                            <td colspan="3" class="text-center">Cargando...</td>
                          </tr>
                          <template v-if="!loading">
                            <tr v-for="(schedule, s_key) in schedules" :key="s_key">
                              <td class="text-left" style="width:200px">
                                <div class="row">
                                  <div class="col-12">
                                    <small>Desde:</small>
                                  </div>
                                  <div class="col-12">
                                    {{ schedule.date_from | formatDate }}
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-12">
                                    <small>Hasta:</small>
                                  </div>
                                  <div class="col-12">
                                    {{ schedule.date_to | formatDate }}
                                  </div>
                                </div>
                              </td>
                              <td class="text-left">
                                <div class="row">
                                  <div class="col-12">
                                    {{ schedule.teacher.name }}
                                  </div>
                                  <div class="col-12">
                                    <small>{{ schedule.teacher.email }}</small>
                                  </div>
                                  <div class="col-12">
                                    <a  class="btn btn-primary" :href="`/tutor/${schedule.teacher.id}/perfil`">Ver experiencia</a>
                                  </div>
                                </div>
                              </td>
                              <td class="text-center">
                                <button v-if="!schedule.reserved.id" class="btn btn-primary" @click="SelectSchedule(area.id, area.id_classroom, schedule, area.tutorial_value, area.description_code)">Tomar tutoría</button>
                                <button v-if="schedule.reserved.id && schedule.reserved.meetup" class="btn btn-success" @click="OpenSchedule(schedule)">Ingresar a la tutoría</button>
                                <span v-if="schedule.reserved.id && !schedule.reserved.meetup">(Tutor no ha generado link de reunión)</span>
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="modalSelectSchedule">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Programar tutoría
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12">
                    <small>Tutor:</small>
                    <p>
                      {{ schedule_selected.schedule ? schedule_selected.schedule.teacher.name : "" }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <small>Horario:</small>
                    <p>{{ schedule_selected.schedule ? schedule_selected.schedule.date_from : "" | formatDate }} - {{ schedule_selected.schedule ? schedule_selected.schedule.date_to : "" | formatDate }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <label>¿Qué temas desea reforzar?</label>
                    <textarea class="form-control" rows="5" v-model="schedule_selected.observations"></textarea>
                  </div>
                </div>
                <a href="javascript:void(0)" class="btn btn-primary" @click="SaveProgramSchedule()">Programar tutoría</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from "moment";
  moment.tz.setDefault("America/Bogota");
  moment.locale("es");

  import datetime from "vuejs-datetimepicker";

  export default {

    data() {
      return {
        areas: [],
        schedules: [],
        date_find: "",
        loading: false,
        schedule_selected: {},
        schedule_preloaded:{}
      };
    },
     props: ["schedule_id"],
    components: {
      datetime,
    },
    mounted() {

      this.getAreas().then(() => {

        if (this.schedule_id) {
          //this.areas[0].expand = true;
          //$(`#collapse${0}`).collapse('show');
           this.getScheduleEvent();
        }
      });
      this.getAreasCode();
    },
    methods: {
      getAreas() {
        return new Promise((resolve, reject) => {
          axios
            .get(`/GetArearByUser`)
            .then((response) => {
              console.log(response.data);
              this.areas = response.data;
              return resolve();
            })
            .catch((e) => {
              return reject(e);
            });
        });
      },

      getAreasCode() {
        axios.get('/vinculationsTutor').then((response)=>{
          let codes = response.data;
          codes.forEach((element)=>{
            axios.get(`/codes/${element.code_vinculated}`).then((response)=>{
              let resultCode = [];
              resultCode.push(response.data);
              resultCode.forEach((element1)=>{
                
                axios.get(`/getScheduleCode/${element1.id}`).then((response)=>{                  
                  response.data.forEach(element2=>{
                    if(element2.deleted === 0){
                      this.areas.push({
                        days:JSON.parse(element2.days),
                        duration_minutes: element2.duration_minutes,
                        deleted: element2.deleted,
                        date_to: element2.date_to,
                        date_from: element2.date_from,
                        id: element1.id_area,
                        area_id: element1.id_area,
                        id_classroom: element1.id_classroom,
                        tutorial_value: element1.tutorial_value,
                        description_code: element1.description,
                        code_id: element2.code_id,
                        text: element1.area_name+' - '+element1.code
                      });
                    }                    
                  })        
                })
              })                
            })
          })
        })
      },

      SearchSchedules(area_id, classroom_id, code_id) {
          if(code_id){
            this.schedule_selected = {};
            this.loading = true;
            axios.get(`/api/student/area/${area_id}/code/${code_id}/schedule/${this.date_find}`)
            .then((response) => {
              this.schedules = response.data;
              this.loading = false;
            })
            .catch((e) => {
              this.loading = false;
            });
          }else{
            this.schedule_selected = {};
            this.loading = true;
            axios
              .get(`/api/student/area/${area_id}/classroom/${classroom_id}/schedule/${this.date_find}`)
              .then((response) => {
                this.schedules = response.data;
                this.loading = false;
              })
              .catch((e) => {
                this.loading = false;
              });
          }
      },
      SelectSchedule(area_id, classroom_id, schedule, tutorial_value, description_code) {
        $("#modalSelectSchedule").modal("show");
        this.schedule_selected = { area_id: area_id, classroom_id: classroom_id, schedule: schedule, observations: "", tutorial_value: tutorial_value, description_code:description_code };
      },
      SaveProgramSchedule() {
        console.log('schedule Selected',this.schedule_selected)
        this.loading = true;
        $("#modalSelectSchedule").modal("hide");
        axios
          .put(`/api/student/area/${this.schedule_selected.area_id}/classroom/${this.schedule_selected.classroom_id}/schedule/programe`, this.schedule_selected)
          .then(() => {
            toastr.success("Tutoría programada correctamente.");
            this.SearchSchedules(this.schedule_selected.area_id, this.schedule_selected.classroom_id);
          })
          .catch((e) => {
            this.loading = false;
          });
      },
      getScheduleEvent(){
           axios
          .get(`/api/tutor-schedule/event/${this.schedule_id}`)
          .then((response) => {
            this.schedule_preloaded = response.data;
            const area_index=this.areas.findIndex(p=>p.id==this.schedule_preloaded.area.id);

            if(area_index>-1)
            {
                $(`#collapse${area_index}`).collapse('show');
                this.date_find=this.schedule_preloaded.date_from.substring(0,10);
                this.SearchSchedules(this.schedule_preloaded.area.id, this.schedule_preloaded.classroom.id);
            }
          });
      }
    },
    filters: {
      formatDate: (value) => {
        if (value) {
          return moment(String(value)).format("DD MMMM YYYY hh:mm a");
        }
      },
    },
  };
</script>
<style>
  .td-btn .btn {
    width: 80%;
    margin-bottom: 20px;
  }
  .td-days {
    text-align: left;
    width: 150px;
  }
  .td-btn {
    width: 150px;
  }

  .collapse-body-container {
    overflow-y: auto;
    height: 450px;
  }
</style>

<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <div class="card-header fondo">
          <h4>Consulta de Horarios de Tutorias</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="card" v-for="(schedule, s_key) in schedules" :key="s_key">
                <div class="card-header fondo">
                    <h5>{{schedule.code_vinculated}}</h5>
                </div>
                <div class="card-body">
                  <table class="table table-bordered" v-if="!loading">
                    <tbody>
                      <tr>
                        <td class="td-days">
                          <div class="row">
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="schedule.days.monday" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">Lunes</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="schedule.days.tuesday" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">Martes</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="schedule.days.wednesday" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">Miércoles</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="schedule.days.thursday" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">Jueves</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="schedule.days.friday" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">Viernes</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="schedule.days.saturday" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">Sábado</label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="schedule.days.sunday" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">Domingo</label>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="row justify-content-md-center">
                            <div class="col-4">
                              <label>Duración por sesión (minutos):</label>
                              <input type="number" class="form-control" v-model="schedule.duration_minutes" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-6">
                              <label>Desde:</label>
                              <datetime format="YYYY-MM-DD H:i:s" v-model="schedule.date_from"></datetime>
                            </div>
                            <div class="col-6">
                              <label>Hasta:</label>
                              <datetime format="YYYY-MM-DD H:i:s" v-model="schedule.date_to"></datetime>
                            </div>
                          </div>
                        </td>
                      </tr>
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
        loading: false,
      };
    },
    components: {
      datetime,
    },
    mounted() {
      this.getAreas();
    },
    methods: {
      getAreas() {
        axios.get('vinculationsTutor').then((response)=>{
          let codes = response.data;
          codes.forEach((element)=>{
            axios.get(`/codes/${element.code_vinculated}`).then((response)=>{
              let resultCode = [];
              resultCode.push(response.data);
              resultCode.forEach((element1)=>{
                
                axios.get(`/getScheduleCode/${element1.id}`).then((response)=>{
                  response.data.forEach(element2=>{
                    this.schedules.push({
                      days:JSON.parse(element2.days),
                      duration_minutes: element2.duration_minutes,
                      deleted: element2.deleted,
                      date_to: element2.date_to,
                      date_from: element2.date_from,
                      code_vinculated: element1.area_name+' - '+element1.code
                    });
                  })        
                })
              })                
            })
          })
        })
      },
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
  .collapse-body {
    height: 700px;
  }
</style>

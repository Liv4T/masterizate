<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <div class="card-header fondo">
          <h4>Administrar horario de tutorías</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="accordion" id="accordionExample">
                <div class="card" v-for="(area, t) in areas" :key="t">
                  <div class="card-header">
                    <h2 class="mb-0">
                      <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse' + t" aria-expanded="false" @click.prevent="GetSchedule(area.id, area.id_classroom)" aria-controls="collapse">
                        <label class="btn-link_bold">{{ area.text }}</label>
                      </button>
                    </h2>
                  </div>
                  <div :id="'collapse' + t" class="collapse hide collapse-body" aria-labelledby="heading" data-parent="#accordionExample">
                    <label v-if="loading">Cargando...</label>
                    <table class="table table-bordered" v-if="!loading">
                      <thead>
                        <tr>
                          <th colspan="3" class="text-left">
                            <button class="btn btn-primary" @click.prevent="AddSchedule(area.id, area.id_classroom)">Agregar Horario</button>
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center">Días</th>
                          <th class="text-center">Horario</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(schedule, s_key) in schedules" :key="s_key">
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
                          <td class="td-btn">
                            <div class="row">
                              <div class="col-12">
                                <button class="btn btn-primary" @click="SaveSchedule(area.id, area.id_classroom, schedule)">{{ schedule.id ? "Actualizar" : "Guardar" }}</button>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12">
                                <button class="btn btn-danger" @click="DeleteSchedule(area.id, area.id_classroom, schedule)">Eliminar</button>
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
        axios.get(`/GetArearByUser`).then((response) => {
          this.areas = response.data;
        });
      },
      GetSchedule(area_id, classroom_id) {
        this.loading = true;
        axios.get(`/api/tutor/area/${area_id}/classroom/${classroom_id}/schedule`).then((response) => {
          this.schedules = response.data;
          this.loading = false;
        });
      },
      AddSchedule(area_id, classroom_id) {
        this.schedules.push({ date_from: "", date_to: "", days: { monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: false, sunday: false }, area_id: area_id, classroom_id: classroom_id ,duration_minutes:30});
      },
      SaveSchedule(area_id, classroom_id, schedule) {
        if (schedule.id) {
          axios.put(`/api/tutor/area/${area_id}/classroom/${classroom_id}/schedule${schedule.id ? `/${schedule.id}` : ""}`, schedule).then((response) => {
            this.GetSchedule(area_id, classroom_id);
            toastr.success("Actualizado exitosamente");
          });
        } else {
          axios.post(`/api/tutor/area/${area_id}/classroom/${classroom_id}/schedule`, schedule).then((response) => {
            this.GetSchedule(area_id, classroom_id);
            toastr.success("Creado exitosamente");
          });
        }
      },
      DeleteSchedule(area_id, classroom_id, schedule) {
        axios.delete(`/api/tutor/area/${area_id}/classroom/${classroom_id}/schedule${schedule.id ? `/${schedule.id}` : ""}`, schedule).then((response) => {
          this.GetSchedule(area_id, classroom_id);
          toastr.success("Eliminado exitosamente");
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

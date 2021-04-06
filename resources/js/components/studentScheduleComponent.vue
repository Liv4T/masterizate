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
                      <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse' + t" aria-expanded="false"  aria-controls="collapse">
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
                                  <button class="btn btn-primary" @click.prevent="SearchSchedules(area.id, area.id_classroom)" :disabled="!date_find">Consultar disponibilidad</button>
                                </div>
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th class="text-center">Horario</th>
                            <th class="text-center">Profesor</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="loading">
                            <td colspan="3" class="text-center">Cargando...</td>
                          </tr>
                          <template v-if="!loading">
                            <tr v-for="(schedule, s_key) in schedules" :key="s_key">
                              <td class="text-center">
                                <div class="row">
                                  <div class="col-12">
                                    <label>Desde:</label>
                                  </div>
                                  <div class="col-12">
                                    {{ schedule.date_from | formatDate }}
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-12">
                                    <label>Hasta:</label>
                                  </div>
                                  <div class="col-12">
                                    {{ schedule.date_to | formatDate }}
                                  </div>
                                </div>
                              </td>
                              <td class="text-center">
                                <div class="row">
                                  <div class="col-12">
                                   {{schedule.teacher.name}}
                                  </div>
                                </div>
                              </td>
                              <td class="text-center"></td>
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
      SearchSchedules(area_id, classroom_id) {
        this.loading = true;
        axios.get(`/api/student/area/${area_id}/classroom/${classroom_id}/available-schedule/${this.date_find}`).then((response) => {
          this.schedules = response.data;
          this.loading = false;
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

  .collapse-body-container {
    overflow-y: auto;
    height:450px;
  }
</style>

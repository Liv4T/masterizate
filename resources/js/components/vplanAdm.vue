<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Planificación</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-striped center">
              <tbody v-for="(area,t) in areas" :key="t">
                <tr
                  data-toggle="collapse"
                  :data-target="'#accordion'+t"
                  class="clickable"
                  @click.prevent="botones(area.id, area.id_classroom)"
                >
                  <td>{{ area.text }}</td>
                </tr>
                <!-- <tr>
                  <td>
                    <div :id="'accordion'+t" class="collapse">
                      <a
                        :href="'/plan_adm/'+ area.id +'/'+ area.id_classroom"
                        class="btn btn-warning"
                      >General</a>
                    </div>
                  </td>



                  <td>
                    <div id="accordion" class="collapse">
                      <a

                        href="/semana_adm"
                        class="btn btn-warning"
                      >Actualizar semana</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a v-show="semanal==true" href="/vclases_adm" class="btn btn-warning">Clases</a>
                    </div>
                  </td>

                </tr>-->
                <tr>
                  <td>
                    <div :id="'accordion'+t" class="collapse">
                      <a
                        :href="'/course/'+ area.id +'/'+ area.id_classroom"
                        class="btn btn-warning"
                      >General</a>
                    </div>
                  </td>
                  <td>
                    <div :id="'accordion'+t" class="collapse">
                      <a
                        :href="'/porcentaje/'+ area.id +'/'+ area.id_classroom"
                        class="btn btn-warning"
                      >Porcentaje de notas</a>
                    </div>
                  </td>

                  <td>
                    <div :id="'accordion'+t" class="collapse">
                      <a href="/clases_d" class="btn btn-warning">Clases</a>
                    </div>
                  </td>
                  <!-- <td>
                    <div id="accordion" class="collapse">
                      <a
                        v-show="semanal==true"
                        href="/actividad_d"
                        class="btn btn-warning"
                      >Actividad</a>
                    </div>
                  </td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
$(".collapse").on("show.bs.collapse", function () {
  $(".collapse.in").collapse("hide");
});

export default {
  data() {
    return {
      week: [],
      semanal: false,
      general: false,
      anual: [],
      areas: [],
    };
  },

  mounted() {
    var url = "GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });
  },
  methods: {
    botones(area, classroom) {
      var urlsl =
        window.location.origin +
        "/coursePlanification/" +
        area +
        "/" +
        classroom;
      axios.get(urlsl).then((response) => {
        this.anual = response.data;
        if (this.anual.quaterly.length > 0) {
          this.general = true;
        } else {
          this.general = false;
        }
      });
      var urlsel = "editGetWeek";
      axios.get(urlsel).then((response) => {
        this.week = response.data;

        if (this.week.id_area == area && this.week.id_classroom == classroom) {
          this.semanal = true;
        } else {
          this.semanal = false;
        }
      });
    },
  },
};
</script>
<style>
.collapse-row.collapsed + tr {
  display: none;
}
.btn.skool {
  background-color: #c1e9eb;
  color: white;
}
</style>

<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Planificación</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-striped center">
              <tbody>
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>Química</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion" class="collapse">
                      <a href="/plan_adm" class="btn btn-warning">General</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a
                        v-show="general==true"
                        href="/crear_semana"
                        class="btn btn-warning"
                      >Crear Semana</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a
                        v-show="semanal==true"
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
$(".collapse").on("show.bs.collapse", function() {
  $(".collapse.in").collapse("hide");
});

export default {
  data() {
    return {
      week: [],
      semanal: false,
      general: false,
      anual: []
    };
  },

  mounted() {
    var urlsel = "editGetWeek";
    axios.get(urlsel).then(response => {
      this.week = response.data;
      if (this.week.length > 0) {
        this.semanal = true;
      }
    });
    var urlsl = "Courses";
    axios.get(urlsl).then(response => {
      this.anual = response.data;
      console.log(this.anual);
      if (this.anual.courses.length > 0) {
        this.general = true;
      }
    });
  },
  methods: {}
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

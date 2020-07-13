<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Notas</h3>

          <div class="card-body">
            <div class="form-group row">
              <div class="col-md-4">
                <label for>Periodo:</label>
                <select class="form-control">
                  <option value>Primer periodo</option>
                </select>
              </div>
            </div>

            <table class="table table-responsive-xl table-hover table-striped center">
              <thead>
                <tr>
                  <th colspan="1">&nbsp;</th>
                  <th>Nombre de la materia</th>
                  <th>Completado</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="10px">
                    <a class="btn btn-warning btn-sm" v-on:click.prevent="editNames()">v</a>
                  </td>
                  <td>Química</td>
                  <td>10%</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <div class="modal-footer">
              <input type="submit" class="btn btn-warning" value="Volver" />
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editu">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Actividad
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <table class="table table-responsive table-hover table-striped center">
                  <thead>
                    <tr>
                      <th>Alumno</th>
                      <th>Tipo de Actividad</th>
                      <th>Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Maggy Stanley</td>
                      <td>Trivia</td>
                      <td>Nota</td>
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
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    editNames() {
      var urlr = "";
      axios.get(urlr).then(response => {
        this.activities = response.data;
        console.log(this.activities.length);

        for (let i = 0; i < this.activities.length; i++) {
          if (actividad.id == this.activities[i].id) {
            this.id_act = this.activities[i].id;
            this.descripcion = this.activities[i].activity_desc;
            this.logro = this.activities[i].achievement;
            this.fechaE = this.activities[i].deliver_date;
            this.fechaR = this.activities[i].feedback_date;
          }
        }
      });
      $("#editu").modal("show");
    }
  }
};
</script>
<style>
</style>

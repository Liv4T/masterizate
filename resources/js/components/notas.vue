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
                  <th>Nombre de la materia</th>
                  <th>Completado</th>
                  <th>Nota</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Química</td>
                  <td>60%</td>
                  <td>6</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Biología</td>
                  <td>60%</td>
                  <td>6</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Física</td>
                  <td>60%</td>
                  <td>6</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <div class="modal-footer">
              <input type="submit" class="btn btn-warning" value="Guardar" />
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
  methods: {}
};
</script>
<style>
</style>

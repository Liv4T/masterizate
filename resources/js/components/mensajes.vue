<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mensajes</h3>

          <div class="card-body">
            <a href="/redactar" class="btn btn-warning float-right">Redactar</a>
            <br />
            <br />
            <br />
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody>
                <tr>
                  <td width="10px">
                    <a href="/vmensaje" class="btn btn-warning btn-sm">v</a>
                  </td>
                  <td>Nombre</td>
                  <td>Asunto del mensaje</td>
                  <td>25/11/2019</td>
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

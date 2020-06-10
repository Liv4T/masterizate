<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Reportes</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody>
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>Docente</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-eye"></i>
                    </a>
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-edit"></i>
                    </a>

                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="createS()">Notas</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="createS()">Planeación</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="createS()">Recuperación</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="createS()">Exámenes</a>
                    </div>
                  </td>
                </tr>
                <tr data-toggle="collapse" data-target="#accordion2" class="clickable">
                  <td>Estudiantes</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-eye"></i>
                    </a>
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-edit"></i>
                    </a>

                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion2" class="collapse">
                      <a class="btn btn-warning" href="/docente_adm">Notas</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion2" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Planeación</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion2" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Recuperación</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion2" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Exámenes</a>
                    </div>
                  </td>
                </tr>
                <tr data-toggle="collapse" data-target="#accordion3" class="clickable">
                  <td>Cursos</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-eye"></i>
                    </a>
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-edit"></i>
                    </a>

                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion3" class="collapse">
                      <a class="btn btn-warning" href="/docente_adm">Notas</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion3" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Planeación</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion3" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Recuperación</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion3" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Exámenes</a>
                    </div>
                  </td>
                </tr>
                <tr data-toggle="collapse" data-target="#accordion4" class="clickable">
                  <td>Materias</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-eye"></i>
                    </a>
                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-edit"></i>
                    </a>

                    <a class="btn btn-sm" href="#" style="color: grey;">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="accordion4" class="collapse">
                      <a class="btn btn-warning" href="/docente_adm">Notas</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion4" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Planeación</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion4" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Recuperación</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion4" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_adm">Exámenes</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal fade" id="createSalon">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Reporte de notas
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent novalidate>
                  <div class="form-group row">
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Fecha</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                  <div class="form-group row">
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Estudiante</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                  <div class="form-group row">
                    <select
                      class="form-control"
                      ref="seleccionado"
                      style="background: gainsboro;"
                      required
                    >
                      <option value="2">Docente</option>
                      <option value="3">Estudiante</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-warning" value="Exportar" />
                  </div>
                </form>
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
    return {
      clases: [],
      descripcion: "",
      logro: "",
      name: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      inputs: [
        {
          name: ""
        }
      ]
    };
  },
  created() {},
  mounted() {
    var urlr = "viewGetWeek";
    axios.get(urlr).then(response => {
      this.clases = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    editNames(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createZ").modal("show");
    },
    createS(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createSalon").modal("show");
    },
    createM(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createMat").modal("show");
    },
    add(index) {
      this.inputs.push({
        name: ""
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    }
  }
};
</script>
<style>
.background2 {
  background: url(../assets/img/Fondo5.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
</style>

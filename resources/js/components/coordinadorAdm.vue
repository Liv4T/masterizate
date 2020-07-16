<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Coordinadores</h3>
          <div class="card-body">
            <a class="btn btn-warning" v-on:click.prevent="createS()">Crear Coordinador</a>
            <a class="btn btn-warning" href="/perfil_asignar">Asignar perfil</a>
            <br />
            <br />
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody>
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>Coordinador 1</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal fade" id="createCoord">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Usuarios
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">
                        <img
                          width="35px"
                          src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                          alt
                        />Rol
                      </label>
                      <div>
                        <select
                          class="form-control"
                          ref="seleccionado"
                          style="background: gainsboro;"
                          required
                        >
                          <option value="3">Coordinador</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">
                        <img
                          width="35px"
                          src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                          alt
                        />Nombres
                      </label>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="name"
                          style="background: gainsboro;"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">
                        <img
                          width="35px"
                          src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                          alt
                        />Apellidos
                      </label>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="name"
                          style="background: gainsboro;"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">
                        <img
                          width="35px"
                          src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-MENSAJES_naranja.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                          alt
                        />Correo
                      </label>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="name"
                          style="background: gainsboro;"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">
                        <img
                          width="35px"
                          src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                          alt
                        />Institución
                      </label>
                      <div>
                        <select
                          class="form-control"
                          ref="seleccionado"
                          style="background: gainsboro;"
                          required
                        >
                          <option value="2">in 1</option>
                          <option value="3">Secundaria</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">
                        <img
                          width="35px"
                          src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                          alt
                        />Nombre de usuario
                      </label>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="name"
                          style="background: gainsboro;"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">
                        <img
                          width="35px"
                          src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                          alt
                        />Contraseña
                      </label>
                      <div>
                        <input
                          type="password"
                          name="objetive1"
                          class="form-control"
                          v-model="name"
                          style="background: gainsboro;"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <input type="submit" class="btn btn-warning" value="Guardar" />
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
      $("#createCoord").modal("show");
    },
    createM(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createMat").modal("show");
    },
    createG(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createGrad").modal("show");
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

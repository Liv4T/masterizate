<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">General</h3>
          <div class="card-body">
            <a class="btn btn-warning" v-on:click.prevent="createG()">Crear grado</a>
            <a class="btn btn-warning" v-on:click.prevent="createS()">Crear salón</a>
            <!-- <a
                            class="btn btn-warning"
                            v-on:click.prevent="createM()"
                            >Crear materia</a
            >
            <a class="btn btn-warning" v-on:click.prevent="editNames()">Crear usuarios</a>-->
            <br />
            <br />
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody>
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>Sexto</td>
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
                      <a class="btn btn-warning" v-on:click.prevent="createM()">Crear materia</a>
                    </div>
                  </td>

                  <!-- <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="editNames(actividad)">Semana 2</a>
                    </div>
                  </td>
                  <td>
                    <div id="accordion" class="collapse">
                      <a class="btn btn-warning" v-on:click.prevent="editNames(actividad)">Semana 3</a>
                    </div>
                  </td>-->
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
                Salón
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent="createSalon()" novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for>Grado</label>
                      <div>
                        <select
                          class="form-control"
                          v-model="grado"
                          style="background: gainsboro;"
                          required
                        >
                          <option value="2">Sexto</option>
                          <option value="3">Septimo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Nombre</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove(t)"
                          v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add(t)"
                          v-show="
                                                        t == inputs.length - 1
                                                    "
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
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
      <div class="modal fade" id="createMat">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Materias
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent="createMateria()" novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Grado</label>
                      <div>
                        <select
                          class="form-control"
                          v-model="grado"
                          style="background: gainsboro;"
                          required
                        >
                          <option value="2">Sexto</option>
                          <option value="3">Primaria</option>
                          <option value="3">Secundaria</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Nombre</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove(t)"
                          v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add(t)"
                          v-show="
                                                        t == inputs.length - 1
                                                    "
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
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

      <div class="modal fade" id="createGrad">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Grado
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent="createGrado()" novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for>Sección</label>
                      <div>
                        <select
                          class="form-control"
                          v-model="section"
                          style="background: gainsboro;"
                          required
                        >
                          <option value="2">Preescolar</option>
                          <option value="3">Primaria</option>
                          <option value="3">Secundaria</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Grado</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove(t)"
                          v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add(t)"
                          v-show="
                                                        t == inputs.length - 1
                                                    "
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
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
      grado: "",
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
    },
    createSalon() {
      var url = "save";

      axios
        .post(url, {
          //Cursos generales
          name: this.name,
          grade: this.grado
        })
        .then(response => {
          this.errors = [];

          toastr.success("Nuevo salon creado exitosamente");
          this.getMenu();
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    createGrado() {
      var url = "save";

      axios
        .post(url, {
          //Cursos generales
          name: this.name,
          section: this.section
        })
        .then(response => {
          this.errors = [];

          toastr.success("Nuevo grado creado exitosamente");
          this.getMenu();
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    createMateria() {
      var url = "save";

      axios
        .post(url, {
          //Cursos generales
          name: this.name,
          grade: this.grado
        })
        .then(response => {
          this.errors = [];

          toastr.success("Nueva materia creada exitosamente");
          this.getMenu();
        })
        .catch(error => {
          this.errors = error.response.data;
        });
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

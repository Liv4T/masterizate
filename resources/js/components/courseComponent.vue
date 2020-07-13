<template>
<div>
  <head>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
      integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
      integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
      integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
      crossorigin="anonymous"
    />
  </head>
  <div class="back">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Planificación general</h3>
          <form class="needs-validation" novalidate v-show="trimestre == false">
            <form-wizard
              title
              subtitle
              color="#c1e9eb"
              next-button-text="Siguiente"
              back-button-text="Atrás"
              finish-button-text="Guardar y enviar"
              @on-complete="createCourses"
            >
              <tab-content title="Anual">
                <div class="form-group mx-auto" v-for="(input, t) in inputs" :key="t">
                  <div align="center">
                    <strong>
                      Logro
                      <input type="number" style="width:50px;" />%
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="
                                                            remove(t)
                                                        "
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
                                                            t ==
                                                                inputs.length -
                                                                    1
                                                        "
                        >+</a>
                      </span>
                    </strong>
                  </div>
                  <textarea name="welcome" class="form-control" v-model="newLogro1" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </tab-content>
              <tab-content title="Porcentaje de notas">
                <div class="card-body">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header">
                        <h2 class="mb-0">
                          <button
                            class="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse"
                            aria-expanded="true"
                            aria-controls="collapse"
                          >
                            <strong>
                              Logro
                              <input type="number" style="width:50px;" />%
                            </strong>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapse"
                        class="collapse show"
                        aria-labelledby="heading"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <table class="table table-responsive-xl table-hover table-striped center">
                            <tbody>
                              <tr>
                                <td>Actividad</td>
                                <td>Cantidad</td>
                                <td>Porcentaje</td>
                                <td>Acciones</td>
                              </tr>
                              <tr>
                                <td>Quiz</td>
                                <td>5</td>
                                <td>20%</td>
                                <td>
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
                          <div align="right">
                            <a
                              class="btn btn-warning"
                              v-on:click.prevent="
                                                                    editNames()
                                                                "
                            >Agregar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Trimestral">
                <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                  <div class="col-md-7 mx-auto">
                    <label for>Logro:</label>
                    <select class="form-control" ref="seleccionado" required>
                      <option value="1">Logro1</option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label for="name">Unidad</label>
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
                        placeholder="Nombre de la unidad"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="input.contenido"
                      placeholder="Es la explicacion o sintesis de la unidad."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <!-- <div class="modal-footer">
                  <a submit="createCourses" class="btn btn-warning float-right">Guardar</a>
                </div>-->
              </tab-content>
            </form-wizard>
          </form>
          <form v-show="trimestre == true">
            <form-wizard
              title
              subtitle
              color="#c1e9eb"
              next-button-text="Siguiente"
              back-button-text="Atrás"
              finish-button-text="Volver"
              @on-complete="updateCourses"
            >
              <tab-content title="Anual">
                <div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>
                        Logro 1
                        <input type="number" style="width:50px;" disabled />%
                      </strong>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="logro_1" disabled></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>
                        Logro 2
                        <input type="number" style="width:50px;" disabled />%
                      </strong>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="logro_2" disabled></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>
                        Logro 3
                        <input type="number" style="width:50px;" disabled />%
                      </strong>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="logro_3" disabled></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>
                        Logro 4
                        <input type="number" style="width:50px;" disabled />%
                      </strong>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="logro_4" disabled></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Trimestral">
                <div class="form-group row mx-auto" v-for="(input, t) in fillC.quaterly" :key="t">
                  <div class="col-md-6">
                    <label for="name">Unidad</label>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="input.unit_name"
                        placeholder="Nombre de la unidad"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="input.content"
                      placeholder="Es la explicacion o sintesis de la unidad."
                      disabled
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <!-- <div class="modal-footer">
                  <a submit="createCourses" class="btn btn-warning float-right">Guardar</a>
                </div>-->
              </tab-content>
            </form-wizard>
          </form>
        </div>
      </div>
      <div class="modal fade" id="createZ">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Porcentaje
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Tipo de actividad</label>
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
                      <label for="name">Cantidad</label>
                      <div>
                        <input
                          type="number"
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
                      <label for="name">Porcentaje total</label>
                      <div>
                        <input
                          type="number"
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
</div>
</template>
<script>
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
$(function() {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var hidden = $("#hidden_fields1");

  hidden.hide();

  checkbox.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
  data() {
    return {
      inputs: [
        {
          name: "",
          contenido: ""
        }
      ],
      newTrimestre: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: "",
      newTrimestre: [],
      trimestre: false,
      logro_1: "",
      logro_2: "",
      logro_3: "",
      logro_4: "",
      fillC: [],
      anual: [],
      newAnual: [],
      errors: []
    };
  },
  mounted() {
    var urlsel = "Courses";
    axios.get(urlsel).then(response => {
      this.fillC = response.data;
      if (this.fillC.courses.length > 0) {
        this.trimestre = true;
        for (let i = 0; i < this.fillC.courses.length; i++) {
          this.logro_1 = this.fillC.courses[i].achievement_1;
          this.logro_2 = this.fillC.courses[i].achievement_2;
          this.logro_3 = this.fillC.courses[i].achievement_3;
          this.logro_4 = this.fillC.courses[i].achievement_4;
        }
      }
    });
  },
  methods: {
    getMenu() {
      window.location = "/actividad_g";
    },
    add(index) {
      this.inputs.push({ name: "", contenido: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },

    createCourses() {
      var url = "Courses";

      if (this.inputs.length >= 1) {
        for (let i = 0; i < this.inputs.length; i++) {
          this.newTrimestre.push(this.inputs[i]);
        }
      }

      axios
        .post(url, {
          //Cursos generales
          materia: "1",
          logro1: this.newLogro1,
          logro2: this.newLogro2,
          logro3: this.newLogro3,
          logro4: this.newLogro4,
          trimestre: this.newTrimestre
        })
        .then(response => {
          this.errors = [];

          toastr.success("Nuevo plan general creado exitosamente");
          this.getMenu();
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    updateCourses() {
      window.location = "/actividad_g";
    },
    editNames(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createZ").modal("show");
    }
  }
};
</script>
<style></style>

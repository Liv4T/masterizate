<template>
  <div>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Duplicar ciclos</h3>
            <form class="needs-validation" novalidate v-show="semanal == false">
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Guardar y enviar"
                @on-complete="createSemana"
              >
                <tab-content title="Ciclo">
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <select class="form-control" v-model="materia" required>
                        <option
                          :value="
                                                        option.id +
                                                            '/' +
                                                            option.id_classroom
                                                    "
                          v-for="option in myOptions"
                        >{{ option.text }}</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <a
                        href="#"
                        class="btn btn-warning"
                        v-on:click.prevent="
                                                    duplicar(materia)
                                                "
                      >Duplicar</a>
                    </div>
                  </div>
                  <div class="form-group row mx-auto" v-for="(act, t) in fillS" :key="t">
                    <div class="col-md-6">
                      <label for="name">
                        Pregunta conductora o nombre
                        {{ t + 1 }}
                      </label>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="act.text"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Desarrollo de la clase</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="act.class"
                        placeholder="Es la explicacion o sintesis de la clase."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Observación</label>
                      <textarea name="competences" class="form-control" v-model="act.observation"></textarea>
                    </div>
                  </div>
                  <!-- <div class="modal-footer">
                    <a href="#" class="btn btn-warning float-right">Guardar</a>
                  </div>-->
                </tab-content>
              </form-wizard>
            </form>

            <form class="needs-validation" novalidate v-show="semanal == true">
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Guardar y enviar"
                @on-complete="duplicateSemana"
              >
                <tab-content title="Ciclo">
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <select class="form-control" v-model="materia" required>
                        <option
                          :value="
                                                        option.id +
                                                            '/' +
                                                            option.id_classroom
                                                    "
                          v-for="option in myOptions"
                        >{{ option.text }}</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <a
                        href="#"
                        class="btn btn-warning"
                        v-on:click.prevent="
                                                    duplicar(materia)
                                                "
                      >Duplicar</a>
                    </div>
                  </div>
                  <div class="form-group row mx-auto" v-for="(act, t) in fillS" :key="t">
                    <div class="col-md-6">
                      <label for="name">
                        Pregunta conductora o nombre
                        {{ t + 1 }}
                      </label>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="act.text"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Desarrollo de la clase</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="act.class"
                        placeholder="Es la explicacion o sintesis de la clase."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Observación</label>
                      <textarea name="competences" class="form-control" v-model="act.observation"></textarea>
                    </div>
                  </div>
                  <!-- <div class="modal-footer">
                    <a href="#" class="btn btn-warning float-right">Guardar</a>
                  </div>-->
                </tab-content>
              </form-wizard>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
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
$(function () {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var hidden = $("#hidden_fields1");

  hidden.hide();

  checkbox.change(function () {
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
  props: ["id_area", "id_classroom"],
  data() {
    return {
      inputs: [
        {
          driving_question: "",
          class_development: "",
          observation: "",
        },
      ],
      newSemanal: [],
      fillS: [
        {
          id: "",
          driving_question: "",
          class_development: "",
          observation: "",
        },
      ],
      fillC: [],
      materia: "",
      semanal: false,
      myOptions: [],
      errors: [],
    };
  },
  mounted() {
    var urlsel =
      window.location.origin +
      "/editOneWeek/" +
      this.id_area +
      "/" +
      this.id_classroom;
    axios.get(urlsel).then((response) => {
      this.fillS = response.data;

      if (this.fillS.length > 0) {
        this.semanal = true;
      } else {
        this.semanal = false;
      }
    });
    var url = window.location.origin + "/GetArearByUser";
    axios.get(url).then((response) => {
      this.myOptions = response.data;
    });
  },
  methods: {
    add(index) {
      this.inputs.push({
        driving_question: "",
        class_development: "",
        observation: "",
      });
    },
    duplicar(id) {
      this.fillS = [];
      var urlsel = window.location.origin + "/editOneWeek/" + id;
      axios.get(urlsel).then((response) => {
        this.fillS = response.data;
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    getMenu() {
      window.location = "/actividad_g";
    },

    createSemana() {
      this.newSemanal = [];
      var url = window.location.origin + "/courseWeekly";
      if (this.fillS.length >= 1) {
        for (let i = 0; i < this.fillS.length; i++) {
          this.newSemanal.push(this.fillS[i]);
        }
      }

      axios
        .post(url, {
          //Cursos generales
          id_area: this.id_area,
          id_classroom: this.id_classroom,
          semana: this.newSemanal,
          duplicate: 1,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva semana creada exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response;
        });
    },
    duplicateSemana() {
      this.newSemanal = [];
      var url = window.location.origin + "/courseWeekly";
      if (this.fillS.length >= 1) {
        for (let i = 0; i < this.fillS.length; i++) {
          this.newSemanal.push(this.fillS[i]);
        }
      }

      axios
        .post(url, {
          //Cursos generales
          id_area: this.id_area,
          id_classroom: this.id_classroom,
          semana: this.newSemanal,
          duplicate: 2,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva semana creada exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response;
        });
    },
  },
};
</script>
<style></style>

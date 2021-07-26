<template>
  <div class="back">
        <div class="col-md-12 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Mis Cursos</h3>
            <form class="needs-validation" novalidate>
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
                  <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                    <div class="col-md-6">
                      <label for="numeroCiclo">Número de ciclo</label>
                      <input type="text" name="numeroCiclo" class="form-control" v-model="input.numeroCiclo" readonly/>
                    </div>
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                      <label for="name">Pregunta conductora o nombre</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove(t)"
                          v-show="t != 0 && t == inputs.length - 1"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add(t)"
                          v-show="t == inputs.length - 1"
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-on:change="contentUpdateEvent(t,'driving_question')"
                          v-model="input.driving_question"
                          required
                        />
                      </div>
                    </div>
                      <div class="col-md-6" v-for="(inputC, k) in inputsClass[t]">
                        <label for="name">Desarrollo de la clase</label>
                        <span>
                          <a
                            href="#"
                            class="badge badge-danger"
                            @click.prevent="removeC(t)"
                            v-show="k != 0 && k == inputsClass[t].length - 1"
                          >-</a>
                          <a
                            href="#"
                            class="badge badge-primary"
                            @click.prevent="addC(t)"
                            v-show="k == inputsClass[t].length - 1"
                          >+</a>
                        </span>
                        <textarea
                          name="competences"
                          class="form-control"
                          v-model="inputC.class_developmentC"
                          placeholder="Es la explicacion o sintesis de la clase."
                          v-on:change="contentUpdateEventC(t,k,'class_developmentC')"
                          required
                        ></textarea>
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    <div class="col-md-6">
                      <label for="name">Observación</label>
                      <textarea name="competences" 
                        v-on:change="contentUpdateEvent(t,'observation')"
                      class="form-control" v-model="input.observation"></textarea>
                    </div>
                    <div class="col-md-6">
                      <label for="ajustes">Ajustes PIAR</label>
                      <textarea type="text" name="ajustes" class="form-control" v-model="input.ajustes"> </textarea>
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
  props: ["id_area", "id_classroom", "id_trimestre", "orden"],
  data() {
    return {
      inputs: [
        {
          driving_question: "",
          observation: "",
          numeroCiclo: this.orden+'.'+1,
          class_development: "",
          ajustes: "",
        },
      ],
      inputsClass:[[
        {
          class_developmentC: "",
        },
      ]],
      newSemanal: [],

      semanal: false,
      errors: [],
    };
  },
  mounted() {},
  methods: {
    contentUpdateEvent(index,property){
      this.inputs[index][property]=this.inputs[index][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
    },
    contentUpdateEventC(index1,index2,property){
      this.inputsClass[index1][index2][property]=this.inputsClass[index1][index2][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
    },
    add(index) {
      this.inputsClass.push([{
        class_development: "",
      }]);
      this.inputs.push({
        driving_question: "",
        observation: "",
        class_development: "",
        numeroCiclo: this.orden+'.'+(index+2),
        ajustes: "",
      });
    },
    remove(index) {
      this.inputs.splice(index, 1);
      this.inputs.numeroCiclo= this.orden+'.'+1;
    },
    addC(index) {
      this.inputsClass[index].push({
        class_developmentC: "",
      });
    },
    removeC(index) {
      this.inputsClass[index].splice(index, 1);
    },
    getMenu() {
      window.location = "/actividad_g";
    },
    createSemana() {
      var url = window.location.origin + "/courseWeekly";
      if (this.inputs.length >= 1) {
        for (let i = 0; i < this.inputs.length; i++) {
          this.inputs[i].class_development=JSON.stringify(this.inputsClass[i]);
          this.newSemanal.push(this.inputs[i]);
        }
      }

      axios
        .post(url, {
          //Cursos generales
          id_area: this.id_area,
          id_classroom: this.id_classroom,
          id_trimestre: this.id_trimestre,
          semana: this.newSemanal,
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

<template>
  <div>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Asignación de Acudientes</h3>
            <form class="needs-validation" novalidate>
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Guardar y enviar"
                @on-complete="createAs"
              >
                <tab-content>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Estudiante</label>
                      <multiselect
                        v-model="cestudiante"
                        :options="optionse"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTage"
                      ></multiselect>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>

                    <div class="col-md-6">
                      <label for="name">Acudiente</label>
                      <multiselect
                        v-model="cparent"
                        :options="optionsp"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :multiple="false"
                        :taggable="true"
                        @tag="addTageP"
                      ></multiselect>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <!-- <a href="#" class="btn btn-warning float-right">Guardar</a> -->
                    <button class="btn btn-primary" v-on:click="back('inicio')">Volver</button>
                  </div>
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
import Multiselect from "vue-multiselect";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
Vue.component("multiselect", Multiselect);
export default {
  props:['back'],
  data() {
    return {
      optionse: [],
      optionsp:[],
      nameUnit: "",
      description: "",
      nameFile: "",
      nameUrl: "",
      newDocument: [],
      semanal: false,
      Newrol: "",
      errors: [],
      seccion: "",
      cestudiante: [],
      cparent:[],
      estudiantes: [],
      inputs: [
        {
          name: "",
        },
      ],
    };
  },
  mounted() {
    var urlUsers = "getStudents";
    axios.get(urlUsers).then((response) => {
      this.optionse = response.data;
    });

    var urlUsers = "/getParents";
    axios.get(urlUsers).then((response) => {
      this.optionsp = response.data;
    });
  },
  methods: {
    addTage(newTag) {
      const tag = {
        name: newTag,
        id: newTag,
      };
      this.optionse.push(tag);
    },
    addTageP(newTag) {
      console.log(newTag)
      const tagp = {
        name: newTag,
        id: newTag,
      };
      this.optionsp.push(tagp);
    },
    getMenu() {
      // window.location = "/salon_adm";
      this.back('inicio');
    },
    createAs() {
      this.cestudiante.forEach(student => {
        axios.put(`/assignParentToStudent/${student.id}`,{
          parent_id: this.cparent.id
        }).catch((error)=>{
          toastr.error("Intenta de nuevo mas tarde")
          console.log(error);
        })
      });
      toastr.success("Acudiente Relacionado");
      this.getMenu();
    }
  },
};
</script>
<style></style>

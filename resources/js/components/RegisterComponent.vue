<template>
<auto-responsive>
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
          <h3 class="card-header">Registro</h3>
          <form class="needs-validation" novalidate>
            <form-wizard title subtitle>
              <tab-content title="Datos personales" icon="fas fa-user">
                <div class="card-body">
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        v-model="newName"
                        class="form-control"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="last_name">Apellido</label>
                      <input
                        type="text"
                        name="last_name"
                        class="form-control"
                        v-model="newLastName"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Email</label>
                      <input
                        type="text"
                        name="email"
                        class="form-control"
                        v-model="newEmail"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Nombre de Usuario</label>
                      <input
                        type="text"
                        name="user_name"
                        class="form-control"
                        maxlength="20"
                        v-model="newUserName"
                        required
                      />
                      <div
                        class="invalid-feedback"
                      >Please fill out this field, the user name may not be greater than 20 characters.</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Fecha de Nacimiento</label>
                      <input
                        type="date"
                        name="birthday"
                        class="form-control"
                        v-model="newBirthday"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Edad</label>
                      <input
                        type="text"
                        name="age"
                        id="disabledTextInput"
                        class="form-control"
                        :placeholder="age"
                        v-model="newAge"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for>Categorias</label>
                      <select2
                        :options="categories"
                        v-model="Category"
                        @input="getSubcategories"
                        required
                      ></select2>
                    </div>
                    <div class="col">
                      <label for>Subcategorias</label>
                      <select2 :options="subcategories" v-model="newId_subcategories" required></select2>
                    </div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Información adicional" icon="fas fa-id-card">
                <div class="form-group row">
                  <div class="col">
                    <label for>Tipo de Usuario</label>
                    <select2 :options="TypeUsers" v-model="newType_user" required></select2>
                  </div>
                  <div class="col">
                    <label for="name">Teléfono</label>
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      v-model="newPhone"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Número de Identificación</label>
                    <input
                      type="text"
                      name="id_number"
                      class="form-control"
                      maxlength="15"
                      v-model="newId_number"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Foto</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      v-model="newPassword"
                      required
                    />
                  </div>
                  <div class="col">
                    <label for="name">Confirmar contraseña</label>
                    <input type="password" name="Cpassword" class="form-control" required />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for>Pais</label>
                    <select2 :options="myCountries" v-model="newCountry" required></select2>
                  </div>
                  <div class="col">
                    <label for="name">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      id="validationDefault03"
                      class="form-control"
                      v-model="newAddress"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" required />
                    <label
                      class="form-check-label"
                      for="gridCheck"
                    >Para todos los efectos legales, certifico que todas las respuestas e información anotadas por mí, en el presente formulario son veraces (C. S. T.) Art. 62 Núm. 1° Régimen Laboral Colombiano § 1057 (Legis).</label>
                  </div>
                </div>
                <div class="modal-footer">
                  <input type="submit" class="btn btn-primary" value="Guardar" />
                </div>
              </tab-content>
            </form-wizard>
          </form>
        </div>
      </div>
    </div>
  </div>
</auto-responsive>
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
import AutoResponsive from "autoresponsive-vue";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
Vue.use(AutoResponsive);

export default {
  data() {
    return {
      inputs: [
        {
          name: ""
        }
      ],
      categories: [],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      myOptions: ["e-learning", "b-learning"],
      edad: "",
      newAge: "",
      newBirthday: "",

      fillC: {
        id: "",
        name: "",
        description: "",
        id_user: "",
        id_category: "",
        id_subcategory: "",
        intensityAC: "",
        intensityTA: "",
        methodology: "",
        methodologyG: ""
      },
      newName1: "",
      newId_subcategories: "",
      newId_category: "",
      newId_course: "",
      newPresentationU: "",

      newChallenge: "",
      newProjecting: "",
      newTopic: "",
      newNameM: "",
      newNameV: "",
      newUnit: "",
      fillU: {
        id: "",
        unit: "",
        name: "",
        type: "",
        id_course: "",
        topic: "",
        nameM: "",
        nameV: ""
      },
      errors: []
    };
  },
  computed: {
    age() {
      const birthday = new Date(this.newBirthday);
      const dateNow = new Date();

      if (dateNow.getMonth() + 1 < birthday.getMonth() + 1) {
        this.edad = dateNow.getFullYear() - birthday.getFullYear() - 1;
      } else if (dateNow.getMonth() + 1 == birthday.getMonth() + 1) {
        if (dateNow.getDate() < birthday.getDate()) {
          console.log(dateNow.getDate() < birthday.getDate());
          this.edad = dateNow.getFullYear() - birthday.getFullYear() - 1;
        } else {
          this.edad = dateNow.getFullYear() - birthday.getFullYear();
        }
      } else {
        this.edad = dateNow.getFullYear() - birthday.getFullYear();
      }
      if (this.edad) return `${this.edad}`;
    }
  },
  mounted() {
    var urlsel = "GetCategories";
    axios.get(urlsel).then(response => {
      this.categories = response.data;
    });
    var urlsel = "GetTypeU";
    axios.get(urlsel).then(response => {
      this.TypeUsers = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    getCourses() {
      var urlr = "courses";
      axios.get(urlr).then(response => {
        this.course = response.data;
      });
    },
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },

    deleteClasses(clas) {
      var url = "classes/" + clas.id;
      axios.delete(url).then(response => {
        // eliminar
        this.getClasses(); //lista
        toastr.success("Successfully removed"); //mensaje
      });
    },
    createCourses() {
      var url = "courses";
      this.newId_user = 36;
      this.newType = "specialized";
      axios
        .post(url, {
          id_user: this.newId_user,
          description: this.newDescription,
          name: this.newName,
          id_category: this.Category,
          id_subcategory: this.newId_subcategories,
          intensityAC: this.newIntensityAC
        })
        .then(response => {
          this.getCourses();
          this.errors = [];

          toastr.success("Nuevo curso creado exitosamente");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    createCourseUnit() {
      var url = "course_unit";
      this.newId_course = 36;
      this.newType = "specialized";
      this.newUnit = "1";
      this.newState = "up";
      this.newPublish = "not publish";
      axios
        .post(url, {
          id_course: this.newId_course,
          name: this.newName1,
          presentation: this.newPresentationU,
          hability: this.newHability,
          challenge: this.newChallenge,
          projecting: this.newProjecting,
          topic: this.newTopic,
          unit: this.newUnit,
          ready: this.newReady,
          type: this.newType,
          state: this.newState,
          publish: this.publish
        })
        .then(response => {
          this.getCourses();
          this.newName1 = "";
          this.newPresentationU = "";
          this.newMaster = "";
          this.newVideo = "";
          this.newNameM = "";
          this.newNameV = "";
          this.newBibliography = "";
          this.newDoing = "";
          this.newChallenge = "";
          this.newProjecting = "";
          this.newTopic = "";
          this.newUnit = "";
          this.newType = "";
          this.newReady = "";
          this.errors = [];

          toastr.success("Nueva unidad guardada exitosamente");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    }
  }
};
</script>
<style>
</style>
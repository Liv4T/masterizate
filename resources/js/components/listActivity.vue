<template>
  <auto-responsive>
    <div class="background2">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header">Actividad</h3>
            <form class="needs-validation" novalidate>
              <div class="card-body">
                <div class="form-group row">
                  <div class="col-md-6">
                    <strong>Nombre del curso</strong>
                    <select2 :options="myOptions" v-model="metodology" required></select2>
                  </div>
                  <div class="col-md-6">
                    <strong>Unidad</strong>
                    <select2 :options="myOptions" v-model="metodology" required></select2>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <strong>Temas</strong>
                    <select2 :options="myOptions" v-model="metodology" required></select2>
                  </div>
                  <div class="col-md-6">
                    <strong>Tipo de Actividad</strong>
                    <select2 :options="myActivities" v-model="newActivity" required></select2>
                  </div>
                </div>
                <!-----------Foro---------------------------------------------------------------------------->
                <div
                  v-show="newActivity=='Foro'||newActivity=='Chat'||newActivity=='Cuestionario V-F'||newActivity=='Cuestionario 4 opciones'||newActivity=='Mapa conceptual'||newActivity=='Ensayo'||newActivity=='Estudio de Caso'||newActivity=='Ejercicios'"
                >
                  <div class="form-group row mx-auto">
                    <div class="col" align="center">
                      <strong>Duracion estimada en plataforma</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newPlataform"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col" align="center">
                      <strong>Duracion estimada trabajo autonomo</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newWork"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Contextualizacion del tema</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Contextualizacion del tema"
                        data-content="Redactar la contextualización del tema a la que se va a referir la actividad planteada"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="newFromW" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Actividad</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Actividad"
                        data-content="Describir de forma clara y sencilla la actividad que debe realizar de acuerdo con el tema y el propósito a evaluar. (referir cuales son los recursos con los que cuenta el estudiante, Ej. Videos, lecturas, vClass y otros)"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="newFromW" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Recursos necesarios para la actividad</strong>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Tipo de recursos</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="TR 1."
                        v-model="newTR1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="TR 2."
                        v-model="newTR2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="TR 3."
                        v-model="newTR3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Origen del recurso</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 1."
                        v-model="newOR1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 2."
                        v-model="newOR2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 3."
                        v-model="newOR3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Entregables</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Entregables"
                        data-content="Describir de forma clara y sencilla los entregables que debe enviar el estudiante al tutor de acuerdo con el tema y el propósito a evaluar."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="newFromW" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>

                  <div align="center">
                    <strong>Criterios de evaluacion / Evidencias asociadas (desempeño, producto y conocimiento)</strong>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCE1"
                            required
                          />
                        </td>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="EA 1."
                            v-model="newEA1"
                            required
                          ></textarea>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newCE2"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newCE3"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="modal-footer">
                    <a href="/activity" class="btn btn-primary float-right">Guardar</a>
                  </div>
                </div>
              </div>
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
  var checkbox1 = $("#gridCheck2");

  var hidden = $("#hidden_fields1");
  var hidden1 = $("#hidden_fields2");

  hidden.hide();
  hidden1.hide();

  checkbox.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.

      hidden.show();
    } else {
      hidden.hide();
      checkbox1.show();
    }
  });
  checkbox1.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      checkbox.disabled = false;
      hidden.show();
    } else {
      hidden.hide();
      checkbox.show();
    }
  });
});
import AutoResponsive from "autoresponsive-vue";

Vue.use(AutoResponsive);

export default {
  data() {
    return {
      inputs: [
        {
          name: ""
        }
      ],
      inputs1: [
        {
          name: ""
        }
      ],
      Uoptions: ["3", "4"],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      myOptions: ["On-Line", "Virtual"],
      myActivities: [
        "Foro",
        "Chat",
        "Cuestionario V-F",
        "Cuestionario 4 opciones",
        "Mapa conceptual",
        "Ensayo",
        "Estudio de Caso",
        "Ejercicios"
      ],
      newDescription: "",
      newName: "",
      newId_subcategories: "",
      newSubject: "",
      newObjetive: "",
      newFromW: "",
      newToW: "",
      newFromH: "",
      newToH: "",
      newQuiz: "",
      newIndicator: "",
      newPercent: "",
      newLocal: "",
      newRegional: "",
      newContry: "",
      newWorld: "",
      newId_user: "",
      newActivity: "",
      fillC: {
        id: "",
        name: "",
        description: "",
        id_user: "",
        id_category: "",
        id_subcategory: "",
        subject: "",
        objetive: "",
        fromW: "",
        toW: "",
        fromH: "",
        toH: "",
        quiz: "",
        indicator: "",
        percent: "",
        local: "",
        regional: "",
        world: ""
      },
      errors: []
    };
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
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ name: "" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    editClasses(clas) {
      this.fillC.id = clas.id;
      this.fillC.description = clas.description;
      this.fillC.name = clas.name;
      this.fillC.id_user = clas.id_user;
      this.fillC.id_category = clas.id_category;
      this.fillC.id_subcategory = clas.id_subcategory;
      this.fillC.subject = clas.subject;
      this.fillC.objetive = clas.objetive;
      this.fillC.fromW = clas.fromW;
      this.fillC.toW = clas.toW;
      this.fillC.fromH = clas.fromH;
      this.fillC.toH = clas.toH;
      this.fillC.quiz = clas.quiz;
      this.fillC.indicator = clas.indicator;
      this.fillC.percent = clas.percent;
      this.fillC.local = clas.local;
      this.fillC.regional = clas.regional;
      this.fillC.world = clas.world;
      $("#edit").modal("show");
    },
    updateClasses(id) {
      var url = "classes/" + id;
      axios
        .put(url, this.fillC)
        .then(response => {
          this.getClasses();
          (this.fillC = {
            id: "",
            name: "",
            description: "",
            id_user: "",
            id_category: "",
            id_subcategory: "",
            subject: "",
            objetive: "",
            fromW: "",
            toW: "",
            fromH: "",
            toH: "",
            quiz: "",
            indicator: "",
            percent: "",
            local: "",
            regional: "",
            world: ""
          }),
            (this.errors = []);
          $("#edit").modal("hide");
          toastr.success("Class successfully edited");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    deleteClasses(clas) {
      var url = "classes/" + clas.id;
      axios.delete(url).then(response => {
        // eliminar
        this.getClasses(); //lista
        toastr.success("Successfully removed"); //mensaje
      });
    },
    createClasses() {
      var url = "classes";
      this.newId_user = 36;
      axios
        .post(url, {
          id_user: this.newId_user,
          description: this.newDescription,
          name: this.newName,
          id_category: this.Category,
          id_subcategory: this.newId_subcategories,
          subject: this.newSubject,
          objetive: this.newObjetive,
          fromW: this.newFromW,
          toW: this.newToW,
          fromH: this.newFromH,
          toH: this.newToH,
          quiz: this.newQuiz,
          indicator: this.newIndicator,
          percent: this.newPercent,
          local: this.newLocal,
          regional: this.newRegional,
          world: this.newWorld
        })
        .then(response => {
          this.getClasses();
          this.newDescription = "";
          this.newId_user = "";
          this.newName = "";
          this.newId_subcategories = "";
          this.newSubject = "";
          this.newObjetive = "";
          this.newToW = "";
          this.newFromW = "";
          this.newFormH = "";
          this.newToH = "";
          this.newQuiz = "";
          this.newIndicator = "";
          this.newPercent = "";
          this.newLocal = "";
          this.newRegional = "";
          this.newContry = "";
          this.newWorld = "";
          this.errors = [];
          $("#create").modal("hide");
          toastr.success("New class created successfully");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    getSubcategories() {
      var urlse = "GetSubcategories/" + this.Category;
      axios.get(urlse).then(response => {
        this.subcategories = response.data;
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
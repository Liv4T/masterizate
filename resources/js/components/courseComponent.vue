<template>
  <auto-responsive>
    <div class="background1">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="card text-center">
            <h3 class="card-header">Curso Especializado</h3>
            <form class="needs-validation" novalidate>
              <div class="card-body">
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
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Nombre del curso</label>
                    <input type="text" name="name" class="form-control" v-model="newName" required>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="description">Número de créditos</label>
                    <input
                      type="text"
                      name="ihourt"
                      v-model="newDescription"
                      class="form-control"
                      required
                    >
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="description">Intensidad horaria tutoria virtual</label>
                    <input
                      type="text"
                      name="ihourt"
                      v-model="newDescription"
                      class="form-control"
                      required
                    >
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col-md-6">
                    <label for="subject">Intensidad horaria acompañamiento</label>
                    <input
                      type="text"
                      name="subject"
                      class="form-control"
                      v-model="newSubject"
                      required
                    >
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="subject">Intensidad horaria trabajo autónomo</label>
                    <input
                      type="text"
                      name="subject"
                      class="form-control"
                      v-model="newSubject"
                      required
                    >
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for>Metodología</label>
                    <select2 :options="myOptions" v-model="metodology" required></select2>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Bienvenida</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newFromW"
                    placeholder="Es un texto redactado de manera cordial, cálida, precisa y breve cumpliendo como objetivo dar la bienvenida al curso e invitar al estudiante a su recorrido y cumplimiento de los objetivos propuestos."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Intencion educativa</strong>
                  </div>
                  <textarea
                    name="intentioned"
                    class="form-control"
                    v-model="newFromW"
                    placeholder="Se refiere al espacio en el cual se da a conocer el proposito y objetivos del curso; debe ser escrita mediante un texto corto."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Competencias</strong>
                  </div>
                  <textarea
                    name="competences"
                    class="form-control"
                    v-model="newfg"
                    placeholder="Competencias conceptuales, procedimentales y actitudinales."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Logros</strong>
                  </div>
                  <textarea
                    name="gold"
                    class="form-control"
                    v-model="newF"
                    placeholder="Los logros se conciben como las metas a alcanzar al culminar el curso."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Mapa tematico</strong>
                  </div>
                  <textarea
                    name="map"
                    class="form-control"
                    v-model="newFr"
                    placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Metodologia general del curso</strong>
                  </div>
                  <textarea
                    name="metodology"
                    class="form-control"
                    v-model="newFro"
                    placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Objetos de Aprendizaje</strong>
                  </div>
                  <textarea
                    name="objects"
                    class="form-control"
                    v-model="newFrom"
                    placeholder="Contenido tematico por unidad."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="modal-footer">
                  <a href="/courseUnit" class="btn btn-primary float-right">Registrar Unidad</a>
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
      categories: [],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      myOptions: ["On-Line", "Virtual"],
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
.background1 {
  background: url(http://localhost/Life4teach_project/resources/js/assets/img/Fondo1.jpg);
  background-attachment: fixed;
}
</style>
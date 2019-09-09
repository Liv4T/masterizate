<template>
  <auto-responsive>
    <div class="back">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header">Cuestionario</h3>
            <form class="needs-validation" novalidate>
              <div class="card-body">
                <div id>
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
                      <strong>Tema</strong>
                      <select2 :options="myOptions" v-model="metodology" required></select2>
                    </div>
                    <div class="col-md-6">
                      <strong>Actividad</strong>
                      <select2 :options="myOptions" v-model="metodology" required></select2>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <strong>Tipo de cuestionario</strong>
                      <select2 :options="myOptions" v-model="newActivity" required></select2>
                    </div>
                    <div class="col-md-6">
                      <strong>Nombre del cuestionario</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div v-show="newActivity=='Cuestionario V-F'">
                    <div class="form-group row mx-auto" v-for="(input,k) in inputs" :key="k">
                      <div class="col-md-6">
                        <label for="name">Pregunta</label>
                        <span>
                          <a
                            href="#"
                            class="badge badge-danger"
                            @click.prevent="remove(k)"
                            v-show="k || ( !k && inputs.length > 1)"
                          >-</a>
                          <a
                            href="#"
                            class="badge badge-primary"
                            @click.prevent="add(k)"
                            v-show="k == inputs.length-1"
                          >+</a>
                        </span>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
                          placeholder="Pregunta"
                          required
                        />
                      </div>
                      <div class="col">
                        <label>Respuesta Correcta</label>
                        <br />
                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input
                            class="custom-control-input"
                            type="checkbox"
                            id="gridCheck1"
                            v-model="newLocal"
                            required
                          />
                          <label class="custom-control-label" for="gridCheck1">V</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input
                            class="custom-control-input"
                            type="checkbox"
                            id="gridCheck2"
                            v-model="newRegional"
                          />
                          <label class="custom-control-label" for="gridCheck2">F</label>
                        </div>
                      </div>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div
                    v-show="newActivity=='Cuestionario 4 opciones'"
                    v-for="(input,k) in inputs"
                    :key="k"
                  >
                    <div class="form-group row mx-auto">
                      <div class="col-md-6">
                        <label for="name">Pregunta</label>
                        <span>
                          <a
                            href="#"
                            class="badge badge-danger"
                            @click.prevent="remove(k)"
                            v-show="k || ( !k && inputs.length > 1)"
                          >-</a>
                          <a
                            href="#"
                            class="badge badge-primary"
                            @click.prevent="add(k)"
                            v-show="k == inputs.length-1"
                          >+</a>
                        </span>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label>Respuesta Correcta</label>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
                          required
                        />
                      </div>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="form-group row mx-auto">
                      <div class="col-md-6">
                        <label for>Opción 1</label>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for>Opción 2</label>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group row mx-auto">
                      <div class="col-md-6">
                        <label for>Opción 3</label>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="input.name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <a href="#" class="btn btn-primary float-right">Guardar</a>
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
      myOptions: ["Cuestionario V-F", "Cuestionario 4 opciones"],
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
</style>
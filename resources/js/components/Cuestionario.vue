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
      newRespuestas:[],
      newQuestion:[],
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
   
       createClasses() {
      var url = "categories";
            console.log(this.inputs.length);
            if (this.inputs.length >= 1) {
                console.log(this.inputs.length);
                for (let i = 0; i < this.inputs.length; i++) {
                    this.newQuestion.push(this.inputs[i].name);
                }
                console.log(this.newRespuestas);
            }
            axios
                .post(url, {
                    qustion: this.newQuestion,
                    answer: this.newRespuestas,
                })
                .then(response => {
                    this.getNamec();
                    this.newName_category = "";
                    this.newName_subcategory = [];
                    this.errors = [];
                    $("#createc").modal("hide");
                    toastr.success("New category created successfully");
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
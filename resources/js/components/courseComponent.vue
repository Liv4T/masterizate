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
          <form class="needs-validation" novalidate>
            <form-wizard
              title
              subtitle
              color="#ffc107"
              next-button-text="Siguiente"
              back-button-text="Atrás"
              finish-button-text="Guardar y enviar"
              @on-complete="createCourses"
            >
              <tab-content title="Anual">
                <div class="form-group mx-auto" v-for="(input1, t) in inputs1" :key="t">
                 <div class="row">
                    <div class="col col-lg-2 text-left"><!-- col -->
                      <strong>Logro</strong>
                      <div class="input-group mb-2">
                        <input type="number" class="form-control"   v-model="input1.porcentaje" v-on:change="annualContentUpdateEvent($event,t)" />
                        <div class="input-group-prepend">
                          <div class="input-group-text">%</div>
                        </div>
                      </div>
                      
                    </div><!-- end col -->
                     <div class="col col-lg-1 text-left padding-top"><!-- col -->
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove1(t)"
                          v-show="t ||(!t && inputs1.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add1(t)"
                          v-show="
                                                            t ==
                                                                inputs1.length -
                                                                    1
                                                        "
                        >+</a>
                      </span>
                     </div><!-- col -->
                 </div>
                <div class="row">
                    <div class="col col-lg-12">
                        <textarea name="welcome" class="form-control" v-model="input1.logro" rows="4" v-on:change="annualContentUpdateEvent($event,t)" required></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                 </div>
                </div>
              </tab-content>

              <tab-content title="Trimestral">
                <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                  <div class="col-md-6">
                    <label for="name">Indicador</label>
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
                        v-on:change="annualContentUpdateEvent($event,t)"
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
                      v-on:change="annualContentUpdateEvent($event,t)"
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
          <!--
          <form v-show="trimestre == true">
            <form-wizard
              title
              subtitle
              color="#ffc107"
              next-button-text="Siguiente"
              back-button-text="Atrás"
              finish-button-text="Volver"
              @on-complete="updateCourses"
            >
              <tab-content title="Anual">
                <div>
                  <div class="form-group mx-auto" v-for="(option,k) in fillC.achievements" :key="k">
                    <div align="center">
                      <strong>
                        Logro {{ k+1 }}
                        <input
                          type="number"
                          style="width:50px;"
                          v-model="option.percentage"
                          disabled
                        />%
                      </strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="option.achievement"
                      disabled
                    ></textarea>
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
                - <div class="modal-footer">
                  <a submit="createCourses" class="btn btn-warning float-right">Guardar</a>
                </div>-
              </tab-content>
            </form-wizard>
          </form>
          -->
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
      serialLocalStorage:'9f284918-f0f6-4369-a368-eaf6321b6807',
      inputs: [
        {
          name: "",
          contenido: "",
        },
      ],
      inputs1: [
        {
          logro: "",
          porcentaje: "0",
        },
      ],
      newTrimestre: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: "",
      newTrimestre: [],
      newLogro: [],
      trimestre: false,
      logro_1: "",
      logro_2: "",
      logro_3: "",
      logro_4: "",
      fillC: [],
      anual: [],
      newAnual: [],
      errors: [],
    };
  },
  mounted() {

    //load from localstorage
    this.serialLocalStorage=this.serialLocalStorage+"-"+this.id_area+"-"+this.id_classroom;
    if(localStorage.getItem(this.serialLocalStorage))
    {
      let savedInputModel=JSON.parse(decodeURIComponent(escape(window.atob(localStorage.getItem(this.serialLocalStorage)))));
 
      this.inputs=savedInputModel.inputs;
      this.inputs1=savedInputModel.inputs1;
    }

    //get data from database
    var urlsel =
      window.location.origin +
      "/coursePlanification/" +
      this.id_area +
      "/" +
      this.id_classroom;
    axios.get(urlsel).then((response) => {



      this.fillC = response.data;

      //set current data
      if(response.data.achievements.length>0 && response.data.quaterly.length>0)
      {
        this.inputs1=[];
        response.data.achievements.forEach((e)=>{
          this.inputs1.push({id_plannification:e.id_planification,id_achievement:e.id, logro: e.achievement, porcentaje: e.percentage });
        });
        this.inputs=[];
        response.data.quaterly.forEach((e)=>{
          this.inputs.push({ id_quaterly:e.id,name: e.unit_name, contenido: e.content });
        });
      }
     



      if (this.fillC.quaterly.length > 0) {
        this.trimestre = true;
      } else {
        this.trimestre = false;
      }
    });

    
  },
  methods: {
    annualContentUpdateEvent(e,i){
      //serialize data on localstorage
     localStorage.setItem(this.serialLocalStorage, window.btoa(unescape(encodeURIComponent(JSON.stringify({inputs1:this.inputs1,inputs:this.inputs})))));
      
    },
    getMenu() {
      window.location = "/actividad_g";
    },
    add(index) {
      this.inputs.push({ name: "", contenido: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ logro: "", porcentaje: "0" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    createCourses() {
      var url = window.location.origin + "/Courses";

      if(this.inputs.length<1 ||  this.inputs1.length<1)
        return;

      if (this.inputs.length >= 1) {
        for (let i = 0; i < this.inputs.length; i++) {
          this.newTrimestre.push(this.inputs[i]);
        }
      }
      if (this.inputs1.length >= 1) {
        for (let i = 0; i < this.inputs1.length; i++) {
          this.newLogro.push(this.inputs1[i]);
        }
      }



      axios
        .post(url, {
          //Cursos generales
          id_area: this.id_area,
          id_classroom: this.id_classroom,
          logros: this.newLogro,
          trimestres: this.newTrimestre,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nuevo plan general creado exitosamente");
          this.getMenu();
        })
        .catch((error) => {
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
    },
  },
};
</script>
<style></style>

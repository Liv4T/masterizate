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
          <h3 class="card-header fondo">Planificación general PIAR</h3>
          <span class="classroom-label">{{fillC.classroom_name}}</span>
          <span v-show="!isSynchronized">(Hay cambios que no han sido guardados)</span>
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
              <span
                class="spinner-border spinner-border"
                role="status"
                aria-hidden="true"
                v-if="isLoading"
              ></span>
              <tab-content title="Anual">
                <div class="form-group mx-auto" v-for="(input1, t) in inputs1" :key="t">
                  <div class="classroom-planning-section">
                    <strong>Logro:</strong>

                    <input
                      v-on:change="annualContentUpdateEvent($event,t,'inputs1')"
                      class="form-control form-control-sm"
                      type="number"
                      style="width:50px;"
                      v-model="input1.porcentaje"
                    />%
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove1(t)"
                        v-show="(t>0 && inputs1_saved.length<=t)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add1(t)"
                        v-show="t == inputs1.length -1"
                      >+</a>
                    </span>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="input1.logro"
                    v-on:change="annualContentUpdateEvent($event,t,'inputs1','logro')"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
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
                        v-show="(t>0 && inputs_saved.length<=t)"
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
                        v-model="input.name"
                        v-on:change="annualContentUpdateEvent($event,t,'inputs','name')"
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
                      v-on:change="annualContentUpdateEvent($event,t,'inputs','contenido')"
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
       inputs1_saved:[],
      inputs_saved:[],
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
      isSynchronized:true,
      isLoading:false
    };
  },
  mounted() {

     
  },
  methods: {
    annualContentUpdateEvent(e,i,type,property=null){

      if(type=='inputs')
      {
        this.inputs[i][property]=this.inputs[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      }
      else if (type=='inputs1')
      {
        this.inputs1[i][property]=this.inputs1[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      }
    
       //console.log(l.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1"));
      //serialize data on localstorage
     localStorage.setItem(this.serialLocalStorage, window.btoa(unescape(encodeURIComponent(JSON.stringify({inputs1:this.inputs1,inputs:this.inputs})))));

     this.isSynchronized=false;
      
    },
    getMenu() {
       window.location = "/actividad_g";
       this.isLoading=false;
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
    isLoadingEvent(){
      return this.isLoading;
    },
    createCourses() {
      this.isLoading=true;
      var url = window.location.origin + "/Courses";

       if(this.inputs.length<1 ||  this.inputs1.length<1)
        return;

      this.newTrimestre = [];
      this.newLogro = [];
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

      // axios
      //   .post(url, {
      //     //Cursos generales
      //     id_area: this.id_area,
      //     id_classroom: this.id_classroom,
      //     logros: this.newLogro,
      //     trimestres: this.newTrimestre,
      //   })
      //   .then((response) => {
      //     this.errors = [];
         

      //     toastr.success("Nuevo plan general creado exitosamente");
      //     this.getMenu();
         
      //   })
      //   .catch((error) => {
      //     this.errors = error.response.data;
      //     this.isLoading=false;
      //   });
    },
    updateCourses() {
      // window.location = "/actividad_g";
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

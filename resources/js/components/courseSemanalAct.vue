<template>
  <div>
    <div>
      <div>
        <div class="col-md-12 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header fondo">Actualizar ciclo</h3>
            <form class="needs-validation" novalidate v-show="semanal==true">
              <form-wizard
                title
                subtitle
                color="#ffc107"
                next-button-text="Siguiente"
                back-button-text="Atrás"
                finish-button-text="Actualizar y enviar"
                @on-complete="updateSemanal"
              >
                <tab-content title="Ciclo">
                  <div class="form-group row mx-auto" v-for="(act, t) in fillS" :key="t">
                    <div class="col-md-12">
                      <select class="form-control" v-model="act.id_trimestre">
                        <option :value="options.id" v-for="(options ,key) in trimestres" :key="key">
                          {{
                          options.nombre
                          }}
                        </option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Pregunta conductora o nombre {{t+1}}</label>
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
                    <div class="col-md-6" v-for="(input, k) in inputClass" :key="k">
                      <label for="name">Desarrollo de la clase</label>
                      <a href="#" class="badge badge-danger"  @click.prevent="remove(t)" v-show="t || (!t && inputClass.length > 1)">-</a>
                      <a href="#" class="badge badge-primary" @click.prevent="add(t)"    v-show="t == inputs.length - 1">+</a>                   
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="input.class_developmentC"
                        placeholder="Es la explicacion o sintesis de la clase."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Observación</label>
                      <textarea name="competences" 
                      class="form-control" v-model="act.observation"></textarea>
                    </div>
                    <div class="col-md-6">
                      <label for="ajustes">Ajustes PIAR</label>
                      <textarea type="text" name="ajustes" class="form-control" v-model="act.ajuste_piar"> </textarea>
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
  props: ["id_area", "id_classroom","cleanIdModule", "id_cycle"],
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
      inputClass:[],
      trimestres:[],
      semanal: false,
      errors: [],
      cycle_id: ""
    };
  },
  mounted() {
    if(this.id_cycle){
      this.cycle_id = this.id_cycle
    }else{
      let params = window.location.pathname;
      let ids = params.split('/');            
      let cycle_id = ids[4];
      this.cycle_id = cycle_id;
    }    

    this.getData();
    this.getTrimestre();
  },
  methods: {
    getData(){
      if(this.cycle_id !== ''){          
        var urlsel=window.location.origin + "/editOneCycle/"+this.cycle_id;
        axios.get(urlsel).then((response) => {
          this.fillS = response.data;
          function IsJsonString() {
            try {
              var json = response.data[0] ? JSON.parse(response.data[0].class) : {};
              return true;
            } catch (e) {
              return false;
            }
          }
          if(IsJsonString()){
            this.inputClass=response.data[0] ? JSON.parse(response.data[0].class) : {}
          } else{
            let json=[{
              class_developmentC: response.data[0] ? JSON.parse(response.data[0].class) : ""
            }];
            this.inputClass=json;
          }
          //this.inputClass=JSON.parse(response.data[0].class);
          console.log(this.inputClass);
          if (this.fillS.length > 0) {
            this.semanal = true;
          }
      });
      }else{
        var urlsel = window.location.origin + "/editOneWeek/" + this.id_area + "/" + this.id_classroom;
        axios.get(urlsel).then((response) => {
          this.fillS = response.data;
          if (this.fillS.length > 0) {
            this.semanal = true;
          }
      });
      }
    },
    getTrimestre(){
      var url="/getTrimestres";
      axios.get(url).then((response) => {
          this.trimestres = response.data;
      });
    },
    add(index) {
      this.inputClass.push({
        class_developmentC: ""
      });
    },
    remove(index) {
      this.inputClass.splice(index, 1);
    },
    createSemanal() {
      var url = "courseWeekly";
      if (this.inputs.length >= 1) {
        for (let i = 0; i < this.inputs.length; i++) {
          this.newSemanal.push(this.inputs[i]);
        }
      }

      axios
        .post(url, {
          //Cursos generales
          id_materia: this.id_area,
          semana: this.newSemanal,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva semana creada exitosamente");
          this.cleanIdModule();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    updateSemanal() {
      if(this.cycle_id!=''){
        var url = window.location.origin + "/updateCourseWeekly";
        if (this.fillS.length >= 1) {
          for (let i = 0; i < this.fillS.length; i++) {
            this.fillS[i].class=JSON.stringify(this.inputClass);
            this.newSemanal.push(this.fillS[i]);
          }
        }
        axios
          .put(url, {
            //Cursos generales
            id_materia: this.id_area,
            semana: this.newSemanal,
          })
          .then((response) => {
            this.errors = [];

            toastr.success("Actualizado plan semanal exitosamente");
            this.cleanIdModule();
          })
          .catch((error) => {
            this.errors = error.response.data;
          });
      }else{
        var url = window.location.origin + "/updateCourseWeekly";
        if (this.fillS.length >= 1) {
          for (let i = 0; i < this.fillS.length; i++) {
            this.newSemanal.push(this.fillS[i]);
          }
        }
        axios
          .put(url, {
            //Cursos generales
            id_materia: this.id_area,
            semana: this.newSemanal,
          })
          .then((response) => {
            this.errors = [];

            toastr.success("Actualizado plan semanal exitosamente");
            this.cleanIdModule();
          })
          .catch((error) => {
            this.errors = error.response.data;
          });
      }
    },
  },
};
</script>
<style>
</style>

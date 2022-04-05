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
  <div>
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="card-header text-center fondo row" data-v-step="0">
            <div class="card-center">
                <label class="card-text">Evaluación</label>
            </div>
            <div style="margin-left:auto">
                <a class="btn" @click="toggle">
                    <i class="fa fa-question-circle" style="font-size:35px; color:orange;"></i>
                </a>
            </div>
        </div>
        <tour-configuration :step="steps" :condition="condition"></tour-configuration>
        <Drawer @close="toggle" align="right" :maskClosable="true" :zIndex="1003" :closeable="true">
            <div v-if="open">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Evaluación</h1>
                        <p>Las evaluaciones se crean para agregarlas a las actividades cuando creamos las clases, es necesario para evaluar las actividades.</p>
                        <p>Para agregar actividades debe hacer click sobre el nombre de la planificación general a la cual quiere crear evaluaciones y posteriormente hacer click en el botón agregar.</p>
                        <img src="../assets/img/evaluation.png" alt="evaluation" width="350px" height="350px" style="margin-bottom:10px">
                        <p>Luego de hacer click en el botón agregar se despliega una ventana que solicita el tipo de actividad y el porcentaje total de la nota.</p>
                        <img src="../assets/img/modal_evaluation.png" alt="modal_evaluation" width="350px" height="350px" style="margin-bottom:10px">
                        <p>Al completar los campos solo debe hacer click en el botón de guardar, la evaluación se guardara y quedará visible en el listado de evaluaciones en la planificación a la cual le asignó la evaluación.</p>
                        <img src="../assets/img/evaluation_list.png" alt="evaluation_list" width="350px" height="350px" style="margin-bottom:10px">
                        <p>La evaluación se usa para crear actividades, al momento de crear la actividad se debe seleccionar la planificación general y alguna de las evaluaciones que se han creado para esa planificación.</p>
                        <img src="../assets/img/activities_evaluation.png" alt="activities_evaluation" width="350px" height="350px" style="margin-bottom:10px">
                    </div>
                </div>
            </div>
        </Drawer>
          <form class="needs-validation" novalidate v-show="trimestre == false">
            <form-wizard title subtitle color="#ffc107" next-button-text="Siguiente" back-button-text="Atrás" finish-button-text="Guardar" @on-complete="updateCourses">
              <tab-content title="Porcentaje de notas">
                <div class="card-body">
                  <div class="accordion" id="accordionExample">
                    <div class="card" v-for="(option,t) in fillC.quaterly" :key="t">
                      <div class="card-header text-center">
                        <h2 class="mb-0" data-v-step="1">
                          <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse'+t" aria-expanded="false" @click.prevent="indicador(option.id)" aria-controls="collapse">
                            <label style="text-overflow: ellipsis;  width: 450px; white-space: nowrap; overflow: hidden;">{{ option.logro }}</label>
                          </button>
                        </h2>
                      </div>
                      <div :id="'collapse'+t" class="collapse hide" aria-labelledby="heading" data-parent="#accordionExample">
                        <div class="card-body">
                          <table class="table table-responsive-xl table-hover table-striped center">
                            <tbody>
                              <tr>
                                <td>Actividad</td>
                                <td>Porcentaje</td>
                                <td>Editar</td>
                                <td>Eliminar</td>
                              </tr>
                              <tr v-for="(opt,i) in fillI" :key="i">
                                <td>{{ opt.type_activity }}</td>
                                <td>{{ opt.activity_rate }}</td>
                                <td><a class="fas fa-edit" v-on:click.prevent="showEdit(opt.id,opt.type_activity,opt.activity_rate)"></a></td>
                                <td><a class="fas fa-trash-alt" v-on:click.prevent="removePercentage(i,opt.id)"></a></td>
                              </tr>
                            </tbody>
                          </table>
                          <div align="right">
                            <a class="btn btn-warning" v-on:click.prevent="editNames(option.id,option.id_achievement, option.id_annual)" data-v-step="2">Agregar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </tab-content>
            </form-wizard>
          </form>
      </div>
      <div class="modal fade" id="createZ">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Porcentaje
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Tipo de actividad</label>
                      <div>
                        <input type="text" name="objetive1" class="form-control" v-model="tipo_act" style="background: gainsboro;" required/>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name">Porcentaje total</label>
                      <div>
                        <input type="number" name="objetive1" class="form-control" v-model="porcentaje" style="background: gainsboro;" required/>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-warning" v-on:click.prevent="createIndicator()" value="Guardar"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="deleteZ">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Eliminar Indicador
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <form class="needs-validation" v-on:submit.prevent novalidate>
                  <label>¿Desea eliminar el indicador?</label>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-warning" v-on:click.prevent="deleteIndicator()" value="Confirmar"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
import Drawer from "vue-simple-drawer";
Vue.use(VueFormWizard);
export default {
  props: ["idArea"],
  data() {
    return {
      inputs: [
        {
          name: "",
          contenido: "",
        },
      ],
      inputs1: [
        {
          name: "",
          porcentaje: "",
        },
      ],
      newTrimestre: [],
      tipo_act: "",
      porcentaje: "",

      newTrimestre: [],
      newLogro: [],
      trimestre: false,
      logro_1: "",
      logro_2: "",
      logro_3: "",
      logro_4: "",
      fillC: [],
      fillI: [],
      anual: [],
      newAnual: [],
      errors: [],
      id_logro: "",
      id_indicator: 0,
      index: 0,
      areaId: "",
      id_quarterly_plan: "",
      id_achievement: "",
      open: false,
      steps: [
            {
                target: '[data-v-step="0"]',
                header: {
                    title: 'Evaluación',
                },
                content: `Desde aqui podras <strong>crear las evaluaciones que luego podras vincular a cada actividad, asi podras evaluar las actividades</strong>, solo debes hacer click sobre el nombre de la planificación (la evaluación se crea a una planificación general)`,
                params: {
                    placement: 'bottom', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                    enableScrolling: false
                }
            },
            {
                target: '[data-v-step="1"]',
                content: `Haciendo click en el nombre de la planificación general, se abrirá un listado con las evaluaciones creadas, en caso de no tener ninguna solo aparecerá el botón para crear una nueva.`,
                params: {
                    placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                    enableScrolling: false
                }
            },
            {
                target: '[data-v-step="2"]',
                content: `El botón "Agregar" permite crear una nueva evaluación.`,
                params: {
                    placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                    enableScrolling: false
                }
            },
        ],
        condition:"evaluation",
    };
  },
  components: {
    Drawer
  },
  watch:{
    idArea(newVal, oldVal){
      if(newVal !== oldVal){
        this.getIdUrl();
        this.getData();
      }
    }
  },
  mounted() {
    this.getIdUrl();
    this.getData();
  },
  methods: {
    toggle() {
        this.open = !this.open;
    },
    getIdUrl(){
      if(this.idArea === undefined){
        let params = window.location.pathname;
        let ids = params.split('/');
        let idArea = ids[2]+"/"+ids[3];
        this.areaId = idArea;

        console.log('Url actual',idArea);
      }else{
        this.areaId = this.idArea
      }
    },
    getData(){
      var urlsel = window.location.origin + "/coursePlanification/" + this.areaId;
      axios.get(urlsel).then((response) => {
        this.fillC = response.data;
        console.log(this.fillC);
      });
    },
    getMenu() {
      window.location = "/actividad_g";
    },
    indicador(id) {
      var urli = window.location.origin + "/getIndicator/" + id;
      axios.get(urli).then((response) => {
        this.fillI = response.data;
        console.log(this.fillI);
      });
    },

    add(index) {
      this.inputs.push({ name: "", contenido: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ name: "", porcentaje: "" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },

    createIndicator() {
      var url = window.location.origin + "/saveIndicator";

      axios
        .post(url, {
          //Cursos generales
          id_indicator:this.id_indicator,
          type_activity: this.tipo_act,
          id_annual: this.id_annual,
          id_quarterly_plan: this.id_quarterly_plan,
          id_achievement: this.id_achievement,
          activity_rate: this.porcentaje,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Nueva actividad creada exitosamente");
          this.indicador(this.id_quarterly_plan);

          $('#createZ').modal('hide');
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    updateCourses() {
      window.location = "/actividad_g";
    },
    editNames(id, id_achievement, annual) {

      this.id_indicator = 0;
      this.id_quarterly_plan = id;
      this.id_achievement = id_achievement;
      this.id_annual = annual;
      this.tipo_act = "";
      this.porcentaje = "";

      $("#createZ").modal("show");
    },
    showEdit(id_porcentaje, tipo_act, porcentaje) {

      this.id_indicator = id_porcentaje;
      this.tipo_act = tipo_act;
      this.porcentaje = porcentaje;
      $("#createZ").modal("show");
    },
    removePercentage(index,id_indicator) {
      this.id_indicator = id_indicator;
      this.index=index;
      $("#deleteZ").modal("show");
    },
    deleteIndicator() {
      var url = window.location.origin + "/deleteIndicator";
      $("#deleteZ").modal("hide");

      axios
        .post(url, {
          //Eliminar indicador
          id_indicator:this.id_indicator,
        })
        .then((response) => {
          this.errors = [];

          toastr.success("Actividad eliminada exitosamente");
          this.fillI.splice(this.index,1);
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
};


</script>
<style></style>

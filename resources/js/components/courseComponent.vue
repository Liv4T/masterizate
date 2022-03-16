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
            <div class="container-fluid">
                <div class="col-md-12 mx-auto">
                    <div class="card-header text-center fondo row">
                        <div class="card-center">
                            <label class="card-text">Planificación General</label>
                        </div>
                        <div style="margin-left:auto">
                            <a class="btn" @click="toggle">
                                <i class="fa fa-question-circle" style="font-size:35px; color:orange;"></i>
                            </a>
                        </div>
                    </div>
                    <Drawer @close="toggle" align="right" :maskClosable="true" :zIndex="1003" :closeable="true">
                        <div v-if="open">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1>Planificación general</h1>
                                    <p>La planificación general determina los temas principales de la materia y el porcentaje de la nota que tiene cada planificación.</p>
                                    <img src="../assets/img/study_plan.png" alt="study_plan" width="350px" height="350px" style="margin-bottom:10px">
                                    <p>Se pueden crear varias planificaciones al mismo tiempo haciendo click en el botón amarillo con el +, al hacer click se crea un nuevo campo de objetivo y nombre de la planificación.</p>
                                    <img src="../assets/img/more_study_plans.png" alt="more_study_plans" width="350px" height="350px" style="margin-bottom:10px">
                                </div>
                            </div>
                        </div>
                    </Drawer>
                        <span v-show="!isSynchronized">(Hay cambios que no han sido guardados)</span>
                        <!-- Se agrega un display:none para ocultar los elementos relacionados con los estudiantes PIAR ya que se desarrollo la funcionalidad pero luego se pidio eliminar pero solo se oculto y en caso de necesitarlo de nuevo en el futuro ya tener la funcionalidad lista -->
                        <!-- Los estudiantes PIAR se usa para crear una planificacion o una clase para estudiantes con dificultades de aprendizaje -->
                        <div class="row" style="display:none;">
                            <div class="col-12 mt-2">
                                <label><span class="required">*</span>Planificación Para :</label><br>

                                    <input type="checkbox" id="students" name="students" v-model="activityForAllStudents">
                                    <label for="piar" class="mr-3"> Todos los Estudiantes</label>

                                    <input v-show="piarStudents.length > 0" type="checkbox" id="piar" name="students" v-model="activityForPIARStudents">
                                    <label v-if="piarStudents.length == 0" for="piar" class="mr-3"> No se encuentran Estudiantes PIAR</label>
                                    <label v-else for="piar" class="mr-3"> Estudiantes PIAR</label>

                                    <input type="checkbox" id="specific" name="students" v-model="activityForSelectStudents">
                                    <label for="specific"> Estudiantes en Especifico</label>

                                <div v-if="(activityForPIARStudents == true && piarStudents.length > 0) || activityForSelectStudents == true">
                                    <label>Selecciona Los estudiantes</label>
                                    <multiselect v-model="saveStudent" :options="selectedStudentsData" :multiple="true"
                                        :close-on-select="false" :clear-on-select="false"
                                        :preserve-search="true" placeholder="Seleccione una o varias"
                                        label="text" track-by="id" :preselect-first="false">
                                            <template slot="selection" slot-scope="{ values, isOpen }">
                                                <span
                                                    class="multiselect__single"
                                                    v-if="values.length &amp;&amp; !isOpen">{{ values.length }}
                                                        opciones
                                                        selecionadas
                                                </span>
                                            </template>
                                    </multiselect>
                                </div>
                            </div>
                        </div>
                        <form class="needs-validation" novalidate>
                            <!-- <form-wizard title subtitle color="#ffc107" finish-button-text="Guardar y enviar" @on-complete="createCourses"> -->
                                <span class="spinner-border spinner-border" role="status" aria-hidden="true"  v-if="isLoading"></span>
                                    <div class="form-group mx-auto" v-for="(input1, t) in inputs1" :key="t">
                                        <div class="classroom-planning-section">
                                            <strong>Objetivo: </strong>
                                            <input class="form-control form-control-sm" type="number" style="width:50px;" v-model="input1.porcentaje"/>%
                                            <span>
                                                <a href="#" class="badge badge-danger" @click.prevent="remove1(t)" v-show="(t>0 && inputs1_saved.length<=t)">-</a>
                                                <a href="#" class="badge badge-primary" @click.prevent="add1(t)" v-show="t == inputs1.length -1">+</a>
                                                <a href="#" class="btn btn-primary"  @click.prevent="modalDelete(input1.id_achievement, input1.logro)" v-show="(t > 0)">Eliminar</a>
                                            </span>
                                        </div>
                                        <div class="classroom-planning-section">
                                            <textarea name="welcome" class="form-control" v-model="input1.logro" v-on:change="annualContentUpdateEvent($event,t,'inputs1','logro')" required></textarea>
                                        </div>
                                        <div class="classroom-planning-section" style="justify-content: right !important;">
                                            <button type="button" class="btn btn-primary" style="float: right;margin-top: 13px;" v-on:click="createCourses">Guardar</button>
                                        </div>

                                        <div class="invalid-feedback">Please fill out this field</div>
                                    </div>

                                    <a v-show="(activityForPIARStudents == true && piarStudents.length > 0)" v-on:click="showPIARPlan" class="btn btn-primary">Crear Planificación General Estudiantes PIAR</a>

                                    <div v-show="(activityForPIARStudents == true && piarStudents.length > 0)">
                                        <div v-for="(inputsP, key) in inputsPIAR" :key="'-'+key">
                                            <div class="classroom-planning-section">
                                                <strong>Objetivo:</strong>
                                                <input v-on:change="annualContentUpdateEvent($event,key,'inputsPIAR')" class="form-control form-control-sm" type="number" style="width:50px;" v-model="inputsP.porcentajePIAR"/>%
                                                <span>
                                                    <a href="#" class="badge badge-danger" @click.prevent="removePIAR(key)" v-show="(key >0 && inputsPIAR_saved.length<=key)">-</a>
                                                    <a href="#" class="badge badge-primary" @click.prevent="addPIAR(key)" v-show="key == inputsPIAR.length -1">+</a>
                                                </span>
                                            </div>
                                            <textarea name="welcome" class="form-control" v-model="inputsP.logroPIAR" v-on:change="annualContentUpdateEvent($event,key,'inputsPIAR','logroPIAR')" required></textarea>

                                        </div>
                                    </div>

                            <!-- </form-wizard>             -->
                        </form>
                    </div>

            </div>
        </div>
        <!-- Modal para eliminar objetivo -->
        <div class="modal fade" id="deleteOb">
            <div class="modal-sm modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row text-center">
                            <label for="name">Esta seguro que desea eliminar {{ delName }} ?</label>
                        </div>
                        <div class="modal-footer">
                            <a class="btn btn-danger float-right" href v-on:click.prevent="deleteObjetive()">Si</a>
                            <a class="btn btn-warning" href v-on:click.prevent="deleteHide()">Cancelar</a>
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
            serialLocalStorage:'9f284918-f0f6-4369-a368-eaf6321b6807',
            inputs1: [
                {
                    logro: "",
                    porcentaje: "0",
                },
            ],

            inputsPIAR: [
                {
                    logroPIAR: "",
                    porcentajePIAR: "0",
                },
            ],

            inputsPIAR1: [
                {
                    namePIAR: "",
                    contenidoPIAR: "",
                },
            ],
            delName: "",
            delId: "",
            inputs1_saved:[],
            inputsPIAR_saved:[],
            inputsP1_saved:[],
            inputs_saved:[],
            newLogro1: "",
            newLogro2: "",
            newLogro3: "",
            newLogro4: "",
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
            isLoading:false,
            showPiarPlan: false,
            showPIARPlanTrimestral: false,
            activityForAllStudents:true,
            activityForPIARStudents: false,
            activityForSelectStudents: false,
            studentsOptions:[],
            saveStudent:[],
            piarStudents:[],
            AreaId:"",
            areaId:"",
            classroomId:"",
            open: false,
        };
    },
    components: {
        Drawer
    },
    watch: {
        activityForAllStudents: function(newVal){
            if(newVal == true){
                this.activityForPIARStudents = false;
                this.activityForSelectStudents = false;
                this.activityForAllStudents = true;
            }
        },

        activityForPIARStudents: function(newVal){
            if(newVal == true){
                this.activityForAllStudents = false;
                this.activityForSelectStudents = false;
                this.activityForPIARStudents = true;
                this.selectedStudentsData = this.piarStudents;
            }
        },

        activityForSelectStudents: function(newVal){
            if(newVal == true){
                this.activityForPIARStudents = false;
                this.activityForAllStudents = false;
                this.activityForSelectStudents = true;
                this.selectedStudentsData = this.studentsOptions;
            }
        },

        idArea(newVal, oldVal){
            if(newVal !== oldVal){
                this.getData();
            }
        },
    },
    mounted() {
        if(this.idArea){
            this.AreaId = this.idArea
        }else{

            let params = window.location.pathname;
            let ids = params.split('/');

            let idArea = ids[2]+"/"+ids[3];
            this.AreaId = idArea;
            this.areaId = ids[2];
            this.classroomId = ids[3];
        }
        this.getData();
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        getData(){
            axios.get(`/PIARStudentsByArea/${this.AreaId}`).then((response)=>{
                this.piarStudents = Object.values(response.data);
            }).catch((error)=>{
                console.log(error)
            })

            axios.get(`/StudentsByArea/${this.AreaId}`).then((response)=>{
                let data = response.data;
                data.forEach((e)=>{
                    this.studentsOptions.push({
                        id: e.id_student,
                        text: e.name
                    })
                })
            })

            axios.get('/getPlanificationPiar').then((response)=>{
                let data = response.data;
                if(data.length > 0){
                    this.inputsPIAR1.splice(0);
                    this.inputsPIAR.splice(0);
                    data.forEach((el)=>{
                        let logros = JSON.parse(el.logros)
                        let trimestres = JSON.parse(el.trimestres)
                        this.saveStudent = JSON.parse(el.students)

                        logros.forEach((lg)=>{
                            this.inputsPIAR1.push({
                                contenidoPIAR: lg.contenidoPIAR,
                                namePIAR: lg.namePIAR
                            })
                        })

                        trimestres.forEach((lg)=>{
                            this.inputsPIAR.push({
                                logroPIAR: lg.logroPIAR,
                                porcentajePIAR: lg.porcentajePIAR
                            })
                        })
                    });
                    if(this.piarStudents.length > 0){
                        this.showPiarPlan = true,
                        this.showPIARPlanTrimestral = true,
                        this.activityForAllStudents = true;
                    }
                }
            })

            //load from localstorage
            this.serialLocalStorage=this.serialLocalStorage+"-"+this.AreaId;

            var urlsel = window.location.origin + "/coursePlanification/" + this.AreaId;
            axios.get(urlsel).then((response) => {
                this.fillC = response.data;
                //set current data
                if(response.data.achievements.length>0){
                    this.inputs1=[];
                    response.data.achievements.forEach((e)=>{
                        this.inputs1.push({id_plannification:e.id_planification,id_achievement:e.id, logro: e.achievement, porcentaje: e.percentage });
                    });
                    this.inputs1_saved= JSON.parse(JSON.stringify(this.inputs1));
                }
                else{

                    if(localStorage.getItem(this.serialLocalStorage)){
                        let savedInputModel=JSON.parse(decodeURIComponent(escape(window.atob(localStorage.getItem(this.serialLocalStorage)))));

                        if(JSON.stringify(savedInputModel.inputs1)!=JSON.stringify(this.inputs1)){
                            this.inputs1=savedInputModel.inputs1;
                            this.isSynchronized=false;
                        }
                    }
                }
                if (this.fillC.quaterly.length > 0) {
                    this.trimestre = true;
                } else {
                    this.trimestre = false;
                }
            });
        },
        modalDelete(id, name){
            this.delName = name;
            this.delId = id;
            $("#deleteOb").modal("show");
        },
        deleteHide() {
            $("#deleteOb").modal("hide");
        },
        deleteObjetive(){
            var url="deleteObjetivePlanification/"+this.delId;
            axios.put(url).then((response) => {
                this.errors = [];
                toastr.success("Objetivo eliminado con exito");
                this.isLoading=false;
                this.getData();
                $("#deleteOb").modal("hide");

            }).catch((error) => {
                this.errors = error.response.data;
                this.isLoading=false;
            });
        },
        annualContentUpdateEvent(e,i,type,property=null){
            if (type=='inputs1'){
                this.inputs1[i][property]=this.inputs1[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
            }
            else if (type=='inputsPIAR'){
                this.inputsPIAR[i][property] = this.inputsPIAR[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
            }
            else if (type=='inputsPIAR1'){
                this.inputsPIAR1[i][property] = this.inputsPIAR1[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
            }
            //console.log(l.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1"));
            //serialize data on localstorage
            localStorage.setItem(this.serialLocalStorage, window.btoa(unescape(encodeURIComponent(JSON.stringify({inputs1:this.inputs1,inputs:this.inputs, inputsPIAR: this.inputsPIAR})))));

            this.isSynchronized=false;
        },
        showPIARPlan(){
            this.showPiarPlan = !this.showPiarPlan
        },
        showPIARPlanT(){
            this.showPIARPlanTrimestral = !this.showPIARPlanTrimestral
        },
        add1(index) {
            this.inputs1.push({ logro: "", porcentaje: "0" });
        },
        remove1(index) {
            this.inputs1.splice(index, 1);
        },

        addPIAR(index) {
            this.inputsPIAR.push({ logroPIAR: "", porcentajePIAR: "0" });
        },

        removePIAR(index) {
            this.inputsPIAR.splice(index, 1);
        },

        addP1(index) {
            this.inputsPIAR1.push({ namePIAR: "", contenidoPIAR: "" });
        },
        removeP1(index) {
            this.inputsPIAR1.splice(index, 1);
        },

        isLoadingEvent(){
            return this.isLoading;
        },
        createCourses() {

                this.isLoading=true;
                var url = window.location.origin + "/Courses";

                if(this.inputs1.length<1)
                    return;

                this.newLogro = [];

                if (this.inputs1.length >= 1) {
                    for (let i = 0; i < this.inputs1.length; i++) {
                    this.newLogro.push(this.inputs1[i]);
                    }
                    console.log(this.newLogro);
                }
                let ids = this.AreaId.split('/');

                axios.post(url, {
                    id_area: ids[0],
                    id_classroom: ids[1],
                    logros: this.newLogro,
                }).then((response) => {
                    this.errors = [];
                    toastr.success("Nuevo plan general creado exitosamente");
                    this.isLoading=false;

                }).catch((error) => {
                    this.errors = error.response.data;
                    this.isLoading=false;
                });
            if(this.activityForPIARStudents === true){
                if(this.inputsPIAR.length > 0 ||  this.inputsPIAR1.length > 0){
                    this.isLoading=true;

                    if(this.inputsPIAR.length<1 ||  this.inputsPIAR1.length<1)
                        return;

                    this.newLogro = [];


                    if (this.inputsPIAR1.length > 0) {
                        for (let i = 0; i < this.inputsPIAR1.length; i++) {
                        this.newLogro.push(this.inputsPIAR1[i]);
                        }
                    }

                    axios.post('/piarAnualPlanification', {
                        //Cursos generales
                        id_area: this.AreaId.substring(0, this.AreaId.lastIndexOf("/") ),
                        id_classroom: this.AreaId[2],
                        students: JSON.stringify(this.saveStudent),
                        logros: JSON.stringify(this.inputsPIAR)
                    }).then((response) => {
                        this.errors = [];
                        toastr.success(response.data);
                        this.isLoading=false;

                    }).catch((error) => {
                        this.errors = error.response.data;
                        this.isLoading=false;
                    });
                }
            }
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

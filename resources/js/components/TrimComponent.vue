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
                <div class="col-md-12 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">Planificación Trimestral</h3>                        
                        <span class="classroom-label">{{fillC.classroom_name}}</span>
                        <span v-show="!isSynchronized">(Hay cambios que no han sido guardados)</span>
                        <div class="row">
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
                            <form-wizard
                                title
                                subtitle
                                color="#ffc107"                                
                                finish-button-text="Guardar y enviar"
                                @on-complete="createCourses"
                            >
                                <span
                                    class="spinner-border spinner-border"
                                    role="status"
                                    aria-hidden="true"
                                    v-if="isLoading"
                                ></span>                                

                                <tab-content title="Trimestral">
                                    <div class="form-group row mx-auto" v-for="(input, t) in inputs" :key="t">
                                        <div class="col-md-6">
                                            <label for="name">Objetivo</label>
                                             <select id="activity_type" class="form-control"  v-model="input.objetive">
                                                    <option value="">-- Seleccione --</option>
                                                    <option v-for="(obj, ob) in objetives" :key="ob" v-bind:value="obj.id" >{{ obj.achievement }} {{ obj.percentage}}%</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Logro</label>
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
                                            <a
                                                    href="#"
                                                    class="btn btn-primary"
                                                    @click.prevent="modalDelete(input.id_quaterly, input.logro)"
                                                    v-show="(t > 0)"
                                                >Eliminar</a>                                            
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="input.logro"
                                                    v-on:change="annualContentUpdateEvent($event,t,'inputs','logro')"
                                                    placeholder="Nombre de la unidad"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6" v-for="(inputC, k) in input.inputCl" :key="k">
                                            <label for="name">Indicador de logro</label>
                                            <span>
                                            <a
                                                href="#"
                                                class="badge badge-danger"
                                                @click.prevent="removeI(t)"
                                                v-show="k != 0 && k == input.inputCl.length - 1 "
                                            >-</a>
                                            <a 
                                                href="#"
                                                class="badge badge-primary"
                                                @click.prevent="addI(t)"
                                                v-show="k == input.inputCl.length - 1"
                                            >+</a>                                            
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="inputC.indicador"
                                                    v-on:change="annualContentUpdateEventI($event,t,k,'indicador')"
                                                    placeholder="Nombre de la unidad"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">

                                            <label for="name">Contenidos</label>
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

                                    <a v-show="(activityForPIARStudents == true && piarStudents.length > 0)" v-on:click="showPIARPlanT" class="btn btn-primary">Crear Planificación General Estudiantes PIAR</a>
                                
                                    <div class="mt-3" v-show="(activityForPIARStudents == true && piarStudents.length > 0)">
                                        <div class="form-group row mx-auto" v-for="(inputsP1, keyy) in inputsPIAR1" :key="keyy">
                                            <div class="col-md-6">
                                                <label for="name">Logro</label>
                                                <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="removeP1(keyy)"
                                                    v-show="(keyy > 0 && inputsP1_saved.length<=keyy)"
                                                >-</a>
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="addP1(keyy)"                                                   
                                                    v-show="keyy == inputsPIAR1.length -1"
                                                >+</a>
                                                </span>
                                                
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="objetive1"
                                                        class="form-control"
                                                        v-model="inputsP1.logroPIAR"
                                                        v-on:change="annualContentUpdateEvent($event,keyy,'inputsPIAR1','logroPIAR')"
                                                        placeholder="Nombre de Logro"
                                                        required
                                                    />                                                    
                                                </div>
                                            </div>
                                            <div class="col-md-6">   
                                                <label for="name">Indicador de logro</label>                                                                                            
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="objetive1"
                                                        class="form-control"
                                                        v-model="inputsP1.namePIAR"
                                                        v-on:change="annualContentUpdateEvent($event,keyy,'inputsPIAR1','namePIAR')"
                                                        placeholder="Nombre de la unidad"
                                                        required
                                                    />                                                    
                                                </div>

                                                <label for="name">Contenidos</label>
                                                <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="inputsP1.contenidoPIAR"
                                                v-on:change="annualContentUpdateEvent($event,keyy,'inputsPIAR1','contenidoPIAR')"
                                                placeholder="Es la explicacion o sintesis de la unidad."
                                                required
                                                ></textarea>
                                                <div class="invalid-feedback">Please fill out this field</div>
                                            </div>
                                        </div>
                                    </div>
                                </tab-content>              
                            </form-wizard>            
                        </form>
                    </div>
                </div>
            </div>
        </div>
         <!-- Modal para eliminar evento -->
        <div class="modal fade" id="deleteLog">
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
Vue.use(VueFormWizard);
export default {
    props: ["idArea"],
    data() {
        return {
            serialLocalStorage:'9f284918-f0f6-4369-a368-eaf6321b6807',
            inputs: [
                {
                    name: "",
                    logro: "",
                    contenido: "",
                    objetive: "",
                    inputCl:[
                        {
                        indicador: "",
                        },
                        {
                        indicador: "",
                        },
                    ],
                }
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
                    logroPIAR:"",
                    contenidoPIAR: "",
                },
            ],
            delName: "",
            delId: "",
            inputs1_saved:[],
            inputsPIAR_saved:[],
            inputsP1_saved:[],
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
            isLoading:false,
            showPiarPlan: false,
            showPIARPlanTrimestral: false,
            activityForAllStudents:false,
            activityForPIARStudents: false,
            activityForSelectStudents: false,
            studentsOptions:[],
            saveStudent:[],
            piarStudents:[],
            objetives:[],
        };
    },
    watch: {
        activityForAllStudents: function(newVal){
            if(newVal == true){
                this.activityForPIARStudents = false;
                this.activityForSelectStudents = false;
            }
        },

        activityForPIARStudents: function(newVal){
            if(newVal == true){
                this.activityForAllStudents = false;
                this.activityForSelectStudents = false;
                this.selectedStudentsData = this.piarStudents;
            }
        },

        activityForSelectStudents: function(newVal){
            if(newVal == true){
                this.activityForPIARStudents = false;
                this.activityForAllStudents = false;
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
        this.getData();
    },
    methods: {
        getData(){
            console.log(this.idArea);
            axios.get(`/PIARStudentsByArea/${this.idArea}`).then((response)=>{
                this.piarStudents = Object.values(response.data);
            }).catch((error)=>{
                console.log(error)
            })

            axios.get(`/StudentsByArea/${this.idArea}`).then((response)=>{
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
                        console.log("data piar: ", JSON.parse(el.logros));
                        let trimestres = JSON.parse(el.trimestres)
                        this.saveStudent = JSON.parse(el.students)
    
                        logros.forEach((lg)=>{
                            this.inputsPIAR1.push({
                                contenidoPIAR: lg.contenidoPIAR,
                                logroPIAR: lg.logroPIAR,
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
                    
                    this.showPiarPlan = true,
                    this.showPIARPlanTrimestral = true,
                    this.activityForAllStudents = true;
                }
            })
            
            //load from localstorage
            this.serialLocalStorage=this.serialLocalStorage+"-"+this.idArea;

            var urlsel = window.location.origin + "/coursePlanification/" + this.idArea;
            axios.get(urlsel).then((response) => {
                this.fillC = response.data;
                this.objetives=response.data.courses.achievements;
                //console.log(response.data);
                //set current data
                if(response.data.achievements.length>0 && response.data.quaterly.length>0){
                    this.inputs=[];
                    var i=0;
                    response.data.quaterly.forEach((e)=>{
                        var valueJson="";
                        function IsJsonString() {
                            try {
                            var json = e.unit_name ? JSON.parse(e.unit_name): {};
                            return true;
                            } catch (e) {
                            return false;
                            }
                        }
                        if(IsJsonString()){            
                            valueJson=e.unit_name ? JSON.parse(e.unit_name): {};
                        } else{            
                            let json=[{
                            indicador: e.unit_name ? e.unit_name : ""
                            }];
                            valueJson=json;
                        }
                        
                        i++;
                        this.inputs.push({ id_quaterly:e.id,inputCl: valueJson, contenido: e.content, logro:e.logro, objetive: e.id_achievement});
                    });
                    //console.log(this.inputs);
                    this.inputs_saved= JSON.parse(JSON.stringify(this.inputs));
                }else{
        
                    if(localStorage.getItem(this.serialLocalStorage)){
                        let savedInputModel=JSON.parse(decodeURIComponent(escape(window.atob(localStorage.getItem(this.serialLocalStorage)))));
                        console.log(JSON.stringify(this.inputs));
                        if(savedInputModel.inputs.length>0 && JSON.stringify(savedInputModel.inputs)!=JSON.stringify(this.inputs)){
                            this.inputs=savedInputModel.inputs;
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
        annualContentUpdateEvent(e,i,type,property=null){
            if(type=='inputs'){
                this.inputs[i][property]=this.inputs[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
            }
            else if (type=='inputsPIAR'){
                this.inputsPIAR[i][property] = this.inputsPIAR[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
            }
            else if (type=='inputsPIAR1'){
                this.inputsPIAR1[i][property] = this.inputsPIAR1[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
            }
            //console.log(l.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1"));
            //serialize data on localstorage
            
            this.isSynchronized=false;
        },
        modalDelete(id, name){
            this.delName = name;
            this.delId = id;
            $("#deleteLog").modal("show");
        },
        deleteHide() {
            $("#deleteLog").modal("hide");
        },
        deleteObjetive(){
            var url="deleteLogroPlanification/"+this.delId;
            axios.put(url).then((response) => {
                this.errors = [];
                toastr.success("Logro eliminado con exito");
                this.isLoading=false;
                this.getData();
                $("#deleteLog").modal("hide");
                    
            }).catch((error) => {
                this.errors = error.response.data;
                this.isLoading=false;
            });
        },
        annualContentUpdateEventI(e,index1,index2,property=null){
            
            //this.inputs[index1].inputCl[index2]=this.inputs[index1].inputCl[index2][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
            
            //serialize data on localstorage
            localStorage.setItem(this.serialLocalStorage, window.btoa(unescape(encodeURIComponent(JSON.stringify({inputs:this.inputs})))));

            this.isSynchronized=false;
        },
        showPIARPlan(){
            this.showPiarPlan = !this.showPiarPlan
        },
        showPIARPlanT(){
            this.showPIARPlanTrimestral = !this.showPIARPlanTrimestral
        },
        add(index) {
            this.inputs.push({ name: "", logro: "", inputCl: [{indicador: ""},{indicador:""}], contenido: "" });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },
        addI(index) {
            this.inputs[index].inputCl.push({
                indicador: "",
            });
            console.log(this.inputs);
        },
        removeI(index) {
            this.inputs[index].inputCl.splice(-1);
            console.log(this.inputs);
        },

        addPIAR(index) {
            this.inputsPIAR.push({ logroPIAR: "", porcentajePIAR: "0" });
        },
        
        removePIAR(index) {
            this.inputsPIAR.splice(index, 1);
        },

        addP1(index) {
            this.inputsPIAR1.push({ namePIAR: "", logroPIAR: "", contenidoPIAR: "" });
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
                console.log(url);

                if(this.inputs.length<1)
                    return;

                this.newTrimestre = [];
                this.newLogro = [];
                if (this.inputs.length >= 1) {
                    for (let i = 0; i < this.inputs.length; i++) {
                        this.inputs[i].name=JSON.stringify(this.inputs[i].inputCl);
                        this.newTrimestre.push(this.inputs[i]);
                    }
                    console.log(this.newTrimestre);
                }
                let ids = this.idArea.split('/');

                axios.post(url, {
                    id_area: ids[0],
                    id_classroom: ids[1],
                    trimestres: this.newTrimestre,
                }).then((response) => {
                    this.errors = [];
                    toastr.success("Nueva planificación trimestral creada exitosamente");
                    this.isLoading=false;
                        
                }).catch((error) => {
                    this.errors = error.response.data;
                    toastr.error("Debe completar todos los campos");
                    this.getData();
                    this.isLoading=false;
                });
            if(this.activityForPIARStudents === true){
                if(this.inputsPIAR.length > 0 ||  this.inputsPIAR1.length > 0){
                    this.isLoading=true;

                    if(this.inputsPIAR.length<1 ||  this.inputsPIAR1.length<1)
                        return;

                    this.newTrimestre = [];
                    this.newLogro = [];

                    if (this.inputsPIAR.length > 0) {
                        for (let i = 0; i < this.inputsPIAR.length; i++) {
                            this.newTrimestre.push(this.inputsPIAR[i]);
                        }
                    }
                
                    if (this.inputsPIAR1.length > 0) {
                        for (let i = 0; i < this.inputsPIAR1.length; i++) {
                        this.newLogro.push(this.inputsPIAR1[i]);
                        }
                    }                

                    axios.post('/piarAnualPlanification', {
                        //Cursos generales
                        id_area: this.idArea.substring(0, this.idArea.lastIndexOf("/") ),
                        id_classroom: this.idArea[2],
                        logros: JSON.stringify(this.newLogro),
                        trimestres: JSON.stringify(this.newTrimestre),
                        students: JSON.stringify(this.saveStudent),
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

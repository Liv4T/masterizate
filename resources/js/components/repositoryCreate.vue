<template>
    <div>
        <div>
            <div>
                <div class="col-md-12 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">Entregas</h3>
                        <form-wizard
                            title
                            subtitle
                            color="#ffc107"
                            next-button-text="Siguiente"
                            finish-button-text="Guardar"
                            @on-complete="createSemanal"
                        >
                            <tab-content title="Crear entrega">
                                <div class="form-group row mx-auto">
                                    <div class="col-md-6">
                                        <label for="name">*Título</label>
                                        <div>
                                            <input
                                                type="text"
                                                name="objetive1"
                                                class="form-control"
                                                v-model="nameUnit"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="name">*Instrucciones</label>
                                        <textarea
                                            name="competences"
                                            class="form-control"
                                            v-model="description"
                                            placeholder="Es la explicacion o sintesis de la clase."
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <div class="form-group row">
                                        <div class="col-md-3">
                                            <label for="name">*Fecha</label>
                                            <div>
                                                <input
                                                    type="date"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="newdate"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <label>*Fecha Limite</label>
                                            <div>
                                                <input
                                                    type="datetime-local"
                                                    class="form-control"
                                                    v-model="date_limit"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Archivo</label>
                                            <button class="form-control"  @click="click1">Seleccione un archivo</button>
                                            <input type="file" ref="input1" style="display: none" @change="previewImage"  >
                                            <div v-if="message!='' && message!=null">
                                                <span style="color:green; font-size:20px">Archivo cargado con exito nombre:{{ message }} </span>
                                            </div>
                                            <div v-if="message==null">
                                                <span style="color:red; font-size:18px">Espere estamos cargando su archivo</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-8">
                                            <label><span class="required">*</span>Logro:</label>
                                                <select class="form-control" v-model="quarterly_plan" @change="indicador(quarterly_plan)">
                                                <option value="">-- Seleccione --</option>
                                                <option v-for="(quarterly,k_quarterly) in fillC.quaterly" v-bind:key="k_quarterly"  :value="quarterly.id + '/' + quarterly.id_achievement">{{quarterly.logro}}</option>
                                            </select>
                                        </div>
                                        <div class="col-4">
                                            <label><span class="required">*</span>Evaluación:</label>
                                                <select class="form-control" v-model="activity">
                                                <option value="">-- Seleccione --</option>
                                                <option v-for="(act,k_activity) in fillI" v-bind:key="k_activity"  v-bind:value="act.id">{{act.type_activity}} ({{act.activity_rate}} %)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <strong>* Campos requeridos</strong>
                                <div class="float-left">
                                    <button class="btn btn-primary" v-on:click="backComponent">Volver</button>
                                </div>
                            </tab-content>
                        </form-wizard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import firebase from '../../../connectionDbFirebase';
// var firebaseConfig = {
//             apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
//             authDomain: "liv4t-skool.firebaseapp.com",
//             databaseURL: "https://liv4t-skool.firebaseio.com",
//             projectId: "liv4t-skool",
//             storageBucket: "liv4t-skool.appspot.com",
//             messagingSenderId: "346718353628",
//             appId: "1:346718353628:web:abc0666c41b66fa472dc19",
//             measurementId: "G-7L14TG5RRZ"
//  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
Vue.use(VueFormWizard);
export default {
    props: ["id_area", "idClassroom","backComponent"],
    data() {
        return {
            myOptions: [],
            nameUnit: "",
            description: "",
            newdate: "",
            date_limit:"",
            nameArea: "",
            errors: [],
            nameFile: '',
            imageData: null,
            message:"",
            activity:"",
            quarterly_plan:"",
            fillC:[],
            fillI:[],
        };
    },
    mounted() {
        this.getArea();
        this.getDataPlanification();
    },
    methods: {
        getArea(){
            var url = "GetArearByUser";
            axios.get(url).then((response) => {
                this.myOptions = response.data;
            });
        },
        getMenu() {
            window.location = "/repository";
        },
        indicador(id) {
            if (id!=''){
                var ids=id.split("/");
                var idInd= ids[0];
            }
            var urli = window.location.origin + "/getIndicator/" + idInd;
            axios.get(urli).then((response) => {
                this.fillI = response.data;
            });
        },
        getDataPlanification(){
            var urlsel = window.location.origin + "/coursePlanification/" + this.id_area + "/" + this.idClassroom;
            axios.get(urlsel).then((response) => {
                this.fillC = response.data;
            });
        },
        createSemanal() {            

            axios.post("/saveRepository", {
                id_classroom: this.idClassroom,
                id_area: this.id_area,
                id_quarterly_plan: this.quarterly_plan,
                id_indicator: this.activity,
                name: this.nameUnit,
                description: this.description,
                file: this.nameFile,
                date: this.newdate,
                date_limit: this.date_limit,
            }).then((response) => {
            this.errors = [];
            toastr.success("Nueva tarea creada exitosamente");
            // this.getMenu();
            }).catch((error) => {
                this.errors = error.response.data;
                toastr.danger("Complete todos los campos requeridos");
            });
        },
        click1() {
            this.$refs.input1.click()
        },
        previewImage(event) {
            this.uploadValue=0;
            this.nameFile=null;
            this.imageData = event.target.files[0];
            this.message=null;
            this.onUpload()
        },
        onUpload(){
            this.nameFile=null;
            const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
            this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                }, error=>{console.log(error.message)},
            ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.nameFile =url;
                this.message=this.imageData.name;
                console.log(this.nameFile)
                });
            });
        },
    },
};
</script>
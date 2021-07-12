<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="custom-card text-center">
                    <h3 class="card-header fondo">Redactar Mensaje</h3>
                    <div class="container-mensaje">
                        <div class="row">
                            <h5>Destinatarios</h5><br>
                        </div>                        
                        <div class="row">
                            <h6>Tus contactos</h6>
                            <a class="btn btn-info" v-if="teacher" href="#" v-on:click.prevent="btA()"
                                style="margin: 10px;">Administrativa</a>

                            <a class="btn btn-info float-left" href="#" v-on:click.prevent="btD()"
                                style="margin: 10px;">Docentes</a>

                            <a class="btn btn-info float-left" href="#" v-on:click.prevent="btE()"
                                style="margin: 10px;">Estudiantes</a>                                        

                            <a class="btn btn-info" href="#" v-on:click.prevent="btP()"
                                style="margin: 10px;">Padres</a>

                            <a class="btn btn-info" href="#" v-on:click.prevent="btPsi()"
                                style="margin: 10px;">Psicologia</a>

                            <a class="btn btn-info" href="#" v-on:click.prevent="btSchoolGov()"
                                style="margin: 10px;">Gobierno Escolar</a>

                            <a class="btn btn-info" href="#" v-on:click.prevent="btC()"
                                style="margin: 10px;">Coordinadores</a>

                            <a class="btn btn-info" href="#" v-on:click.prevent="btT()"
                                style="margin: 10px;">Tutores</a>  

                            <a class="btn btn-info" href="#" v-on:click.prevent="btEn()"
                                style="margin: 10px;">Enfermería</a>                          
                            
                        </div>
                        <div v-show="docente == true">
                            <label for>Docentes</label>
                            <students-course :getIdUser="getIdUser" :findStudentOrTeacher="findStudentOrTeacher"></students-course>
                            <!-- <multiselect v-model="cdocente" :options="optionsd" tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag" label="name" track-by="id" :multiple="true"
                                :taggable="true" @tag="addTagd"></multiselect> -->
                        </div>
                        <br />
                        <div v-show="estudiante == true">
                            <label for>Estudiantes</label>
                            <students-course :getIdUser="getIdUser" :findStudentOrTeacher="findStudentOrTeacher"></students-course>
                        </div>
                        <br />
                        <div v-show="results.length >0">
                            <label for>{{  administrative == true ? 
                                            'Administrativos' : padres == true ? 
                                            'Padres' : psicologia == true ? 
                                            'Psicología' : schoolGov == true ? 
                                            'Gobierno Escolar' : coordinadores == true ?
                                            'Coordinadores' : enfermeria == true ?
                                            'Enfermeria' : tutores == true ? 
                                            'Tutores' : ''
                                        }}
                            </label>
                            <multiselect v-model="cresult" :options="results"
                                tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name"
                                track-by="id" :multiple="true" :taggable="true" @tag="addTaga"></multiselect>
                        </div>
                        <br />
                        <div class="row">
                            <label for="nombre" class="label-mensaje">Asunto:</label>
                            <input class="input-mensaje" id="nombre" name="nombre" placeholder="Asunto"
                                v-model="asunto" />
                        </div>

                        <div class="row">
                            <label for="mensaje">Mensaje:</label>
                        </div>

                        <ckeditor :editor="editor" v-model="editorData" @ready="onReady"></ckeditor>
                        <div class="modal-footer">
                            <a href="#" class="btn btn-warning float-right" @click="getMenu()">Cancelar</a>
                            <a href="#" class="btn btn-warning float-right" @click="saveM()">Enviar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Horario de Respuesta</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-horario">
                            <div class="modal-body">
                                <div class="content">
                                    <strong class="h4">Lunes a sabados de 8:00 A.M a 5:00 P.M</strong>
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
    import Multiselect from "vue-multiselect";
    import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
    import StudentsCourse from './studentsCourse.vue';
    // register globally
    Vue.component("multiselect", Multiselect);
    export default {
        props: ['user'],
        // OR register locally
        components: {
            Multiselect,
            StudentsCourse
        },
        watch:{
            administrative: function(newVal){
                if(newVal == true){
                    this.results = this.optionsa;

                    this.administrative = true;
                    this.docente = false;
                    this.estudiante = false;
                    this.padres = false;
                    this.psicologia = false;
                    this.schoolGov = false;
                    this.tutores = false;
                    this.coordinadores = false;
                    this.enfermeria = false;
                }
            },

            docente: function(newVal){
                if(newVal == true){
                    this.results = this.optionsd;
                    this.administrative = false;
                    this.docente = true;
                    this.estudiante = false;
                    this.padres = false;
                    this.psicologia = false;
                    this.schoolGov = false;
                    this.tutores = false;
                    this.coordinadores = false;
                    this.enfermeria = false;
                }
            },

            estudiante: function(newVal){
                if(newVal == true){
                    this.results = this.optionsp;
                    this.administrative = false;
                    this.docente = false;
                    this.estudiante = true;
                    this.padres = false;
                    this.psicologia = false;
                    this.schoolGov = false;
                    this.tutores = false;
                    this.coordinadores = false;
                    this.enfermeria = false;
                }
            },

            padres: function(newVal){
                if(newVal == true){
                    this.results = this.optionsp;
                    this.administrative = false;
                    this.docente = false;
                    this.estudiante = false;
                    this.padres = true;
                    this.psicologia = false;
                    this.schoolGov = false;
                    this.tutores = false;
                    this.coordinadores = false;
                    this.enfermeria = false;
                }
            },

            psicologia: function(newVal){
                if(newVal == true){
                    this.results = this.optionspsi;

                    this.administrative = false;
                    this.docente = false;
                    this.estudiante = false;
                    this.padres = false;
                    this.psicologia = true;
                    this.schoolGov = false;
                    this.tutores = false;
                    this.coordinadores = false;
                    this.enfermeria = false;
                }
            },

            schoolGov: function(newVal){
                if(newVal == true){
                    this.results = this.optionsgov;

                    this.administrative = false;
                    this.docente = false;
                    this.estudiante = false;
                    this.padres = false;
                    this.psicologia = false;
                    this.schoolGov = true;
                    this.tutores = false;
                    this.coordinadores = false;
                    this.enfermeria = false;
                }
            },

            tutores: function(newVal){
                if(newVal == true){
                    this.results = this.optionst;

                    this.administrative = false;
                    this.docente = false;
                    this.estudiante = false;
                    this.padres = false;
                    this.psicologia = false;
                    this.schoolGov = false;
                    this.tutores = true;
                    this.coordinadores = false;
                    this.enfermeria = false;
                }
            },
            
            coordinadores: function(newVal){
                if(newVal == true){
                    this.results = this.optionsc;

                    this.administrative = false;
                    this.docente = false;
                    this.estudiante = false;
                    this.padres = false;
                    this.psicologia = false;
                    this.schoolGov = false;
                    this.tutores = false;
                    this.coordinadores = true;
                    this.enfermeria = false;
                }
            },
            
            enfermeria: function(newVal){
                if(newVal == true){
                    this.results = this.optionsen;

                    this.administrative = false;
                    this.docente = false;
                    this.estudiante = false;
                    this.padres = false;
                    this.psicologia = false;
                    this.schoolGov = false;
                    this.tutores = false;
                    this.coordinadores = false;
                    this.enfermeria = true;
                }
            },

        },
        data() {
            return {
                user_rol: this.user.type_user === 4 ? true : false,
                teacher: this.user.type_user === 2 ? true : false,
                editor: DecoupledEditor,
                findStudentOrTeacher: '',
                editorData: "<p>Escribir...</p>",
                dataBoard: {},
                value: [{
                    name: "Todos",
                    code: "js"
                }],
                options: [],
                optionsa: [],
                optionse: [],
                optionsd: [],
                optionsp: [],
                optionsc: [],
                optionst: [],
                optionsen: [],
                optionspsi:[],
                optionsgov:[],
                results: [],

                administrative: false,
                docente: false,
                estudiante: false,
                padres: false,
                psicologia: false,
                schoolGov: false,
                tutores: false,
                coordinadores: false,
                enfermeria: false,
                
                asunto: "",
                cdocente: [],
                cestudiante: [],
                cresult:[],
                correos: [],
            };
        },
        mounted() {
            var urlUsers = "users";
            axios.get(urlUsers).then((response) => {
                this.options = response.data;
                for (let i = 0; i < this.options.length; i++) {
                    console.log(this.options[i].name)
                    // Opciones Administrador
                    if (this.options[i].type_user == 1) {
                        this.optionsa.push(this.options[i]);
                        // console.log(this.optionsa);
                    }
                    // Opciones docentes
                    if (this.options[i].type_user == 2) {
                        this.optionsd.push(this.options[i]);
                    }  
                    //Opciones Estudiantes                  
                    if (this.options[i].type_user == 3) {
                        this.optionse.push(this.options[i]);
                    }
                    //Opciones Acudientes
                    if (this.options[i].type_user == 4) {
                        this.optionsp.push(this.options[i]);
                    }
                    //Opciones Psicologia
                    if (this.options[i].type_user == 5) {            
                        this.optionspsi.push(this.options[i]);
                    }
                    //Opciones Govierno Escolar
                    if (this.options[i].type_user == 6) {
                        this.optionsgov.push(this.options[i]);
                    }
                    //Opciones Tutores
                    if (this.options[i].type_user == 7) {
                        this.optionst.push(this.options[i]);
                    }
                    //Opciones Coordinador
                    if (this.options[i].type_user == 8) {
                        this.optionsc.push(this.options[i]);
                    }
                    //Opciones Enfermeria
                    if (this.options[i].type_user == 9) {
                        this.optionsen.push(this.options[i]);
                    }
                }
            });
        },
        methods: {
            getMenu() {
                window.location = "/enviados";
            },
            addTaga(newTag) {
                const tag = {
                    name: newTag,
                    id: newTag,
                };
                this.optionsa.push(tag);
            },
            addTagd(newTag) {
                const tag = {
                    name: newTag,
                    id: newTag,
                };
                this.optionsd.push(tag);
            },
            addTage(newTag) {
                const tag = {
                    name: newTag,
                    id: newTag,
                };
                this.optionse.push(tag);
            },
            onReady(editor) {
                // Insert the toolbar before the editable area.
                editor.ui
                    .getEditableElement()
                    .parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                    );
            },
            getIdUser(data){
                if(data){
                    this.correos.push(data.user_id)
                    toastr.success(`Estudiante ${data.user_name} Seleccionado`);
                }
            },
            // Administrados
            btA() {
                if (this.administrative == false) {
                    this.administrative = true;
                } else {
                    this.administrative = false;
                }
            },
            // Docente
            btD() {
                if (this.docente == false) {
                    this.docente = true;
                } else {
                    this.docente = false;
                }
                this.findStudentOrTeacher = 2;
            },
            // Estudiante
            btE() {
                if (this.estudiante == false) {
                    this.estudiante = true;
                    this.findStudentOrTeacher = 1;
                } else {
                    this.estudiante = false;
                }
                
            },
            // Padres
            btP() {
                if (this.padres == false) {
                    this.padres = true;
                } else {
                    this.padres = false;
                }
            },
            //Psicologia
            btPsi() {
                if (this.psicologia == false) {
                    this.psicologia = true;
                } else {
                    this.psicologia = false;
                }
            },
            // Gobierno Escolar
            btSchoolGov() {
                if (this.schoolGov == false) {
                    this.schoolGov = true;
                } else {
                    this.schoolGov = false;
                }
            },
            // Tutor
            btT(){
                if (this.tutores == false) {
                    this.tutores = true;
                } else {
                    this.tutores = false;
                }
            },
            // Coordinador
            btC(){
                if (this.coordinadores == false) {
                    this.coordinadores = true;
                } else {
                    this.coordinadores = false;
                }
            },
            // Enfermeria
            btEn(){
                if (this.enfermeria == false) {
                    this.enfermeria = true;
                } else {
                    this.enfermeria = false;
                }
            },
            saveM() {
                let date = new Date();
                let hourly = date.getHours();
                let minutes = date.getMinutes();

                // console.log("data: ", this.editorData);
                var url = "sendMessages";
                if (this.cresult.length >= 1) {
                    for (let i = 0; i < this.cresult.length; i++) {
                        this.correos.push(this.cresult[i].id);
                    }
                }
                if (this.cestudiante.length >= 1) {
                    for (let i = 0; i < this.cestudiante.length; i++) {
                        this.correos.push(this.cestudiante[i].id);
                    }
                }
                if (this.cdocente.length >= 1) {
                    for (let i = 0; i < this.cdocente.length; i++) {
                        this.correos.push(this.cdocente[i].id);
                    }
                }
                axios
                    .post(url, {
                        receptor: this.correos,
                        subject: this.asunto,
                        message: this.editorData,
                    })
                    .then((response) => {
                        this.errors = [];
                        toastr.success("Mensaje enviado");
                        if (hourly >= 7 && minutes <= 59 || hourly >= 17 && minutes >= 0) {
                            $("#infoModal").modal("show");
                        }
                        this.getMenu();
                    })
                    .catch((error) => {});
            },
        },
    };

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    .label-mensaje {
        display: block;
    }

    .container-mensaje {
        display: block;
        margin: 0 auto;
        width: 710px;
        color: #666666;
        font-family: Arial;
    }

    .input-mensaje {
        width: 580px;
        height: 27px;
        background: #f5f5f5;
        border: 2px solid #f6f6f6;
        padding: 10px;
        color: black;
    }

    .mensajes {
        height: 150px;
    }

    .modal-horario {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/movie-44de4.appspot.com/o/horarioAtenci%C3%B3n.png?alt=media&token=488369f1-14b1-438a-9de0-2d2f7b3c45de");
        background-repeat: no-repeat;
        background-size: cover;
        height: 320px;
    }

    .content {
        margin-left: 243px;
        margin-top: 176px;
    }

</style>

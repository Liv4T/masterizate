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
                            <a class="btn btn-info float-left" href="#" v-on:click.prevent="btD()"
                                style="margin: 10px;">Docentes</a>
                            <a class="btn btn-info float-left" href="#" v-on:click.prevent="btE()"
                                style="margin: 10px;">Estudiantes</a>
                            <template v-if="user_rol" class="float-left">
                                <a class="btn btn-info" href="#" v-on:click.prevent="btP()"
                                    style="margin: 10px;">Padres</a>
                                <a class="btn btn-info" href="#" v-on:click.prevent="btA()"
                                    style="margin: 10px;">Administrativa</a>
                            </template>
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
                        <div v-show="padres == true">
                            <label for>Padres</label>
                            <multiselect v-model="cpadres" :options="optionsp" tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag" label="name" track-by="id" :multiple="true"
                                :taggable="true" @tag="addTaga"></multiselect>
                        </div>
                        <div v-show="administrative == true">
                            <label for>Administrativos</label>
                            <multiselect v-model="cadministrative" :options="optionsa"
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
        data() {
            return {
                user_rol: this.user.type_user === 4 ? true : false,
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
                docente: false,
                estudiante: false,
                administrative: false,
                padres: false,
                asunto: "",
                cdocente: [],
                cestudiante: [],
                cadministrative: [],
                cpadres: [],
                correos: [],
            };
        },
        mounted() {
            var urlUsers = "users";
            axios.get(urlUsers).then((response) => {
                this.options = response.data;
                for (let i = 0; i < this.options.length; i++) {
                    if (this.options[i].type_user == 2) {
                        this.optionsd.push(this.options[i]);
                    }
                    if (this.options[i].type_user == 1) {
                        this.optionsa.push(this.options[i]);
                        // console.log(this.optionsa);
                    }
                    if (this.options[i].type_user == 3) {
                        this.optionse.push(this.options[i]);
                    }
                    if (this.options[i].type_user == 4) {
                        this.optionsp.push(this.options[i]);
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
            btD() {
                if (this.docente == false) {
                    this.docente = true;
                } else {
                    this.docente = false;
                }
                this.findStudentOrTeacher = 2;
            },
            btE() {
                if (this.estudiante == false) {
                    this.estudiante = true;
                    this.findStudentOrTeacher = 1;
                } else {
                    this.estudiante = false;
                }
                
            },
            btA() {
                if (this.administrative == false) {
                    this.administrative = true;
                } else {
                    this.administrative = false;
                }
            },
            btP() {
                if (this.padres == false) {
                    this.padres = true;
                } else {
                    this.padres = false;
                }
            },
            saveM() {
                let date = new Date();
                let hourly = date.getHours();
                let minutes = date.getMinutes();

                // console.log("data: ", this.editorData);
                var url = "sendMessages";
                if (this.cadministrative.length >= 1) {
                    for (let i = 0; i < this.cadministrative.length; i++) {
                        this.correos.push(this.cadministrative[i].id);
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
                if (this.cpadres.length >= 1) {
                    // console.log(this.cpadres);
                    for (let i = 0; i < this.cpadres.length; i++) {
                        this.correos.push(this.cpadres[i].id);
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

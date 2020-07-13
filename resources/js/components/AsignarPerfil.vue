<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">Perfiles</h3>
                        <form class="needs-validation" novalidate>
                            <form-wizard
                                title
                                subtitle
                                color="#c1e9eb"
                                next-button-text="Siguiente"
                                back-button-text="Atrás"
                                finish-button-text="Guardar y enviar"
                                @on-complete="createSemanal"
                            >
                                <tab-content>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-6">
                                            <label for>Rol:</label>
                                            <select
                                                class="form-control"
                                                ref="seleccionado"
                                                required
                                            >
                                                <option value="2"
                                                    >Coordinador</option
                                                >
                                                <option value="3"
                                                    >Docente</option
                                                >
                                            </select>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="name">Secciones</label>
                                            <div>
                                                <select
                                                    class="form-control"
                                                    ref="seleccionado"
                                                    required
                                                >
                                                    <option
                                                        :value="option.id"
                                                        v-for="option in myOptions"
                                                        >{{
                                                            option.text
                                                        }}</option
                                                    >
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Nombre</label>
                                            <select
                                                class="form-control"
                                                ref="seleccionado"
                                                required
                                            >
                                                <option
                                                    :value="option.id"
                                                    v-for="option in myOptions"
                                                    >{{ option.text }}</option
                                                >
                                            </select>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
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
$(function() {
    // Get the form fields and hidden div
    var checkbox = $("#gridCheck1");
    var hidden = $("#hidden_fields1");

    hidden.hide();

    checkbox.change(function() {
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
    data() {
        return {
            myOptions: [],
            nameUnit: "",
            description: "",
            nameFile: "",
            nameUrl: "",
            newDocument: [],
            semanal: false,
            newVideo: [],
            messageVideo: "",
            seleccionadoStreaming: "",
            textoM: "",
            errors: [],
            inputs: [
                {
                    name: ""
                }
            ]
        };
    },
    mounted() {},
    methods: {
        getMenu() {
            window.location = "/instituciones_adm";
        },
        mensaje() {
            this.seleccionadoStreaming = this.$refs.seleccionadoStreaming.value;
            if (this.seleccionadoStreaming != 1) {
                this.textoM =
                    "Recomendamos el uso de Google Meet como streaming";
                console.log("aqui");
            } else {
                this.textoM = "";
            }
        },
        createSemanal() {
            var url = "Class";
            this.seleccionado = this.$refs.seleccionado.value;
            axios
                .post(url, {
                    //Cursos generales
                    id_weekly_plan: this.seleccionado,
                    name: this.nameUnit,
                    description: this.description,
                    name_document: this.nameFile,
                    document: this.newDocument,
                    url: this.nameUrl,
                    video: this.newVideo
                })
                .then(response => {
                    this.errors = [];

                    toastr.success("Nueva clase creada exitosamente");
                    this.getMenu();
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
        },
        onFlieChange(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];

                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                this.newDocument = data;

                axios.post("/fileDocument", data).then(response => {
                    this.emitMessage(response);
                });
            }
        },
        videoFile(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                this.messageVideo = "Espere estamos cargando el video";
                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                this.newVideo = data;

                axios.post("/fileDocument", data).then(response => {
                    console.log(response.data);

                    if (response.data == "ok") {
                        this.messageVideo = "Video cargado";
                    } else {
                        this.messageVideo =
                            "El video excede el límite, por favor reducir su peso";
                    }
                });
            }
        },
        add(index) {
            this.inputs.push({
                name: ""
            });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        }
    }
};
</script>
<style></style>

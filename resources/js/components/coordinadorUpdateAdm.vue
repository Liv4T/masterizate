<template>
    <div class="back">
        <div class="row justify-content-center">
            <!-- Actualización de Coordinador -->
            <div class="modal fade" id="updateCoord">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="card">
                            <h3 class="card-header fondo text-center">
                                Usuarios
                                <button type="button" class="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </h3>

                            <div class="card-body">
                                <form class="needs-validation" v-on:submit.prevent="updateUser" novalidate>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Rol
                                            </label>
                                            <div>
                                                <select
                                                    class="form-control"
                                                    v-model="newType_user"
                                                    style="background: gainsboro;"
                                                    required
                                                >
                                                    <option value="8"
                                                        >Coordinador</option
                                                    >
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Institución
                                            </label>
                                            <div>
                                                <select
                                                    class="form-control"
                                                    v-model="institution"
                                                    style="background: gainsboro;"
                                                    required
                                                >
                                                    <option :value="option.id"
                                                        v-for="(option, key) in myOptions" :key="key"
                                                        >{{
                                                            option.name
                                                        }}</option
                                                    >
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Nombres
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="newName"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Apellidos
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="newLastName"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-MENSAJES_naranja.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Grupo a Coordinar
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="new_coord_area"
                                                    size="30"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Teléfono
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    class="form-control"
                                                    style="background: gainsboro;"
                                                    v-model="newPhone"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto" v-show="docente == 2">
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Materia
                                            </label>
                                            <div>
                                                <select
                                                    class="form-control"
                                                    ref="seleccionado"
                                                    style="background: gainsboro;"
                                                    required
                                                >
                                                    <option value="2"
                                                        >Quiímica</option
                                                    >
                                                    <option value="3"
                                                        >Español</option
                                                    >
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto" v-show="docente == 3">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Acudiente
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="name"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto" v-show="docente == 2">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Experiencia
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="name"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Número de Identificación
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="id_number"
                                                    class="form-control"
                                                    maxlength="15"
                                                    v-model="newId_number"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Nombre de usuario
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="newUserName"
                                                    style="background: gainsboro;"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-8 text-center mx-auto">
                                            <label for="name">
                                                <img
                                                    width="35px"
                                                    src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0"
                                                    alt
                                                />Dirección
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id="validationDefault03"
                                                    class="form-control"
                                                    style="background: gainsboro;"
                                                    v-model="newAddress"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input
                                            type="submit"
                                            class="btn btn-warning"
                                            value="Guardar"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Final de modal de Actualización de coordinador -->
        </div>
    </div>
</template>
<script>
export default {
    props:['data'],
    data() {
        return {
            myOptions: [],
            descripcion: "",
            allowedExtensions: ["jpg", "jpeg", "png"],
            logro: "",
            name: "",
            fechaE: "",
            fechaR: "",
            docente: "",
            id_act: "",
            institution: "",
            newName: "",
            newLastName: "",
            newPassword: "",
            new_coord_area: "",
            newEmail: "",
            newUserName: "",
            newType_user: "",
            newAddress: "",
            newPicture: "",
            newPhone: "",
            newId_number: "",
            errors: [],
            fillS: [],
            inputs: [
                {
                    name: ""
                }
            ]
        };
    },
    mounted() {
        var urlr = "getInstitution";
        axios.get(urlr).then(response => {
            this.myOptions = response.data;
        });
    },
    watch:{
        data(newVal, oldVal){
            if(newVal !== oldVal){
                this.newName = newVal.name;
                this.newLastName = newVal.last_name;
                this.newUserName = newVal.user_name;
                this.new_coord_area = newVal.new_coord_area;
                this.newAddress = newVal.address;
                this.newPhone = newVal.phone;
                this.newId_number = newVal.id_number;
                this.newType_user = '8'
            }
        }
    },
    methods: {
        createS(clas) {
            //   var urlr = "showClass/" + clas;
            //   axios.get(urlr).then(response => {
            //     this.fillS = response.data;
            //   });
            $("#createCoord").modal("show");
        },

        updateUser() {
            var url = `users/${this.data.id}`;

            axios
                .put(url, {
                    name: this.newName,
                    last_name: this.newLastName,
                    user_name: this.newUserName,
                    address: this.newAddress,
                    phone: this.newPhone,
                    id_number: this.newId_number,
                    new_coord_area: this.new_coord_area
                })
                .then(response => {
                    this.newName = "";
                    this.newLastName = "";
                    this.newUserName = "";
                    this.newType_user = "";
                    this.newAddress = "";
                    this.newPhone = "";
                    this.newId_number = "";
                    this.new_coord_area ="";
                    this.errors = [];
                    toastr.success("Nuevo usuario Actualizado");
                    // this.getNames();
                    window.location = "/coordinador_adm";
                })
                .catch(error => {
                    console.log(error)
                    this.errors = error.response.data;
                });
        },
        onFlieChange(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                let filename = file.name;
                let filesize = file.size;
                let extension = this.findExtension(filename);

                // if uploaded file is valid with validation rules
                if (this.validateFile(filesize, extension)) {
                    data.append("file", files[0]);
                    data.append("user_name", this.newUserName);
                    this.newPicture = data;

                    axios.post("/img_user", data).then(response => {
                        this.emitMessage(response);
                    });
                }
            }
        },
        /**
         * show error messages
         * @param  {string} title
         * @param  {string} message
         * @return {void}
         */ showError(title, message) {
            swal({
                title: title,
                text: message,
                type: "error",
                confirmButtonText: "Ok"
            });
        },
        /**
         * find extension of uploaded file
         * @param  {string} filename
         * @return {string}
         */
        findExtension(filename) {
            return filename
                .split(".")
                .pop()
                .toLowerCase();
        },
        /**
         * to validate file size
         * @param  {integer} filesize
         * @return {boolean}
         */
        validateSize(filesize) {
            // 2*1024*1024 = 2097152 = 2mb
            if (filesize > 2097152) {
                this.title = "File size limit exceed!";
                this.message = "Please upload file less than 2MB.";
                this.showError(this.title, this.message);
                return false;
            }
            return true;
        },
        /**
         * to validate file extension
         * @param  {string} extension
         * @return {bolean}
         */
        validateExtension(extension) {
            if ($.inArray(extension, this.allowedExtensions) !== -1) {
                return true;
            } else {
                this.title = "Invalid file!";
                this.message = "Please upload jpg,png,pdf or doc file only.";
                this.showError(this.title, this.message);
                return false;
            }
        },
        /**
         * validate file
         * @param  {integer} filesize
         * @param  {string} extension
         * @return {boolean}
         */
        validateFile(filesize, extension) {
            if (
                this.validateSize(filesize) &&
                this.validateExtension(extension)
            ) {
                return true;
            } else {
                return false;
            }
        },
        emitMessage(response) {
            let message = response.data.output.message;
            let user = response.data.output.user;
            if (message) {
                this.$emit("messagesent", {
                    message: message.message,
                    user: user.name,
                    time: message.created_at,
                    image_path: $("#default_image").val(), //user.image_path,
                    type: message.type,
                    file_path: message.file_path,
                    file_name: message.file_name
                });
                console.log(message.file_path);
            }
        },
        chooseFile() {
            $("#file").click();
        }
    }
};
</script>
<style>
.background2 {
    background: url(../assets/img/Fondo5.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
</style>

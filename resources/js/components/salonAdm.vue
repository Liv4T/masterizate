<template>
  <div class="back" v-if="showSection === 'inicio'">
    <div class="row">
      <div id="crud" class="col-sm-12">
        <div class="card text-center">
          <h3 class="card-header fondo">Salones</h3>
          <div class="card-body">
            <!-- <a class="btn btn-warning" v-on:click.prevent="createS()">Crear salón</a> -->
            <!-- <a
                            class="btn btn-warning"
                            v-on:click.prevent="createM()"
                            >Crear materia</a
            >-->
            <a class="btn btn-warning float-left" style="margin-right:10px;" href="#" v-on:click.prevent="editNames()">Crear usuarios</a>

            <a class="btn btn-warning float-left" v-on:click="showComponent('uploadUsers')">Cargar usuarios</a>
            <a class="btn btn-warning float-right" style="margin-left:10px;"  v-on:click="showComponent('assignStudents')">Asignar estudiante</a>
            <a class="btn btn-warning float-right" style="margin-left:10px;"  v-on:click="showComponent('assignParent')">Asignar Acudiente</a>
            <a class="btn btn-warning float-right" v-on:click="showComponent('assignTeachers')">Asignar docente</a>

            <br />
            <br />
            <br />
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody v-for="(clas, t) in clases" :key="t">
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>{{ clas.clasroom }}</td>
                  <td></td>
                  <td></td>

                  <td class="float-right">
                    <a class="btn btn-sm" style="color: grey;" v-on:click="showComponent('show_docente')">
                      <i class="fa fa-eye"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div :id="'accordion' + t" class="collapse">
                      <a class="btn btn-warning" href="/docente_asignar">Docente</a>
                    </div>
                  </td>
                  <td>
                    <div :id="'accordion' + t" class="collapse">
                      <a class="btn btn-warning" href="/estudiante_asignar">Estudiante</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="modal fade" id="createZ">
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
                <form class="needs-validation" v-on:submit.prevent="createUser" novalidate>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Rol </label>
                      <div>
                        <span v-if="types==[]">Cargando...</span>
                        <select v-if="types!=[]" class="form-control" v-model="newType_user" style="background: gainsboro;" required>
                            <template v-for="(type,k_type) in types">
                                 <option :value="type.id" :key="k_type">{{type.name}}</option>
                            </template>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Nombres </label>
                      <div>
                        <input type="text" name="objetive1" class="form-control" v-model="newName" style="background: gainsboro;" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Apellidos </label>
                      <div>
                        <input type="text" name="objetive1" class="form-control" v-model="newLastName" style="background: gainsboro;" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-MENSAJES_naranja.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Correo </label>
                      <div>
                        <input type="email" name="objetive1" class="form-control" v-model="newEmail" placeholder="Ej.: usuario@servidor.com" size="30" style="background: gainsboro;" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Teléfono </label>
                      <div>
                        <input type="text" name="phone" class="form-control" style="background: gainsboro;" v-model="newPhone" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto" v-show="docente == 2">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Materia </label>
                      <div>
                        <select class="form-control" ref="seleccionado" style="background: gainsboro;" required>
                          <option value="2">Quiímica</option>
                          <option value="3">Español</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto" v-show="docente == 3">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Acudiente </label>
                      <div>
                        <input type="text" name="objetive1" class="form-control" v-model="name" style="background: gainsboro;" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto" v-show="docente == 2">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Experiencia </label>
                      <div>
                        <input type="text" name="objetive1" class="form-control" v-model="name" style="background: gainsboro;" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Número de Identificación </label>
                      <div>
                        <input type="text" name="id_number" class="form-control" maxlength="15" v-model="newId_number" style="background: gainsboro;" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Foto </label>
                      <div>
                        <input type="file" name="picture" class="form-control" accept="image/*" style="background: gainsboro;" @change="onFlieChange" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Nombre de usuario </label>
                      <div>
                        <input type="text" name="objetive1" class="form-control" v-model="newUserName" style="background: gainsboro;" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Contraseña </label>
                      <div>
                        <input type="password" name="objetive1" class="form-control" v-model="newPassword" style="background: gainsboro;" required />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-8 text-center mx-auto">
                      <label for="name"> <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt />Dirección </label>
                      <div>
                        <input type="text" name="address" id="validationDefault03" class="form-control" style="background: gainsboro;" v-model="newAddress" required />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-warning" value="Guardar" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="showSection === 'uploadUsers'">
    <importar-adm :back="showComponent"></importar-adm>
  </div>

  <div v-else-if="showSection === 'assignStudents'">
    <aestudiante-adm :back="showComponent"></aestudiante-adm>
  </div>

  <div v-else-if="showSection === 'assignParent'">
    <aparent-adm :back="showComponent"></aparent-adm>
  </div>

  <div v-else-if="showSection === 'assignTeachers'">
    <adocente-adm :back="showComponent"></adocente-adm>
  </div>

  <div v-else-if="showSection === 'show_docente'">
    <docente-adm :back="showComponent"></docente-adm>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        types: [],
        clases: [],
        allowedExtensions: ["jpg", "jpeg", "png"],
        descripcion: "",
        logro: "",
        name: "",
        fechaE: "",
        fechaR: "",
        id_act: "",
        errors: [],
        fillS: [],
        docente: "",
        newName: "",
        newLastName: "",
        newPassword: "",
        newEmail: "",
        newUserName: "",
        newType_user: "",
        newAddress: "",
        newPicture: [],
        newPhone: "",
        newId_number: "",
        inputs: [
          {
            name: "",
          },
        ],
        showSection: 'inicio'
      };
    },
    created() {},
    mounted() {
      var urlr = "getClassroom";
      axios.get(urlr).then((response) => {
        this.clases = response.data;
      });
      axios.get("/types").then((response) => {
        this.types = response.data;
      });
      console.log("Component mounted.");
    },
    methods: {
      showComponent(data){
        this.showSection = data;
      },
      getNames() {
        window.location = "/salon_adm";
      },
      editNames(clas) {
        $("#createZ").modal("show");
      },
      createUser() {
        var url = "users_save";

        axios
          .post(url, {
            name: this.newName,
            last_name: this.newLastName,
            password: this.newPassword,
            user_name: this.newUserName,
            email: this.newEmail,
            type_user: this.newType_user,
            address: this.newAddress,
            picture: this.newPicture,
            phone: this.newPhone,
            id_number: this.newId_number,
          })
          .then((response) => {
            this.newName = "";
            this.newLastName = "";
            this.newPassword = "";
            this.newEmail = "";
            this.newUserName = "";
            this.newType_user = "";
            this.newAddress = "";
            this.newPicture = "";
            this.newPhone = "";
            this.newId_number = "";
            this.errors = [];
            toastr.success("Nuevo usuario creado");
            this.getNames();
          })
          .catch((error) => {
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

            axios.post("/img_user", data).then((response) => {
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
          confirmButtonText: "Ok",
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
        if (this.validateSize(filesize) && this.validateExtension(extension)) {
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
            file_name: message.file_name,
          });
          console.log(message.file_path);
        }
      },
      chooseFile() {
        $("#file").click();
      },
    },
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

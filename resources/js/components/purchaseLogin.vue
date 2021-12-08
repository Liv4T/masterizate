<template>
<div class="container">
 <div class="row justify-content-center margin-top-20">
    <div class="col-md-4 col-lg-3">
      <div class="card">
        <div class="row">
            <div class="col-md-12 text-center">
                <h4>Ingresar</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10 col-md-10">
                <form onSubmit="return false;">
                    <div class="form-group">
                        <label><small class="label-required">*</small>Usuario</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                    </svg>
                                </span>
                            </div>
                            <input type="text" class="form-control" v-model="loginForm.username">
                        </div>
                    </div>
                    <div class="form-group">
                        <label><small class="label-required">*</small>Contraseña</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
                                        <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                                    </svg>
                                </span>
                            </div>
                            <input type="password" class="form-control" v-model="loginForm.password">
                        </div>
                    </div>
                    <div class="form-group content-button">
                        <button class="btn btn-Azul" @click="LoginEvent()" :disabled="!LoginValidForm()">Continuar con el pago</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card" >
        <div class="row">
            <div class="col-md-12 text-center">
                <h4>Crear cuenta</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10 col-md-10">
                 <form onSubmit="return false;">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Usuario</label>
                            <input type="text" class="form-control" v-model="registerForm.username">
                        </div>
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Contraseña</label>
                            <input type="password" class="form-control"  v-model="registerForm.password">
                        </div>
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Confirmar contraseña</label>
                            <input type="password" class="form-control"  v-model="registerForm.password_confirm">
                            <small v-if="registerForm.password_confirm && registerForm.password_confirm!=registerForm.password" class="form-text text-error">Contraseñas deben ser iguales</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label><small class="label-required">*</small>Identificación</label>
                            <input type="text" class="form-control" v-model="registerForm.identification">
                        </div>
                        <div class="form-group col-md-6">
                            <label><small class="label-required">*</small>Foto</label>
                            <input type="file" name="picture" class="form-control" accept="image/*" @change="onFlieChange" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Nombres</label>
                            <input type="text" class="form-control" v-model="registerForm.names">
                        </div>
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Apellidos</label>
                            <input type="text" class="form-control" v-model="registerForm.lastnames" >
                        </div>
                        <div class="form-group col-md-4">
                            <label><small class="label-required">*</small>Teléfono</label>
                            <input type="text" class="form-control" v-model="registerForm.cellphone" >
                            <small v-if="registerForm.cellphone && !validCellphone(registerForm.cellphone)" class="form-text text-error">Número de celular inválido</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label><small class="label-required">*</small>Correo electrónico</label>
                            <input type="email" class="form-control"  v-model="registerForm.email"  >
                            <small v-if="registerForm.email && !validEmail(registerForm.email)" class="form-text text-error">Correo inválido</small>
                        </div>
                        <div class="form-group col-md-6">
                            <label><small class="label-required">*</small>Dirección</label>
                            <input type="text" class="form-control"  v-model="registerForm.address"  >
                            <small v-if="registerForm.address && !validEmail(registerForm.address)" class="form-text text-error">Correo inválido</small>
                        </div>
                        <div class="form-check col-md-6" >
                            <input type="checkbox"  id="check_term" v-model="registerForm.politics_accepted">
                            <label class="form-check-label" for="check_term"><small class="label-required">*</small>Acepta políticas, terminos y condiciones?</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group content-button col-md-12">
                            <button v-if="!events.register_loading" class="btn btn-Azul" @click="RegisterEvent()" :disabled="!RegisterValidForm()">Continuar con el pago</button>
                            <button v-if="events.register_loading" class="btn btn-primary"  :disabled="true">Registrando...</button>
                        </div>
                    </div>

                 </form>
            </div>
        </div>

      </div>
    </div>
  </div>
</div>

</template>
<script>

export default {
    props: ["plan_type","aut","voucher","module_id","payment_code"],
    data() {
        return {
            loginForm:{
                username:'',
                password:''
            },
            registerForm:{
                username:'',
                password:'',
                password_confirm:'',
                document_type:1,
                identification:'',
                names:'',
                lastnames:'',
                cellphone:'',
                email:'',
                address:'',
                politics_accepted:false
            },
            allowedExtensions: ["pdf", "jpg", "jpeg", "png", "doc", "mp4"],
            document_types:[],
            events:{
                register_loading:false
            }
        };
    },
    mounted(){
        if(this.aut>0)
        {
            this.navigateToResumen();
        }

        // axios.get(`/api/document-type`).then((response) => {
        //     this.document_types=response.data;
        // });
    },
    methods:{
        LoginValidForm()
        {
            return this.loginForm.username && this.loginForm.password;
        },
        LoginEvent()
        {
            axios.post(`/login/client/web`,{user_name:this.loginForm.username,password:this.loginForm.password}).then((response) => {
                 this.navigateToResumen();
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
         * find extension of uploaded file
         * @param  {string} filename
         * @return {string}
         */
        findExtension(filename) {
            return filename.split(".").pop().toLowerCase();
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
                toastr.error(this.message, this.title);
                //this.showError(this.title, this.message);
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
                toastr.error(this.message, this.title);
                //this.showError(this.title, this.message);
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
        RegisterValidForm()
        {
            console.log('entramos a validar form');
            let password_confirm=this.registerForm.password == this.registerForm.password_confirm;
            let mailValid=this.validEmail(this.registerForm.email);
            let cellphoneValid=this.validCellphone(this.registerForm.cellphone);
            return this.registerForm.username
                && this.registerForm.password
                && password_confirm
                && this.registerForm.identification
                && this.registerForm.names
                && this.registerForm.lastnames
                && this.registerForm.address
                && cellphoneValid
                && mailValid
                && this.registerForm.politics_accepted;
        },
        RegisterEvent()
        {
            this.events.register_loading=true;
            var url = "/users_save";
            axios
        .post(url, {
          name: this.registerForm.names,
          last_name: this.registerForm.lastnames,
          password: this.registerForm.password,
          user_name: this.registerForm.username,
          email: this.registerForm.email,
          type_user: "10",
          address: this.registerForm.address,
          picture: this.newPicture,
          phone: this.registerForm.cellphone,
          id_number: this.registerForm.identification,
        })
        .then((response) => {
                setTimeout(()=>{
                    this.loginForm.username=this.registerForm.username;
                    this.loginForm.password=this.registerForm.password;
                    this.events.register_loading=false;
                    this.LoginEvent();

                },2000)

            },(error)=>{

                this.events.register_loading=false;
                if(error.response.data.message=='The given data was invalid.')
                {
                    toastr.error("Se presento un error al procesar su solicitud. Por favor intente más tarde.");
                }
                else if(error.response.data.message.includes('1062 Duplicate entry')){
                    toastr.error("Usuario ya se encuentra registrado en el sistema, ingrese otro nombre de usuario...");
                }
                else if(error.response.data.message){
                    toastr.error(error.response.data.message);
                }

            });

        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validCellphone: function (cellphone) {
            var re = /^[3][0-9][0-9]*/;
            return re.test(cellphone) && cellphone.length==10;
        },
        navigateToResumen()
        {
            var urlLocation= decodeURI(window.location);
            let splitUrl=urlLocation.split("/");
            let last=atob(splitUrl[splitUrl.length-1]);
            let model=JSON.parse(last);
            console.log(model.plan_name);
            location.href=`/compra/plan/${model.plan_name}/${model.code}/resumen`;
        }


    }
};
</script>
<style>
*{font-family: 'Montserrat';}
h4{margin-top:20px;}
.border-bottom-1{border-bottom:1px solid #818181;}
form{margin-top:20px;padding:10px;}
.form-check-label{width:90%}
</style>

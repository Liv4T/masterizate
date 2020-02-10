<template>
<auto-responsive>
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
  <div class="back">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header">Registro</h3>
          <form class="needs-validation" v-on:submit.prevent="createNames" novalidate>
            <form-wizard title subtitle>
              <tab-content title="Datos personales" icon="fas fa-user">
                <div class="card-body">
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        v-model="newName"
                        class="form-control"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="last_name">Apellido</label>
                      <input
                        type="text"
                        name="last_name"
                        class="form-control"
                        v-model="newLastName"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Email</label>
                      <input
                        type="text"
                        name="email"
                        class="form-control"
                        v-model="newEmail"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Nombre de Usuario</label>
                      <input
                        type="text"
                        name="user_name"
                        class="form-control"
                        maxlength="20"
                        v-model="newUserName"
                        required
                      />
                      <div
                        class="invalid-feedback"
                      >Please fill out this field, the user name may not be greater than 20 characters.</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Fecha de Nacimiento</label>
                      <input
                        type="date"
                        name="birthday"
                        class="form-control"
                        v-model="newBirthday"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Edad</label>
                      <input
                        type="text"
                        name="age"
                        id="disabledTextInput"
                        class="form-control"
                        :placeholder="age"
                        v-model="newAge"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for>Categorias</label>
                      <select2
                        :options="categories"
                        v-model="Category"
                        @input="getSubcategories"
                        required
                      ></select2>
                    </div>
                    <div class="col">
                      <label for>Subcategorias</label>
                      <select2 :options="subcategories" v-model="newId_subcategories" required></select2>
                    </div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Información adicional" icon="fas fa-id-card">
                <div class="form-group row">
                  <div class="col">
                    <label for>Tipo de Usuario</label>
                    <select2 :options="TypeUsers" v-model="newType_user" required></select2>
                  </div>
                  <div class="col">
                    <label for="name">Teléfono</label>
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      v-model="newPhone"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Número de Identificación</label>
                    <input
                      type="text"
                      name="id_number"
                      class="form-control"
                      maxlength="15"
                      v-model="newId_number"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Foto</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Contraseña</label>
                    <input
                    id="password1"
                      type="password"
                      class="form-control"
                      v-model="newPassword"
                      required
                    />
                  </div>
                  <div class="col">
                    <label for="name">Confirmar contraseña</label>
                    <input type="password"  id="password2" class="form-control" required />
                    <p class="alertaPass" id="validate-status"></p>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for>Pais</label>
                    <select2 :options="myCountries" v-model="newCountry" required></select2>
                  </div>
                  <div class="col">
                    <label for="name">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      id="validationDefault03"
                      class="form-control"
                      v-model="newAddress"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" required />
                    <label
                      class="form-check-label"
                      for="gridCheck"
                    >Para todos los efectos legales, certifico que todas las respuestas e información anotadas por mí, en el presente formulario son veraces (C. S. T.) Art. 62 Núm. 1° Régimen Laboral Colombiano § 1057 (Legis).</label>
                  </div>
                </div>
                <div class="modal-footer">
                  <input type="submit" class="btn btn-primary" value="Guardar" />
                </div>
              </tab-content>
            </form-wizard>
          </form>
        </div>
      </div>
    </div>
  </div>
</auto-responsive>
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
$(document).ready(function() {
    $("#password2").keyup(validate);
});

function validate() {
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();

    if (password1 == password2) {
        $("#validate-status").text("");
    } else {
        $("#validate-status").text("La contraseña no coincide");
    }
}
import AutoResponsive from "autoresponsive-vue";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
Vue.use(AutoResponsive);
import "toastr/toastr.scss";
 export default {
         
        data() {
            return { 
        names: [],
        newName: '',
        newLastName: '',
        newAge: '',
        newBirthday: '',
        newPassword: '',
        newEmail: '',
        newUserName: '',
        newId_subcategories: '',
        newType_user: '',
        newAddress: '',
        newPicture: '',
        newPhone:'',
        newId_number:'',
        newCountry:'',
        fillNames: {'id': '', 'name': '','last_name': '', 'age':'', 'birthday':'','password': '','email': '', 'user_name': '','id_categories': '','id_subcategories': '','type_user': '','address': '','picture': '','phone': '', 'id_number': '','country': ''},
        myCountries:['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','The Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo','Costa Rica','Cote d’Ivoire','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor-Leste)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','The Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Sudan South','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'],
        errors: [],
        Category: '',
        Subcategory: '',
        Type: '',
        newContry:'',
        categories: [],
        subcategories: [],
        TypeUsers: [],
        edad:'',
        offset: 3
        }
    },
    computed:{
        age() {
            const birthday = new Date(this.newBirthday);
            const dateNow = new Date();
    
            if(dateNow.getMonth() + 1< birthday.getMonth() + 1){
                 this.edad = dateNow.getFullYear() - birthday.getFullYear() - 1;
            } else if (dateNow.getMonth() + 1 == birthday.getMonth() + 1){
              if(dateNow.getDate()<birthday.getDate()){
                console.log(dateNow.getDate()<birthday.getDate())
                  this.edad = dateNow.getFullYear() - birthday.getFullYear() - 1;
              } else {
                  this.edad = dateNow.getFullYear() - birthday.getFullYear();
              }
            } else {
                this.edad = dateNow.getFullYear() - birthday.getFullYear();
              }
              if(this.edad) return `${this.edad}`;
        }
    },
    mounted() {
        var urlsel = 'GetCategories';
        axios.get(urlsel).then((response)=>{
            this.categories = response.data;
        });
        var urlsel = 'GetTypeU';
        axios.get(urlsel).then((response)=>{
            this.TypeUsers = response.data;
        });
        console.log("Component mounted.");
    },
    methods: { //metodos del CRUD
           getNames(){
                window.location = "/login";
            },
            createNames() {
                console.log('sent form')
                console.log(this.newPicture);
                var url = 'users_save';
                this.newAge= this.age;
                console.log('send info user url, '+url);
                 
                axios.post(url, {
                    name: this.newName,
                    last_name: this.newLastName,
                    age: this.newAge,
                    birthday: this.newBirthday,
                    password: this.newPassword,
                    user_name: this.newUserName,
                    email : this.newEmail,
                    id_categories: this.Category,
                    id_subcategories: this.newId_subcategories,
                    type_user: this.newType_user,
                    address: this.newAddress,
                    picture: this.newPicture,
                    phone: this.newPhone,
                    id_number: this.newId_number,
                    country: this.newCountry,
                }).then(response => {
                    this.newName = '';
                    this.newLastName = '';
                    this.newPassword = '';
                    this.newAge = '';
                    this.newBirthday = '';
                    this.newEmail = '';
                    this.newUserName = '';
                    this.newId_subcategories = '';
                    this.newType_user = '';
                    this.newAddress = '';
                    this.newPicture = '';
                    this.newPhone = '';
                    this.newId_number = '';
                    this.newCountry= '';
                    this.errors = [];
                    toastr.success('New user created successfully');
                    this.getNames();
                    }).catch(error => {
                    this.errors = error.response.data
                });
                
            },
            getSubcategories(){
                var urlse = 'GetSubcategories/'+this.Category;
                axios.get(urlse).then((response)=>{
                this.subcategories = response.data;  
                });
            },
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                  return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var newPicture = new Image();
                var reader = new FileReader();
                var vm = this;

                reader.onload = (e) => {
                  vm.newPicture = e.target.result;
                };
                reader.readAsDataURL(file);
            },           
            /*createNames() {
                console.log('sent form')
                console.log(this.user.newPicture);
                var url = 'users_save';
                this.user.newAge= this.age;
                console.log('send info user url, '+url);
                console.log(this.user);
                axios.post(url, this.user).then(response => toastr.success('New user created successfully'))
                .catch(error => {
                    this.errors = error.response.data
                });
            },*/          
    }
 }
</script>
<style>
.alertaPass {
    color: red;
}
</style>
<template>
   <div id="crud" class="row">
       <div class="col-sm-12">
            <h1 class="page-header">CRUD Usuarios</h1>
        </div>
        <div class="col-sm-7">
            <a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#createu">Agregar</a>
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Identificación</th>
                        <th colspan="2">
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="name in names">
                        <td width="10px">{{ name.id }}</td>
                        <td>{{ name.name }}</td>
                        <td>{{ name.last_name }}</td>
                        <td>{{ name.id_number }}</td>
                        <td width="10px">
                            <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editNames(name)">Editar</a>
                        </td>
                        <td width="10px">
                            <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteNames(name)">Eliminar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="createu">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Crear</h4>
                        <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                        </button>  
                    </div>
                    <div class="modal-body">
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Nombre</label>
                                <input type="text" name="name" v-model="newName" v-validate="'{required: true, min: 2}'" class="form-control">
                               
                            </div>
                            <div class="col"> 
                                <label for="last_name">Apellido</label>
                                <input type="text" name="last_name" class="form-control" v-model="newLastName">
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Email</label>
                                <input type="text" name="email" class="form-control" v-model="newEmail">
                            </div>
                            <div class="col"> 
                                <label for="name">Nombre de Usuario</label>
                                <input type="text" name="user_name" class="form-control" v-model="newUserName">
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Fecha de Nacimiento</label>
                                <input type="date" name="birthday" class="form-control" v-model="newBirthday">
                            </div>
                            <div class="col"> 
                                <label for="name">Edad</label>
                                <input type="text" name="age" id="disabledTextInput" class="form-control" :placeholder= "age" v-model="newAge" disabled>
                             </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="">Categorias:</label>
                                <select2 :options="categories" v-model="Category" v-on:change="newId_categories" @input="getSubcategories"></select2>
                            </div>
                            <div class="col"> 
                                <label for="">Subcategorias:</label>
                                <select2 :options="subcategories" v-model="newId_subcategories"></select2>
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="">Tipo de Usuario:</label>
                                <select2 :options="TypeUsers" v-model="newType_user"></select2>
                            </div>
                            <div class="col"> 
                                <label for="name">Teléfono</label>
                                <input type="text" name="phone" class="form-control" v-model="newPhone">
                            </div>
                        </div>
                       <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Número de Identificacion</label>
                                <input type="text" name="id_number" class="form-control" maxlength="15" v-model="newId_number">
                            </div>
                            <div class="col"> 
                                <label for="name">Foto</label>
                                <input type="file" name="picture" class="form-control" @change="onFileChange">
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Contraseña</label>
                                <input type="password" name="password" class="form-control" v-model="newPassword">
                            </div>
                            <div class="col"> 
                                <label for="name">Confirmar contraseña</label>
                                <input type="password" name="Cpassword" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Dirección</label>
                                <input type="text" name="address" class="form-control" v-model="newAddress">
                            </div>
                        </div>
                        <span v-for="error in errors" class="text-danger">{{ error }}</span>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" @click="createNames" class="btn btn-primary" value="Guardar"> 
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editu">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar</h4>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>  
                    </div>
                    <div class="modal-body">
                        <div class="form-group row">  
                            <div class="col">
                            <img :src="fillNames.picture" class="rounded float-right" height="70" width="90">
                        </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Nombre</label>
                                <input type="text" name="name" class="form-control" v-model="fillNames.name">
                            </div>
                            <div class="col"> 
                                <label for="name">Apellido</label>
                                <input type="text" name="last_name" class="form-control" v-model="fillNames.last_name">
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Fecha de Nacimiento</label>
                                <input type="date" name="birthday" class="form-control" v-model="fillNames.birthday">
                            </div>
                            <div class="col"> 
                                <label for="name">Edad</label>
                                <input type="text" name="age" class="form-control" v-model="fillNames.age" :placeholder= "age" disabled>
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Categoria</label>
                                <input type="text" name="id_categories" class="form-control" v-model="fillNames.id_categories">
                            </div>
                            <div class="col"> 
                                <label for="name">Subcategoria</label>
                                <input type="text" name="id_subcategories" class="form-control" v-model="fillNames.id_subcategories">
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Tipo de Usuario</label>
                                <input type="text" name="type_user" class="form-control" v-model="fillNames.type_user">
                            </div>
                            <div class="col"> 
                                <label for="name">Dirección</label>
                                <input type="text" name="address" class="form-control" v-model="fillNames.address">
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Teléfono</label>
                                <input type="text" name="phone" class="form-control" v-model="fillNames.phone">
                            </div>
                            <div class="col"> 
                                <label for="name">Número de Identificacion</label>
                                <input type="text" name="id_number" class="form-control" v-model="fillNames.id_number">
                            </div>
                        </div>
                        <div class="form-group row"> 
                            <div class="col"> 
                                <label for="name">Email</label>
                                <input type="text" name="email" class="form-control" v-model="fillNames.email">
                            </div>
                            <div class="col"> 
                                <label for="name">Foto</label>
                                <input type="file" name="picture" class="form-control"  v-on:change="onFileChange">
                            </div>
                        </div>
                         <span v-for="error in errors" class="text-danger">{{ error }}</span>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" @click="updateNames" class="btn btn-primary" value="Actualizar">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "toastr/toastr.scss";
    import VeeValidate from 'vee-validate';      
    Vue.use(VeeValidate);

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
        fillNames: {'id': '', 'name': '','last_name': '', 'age':'', 'birthday':'','password': '','email': '', 'user_name': '','id_categories': '','id_subcategories': '','type_user': '','address': '','picture': '','phone': '', 'id_number': ''},
        errors: [],
        Category: '',
        Subcategory: '',
        Type: '',
        categories:[],
        subcategories:[],
        TypeUsers: [],
        edad:'',
        offset: 3
        }
    },
    created() {
    this.getNames();
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
           getNames(page){
                var urlUsers = 'users?page='+page;
                axios.get(urlUsers).then(response=> {
                    this.names = response.data.users.data,
                    this.pagination = response.data.pagination
                });
            },
            editNames(name){
                this.fillNames.id = name.id;
                this.fillNames.name = name.name;
                this.fillNames.last_name = name.last_name;
                this.fillNames.age = name.age;
                this.fillNames.birthday = name.birthday;
                this.fillNames.password = name.password;
                this.fillNames.email = name.email;
                this.fillNames.user_name = name.user_name;
                this.fillNames.id_categories = name.id_categories;
                this.fillNames.id_subcategories = name.id_subcategories;
                this.fillNames.type_user = name.type_user;
                this.fillNames.address = name.address;
                this.fillNames.picture = name.picture;
                this.fillNames.phone = name.phone;
                this.fillNames.id_number = name.id_number;
                $('#editu').modal('show');
            },
            updateNames(id) {
                var url = 'users/'+ id;
                axios.put(url, this.fillNames).then(response=> {
                    this.getNames();
                    this.fillNames = {'id': '', 'name': '','last_name': '','age':'', 'birthday':'', 'password': '','email': '', 'user_name': '','id_categories': '','id_subcategories': '','type_user': '','address': '','picture': '','phone': '', 'id_number': ''};
                    this.errors = [];
                    $('#editu').modal('hide');
                    toastr.success('Usuario editado con exito');
                    }).catch(error => {
                    this.errors = error.response.data
                    });
            },
            deleteNames(name) {
                var url = 'users/' + name.id;
                axios.delete(url).then(response=>{ // eliminamos
                    this.getNames(); //listamos
                    toastr.success('Eliminado correctamente');//mensaje
                });
            },
            createNames() {
                var url = 'users';
               this.newAge= this.age;
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
                    picture: this.newAddress,
                    phone: this.newPhone,
                    id_number: this.newId_number,
                }).then(response => {
                    this.getNames();
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
                    this.errors = [];
                    $('#createu').modal('hide');
                    toastr.success('Nuevo usuario Creado con exito');
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
            handleSubmit(e) {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
                    }
                });
             }
                     
    }
 }

</script>
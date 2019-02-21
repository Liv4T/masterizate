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
                        <label for="name">Nombre</label>
                        <input type="text" name="name" class="form-control" v-model="newName">
                        <label for="name">Apellido</label>
                        <input type="text" name="last_name" class="form-control" v-model="newLastName">
                        <label for="name">Fecha de Nacimiento</label>
                        <input type="date" name="birthday" class="form-control" v-model="newBirthday">
                        <label for="name">Edad</label>
                        <input type="text" name="age" class="form-control" v-model="newAge">
                        <label for="">Categorias:</label>
                        <div>
                        <select2 :options="categories" v-model="Category" v-on:change="newId_categories" @input="getSubcategories"></select2>
                        </div>
                        <label for="">Subcategorias:</label>
                        <div>
                        <select2 :options="subcategories" v-model="newId_subcategories"></select2>
                        </div>
                        <label for="">Tipo de Usuario:</label>
                        <div>
                        <select2 :options="TypeUsers" v-model="newType_user"></select2>
                        </div>
                        <!--<label for="name">Categoria</label>
                        <input type="text" name="id_categories" class="form-control" v-model="newId_categories">
                        <label for="name">Subcategoria</label>
                        <input type="text" name="id_subcategories" class="form-control" v-model="newId_subcategories">
                        <label for="name">Tipo de Usuario</label>
                        <input type="text" name="type_user" class="form-control" v-model="newType_user">-->
                        <label for="name">Dirección</label>
                        <input type="text" name="address" class="form-control" v-model="newAddress">
                        <label for="name">Teléfono</label>
                        <input type="text" name="phone" class="form-control" v-model="newPhone">
                        <label for="name">Número de Identificacion</label>
                        <input type="text" name="id_number" class="form-control" v-model="newId_number">
                        <label for="name">Email</label>
                        <input type="text" name="email" class="form-control" v-model="newEmail">
                        <label for="name">Contraseña</label>
                        <input type="text" name="password" class="form-control" v-model="newPassword">
                        <label for="name">Foto</label>
                        <input type="file" name="picture" class="form-control" v-on:value="newPicture">
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
                        <img :src="fillNames.picture" class="rounded float-right" height="70" width="90">
                        <label for="name">Nombre</label>
                        <input type="text" name="name" class="form-control" v-model="fillNames.name">
                        <label for="name">Apellido</label>
                        <input type="text" name="last_name" class="form-control" v-model="fillNames.last_name">
                        <label for="name">Fecha de Nacimiento</label>
                        <input type="date" name="birthday" class="form-control" v-model="fillNames.birthday">
                        <label for="name">Edad</label>
                        <input type="text" name="age" class="form-control" v-model="fillNames.age">
                        <label for="name">Categoria</label>
                        <input type="text" name="id_categories" class="form-control" v-model="fillNames.id_categories">
                        <label for="name">Subcategoria</label>
                        <input type="text" name="id_subcategories" class="form-control" v-model="fillNames.id_subcategories">
                        <label for="name">Tipo de Usuario</label>
                        <input type="text" name="type_user" class="form-control" v-model="fillNames.type_user">
                        <label for="name">Dirección</label>
                        <input type="text" name="address" class="form-control" v-model="fillNames.address">
                        <label for="name">Teléfono</label>
                        <input type="text" name="phone" class="form-control" v-model="fillNames.phone">
                        <label for="name">Número de Identificacion</label>
                        <input type="text" name="id_number" class="form-control" v-model="fillNames.id_number">
                        <label for="name">Email</label>
                        <input type="text" name="email" class="form-control" v-model="fillNames.email">
                        <label for="name">Contraseña</label>
                        <input type="text" name="password" class="form-control" v-model="fillNames.password">
                        <label for="name">Foto</label>
                        <input type="file" name="picture" class="form-control" v-on value="fillNames.picture">
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
        newId_categories: '',
        newId_subcategories: '',
        newType_user: '',
        newAddress: '',
        newPicture: '',
        newPhone:'',
        newId_number:'',
        fillNames: {'id': '', 'name': '','last_name': '', 'age':'', 'birthday':'','password': '','email': '','id_categories': '','id_subcategories': '','type_user': '','address': '','picture': '','phone': '', 'id_number': ''},
        errors: [],
        Category: '',
        Subcategory: '',
        Type: '',
        categories:[],
        subcategories:[],
        TypeUsers: [],
        offset: 3
        }
    },
    created() {
    this.getNames();
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
                    this.fillNames = {'id': '', 'name': '','last_name': '','age':'', 'birthday':'', 'password': '','email': '','id_categories': '','id_subcategories': '','type_user': '','address': '','picture': '','phone': '', 'id_number': ''};
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
                axios.post(url, {
                    name: this.newName,
                    last_name: this.newLastName,
                    age: this.newAge,
                    birthday: this.newBirthday,
                    password: this.newPassword,
                    email : this.newEmail,
                    id_categories: this.newId_categories,
                    id_subcategories: this.newId_subcategories,
                    type_user: this.newType_user,
                    address: this.newAddress,
                    picture: this.newPicture,
                    phone: this.newPhone,
                    id_number: this.newId_number
                }).then(response => {
                    this.getNames();
                    this.newName = '';
                    this.newLastName = '';
                    this.newPassword = '';
                    this.newAge = '';
                    this.newBirthday = '';
                    this.newEmail = '';
                    this.newId_categories = '';
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
        }
    }
 }
</script>
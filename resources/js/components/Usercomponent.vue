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
                    <td width="10px">@{{ name.id }}</td>
                    <td>@{{ name.name }}</td>
                    <td>@{{ name.last_name }}</td>
                    <td>@{{ name.id_number }}</td>
                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editNames(name)">Editar</a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteNames(name)">Eliminar</a>
                    </td>
                </tr>
            </tbody>
        </table>
        @include('createu')
        @include('editu')
    </div>
</template>
<script>
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
        errors: []
      
        }
    },
     created() {
    this.getNames();
  },
    mounted() {
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
                    //toastr.success('Usuario editado con exito');
                   // }).catch(error => {
                  //      this.errors = error.response.data
                    });
            },
    
            deleteNames(name) {
                var url = 'users/' + name.id;
                axios.delete(url).then(response=>{ // eliminamos
                    this.getNames(); //listamos
                   // toastr.success('Eliminado correctamente');//mensaje
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
                   // toastr.success('Nuevo usuario Creado con exito');
               // }).catch(error => {
                   // this.errors = error.response.data
               });
            }
    };
</script>

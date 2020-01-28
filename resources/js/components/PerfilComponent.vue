<template>
    <div class="custom-card">
        <form class="needs-validation" novalidate>
            <div class="card-header">
                <h4>Mi perfil</h4>
            </div>
            <div class="card-body">
                <div class="form-group row">
                    <div class="col">
                        <img
                            src="../assets/img/avatar.png"
                            class="rounded float-right"
                            height="70"
                            width="90"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            v-model="fillNames.name"
                        />
                        <div class=" invalid-feedback ">
                            Please fill out this field
                        </div>
                    </div>
                    <div class="col">
                        <label for="name">Apellido</label>
                        <input
                            type="text"
                            name="last_name"
                            class="form-control"
                            v-model="fillNames.last_name"
                        />
                        <div class=" invalid-feedback ">
                            Please fill out this field
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="name">Email</label>
                        <input
                            type="text"
                            name="email"
                            class="form-control"
                            v-model="fillNames.email"
                        />
                        <div class=" invalid-feedback ">
                            Please fill out this field
                        </div>
                    </div>
                    <div class="col">
                        <label for="name">Nombre de Usuario</label>
                        <input
                            type="text"
                            name="user_name"
                            class="form-control"
                            maxlength="20"
                            v-model="fillNames.user_name"
                            required
                        />
                        <div class=" invalid-feedback ">
                            Please fill out this field, the user name may not be
                            greater than 20 characters.
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="name">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            name="birthday"
                            class="form-control"
                            v-model="fillNames.birthday"
                        />
                        <div class=" invalid-feedback ">
                            Please fill out this field
                        </div>
                    </div>
                    <div class="col">
                        <label for="name">Edad</label>
                        <input
                            type="text"
                            name="age"
                            id="disabledTextInput"
                            class="form-control"
                            v-model="fillNames.age"
                            :placeholder="age"
                            disabled
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="name">Categoria</label>
                        <input
                            type="text"
                            name="id_categories"
                            class="form-control"
                            v-model="fillNames.id_categories"
                        />
                        <div class=" invalid-feedback "></div>
                    </div>
                    <div class="col">
                        <label for="name">Subcategoria</label>
                        <input
                            type="text"
                            name="id_subcategories"
                            class="form-control"
                            v-model="fillNames.id_subcategories"
                        />
                        <div class=" invalid-feedback "></div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="name">Tipo de Usuario</label>
                        <input
                            type="text"
                            name="type_user"
                            class="form-control"
                            v-model="fillNames.type_user"
                        />
                        <div class=" invalid-feedback "></div>
                    </div>
                    <div class="col-md-6">
                        <label for="name">Foto</label>
                        <input
                            type="file"
                            name="picture"
                            class="form-control"
                            v-on:change="onFileChange"
                        />
                        <!--<div class = " invalid-feedback ">Please fill out this field </div>-->
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="name">Teléfono</label>
                        <input
                            type="text"
                            name="phone"
                            class="form-control"
                            v-model="fillNames.phone"
                        />
                        <div class=" invalid-feedback ">
                            Please fill out this field
                        </div>
                    </div>
                    <div class="col">
                        <label for="name">Número de Identificación</label>
                        <input
                            type="text"
                            name="id_number"
                            class="form-control"
                            v-model="fillNames.id_number"
                        />
                        <div class=" invalid-feedback ">
                            Please fill out this field
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        <label for="">Pais</label>
                        <select2
                            :options="myCountries"
                            v-model="fillNames.country"
                            required
                        ></select2>
                    </div>
                    <div class="col-md-6">
                        <label for="name">Dirección</label>
                        <input
                            type="text"
                            name="address"
                            class="form-control"
                            v-model="fillNames.address"
                        />
                        <div class=" invalid-feedback ">
                            Please fill out this field
                        </div>
                    </div>
                </div>
                <!--<span v-for="error in errors" class="text-danger">{{ error }}</span>-->
            </div>
            <div class="modal-footer">
                <input
                    type="submit"
                    @click="updateNames"
                    class="btn btn-primary"
                    value="Actualizar"
                />
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fillNames: {
                id: "",
                name: "",
                last_name: "",
                age: "",
                birthday: "",
                password: "",
                email: "",
                user_name: "",
                id_categories: "",
                id_subcategories: "",
                type_user: "",
                address: "",
                picture: "",
                phone: "",
                id_number: "",
                country: ""
            }
        };
    },
    methods: {
        //metodos del CRUD
        getNames(name) {
            var urlUsers = "users" + name;
            axios.get(urlUsers).then(response => {
                this.names = response.data;
            });
        },
        editNames(name) {
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
            this.fillNames.country = name.country;
            $("#editu").modal("show");
        }
    }
};
</script>

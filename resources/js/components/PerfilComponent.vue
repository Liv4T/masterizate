<template>
    <div class="row justify-content-center">
        <div class="col-sm-10">
            <div class="custom-card text-center">
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
                            <div class="col" align="right">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    class="inputfile"
                                    @change="onFileChange"
                                />
                                <label for="file">Cambiar</label>
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
                                <label for="name"
                                    >Número de Identificación</label
                                >
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
                            <div class="col">
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
        </div>
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
    computed: {
        age() {
            const birthday = new Date(this.fillNames.birthday);
            const dateNow = new Date();

            if (dateNow.getMonth() + 1 < birthday.getMonth() + 1) {
                this.edad = dateNow.getFullYear() - birthday.getFullYear() - 1;
            } else if (dateNow.getMonth() + 1 == birthday.getMonth() + 1) {
                if (dateNow.getDate() < birthday.getDate()) {
                    console.log(dateNow.getDate() < birthday.getDate());
                    this.edad =
                        dateNow.getFullYear() - birthday.getFullYear() - 1;
                } else {
                    this.edad = dateNow.getFullYear() - birthday.getFullYear();
                }
            } else {
                this.edad = dateNow.getFullYear() - birthday.getFullYear();
            }
            if (this.edad) return `${this.edad}`;
        }
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
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var newPicture = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.newPicture = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
};
</script>
<style>
.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}
.inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: orangered;
    display: inline-block;
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: rgb(218, 94, 49);
}
.inputfile + label {
    cursor: pointer; /* "hand" cursor */
}
</style>

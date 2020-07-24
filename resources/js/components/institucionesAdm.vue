<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Instituciones</h3>
                    <div class="card-body">
                        <a class="btn btn-warning" href="/instituciones_crear"
                            >Crear</a
                        >

                        <br />
                        <br />
                        <table
                            class="table table-responsive-xl table-hover table-striped center"
                        >
                            <tbody v-for="insti in institutions">
                                <tr
                                    data-toggle="collapse"
                                    data-target="#accordion"
                                    class="clickable"
                                >
                                    <td>{{ insti.name }}</td>
                                    <td></td>
                                    <td></td>

                                    <td class="float-right">
                                        <a
                                            class="btn btn-sm"
                                            href="#"
                                            style="color: grey;"
                                        >
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a
                                            class="btn btn-sm"
                                            href="#"
                                            style="color: grey;"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </a>

                                        <a
                                            class="btn btn-sm"
                                            href="#"
                                            style="color: grey;"
                                        >
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="createSalon">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="card">
                            <h3 class="card-header fondo text-center">
                                Salón
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                >
                                    <span>&times;</span>
                                </button>
                            </h3>
                            <div class="card-body">
                                <form
                                    class="needs-validation"
                                    v-on:submit.prevent
                                    novalidate
                                >
                                    <div
                                        class="form-group row mx-auto"
                                        v-for="(input, t) in inputs"
                                        :key="t"
                                    >
                                        <div
                                            class="col-md-8 text-center mx-auto"
                                        >
                                            <label for="name">Nombre</label>
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove(t)"
                                                    v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add(t)"
                                                    v-show="
                                                        t == inputs.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="input.name"
                                                    style="background: gainsboro;"
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
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            institutions: [],
            descripcion: "",
            logro: "",
            name: "",
            fechaE: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillI: [],
            inputs: [
                {
                    name: ""
                }
            ]
        };
    },
    created() {},
    mounted() {
        var urlr = "getInstitution";
        axios.get(urlr).then(response => {
            this.institutions = response.data;
        });
        console.log("Component mounted.");
    },
    methods: {
        editNames(clas) {
            //   var urlr = "showClass/" + clas;
            //   axios.get(urlr).then(response => {
            //     this.fillS = response.data;
            //   });
            $("#createZ").modal("show");
        },
        createS(clas) {
            //   var urlr = "showClass/" + clas;
            //   axios.get(urlr).then(response => {
            //     this.fillS = response.data;
            //   });
            $("#createSalon").modal("show");
        },
        createM(clas) {
            //   var urlr = "showClass/" + clas;
            //   axios.get(urlr).then(response => {
            //     this.fillS = response.data;
            //   });
            $("#createMat").modal("show");
        },
        createG(clas) {
            //   var urlr = "showClass/" + clas;
            //   axios.get(urlr).then(response => {
            //     this.fillS = response.data;
            //   });
            $("#createGrad").modal("show");
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
<style>
.background2 {
    background: url(../assets/img/Fondo5.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
</style>

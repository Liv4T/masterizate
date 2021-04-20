<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Coordinadores</h3>
                    <div class="card-body">
                        <a
                            class="btn btn-warning"
                            href="#"
                            v-on:click.prevent="createS()"
                            >Crear Coordinador</a
                        >
                        <a class="btn btn-warning" href="/perfil_asignar"
                            >Asignar perfil</a
                        >
                        <br />
                        <br />
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Telefono</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(cord, key) in coord" :key="key">
                                <tr
                                    data-toggle="collapse"
                                    data-target="#accordion"
                                    class="clickable"
                                >
                                    <td>{{cord.name +' '+cord.last_name}}</td>
                                    <td>{{cord.phone}}</td>

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
                                            v-on:click="editCoord(cord)"
                                            style="color: grey;"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </a>

                                        <a
                                            class="btn btn-sm"
                                            v-on:click="deleteCoord(cord.id)"
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
        </div>
        <create-coord></create-coord>
        <update-coord :data="dataToEdit"></update-coord>
    </div>
</template>
<script>
export default {
    data() {
        return {
            coord:[],
            dataToEdit:[]
        };
    },
    created() {},
    mounted() {
        var urlr = "getInstitution";
        axios.get(urlr).then(response => {
            this.myOptions = response.data;
        });
        console.log("Component mounted.");

        this.getCoord();
    },
    methods: {
        getCoord(){
            axios.get('/showCoord').then((response)=>{
                this.coord = response.data;
            })
        },

        createS(clas) {
            //   var urlr = "showClass/" + clas;
            //   axios.get(urlr).then(response => {
            //     this.fillS = response.data;
            //   });
            $("#createCoord").modal("show");
        },

        deleteCoord(id){
            if (window.confirm("Desea eliminar este dato?")) {
                axios.delete(`/destroyUser/${id}`).then((response)=>{
                    toastr.success(response.data);
                    window.location = "/coordinador_adm";
                }).catch((error)=>{
                    console.log(error)
                })
            }
        },

        editCoord(data){
            this.dataToEdit = data;
            console.log(data);
            $('#updateCoord').modal('show');
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

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
                                    <th>Correo</th>
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
                                    <td>{{cord.email}}</td>

                                    <td class="float-right">
                                        <a
                                            class="btn btn-sm"
                                            v-on:click="showData(cord)"                                            
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

        <div class="modal fade" id="showCoord" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Información de Coordinador</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Nombre: </label>
                            <strong>{{dataToShow.name}}</strong>
                        </div>

                        <div class="form-group">
                            <label for="name">Apellido: </label>
                            <strong>{{dataToShow.last_name}}</strong>
                        </div>

                        <div class="form-group">
                            <label for="name">Grupo a Coordinar: </label>
                            <strong>{{dataToShow.newCoordArea}}</strong>
                        </div>

                        <div class="form-group">
                            <label for="name">Correo: </label>
                            <strong>{{dataToShow.email}}</strong>
                        </div>

                        <div class="form-group">
                            <label for="name">Telefono: </label>
                            <strong>{{dataToShow.phone}}</strong>
                        </div>

                        <div class="form-group">
                            <label for="name">Dirección: </label>
                            <strong>{{dataToShow.address}}</strong>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
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
            coord:[],
            dataToEdit:{},
            dataToShow:{}
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
            $('#updateCoord').modal('show');
        },

        showData(data){
            this.dataToShow = data;
            $('#showCoord').modal('show');
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

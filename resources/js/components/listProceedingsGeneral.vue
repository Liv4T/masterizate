<template>
    <div class="back">
        <div class="col-md-11 mx-auto">
            <div v-if="type_user==1 || type_user==2">
                <button class="btn btn-primary mb-3" @click="getActas()">
                    Crear Acta
                </button>
            </div>
            <div class="custom-card text-center">
                <h3 class="card-header fondo">Actas Generales</h3>
                <div class="card" >
                    <div class="card-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre del Acta</th>
                                    <th>Usuario</th>
                                    <th>Fecha</th>
                                    <th>Firmada</th>
                                    <th>Visto</th>
                                    <th>Tipo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody v-for="(proceeding, id) in proceedings" :key="id">
                                <tr>
                                    <td v-if="proceeding.url"><a :href="`/api/proceedings/general/download/${proceeding.id}`" @click="viewed(proceeding.id)" style="color: black;">{{nameArchive(proceeding.url)}}</a></td>
                                    <td v-if="!proceeding.url">Sin archivo generado</td>
                                    <td>{{proceeding.user_name}}</td>
                                    <td>{{proceeding.created_at}}</td>
                                    <td v-if="proceeding.state==1"><i class="far fa-check-circle"></i></td>
                                    <td v-if="proceeding.state==0"><i class="far fa-times-circle"></i></td>
                                    <td v-if="proceeding.viewed==1"><i class="far fa-check-circle"></i></td>
                                    <td v-if="proceeding.viewed==0"><i class="far fa-times-circle"></i></td>
                                    <td>{{proceeding.type}}</td>
                                    <td>
                                        <button v-if="proceeding.state==0 && proceeding.type==='Recibida'" class="btn btn-primary" data-toggle="modal" data-target="#Modal" v-on:click="sign(proceeding.id)">Firmar</button>
                                        <button v-if="proceeding.state==0 && proceeding.url" class="btn btn-primary" data-toggle="modal" data-target="#UpdateModal" v-on:click="update(proceeding.id)">Actualizar</button>
                                        <button v-if="proceeding.url" class="btn btn-primary" v-on:click="viewPdf(proceeding.id)">Ver</button>
                                        <a v-if="!proceeding.url" class="btn btn-primary" :href="`/api/proceedings/general/pdf/${proceeding.id}`" target="_blank" @click="viewed(proceeding.id)">Generar PDF</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <modal-update-proceedings v-bind:id_proceedings="id_proceedings" v-bind:getProceedings="getProceedings" v-bind:typeView="typeView" v-bind:typeAction="typeAction"></modal-update-proceedings>
    </div>
</template>
<script>
export default {
    props: ['type_user'],
    data() {
        return {
            proceedings: [],
            id_proceedings: "",
            typeView:"",
            typeAction:"",
        }
    },
    mounted() {
        this.getProceedings();
    },
    methods: {
        getProceedings(){
            this.proceedings=[];
            var url="/getProceedings/general";
            axios.get(url).then((response) => {
                let arrayData=response.data;
                arrayData[0].forEach(e => {
                    this.proceedings.push({
                        id: e.id,
                        title: e.title,
                        body: e.body,
                        url: e.url,
                        id_user: e.id_user,
                        id_user_managed: e.id_user_managed,
                        state: e.state,
                        viewed: e.viewed,
                        created_at: e.created_at,
                        type: "Creada",
                        user_name: e.user_name
                    });
                });
                arrayData[1].forEach(e => {
                    this.proceedings.push({
                        id: e.id,
                        title: e.title,
                        body: e.body,
                        url: e.url,
                        id_user: e.id_user,
                        id_user_managed: e.id_user_managed,
                        state: e.state,
                        viewed: e.viewed,
                        created_at: e.created_at,
                        type: "Recibida",
                        user_name: e.user_name
                    });
                });
                console.log(this.proceedings);
            }).catch((error) => {
                toastr.error("No hay actas cargadas");
            });
        },
        nameArchive(url_name){
            var arrayName = url_name.split("/");
            var name = arrayName[arrayName.length - 1];

            return name;
        },
        update(id){
            this.typeView=1;
            this.typeAction=1;
            this.id_proceedings=id;
            $("#updateModal").modal("show");
        },
        sign(id){
            this.typeView=2;
            this.typeAction=1;
            this.id_proceedings=id;
            $("#updateModal").modal("show");
        },
        getActas(){
            window.location = "/proceedings/general";
        },
        viewPdf(id){
            window.location = "/view/proceedings/" + id + "/1";
        },
        viewed(id){
            var url="/updateViewedProceedings/general/" + id;
            axios.post(url).then(response => {
                    if(response.data==1){
                        toastr.success("Visto");
                    }
                }).catch(err=>{});
        }
    },
}
</script>

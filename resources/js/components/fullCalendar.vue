<template>
    <div class="back row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <div class="card-header fondo">
                    <h4>Calendario</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <a
                            class="btn btn-warning float-right"
                            v-on:click.prevent="editNames()"
                            >Crear evento</a
                        >
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-8">
                            <iframe
                                class="otra"
                                width="700"
                                src="https://calendar.google.com/calendar/embed?src=desarrollo%40liv4t.com&ctz=America%2FBogota"
                                style="border:solid 1px #777;height:700px;;max-width=900px; "
                                frameborder="0"
                                min-width="350px"
                                scrolling="no"
                            ></iframe>
                        </div>
                        <div class="col-md-3">
                            <div class="row justify-content-center">
                                <h4>Clases presenciales</h4>
                            </div>
                            <div v-for="(clas, k) in clases" :key="k">
                                <div class="row justify-content-center">
                                    <h5>{{ clas.name }}</h5>
                                </div>
                                <label for>Fecha: {{ clas.date }} </label>
                                <label for>Hora: {{ clas.hour }} </label>
                                <div class="modal-footer">
                                    <a
                                        class="btn btn-warning"
                                        :href="clas.hangout"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >Ir a la clase</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editu">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form
                        class="needs-validation"
                        v-on:submit.prevent="createEvent"
                        novalidate
                    >
                        <div class="modal-header">
                            <h4>Crear evento</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                            >
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group row justify-content-center">
                                <div class="col-md-10">
                                    <label for="name">Nombre del evento</label>
                                    <input
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        v-model="nameEvent"
                                    />
                                    <div class="invalid-feedback">
                                        Please fill out this field
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col">
                                    <label for="name">Desde</label>
                                    <datetime
                                        format="YYYY-MM-DD H:i:s"
                                        width="200px"
                                        v-model="desde"
                                    ></datetime>
                                    <div class="invalid-feedback">
                                        Please fill out this field
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="name">Hasta</label>
                                    <datetime
                                        format="YYYY-MM-DD H:i:s"
                                        width="200px"
                                        v-model="hasta"
                                    ></datetime>
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input
                                    type="submit"
                                    class="btn btn-warning"
                                    value="Guardar"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import datetime from "vuejs-datetimepicker";

export default {
    data() {
        return {
            desde: "",
            hasta: "",
            nameEvent: "",
            clases: []
        };
    },
    components: {
        datetime
    },
    mounted() {
        var urlr = "getAllEvents";
        axios.get(urlr).then(response => {
            this.clases = response.data;
        });
        console.log("Component mounted.");
    },
    methods: {
        getMenu() {
            window.location = "/calendar";
        },
        editNames() {
            $("#editu").modal("show");
        },
        createEvent() {
            var url = "createEvent";

            axios
                .post(url, {
                    //Cursos generales
                    name: this.nameEvent,
                    startDateTime: this.desde,
                    endDateTime: this.hasta
                })
                .then(response => {
                    this.getMenu();
                    toastr.success("Nuevo evento creado exitosamente");
                })
                .catch(error => {});
        }
    }
};
</script>
<style>
.back-calendar {
    padding-left: 290px;
}
</style>

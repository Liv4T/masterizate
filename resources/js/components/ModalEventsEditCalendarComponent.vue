<template>
    <!-- Modal de edición de evento -->
    <div class="modal fade" id="editEv">
        <div class="modal-lg modal-dialog">
            <div class="modal-content">
                <form class="needs-validation" v-on:submit.prevent="updateEvent" novalidate>
                    <div class="modal-header">
                        <h4>Editar evento</h4>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row justify-content-center">
                            <div class="col-md-6">
                                <label for="name">Nombre del evento</label>
                                <input type="text" name="name" class="form-control" v-model="nameUp" />
                                <div class="invalid-feedback">Please fill out this field</div>
                            </div>
                            <div class="col-md-6">
                                <label for="name">Materia</label>
                                <select class="form-control" v-model="areaUp" required>
                                    <option :value="option.id + '/' + option.id_classroom" v-for="(option, k_option) in myOptions" v-bind:key="k_option">
                                    {{ option.text }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-6">
                            <label for="name">Desde</label>
                            <datetime format="YYYY-MM-DD H:i:s" v-model="fromUp"></datetime>
                            <div class="invalid-feedback">Por favor ingresa la fecha</div>
                            </div>
                            <div class="col-md-6">
                            <label for="name">Hasta</label>
                            <datetime format="YYYY-MM-DD H:i:s" v-model="toUp"></datetime>
                            <div class="invalid-feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Hasta aquí el modal de editar evento -->
</template>

<script>
    import Vue from "vue";
    import moment from "moment";

    moment.tz.setDefault("America/Bogota");
    moment.locale("es");

    import Multiselect from "vue-multiselect";
    Vue.use(require("vue-moment"));
    Vue.component("multiselect", Multiselect);
    import datetime from "vuejs-datetimepicker";
    export default {
        props:[
            "concurrent",
            "dias",
            "myOptions",
            "getMenu",
            "evenUp",
            "nameUp", 
            "areaUp",
            "fromUp", 
            "toUp",
            "meetUp", 
            "id_padreUp", 
            "idUp",
        ],
        data() {
            return {
            };
        },
        components: {
            datetime,
            Multiselect,
        },
        filters: {
            formatDate: (value) => {
                if (value) {
                    return moment(String(value)).format("DD MMMM YYYY hh:mm a");
                }
            },
        },
        mounted() {
        
        },
        methods: {
            updateEvent() {
                var url = "updateEvent";
                if (this.id_padreUp === null) {
                axios
                    .put(url, {
                    //Cursos generales
                    id: this.idUp,
                    name: this.nameUp,
                    startDateTime: this.fromUp,
                    endDateTime: this.toUp,
                    id_area: this.areaUp,
                    url: this.meetUp,
                    id_padre: this.id_padreUp,
                    todos: false,
                    })
                    .then((response) => {
                    this.getMenu();
                    toastr.success("Evento actualizado exitosamente");
                    })
                    .catch((error) => {});
                } else {
                    var resp = confirm("Este evento es concurrente, ¿desea editar todos los eventos?");

                    axios.put(url, {
                        //Cursos generales
                        id: this.idUp,
                        name: this.nameUp,
                        startDateTime: this.fromUp,
                        endDateTime: this.toUp,
                        id_area: this.areaUp,
                        url: this.meetUp,
                        id_padre: this.id_padreUp,
                        todos: resp,
                    })
                    .then((response) => {
                        this.getMenu();
                        toastr.success("Evento actualizado exitosamente");
                    })
                    .catch((error) => {});
                }
            },
        },
    };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .back-calendar {
    padding-left: 290px;
  }

  .class-event {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
  }

  .class-event-info {
    font-size: 1.2em;
    font-weight: 600;
    max-width: 280px;
    text-align: left;
  }

  .class-event-date {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .class-event-date > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .class-event-date > div > small {
    font-size: 0.8em;
  }

  .class-event-date > div > span {
    font-size: 1em;
  }

  .class-event-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .class-event-action {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
  }

  .class-event-action button {
    margin-right: 5px;
  }

  .justify-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .dot {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    display: inline-block;
  }

  .dot_blue {
    background-color: #3788d8;
  }

  .dot_red {
    background-color: #d8374d;
  }
  .padding-10 {
    padding: 10px;
  }
</style>

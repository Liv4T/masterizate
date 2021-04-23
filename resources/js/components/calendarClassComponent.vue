<template>
    <div class="row">
        <div class="col-md-11" v-if="type_u != 4 || type_u != 8">
            <div v-if="type_u != 7" class="row justify-content-center">
                <h4>Clases presenciales</h4>
            </div>
            <div class="row" v-for="(clas, k) in filterPendingEvents(clases)" v-bind:key="k">
                <div class="col-12">
                    <div class="card">
                        <div class="class-event">
                            <div class="class-event-info">{{ !clas.classroom ? "Lectiva " : "" }} {{ clas.area }} {{ clas.classroom ? clas.classroom : "" }}: {{ clas.name }}</div>
                                <div class="class-event-date">
                                    <div>
                                        <small>Desde:</small>
                                        <span>{{ clas.dateFrom | formatDate }}</span>
                                    </div>
                                    <div>
                                        <small>Hasta:</small>
                                        <span>{{ clas.dateTo | formatDate }}</span>
                                    </div>
                                </div>
                                <div class="class-event-action">
                                    <a class="btn btn-primary" html:type="_blank" :href="clas.hangout">Ir a clase</a>
                                </div>
                            </div>
                        <div class="class-event-footer ">
                            <div class="class-event-action">
                                <button class="btn btn-primary" v-show="type_u == 2" v-on:click.prevent="editE(clas.id)">Editar</button>
                                <a class="btn btn-primary mr-1" v-show="type_u == 2" href="/effectiveness">Efectividad</a>
                                <button class="btn btn-danger" v-show="type_u == 2" v-on:click.prevent="viewDelete(clas.id, clas.name)">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="type_u == 7">
                    <!-- IS TUTOR -->
                <div class="row justify-content-center">
                    <h4>Tutorías programadas</h4>
                </div>
                <div class="row" v-for="(tutorial, k_tutorial) in tutorEvents" v-bind:key="k_tutorial">
                    <div class="col-12">
                        <div class="card">
                            <div class="class-event">
                                <div class="class-event-info">{{ tutorial.name }}</div>
                                <div class="class-event-date">
                                    <div>
                                        <small>Desde:</small>
                                        <span>{{ tutorial.date_from | formatDate }}</span>
                                    </div>
                                    <div>
                                        <small>Hasta:</small>
                                        <span>{{ tutorial.date_to | formatDate }}</span>
                                    </div>
                                </div>
                                <div class="class-event-action">
                                    <a class="btn btn-primary" v-if="tutorial.url" :type="'_blank'" :href="tutorial.url">Ir a clase</a>
                                </div>
                            </div>
                            <div class="row padding-10">
                                <div class="col-12">
                                    <label>Temas a revisar:</label>
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control" rows="3" readonly="readonly" v-model="tutorial.observations"></textarea>
                                </div>
                            </div>
                            <div class="row padding-10">
                                <div class="col-8">
                                    <input type="text" class="form-control" placeholder="Link de reunión" v-model="tutorial.url" />
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-primary" @click="UpdateLinkTutorial(tutorial)">Actualizar link</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <calendar-modal-edit-event 
            :concurrent.sync="concurrent" 
            :dias.sync="dias" 
            :myOptions.sync="myOptions" 
            :getMenu.sync="getMenu"
            :evenUp.sync="evenUp" 
            :nameUp.sync="nameUp" 
            :areaUp.sync="areaUp" 
            :fromUp.sync="fromUp" 
            :toUp.sync="toUp" 
            :meetUp.sync="meetUp" 
            :id_padreUp.sync="id_padreUp" 
            :idUp.sync="idUp"
        ></calendar-modal-edit-event>
        <!-- Modal para eliminar evento -->
        <div class="modal fade" id="deleteE">
            <div class="modal-sm modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row text-center">
                            <label for="name">Esta seguro que desea eliminar {{ delName }} ?</label>
                        </div>
                        <div class="modal-footer">
                            <a class="btn btn-danger float-right" href v-on:click.prevent="deleteEvent(delId)">Si</a>
                            <a class="btn btn-warning" href v-on:click.prevent="deletE()">Cancelar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Hasta aqui seria un componente -->
</template>

<script>
  import moment from "moment";

  moment.tz.setDefault("America/Bogota");
  moment.locale("es");

  export default {
    props: ["type_u","clases","tutorEvents","concurrent","dias","myOptions","getMenu"],
    data() {
        return {
            formatDate: "",
            evenUp: [],
            nameUp: "",
            fromUp: "",
            toUp: "",
            areaUp: "",
            meetUp: "",
            id_padreUp: "",
            idUp: "",
            delName:"",
            delId: "",
        };
    },
    components: {
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
        filterPendingEvents: (events) => {
            return events.filter((e) => moment(e.dateTo) >= moment());
        },

        UpdateLinkTutorial(tutorial) {
            axios.put(`/api/tutor-schedule/event/${tutorial.id_schedulestudent}/link`, { link: tutorial.url }).then((response) => {
                toastr.success("Link de evento actualizado correctamente");
            });
        },
        editE(id) {
            this.evenUp = [];
            var urlM = window.location.origin + "/editEvent/" + id;
            axios.get(urlM).then((response) => {
            this.evenUp = response.data;
            this.nameUp = this.evenUp.name;
            this.areaUp = this.evenUp.id_area + "/" + this.evenUp.id_classroom;
            this.fromUp = this.evenUp.date_from;
            this.toUp = this.evenUp.date_to;
            this.meetUp = this.evenUp.url;
            this.id_padreUp = this.evenUp.id_padre;
            this.idUp = id;
            });
            $("#editEv").modal("show");
        },
        deletE() {
            $("#deleteE").modal("hide");
        },
        deleteEvent(id) {
            var url = "deleteEvent";
            if (this.id_padreDel === null) {
                axios.put(url, {
                    id: id,
                    id_padre: this.id_padreDel,
                    todos: false,
                })
                .then((response) => {
                    this.getMenu();
                    toastr.success("Evento actualizado exitosamente");
                })
                .catch((error) => {});
            } else {
            // falta cambiar la funcion de eliminar por la de cambiar el update_at
                var resp = confirm("Este evento es concurrente, ¿desea editar todos los eventos?");
                axios.put(url, {
                    id: id,
                    id_padre: this.id_padreDel,
                    todos: resp,
                })
                .then((response) => {
                    this.getMenu();
                    toastr.success("Evento actualizado exitosamente");
                })
                .catch((error) => {});
            }
        },
        viewDelete(id, name) {
            this.delName = name;
            this.delId = id;
            this.evenDel = [];
            var urlM = window.location.origin + "/editEvent/" + id;
            axios.get(urlM).then((response) => {
            this.evenDel = response.data;
            this.id_padreDel = this.evenDel.id_padre;
            });
            $("#deleteE").modal("show");
        },
    },
  };
</script>
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

<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <div class="card-header fondo">
          <h4>Calendario</h4>
        </div>
        <div class="card-body">
          <div class="row" v-show="type_u==2">
            <a class="btn btn-warning float-right" v-on:click.prevent="createE()">Crear evento</a>
          </div>
          <br />
          <div class="row">
            <div class="col-md-11">
              <div class="row justify-content-center">
                <h4>Clases presenciales</h4>
              </div>
              <div v-for="(clas, k) in clases" :key="k">
                <div class="row justify-content-center">
                  <h5>{{ clas.name }}</h5>
                </div>
                <h6 for>Desde: {{ clas.dateFrom | moment("LLL") }}</h6>
                <h6 for>Hasta: {{ clas.dateTo | moment("LLL") }}</h6>

                <label for>Materia: {{ clas.area }}</label>
                <label for>Salón: {{ clas.classroom }}</label>
                <div class="modal-footer">
                  <a
                    class="btn btn-warning"
                    v-show="type_u==2"
                    href
                    v-on:click.prevent="editE(clas.id)"
                  >Editar</a>
                  <a
                    class="btn btn-danger"
                    v-show="type_u==2"
                    href
                    v-on:click.prevent="viewDelete(clas.id,clas.name)"
                  >Eliminar</a>
                  <a
                    class="btn btn-warning"
                    :href="clas.hangout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Ir a la clase</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="createE">
      <div class="modal-lg modal-dialog">
        <div class="modal-content">
          <form class="needs-validation" v-on:submit.prevent="createEvent" novalidate>
            <div class="modal-header">
              <h4>Crear evento</h4>
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group row justify-content-center">
                <div class="col-md-6">
                  <label for="name">Nombre del evento</label>
                  <input type="text" name="name" class="form-control" v-model="nameEvent" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Materia</label>
                  <select class="form-control" v-model="materia" required>
                    <option :value="option.id+'/'+option.id_classroom " v-for="option in myOptions">
                      {{
                      option.text
                      }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="name">Desde</label>
                  <datetime format="YYYY-MM-DD H:i:s" v-model="desde"></datetime>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Hasta</label>
                  <datetime format="YYYY-MM-DD H:i:s" v-model="hasta"></datetime>
                  <div class="invalid-feedback"></div>
                </div>
                <div class="col-md-6">
                  <strong for="name">Enlace de Meet</strong>
                  <input type="text" name="name" class="form-control" v-model="nameMeet" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </div>
              <div class="modal-footer">
                <input type="submit" class="btn btn-warning" value="Guardar" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editE">
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
                    <option :value="option.id+'/'+option.id_classroom " v-for="option in myOptions">
                      {{
                      option.text
                      }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="name">Desde</label>
                  <datetime format="YYYY-MM-DD H:i:s" v-model="fromUp"></datetime>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="col-md-6">
                  <label for="name">Hasta</label>
                  <datetime format="YYYY-MM-DD H:i:s" v-model="toUp"></datetime>
                  <div class="invalid-feedback"></div>
                </div>
                <div class="col-md-6">
                  <strong for="name">Enlace de Meet</strong>
                  <input type="text" name="name" class="form-control" v-model="meetUp" />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </div>
              <div class="modal-footer">
                <input type="submit" class="btn btn-warning" value="Guardar" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
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
</template>

<script>
import Vue from "vue";

import datetime from "vuejs-datetimepicker";
Vue.use(require("vue-moment"));
export default {
  props: ["type_u"],
  data() {
    return {
      desde: "",
      hasta: "",
      nameEvent: "",
      nameMeet: "",
      clases: [],
      myOptions: [],
      materia: "",
      meetUp: "",
      nameUp: "",
      fromUp: "",
      toUp: "",
      areaUp: "",
      evenUp: [],
      delId: "",
      delName: "",
      idUp: "",
    };
  },
  components: {
    datetime,
  },
  mounted() {
    var urlM = window.location.origin + "/getAllEvents";
    axios.get(urlM).then((response) => {
      this.clases = response.data;
    });
    var url = window.location.origin + "/GetArearByUser";
    axios.get(url).then((response) => {
      this.myOptions = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    getMenu() {
      window.location = "/calendar";
    },
    createE() {
      $("#createE").modal("show");
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
        this.idUp = id;
      });
      $("#editE").modal("show");
    },
    deletE() {
      $("#deleteE").modal("hide");
    },
    deleteEvent(id) {
      var url = "deleteEvent/" + id;
      axios.get(url).then((response) => {
        // eliminamos
        this.getMenu(); //listamos
        toastr.success("Eliminado exitosamente"); //mensaje
      });
    },
    viewDelete(id, name) {
      this.delName = name;
      this.delId = id;
      $("#deleteE").modal("show");
    },
    createEvent() {
      var url = "createEvent";

      axios
        .post(url, {
          //Cursos generales
          name: this.nameEvent,
          startDateTime: this.desde,
          endDateTime: this.hasta,
          id_area: this.materia,
          url: this.nameMeet,
        })
        .then((response) => {
          this.getMenu();
          toastr.success("Nuevo evento creado exitosamente");
        })
        .catch((error) => {});
    },
    updateEvent() {
      var url = "updateEvent";

      axios
        .put(url, {
          //Cursos generales
          id: this.idUp,
          name: this.nameUp,
          startDateTime: this.fromUp,
          endDateTime: this.toUp,
          id_area: this.areaUp,
          url: this.meetUp,
        })
        .then((response) => {
          this.getMenu();
          toastr.success("Evento actualizado exitosamente");
        })
        .catch((error) => {});
    },
  },
};
</script>
<style>
.back-calendar {
  padding-left: 290px;
}
</style>

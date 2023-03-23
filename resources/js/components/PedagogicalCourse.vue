<template>
  <div class="back row justify-content-center">
    <div class="col-sm-12">
      <div class="card text-center">
        <div class="card-header fondo">
          <h4>Salidas Pedagógicas</h4>
        </div>
      </div>
      <button class="mb-4 btn btn-primary" data-toggle="modal" data-target="#exampleModal">Crear Salidas Pedagógicas</button>
      <div class="card">
        <div class="card-body">
          <div id="accordion">
            <div class="card" v-for="(pedagogical, grade) in pedagogical" :key="grade">
              <div class="card-header" :id="`${grade}`">
                <h5 class="mb-0">
                  <button class="btn btn-link" data-toggle="collapse" :data-target="`#heading${grade}`" aria-expanded="true" aria-controls="collapseOne">
                    {{ grade }}
                  </button>
                </h5>
              </div>

              <div :id="`heading${grade}`" class="collapse hide" :aria-labelledby="`${grade}`" data-parent="#accordion">
                <div class="card-body">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Actividad</th>
                        <th>Lugar</th>
                        <th>Fecha de Salida</th>
                        <th>Fecha de Llegada</th>
                        <th>Descripción</th>
                      </tr>
                    </thead>
                    <tbody v-for="(pedagogical, key) in pedagogical" :key="key">
                      <tr>
                        <td>{{ pedagogical.name_activity }}</td>
                        <td>{{ pedagogical.place }}</td>
                        <td>{{ pedagogical.departure_time }}</td>
                        <td>{{ pedagogical.time_arrival }}</td>
                        <td>{{ pedagogical.description }}</td>
                        <td>
                          <button class="btn btn-primary" v-on:click="updatePedagogical(pedagogical)">Editar</button>
                          <button class="btn btn-danger" v-on:click="deletePedagogical(pedagogical.id)">Eliminar</button>
                          <button class="btn btn-success" v-on:click="updateCircular(pedagogical.id)" style="margin-top:5px">Actualizar Circular</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pedagogical-modal-create-coord :gradeOptions="gradeOptions" :getPedagogical="getPedagogical"></pedagogical-modal-create-coord>
    <pedagogical-modal-edit-coord :pedagogicalToEdit="pedagogicalToEdit" :gradeOptions="gradeOptions" :getPedagogical="getPedagogical"></pedagogical-modal-edit-coord>
    <update-pedagogical-circular :pedagogical_id="pedagogical_id" :getPedagogical="getPedagogical"></update-pedagogical-circular>
  </div>
</template>
<script>
import _ from "lodash";
import pedagogicalModalCreateCoord from "./PedagogicalModalCreateCoord";
import pedagogicalModalEditCoord from "./PedagogicalModalUpdateCoord";
export default {
  components: {
    pedagogicalModalCreateCoord,
    pedagogicalModalEditCoord,
  },
  props: ["user"],
  data() {
    return {
      gradeOptions: [],
      pedagogical: [],
      pedagogicalToEdit: {},
      pedagogical_id: '',
    };
  },
  mounted() {
    this.getPedagogical();
    this.getGrades();
  },
  methods: {
    getPedagogical() {
      axios.get("getPedagogic").then((response) => {
        this.groupData(response.data);
      });
    },

    getGrades() {
      axios.get("getGrades").then((response) => {
        this.gradeOptions = response.data;
      });
    },

    groupData(data) {
      const result = _.chain(data).groupBy("grade").value();
      this.pedagogical = result;
    },

    updatePedagogical(data) {
      this.pedagogicalToEdit = data;
      $("#updatePedagogical").modal("show");
    },

    updateCircular(data){
        this.pedagogical_id=data;
        $("#updatePedagogicalCircular").modal("show");
    },

    deletePedagogical(id) {
      if (window.confirm("Deseas eliminar este dato?")) {
        axios.delete(`pedagogic/${id}`).then((response) => {
          toastr.success(response.data);
          this.getPedagogical();
        });
      }
    },
  },
};
</script>

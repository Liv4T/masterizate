<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Actividad</h3>
          <div class="card-body">
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody v-for="(area,t) in areas" :key="t">
                <tr
                  data-toggle="collapse"
                  :data-target="'#accordion'+t"
                  class="clickable"
                  @click="semanas(area.id, area.id_classroom)"
                >
                  <td>{{ area.text}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div :id="'accordion'+t" class="collapse">
                      <table class="table table-responsive table-hover table-striped center">
                        <thead>
                          <tr>
                            <th colspan="1">&nbsp;</th>

                            <th>Nombre de la materia</th>
                            <th>Tipo de Actividad</th>
                            <th>Fecha de entrega límite</th>
                            <th>Fecha de retroalimentación</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(actividad, k) in activities" :key="k">
                            <td width="10px">
                              <a
                                class="btn btn-warning btn-sm"
                                v-on:click.prevent="editNames(actividad.id)"
                              >v</a>
                            </td>

                            <td>{{actividad.activity_name }}</td>
                            <td>{{ actividad.activity_type }}</td>
                            <td>{{actividad.deliver_date}}</td>
                            <td>{{actividad.feedback_date}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editu">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Actividad
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <parallax-container class="horizontal-card centered-card" style="height:300px">
                  <parallax-element
                    class="background-image"
                    :parallaxStrength="1"
                    :type="'rotation'"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/SLIDER1.jpg?alt=media&token=58ecdc81-2d81-4996-aeeb-8d9c34c15072"
                      width="auto"
                    />
                  </parallax-element>
                  <div class="texttrivia">
                    <div align="center">
                      <h5>Ahora vamos a ver cuanto sabes</h5>
                      <a :href="'/trivia/'+id_act" class="btn btn-warning">Jugar</a>
                    </div>
                  </div>
                </parallax-container>
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >Descripción de la actividad</button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{descripcion}}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >Logro</button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{ logro }}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >Fecha de entrega</button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{ fechaE }}</div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >Fecha retroalimentación</button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">{{ fechaR }}</div>
                    </div>
                  </div>
                </div>
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
      activities: [],
      activity: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      areas: [],
      errors: [],
    };
  },
  created() {},
  mounted() {
    var url = "GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });

    console.log("Component mounted.");
  },
  methods: {
    semanas(id, classroom) {
      var urlr = "getActivity/" + id + "/" + classroom;
      axios.get(urlr).then((response) => {
        this.activities = response.data;
      });
    },
    editNames(actividad) {
      var urlr = "getActivityById/" + actividad;
      axios.get(urlr).then((response) => {
        this.activity = response.data;

        this.id_act = this.activity.id;
        this.descripcion = this.activity.activity_desc;
        this.logro = this.activity.achievement;
        this.fechaE = this.activity.deliver_date;
        this.fechaR = this.activity.feedback_date;
      });
      $("#editu").modal("show");
    },
  },
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

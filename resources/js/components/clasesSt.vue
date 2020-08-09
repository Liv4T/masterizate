<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis clases</h3>
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
                </tr>
                <tr>
                  <td v-for="(clas, k) in clases" :key="k" style="display: inline-grid;">
                    <div :id="'accordion'+t" class="collapse">
                      <a
                        class="btn btn-warning"
                        v-on:click.prevent="editNames(clas.id)"
                        style="text-overflow: ellipsis;
                                width: 170px;
                                white-space: nowrap;
                                overflow: hidden;"
                      >{{ clas.text }}</a>
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
                Semana
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="card-body">
                <div class="accordion" id="accordionExample">
                  <div class="card" v-for="(clas, t) in fillS" :key="t">
                    <div class="card-header" :id="'heading' +t">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          :data-target="'#collapse' +t"
                          aria-expanded="true"
                          :aria-controls="'collapse' +t"
                        >Clase {{ t+1 }}</button>
                      </h2>
                    </div>
                    <div
                      :id="'collapse' +t"
                      class="collapse show"
                      :aria-labelledby="'heading' +t"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="form-group text-center">
                          <strong for="name">Nombre</strong>
                          <div style="font-weight: bold;">{{ clas.name }}</div>
                        </div>
                        <div class="form-group text-center">
                          <strong for="name">Descripción</strong>

                          <p>{{clas.description }}</p>
                        </div>
                        <div class="form-group text-center">
                          <strong for="name">Documento</strong>

                          <div>
                            {{ clas.name_document }}
                            <a :href="clas.document" download>
                              <a :href="clas.document" download>
                                <i class="fas fa-file-download fa-2x" style="color: grey;"></i>
                                <span style="color:grey">Descargar</span>
                                <!-- {{ conversation.file_name }} -->
                              </a>
                            </a>
                          </div>
                          <br />
                          <div v-show="clas.document1!= ''">
                            Documento adicional:
                            <a :href="clas.document1" download>
                              <a :href="clas.document1" download>
                                <i class="fas fa-file-download fa-2x" style="color: grey;"></i>
                                <span style="color:grey">Descargar</span>
                                <!-- {{ conversation.file_name }} -->
                              </a>
                            </a>
                          </div>
                          <br />
                          <div v-show="clas.document2!= ''">
                            Documento adicional:
                            <a :href="clas.document2" download>
                              <a :href="clas.document2" download>
                                <i class="fas fa-file-download fa-2x" style="color: grey;"></i>
                                <span style="color:grey">Descargar</span>
                                <!-- {{ conversation.file_name }} -->
                              </a>
                            </a>
                          </div>
                        </div>
                        <div class="form-group text-center">
                          <strong for="name">Enlace de apoyo</strong>

                          <div>
                            <a :href="clas.url" style="color:blue">{{ clas.url }}</a>
                          </div>
                          <div>
                            <a :href="clas.url1" style="color:blue">{{ clas.url1 }}</a>
                          </div>
                          <div>
                            <a :href="clas.url2" style="color:blue">{{ clas.url2 }}</a>
                          </div>
                        </div>
                        <div class="form-group text-center">
                          <strong for="name">Video</strong>
                        </div>
                        <div class="form-group text-center">
                          <div>
                            <video controls>
                              <source :src="clas.video" />
                            </video>
                            <!-- <iframe class="embed-responsive-item" :src="clas.video"></iframe> -->
                          </div>
                          <br />
                          <div v-show="clas.video1!= ''">
                            <video controls>
                              <source :src="clas.video1" />
                            </video>
                          </div>
                          <br />
                          <div v-show="clas.video2!= ''">
                            <video controls>
                              <source :src="clas.video2" />
                            </video>
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clases: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      areas: [],
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
      var urlr = "viewGetWeek/" + id + "/" + classroom;
      axios.get(urlr).then((response) => {
        this.clases = response.data;
        console.log(this.clases);
      });
    },
    editNames(clas) {
      var urlr = "showClass/" + clas;
      axios.get(urlr).then((response) => {
        this.fillS = response.data.clase;
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

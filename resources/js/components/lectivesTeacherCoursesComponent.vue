<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis clases</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
              <div class="card" v-for="(area,t) in planifications" :key="t">
                <div class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapse'+t"
                      aria-expanded="false"
                      @click.prevent="getPlanificationEvent(area.id_planification)"
                      aria-controls="collapse"
                    >
                      <label>{{ area.lective.name }} Trimestre {{ area.period_consecutive }}</label>
                    </button>
                  </h2>
                </div>
                <div
                  :id="'collapse'+t"
                  class="collapse hide"
                  aria-labelledby="heading"
                  data-parent="#accordionExample"
                >
                  <tr>
                    <td
                      v-for="(weekly_plan, k) in planification.weeklies"
                      :key="k"
                      style="display: inline-grid;"
                    >
                      <a
                        class="btn btn-warning"
                        v-on:click.prevent="
                                                    showModalAddCourses(weekly_plan.id_lective_planification,weekly_plan.id)
                                                "
                        style="text-overflow: ellipsis;
                                max-width: 250px;
                                min-width: 150px;
                                white-space: nowrap;
                                overflow: hidden;
                                "
                      >{{ weekly_plan.name }} </a>
                    </td>
                  </tr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="editu">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="card">
              <h3 class="card-header fondo text-center">
                Ciclo
                <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </h3>
              <div class="float-right" style="padding:10px">
                <a
                  class="btn btn-warning float-right"
                  :href="'/teacher/lectives/planning/'+current_course.id_lective_planification+'/weekly/'+current_course.id_weekly_plan+'/course'"
                >Crear Clase</a>
              </div>

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
                            <a
                              :href="clas.url"
                              target="_blank"
                              rel="noopener noreferrer"
                              style="color:blue"
                            >{{ clas.url }}</a>
                          </div>
                          <div>
                            <a
                              :href="clas.url1"
                              target="_blank"
                              rel="noopener noreferrer"
                              style="color:blue"
                            >{{ clas.url1 }}</a>
                          </div>
                          <div>
                            <a
                              :href="clas.url2"
                              target="_blank"
                              rel="noopener noreferrer"
                              style="color:blue"
                            >{{ clas.url2 }}</a>
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
                        <div class="modal-footer">
                          <a
                            class="btn btn-warning"
                            :href="
                                                            '/actividad_d/' +
                                                                clas.id_weekly_plan
                                                        "
                          >Crear Actividad</a>
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
      planifications:[],
      planification:{lective:{}},
      courses:[],
      clases: [],
      areas: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      Iclassroom: "",
      Iarea: "",
      current_course:{}
    };
  },
  created() {},
  mounted() {

     axios.get("/api/lectives").then((response) => {
      this.planifications= response.data;
    });
  
  },
  methods: {
    showModalAddCourses(id_lective_planification,id_weekly_plan) {

      this.current_course={
        id_lective_planification:id_lective_planification,
        id_weekly_plan:id_weekly_plan
      };

      this.courses=[];

      axios.get(`/api/lectives/planification/${id_lective_planification}/weekly/${id_weekly_plan}/course`).then((response) => {
        this.courses = response.data.clase;
          $("#editu").modal("show");
      });


    
    },
    getPlanificationEvent(id_lective_planification) {
    
      axios.get(`/api/lectives/planification/${id_lective_planification}`).then((response) => {
        this.planification = response.data;
      });
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

  <template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis clases</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Buscar Clase" v-model="search_filter">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </span>
                    </div>
                </div>
              <div class="card" v-for="(area,t) in areas" :key="t">
                <div v-if="search_filter =='' || filterClass(area.text)" class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapse'+t"
                      aria-expanded="false"
                      @click.prevent="botones(area.id, area.id_classroom)"
                      aria-controls="collapse"
                    >
                      <label class="btn-link_bold">{{ area.text }}</label>
                    </button>
                  </h2>
                </div>
                <div
                  :id="'collapse'+t"
                  class="collapse hide"
                  aria-labelledby="heading"
                  data-parent="#accordionExample"
                >
                <div class="input-group mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Buscar Ciclo" v-model="search_filter_cicle">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </span>
                    </div>
                </div>
                  <table class="table table-responsive-xl table-hover table-striped center">
                    <thead>
                      <tr>
                            <th></th>
                            <th class="text-center">Ciclo de aprendizaje</th>
                            <th class="text-center">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                        <template  v-for="(clas, k) in clases">
                        <tr :key="k" v-if="clas.id_classroom==area.id_classroom && clas.id_area==area.id && search_filter_cicle =='' || filterCicle(clas.text)"
                      >
                         <td> <a class="btn btn-primary"  :href="'/act_semana/'+clas.id_area+'/'+clas.id_classroom">Editar</a> </td>
                        <td>{{ clas.text }}</td>
                        <td>
                          <a
                            class="btn btn-primary"
                            :href="'/docente/modulo/'+clas.id"
                          >Ir a Ciclo</a>

                        </td>

                      </tr>
                        </template>

                    </tbody>
                  </table>
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
        search_filter:'',
        search_filter_cicle:'',
        clases: [],
        areas: [],
        descripcion: "",
        logro: "",
        fechaE: "",
        fechaR: "",
        id_act: "",
        errors: [],
        fillS: [],
    };
  },
  created() {},
  mounted() {
    var url = "/GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });
  },
  methods: {
    botones(area, classroom) {
        var urlsel = "/editGetWeek/" + area + "/" + classroom;
        axios.get(urlsel).then((response) => {
            this.clases = response.data;
        });
    },
    filterClass(class_name){
        return class_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    },

    filterCicle(cicle_name){
        return cicle_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter_cicle.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    },
  },
};
</script>
<style>
</style>

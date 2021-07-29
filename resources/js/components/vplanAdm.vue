<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Planificación</h3>
          <div class="card-body">
            <div class="input-group mb-3 mt-3">
              <input type="text" class="form-control" placeholder="Buscar Planificación" v-model="search_filter">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                  </svg>
                </span>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div v-for="(area,t) in areas" :key="t">
                  <div class="card mb-2" v-if="search_filter =='' || filterPlanification(area.text)">
                    <div class="card-header">
                        <h2 class="mb-0">
                        <button
                          class="btn btn-link"
                          style="color:grey"
                          type="button"
                          data-toggle="collapse"
                          :data-target="'#collapse'+t"
                          aria-expanded="false"
                          @click.prevent="botones(area.id, area.id_classroom)"
                          aria-controls="collapse"
                        >
                          <label>{{ area.text }}</label>
                        </button>
                      </h2>
                    </div>
                    <div
                      :id="'collapse'+t"
                      class="collapse hide"
                      aria-labelledby="heading"
                      data-parent="#accordionExample"
                    >
                      <a
                        :href="'/course/'+ area.id +'/'+ area.id_classroom"
                        class="btn btn-warning"
                      >General</a>

                      <a :href="'/duplicar/'+ area.id +'/'+ area.id_classroom" class="btn btn-warning">
                        Duplicar
                      </a>

                      <a
                        :href="'/porcentaje/'+ area.id +'/'+ area.id_classroom"
                        class="btn btn-warning"
                      >Porcentaje de notas</a>

                      <a v-show="general==true" :href="'/crear_semana/'+ area.id +'/'+ area.id_classroom" class="btn btn-warning">
                        Crear Ciclo
                      </a>

                      <a href="/docente/clases" class="btn btn-warning">Ciclos y clases</a>  

                      <a v-show="general==true" :href="'/duplicar-semana/'" class="btn btn-warning">
                        Duplicar Ciclo
                      </a>  

                      <!-- <a v-show="general==true" :href="'/act_semana/'+ area.id +'/'+ area.id_classroom" class="btn btn-warning">
                        Actualizar Ciclo
                      </a>                  -->
    <!--
                      <a
                        :href="'/act_semana/'+ area.id +'/'+ area.id_classroom"
                        class="btn btn-warning"
                      >Ciclos</a>
    -->

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
$(".collapse").on("show.bs.collapse", function () {
  $(".collapse.in").collapse("hide");
});

export default {
  data() {
    return {
      week: [],
      semanal: false,
      general: false,
      anual: [],
      areas: [],
      search_filter:""
    };
  },

  mounted() {
    var url = "GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });
  },
  methods: {
    filterPlanification(class_name){
      return class_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    },
    botones(area, classroom) {
      var urlsl =
        window.location.origin +
        "/coursePlanification/" +
        area +
        "/" +
        classroom;
      axios.get(urlsl).then((response) => {
        this.anual = response.data;
        if (this.anual.quaterly.length > 0) {
          this.general = true;
        } else {
          this.general = false;
        }
      });
     /* var urlsel = "editGetWeek";
      axios.get(urlsel).then((response) => {
        this.week = response.data;

        if (this.week.id_area == area && this.week.id_classroom == classroom) {
          this.semanal = true;
        } else {
          this.semanal = false;
        }
      });*/
    },
  },
};
</script>
<style>
.collapse-row.collapsed + tr {
  display: none;
}
.btn.skool {
  background-color: #c1e9eb;
  color: white;
}
</style>

<template>
  <div class="back" v-if="backPage === 'inicio'">
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
                      <label>{{ area.lective.name }} Período {{ area.period_consecutive }}</label>
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
    </div>
  </div>
  <div v-else>
    <create-lectives-courses :current_course="current_course" :courses="courses" :backPage="backBage"></create-lectives-courses>
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
      current_course:{},
      backPage:"inicio"
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
        this.courses = response.data;

        this.courses.forEach(c=>{
          c.content.forEach(cn=>{
            if(cn.content_type=='VIDEO')
            {
              if(cn.content)
              {
                let youtubeSplode=cn.content.split('/');

                cn.content=youtubeSplode[youtubeSplode.length-1];
              }
            }
          })



        });
          this.backPage= "return"
      });






    },
    getPlanificationEvent(id_lective_planification) {

      axios.get(`/api/lectives/planification/${id_lective_planification}`).then((response) => {
        this.planification = response.data;
      });
    },
    backBage(){
      this.backPage="inicio";
    }
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
 iframe:not(.md-image){
    height:300px !important;
}
</style>

<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Estudiantes</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
              <div class="card" v-for="(classroom,t) in classrooms" :key="t">
                <div class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapse'+t"
                      aria-expanded="false"
                      @click.prevent="botones(classroom.id)"
                      aria-controls="collapse"
                    >
                      <label>{{ classroom.name }}</label>
                    </button>
                  </h2>
                </div>
                <div
                  :id="'collapse'+t"
                  class="collapse hide accordion-content"
                  aria-labelledby="heading"
                  data-parent="#accordionExample"
                >
                  <a
                    :href="'/student/'+ classroom.id + '/' + classroom.name"
                    class="btn btn-warning"
                  >Ver Estudiantes</a>
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
      classrooms: [],
      id_area: "",
      id_classroom: "",
    };
  },

  mounted() {
    var url = "/getClassroomByInstitution/8";
    axios.get(url).then((response) => {
      this.classrooms = response.data;
    });
  },
  methods: {
    
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

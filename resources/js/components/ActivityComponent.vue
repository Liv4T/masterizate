<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Actividades</h3>
          <div class="card-body">
            <div class="float-right">
              <label for="">Buscar</label>
              <input type="text" placeholder="Módulo" v-model="filter" />
            </div>
            <div class="table-responsive" style="border-radius: 20px">
              <table
                class="table table-hover table-striped"
                style="border-collapse: separate !important"
              >
                <thead >
                  <tr>
                    <th>Nombre</th>
                    <th>Fecha de entrega</th>
                    <th>Materia</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in filteredRows"
                    :key="index"
                  >
                    <td
                    width="200px"
                      style="font-size: 16px"
                      v-html="highlightMatches(row.name)"
                    ></td>
                     <td
                      style="font-size: 16px"
                      v-html="highlightMatches(row.delivery_max_date)"
                    ></td>
                     <td

                    >{{ row.area_name }}</td>
                 <td width="200px">
                      <a
                        class="btn btn-warning"
                        :href="'/estudiante/modulo/'+row.weekly_plan_id+'/clase/'+row.id_class"
                        >Ver más</a
                      >
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
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
  components: { Multiselect },
  props: ["id_grade", "id_area","user"],
  data() {
    return {
      activities: [],
      classroom: "",
      value: [{ name: "Todos", code: "js" }],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      area: null,
      filter: '',
    };
  },
  created() {},
  mounted() {
        var urlsel =window.location.origin +"/api/student/activity"
        axios.get(urlsel).then((response) => {
            let activs = response.data;
            
            activs.forEach((el)=>{
                if(el.activityForAllStudents == 1){
                    
                    if(el.selectedStudents == "[]" || el.selectedStudents == null){
                        this.activities.push(el)
                    }

                }else if(el.activityForPIARStudents == 1){

                    let PIARStudents= JSON.parse(el.selectedStudents);
                    PIARStudents.forEach((e)=>{
                        if(e.id == this.user.id){
                            this.activities.push(el)   
                        }
                    });

                }else if(el.activityForSelectStudents == 1){
                    
                    let selectedStudents= JSON.parse(el.selectedStudents);
                    selectedStudents.forEach((e)=>{
                        if(e.id == this.user.id){
                            this.activities.push(el)   
                        }
                    });

                }
            })
            
        });

    console.log(this.activities);
  },
  methods: {
    highlightMatches(texto) {
      const matchExists = texto
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return texto;

      const re = new RegExp(this.filter, "ig");
      return texto.replace(
        re,
        (matchedText) => `<strong>${matchedText}</strong>`
      );
    },
  },
  computed: {
    filteredRows() {
    if(!this.activities.filter) return false;

      return this.activities.filter((row) => {
        const name = row.name.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return name.includes(searchTerm);
      });
    },
  },
};
</script>
<style>

</style>

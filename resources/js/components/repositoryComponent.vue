<template>
  <div>
    <div v-if="idRepo === ''" class="row justify-content-center">
      <div id="crud" class="col-sm-12">
        <div class="card text-center">
          <h3 class="card-header fondo">Entregas</h3>
          <div class="card-body">
             <div class="float-left">
                    <a
                        class="btn btn-warning"
                        href="/createrepository"
                        >Crear</a
                      >
            </div>
            <div class="float-right">
              <label for="">Buscar</label>
              <input type="text" placeholder="Buscar" v-model="filter" />
            </div>            
            <div class="table-responsive" style="border-radius: 20px">
              <table
                class="table table-hover table-striped"
                style="border-collapse: separate !important"
              >
                <thead >
                  <tr>
                    <th>Tarea</th>
                    <th>Fecha</th>
                    
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in filteredRows"
                    :key="index"

                  >
                    <td
                      style="font-size: 18px"
                      v-html="highlightMatches(row.name)"
                    ></td>
                    <td
                      style="font-size: 18px"
                      v-html="highlightMatches(row.date)"
                    ></td>                    
                    <td>
                      <a
                        class="btn btn-warning"                        
                        v-on:click="()=>getIdReport(row.id)"
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
    <div v-else>
      <repository-students :id_repo="idRepo" :backComponent="backPage"></repository-students>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
  components: { Multiselect },
  props: ["idArea", "idClassroom"],
  data() {
    return {
      clases: [],
      area_classroom: "",
      value: [{ name: "Todos", code: "js" }],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      area: null,
      filter: "",
      idRepo:"",
    };
  },
  created() {},
  mounted() {
    this.areaClassroom();
  },
  watch:{
    idArea(newVal, oldVal){
      if(newVal !== oldVal){
        this.areaClassroom(); 
      }
    }
  },
  methods: {
    areaClassroom(){
      var url = window.location.origin + "/getRepository/" + this.idArea +"/"+this.idClassroom;
      axios.get(url).then((response) => {
        this.clases = response.data;
      });
    },
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
    getIdReport(id){
      this.idRepo = id
    },
    backPage(){
      this.idRepo = "";
    }
  },
  computed: {
    filteredRows() {
      return this.clases.filter((row) => {
        const text = row.name.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return text.includes(searchTerm);
      });
    },
  },
};
</script>
<style>

</style>

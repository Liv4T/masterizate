<template>
  <div>
    <div v-if="idStudent === ''" class="row justify-content-center">
      <div id="crud" class="col-sm-12">
        <div class="card text-center">
          <h3 class="card-header fondo">{{ $t('lang.homework.studentHomework') }}</h3>
          <div class="card-body">
            <div class="float-right">
              <label for="">{{ $t('lang.general.search') }}</label>
              <input type="text" placeholder="Buscar" v-model="filter" />
            </div>

            <div class="float-left">
              <a class="btn btn-warning" v-on:click="backComponent">Volver</a>
            </div>

            <div class="table-responsive" style="border-radius: 20px">
              <table
                class="table table-hover table-striped"
                style="border-collapse: separate !important"
              >
                <thead >
                  <tr>
                    <th>{{ $t('lang.general.student') }}</th>
                    <th>{{ $t('lang.general.status') }}</th>
                    <th>-</th>
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
                      v-html="highlightMatches(row.status)"
                    ></td>
                    <td>
                      <a
                        v-show="row.id_student!=null"
                        class="btn btn-warning"                  
                        v-on:click="()=>getIdStudent(row.id_student)"
                        >{{ $t('lang.general.readMore') }}</a
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
      <repository-comments :id_repo="id_repo" :id_student="idStudent" :backPage="backPage"></repository-comments>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
  components: { Multiselect },
  props: ["id_repo","backComponent"],
  data() {
    return {
      clases: [],
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
      filter: "",
      myOptions: [],
      idStudent: ""
    };
  },
  created() {},
  mounted() {
    var url = window.location.origin + "/getRepositoryStudents/" + this.id_repo;
    axios.get(url).then((response) => {
      this.clases = response.data;
      console.log(this.clases);
    });

    console.log("Component mounted.");
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
    getIdStudent(idStudent){
      this.idStudent = idStudent
    },
    backPage(){
      this.idStudent = ""
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

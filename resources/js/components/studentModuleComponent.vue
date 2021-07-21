<template>
  <div v-if="idclass === ''">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-12">
        <div class="card text-center">
          <h5 class="card-header fondo">{{ $t('lang.class.cycle') }}</h5>
          <h3 class="card-header fondo">{{ nameWeekly }}</h3>
          <span class="classroom-label">{{ nameArea }}</span>
          <div class="card-body">
            <table
              class="table table-responsive-xl table-hover table-striped center"
            >
              <thead>
                <tr>
                  <th>{{ $t('lang.menu.classes') }}</th>
                  <th>{{ $t('lang.class.action') }}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(clas, t) in fillS" :key="t">
                  <td>{{ clas.name }}</td>
                  <td class="row justify-content-center">
                    <a
                      class="btn btn-primary"
                      v-on:click="getClassId(clas.id)"
                      >{{ $t('lang.general.goToClass') }}</a
                    >


                  </td>
                  
                  <td>
                    <div class="check" v-if="clas.progress==100">
                        <svg

                            width="2em"
                            height="2em"
                            viewBox="0 0 16 16"
                            class="bi bi-check-circle-fill"
                            fill="#28a745"
                            xmlns="http://www.w3.org/2000/svg"

                        >
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                        </svg>
                        <p class="text-success" >{{ $t('lang.general.completed') }}</p>
                        </div>

                  </td>
                </tr>
                <!--
                <tr>
                  <td>Recursos Adicionales</td>
                  <td>
                    <a
                      class="btn btn-primary"
                      :href="
                        '/student/clases_adicionales/' +
                        clasId +
                        '/' +
                        id_area +
                        '/' +
                        id_classroom
                      "
                      >Ir a recursos</a
                    >
                  </td>
                  <td></td>
                </tr>-->
              </tbody>
            </table>
            <div class="float-left">              
              <a class="btn btn-warning" v-on:click="idclassClean">{{ $t('lang.general.goBack') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <student-course :id_module="clasId" :id_class="idclass" :idclassClean="idclassClean"></student-course>
  </div>
</template>
<script>
export default {
  props: ["clasId","cleanClasId","moduleId"],
  data() {
    return {
      clases: [],
      areas: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      nameWeekly: "",
      nameArea: "",
      id_area: "",
      id_classroom: "",
      idclass:""

    };
  },
  created() {},
  watch:{
    clasId(newVal, oldVal){
      if(newVal !== oldVal){
        this.getData();
      }
    },
    moduleId(newVal, oldVal){
      if(newVal !== oldVal){
        this.idclass = this.moduleId;
      }
    }
  },
  mounted() {
    this.idclass = this.moduleId;
    this.getData();
  },
  methods: {
    getData(){
      this.fillS = [];
      var urlr = window.location.origin + "/showClass/" + this.clasId;
      axios.get(urlr).then((response) => {
        this.fillS = response.data.clase;
        this.nameArea = `${response.data.area.name} ${response.data.classroom.name}`;
        this.id_area = response.data.area.id;
        this.id_classroom = response.data.classroom.id;
      });
      var urls = window.location.origin + "/GetNameWeekly/" + this.clasId;
      axios.get(urls).then((response) => {
        this.nameWeekly = response.data;
      });
    },
    getClassId(clasId){
      this.idclass = clasId
    },
    idclassClean(){
      this.cleanClasId();
      this.idclass= "";
    }
  },
};
</script>
<style>
.check{
    margin-left: 8px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
p{
    margin: 0 0 0 8px;
    font-size: 16px;
}
</style>

<template>
  <div class="back">
    <div>
      <div class="form-group col-md-4 mx-auto">
        <div class="text-center">
            <!-- <select class="btn btn-warning letra-boldfont" v-model="select" name="type" @change="ShowSelected()">
                <option disabled selected hidden value="">Seleccionar...</option>
                <option v-for="(area, key) in areas" :key="key" :value="JSON.stringify(area)">{{area.area_name + ' - ' + area.code}}</option>
            </select> -->
          <!-- <select class="btn btn-warning letra-boldfont" name="type" @change="ShowSelected">
            <option disabled selected hidden value="">CURSOS</option>
            <option :value="JSON.stringify(area)" v-for="(area, key) in areas" :key="key">{{ area.user_type === 7 ? area.area_name : area.text  }}</option>
          </select> -->
          <select class="btn btn-warning letra-boldfont" name="type" v-model="idArea">
            <option disabled selected hidden value="">CURSOS</option>
            <option :value="area.id + '/' + area.id_classroom" v-for="(area, key) in areas" :key="key">{{ area.classroom_name }}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div id="tabs" class="col-md-9 mx-auto">
          <div class="tabs text-center">
            <a v-on:click="activetab = 1" v-if="user.type_user === 1 || user.type_user === 2" v-bind:class="[activetab === 1 ? 'active' : '']"><h4 style="font-size: 15px">CLASES</h4></a>
            <a v-on:click="activetab = 2" v-if="user.type_user === 1 || user.type_user === 2" v-bind:class="[activetab === 2 ? 'active' : '']"><h4 style="font-size: 15px">ACTIVIDADES</h4></a>
            <a v-on:click="activetab = 3" v-if="user.type_user === 1 || user.type_user === 2" v-bind:class="[activetab === 3 ? 'active' : '']"><h4 style="font-size: 15px">NOTAS</h4></a>
            <a v-on:click="activetab = 4" v-if="user.type_user === 1 || user.type_user === 2" v-bind:class="[activetab === 4 ? 'active' : '']"><h4 style="font-size: 15px">ENTREGAS</h4></a>
          </div>

          <!-- <div class="content-azul"> -->
          <div>
            <div v-if="activetab === 1" class="tabcontent">
              <div v-if="idArea !='' || user.type_user === 7">
                <h3 v-show="user.type_user === 7" class="card-header fondo">Mis Cursos</h3>
                <cycle-list :idArea="idArea" :planif="planif" :user="user"></cycle-list>
              </div>
            </div>
            <div v-if="activetab === 2" class="tabcontent">
              <div v-if="idArea !='' && idClassroom != ''">
                <activities-teacher :idArea="idArea" :idClassroom="idClassroom"></activities-teacher>
              </div>
            </div>
            <div v-if="activetab === 3" class="tabcontent">
              <div v-if="idArea !='' && idClassroom != ''">
                <teacher-students :idArea="idArea" :idClassroom="idClassroom"></teacher-students>
              </div>
            </div>
            <div v-if="activetab === 4" class="tabcontent">
              <div v-if="idArea !='' && idClassroom != ''">
                <repository-component :idArea="idArea" :idClassroom="idClassroom"></repository-component>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  props: ["user"],
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
      activetab: 1,
      nameArea: "",
      planifications: "",
      idArea: "",
      idClassroom: "",
      idAreaClass:"",
      planif:"clase",
      select:"",
    };
  },
  mounted() {
    this.getArea();
    axios.get("/api/lectives").then((response) => {
      this.planifications = response.data;
    });
    /* var url = "/GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
      console.log(this.areas);
    }); */

    console.log("Component mounted.");
  },
  methods: {
    getArea(){
        axios.get("/getTrimestres").then((response) =>{
            this.trimestres=response.data;
        });
        /* axios.get('getAreaByClient').then((response)=>{
            this.areas = response.data;
            console.log(this.areas);
        }) */
        var url = "/GetArearByUser";
        axios.get(url).then((response) => {
            this.areas = response.data;
        });
    },
    modaliniciar() {
      var url = window.location.origin + "/SaveTerms";

      axios
        .post(url, {
          status: 1,
        })
        .then((response) => {
          this.errors = [];
          $("#modalini").modal("hide");
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
    ShowSelected(){
        let dataArea = JSON.parse(this.select);
        this.idArea = dataArea.id_area;
        this.idClassroom = dataArea.id_classroom;
        this.idAreaClass = dataArea.id_area+'/'+dataArea.id_classroom;
    }
  },
};
</script>
<style>
.mg-btn {
  margin: 10px;
  min-width: 165px;
}
.width-r {
  max-width: 97%;
  border: 1px solid #cccccc82;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #b0acac;
}
.tabs {
  margin-top: 10px;
  overflow: hidden;
  margin-left: 100px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 5px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 0px 16px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #bfbfbf;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  color: #fff !important;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}
.pd-20 {
  padding: 20px;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #00cbcec1;
  color: #fff;
  border-bottom: 2px solid #fff;
  cursor: default;
}
.tabcontent {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
.content-azul {
  background-color: #00cbcec6;
}
.flotante {
  position: fixed;
  top: 380px;
  z-index: 1020;
}
</style>

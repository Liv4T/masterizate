<template>
  <div>
    <div class="form-group width-r mx-auto">
      <div class="row pd-20">
        <div class="dropdown col-md-2">
          <button class="btn btn-danger dropdown-toggle mg-btn" type="button" id="admin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="box-shadow: 3px 3px 3px 3px #b0acac">{{ $t('lang.area.electivas') }}</button>
          <div class="dropdown-menu" aria-labelledby="admin" v-for="(area, k) in planifications" :key="k">
            <a class="dropdown-item" @click.prevent="nameArea = area.lective.name">{{ area.lective.name }}</a>
          </div>
        </div>
        <div class="col-md-2" v-for="(area, t) in areas" :key="t">
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 0" style="background-color: #ffb466; border-color: #ffb466; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 1" style="background-color: #ffea47; border-color: #ffea47; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 2" style="background-color: #a639b0; border-color: #a639b0; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 3" style="background-color: #50e9fb; border-color: #50e9fb; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 4" style="background-color: #ffa4f2; border-color: #ffa4f2; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 5" style="background-color: #4e92fd; border-color: #4e92fd; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 6" style="background-color: #ff5552; border-color: #ff5552; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 7" style="background-color: #ffc0f6; border-color: #ffc0f6; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 8" style="background-color: #b8ffc2; border-color: #b8ffc2; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 9" style="background-color: #b8ffc2; border-color: #b8ffc2; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 10" style="background-color: #ffea47; border-color: #ffea47; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t == 11" style="background-color: #00c9ce; border-color: #00c9ce; box-shadow: 3px 3px 3px 3px #b0acac" @click.prevent="nameArea = area.text">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
          <a href="http://" class="btn btn-warning mg-btn" v-if="t > 11">
            <h6 class="letra-poppins-bold" style="color: black">{{ $t('lang.area.'+nameMinus(area.text)) }}</h6>
          </a>
        </div>
      </div>
    </div>
    <div v-if="nameArea != ''">
      <div class="form-group text-center">
        <a href="" class="btn btn-warning letra-poppins-bold" style="background-color: #ffa4f2; border-color: #ffa4f2"
          ><h1 style="color: black">{{ $t('lang.area.'+nameMinus(nameArea)) }}</h1>
        </a>
      </div>
      <div class="row">
        <div class="col-md-2 pd-20 flotante">
          <a href="" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>{{ $t('lang.menu.chat').toUpperCase() }}</h4> </a> <br />
          <a href="" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>{{ $t('lang.menu.forums').toUpperCase() }}</h4> </a><br />
          <a href="" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>{{ $t('lang.menu.menssages').toUpperCase() }}</h4> </a><br />
        </div>
        <div id="tabs" class="col-md-9 mx-auto">
          <div class="tabs">
            <a v-on:click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']"><h2 class="letra-poppins-bold">{{ $t('lang.menu.calendar').toUpperCase() }}</h2></a>
            <a v-on:click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']"><h2 class="letra-poppins-bold">{{ $t('lang.menu.class').toUpperCase() }}</h2></a>
            <a v-on:click="activetab = 3" v-bind:class="[activetab === 3 ? 'active' : '']"><h2 class="letra-poppins-bold">{{ $t('lang.menu.homework').toUpperCase() }}</h2></a>
            <a v-on:click="activetab = 4" v-bind:class="[activetab === 4 ? 'active' : '']"><h2 class="letra-poppins-bold">{{ $t('lang.menu.grades').toUpperCase() }}</h2></a>
          </div>

          <div class="content-azul">
            <div v-if="activetab === 1" class="tabcontent"><calendar-component :type_u="3" :user="user"></calendar-component></div>
            <div v-if="activetab === 2" class="tabcontent"><student-courses></student-courses></div>
            <div v-if="activetab === 3" class="tabcontent"><repo-student></repo-student></div>
            <div v-if="activetab === 4" class="tabcontent"><notas-component></notas-component></div>
          </div>
        </div>
      </div>
      <div class="form-group text-center">
        <a class="btn btn-warning mg-btn">
          <h1 class="letra-poppins-bold">{{ $t('lang.calendar.pendingWork') }}</h1>
        </a>
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
    };
  },
  mounted() {
    axios.get("/api/lectives").then((response) => {
      this.planifications = response.data;
    });
    var url = "/GetArearByUser";
    axios.get(url).then((response) => {
      this.areas = response.data;
    });

    console.log("Component mounted.");
  },
  methods: {
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
    nameMinus(name){
      var nameMinus=name.toLowerCase();
      return nameMinus.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
  margin-top: 20px;
  overflow: hidden;
  margin-left: 90px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
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

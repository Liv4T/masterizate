<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Reporte de planificación</h3> 
                    <div class="card-body">
                        <div class="input-group mb-3 mt-3">
                            <input type="text" class="form-control" placeholder="Buscar Materia" v-model="search_filter_mat">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg>
                                </span>
                            </div>
                        </div>
                        <div v-show="loading === true">
                            <div class="spinner-border m-5" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>            
                        <div class="accordion" id="firstAccordion">                
                            <div class="card" v-if="search_filter_mat =='' || filterClass(area.text)" v-for="(area,t) in areas" :key="t">
                                <div class="card mb-2" >
                                    <div class="card-header" id="headingFIRST">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left height-auto" @click.prevent="getDataPlanification(area.id, area.id_classroom)" type="button" data-toggle="collapse" :data-target="`#collapseFirst${t}`" aria-expanded="true" :aria-controls="`collapseFirst${t}`">
                                                {{ area.text }}
                                            </button>
                                        </h2>
                                    </div>
                                </div>

                                <div :id="`collapseFirst${t}`" class="collapse" aria-labelledby="headingFIRST" data-parent="#firstAccordion">
                                    <div class="card-body"> 
                                        <div class="accordion" id="secondAccordion">
                                            <div class="card" v-for="(logro,k) in logros" :key="k">
                                                <div class="card-header" id="headingSecond">
                                                    <h2 class="mb-2">
                                                        <button class="btn btn-link btn-block text-left height-auto" v-on:click="()=>botones(logro.id, logro.id_planification,`collapseTwo${area.id}${area.id_classroom}${k}`)">
                                                            Objetivo - {{logro.achievement}}
                                                        </button>
                                                    </h2>            
                                                </div>
                                                <div :id="`collapseTwo${area.id}${area.id_classroom}${k}`" class="collapse" aria-labelledby="headingSecond" data-parent="#secondAccordion">
                                                    <div class="card-body">                                            
                                                        <table class="table table-responsive-xl table-hover table-striped center">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center">Logro</th>
                                                                    <th class="text-center">Indicadores</th>
                                                                    <th class="text-center">Contenido</th>
                                                                    <th class="text-center">Actividades</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <template v-for="(ach, j) in achievements">
                                                                    <tr>
                                                                        <td class="text-left">{{ ach.logro}}</td>
                                                                        <td>
                                                                            <ul class="text-left">
                                                                                <li v-for="(ind, l) in listIndicators(ach.unit_name)" :key="l">{{ ind.indicador }}</li>
                                                                            </ul>
                                                                        </td>
                                                                        <td class="text-left">{{ ach.content}}</td>
                                                                        <td class="text-left">
                                                                            <ul class="text-left">
                                                                                <li v-for="(act, m) in ach.indicators" :key="m">{{ act.type_activity }} ({{ act.activity_rate }}%)</li>
                                                                            </ul>
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
import moment from 'moment';
moment.tz.setDefault("America/Bogota");
moment.locale('es');

export default {
  data() {
    return {
        search_filter:'',
        search_filter_mat:'',
        search_filter_cicle:'',
        achievements: [],
        areas: [],
        descripcion: "",
        logro: "",
        fechaE: "",
        fechaR: "",
        id_act: "",
        errors: [],
        fillS: [],
        clase_to_delete:[],
        id_module:'',
        cycle_number:"",
        logros:[],
        loading: false,
        lastCollapse: 1,
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  methods: {
        getData(){
            var url = "/GetArearByUser";
            axios.get(url).then((response) => {
                this.areas = response.data;
            });
        },
        getDataPlanification(id_area, id_classroom){
            var urlsel = window.location.origin + "/coursePlanification/" + id_area + "/" + id_classroom;
            axios.get(urlsel).then((response) => {
                this.logros=response.data.achievements;
                console.log(response.data);
            });
        },
        botones(id_achievement, id_planification, collapse_ID) {
            this.loading = true;
            this.achievements = [];
            axios.get(`/coursePlanificationObjetives/${id_achievement}/${id_planification}`).then((response) => {                
                this.achievements = response.data;
                //console.log("respuesta",this.achievements);
                this.loading = false;
            }).catch((error)=>{
                console.log(error);
                this.clases = [];
            });  
            $(`#${this.lastCollapse}`).collapse('hide');
            $(`#${collapse_ID}`).collapse('show');
            this.lastCollapse = collapse_ID;
            
        },
        listIndicators(json){
            var ind = JSON.parse(json);
            return ind;
        },
        valor(val){
            console.log(val);
        },
        datas(){
            this.loading= true;            
        },

        filterClass(class_name){
            return class_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter_mat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        },

        filterCicle(cicle_name){
            return cicle_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter_cicle.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        },
    },
};
</script>
<style>
ul{
    list-style-type:decimal;
}
ul li {
  padding-left: 0.5rem;
}
.height-auto{
    height: auto;
}
</style>

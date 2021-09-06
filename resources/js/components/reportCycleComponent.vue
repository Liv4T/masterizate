<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Reporte de ciclos y clases</h3> 
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
                            <div class="card" v-for="(area,t) in areas" :key="t" v-if="search_filter_mat =='' || filterClass(area.text)">
                                <div class="card mb-2" >
                                    <div class="card-header" id="headingFIRST">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" @click.prevent="getTrimestres()" type="button" data-toggle="collapse" :data-target="`#collapseFirst${t}`" aria-expanded="true" :aria-controls="`collapseFirst${t}`">
                                                {{ area.text }}
                                            </button>
                                        </h2>
                                    </div>
                                </div>

                                <div :id="`collapseFirst${t}`" class="collapse" aria-labelledby="headingFIRST" data-parent="#firstAccordion">
                                    <div class="card-body"> 
                                        
                                        <div class="accordion" id="secondAccordion">
                                            <div class="card" v-for="(trimestre,k) in trimestres" :key="k">
                                                <div class="card-header" id="headingSecond">
                                                    <h2 class="mb-2">
                                                        <button class="btn btn-link btn-block text-left" v-on:click="()=>botones(area.id, area.id_classroom, trimestre.id, `collapseTwo${area.id}${area.id_classroom}${k}`)">
                                                            Ciclo {{trimestre.nombre}}
                                                        </button>
                                                    </h2>
                                                    
                                                </div>
                                            
                                                <div :id="`collapseTwo${area.id}${area.id_classroom}${k}`" class="collapse" aria-labelledby="headingSecond" data-parent="#secondAccordion">
                                                    <div class="card-body">                                            
                                                        <table class="table table-responsive-xl table-hover table-striped center">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center"># Ciclo</th>
                                                                    <th class="text-center">Ciclo de aprendizaje</th>
                                                                    <th class="text-center">Desarrollo de la clase</th>
                                                                    <th class="text-center">Observación</th>
                                                                    <th class="text-center">Ajustes PIAR</th>
                                                                    <th class="text-center">Acción</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <template  v-for="(clas, k) in clases">
                                                                    <tr :key="k" v-if="clas.id_classroom==area.id_classroom && clas.id_area==area.id && search_filter_cicle =='' || filterCicle(clas.text)">
                                                                        <td>{{ clas.order_items }}</td>
                                                                        <td>{{ clas.text }}</td>
                                                                        <td>
                                                                            <ul class="text-left">
                                                                                <li v-for="(classD, key_d) in listClassDevelopment(clas.class)" :key="key_d">{{ classD.class_developmentC }}</li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>{{ clas.observation }}</td>
                                                                        <td>{{ clas.ajuste_piar }}</td>
                                                                        <td>
                                                                            <button v-on:click="modalClass(clas.class_array)" class="btn btn-primary">Ver Clases</button>
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
        <div class="modal fade" id="infoClass" tabindex="-1" role="dialog" aria-labelledby="infoClassLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="infoClassLabel">Información de Clases del Ciclo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-if="classes.length > 0">
                            <table class="table table-stripped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Objetivos</th>
                                        <th scope="col">Habilidades</th>
                                        <th scope="col">Tarea</th>
                                        <th scope="col">Link</th>
                                        <th scope="col">Fecha inicio</th>
                                        <th scope="col">Contenidos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(classLis, key) in classes" :key="key">
                                        <td>{{classLis.nameClass}}</td>
                                        <td>{{classLis.description}}</td>
                                        <td>{{classLis.objetivesClass}}</td>
                                        <td>{{classLis.transversals}}</td>
                                        <td>{{classLis.work}}</td>
                                        <td><a :href='classLis.url_class' target="_blank" style="color:black">{{classLis.url_class}}</a></td>
                                        <td>{{classLis.date_init_class}}</td>
                                        <td v-if="classLis.content.length > 0">
                                            <ul class="text-left">
                                                <li v-for="(cont, key_c) in classLis.content" :key="key_c">
                                                    <ul class="second-file">
                                                        <li>{{ cont.content_type }}</li>
                                                        <li><a :href='cont.content' class="color-text">{{ cont.description }}</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </td>
                                        <td v-else>No hay recursos cargados</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-else>
                            No hay Clases asignadas al Ciclo
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
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
        clases: [],
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
        trimestres:[],
        loading: false,
        classes:[],

    };
  },
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
        getTrimestres(){ 
            var url="/getTrimestres";
            axios.get(url).then((response) =>{
                this.trimestres=response.data;
            });
        },
        botones(area, classroom, trimestre, collapse_ID) {
            console.log('IdCollapse',collapse_ID);
            this.loading = true;
            axios.get(`/courseCycleAndClass/${area}/${classroom}/${trimestre}`).then((response) => {                
                this.clases = response.data;
                console.log(this.clases);
                this.loading = false;
            }).catch((error)=>{
                console.log(error);
                this.clases = [];
            }); 
            $(`#${collapse_ID}`).collapse('show');
        },
        listClassDevelopment(json){
            var classD = JSON.parse(json);
            return classD;
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
        modalClass(class_array){
            this.classes=[];
            class_array.forEach((e, i)=>{
                this.classes.push({
                    work: e.work,
                    transversals: e.transversals,
                    nameClass: e.name,
                    objetivesClass: e.objetivesClass,
                    description: e.description,
                    date_init_class: e.date_init_class,
                    url_class: e.url_class,
                    content: e.content,
                })
            })
            $("#infoClass").modal("show");
            console.log(this.classes);
        },
    },
};
</script>
<style>
@media (min-width: 576px){
    .modal-dialog {
        max-width: 1100px;
        margin: 1.75rem auto;
    }
    ul.text-left{
        list-style-type:decimal;
        padding-left: 0rem;
    }
    ul li {
        padding-left: 0rem;
    }
    ul.second-file{
        list-style-type: none;
        padding-left: 0rem;
    }
    .color-text{
        color:black;
    }
}
</style>

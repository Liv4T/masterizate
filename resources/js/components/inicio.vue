<template>
    <div>
        <div class="form-group width-r mx-auto">
            <div class="row pd-20">
                <div class="dropdown col-md-2">
                    <button class="btn btn-danger dropdown-toggle mg-btn" type="button" id="admin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="box-shadow: 3px 3px 3px 3px #b0acac">Electives</button>
                    <div class="dropdown-menu" aria-labelledby="admin" v-for="(area, k) in planifications" :key="k">
                        <a class="dropdown-item" @click.prevent="nameArea = area.lective.name">{{ area.lective.name }}</a>
                    </div>
                </div>

                <div class="col-md-2" v-for="(area, t) in areas" :key="t">
                    <a href="http://" class="btn btn-warning mg-btn" :style="area.style" @click.prevent="nameArea = area.text, colorTitle = area.titleColor, idArea = area.id, idClassroom = area.id_classroom">
                        <h6 class="letra-poppins-bold" style="color: black">{{ area.text }}</h6>
                    </a>                    
                </div>
            </div>
        </div>
        <div v-if="nameArea != ''">
            <div class="form-group text-center">
                <a href="" class="btn btn-warning letra-poppins-bold" :style="`${colorTitle} border-color: #ffa4f2;`"
                ><h1 style="color: black">{{ nameArea }}</h1>
                </a>
            </div>
            <div class="row">
                <div class="col-md-2 pd-20 flotante">
                    <a href="/chat" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>CHAT</h4> </a> <br />
                    <a href="/questions" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>FORUMS</h4> </a><br />
                    <a href="/mensajes" class="btn btn-warning letra-poppins-bold mg-btn" style="background-color: #e26100; border-color: #e26100"><h4>MENSSAGES</h4> </a><br />
                </div>
                <div id="tabs" class="col-md-9 mx-auto">
                    <div class="tabs">
                        <a v-on:click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']"><h2 class="letra-poppins-bold">CALENDAR</h2></a>
                        <a v-on:click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']"><h2 class="letra-poppins-bold">CLASS</h2></a>
                        <a v-on:click="activetab = 3" v-bind:class="[activetab === 3 ? 'active' : '']"><h2 class="letra-poppins-bold">HOMEWORK</h2></a>
                        <a v-on:click="activetab = 4" v-bind:class="[activetab === 4 ? 'active' : '']"><h2 class="letra-poppins-bold">GRADES</h2></a>
                    </div>

                    <div class="content-azul">
                        <div v-if="activetab === 1" class="tabcontent"><calendar-component :type_u="3" :user="user"></calendar-component></div>
                        <div v-if="activetab === 2" class="tabcontent"><student-courses :nameArea="nameArea"></student-courses></div>
                        <div v-if="activetab === 3" class="tabcontent"><repo-student :nameArea="nameArea"></repo-student></div>
                        <div v-if="activetab === 4" class="tabcontent"><notas-component :idArea="idArea" :idClassroom="idClassroom" :user="user" :nameArea="nameArea"></notas-component></div>
                    </div>
                </div>
            </div>
        
            <div class="form-group text-center">
                <a class="btn btn-warning mg-btn">
                    <h1 class="letra-poppins-bold">PENDING WORK</h1>
                    <div class="card activity-event-container">
                        <div class="activity-event" v-for="(activity,i_activity) in activities" v-bind:key="i_activity">
                            <div class="activity-event-info">
                                <span>[{{activity.area_name}} {{activity.classroom_name}}]<br>{{activity.name}}</span>
                            </div>

                            <div class="activity-event-date">
                                <small>Inicio de Clase:</small>
                                <span>{{activity.date_init_class|formatDate}}</span>
                            </div>

                            <div class="activity-event-date">   
                                <small>URL de Clase:</small>                                     
                                <a :href="activity.url_class" class="badge badge-primary" target="_blank">{{activity.url_class}}</a>
                            </div>

                            <div class="activity-event-date" v-if="activity.interaction_state==2">
                                <small>Fecha Retroalimentación:</small>
                                <span>{{activity.feedback_date|formatDate}}</span>
                            </div>
                        
                            <div class="activity-event-date" v-else>
                                <small>Fecha máxima entrega:</small>
                                <span>{{activity.delivery_max_date|formatDate}}</span>
                            </div>                                    

                            <div class="activity-event-action">
                                <a v-if="activity.interaction_state==2" class="btn btn-link" :href="`/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`">Retroalimentación</a>
                                <a v-else class="btn btn-link" :href="`/estudiante/modulo/${activity.weekly_plan_id}/clase/${activity.id_class}`">Entregar</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import pdf from "vue-pdf";
import moment from "moment";
  moment.tz.setDefault("America/Bogota");
  moment.locale("es");
export default {
    components: {
        pdf,
    },
    props: ["user"],
    data() {
        return {
            clases: [],
            colorClass:[
                {
                    area: 'Ingles',
                    style:"background-color: #ffb466; border-color: #ffb466; box-shadow: 3px 3px 3px 3px #b0acac",
                    title:"background-color: #ffb466;"
                },{
                    area: 'Español',
                    style: "background-color: #ffea47; border-color: #ffea47; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #ffea47;"
                },{
                    area: 'nueva materia',
                    style: "background-color: #a639b0; border-color: #a639b0; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #a639b0;"
                },{
                    area: 'Matematicas',
                    style: "background-color: #0d3cfa; border-color: #0d3cfa; box-shadow: 3px 3px 3px 3px #b0acac",
                    title: "background-color: #0d3cfa;"
                }
            ],
            areas: [],
            descripcion: "",
            logro: "",
            fechaE: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillS: [],
            activities:[],
            activetab: 1,
            nameArea: "",
            idArea:"",
            idClassroom:"",
            planifications: "",
            colorTitle:"",
        };
    },
    mounted() {
        axios.get("/api/lectives").then((response) => {
            this.planifications = response.data;
        });
    
        var url = "/GetArearByUser";
        axios.get(url).then((response) => {
            this.areas = response.data;
            this.areas.forEach((e)=>{
                this.colorClass.filter(i=>{
                    // console.log(i.area === e.text);  
                    let text1 = i.area;
                    let text2 = e.text;

                    text1 = this.getCleanedString(text1);
                    text2 = this.getCleanedString(text2);

                    if(text1 === text2){                        
                        e.style = i.style;
                        e.titleColor = i.title;
                    }                    
                })
            })
        });
        // console.log("Component mounted.");        
    },
    watch:{
        nameArea(new_value, old_value){
            if(old_value != new_value){
                this.getActivitiesStudents(new_value);
            }
        }
    },
    methods: {
        getCleanedString(string){
            // se definen caracteres a eliminar
            var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

            // Los eliminamos todos
            for (var i = 0; i < specialChars.length; i++) {
                string= string.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
            }   

            // se pasa a minusculas
            string = string.toLowerCase();

            // Se reemplazan los espacios por _
            string = string.replace(/ /g,"_");

            // Quitamos acentos y "ñ"
            string = string.replace(/á/gi,"a");
            string = string.replace(/é/gi,"e");
            string = string.replace(/í/gi,"i");
            string = string.replace(/ó/gi,"o");
            string = string.replace(/ú/gi,"u");
            string = string.replace(/ñ/gi,"n");
            return string;
        },
        getActivitiesStudents(nameArea){
            this.activities = [];
            axios.get("/api/student/activity").then((response) => {
                let activs = []
                activs = Object.values(response.data);
                activs = activs.filter((e)=>e.area_name === nameArea);

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
        },
        
        modaliniciar() {
            var url = window.location.origin + "/SaveTerms";

            axios.post(url, {
                status: 1,
            }).then((response) => {
                this.errors = [];
                $("#modalini").modal("hide");
            }).catch((error) => {
                this.errors = error.response.data;
            });
        },
    },
    filters: {
        formatDate: (value) => {
            if (value) {
                return moment(String(value)).format("DD MMMM YYYY hh:mm a");
            }
        },
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

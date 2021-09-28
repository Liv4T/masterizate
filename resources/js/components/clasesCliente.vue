<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div v-if="showStudent === false" class="card">
                    <h3 class="card-header fondo">Mis Clases</h3>
                    <div class="card-body">                        
                        <select class="form-control" v-on:change="(e)=>setArea(e.target.value)">
                            <option default>Seleccionar...</option>
                            <option v-for="(area, key) in areas" :key="key" :value="JSON.stringify(area)">{{area.area_name}}</option>
                        </select>

                        <div class="mt-2" v-show="id_area_selected !== null">
                            <div id="accordion">
                                <div class="card" v-for="(trimestre, key) in trimestres" :key="key">
                                    <div class="card-header" :id="`heading${key}`">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" v-on:click="setTrim(trimestre.id)" data-toggle="collapse" :data-target="`#collapse${key}`" aria-expanded="true" :aria-controls="`collapse${key}`">
                                                {{trimestre.nombre}}
                                            </button>
                                        </h5>
                                    </div>

                                    <div :id="`collapse${key}`" class="collapse hide" :aria-labelledby="`heading${key}`" data-parent="#accordion">
                                        <div class="card-body">
                                            <table v-if="activities.length === 0" class="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Ciclo</th>
                                                        <th>Acción</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="(clase, key) in clases" :key="key">
                                                    <tr>
                                                        <td>{{clase.driving_question}}</td>
                                                        <td>
                                                            <button v-on:click="getClass(clase)">Ir a Clase</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div v-else>
                                                <button class="btn btn-success mb-2" v-on:click="backTable">Volver</button>
                                                <table class="table table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Clase</th>
                                                            <th>Acción</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-for="(activity, key) in activities" :key="key">
                                                        <tr>
                                                            <td>{{activity.name}}</td>
                                                            <td>
                                                                <button class="btn btn-primary" v-on:click="getActivity(activity)">Acceder</button>
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
                    </div>
                </div>                
                <div v-else-if="showStudent === true">
                    <student-module :clasId="weekly_id" :cleanClasId="backPage" :moduleId="activityId"></student-module>
                </div>              
            </div>            
        </div>        
    </div>
</template>
<script>
export default {
    props:['user'],
    data() {
        return {
            areas:[],
            id_area_selected:null,
            id_tutor:null,
            id_trimestre:null,
            trimestres:[],
            clases:[],
            activities:[],
            showStudent: false,
            activityId: null,
            weekly_id: null,
        };
    },
    mounted(){        
        this.getArea();  
    },
    watch:{
        id_trimestre: function(newVal, oldVal){            
            if(newVal !== oldVal){
                this.getCycles();
            }
        },

        id_area_selected: function(newVal, oldVal){            
            if(newVal !== oldVal){
                this.getCycles();
            }
        },
    },
    methods: {
        getArea(){        
            axios.get("/getTrimestres").then((response) =>{
                this.trimestres=response.data;                
            });
            axios.get('getAreaByClient').then((response)=>{
                this.areas = response.data;                
            })
        },

        setArea(value){
            let data = JSON.parse(value);
            this.id_area_selected = data.id_area;
            this.id_tutor = data.id_tutor;
        },

        setTrim(id_trimestre){
            this.id_trimestre = id_trimestre;
        },

        getCycles(){
            axios.get(`getTutorCycle/${this.id_tutor}/${this.id_trimestre}/${this.id_area_selected}`).then((response)=>{
                this.clases = response.data;
            });            
        },

        getClass(data){
            axios.get(`getClass/${data.id}`).then((response)=>{                
                this.activities = response.data;
            })           
        },

        backTable(){
            this.activities = [];
        },

        getActivity(data){            
            this.weekly_id = data.id_weekly_plan;          
            this.activityId = data.id;
            this.showStudent= true
        },

        backPage(){
            this.showStudent= false
        }
    }
};
</script>
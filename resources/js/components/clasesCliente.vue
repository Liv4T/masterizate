<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div v-if="showStudent === false" class="card">
                    <h3 class="card-header fondo">Mis Clases</h3>
                    <div class="card-body">
                        <select class="form-control" v-on:change="(e)=>setArea(e.target.value)">
                            <option disabled selected hidden value="">Seleccionar...</option>
                            <option v-for="(area, key) in areas" :key="key" :value="JSON.stringify(area)">{{area.area_name + ' - ' + area.code}}</option>
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
        <div class="modal fade" id="modalpay" data-backdrop="static" data-keyboard="false">
            <div class="modal-lg modal-dialog" style="max-width: 965px;">
                <div class="modal-content fondo-modal">
                    <div class="row">
                        <div class="col-lg-12">
                            <img thumbnail fluid src="images/popup-skills.png" ></img>
                            <p class="box-suscription">Tu subscripción está vencida</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a :href='"/compra/plan/PLAN_MENSUAL/"+code+"/resumen"' class="btn btn-suscription">Renovar Suscripción</a>
                    </div>
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
            validate: null,
            code: null,
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
                console.log(this.areas);
            })
        },

        setArea(value){
            let data = JSON.parse(value);
            this.id_area_selected = data.id_area;
            this.code = data.code;
            this.id_tutor = data.id_tutor;
        },

        setTrim(id_trimestre){
            this.id_trimestre = id_trimestre;
        },

        getCycles(){
            axios.get(`getTutorCycle/${this.id_tutor}/${this.id_trimestre}/${this.id_area_selected}`).then((response)=>{
                this.clases = response.data;
            });
            axios.get(`/checkPay/${this.id_area_selected}/${this.code}`).then((response)=>{
                this.validate = response.data;

                if (this.validate === 0) {
                    $("#modalpay").modal("hide");
                } else {
                    $("#modalpay").modal("show");
                }
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
<style>
.btn-suscription{
    background-color: rgb(2, 4, 79);
    color: white;
    font-weight: 800;
}
.btn-suscription:hover{
    background-color: rgb(2, 4, 79);
    color: #c9c9c9;
    font-weight: 800;
}
.box-suscription{
    background: #f7f5f5;
    font-weight: bold;
    padding: 15px;
    border-left:8px solid #ff0080;
    border-top-left-radius:8px;
    border-bottom-left-radius:8px;
    border-right:8px solid #ff0080;
    border-top-right-radius:8px;
    border-bottom-right-radius:8px;
}

</style>

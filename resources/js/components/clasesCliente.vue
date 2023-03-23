<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div v-if="showStudent === false" class="card">
                    <h3 class="card-header fondo">Mis Clases</h3>
                    <div class="card-body">
                        <select class="form-control" v-on:change="(e)=>setArea(e.target.value)">
                            <option disabled selected hidden value="">Seleccionar...</option>
                            <option v-for="(area, key) in areas" :key="key" :value="JSON.stringify(area)">{{area.classroom_name}}</option>
                        </select>

                        <div class="mt-2" v-show="id_area_selected!=null">
                            <table class="table table-responsive-xl table-hover table-striped center">
                                <thead>
                                    <tr>
                                        <th>Clases</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(clas, t) in fillS" :key="t">
                                        <td v-if="clas.status!=0">{{ clas.name }}</td>
                                        <td v-if="clas.status!=0">
                                            <a class="btn btn-primary" v-on:click="getClass(clas.id)">Ir a clase</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-else-if="showStudent === true">
                    <student-course :id_classroom_selected="id_classroom_selected" :id_class="idClass"></student-course><!-- cambiar lo que se pasa con relacion a la funcion del studentCourseComponent -->
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalpay" data-backdrop="static" data-keyboard="false">
            <div class="modal-lg modal-dialog" style="max-width: 965px;">
                <div class="modal-content fondo-modal">
                    <div class="row">
                        <div class="col-lg-12">
                            <img thumbnail fluid src="../assets/img/popup-skills.png">
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
            id_classroom_selected:null,
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
            id_area: "",
            id_classroom: "",
            nameArea: "",
            fillS: [],
        };
    },
    mounted(){
        this.getArea();
    },
    watch:{
        id_trimestre: function(newVal, oldVal){
            if(newVal !== oldVal){
                this.getData();
            }
        },

        id_area_selected: function(newVal, oldVal){
            if(newVal !== oldVal){
                this.getData();
            }
        },
    },
    methods: {
        getArea(){
            axios.get('/GetArearByUser').then((response)=>{
                this.areas = response.data;
                console.log(this.areas);
            })
        },

        getData(){
            this.fillS = [];
            this.getClasses();

        },

        getClasses() {
            var urlr = window.location.origin + "/showClassByClassroom/" + this.id_area_selected + "/" + this.id_classroom_selected;
            axios.get(urlr).then(response => {
                this.fillS = response.data.clase;
                console.log(this.fillS);

                if (response.data.area && response.data.classroom)
                    this.nameArea = response.data.classroom.name;

                    this.id_area = response.data.area;
                    this.id_classroom = response.data.classroom.id;
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

        setArea(value){
            let data = JSON.parse(value);
            this.id_area_selected = data.id_area;
            this.id_classroom_selected = data.id_classroom;
            this.code = data.code;
            this.id_tutor = data.id_tutor;
        },

        getClass(id_class){
            if(id_class){
                this.idClass = id_class;
                console.log("clase_id",this.idClass);
                this.showStudent = true;
            }
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

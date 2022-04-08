<template>
    <div class="back row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <div class="card-header fondo">
                    <h4>Nuevas Clases</h4>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="area">Area a asignar Código</label>
                        <select v-model="area_id" class="btn btn-select letra-boldfont" name="type" @change="getAreasBySelect">
                            <option disabled selected hidden value="">Seleccione un area</option>
                            <option value="ALL">Todas</option>
                            <option :value="area.id" v-for="(area, key) in areas" :key="key">{{ area.name }}</option>
                        </select>
                    </div>
                    <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Materia</th>
                            <th>Nombre programa</th>
                            <th>Tutor</th>
                            <th>Codigo</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody v-for="(area, key) in data_areas" :key="key">
                        <tr>
                            <td>{{ area.area_name }}</td>
                            <td>{{ area.classroom_name}}</td>
                            <td>{{ area.tutor_name }}</td>
                            <td>{{ area.code }}</td>
                            <td>
                                <a class="btn btn-suscription" href="javascript:void(0)" @click="modalPay(area.code)">Suscribirse</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalpay" data-backdrop="static" data-keyboard="false">
            <div class="modal-lg modal-dialog" style="max-width: 965px;">
                <div class="modal-content fondo-modal">
                    <div class="modal-header">
                        <h5 class="modal-title">Seleccione el plan a pagar</h5>
                    </div>
                    <div class="row" style="height: 70px;">
                        <div class="col-lg-12" style="align-self: center; text-align: center;">
                            <select v-model="typePlan" class="btn btn-select letra-boldfont" name="type" style="width: 50%">
                                <option disabled selected hidden value="">Seleccione un plan</option>
                                <option :value="plan.plan" v-for="(plan, key) in selectPlan" :key="key">{{ plan.text }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a :href='"/compra/plan/"+this.typePlan+"/"+this.code_vinculated+"/resumen"' class="btn btn-suscription">Pagar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            areas:[],
            data_areas:[],
            saveArea:'',
            area_id:'',
            code_vinculated:'',
            typePlan:'',
            selectPlan:[
                { plan: "PLAN_MENSUAL", text: "Plan Mensual" },
                { plan: "PLAN_ANUAL", text: "Plan Anual" }
            ],
        };
    },
    mounted(){
        this.getAreas();
    },
    methods:{
        getAreasBySelect(){
            axios.get(`/GetAreasByStudent/${this.area_id}`).then((response) => {
                this.data_areas = response.data;
                console.log(this.data_areas);
            });
        },
        getAreas(){
            axios.get(`/getAllAreas`).then((response) => {
                this.areas = response.data;
            });
        },
        modalPay(data){
            this.code_vinculated = data;
            $("#modalpay").modal("show");
        },
    },
}
</script>
<style>

.btn-select{
    background-color: #39ffe5;
    font-weight: 600;
    border-color: #39b0ff;
    color: black;
}
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
</style>

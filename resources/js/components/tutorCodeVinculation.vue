<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo">
                    <h4>Codigos Vinculados</h4>
                </div>
                <div class="text-left" v-show="user.type_user != 1">
                    <button type="button" class="btn btn-primary mt-2 mb-2" data-toggle="modal" data-target="#code">
                        Vincular Codigo
                    </button>
                </div>
                <div v-show="user.type_user === 1">
                    <select class="btn btn-select letra-boldfont" v-model="userSelected" name="type" v-on:change="getCodes()" style="margin-top: 5px; margin-block: 5px;">
                        <option disabled selected hidden value="0">Seleccione un usuario</option>
                        <option :value="client.id" v-for="(client, key) in usersClient" :key="key">{{ client.name + " " +client.last_name }}</option>
                    </select>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Clase</th>
                            <th>Nombre Tutor</th>
                            <th>Codigo</th>
                            <th>Pago valido hasta</th>
                            <th v-show="user.type_user != 1">Renovar pago</th>
                        </tr>
                    </thead>
                    <tbody v-for="(code, key) in codes" :key="key">
                        <tr>
                            <td>{{ code.area_name }}</td>
                            <td>{{ code.tutor_name }}</td>
                            <td>{{ code.code_vinculated }}</td>
                            <td>{{ code.enable_area }}</td>
                            <td v-if="checkPayDay(code.enable_area) <= 1">
                                <a class="btn btn-suscription" href="javascript:void(0)" @click="modalPay(code.code_vinculated)">Renovar Suscripción</a>
                            </td>
                            <td v-show="user.type_user != 1" v-if="checkPayDay(code.enable_area) > 1">
                                <span><b>Aun no disponible para pago</b></span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="modal fade" id="code" tabindex="-1" role="dialog" aria-labelledby="codeLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="codeLabel">Codigo a Vincular</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body"  style="align-self: center; text-align: center;">
                                <div class="form-group">
                                    <div style="text-align: center;">
                                        <label for="code">Codigo</label>
                                        <input type="text" class="form-control" name="code" v-model="code">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                        <select v-model="typePlan" class="btn btn-select letra-boldfont" name="type" >
                                            <option disabled selected hidden value="">Seleccione un plan</option>
                                            <option :value="plan.plan" v-for="(plan, key) in selectPlan" :key="key">{{ plan.text }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <a href="javascript:void(0)" class="btn btn-primary" @click="validateCode()">Ir a pagar</a>
                            </div>
                        </div>
                    </div>
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
                        <a :href='"/compra/plan/"+this.typePlan+"/"+this.code_vinculated+"/resumen"' class="btn btn-suscription">Renovar Suscripción</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import moment from "moment";

    moment.tz.setDefault("America/Bogota");
    moment.locale("es");

    export default {
        props:['user'],
        data(){
            return{
                code:"",
                codes:[],
                contentData:{},
                isEmpty: true,
                id_to_edit: "",
                selectPlan:[
                    { plan: "PLAN_MENSUAL", text: "Plan Mensual" },
                    { plan: "PLAN_ANUAL", text: "Plan Anual" }
                ],
                typePlan:"",
                code_vinculated:"",
                usersClient:"",
                userSelected:0,
            }
        },
        mounted(){
            this.getCodes();
            this.getUsersClient();
        },
        methods:{
            getCodes(){
                let url = "/getCodesPerUser/"+this.userSelected;
                axios.get(url).then((response) =>{
                    this.codes = response.data;
                })
            },

            consultCode(){
                axios.get(`codes/${this.code}`).then((response)=>{
                    this.contentData = response.data;
                    if(Object.keys(response.data).length === 0 ){
                        this.isEmpty = true
                    }else{
                        this.isEmpty = false
                    }
                })
            },

            validateCode(){
                if(this.typePlan != '' && this.code != ''){
                    var url = "/validateCode/"+this.code;
                    axios.get(url).then(
                        (response) => {
                            this.validate = response.data;

                            if(this.validate === 0){
                                location.href=`/compra/plan/${this.typePlan}/${this.code}/resumen`;
                            }else{
                                toastr.error("Código invalido, por favor ingrese un código valido");
                            }
                    });
                }else{
                    toastr.error("Debe completar todos los campos del formulario");
                }
            },

            getUsersClient(){
                var url = "/getUsersClient";
                    axios.get(url).then((response) => {
                        this.usersClient = response.data;
                    });
            },

            modalPay(data){
                this.code_vinculated = data;
                $("#modalpay").modal("show");
            },

            checkPayDay(value){
                var datePay = moment(value);
                var presentDay = moment();

                return datePay.diff(presentDay, 'days');
            },

            edit(data){
                this.code = data.code_vinculated,
                this.id_to_edit= data.id;
                $("#code").modal("show");
            },
            saveCodes(){
                if(this.id_to_edit === ""){
                    axios.post('vinculationsTutor',{
                        id_tutor: this.contentData.id_tutor,
                        id_student: this.user.id,
                        code_vinculated: this.code
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.code = "";
                        window.location = "/tutorCodeVinculation"
                        $("#code").modal("hide");
                    }).catch((error)=>{
                        toastr.info("Upss ha ocurrido un error, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }else{
                    axios.patch(`vinculationsTutor/${this.id_to_edit}`,{
                        id_tutor: this.contentData.id_tutor,
                        id_student: this.user.id,
                        code_vinculated: this.code
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.id_to_edit = "";
                        this.code = "";
                        window.location = "/tutorCodeVinculation"
                        $("#code").modal("hide");
                    }).catch((error)=>{
                        toastr.info("Upss ha ocurrido un error, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }
            },

            dropVinculation(id){
                if(window.confirm("Seguro que desea eliminar este dato?")){
                    axios.delete(`vinculationsTutor/${id}`).then((response)=>{
                        toastr.success(response.data);
                        window.location = "/tutorCodeVinculation"
                    })
                }
            }
        }
    }
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
.btn-select{
    background-color: #39ffe5;
    font-weight: 600;
    border-color: #39b0ff;
    color: black;
}

</style>


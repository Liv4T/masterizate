<template>
<div class="modal fade" id="CreateE">
    <div class="modal-lg modal-dialog">
        <div class="modal-content">
            <form class="needs-validation" v-on:submit.prevent="createReason" novalidate>
                <div class="modal-header">
                    <h4>Crear Motivo</h4>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label for="name">Nombre del Motivo</label>
                            <input type="text" name="reason" class="form-control" v-model="reason" />
                            <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" class="btn btn-warning" value="Guardar" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import moment from 'moment'

moment.tz.setDefault("America/Bogota");
moment.locale('es');
Vue.use(require("vue-moment"));
export default {
   props: [
        "id_student",
        "name_classroom",
        "id_classroom"
    ],
   data(){
       return {
           reason: "",
       };
   },
   mounted(){

   },
   methods: {
       getMenu(){
           window.location = "/studentReport/" + this.id_student + "/" + this.name_classroom + "/" +this.id_classroom;
       },
       createReason(){
           var url="/createReason"
           axios.post(url, {

                reason: this.reason,

            }).then((response) => {
            toastr.success("Motivo creado exitosamente");
            this.getMenu();
            
            })
            .catch((error) => {});
       }
   }, 
};
</script>
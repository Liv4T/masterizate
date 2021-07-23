<template>
<div class="modal fade" id="CreateT">
    <div class="modal-lg modal-dialog">
        <div class="modal-content">
            <form class="needs-validation" v-on:submit.prevent="createTrimestre" novalidate>
                <div class="modal-header">
                    <h4>Crear Trimestre</h4>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label for="name">Nombre del Trimestre</label>
                            <input type="text" name="trimestre" class="form-control" v-model="trimestre" />
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
export default {
   data(){
       return {
           trimestre: "",
       };
   },
   mounted(){

   },
   methods: {
       getMenu(){
           window.location = "/trimestre_adm";
       },
       createTrimestre(){
           var url="/createTrimestre"
           axios.post(url, {

                nombre: this.trimestre,

            }).then((response) => {
            toastr.success("Trimestre creado exitosamente");
            this.getMenu();
            
            })
            .catch((error) => {});
       },
   }, 
};
</script>
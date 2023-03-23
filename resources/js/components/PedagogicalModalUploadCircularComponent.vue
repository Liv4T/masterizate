<template>
    <!-- Modal -->
    <div class="modal fade" id="updatePedagogicalCircular" tabindex="-1" role="dialog" aria-labelledby="updatePedagogicalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updatePedagogicalLabel">Actuaizar Circular</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-lg-6">
                        <input class="form-control" type="file" accept=".pdf" placeholder="Seleccione un archivo" @change="onFileChange($event)"/>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="update">Actualizar Cambios</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['pedagogical_id','getPedagogical'],
    data(){
        return {
            data: '',
        }
    },
    mounted(){

    },
    methods: {
        onFileChange(file) {
            let files = file.target.files || file.dataTransfer.files;
            this.data = new FormData();
            if (files.length > 0) {
                //console.log('evento');
                let file = files[0];
                let _fileNameSplit=file.name.split(".");

                // if uploaded file is valid with validation rules
                let file_extension=_fileNameSplit[_fileNameSplit.length-1];
                let file_name=file.name.replace(`.${file_extension}`,'');

                this.data.append("file", files[0]);
                this.data.append("name", file_name);

            }

        },
        update(){
            var url="/update/pedagogical/circular/" + this.pedagogical_id;
            axios.post(url, this.data).then((response) => {
                toastr.success("Archivo actualizado correctamente");
                this.getPedagogical();
                $("#updatePedagogicalCircular").modal("hide");
            }).catch((error) => {
                toastr.success(error);
            });
        },
    }
}
</script>

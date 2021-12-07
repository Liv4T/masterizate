<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Creación de Salidas Pedagogicas</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Nombre de la Actividad</label>
                        <input type="text" class="form-control" v-model="name_activity"/>
                    </div>

                    <div class="form-group">
                        <label for="selectClass">Grado</label>
                        <multiselect name="selectClass" v-model="grade" :options="newGradeOptions" :multiple="false"
                            :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Seleccione una"
                            label="text" track-by="id" :preselect-first="true">
                            <template slot="selection" slot-scope="{ values, isOpen }">
                                <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                    {{ values.length }}
                                    opciones
                                    selecionadas
                                </span>
                            </template>
                        </multiselect>
                    </div>

                    <div class="form-group">
                        <label>Lugar</label>
                        <input type="text" class="form-control" v-model="place"/>
                    </div>

                    <div class="form-group">
                        <label>Fecha de Salida</label>
                        <input type="datetime-local" class="form-control" v-model="departure_time"/>
                    </div>

                    <div class="form-group">
                        <label>Fecha de Llegada</label>
                        <input type="datetime-local" class="form-control" v-model="time_arrival"/>
                    </div>

                    <div class="form-group">
                        <label>Descripción</label>
                        <textarea class="form-control" v-model="description"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="file" accept=".pdf" placeholder="Seleccione un archivo" @change="onFileChange($event)" required="required"/>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="savePedagogic">Guardar Cambios</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['gradeOptions','getPedagogical'],
    data(){
        return{
            name_activity: '',
            grade: {},
            place: '',
            departure_time: '',
            time_arrival: '',
            description: '',
            permission: false,
            newGradeOptions:[],
            data:"",
        }
    },
    watch:{
        gradeOptions(newVal, oldVal){
            if(newVal !== oldVal){
                newVal.forEach((element)=>{
                    this.newGradeOptions.push({
                        id:element.id_grade,
                        id_classroom: element.id_grade,
                        text: element.grade
                    })
                })
            }
        }
    },
    methods:{
        savePedagogic(){
            if (!this.data) {
                toastr.info('La circular es obligatoria.');
            }else{
                this.data.append("name_activity", this.name_activity);
                this.data.append("grade",this.grade.text);
                this.data.append("id_classroom",this.grade.id_classroom);
                this.data.append("place", this.place);
                this.data.append("departure_time", this.departure_time);
                this.data.append("time_arrival", this.time_arrival);
                this.data.append("description", this.description);

                axios.post(`pedagogic`,this.data).then((response)=>{
                    toastr.success(response.data)
                    //window.location = "/pedagogic";
                    this.getPedagogical();
                    $("#exampleModal").modal("hide");
                }).catch((error)=>{
                    toastr.info('Ha ocurrido algo, intenta de nuevo mas tarde');
                    console.log(error)
                })
            }
        },
        onFileChange(file) {
            let files = file.target.files || file.dataTransfer.files;
            this.data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                let _fileNameSplit=file.name.split(".");

                // if uploaded file is valid with validation rules
                let file_extension=_fileNameSplit[_fileNameSplit.length-1];
                let file_name=file.name.replace(`.${file_extension}`,'');

                this.data.append("file", files[0]);
                this.data.append("name", file_name);

            }
            console.log(this.data);

        },
    }
}
</script>

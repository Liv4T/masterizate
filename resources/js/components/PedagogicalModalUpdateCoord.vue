<template>
    <!-- Modal -->
    <div class="modal fade" id="updatePedagogical" tabindex="-1" role="dialog" aria-labelledby="updatePedagogicalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updatePedagogicalLabel">Actualización de Salidas Pedagogicas</h5>
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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="savePedagogic">Actualizar Cambios</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['pedagogicalToEdit', 'gradeOptions'],
    data(){
        return{
            name_activity: '',
            grade: {},
            place: '',
            departure_time: '',
            time_arrival: '',
            description: '',
            id: '',
            newGradeOptions:[]
        }
    },
    watch:{
        pedagogicalToEdit(newValue, oldValue){
            if(newValue != oldValue){
                this.name_activity = newValue.name_activity,
                this.grade = {
                    id: newValue.id_classroom,
                    id_classroom: newValue.id_classroom,
                    text:newValue.grade
                },
                this.place = newValue.place,
                this.description = newValue.description,
                this.departure_time = newValue.departure_time,
                this.time_arrival = newValue.time_arrival,
                this.id = newValue.id
            }
        },
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
            axios.put(`pedagogic/${this.id}`,{
                name_activity: this.name_activity,
                grade: this.grade.text,
                id_classroom: this.grade.id_classroom,
                place: this.place,
                departure_time: this.departure_time,
                time_arrival: this.time_arrival,
                description: this.description
            }).then((response)=>{
                toastr.success(response.data)
                window.location = "/pedagogic";
            }).catch((error)=>{
                toastr.info('Ha ocurrido algo, intenta de nuevo mas tarde');
                console.log(error)
            })
        }
    }
}
</script>
<template>
    <!-- Modal -->
    <div class="modal fade" id="updateUtils" tabindex="-1" role="dialog" aria-labelledby="updateUtilsLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updateUtilsLabel">Actualización de Utiles</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Util</label>
                        <input type="text" class="form-control" v-model="util"/>
                    </div>

                    <div class="form-group">
                        <label>Cantidad</label>
                        <input type="text" class="form-control" v-model="quantity"/>
                    </div>

                    <div class="form-group">
                        <label>Grado</label>
                        <select class="form-control" v-model="grade">
                            <option :value="grades.grade" v-for="(grades, key) in gradeOptions" :key="key">
                                {{grades.grade}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="saveUtils">Actualizar Cambios</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['utilsToEdit', 'gradeOptions'],
    data(){
        return{
            util: '',
            quantity: '',
            grade:'',
            id: ''
        }
    },
    watch:{
        utilsToEdit(newValue, oldValue){
            if(newValue != oldValue){
                this.util = newValue.util,
                this.quantity = newValue.quantity,
                this.grade = newValue.grade,
                this.id = newValue.id
            }
        }
    },
    methods:{
        saveUtils(){
            axios.put(`utils/${this.id}`,{
                util: this.util,
                quantity: this.quantity,
                grade: this.grade
            }).then((response)=>{
                toastr.success(response.data)
                window.location = "/utils";
            }).catch((error)=>{
                toastr.info('Ha ocurrido algo, intenta de nuevo mas tarde');
                console.log(error)
            })
        }
    }
}
</script>
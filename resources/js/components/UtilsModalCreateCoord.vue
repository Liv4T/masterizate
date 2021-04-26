<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Creación de Utiles</h5>
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
                    <button type="button" class="btn btn-primary" v-on:click="saveUtils">Guardar Cambios</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['gradeOptions'],
    data(){
        return{
            util: '',
            quantity: '',
            grade:''
        }
    },
    methods:{
        saveUtils(){
            axios.post(`utils`,{
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
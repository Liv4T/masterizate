<template>
    <div class="back row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <div class="card-header fondo">
                    <h4>Utiles</h4>
                </div>
            </div>
            <button class="mb-4 btn btn-primary" data-toggle="modal" data-target="#exampleModal">Crear Utiles</button>
            <div class="card">
                <div class="card-body">
                    <div id="accordion">
                        <div class="card" v-for="(utils, grade) in utils" :key="grade">
                            <div class="card-header" :id="`${grade}`">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" :data-target="`#heading${grade}`" aria-expanded="true" aria-controls="collapseOne">
                                        {{grade}}
                                    </button>
                                </h5>
                            </div>

                            <div :id="`heading${grade}`" class="collapse hide" :aria-labelledby="`${grade}`" data-parent="#accordion">
                                <div class="card-body">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Util</th>
                                                <th>Cantidad</th>
                                                <th>Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(utils, key) in utils" :key="key">
                                            <tr>
                                                <td>{{utils.util}}</td>
                                                <td>{{utils.quantity}}</td>
                                                <td>
                                                    <button class="btn btn-primary" v-on:click="updateUtil(utils)">Editar</button>
                                                    <button class="btn btn-danger" v-on:click="deleteUtil(utils.id)">Eliminar</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <utils-modal-create-coord :gradeOptions="gradeOptions"></utils-modal-create-coord>
        <utils-modal-edit-coord :utilsToEdit="utilsToEdit" :gradeOptions="gradeOptions"></utils-modal-edit-coord>
    </div>
</template>
<script>
import _ from 'lodash'; 
import UtilsModalCreateCoord from './UtilsModalCreateCoord.vue';
import UtilsModalEditCoord from './UtilsModalUpdateCoord';
export default {
    components: { 
      UtilsModalCreateCoord,
      UtilsModalEditCoord
    },
    props:["user"],
    data(){
        return{
            gradeOptions:[],
            utils:[],
            utilsToEdit:{}
        }
    },
    mounted(){
        this.getUtils();
        this.getGrades();
    },
    methods:{
        getUtils(){
            axios.get('getUtils').then((response)=>{
                this.groupData(response.data)
            })
        },

        getGrades(){
            axios.get('getGrades').then((response)=>{
                this.gradeOptions= response.data
            })
        },

        groupData(data){
            const result = _.chain(data).groupBy("grade").value();
            this.utils = result
        },

        updateUtil(data){
            this.utilsToEdit = data;
            $('#updateUtils').modal('show');
        },     

        deleteUtil(id){
            if (window.confirm("Deseas eliminar este dato?")) {
                axios.delete(`utils/${id}`).then((response)=>{
                    toastr.success(response.data);
                    this.getUtils();
                })
            }
        }
    }
}
</script>
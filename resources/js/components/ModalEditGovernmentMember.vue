<template>
    <div class="modal fade bd-example-modal-lg" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Creación de Miembros de Gobierno Escolar</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Nombre</label>
                        <multiselect v-model="nameOptions" :options="myOptions" :multiple="false"
                            :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                            placeholder="Seleccione una o varias" label="text" track-by="id"
                            :preselect-first="true">
                                <template slot="selection" slot-scope="{ values, isOpen }"><span
                                    class="multiselect__single"
                                    v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                        selecionadas</span>
                                </template>
                        </multiselect>
                    </div>

                    <div class="form-group">
                        <label>Posición</label>
                        <input class="form-control" type="text" v-model="memberEdit.position"/>
                    </div>

                    <div class="form-group">
                        <label>Descripción</label>
                        <input class="form-control" type="text" v-model="memberEdit.description"/>
                    </div>
                    
                    <div class="form-group">
                        <label>Orden en listado</label>
                        <input class="form-control" type="text" v-model="memberEdit.order"/>
                    </div>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-on:click="updateMembers()">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
    props:['memberEdit','getMembers'],
    data(){
        return{
            nameOptions:{},
            myOptions:[]
        }
    },
    watch: { 
        memberEdit: function(newMember, oldMember) {
            if(newMember !== oldMember){
                this.memberEdit = newMember;
                this.getUsers();
            }
        }
    },
    components: {
        Multiselect
    },
    methods:{
        updateMembers(){
            axios.put(`/members/${this.memberEdit.id}`,{
                member: this.nameOptions.text,
                position: this.memberEdit.position,
                description: this.memberEdit.description,
                order: this.memberEdit.order,
                user_id: this.nameOptions.id,
                image: this.nameOptions.image
            }).then((response)=>{
                toastr.success(response.data);
                $('#editModal').modal("hide");
                this.getMembers();
            }).catch(error => {
                toastr.danger(error)
                console.log(error)
            })
        },
        getUsers(){
            axios.get('getUsers').then(response => {
                response.data.forEach(e => {
                    if(this.memberEdit.user_id === e.id){
                        this.nameOptions = {
                            id: e.id,
                            user_id: e.id,
                            text: `${e.name}`+` ${e.last_name}`,
                            image: e.picture
                        };
                    }
                    this.myOptions.push({
                        id: e.id,
                        user_id: e.id,
                        text: `${e.name}`+` ${e.last_name}`,
                        image: e.picture
                    });
                });
            })
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
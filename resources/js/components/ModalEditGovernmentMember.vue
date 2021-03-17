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
                        <input class="form-control" type="text" v-model="memberEdit.member"/>
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
export default {
    props:['memberEdit','getMembers'],
    data(){
        return{}
    },
    watch: { 
        editMember: function(newMember, oldMember) {
            if(newMember !== oldMember){
                this.memberEdit = newMember
            }
        }
    },
    methods:{
        updateMembers(){
            axios.put(`/members/${this.memberEdit.id}`,{
                member: this.memberEdit.member,
                position: this.memberEdit.position,
                description: this.memberEdit.description,
                order: this.memberEdit.order
            }).then((response)=>{
                toastr.success(response.data);
                this.getMembers();
            }).catch(error => {
                toastr.danger(error)
                console.log(error)
            })
        }
    }
}
</script>
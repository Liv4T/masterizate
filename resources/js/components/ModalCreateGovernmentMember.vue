<template>
    <div class="modal fade bd-example-modal-lg" id="createModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
                        <input class="form-control" type="text" v-model="name"/>
                    </div>

                    <div class="form-group">
                        <label>Posición</label>
                        <input class="form-control" type="text" v-model="position"/>
                    </div>

                    <div class="form-group">
                        <label>Descripción</label>
                        <input class="form-control" type="text" v-model="description"/>
                    </div>
                    
                    <div class="form-group">
                        <label>Orden en listado</label>
                        <input class="form-control" type="text" v-model="order"/>
                    </div>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-on:click="saveMembers()">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props:['user', 'getMembers'],
    data(){
        return{
            members:[],
            name:"",
            position:"",
            description:"",
            order:"",
        }
    },
    methods:{
        saveMembers(){
            axios.post('/members',{
                member: this.name,
                position: this.position,
                description: this.description,
                order: this.order,
                user_id: this.user.id
            }).then((response)=>{
                toastr.success(response.data);
                
                this.name = "",
                this.position = "",
                this.description = "",
                this.order = "",
                
                this.getMembers();
                $("#createModal").modal("hide");
            }).catch(error => {
                toastr.danger(error)
                console.log(error)
            })
        }
    }
}
</script>
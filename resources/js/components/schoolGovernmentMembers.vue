<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header fondo text-center">
                        <strong class="h3">Miembros del Gobierno Escolar</strong>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary mb-3" data-toggle="modal" data-target="#createModal">Crear Miembro</button>
                        <table class="table">                    
                            <thead>
                                <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Posición</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Orden en Listado</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, id) in members" :key="id">
                                    <td>{{data.member}}</td>
                                    <td>{{data.position}}</td>
                                    <td>{{data.description}}</td>
                                    <td>{{data.order}}</td>
                                    <td>
                                        <img
                                            width="70px"
                                            :src="data.imageSchoolGovernment"
                                            alt
                                            />
                                    </td>
                                    <td>
                                        <button class="btn btn-success" v-on:click="()=>editMember(data)">Editar</button>
                                        <button class="btn btn-danger" v-on:click="()=>deleteMember(data.id)">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <modal-create-government-member :user="user" :getMembers="getMembers"></modal-create-government-member>
        <modal-edit-government-member :memberEdit="memberEdit" :getMembers="getMembers"></modal-edit-government-member>
    </div>
</template>
<script>
export default {
    props:['user'],
    data(){
        return{
            members:[],
            name:"",
            position:"",
            description:"",
            order:"",
            memberEdit:{}
        }
    }, 
    mounted(){
        this.getMembers();
    },
    methods:{
        getMembers(){
            axios.get('/members').then(response =>{
                this.members = response.data
            })
        },
        editMember(value){
            this.memberEdit = value;
            $("#editModal").modal("show");
        },
        deleteMember(id){
            if (window.confirm("Deseas eliminar este dato?")) {
                axios.delete(`/members/${id}`).then(response=>{
                    toastr.success(response.data);
                    this.getMembers();
                }).catch(error => {
                    toastr.danger("Intentalo de nuevo mas tarde");
                    console.log(error);
                })
            }
        }
    }
}
</script>
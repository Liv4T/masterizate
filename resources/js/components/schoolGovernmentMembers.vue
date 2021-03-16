<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header fondo text-center">
                        <strong class="h3">Miembros del Gobierno Escolar</strong>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary mb-3">Crear Miembro</button>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Posición</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, id) in members" :key="id">
                                    <td>{{data.member}}</td>
                                    <td>{{data.position}}</td>
                                    <td>{{data.description}}</td>
                                    <td>
                                        <button class="btn btn-success">Editar</button>
                                        <button class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            members:[]
        }
    }, 
    mounted(){

    },
    methods:{
        getMembers(){
            axios.get('/members').then(response =>{
                this.members = response.data
            })
        }
    }
}
</script>
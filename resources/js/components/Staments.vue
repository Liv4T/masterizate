<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header fondo">
                        <strong>Estamentos</strong>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <button class="btn btn-primary" data-toggle="modal" data-target="#staments">Crear Estamento</button>
                            <a href="chatGobernment" class="btn btn-primary">Chats</a>
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Estamento</th>
                                    <th>Miembro</th>
                                    <th>Rol</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(stament, key) in staments" :key="key">
                                <tr>
                                    <td>{{stament.stament}}</td>
                                    <td>{{stament.name}}</td>
                                    <td>{{stament.rol}}</td>
                                    <td>
                                        <button class="btn btn-success" v-on:click="editStament(stament)">Editar</button>
                                        <button class="btn btn-danger" v-on:click="deleteStament(stament.id)">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="staments" tabindex="-1" role="dialog" aria-labelledby="stamentsLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="stamentsLabel">Creación de Estamentos</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Estamento</label>
                        <input class="form-control" type="text" v-model="stament"/>
                    </div>

                    <div class="form-group">
                        <label>Rol</label>
                        <input class="form-control" type="text" v-model="rol"/>
                    </div>

                    <div class="form-group">
                        <label>Miembro</label>
                        <multiselect v-model="memberSave" :options="usersOption" :multiple="true"
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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="saveStaments">Guardar Cambios</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
    data(){
        return{
            id: "",
            stament:"",
            rol:"",
            memberSave:[],
            staments:[],
            getUsers:[],
            usersOption:[]
        }
    },
    mounted(){
        this.getStaments();
        this.getAllUsers();
    },
    components: {
        Multiselect,
    },
    methods:{
        getStaments(){
            axios.get('/getStaments').then(response => {
                this.staments =response.data;
            })
        },
        getAllUsers(){
            axios.get('/getUsers').then(response => {
                let users = response.data;
                users.forEach(element => {
                    this.usersOption.push({
                        id: element.id,
                        text: `${element.name} ${element.last_name}`,
                        user_name: element.user_name
                    })    
                });
            })
        },
        saveStaments(){
            if(this.id == ""){
                this.memberSave.forEach(member => {
                    axios.post('/staments',{
                        stament: this.stament,
                        rol: this.rol,
                        member: member.user_name,
                        name: member.text
                    }).then((response) => {
                        toastr.success(response.data);
                    }).catch((error) => {
                        console.log(error);
                    toastr.danger('Intenta de nuevo mas tarde'); 
                    })
                })
                this.getStaments();
                $('#staments').modal('hide');
            }else{
                this.memberSave.forEach(member => {
                    axios.put(`/staments/${this.id}`,{
                        stament: this.stament,
                        rol: this.rol,
                        member: member.user_name,
                        name: member.text
                    }).then((response) => {
                        toastr.success(response.data);
                    }).catch((error) => {
                        console.log(error);
                    toastr.danger('Intenta de nuevo mas tarde'); 
                    })
                })
                this.getStaments();
                $('#staments').modal('hide');
                
            }
        },
        editStament(stament){
            this.id = stament.id,
            this.stament = stament.stament,
            this.rol = stament.rol,

            this.usersOption.forEach(user => {
                if(stament.member === user.user_name){
                    this.memberSave = user;
                }
            })
            $('#staments').modal('show');
        },
        deleteStament(id){
            if (window.confirm("Desea Eliminar a este miembro?")) {
                axios.delete(`/staments/${id}`).then(response =>{
                    this.getStaments();
                    toastr.info(response.data);
                }).catch(error => {
                    console.log(error);
                    toastr.error('Intenta de nuevo mas tarde');
                })
            }
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
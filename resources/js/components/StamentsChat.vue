<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div v-show="user.type_user === 6" class="form-group">
                    <a href="/staments" class="btn btn-primary">Volver</a>
                </div>
                <div class="card">
                    <div class="card-header fondo">
                        <strong>Chats Disponibles</strong>
                    </div>
                    <div class="carb-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Estamento</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(stament, key) in staments" :key="key">
                                <tr>
                                    <th>{{stament.stament}}</th>
                                    <th>
                                        <button class="btn btn-primary" v-on:click="sendTitleMessage(stament.stament)">Abrir Chat</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    <modal-chat :chat="chat" :user="user"></modal-chat>
    </div>
</template>
<script>
export default {
    props:['user'],
    data(){
        return{
            staments:[],
            chat:""
        }
    },
    mounted(){
        this.getStaments();
    },
    methods:{
        getStaments(){
            axios.get('/getChatAsigment').then(response => {
                let chat = response.data;
                
                var hash = {};
                chat = chat.filter(function(current) {
                    var exists = !hash[current.stament];
                    hash[current.stament] = true;
                    return exists;
                });
                this.staments = chat;
            })
        },
        sendTitleMessage(title){
            this.chat = title;
            $('#chatModal').modal('show');
        }
    }
}
</script>
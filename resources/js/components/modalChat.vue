<template>
    <div class="modal fade bd-example-modal-lg" id="chatModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{chat}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div v-for="(infoChat, key) in allChat" :key="key">
                        <div v-show="fullName !== infoChat.member" class="col-md-7 float-left mb-3" style="background-color:#278080; border-radius:8px; color:white;">                        
                            <strong>{{infoChat.member}}</strong>
                            <p>{{infoChat.message}}</p>
                        </div>
                        
                        <div v-show="fullName === infoChat.member" class="form-group col-md-7 float-right" style="background-color:#F39405; border-radius:8px; color:white;">
                            <p>{{infoChat.message}}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="form-group float-left">
                        <textarea v-model="message" type="textbox" class="col-md-12 form-control" placeholder="Escribe tu mensaje" v-on:keyup.enter="(e)=>sendMessage(e.target.value)"/>
                    </div>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:['chat','user'],
    data(){
        return{
            message:[],
            allChat:[],
            fullName: this.user.name+' '+this.user.last_name,
        }
    },
    watch:{
        chat: function(){
            this.getChat();
        }
    },
    methods:{
        getChat(){
            axios.get(`getChat/${this.chat}`).then(response => {
                this.allChat = response.data;
            })
        },
        sendMessage(message){
            axios.post('chat',{
                    chat: this.chat,
                    message: message,
                    member: this.user.name+' '+this.user.last_name
                }).then(()=>{
                    this.message = [];
                    this.getChat();
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<template>
    <div class="modal fade bd-example-modal-lg" id="chatModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
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
                        
                        <div v-on:mouseover="mouseover(key)" v-on:mouseleave="mouseleave(key)" v-show="fullName === infoChat.member" class="form-group col-md-7 float-right text-center" style="background-color:#F39405; border-radius:8px; color:white; display:flex;">
                            <p>{{infoChat.message}}</p>
                            <div :id="`drop${key}`" style="display:none; margin-left: 79px;" class="btn-group dropright">
                               <button class="btn dropdown-toggle" style="color:white;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" v-on:click="deleteMessage(key)">Eliminar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <input v-model="message" type="textbox" class="col-md-12 form-control" placeholder="Escribe tu mensaje" v-on:keyup.enter="(e)=>sendMessage(e.target.value)"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from '../../../connectionDbFirebase';
export default {
    props:['chat','user'],
    data(){
        return{
            message:[],
            allChat:[],
            fullName: this.user.name+' '+this.user.last_name,
            showButton: false,
        }
    },
    watch:{
        chat: function(){
            this.getChat();
        }
    },
    methods:{
        async getChat(){
            const starCountRef = firebase.database().ref(`chatGovernment/${this.chat}`);
            starCountRef.on('value', (snapshot) => {
                this.allChat = snapshot.val();
            });
        },
        sendMessage(message){
            const data = {
                chat: this.chat,
                message: message,
                member: this.user.name+' '+this.user.last_name
            }

            firebase.database().ref(`chatGovernment/${this.chat}`).push(data).then(()=>{
                this.getChat();
                this.message=[]
            }).catch(error => {
                console.log(error)
            })
        },
        async deleteMessage(key){
            firebase.database().ref(`chatGovernment/${this.chat}/${key}`).remove();
            this.getChat();
        },
        
        mouseover(key){
            $(`#drop${key}`).css('display', 'flex');
        },    
        mouseleave(key){
            $(`#drop${key}`).css('display', 'none');
        }
    }
}
</script>
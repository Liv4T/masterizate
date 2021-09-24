<template>
    <div>        
        <div class="form-group width-r mx-auto">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <a v-on:click="showSection('messages')">
                            <h4 class="letra-poppins-bold">Mensajes</h4>
                        </a>

                        <a v-on:click="showSection('calendar')">
                            <h4 class="letra-poppins-bold">Calendario</h4>
                        </a>

                        <a v-on:click="showSection('foro')">
                            <h4 class="letra-poppins-bold">Foro</h4>
                        </a>

                        <a v-on:click="showSection('chat')">
                            <h4 class="letra-poppins-bold">Chat</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto text-center">
                <div v-if="activetab === 'messages'">
                    <mensajes-component :user="user"></mensajes-component>
                </div>
                <div v-if="activetab === 'calendar'">                        
                    <calendar-component :type_u="type_u" :user="user"></calendar-component>
                </div>
                <div v-if="activetab === 'foro'">
                    <div v-html="htmlForum"></div>
                </div>
                <div v-if="activetab === 'chat'">                        
                    <groups :initial-groups="groups" :user="user"></groups>
                </div>                                
            </div>
        </div>        
    </div>
</template>
<script>
export default { 
    props:['user'],   
    data() {
        return {
            activetab: null,
            type_u: null,
            groups:[],
            htmlForum:null
        };
    },  
    mounted(){
        this.type_u = this.user.type_user;
        axios.get('/chat2').then(response=>{
            this.groups= response.data
        });

        axios.get('questions').then((response)=>{
            this.htmlForum = response.data;
        });
    },
    methods: {        
        showSection(section){
            this.activetab = section
        }
    },
};
</script>
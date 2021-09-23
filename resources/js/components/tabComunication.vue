<template>
    <div>        
        <div class="form-group width-r mx-auto">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <a v-on:click="showSection('messages')" v-bind:class="[activetab === 'messages' ? 'active' : '']">
                            <h4 class="letra-poppins-bold">Mensajes</h4>
                        </a>

                        <a v-on:click="showSection('calendar')" v-bind:class="[activetab === 'calendar' ? 'active' : '']">
                            <h4 class="letra-poppins-bold">Calendario</h4>
                        </a>

                        <a v-on:click="showSection('foro')" v-bind:class="[activetab === 'foro' ? 'active' : '']">
                            <h4 class="letra-poppins-bold">Foro</h4>
                        </a>

                        <a v-on:click="showSection('chat')" v-bind:class="[activetab === 'chat' ? 'active' : '']">
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
<style>
.tabs {
  margin-top: 10px;
  overflow: hidden;
  margin-left: 30px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 5px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 1px 20px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #bfbfbf;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  color: #fff !important;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}
/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #00cbcec1;
  color: #fff;
  border-bottom: 2px solid #fff;
  cursor: default;
}
.tabcontent {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
</style>
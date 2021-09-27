<template>
    <div>        
        <div class="form-group">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <a v-on:click="showSection('profile')" v-bind:class="[activetab === 'profile' ? 'active' : '']"><h4 class="letra-poppins-bold">Mi Perfil</h4></a>
                        <a v-on:click="showSection('administrative')" v-bind:class="[activetab === 'administrative' ? 'active' : '']"><h4 class="letra-poppins-bold">Administrativo</h4></a>
                        <a v-on:click="showSection('comunications')" v-bind:class="[activetab === 'comunications' ? 'active' : '']"><h4 class="letra-poppins-bold">Comunicaciones</h4></a>                        
                        <a v-on:click="showSection('academic')" v-bind:class="[activetab === 'academic' ? 'active' : '']"><h4 class="letra-poppins-bold">Académico</h4></a>
                        <a v-on:click="showSection('formation')" v-bind:class="[activetab === 'formation' ? 'active' : '']"><h4 class="letra-poppins-bold">Formación</h4></a>
                        <a v-on:click="showSection('government')" v-bind:class="[activetab === 'government' ? 'active' : '']"><h4 class="letra-poppins-bold">Gobierno Escolar</h4></a>
                        <a v-on:click="showSection('reports')" v-bind:class="[activetab === 'reports' ? 'active' : '']"><h4 class="letra-poppins-bold">Mis Reportes</h4></a>
                    </div>                    
                </div>
            </div>
        </div>
        
        <div>
            <div id="tabs" class="col-md-12">
                <div>
                    <div v-if="activetab === 'profile'">
                        <perfil-docente></perfil-docente>
                    </div>
                    <div v-if="activetab === 'administrative'">
                        <administ-tab :user="user"></administ-tab>
                    </div>
                    <div v-if="activetab === 'comunications'">
                        <comunication-tab :user="user"></comunication-tab>
                    </div>
                    <div v-if="activetab === 'academic'">
                        <academic-tab :user="user"></academic-tab>
                    </div>
                    <div v-if="activetab === 'formation'">
                        <formation-tab :user="user"></formation-tab>
                    </div>
                    <div v-if="activetab === 'government'">
                         <school-gov-tab :user="user"></school-gov-tab>
                    </div>
                    <div v-if="activetab === 'reports'">
                        <report-admin></report-admin>
                    </div>
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
        };
    },  
    mounted(){
        
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

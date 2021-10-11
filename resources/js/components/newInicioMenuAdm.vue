<template>
    <div>        
        <div class="form-group">
            <div class="tabAdmin">
                <a v-on:click="showSection('profile')" v-bind:class="[activetab === 'profile' ? 'active fondo' : '']"><h3>Mi Perfil</h3></a>
                <a v-on:click="showSection('administrative')" v-bind:class="[activetab === 'administrative' ? 'active fondo' : '']"><h3>Administrativo</h3></a>
                <a v-on:click="showSection('comunications')" v-bind:class="[activetab === 'comunications' ? 'active fondo' : '']"><h3>Comunicaciones</h3></a>                        
                <a v-on:click="showSection('academic')" v-bind:class="[activetab === 'academic' ? 'active fondo' : '']"><h3>Académico</h3></a>
                <a v-on:click="showSection('formation')" v-bind:class="[activetab === 'formation' ? 'active fondo' : '']"><h3>Formación</h3></a>
                <a v-on:click="showSection('government')" v-bind:class="[activetab === 'government' ? 'active fondo' : '']"><h3>Gobierno Escolar</h3></a>
                <a v-on:click="showSection('reports')" v-bind:class="[activetab === 'reports' ? 'active fondo' : '']"><h3>Mis Reportes</h3></a>
            </div>
        </div>
        
        <div>
            <div id="tabAdmin" class="col-md-12">
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
.tabAdmin {
  margin-top: 10px;
  overflow: hidden;
  margin-left: 30px;
  margin-bottom: -2px;
}

.tabAdmin ul {
  list-style-type: none;
  margin-left: 5px;
}

.tabAdmin a {
  float: left;
  cursor: pointer;
  padding: 5px 4px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #bfbfbf;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  color: #fff !important;
}
.tabAdmin a:last-child {
  border-right: 1px solid #ccc;
}
/* Change background color of tabAdmin on hover */
.tabAdmin a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabAdmin a.active {
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

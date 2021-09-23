<template>
    <div>        
        <div class="form-group">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <a v-on:click="showSection('planifGen')" v-bind:class="[activetab === 'planifGen' ? 'active' : '']"><h4 class="letra-poppins-bold">Planificación General</h4></a>
                        <a v-on:click="showSection('cyclesClass')" v-bind:class="[activetab === 'cyclesClass' ? 'active' : '']"><h4 class="letra-poppins-bold">Ciclos Y Clases</h4></a>
                        <a v-on:click="showSection('notes')" v-bind:class="[activetab === 'notes' ? 'active' : '']"><h4 class="letra-poppins-bold">Notas</h4></a>
                        <a v-on:click="showSection('utils')" v-bind:class="[activetab === 'utils' ? 'active' : '']"><h4 class="letra-poppins-bold">Útiles</h4></a>
                        <a v-on:click="showSection('pedagogic')" v-bind:class="[activetab === 'pedagogic' ? 'active' : '']"><h4 class="letra-poppins-bold">Salidas Pedagógicas</h4></a>
                        <a v-on:click="showSection('adminElectivs')" v-bind:class="[activetab === 'adminElectivs' ? 'active' : '']"><h4 class="letra-poppins-bold">Administrar Electivas</h4></a>
                        <a v-on:click="showSection('electivsClass')" v-bind:class="[activetab === 'electivsClass' ? 'active' : '']"><h4 class="letra-poppins-bold">Clases Electivas</h4></a>
                        <a v-on:click="showSection('assistantsMotives')" v-bind:class="[activetab === 'assistantsMotives' ? 'active' : '']"><h4 class="letra-poppins-bold">Creación de Motivos de Asistencia</h4></a>
                        <a v-on:click="showSection('trimestresCreate')" v-bind:class="[activetab === 'trimestresCreate' ? 'active' : '']"><h4 class="letra-poppins-bold">Creación de Trimestres</h4></a>
                        <a v-on:click="showSection('reportPlanif')" v-bind:class="[activetab === 'reportPlanif' ? 'active' : '']"><h4 class="letra-poppins-bold">Informe Planificación</h4></a>
                        <a v-on:click="showSection('cycleReport')" v-bind:class="[activetab === 'cycleReport' ? 'active' : '']"><h4 class="letra-poppins-bold">Informe Ciclos y Clases</h4></a>                        
                    </div>
                </div>
            </div>
        </div> 

        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto">
                <div v-if="activetab === 'planifGen'">
                    <vplan-adm></vplan-adm>
                </div>
                <div v-if="activetab === 'cyclesClass'">
                    <clases-teacher :user="user"></clases-teacher>
                </div>
                <div v-if="activetab === 'notes'">
                    <notasd-component></notasd-component>
                </div>
                <div v-if="activetab === 'utils'">                        
                    <utils-coord :user="user"></utils-coord>
                </div>
                <div v-if="activetab === 'pedagogic'">
                    <pedagogical-course :user="user"></pedagogical-course>
                </div>
                <div v-if="activetab === 'adminElectivs'">
                    <lectives-teacher-planning></lectives-teacher-planning>
                </div>
                <div v-if="activetab === 'electivsClass'">
                    <lectives-teacher-courses></lectives-teacher-courses>
                </div>
                <div v-if="activetab === 'assistantsMotives'">
                    <motive-assistants></motive-assistants>
                </div>
                <div v-if="activetab === 'trimestresCreate'">
                    <trimestre-component></trimestre-component>
                </div>
                <div v-if="activetab === 'reportPlanif'">
                    <admin-report-planification></admin-report-planification>
                </div>
                <div v-if="activetab === 'cycleReport'">
                    <admin-report-cycle></admin-report-cycle>
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

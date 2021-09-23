<template>
    <div>        
        <div class="form-group width-r mx-auto">
            <div class="row">
                <div class="col-md-12">
                    <a v-on:click="showSection('planifGen')" class="btn btn-warning mg-btn" style="background-color: #FFB466; border-color: #FFB466; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Planificación General</h6>
                    </a>

                    <a v-on:click="showSection('cyclesClass')" class="btn btn-warning mg-btn" style="background-color: #FFEA47; border-color: #FFEA47; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Ciclos Y Clases</h6>
                    </a>

                    <a v-on:click="showSection('notes')" class="btn btn-warning mg-btn" style="background-color: #FFEA47; border-color: #FFEA47; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Notas</h6>
                    </a>

                    <a v-on:click="showSection('utils')" class="btn btn-warning mg-btn" style="background-color: #A639B0; border-color: #A639B0; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Útiles</h6>
                    </a>

                    <a v-on:click="showSection('pedagogic')" class="btn btn-warning mg-btn" style="background-color: #50E9FB; border-color: #50E9FB; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Salidas Pedagógicas</h6>
                    </a>

                    <a v-on:click="showSection('adminElectivs')" class="btn btn-warning mg-btn" style="background-color: #49CEFB; border-color: #49CEFB; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Administrar Electivas</h6>
                    </a>

                    <a v-on:click="showSection('electivsClass')" class="btn btn-warning mg-btn" style="background-color: #FF5552; border-color: #FF5552; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Clases Electivas</h6>
                    </a>

                    <a v-on:click="showSection('assistantsMotives')" class="btn btn-warning mg-btn" style="background-color: #F98200; border-color: #F98200; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Creación de Motivos de Asistencia</h6>
                    </a>

                    <a v-on:click="showSection('trimestresCreate')" class="btn btn-warning mg-btn" style="background-color: #F98201; border-color: #F98201; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Creación de Trimestres</h6>
                    </a>

                    <a v-on:click="showSection('reportPlanif')" class="btn btn-warning mg-btn" style="background-color: #F98202; border-color: #F98202; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Informe Planificación</h6>
                    </a>

                    <a v-on:click="showSection('cycleReport')" class="btn btn-warning mg-btn" style="background-color: #F98203; border-color: #F98203; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Informe Ciclos y Clases</h6>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto">
                <div>                    
                    <div v-if="activetab === 'planifGen'" class="tabcontent">
                        <vplan-adm></vplan-adm>
                    </div>
                    <div v-if="activetab === 'cyclesClass'" class="tabcontent">
                        <clases-teacher :user="user"></clases-teacher>
                    </div>
                    <div v-if="activetab === 'notes'" class="tabcontent">
                        <notasd-component></notasd-component>
                    </div>
                    <div v-if="activetab === 'utils'" class="tabcontent">                        
                        <utils-coord :user="user"></utils-coord>
                    </div>
                     <div v-if="activetab === 'pedagogic'" class="tabcontent">
                        <pedagogical-course :user="user"></pedagogical-course>
                     </div>
                    <div v-if="activetab === 'adminElectivs'" class="tabcontent">
                        <lectives-teacher-planning></lectives-teacher-planning>
                    </div>
                    <div v-if="activetab === 'electivsClass'" class="tabcontent">
                        <lectives-teacher-courses></lectives-teacher-courses>
                    </div>
                    <div v-if="activetab === 'assistantsMotives'" class="tabcontent">
                        <motive-assistants></motive-assistants>
                    </div>
                    <div v-if="activetab === 'trimestresCreate'" class="tabcontent">
                        <trimestre-component></trimestre-component>
                    </div>
                    <div v-if="activetab === 'reportPlanif'" class="tabcontent">
                        <admin-report-planification></admin-report-planification>
                    </div>
                    <div v-if="activetab === 'cycleReport'" class="tabcontent">
                        <admin-report-cycle></admin-report-cycle>
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
    methods: {        
        showSection(section){
            this.activetab = section
        }
    },
};
</script>
<style>
.mg-btn {
  margin: 10px;
  min-width: 165px;
}
.width-r {
  max-width: 97%;
  border: 1px solid #cccccc82;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #b0acac;
}
.tabs {
  margin-top: 20px;
  overflow: hidden;
  margin-left: 90px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
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

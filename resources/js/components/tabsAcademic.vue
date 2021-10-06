<template>
    <div>        
        <div class="form-group">
            <div class="row">
                <div class="left">
                    <ul>
                        <a v-on:click="showSection('planifGen')" >
                            <li class="item-menu">
                                <span class="menu">Planificación General</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('cyclesClass')" >
                            <li class="item-menu">
                                <span class="menu">Ciclos Y Clases</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('notes')">
                            <li class="item-menu">
                                <span class="menu">Notas</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('utils')">
                            <li class="item-menu">
                                <span class="menu">Útiles</span>
                            </li>                            
                        </a>

                        <a v-on:click="showSection('pedagogic')">
                            <li class="item-menu">
                                <span class="menu">Salidas Pedagógicas</span>
                            </li>                            
                        </a>

                        <a v-on:click="showSection('adminElectivs')">
                            <li class="item-menu">
                                <span class="menu">Administrar Electivas</span>
                            </li>                            
                        </a>

                        <a v-on:click="showSection('electivsClass')">
                            <li class="item-menu">
                                <span class="menu">Clases Electivas</span>
                            </li>                            
                        </a>

                        <a v-on:click="showSection('assistantsMotives')">
                            <li class="item-menu">
                                <span class="menu">Motivos de Asistencia</span>
                            </li>                            
                        </a>

                        <a v-on:click="showSection('trimestresCreate')">
                            <li class="item-menu">
                                <span class="menu">Trimestres</span>
                            </li>                            
                        </a>

                        <a v-on:click="showSection('reportPlanif')">
                            <li class="item-menu">
                                <span class="menu">Informe Planificación</span>
                            </li>                            
                        </a>

                        <a v-on:click="showSection('cycleReport')">
                            <li class="item-menu">
                                <span class="menu">Informe Ciclos y Clases</span>
                            </li>                            
                        </a>                        
                    </ul>
                    <br />
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
.left {
  width: 225px;
  height: auto;
  background: #f5f5f5;
  white-space: nowrap;
  transition: width 0.5s;
  position: absolute;
  z-index: 1;
}
.left ul {
  padding: 0;
  list-style-type: none;
  text-align: left;
}
.mg-btn {
  margin: 10px;
  min-width: 165px;
}
.left li {
  width: auto;
  height: 60px;
  line-height: 50px;
  padding-left: 18px;
}
.left li:hover {
  background: #01aeb1c1;
  color: white;
}

.left .item-menu {
  height: 50px;
  overflow: hidden;
  color: white;
}
.left a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
span.menu {
  padding-left: 17px;
}
.t_search {
  color: rgb(200, 200, 200);
  height: 35px;
  margin-left: 15px;
  width: 190px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.left li {
  background: #00cbcec1;
  margin: 8px;
}
.left #electivas {
  background: #ffc039;
  margin: 8px;
}

.dropdown-content a:hover {
  background: #01aeb1c1;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown2 {
  position: relative;
}

.dropdown2-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown2-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown2-content a:hover {
  background: #01aeb1c1;
  color: white;
}

.dropdown2:hover .dropdown2-content {
  display: block;
}
</style>
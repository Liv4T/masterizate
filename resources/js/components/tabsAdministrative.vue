<template>
    <div>        
        <div class="form-group">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <a v-on:click="showSection('institutions')">
                            <h4 class="letra-poppins-bold">Instituciones</h4>
                        </a>

                        <a v-on:click="showSection('quarter')">
                            <h4 class="letra-poppins-bold">Trimestre</h4>
                        </a>

                        <a v-on:click="showSection('classroom')">
                            <h4 class="letra-poppins-bold">Salones</h4>
                        </a>                    

                        <a v-on:click="showSection('piarStudents')">
                            <h4 class="letra-poppins-bold">Estudiantes PIAR</h4>
                        </a>

                        <a v-on:click="showSection('users')">
                            <h4 class="letra-poppins-bold">Usuarios</h4>
                        </a>

                        <a v-on:click="showSection('noteParameters')">
                            <h4 class="letra-poppins-bold">Parametros de Notas</h4>
                        </a>

                        <a v-on:click="showSection('nursing')">
                            <h4 class="letra-poppins-bold">Enfermería</h4>
                        </a>

                        <a v-on:click="showSection('feeding')">
                            <h4 class="letra-poppins-bold">Alimentación</h4>
                        </a>

                        <a v-on:click="showSection('transport')">
                            <h4 class="letra-poppins-bold">Transporte</h4>
                        </a>
                    </div>                    
                </div>
            </div>
        </div>
        
        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto">                
                <div v-if="activetab === 'institutions'">
                    <institu-adm></institu-adm>
                </div>
                <div v-if="activetab === 'quarter'">
                    <trimestres></trimestres>
                </div>
                <div v-if="activetab === 'classroom'">
                    <cursos-adm></cursos-adm>
                </div>                    
                <div v-if="activetab === 'piarStudents'">
                    <piar-component ></piar-component>
                </div>
                <div v-if="activetab === 'users'">
                    <salon-adm></salon-adm>
                </div>
                <div v-if="activetab === 'noteParameters'">
                    <admin-configuration></admin-configuration>
                </div>
                <div v-if="activetab === 'nursing'">
                    <nursing-component></nursing-component>
                </div>
                <div v-if="activetab === 'feeding'">
                    <food-component></food-component>
                </div>
                <div v-if="activetab === 'transport'">
                    <pedagogical-course :user="user"></pedagogical-course>
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
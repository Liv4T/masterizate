<template>
    <div>        
        <div class="form-group width-r mx-auto">
            <div class="row">
                <div class="col-md-12">
                    <a v-on:click="showSection('institutions')" class="btn btn-warning mg-btn" style="background-color: #FFB466; border-color: #FFB466; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Instituciones</h6>
                    </a>

                    <a v-on:click="showSection('quarter')" class="btn btn-warning mg-btn" style="background-color: #FFEA47; border-color: #FFEA47; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Trimestre</h6>
                    </a>

                    <a v-on:click="showSection('classroom')" class="btn btn-warning mg-btn" style="background-color: #A639B0; border-color: #A639B0; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Salones</h6>
                    </a>

                    <a v-on:click="showSection('profiles')" class="btn btn-warning mg-btn" style="background-color: #50E9FB; border-color: #50E9FB; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Perfiles</h6>
                    </a>

                    <a v-on:click="showSection('piarStudents')" class="btn btn-warning mg-btn" style="background-color: #49CEFB; border-color: #49CEFB; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Estudiantes PIAR</h6>
                    </a>

                    <a v-on:click="showSection('users')" class="btn btn-warning mg-btn" style="background-color: #FF5552; border-color: #FF5552; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Usuarios</h6>
                    </a>

                    <a v-on:click="showSection('noteParameters')" class="btn btn-warning mg-btn" style="background-color: #F98200; border-color: #F98200; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Parametros de Notas</h6>
                    </a>

                    <a v-on:click="showSection('nursing')" class="btn btn-warning mg-btn" style="background-color: #F98201; border-color: #F98201; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Enfermería</h6>
                    </a>

                    <a v-on:click="showSection('feeding')" class="btn btn-warning mg-btn" style="background-color: #F98202; border-color: #F98202; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Alimentación</h6>
                    </a>

                    <a v-on:click="showSection('transport')" class="btn btn-warning mg-btn" style="background-color: #F98203; border-color: #F98203; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Transporte</h6>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto">
                <div>                    
                    <div v-if="activetab === 'institutions'" class="tabcontent">'Instituciones'</div>
                    <div v-if="activetab === 'quarter'" class="tabcontent">'Trimestres'</div>
                    <div v-if="activetab === 'classroom'" class="tabcontent">'Salones'</div>
                    <div v-if="activetab === 'profiles'" class="tabcontent">'Perfiles'</div>
                    <div v-if="activetab === 'piarStudents'" class="tabcontent">'Estudiantes PIAR'</div>
                    <div v-if="activetab === 'users'" class="tabcontent">Usuarios</div>
                    <div v-if="activetab === 'noteParameters'" class="tabcontent">Parametros de Notas</div>
                    <div v-if="activetab === 'nursing'" class="tabcontent">'Enfermeria'</div>
                    <div v-if="activetab === 'feeding'" class="tabcontent">'Alimentación'</div>
                    <div v-if="activetab === 'transport'" class="tabcontent">'Transporte'</div>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {    
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

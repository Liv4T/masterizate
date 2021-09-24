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
            <div class="col-md-12">
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

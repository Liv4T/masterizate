<template>
    <div>        
        <div class="form-group">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <a v-on:click="showSection('planifGen')" ><h4 class="letra-poppins-bold">Planificación General</h4></a>
                        <a v-on:click="showSection('cyclesClass')" ><h4 class="letra-poppins-bold">Ciclos Y Clases</h4></a>
                        <a v-on:click="showSection('notes')"><h4 class="letra-poppins-bold">Notas</h4></a>
                        <a v-on:click="showSection('utils')"><h4 class="letra-poppins-bold">Útiles</h4></a>
                        <a v-on:click="showSection('pedagogic')"><h4 class="letra-poppins-bold">Salidas Pedagógicas</h4></a>
                        <a v-on:click="showSection('adminElectivs')"><h4 class="letra-poppins-bold">Administrar Electivas</h4></a>
                        <a v-on:click="showSection('electivsClass')"><h4 class="letra-poppins-bold">Clases Electivas</h4></a>
                        <a v-on:click="showSection('assistantsMotives')"><h4 class="letra-poppins-bold">Creación de Motivos de Asistencia</h4></a>
                        <a v-on:click="showSection('trimestresCreate')"><h4 class="letra-poppins-bold">Creación de Trimestres</h4></a>
                        <a v-on:click="showSection('reportPlanif')"><h4 class="letra-poppins-bold">Informe Planificación</h4></a>
                        <a v-on:click="showSection('cycleReport')"><h4 class="letra-poppins-bold">Informe Ciclos y Clases</h4></a>                        
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
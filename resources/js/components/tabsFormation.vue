<template>
    <div>        
        <div class="form-group width-r mx-auto">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <a v-on:click="showSection('permission')">
                            <h4 class="letra-poppins-bold">Permisos</h4>
                        </a>

                        <a v-on:click="showSection('observer')">
                            <h4 class="letra-poppins-bold">Observador</h4>
                        </a> 
                    </div>                   
                </div>
            </div>
        </div>
        
        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto">
                <div v-if="activetab === 'permission'">
                    <permission-pedagogic></permission-pedagogic>
                </div>
                <div v-if="activetab === 'observer'">
                    <observer-component :user="user"></observer-component>
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
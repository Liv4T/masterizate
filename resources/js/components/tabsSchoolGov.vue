<template>
    <div>        
        <div class="form-group width-r mx-auto">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <a v-on:click="showSection('governmentMembers')">
                            <h4 class="letra-poppins-bold">Quiénes lo Conforman</h4>
                        </a>

                        <a v-on:click="showSection('legislation')">
                            <h4 class="letra-poppins-bold">Legislación</h4>
                        </a>    
                    </div>                
                </div>
            </div>
        </div>
        
        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto">
                <div>
                    <div v-if="activetab === 'governmentMembers'">
                        <government-members-component :user="user"></government-members-component>
                    </div>
                    <div v-if="activetab === 'legislation'">
                        <legislation-component :user="user"></legislation-component>
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
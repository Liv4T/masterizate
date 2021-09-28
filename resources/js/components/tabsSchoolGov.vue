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


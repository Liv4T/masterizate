<template>
    <div>        
        <div class="form-group width-r mx-auto">
            <div class="row">
                <div class="col-md-12">
                    <a v-on:click="showSection('permission')" class="btn btn-warning mg-btn" style="background-color: #FFEA47; border-color: #FFEA47; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Permisos</h6>
                    </a>

                    <a v-on:click="showSection('observer')" class="btn btn-warning mg-btn" style="background-color: #A639B0; border-color: #A639B0; box-shadow: 3px 3px 3px 3px #b0acac">
                        <h6 class="letra-poppins-bold" style="color: black">Observador</h6>
                    </a>                    
                </div>
            </div>
        </div>
        
        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto">
                <div>
                    <div v-if="activetab === 'permission'" class="tabcontent">
                        <permission-pedagogic></permission-pedagogic>
                    </div>
                    <div v-if="activetab === 'observer'" class="tabcontent">
                        <observer-component :user="user"></observer-component>
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

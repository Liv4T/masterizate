<template>
    <div class="text-center">
        <div class="form-group">
            <div class="tabAdmin">
                <a v-on:click="showSection('profile')" v-bind:class="[activetab === 'profile' ? 'active fondo' : '']"><h4 h4 style="font-size: 15px">Mi Perfil</h4></a>
                <a v-on:click="showSection('administrative')" v-bind:class="[activetab === 'administrative' ? 'active fondo' : '']"><h4 h4 style="font-size: 15px">Administrativo</h4></a>
                <a v-on:click="showSection('comunications')" v-bind:class="[activetab === 'comunications' ? 'active fondo' : '']"><h4 h4 style="font-size: 15px">Comunicaciones</h4></a>
                <a v-on:click="showSection('academic')" v-bind:class="[activetab === 'academic' ? 'active fondo' : '']"><h4 h4 style="font-size: 15px">Académico</h4></a>
            </div>
        </div>

        <div>
            <div id="tabAdmin" class="col-md-12">
                <div>
                    <div v-if="activetab === 'profile'">
                        <perfil-docente></perfil-docente>
                    </div>
                    <div v-if="activetab === 'administrative'">
                        <administ-tab :user="user"></administ-tab>
                    </div>
                    <div v-if="activetab === 'comunications'">
                        <comunication-tab :user="user"></comunication-tab>
                    </div>
                    <div v-if="activetab === 'academic'">
                        <academic-tab :user="user"></academic-tab>
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
    mounted(){

    },
    methods: {
        showSection(section){
            this.activetab = section
        }
    },
};
</script>
<style>
.tabAdmin {
    margin-top: 10px;
    overflow: hidden;
    margin-left: 100px;
    margin-bottom: -2px;
}

.tabAdmin ul {
    list-style-type: none;
    margin-left: 5px;
}
/* Estilo para el tab  */
.tabAdmin a {
    float: left;
    cursor: pointer;
    padding: 0px 20px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #bfbfbf;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
    color: #fff !important;
}
.tabAdmin a:last-child {
    border-right: 1px solid #ccc;
}
/* Change background color of tabAdmin on hover */
.tabAdmin a:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.tabAdmin a.active {
    background-color: #00cbcec1;
    color: #fff;
    border-bottom: 2px solid #fff;
    cursor: default;
}
.tabAdmin a h4{
    margin-top: 12px;
}
.tabcontent {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1;
}
</style>

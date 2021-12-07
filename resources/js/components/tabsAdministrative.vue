<template>
    <div id="app">
        <div>
            <div class="row">
                <div class="left">
                    <ul>
                        <a v-on:click="showSection('institutions')" class="">
                            <li class="item-menu">
                                <span class="menu">Instituciones</span>
                            </li>
                        </a>
                        <a v-on:click="showSection('quarter')" class="">
                            <li class="item-menu">
                                <span class="menu">Período</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('classroom')" class="">
                            <li class="item-menu">
                                <span class="menu">Salones</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('piarStudents')" class="">
                            <li class="item-menu">
                                <span class="menu">Estudiantes PIAR</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('users')" class="">
                            <li class="item-menu">
                                <span class="menu">Usuarios</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('noteParameters')" class="">
                            <li class="item-menu">
                                <span class="menu">Parametros de Notas</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('nursing')" class="">
                            <li class="item-menu">
                                <span class="menu">Enfermería</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('feeding')" class="">
                            <li class="item-menu">
                                <span class="menu">Alimentación</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('transport')" class="">
                            <li class="item-menu">
                                <span class="menu">Transporte</span>
                            </li>
                        </a>
                    </ul>
                    <br />
                </div>

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
  border-radius: 10px;
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

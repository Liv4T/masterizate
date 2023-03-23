<template>
    <div>
        <div class="form-group">
            <div class="row">
                <div class="left">
                    <ul>
                        <a v-on:click="showSection('cyclesClass')" >
                            <li class="item-menu">
                                <span class="menu">Ciclos Y Clases</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('adminCodesLink')">
                            <li class="item-menu">
                                <span class="menu">Códigos Vinculados</span>
                            </li>
                        </a>

                        <a v-on:click="showSection('codes')">
                            <li class="item-menu">
                                <span class="menu">Códigos Tutores</span>
                            </li>
                        </a>

                    </ul>
                    <br />
                </div>
            </div>
        </div>

        <div class="row">
            <div id="tabs" class="col-md-11 mx-auto">
                <div v-if="activetab === 'planifGen'">
                    <!-- <vplan-adm></vplan-adm> -->
                    <general-teacher :user="user"></general-teacher>
                </div>
                <div v-if="activetab === 'cyclesClass'">
                    <clases-teacher :user="user"></clases-teacher>
                </div>
                <div v-if="activetab === 'adminCodesLink'">
                    <tutor-code-validation :user="user"></tutor-code-validation>
                </div>
                <div v-if="activetab === 'codes'">
                    <tutor-code :user="user"></tutor-code>
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

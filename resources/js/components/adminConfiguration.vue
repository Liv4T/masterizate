<template>
  <div class="back">
    <div class="row justify-content-center">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-12">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" href="#" @click="setCurrentTab('PARAMETERS')" v-bind:class="{ active: isTabActive('PARAMETERS') }">Parámetros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="setCurrentTab('TEMPLATE_CALIFICATION')" v-bind:class="{ active: isTabActive('TEMPLATE_CALIFICATION') }">Planilla de notas</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-11">
        <div class="card">
          <admin-configuration-parameters v-if="isTabActive('PARAMETERS')"></admin-configuration-parameters>
          <admin-configuration-template-notes v-if="isTabActive('TEMPLATE_CALIFICATION')"></admin-configuration-template-notes>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [],
    data() {
      return {
        current_tab: "PARAMETERS",
      };
    },
    mounted() {},
    methods: {
      setCurrentTab(tabName) {
        this.current_tab = tabName;
      },
      isTabActive(tabName) {
        return this.current_tab == tabName;
      },
    },
  };
</script>
<style scoped>
  .card {
    width: 100%;
    margin-top: 10px;
  }
</style>

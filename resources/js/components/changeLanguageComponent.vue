<template>
<li id="navbarDropdown" class="nav-link dropdown-toggle nav-item dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <button class="btn btn-default btn-2xd btn-sm btn-circle" style="padding:0px">
            <img :src="'images/'+ $i18n.locale +'.svg'" style="width: 26px;" alt="">
          </button>
    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
      <li>
        <a href="" @click="changeLanguage('es')">
          <img src="images/es.svg" alt=""> <span style="color: black">Español</span>
        </a>
      </li>

      <li>
        <a href="" @click="changeLanguage('en')">
          <img src="images/en.svg" alt=""> <span style="color: black">English</span>
        </a>
      </li>
    </ul>
</li>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  created() {},
  mounted() {
    this.typeUser(); 
  },
  methods: {
    typeUser(){
      var url = "userType";
      axios.get(url).then(response => {
        if(response.data==3){
          this.$i18n.locale="en";
          this.$i18n.fallbackLocale="en";
        }
      });
    },
    changeLanguage(lang){
      this.$i18n.locale=lang;
      this.$i18n.fallbackLocale=lang;
    }
  },
};
</script>
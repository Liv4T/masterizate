<template>
    <div class="background1">
        <div class="mx-auto">
            <vueper-slides :touchable="false" :slide-ratio="0.3" :fixed-height="true">
                <vueper-slide
                    v-for="(slide, i) in slides"
                    :key="i"
                    :image="slide.image"
                    :title="slide.title"
                    :content="slide.content"></vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueMouseParallax from 'vue-mouse-parallax'
import { BCard } from 'bootstrap-vue/es/components'

Vue.component('b-card', BCard)
Vue.use(VueMouseParallax)
Vue.use(VueMaterial)
export default {
    components: { VueperSlides, VueperSlide },
    data() {
    return {
      name: null,
      email: null,
      message: null,
      slides: [
    { content: '<b style="font-size: 1.3em;color: white">UNA FORMA DIFERENTE DE APRENDER</b>', image:require("../assets/img/SLIDER_web.jpg") }
  ]
      };
  },
}
</script>
<style>
.vueperslide_image {
  transform: scale(1.5) rotate(-10deg);
}

.vueperslide__title {
  font-size: 7em;
  opacity: 0.7;
}
.vueperslides--fixed-height { 
    height: 300px; 
}
a{
  color: black;
  font-family: "Century Gothic";
}
.background1{
  background: url(http://localhost/Life4teach_project/resources/js/assets/img/Fondo1.jpg);
  background-attachment: fixed;
}
</style>

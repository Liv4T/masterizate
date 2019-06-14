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
        <div align="center">
            <img src="http://localhost/Life4teach_project/resources/js/assets/img/Computer1.png">
            <h1>AULA VIRTUAL</h1>  
            <b-container fluid class="p-4 bg-light">
                <b-row>
                    <b-col>
                        <b-img thumbnail fluid src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_chat.png" rounded="circle" width="75" height="75" alt="Image 1"></b-img>
                    </b-col>
                    <b-col>
                        <b-img thumbnail fluid src="http://localhost/Life4teach_project/resources/js/assets/img/Icono1_video.png" rounded="circle" width="75" height="75" alt="Image 2"></b-img>
                    </b-col>
                    <b-col>
                        <b-img thumbnail fluid src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_foro.png" rounded="circle" width="75" height="75" alt="Image 3"></b-img>
                    </b-col>
                    <b-col>
                        <b-img thumbnail fluid src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_Pizarra.png" rounded="circle" width="85" height="85" alt="Image 3"></b-img>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-link href="/chat">Chat</b-link>
                    </b-col>
                    <b-col>
                        <b-link>Video</b-link>
                    </b-col>
                    <b-col>
                        <b-link href="/forum">Foro</b-link>
                    </b-col>
                    <b-col>
                        <b-link href="/boards">Pizarra</b-link>
                    </b-col>
                </b-row>
            </b-container>
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

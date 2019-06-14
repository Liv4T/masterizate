<template>
    <div>
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
export default {
    components: { VueperSlides, VueperSlide },
    data() {
    return {
        name: null,
        email: null,
        message: null,
        slides: [
        {content: '<b style="font-size: 1.3em;color: white">UNA FORMA DIFERENTE DE APRENDER</b>', image:require("../assets/img/SLIDER_web.jpg")}
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
</style>

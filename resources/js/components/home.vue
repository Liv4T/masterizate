<template>
    <div>
        <head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css" integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css" integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css" integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J" crossorigin="anonymous">
        </head>
        <vueper-slides :touchable="true" :slide-ratio="0.3" :fixed-height="true">
        <vueper-slide
            v-for="(slide, i) in slides"
        	:key="i"
        	:image="slide.image"
        	:title="slide.title"
        	:content="slide.content"></vueper-slide>
        </vueper-slides>   
        <div class="background1">   
          	<div class="section page-header header-filter">
            	<div class="containerheader">
              		<div class="container m-5 mx-auto">
                		<b-card>
                  			<b-card-text>
                    			Live4teach es una herramienta educativa enfocada en programas tanto tecnicos como profesionales en diferentes areas de conocimiento.
                 			</b-card-text>
                  			<b-card-text> 
                    			Es una plataforma para fines educativos que, de manera didáctica y creativa facilitara el aprendizaje a traves de herramientas flexibles y novedosas.
                  			</b-card-text>
                  			<div style="position: absolute; left: 10px; right:10px; z-index:100;">
                    			<b-container  class="p-4 bg-light">
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
                      				</b-row>
                    			</b-container>
                  			</div>
                		</b-card>
              		</div>
              		<br>
              		<br>
              		<div class="row">
                		<div class="col">
                  			<div class="card2">
                    			<b-card>
                      				<b-card-text>
                        				Todos nuestros programas son virtuales para mayor acceso y facilidad, ademas de asesoria personal, grupal y empresarial. 
                      				</b-card-text>
                    			</b-card>
                    			<div style="position: absolute; left: 40px; z-index:1;">
                      				<b-row>
                        				<b-col>
                          					<b-img thumbnail fluid src="http://localhost/Life4teach_project/resources/js/assets/img/Icono-audio.png" rounded="circle" width="75" height="75" alt="Image 1"></b-img>
                        				</b-col>
                        				<b-col>
                          					<b-img thumbnail fluid src="http://localhost/Life4teach_project/resources/js/assets/img/Chat-icono.png" rounded="circle" width="75" height="75" alt="Image 2"></b-img>
                        				</b-col>
                        				<b-col>
                          					<b-img thumbnail fluid src="http://localhost/Life4teach_project/resources/js/assets/img/VIdeo-icono.png" rounded="circle" width="75" height="75" alt="Image 3"></b-img>
                        				</b-col>
                      				</b-row>
                    			</div>
                  			</div>
                		</div>
                		<div class="col">
                  			<div align="right">
                    			<img src="http://localhost/Life4teach_project/resources/js/assets/img/Computer.png">
                  			</div>
                		</div>
              		</div>
            	</div> 
          	</div>
        </div>
        <parallax-container class="horizontal-card centered-card"> 
          	<parallax-element class="background-image" :parallaxStrength="10" :type="'rotation'">
            	<img src="http://localhost/Life4teach_project/resources/js/assets/img/SLIDER_web2.jpg">
          	</parallax-element>
          	<div class="textin">
            	<div align="center">
              		<i class="fas fa-chalkboard-teacher fa-2x"></i>
              		<h5>CONVIERTETE EN UN EXPERTO</h5>
              		<a href="/register" class="btn btn-danger">INSCRÍBETE</a>
            	</div>
          	</div>
        </parallax-container>
        <div class="main main-raised">
          	<div class="section2">
            	<div class="row">
              		<div class="col md-7">
                		<div align="left">
                  			<img width="75%" height="75%" src="http://localhost/Life4teach_project/resources/js/assets/img/Phone_comp.png">
                		</div>
              		</div>
              		<div class="col ">
                		<div class="card2">
                  			<b-card>
                    			<b-card-text>
                      				Los usuarios tendran una plataforma para fines educativos y de aprendizaje de manera didactica las 24 hrs del dia desde cualquier parte del mundo.
                    			</b-card-text>
                  			</b-card>
                		</div>
              		</div>
            	</div>
            	<b-container fluid class="p-4 bg-light2">
              		<div align="center"> 
                		<b-row>
                  			<b-col>
                    			<img src="http://localhost/Life4teach_project/resources/js/assets/img/ICONO_COLOMBIA.png" alt="">
                  			</b-col>
                  			<b-col>
                    			<img src="http://localhost/Life4teach_project/resources/js/assets/img/ICONO_BIRRETE.png" alt="">
                  			</b-col>
                  			<b-col>
                    			<img src="http://localhost/Life4teach_project/resources/js/assets/img/ICONO_BOARD.png" alt="">
                  			</b-col>
                		</b-row>
                		<b-row>
                  			<b-col>
                    			<b-link>20 Regiones</b-link>
                  			</b-col>
                  			<b-col>
                    			<b-link>+500 Estudiantes</b-link>
                  			</b-col>
                  			<b-col>
                    			<b-link>+200 Programas</b-link>
                  			</b-col>
                		</b-row>
              		</div>
            		</b-container>
            		<div class="mx-auto">
              			<div class="card3">
                			<b-card  align = "center" title = "TRABAJA CON NOSOTROS" >
                  				<b-card-text>
                    				Live4teach es una plataforma virtual educativa donde las personas podremos enseñar nuestras habilidades, conocimientos a aquellos que requieran de una apoyo especializado, educativo, actividad diaria o entretenimiento.
                  				</b-card-text>
                			</b-card>
              			</div>
              			<div class="mx-auto">
                		<parallax-container class="horizontal-card centered-card">
                  			<parallax-element class="background-image" :parallaxStrength="-10" :type="'depth'">
                    			<img src="http://localhost/Life4teach_project/resources/js/assets/img/TRABAJA-CON-NOSOTROS.jpg">
                  			</parallax-element>
                		</parallax-container>
              		</div>
            	</div>
        	</div> 
    	</div>
       	<footer class="text-center footer-style">
            		<div class="row footer-row">
              			<div class="col footer-col">
                			<p>Direccion:<br />
                    			AC 100#8A-55 
                   				Bogotá, Colombia.
                			</p>
              			</div>
              			<div class="col footer-col"> 
                			<i class="fab fa-facebook fa-2x"></i>   
                			<i class="fab fa-google-plus fa-2x"></i>
                			<i class="fab fa-twitter fa-2x"></i>
                			<i class="fab fa-linkedin fa-2x"></i>
                			<i class="fab fa-dribbble fa-2x"></i>
              			</div>
            		</div>
        	</footer>
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
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default:require("../assets/img/Footer_web.jpg")
    },
    teamImg1: {
      type: String,
      default: require("../assets/img/avatar.png")
    },
    teamImg2: {
      type: String,
      default: require("../assets/img/avatar.png")
    },
    teamImg3: {
      type: String,
      default: require("../assets/img/avatar.png")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      slides: [
        { content: '<b style="font-size: 1.3em;color: white">Orientado a primera infacia, adolescentes, adultos y adultos mayores</b>', image:require("../assets/img/SLIDER_web.jpg") },
        { image:require("../assets/img/SLIDER_web1.jpg") }
      ]
      };
  },
  computed: {
   
  }
};
</script>

<style lang="scss" scoped>
  .md-card-actions.text-center {
    display: flex;
    justify-content: center !important;
  }
  .contact-form {
    margin-top: 30px;
  }
  .md-has-textarea + .md-layout {
    margin-top: 15px;
  }
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
  .containerheader {
    padding-top: 0px;
    padding-bottom: 20px;
  }
 /* .footerhome {
    min-height: 70px;
    width: 100%;
   position: absolute;
    clear: both;
    margin-top: 0px;
    padding-top: 0px;
    overflow: visible;
    top:93%;    
    bottom: 0;  
  }
 footer */
  .footer-style {
    bottom: 0;
    width: 100%;
   position: absolute;
    height: 400px;
    padding-top: 50px;
    background: url(http://localhost/Life4teach_project/resources/js/assets/img/Footer_web.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  footer {
    color: rgb(243, 243, 243);
  }
  footer h4 {
    font-weight: 800;
  }
  footer .footer-above {
    padding-top: 50px;
    background-color: #2C3E50;
  }
  footer .footer-col {
    margin-top: 70px;
  }
  .card2{
    padding-top: 20px;
    padding-left: 40px;
    padding-bottom: 10px;
    text-align: justify;
  }
  .card3{
    padding-top: 10px;
  }
  .background1{
    background: url(http://localhost/Life4teach_project/resources/js/assets/img/Fondo1.jpg);
    background-attachment: fixed;
  }
  .card{
    font-family: "Century Gothic";
    text-align: justify;
    color: #000000;
  }
  .bg-light.container{
    width: 70%;
  }
  .bg-light1{
    background:transparent;
  }
  .bg-light2{
    background:linear-gradient(#c18259, #c15959 );
    margin: 0%;
  }
  .section2{
    background: url(http://localhost/Life4teach_project/resources/js/assets/img/Fondo2.jpg);
    background-attachment: fixed;
  }
  h4{
    color: #045376;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 30px;
  }
  a{
    color: white;
    font-family: "Century Gothic";
  }
  .textin{
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Century Gothic";
    font-weight: bold;
  }
</style>
<template>
<div>
  <head>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
      integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
      integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
      integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
      crossorigin="anonymous"
    />
  </head>
  <div class="form-group">
    <div style="position: absolute; top:170px; z-index:100;" class="back">
      <div class="custom-card">
        <div class="card-header">
          <div align="center">
            <h5>APRENDE LO QUE QUIERAS</h5>
          </div>
          <div class="form-group row">
            <div class="col-md-10">
              <label for="name">Nombre</label>
              <input type="text" name="name" v-model="newName" class="form-control" required />
              <div class="invalid-feedback">Please fill out this field</div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-10">
              <label for="last_name">Apellido</label>
              <input
                type="text"
                name="last_name"
                class="form-control"
                v-model="newLastName"
                required
              />
              <div class="invalid-feedback">Please fill out this field</div>
            </div>
          </div>
          <div>
            <div class="form-group row">
              <div class="col-md-10">
                <label for="name">Email</label>
                <input type="text" name="email" class="form-control" v-model="newEmail" required />
                <div class="invalid-feedback">Please fill out this field</div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-10">
                <label for="name">Programa</label>
                <select2 v-model="selected">
                  <option disabled value>Seleccione una opcion</option>
                  <option>Estudiante</option>
                  <option>Tutor</option>
                </select2>
              </div>

              <div
                class="invalid-feedback"
              >Please fill out this field, the user name may not be greater than 20 characters.</div>
            </div>
            <div class="text-center">
              <a href="/register" class="btn btn-danger">INGRESA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <vueper-slides :touchable="true" :slide-ratio="0.3" fixed-height="500px" autoplay>
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :title="slide.title"
      :content="slide.content"
    ></vueper-slide>
  </vueper-slides>

  <div class="background1">
    <div class="section page-header header-filter">
      <div class="containerheader">
        <div class="container m-5 mx-auto">
          <b-card>
            <b-card-text>Live4teach es una herramienta educativa enfocada en programas tanto tecnicos como profesionales en diferentes areas de conocimiento.</b-card-text>
            <b-card-text>Es una plataforma para fines educativos que, de manera didáctica y creativa facilitara el aprendizaje a traves de herramientas flexibles y novedosas.</b-card-text>
            <div style="position: absolute; left: 10px; right:10px; z-index:100;">
              <b-container class="p-4 bg-light">
                <b-row class="text-center">
                  <b-col>
                    <img
                      thumbnail
                      fluid
                      src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_chat.png"
                      width="75"
                      height="75"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <img
                      thumbnail
                      fluid
                      src="http://localhost/Life4teach_project/resources/js/assets/img/Icono1_video.png"
                      width="75"
                      height="75"
                      alt="Image 2"
                    />
                  </b-col>
                  <b-col>
                    <img
                      thumbnail
                      fluid
                      src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_foro.png"
                      width="75"
                      height="75"
                      alt="Image 3"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </b-card>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col">
            <div class="card2">
              <b-card>
                <b-card-text>Todos nuestros programas son virtuales para mayor acceso y facilidad, ademas de asesoria personal, grupal y empresarial.</b-card-text>
              </b-card>
              <div style="position: absolute; left: 40px; z-index:1;">
                <b-container class="p-4">
                  <b-row class="text-center">
                    <b-col>
                      <img
                        thumbnail
                        fluid
                        src="http://localhost/Life4teach_project/resources/js/assets/img/Icono-audio.png"
                        rounded="circle"
                        width="75"
                        height="75"
                        alt="Image 1"
                      />
                    </b-col>
                    <b-col>
                      <img
                        thumbnail
                        fluid
                        src="http://localhost/Life4teach_project/resources/js/assets/img/Chat-icono.png"
                        rounded="circle"
                        width="75"
                        height="75"
                        alt="Image 2"
                      />
                    </b-col>
                    <b-col>
                      <img
                        thumbnail
                        fluid
                        src="http://localhost/Life4teach_project/resources/js/assets/img/VIdeo-icono.png"
                        rounded="circle"
                        width="75"
                        height="75"
                        alt="Image 3"
                      />
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </div>
          </div>
          <div class="col">
            <div align="right">
              <img src="http://localhost/Life4teach_project/resources/js/assets/img/Computer.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <parallax-container class="horizontal-card centered-card">
    <parallax-element class="background-image" :parallaxStrength="10" :type="'rotation'">
      <img src="http://localhost/Life4teach_project/resources/js/assets/img/SLIDERweb.jpg" />
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
        <div class="col">
          <div align="left">
            <img
              width="90%"
              height="90%"
              src="http://localhost/Life4teach_project/resources/js/assets/img/TABLET_CEL.jpg"
            />
          </div>
        </div>
        <div class="col">
          <div class="card2">
            <b-card>
              <b-card-text>Los usuarios tendran una plataforma para fines educativos y de aprendizaje de manera didactica las 24 hrs del dia, facilitando el acceso a traves de una herramienta flexible, novedosa y lo mejor desde cualquier parte del mundo.</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <b-container fluid class="p-4 bg-light2">
        <div align="center">
          <b-row>
            <b-col>
              <img
                src="http://localhost/Life4teach_project/resources/js/assets/img/ICONO_COLOMBIA.png"
                alt
              />
            </b-col>
            <b-col>
              <img
                src="http://localhost/Life4teach_project/resources/js/assets/img/ICONO_BIRRETE.png"
                alt
              />
            </b-col>
            <b-col>
              <img
                src="http://localhost/Life4teach_project/resources/js/assets/img/ICONO_BOARD.png"
                alt
              />
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
          <b-card align="center">
            <b-card-text>Live4teach es una plataforma virtual educativa donde las personas podremos enseñar nuestras habilidades, conocimientos a aquellos que requieran de una apoyo especializado, educativo, actividad diaria o entretenimiento.</b-card-text>
          </b-card>
        </div>
        <div align="center">
          <h4>
            <strong>OFERTAS DEL MES</strong>
          </h4>
        </div>
        <div align="center">
          <div class="card-deck row">
            <div class="card col">
              <b-img
                class="card-img-top"
                src="http://localhost/Life4teach_project/resources/js/assets/img/2918.jpg"
                alt="Card image cap"
              ></b-img>
              <div class="card-body">
                <a class="hola3" href="/ccourse">App Inventor 2 Basico</a>
                <div class="card-text">
                  <div class="ec-stars-wrapper">
                    <a data-value="1">&#9733;</a>
                    <a data-value="2">&#9733;</a>
                    <a data-value="3">&#9733;</a>
                    <a data-value="4">&#9733;</a>
                    <a data-value="5">&#9733;</a>
                  </div>
                </div>
                <p class="card-text">
                  <small class="text-muted">Agregado hace 3 mins</small>
                </p>
              </div>
            </div>
            <div class="card col">
              <img
                class="card-img-top"
                src="http://localhost/Life4teach_project/resources/js/assets/img/2314404.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Titulo</h5>
                <div class="card-text">
                  <div class="ec-stars-wrapper">
                    <a data-value="1">&#9733;</a>
                    <a data-value="2">&#9733;</a>
                    <a data-value="3">&#9733;</a>
                    <a data-value="4">&#9733;</a>
                    <a data-value="5">&#9733;</a>
                  </div>
                </div>
                <p class="card-text">
                  <small class="text-muted">Agregado hace 3 mins</small>
                </p>
              </div>
            </div>
            <div class="card col">
              <img
                class="card-img-top"
                src="http://localhost/Life4teach_project/resources/js/assets/img/2371004.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Titulo</h5>
                <div class="card-text">
                  <div class="ec-stars-wrapper">
                    <a data-value="1">&#9733;</a>
                    <a data-value="2">&#9733;</a>
                    <a data-value="3">&#9733;</a>
                    <a data-value="4">&#9733;</a>
                    <a data-value="5">&#9733;</a>
                  </div>
                </div>
                <p class="card-text">
                  <small class="text-muted">Agregado hace 3 mins</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div align="center">
          <div class="card-deck row">
            <div class="card col">
              <img
                class="card-img-top"
                src="http://localhost/Life4teach_project/resources/js/assets/img/OMHWPH0.jpg"
                alt="Card image cap"
                width="100px"
              />
              <div class="card-body">
                <h5 class="card-title">Titulo</h5>
                <div class="card-text">
                  <div class="ec-stars-wrapper">
                    <a data-value="1">&#9733;</a>
                    <a data-value="2">&#9733;</a>
                    <a data-value="3">&#9733;</a>
                    <a data-value="4">&#9733;</a>
                    <a data-value="5">&#9733;</a>
                  </div>
                </div>
                <p class="card-text">
                  <small class="text-muted">Agregado hace 3 mins</small>
                </p>
              </div>
            </div>
            <div class="card col">
              <img
                class="card-img-top"
                src="http://localhost/Life4teach_project/resources/js/assets/img/LOGO-L4T-web.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Titulo</h5>
                <div class="card-text">
                  <div class="ec-stars-wrapper">
                    <a data-value="1">&#9733;</a>
                    <a data-value="2">&#9733;</a>
                    <a data-value="3">&#9733;</a>
                    <a data-value="4">&#9733;</a>
                    <a data-value="5">&#9733;</a>
                  </div>
                </div>
                <p class="card-text">
                  <small class="text-muted">Agregado hace 3 mins</small>
                </p>
              </div>
            </div>
            <div class="card col">
              <img
                class="card-img-top"
                src="http://localhost/Life4teach_project/resources/js/assets/img/LOGO-L4T-web.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Titulo</h5>
                <div class="card-text">
                  <div class="ec-stars-wrapper">
                    <a data-value="1">&#9733;</a>
                    <a data-value="2">&#9733;</a>
                    <a data-value="3">&#9733;</a>
                    <a data-value="4">&#9733;</a>
                    <a data-value="5">&#9733;</a>
                  </div>
                </div>
                <p class="card-text">
                  <small class="text-muted">Agregado hace 3 mins</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="text-center footer-style">
    <div class="row footer-row">
      <div class="col footer-col">
        <p>
          Direccion:
          <br />AC 100#8A-55
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
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import VueMouseParallax from "vue-mouse-parallax";
import { BCard } from "bootstrap-vue/es/components";

Vue.component("b-card", BCard);
Vue.use(VueMouseParallax);
Vue.use(VueMaterial);
export default {
  components: { VueperSlides, VueperSlide },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("../assets/img/Footer_web.jpg")
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
      newName: "",
      newLastName: "",
      newEmail: "",
      selected: "",
      slides: [
        {
          content:
            '<b style="font-size: 1.3em;color: white">Orientado a primera infacia, adolescentes, adultos y adultos mayores</b>',
          image: require("../assets/img/PORTADAweb.jpg")
        },
        { image: require("../assets/img/PORTADAweb2.jpg") },
        { image: require("../assets/img/PORTADAweb3.jpg") }
      ]
    };
  },
  computed: {}
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
  background-color: #2c3e50;
}
footer .footer-col {
  margin-top: 70px;
}
.card2 {
  padding-top: 20px;
  padding-left: 40px;
  padding-bottom: 10px;
  text-align: justify;
}
.card3 {
  padding-top: 10px;
}
.background1 {
  background: url(http://localhost/Life4teach_project/resources/js/assets/img/Fondo1.jpg);
  background-attachment: fixed;
}
.card {
  font-family: "Century Gothic";
  text-align: justify;
  color: #000000;
}
.bg-light.container {
  width: 70%;
}
.bg-light1 {
  background: transparent;
}
.bg-light2 {
  background: linear-gradient(#c18259, #c15959);
  margin: 0%;
}
.section2 {
  background: url(http://localhost/Life4teach_project/resources/js/assets/img/Fondo2.jpg);
  background-attachment: fixed;
}
h4 {
  color: #045376;
  font-family: "Century Gothic";
  font-weight: bold;
  font-size: 30px;
}
a {
  color: white;
  font-family: "Century Gothic";
}
.textin {
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: "Century Gothic";
  font-weight: bold;
}
.card-img-top {
  width: "197px";
  height: "160px";
}
.ec-stars-wrapper {
  /* Espacio entre los inline-block (los hijos, los `a`) 
	   http://ksesocss.blogspot.com/2012/03/display-inline-block-y-sus-empeno-en.html */
  font-size: 0;
  /* Podríamos quitarlo, 
		pero de esta manera (siempre que no le demos padding), 
		sólo aplicará la regla .ec-stars-wrapper:hover a cuando
		también se esté haciendo hover a alguna estrella */
  display: inline-block;
}
.ec-stars-wrapper a {
  text-decoration: none;
  display: inline-block;
  /* Volver a dar tamaño al texto */
  font-size: 32px;
  font-size: 2rem;

  color: rgb(255, 214, 32);
}
.card-header {
  background-color: #e9ecefb5;
}
.hola3 {
  color: black;
}
</style>
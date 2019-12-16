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
  <!--div class="sticky">
    <button class="btn btn-primary text-nowrap" type="button">
      <a href>
        <img
          src="https://media.giphy.com/media/dAIeGiCfE8XOjetwiJ/giphy.gif"
          alt="x"
          style="height:90px;"
        />
        <br />Crea tu propio curso
      </a>
    </button>
  </div-->

  <div class="form-group">
    <div style="position: absolute; left:250px; top:420px; z-index:100;" class="back">
      <div class="custom-card">
        <div class="card-header">
          <div align="center">
            <h5>APRENDE LO QUE QUIERAS</h5>
          </div>
          <div class="form-group row">
            <div class="col-md-10">
              <div>
                <TextInput value placeholder="Nombre" @inputEvent="inputEvent"></TextInput>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-10">
              <div>
                <TextInput value placeholder="Apellido" @inputEvent="inputEvent"></TextInput>
              </div>
            </div>
          </div>
          <div>
            <div class="form-group row">
              <div class="col-md-10">
                <div>
                  <TextInput value placeholder="Email" @inputEvent="inputEvent"></TextInput>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-10">
                <select2 class="selectc" v-model="selected">
                  <option disabled value>Programa</option>
                  <option>Estudiante</option>
                  <option>Tutor</option>
                </select2>
              </div>
              <div
                class="invalid-feedback"
              >Please fill out this field, the user name may not be greater than 20 characters.</div>
            </div>
            <div align="center">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fas fa-envelope-square"></i>
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
    <div class="section page-header header-filter" id="live4teach">
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
                      src="http://localhost/Life4teach_project/resources/js/assets/img/googleplay.png"
                      width="200px"
                      alt="Image 1"
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
              <!--div style="position: absolute; left: 40px; z-index:1;">
                <b-container class="p-4">
                  <b-row class="text-center">
                    <b-col>
                      <img
                        thumbnail
                        fluid
                        src=""
                        width="75"
                        height="75"
                        alt="Image 1"
                      />
                    </b-col>
                    <b-col>
                      <img
                        thumbnail
                        fluid
                        src=""
                        width="75"
                        height="75"
                        alt="Image 2"
                      />
                    </b-col>
                    <b-col>
                      <img
                        thumbnail
                        fluid
                        src=""
                        width="75"
                        height="75"
                        alt="Image 3"
                      />
                    </b-col>
                  </b-row>
                </b-container>
              </div-->
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
  <parallax-container class="horizontal-card centered-card" id="conviertete">
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

  <!--vue-flux :options="fluxOptions" :images="fluxImages" :transitions="vfTransitions" ref="slider"></vue-flux-->
  <!--button @click="$refs.slider.showImage('next')">NEXT</button-->
  <div class="main main-raised">
    <div class="section2">
      <div class="row">
        <div class="col-md-6">
          <div align="left">
            <img
              width="80%"
              height="80%"
              src="http://localhost/Life4teach_project/resources/js/assets/img/CEL.png"
            />
          </div>
        </div>
        <div class="col-md-5">
          <div class="card">
            <b-card align="center">
              <b-card-text
                id="regiones"
              >Los usuarios tendran una plataforma para fines educativos y de aprendizaje de manera didactica las 24 hrs del dia, facilitando el acceso a traves de una herramienta flexible, novedosa y lo mejor desde cualquier parte del mundo.</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <vue-flux
        :options="vfOptions"
        :images="vfImages"
        :transitions="vfTransitions"
        :captions="vfCaptions"
        ref="slider"
      >
        <template v-slot:preloader>
          <flux-preloader />
        </template>
        <template v-slot:caption>
          <flux-caption />
          <a href>
            <strong>dfkgnkfdsg</strong>
          </a>
        </template>
        <template v-slot:controls>
          <flux-controls />
        </template>
        <template v-slot:pagination>
          <flux-pagination />
        </template>
        <template v-slot:index>
          <flux-index />
        </template>
      </vue-flux>
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
      <div class="mx-auto" id="destacados">
        <div class="card3">
          <b-card align="center">
            <b-card-text>Live4teach es una plataforma virtual educativa donde las personas podremos enseñar nuestras habilidades, conocimientos a aquellos que requieran de una apoyo especializado, educativo, actividad diaria o entretenimiento.</b-card-text>
          </b-card>
        </div>
        <div align="center">
          <h4>
            <strong>DESTACADOS DEL MES</strong>
          </h4>
        </div>
        <div class="container-fluid">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner row w-100 mx-auto">
              <div class="carousel-item col-md-3 active">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://localhost/Life4teach_project/resources/js/assets/img/programador-web_23-2147502079.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <a class="hola3" href="/ccourse">App Inventor 2 Basico</a>
                    <div class="card-text">
                      <div class="ec-stars-wrapper1">
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
              <div class="carousel-item col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://localhost/Life4teach_project/resources/js/assets/img/2314404.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <a class="hola3" href="/ccourse">Curso 2</a>
                    <div class="card-text">
                      <div class="ec-stars-wrapper1">
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
              <div class="carousel-item col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://localhost/Life4teach_project/resources/js/assets/img/2371004.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <a class="hola3" href="/ccourse">Curso 3</a>
                    <div class="card-text">
                      <div class="ec-stars-wrapper1">
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
              <div class="carousel-item col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://localhost/Life4teach_project/resources/js/assets/img/OMHWPH0.jpg"
                    alt="Card image cap"
                    width="100px"
                  />
                  <div class="card-body">
                    <a class="hola3" href="/ccourse">Curso 4</a>
                    <div class="card-text">
                      <div class="ec-stars-wrapper1">
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
              <div class="carousel-item col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://localhost/Life4teach_project/resources/js/assets/img/programmer-working-computer_23-2147505689.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <a class="hola3" href="/ccourse">Curso 5</a>
                    <div class="card-text">
                      <div class="ec-stars-wrapper1">
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
              <div class="carousel-item col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://localhost/Life4teach_project/resources/js/assets/img/2918.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <a class="hola3" href="/ccourse">Curso 6</a>
                    <div class="card-text">
                      <div class="ec-stars-wrapper1">
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
              <div class="carousel-item col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://localhost/Life4teach_project/resources/js/assets/img/418.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <a class="hola3" href="/ccourse">Curso 7</a>
                    <div class="card-text">
                      <div class="ec-stars-wrapper1">
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
              <div class="carousel-item col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://localhost/Life4teach_project/resources/js/assets/img/125063-OQT3VV-312.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <a class="hola3" href="/ccourse">Curso 8</a>
                    <div class="card-text">
                      <div class="ec-stars-wrapper1">
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
    </div>
  </div>
  <!--Cursos disponibles--->
  <br />
  <div class="text-center">
    <a href="/courseSt" class="btn btn-warning">Cargar mas</a>
  </div>
  <!--Seccion de comentarios -->
  <br />
  <b-container fluid class="p-4 bg-light">
    <div align="center">
      <b-row>
        <b-col>
          <img
            src="http://localhost/Life4teach_project/resources/js/assets/img/circulo1.png"
            width="70px;"
            alt
          />
        </b-col>
        <b-col>
          <img
            src="http://localhost/Life4teach_project/resources/js/assets/img/circulo2.png"
            width="70px;"
            alt
          />
        </b-col>
        <b-col>
          <img
            src="http://localhost/Life4teach_project/resources/js/assets/img/circulo3.png"
            width="70px;"
            alt
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="card-text">Comentario 1</div>
        </b-col>
        <b-col>
          <div class="card-text">Comentario 2</div>
        </b-col>
        <b-col>
          <div class="card-text">Comentario 3</div>
        </b-col>
      </b-row>
    </div>
  </b-container>
  <!--Seccion de contactenos -->
  <br />
  <div class="row">
    <div class="col-md-6 text-center">
      <h4>Contáctanos</h4>
      <label for>info@l4t.com</label>
      <h5>Síguenos</h5>
      <div align="center">
        <i class="fab fa-facebook-f fa-4x"></i>
        <i class="fab fa-instagram fa-4x"></i>
      </div>
    </div>
    <div class="col-md-5">
      <div class="custom-card">
        <div class="card-header">
          <div class="form-group row">
            <div class="col-md-12">
              <input
                type="text"
                name="subject"
                required="required"
                placeholder="Nombre"
                class="form-control"
              />
            </div>
          </div>
          <div>
            <div class="form-group row">
              <div class="col-md-12">
                <input
                  type="text"
                  name="subject"
                  required="required"
                  placeholder="Email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-12">
                <input
                  type="text"
                  name="subject"
                  required="required"
                  placeholder="Asunto"
                  class="form-control"
                />
              </div>
              <div
                class="invalid-feedback"
              >Please fill out this field, the user name may not be greater than 20 characters.</div>
            </div>
            <div class="form-group row">
              <div class="col-md-12">
                <textarea
                  name="objects"
                  class="form-control"
                  v-model="description"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>
              <div
                class="invalid-feedback"
              >Please fill out this field, the user name may not be greater than 200 characters.</div>
            </div>
            <div class="text-center">
              <a href="/register" class="btn btn-danger">Enviar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer-style">
    <div class="row footer-row mx-auto">
      <div class="col footer-col">
        <!-- <p>
          Direccion:
          <br />AC 100#8A-55
          Bogotá, Colombia.
        </p-->
        <ul class="fa-ul">
          <li class="fas fa-chevron-right">
            <a href="#top">Inicio</a>
          </li>
          <li class="fas fa-chevron-right">
            <a href="#live4teach">Live4Teach</a>
          </li>
          <li class="fas fa-chevron-right">
            <a href="#conviertete">Conviertete en un experto</a>
          </li>
          <li class="fas fa-chevron-right">
            <a href="#regiones">20 Regiones</a>
          </li>
          <li class="fas fa-chevron-right">
            <a href="#destacados">Destacados del mes</a>
          </li>
          <li class="fas fa-chevron-right">
            <a href="/cuestions">Preguntas frecuentes</a>
          </li>
        </ul>
      </div>
      <div class="col footer-col" align="right">
        <a href="#top" class="icons">
          <i class="fas fa-chevron-circle-up fa-4x"></i>
        </a>
      </div>
    </div>
    <div class="row footer-row mx-auto">
      <div class="col footer-col" align="center">
        <a href class="icons">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href class="icons">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href class="icons">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href class="icons">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <!--a href class="icons">
          <i class="fab fa-dribbble fa-2x"></i>
        </a-->
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
import TextInput from "./TextInput.vue";
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader
} from "vue-flux";

Vue.component("b-card", BCard);
Vue.use(VueMouseParallax);
Vue.use(VueMaterial);
export default {
  components: {
    VueperSlides,
    VueperSlide,
    TextInput,
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader
  },

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
      ],
      vfOptions: {
        autoplay: true
      },
      vfImages: [
        "http://localhost/Life4teach_project/resources/js/assets/img/SLIDERweb.jpg",
        "http://localhost/Life4teach_project/resources/js/assets/img/Fondo2.jpg",
        "http://localhost/Life4teach_project/resources/js/assets/img/Fondo1.jpg"
      ],
      vfTransitions: ["fade", "cube", "book", "wave"],
      vfCaptions: [
        "Caption for image 1",
        "Caption for image 2",
        "Caption for image 3"
      ]
    };
  },
  computed: {},
  methods: {
    inputEvent(e) {
      console.log(e);
    }
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
.ec-stars-wrapper1 {
  /* Espacio entre los inline-block (los hijos, los `a`) 
	   http://ksesocss.blogspot.com/2012/03/display-inline-block-y-sus-empeno-en.html */
  font-size: 0;
  /* Podríamos quitarlo, 
		pero de esta manera (siempre que no le demos padding), 
		sólo aplicará la regla .ec-stars-wrapper:hover a cuando
		también se esté haciendo hover a alguna estrella */
  display: inline-block;
}
.ec-stars-wrapper1 a {
  text-decoration: none;
  display: inline-block;
  /* Volver a dar tamaño al texto */
  font-size: 30px;
  font-size: 1.5rem;

  color: rgb(255, 214, 32);
}
.card-header {
  background-color: #e9ecefb5;
}
.hola3 {
  color: black;
}
.selectc {
  background-color: #e9ecef00;
  border-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 91, 91);
  font-size: 1em;
  border-bottom-width: medium;
}
.icons:not(.md-button):hover {
  text-decoration: underline;
  color: #ff4700;
}
.fa-chevron-right {
  display: block;
  padding-bottom: 10px;
}
.fa-chevron-right::before {
  padding-right: 10px;
}
.sticky {
  padding: 0px;
  margin: 0px;
  position: fixed;
  right: 0px;
  top: 230px;
  width: 210px;
  z-index: 1100;
}
</style>
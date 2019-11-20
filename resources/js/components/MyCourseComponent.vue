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
  <b-container fluid class="p-4 bg-light3">
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
      allowfullscreen
    ></b-embed>
  </b-container>
  <div class="card text-center">
    <div class="card-body">
      <h3 class="hola">Nombre del curso</h3>
      <div class="ec-stars-wrapper1">
        <a data-value="1">&#9733;</a>
        <a data-value="2">&#9733;</a>
        <a data-value="3">&#9733;</a>
        <a data-value="4">&#9733;</a>
        <a data-value="5">&#9733;</a>
      </div>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 25%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >25%</div>
      </div>
      <label
        class="hola2"
        for
      >El curso está diseñado utilizando una metodología interactiva a través de esta permite aprender de manera autónoma y propicia los conceptos más relevantes en sobre la programación móvil.</label>
      <br />
      <strong for>Recuerde que el curso inicia:--/--/---- y finaliza:--/--/----</strong>
    </div>
  </div>
  <form-wizard title subtitle>
    <tab-content title="Nombre Unidad">
      <div class="card-body">
        <!-- Accordion Using List Group -->
        <div>
          <div id="accordion">
            <div class="panel list-group">
              <!-- panel class must be in -->
              <a
                href
                data-parent="#accordion"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                data-toggle="collapse"
                class="list-group-item"
              >
                <h6>Tema 1</h6>
              </a>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <ul class="list-group-item-text">
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                  <li>MYSQL</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                class="list-group-item"
              >
                <h6>Tema 2</h6>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <ul class="list-group-item-text">
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
                class="list-group-item"
              >
                <h6>Tema 3</h6>
              </a>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
                class="list-group-item"
              >
                <h6>Tema 4</h6>
              </a>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tab-content>
    <tab-content title="Nombre Unidad">
      <div class="card-body">
        <!-- Accordion Using List Group -->
        <div>
          <div id="accordion1">
            <div class="panel list-group">
              <!-- panel class must be in -->
              <a
                href
                data-parent="#accordion1"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                data-toggle="collapse"
                class="list-group-item"
              >
                <h6>Tema 2.1</h6>
              </a>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion1"
              >
                <ul class="list-group-item-text">
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                  <li>MYSQL</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion1"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                class="list-group-item"
              >
                <h6>Tema 2.2</h6>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion1"
              >
                <ul class="list-group-item-text">
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion1"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                class="list-group-item"
              >
                <h6>Tema 2.3</h6>
              </a>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion1"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion1"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                class="list-group-item"
              >
                <h6>Tema 2.4</h6>
              </a>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion1"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tab-content>
    <tab-content title="Nombre Unidad">
      <div class="card-body">
        <!-- Accordion Using List Group -->
        <div>
          <div id="accordion2">
            <div class="panel list-group">
              <!-- panel class must be in -->
              <a
                href
                data-parent="#accordion2"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                data-toggle="collapse"
                class="list-group-item"
              >
                <h6>Tema 3.1</h6>
              </a>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion2"
              >
                <ul class="list-group-item-text">
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                  <li>MYSQL</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion2"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                class="list-group-item"
              >
                <h6>Tema 3.2</h6>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion2"
              >
                <ul class="list-group-item-text">
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion2"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                class="list-group-item"
              >
                <h6>Tema 3.3</h6>
              </a>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion2"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion2"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                class="list-group-item"
              >
                <h6>Tema 3.4</h6>
              </a>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion2"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tab-content>
    <tab-content title="Nombre Unidad">
      <div class="card-body">
        <!-- Accordion Using List Group -->
        <div>
          <div id="accordion3">
            <div class="panel list-group">
              <!-- panel class must be in -->
              <a
                href
                data-parent="#accordion3"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                data-toggle="collapse"
                class="list-group-item"
              >
                <h6>Tema 4.1</h6>
              </a>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion3"
              >
                <ul class="list-group-item-text">
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                  <li>MYSQL</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion3"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                class="list-group-item"
              >
                <h6>Tema 4.2</h6>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion3"
              >
                <ul class="list-group-item-text">
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion3"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                class="list-group-item"
              >
                <h6>Tema 4.3</h6>
              </a>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion3"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
              <a
                href
                data-parent="#accordion3"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                class="list-group-item"
              >
                <h6>Tema 4.4</h6>
              </a>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion3"
              >
                <ul class="list-group-item-text">
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tab-content>
  </form-wizard>
  <div class="card text-center">
    <div class="card-body">
      <a href>
        <h4>Actividades</h4>
      </a>
      <div class="form-group row">
        <div class="col-md-6">
          <a href="/activitySt">
            <img
              src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_foro1.png"
              alt
            />
          </a>
        </div>
        <div class="col-md-6">
          <a href>
            <img
              src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_foro1.png"
              alt
            />
          </a>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-6">
          <a href>
            <img
              src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_foro1.png"
              alt
            />
          </a>
        </div>
        <div class="col-md-6">
          <a href>
            <img
              src="http://localhost/Life4teach_project/resources/js/assets/img/Icono_foro1.png"
              alt
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import BootstrapVue from "bootstrap-vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import { BCard } from "bootstrap-vue/es/components";
import TextInput from "./TextInput.vue";

Vue.component("b-card", BCard);
Vue.use(VueMaterial);
$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});
export default {
  components: { TextInput },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  methods: {
    inputEvent(e) {
      console.log(e);
    }
  }
};
</script>
<style>
.ec-stars-wrapper1 {
  font-size: 0;
  display: inline-block;
  color: rgb(255, 214, 32);
}
.ec-stars-wrapper1 a {
  text-decoration: none;
  display: inline-block;
  /* Volver a dar tamaño al texto */
  font-size: 30px;
  font-size: 1.5rem;
  color: rgb(255, 214, 32);
}
table,
th,
td {
  border-collapse: collapse;
}
th,
td {
  padding: 20px;
}
.hola {
  color: black;
  font-weight: bold;
}
.hola2 {
  color: black;
}
@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css);
.card-header {
  background-color: #e9ecefb5;
}
#accordion1 li.panel {
  margin-bottom: 0px;
}
.bg-light3 {
  background: linear-gradient(#c078d6, #91328c);
  margin: 0%;
}
</style>
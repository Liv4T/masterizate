(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: "",
      email: "",
      phone: "",
      school: "",
      city: ""
    };
  },
  mounted: function mounted() {},
  methods: {
    getLanding: function getLanding() {
      window.location = "/landing";
    },
    createContact: function createContact() {
      var _this = this;

      var url = "createContact";
      axios.post(url, {
        //Guardamos los datos del contacto
        name: this.name,
        email: this.email,
        phone: this.phone,
        school: this.school,
        city: this.city
      }).then(function (response) {
        _this.getLanding();

        toastr.success("Contacto Guardado con Exito");
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.section1 {\n  width: 100%;\n  height: 150px;\n}\n.landing-img a {\n  \n  display: block;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 15px;\n  color: #7e7e7e !important;\n}\n.landing-brand img{\n    width:200px;\n}\n.section2 {\n  width: 100%;\n}\n.landing-sect2 img{\n    width:50%;\n    left:10px;\n    text-align: left;\n}\n.fondo1 {\n    background-image: url(" + escape(__webpack_require__(/*! ../assets/img/LANDING7.png */ "./resources/js/assets/img/LANDING7.png")) + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 900px;\n}\n.text-sect2 p{\n    color: white;\n    font-weight: 700;\n    font-size: 36px;\n    margin-top: 15px;\n}\n.section3 {\n    width: 100%;\n}\n.fondo-transparente {\n    background-image: url(" + escape(__webpack_require__(/*! ../assets/img/LANDING6.png */ "./resources/js/assets/img/LANDING6.png")) + ");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    background-position: center;\n}\n.landing-sect3 img{\n    width:45%;\n    text-align: center;\n    z-index:1;\n    position: relative;\n    top:-150px;\n}\n.centrado{\n    margin-left: auto;\n    margin-right: auto;\n    display: table;\n    width: 45%;\n    padding: 50px;\n}\n.centrado2{\n    margin-left: auto;\n    margin-right: auto;\n    display: table;\n    width: 45%;\n    padding: 0 50px 0 50px;\n}\n.center-elements-form{\n    margin-left: auto;\n    margin-right: auto;\n    display: table;\n}\n.fondo-azul-form{\n    background-color: #b0ebed; \n    border-radius: 20px;\n    margin-bottom: 4rem;\n}\n.text-form{\n    font-size: 32px;  \n    line-height: 130%;  \n    font-weight: 700;\n}\n.text-form2{\n    font-size: 18px;\n}\n.btn-form{\n    left: 35%;\n    position: absolute;\n    font-size: 45px;\n    width: 30%;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    letter-spacing: 0.15em;\n    border-radius: 15px;\n}\n.text-terms{\n    color: #7e7e7e !important; \n    margin-bottom:1rem;\n}\n.phone-form{\n    color: #615f5f !important; \n    margin-bottom:1rem;\n    font-size: 32px;\n    font-weight: 700;\n    letter-spacing: 0.1rem;\n}\n.shadow-form{\n    box-shadow: 8px 9px 8px #999;\n}\n.img-section4{\n    position: relative;\n    display: inline-block;\n}\n.text-section4{\n    position:absolute;\n    top: 80%;\n    font-size: 46px;\n    font-weight: 900;\n    left: 25%;\n}\n.landing-sect4 img{\n    width:100%;\n    left:10px;\n    text-align: left;\n}\n.text-sect5{\n    font-size:20px; \n    line-height: 120%;\n    text-align: center;\n}\n.fondo-azul{\n    background-color: rgb(21, 185, 185);\n    height: 110px;\n}\n.line-yellow{\n    border-bottom: 4px solid rgb(248, 207, 26);\n    max-width: 230px;\n    padding: 0;\n    margin: -4px auto 0 auto !important;\n}\n.line-yellow-form{\n    border-bottom: 5px solid rgb(248, 207, 26);\n    max-width: 280px;\n    padding: 0;\n    margin: -4px auto 0 auto !important;\n}\n.fondo2 {\n    background-image: url(" + escape(__webpack_require__(/*! ../assets/img/LANDING8.png */ "./resources/js/assets/img/LANDING8.png")) + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 700px;\n}\n.landing-brand2 img{\n    width:400px;\n    text-align: left;\n}\n.landing-brand2 p{\n    margin-left: 50px; \n    font-size:30px;\n}\n.content-text{\n    width: 70%;\n    background-color: #ffc107;\n    border-radius: 7px;\n    margin-bottom: 1rem;\n    font-size: 24px;\n    padding: 8px;\n}\n.margin-elements{\n    margin-top: 200px;\n}\n.text-sect1{\n    padding: 50% 60px 10px 70px; \n    font-size:20px; \n    line-height: 140%; \n    text-align: justify;\n}\n@media (max-width: 600px) {\n.btn-form{\n        left: 23%;\n        position: absolute;\n        font-size: 32px;\n        width: 55%;\n        padding: 0;\n        margin: 0;\n        border: 0;\n        border-radius: 12px;\n        margin-top: 13px;\n}\n.phone-form{\n        color: #615f5f !important; \n        margin-bottom:1rem;\n        font-size: 24px;\n        font-weight: 700;\n}\n.centrado {\n        margin-left: auto;\n        margin-right: auto;\n        display: table;\n        width: 75%;\n        padding: 50px;\n        margin-top: 20px;\n}\n.fondo2 {\n        background-image: url(" + escape(__webpack_require__(/*! ../assets/img/Responsive1-05.png */ "./resources/js/assets/img/Responsive1-05.png")) + ");\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-size: 100% 100%;\n        height: 600px;\n}\n.fondo1 {\n        background-image: url(" + escape(__webpack_require__(/*! ../assets/img/Responsive2-06.png */ "./resources/js/assets/img/Responsive2-06.png")) + ");\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-size: 100% 100%;\n        height: 340px;\n}\n.content-text{\n        width: 80%;\n        background-color: #ffc107;\n        border-radius: 7px;\n        margin-bottom: 1rem;\n        font-size: 18px;\n        padding: 8px;\n}\n.text-sect1{\n        padding: 35% 140px 10px 20px;\n        font-size: 13px;\n        line-height: 140%;\n        text-align: justify;\n}\n.text-sect2 p{\n        font-size: 28px;\n}\n.line-yellow{\n        max-width: 190px;\n}\n.landing-brand2 img{\n        width:200px;\n}\n.landing-brand2 p{\n        margin-left: 10px; \n        font-size:18px;\n}\n.text-form {\n        font-size: 20px;\n        line-height: 100%;\n        font-weight: 700;\n}\n.text-form2 {\n        font-size: 12px;\n}\n.line-yellow-form{\n        border-bottom: 5px solid rgb(248, 207, 26);\n        max-width: 185px;\n        padding: 0;\n        margin: -4px auto 0 auto !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing.vue?vue&type=template&id=dc924fc8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing.vue?vue&type=template&id=dc924fc8& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "responsive" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "centrado fondo-azul-form shadow-form" }, [
      _c(
        "form",
        {
          staticClass: "center-elements-form",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.createContact($event)
            }
          }
        },
        [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "name",
                id: "name",
                placeholder: "Nombre Completo",
                required: ""
              },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "email",
                name: "email",
                id: "email",
                placeholder: "Correo Electrónico",
                required: ""
              },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.phone,
                  expression: "phone"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "phone",
                id: "phone",
                placeholder: "Teléfono",
                required: ""
              },
              domProps: { value: _vm.phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.phone = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.school,
                  expression: "school"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "school",
                id: "school",
                placeholder: "Institución Educativa",
                required: ""
              },
              domProps: { value: _vm.school },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.school = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "form-group",
              staticStyle: { "margin-bottom": "0" }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.city,
                    expression: "city"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "city",
                  id: "city",
                  placeholder: "Cuidad",
                  required: ""
                },
                domProps: { value: _vm.city },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.city = $event.target.value
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _vm._m(5)
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(6)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("div", { staticClass: "col landing-img form-group section1" }, [
        _c("a", { staticClass: "landing-brand text-center" }, [
          _c("div", [
            _c("img", {
              attrs: {
                thumbnail: "",
                fluid: "",
                src:
                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/LOGO_LIV4T_SKOOL.png?alt=media&token=e0a74c90-0f0d-4932-863a-827b5f87ed0c",
                alt: "4"
              }
            }),
            _vm._v(" "),
            _c("p", { attrs: { for: "" } }, [_vm._v("Diviértete aprendiendo")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col text-sect2 text-center fondo-azul fondo-transparente",
          staticStyle: { "padding-top": "10px" }
        },
        [
          _c("p", [_vm._v("Todo el colegio en una")]),
          _vm._v(" "),
          _c("p", [_vm._v("sola plataforma")]),
          _vm._v(" "),
          _c("p", { staticClass: "line-yellow" })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "align-items-center section2 fondo1" }, [
      _c("div", { staticClass: "col-md-8 text-sect1" }, [
        _c("label", [
          _c("b", [_vm._v("Liv4T Skool")]),
          _vm._v(
            " es una plataforma de gestión de contenido de aprendizaje (LCMS) que apoya los procesos administrativos y pedagógicos, y que permite flexibilizar, conexión remota y seguimiento."
          )
        ]),
        _vm._v(" "),
        _c("label", [
          _vm._v("Diseñada por profesores y administradores escolares")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("label", { staticClass: "text-form" }, [
        _vm._v("RECIBE 1 MES GRATIS "),
        _c("br"),
        _vm._v(" DE PRUEBA ")
      ]),
      _vm._v(" "),
      _c("label", { staticClass: "text-form2" }, [
        _vm._v("DILIGENCIANDO EL FORMULARIO")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "line-yellow-form" }),
      _vm._v(" "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-check" }, [
      _c("input", {
        staticClass: "form-check-input",
        attrs: { type: "checkbox", id: "gridCheck", required: "" }
      }),
      _vm._v(" "),
      _c(
        "label",
        {
          staticClass: "form-check-label text-terms",
          attrs: { for: "gridCheck" }
        },
        [
          _vm._v(
            "\n                    Acepto Políticas de datos y términos y condiciones\n                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("p", { staticClass: "phone-form" }, [_vm._v("1 800 8106429")]),
      _vm._v(" "),
      _c("p", { staticClass: "phone-form" }, [_vm._v("(1) 8932828")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary text-center btn-form",
          attrs: { type: "submit" }
        },
        [_vm._v("Inscríbete")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fondo2" }, [
      _c(
        "div",
        {
          staticClass: "col img-section4 text-center",
          staticStyle: { padding: "20px 0 0 20px" }
        },
        [
          _c("div", { staticClass: "col landing-img form-group" }, [
            _c(
              "a",
              {
                staticClass: "landing-brand2",
                staticStyle: { "text-align": "left" }
              },
              [
                _c("div", [
                  _c("img", {
                    attrs: {
                      thumbnail: "",
                      fluid: "",
                      src:
                        "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/LOGO_LIV4T_SKOOL.png?alt=media&token=e0a74c90-0f0d-4932-863a-827b5f87ed0c",
                      alt: "4"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [_vm._v("Diviértete aprendiendo")])
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "margin-elements" }, [
        _c("div", { staticClass: "content-text" }, [
          _c("label", [
            _vm._v(
              "Podrás crear y entregar el material de las clases desde Liv4T Skool"
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "content-text" }, [
          _c("label", [
            _vm._v(
              "Las evaluaciones, los talleres y las clases serán más didacticas y sencillas de hacer con Liv4T"
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "content-text" }, [
          _c("label", [
            _vm._v(
              "La información e interacción con docentes, estudiantes, padres y administrativos en una sola plataforma."
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/LANDING6.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/LANDING6.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/LANDING6.png?402d15e7cdaa432cfec8990b76b81427";

/***/ }),

/***/ "./resources/js/assets/img/LANDING7.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/LANDING7.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/LANDING7.png?0700988b5780f3fe1aa3c6f6b75701f1";

/***/ }),

/***/ "./resources/js/assets/img/LANDING8.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/LANDING8.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/LANDING8.png?71953d58f093d8ccd23db253f10bf8b6";

/***/ }),

/***/ "./resources/js/assets/img/Responsive1-05.png":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/Responsive1-05.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Responsive1-05.png?17d612f05b32d1249fe75c12f625a2ac";

/***/ }),

/***/ "./resources/js/assets/img/Responsive2-06.png":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/Responsive2-06.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Responsive2-06.png?3593048c988172d32782079ac4197782";

/***/ }),

/***/ "./resources/js/components/landing.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/landing.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_vue_vue_type_template_id_dc924fc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.vue?vue&type=template&id=dc924fc8& */ "./resources/js/components/landing.vue?vue&type=template&id=dc924fc8&");
/* harmony import */ var _landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.vue?vue&type=script&lang=js& */ "./resources/js/components/landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _landing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/landing.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _landing_vue_vue_type_template_id_dc924fc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _landing_vue_vue_type_template_id_dc924fc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/landing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/landing.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/landing.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/landing.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/landing.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/landing.vue?vue&type=template&id=dc924fc8&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/landing.vue?vue&type=template&id=dc924fc8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_dc924fc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=template&id=dc924fc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing.vue?vue&type=template&id=dc924fc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_dc924fc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_dc924fc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
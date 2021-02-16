(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
exports.push([module.i, "\n.section1 {\r\n  width: 100%;\r\n  height: 150px;\n}\n.landing-img a {\r\n  \r\n  display: block;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 15px;\r\n  color: #7e7e7e !important;\n}\n.landing-brand img{\r\n    width:200px;\n}\n.section2 {\r\n  width: 100%;\n}\n.landing-sect2 img{\r\n    width:50%;\r\n    left:10px;\r\n    text-align: left;\n}\n.fondo-amarillo {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../assets/img/LANDING5.png */ "./resources/js/assets/img/LANDING5.png")) + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    background-position: center;\n}\n.text-sect2 p{\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 48px;\r\n    margin-top: 20px;\r\n    margin-bottom: 2rem ;\n}\n.section3 {\r\n    width: 100%;\n}\n.fondo-transparente {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../assets/img/LANDING6.png */ "./resources/js/assets/img/LANDING6.png")) + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    background-position: center;\n}\n.landing-sect3 img{\r\n    width:45%;\r\n    text-align: center;\r\n    z-index:1;\r\n    position: relative;\r\n    top:-150px;\n}\n.centrado{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: table;\r\n    width: 45%;\r\n    padding: 50px;\n}\n.centrado2{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: table;\r\n    width: 45%;\r\n    padding: 50px 50px 0px 50px;\n}\n.centrado3{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: table;\r\n    width: 45%;\r\n    padding: 0 50px 0 50px;\n}\n.center-elements-form{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: table;\n}\n.fondo-azul-form{\r\n    background-color: #b0ebed; \r\n    border-radius: 20px;\n}\n.text-form{\r\n    font-size: 32px;  \r\n    line-height: 130%;  \r\n    font-weight: 700;\n}\n.text-form2{\r\n    font-size: 18px;\n}\n.btn-form{\r\n    left: 35%;\r\n    position: absolute;\r\n    font-size: 45px;\r\n    width: 30%;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    letter-spacing: 0.15em;\r\n    border-radius: 15px\n}\n.text-terms{\r\n    color: #7e7e7e !important; \r\n    margin-bottom:1rem;\n}\n.phone-form{\r\n    color: #615f5f !important; \r\n    margin-bottom:1rem;\r\n    font-size: 32px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.1rem;\n}\n.shadow-form{\r\n    box-shadow: 8px 9px 8px #999;\n}\n.img-section4{\r\n    position: relative;\r\n    display: inline-block;\n}\n.text-section4{\r\n    position:absolute;\r\n    top: 80%;\r\n    font-size: 46px;\r\n    font-weight: 900;\r\n    left: 25%;\n}\n.landing-sect4 img{\r\n    width:100%;\r\n    left:10px;\r\n    text-align: left;\n}\n.text-sect5{\r\n    font-size:20px; \r\n    line-height: 120%;\r\n    text-align: center;\n}\r\n", ""]);

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
    _vm._m(2),
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
          _vm._m(3),
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
          _vm._m(4),
          _vm._v(" "),
          _vm._m(5),
          _vm._v(" "),
          _vm._m(6)
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(7),
    _vm._v(" "),
    _vm._m(8)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "landing-img form-group section1" }, [
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "align-items-center section2 fondo-amarillo" },
      [
        _c(
          "div",
          {
            staticClass: "col text-sect2 text-center",
            staticStyle: { "padding-top": "10px" }
          },
          [
            _c("p", [_vm._v("Todo el colegio en una")]),
            _vm._v(" "),
            _c("p", [_vm._v("sola plataforma")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col", staticStyle: { padding: "20px 0 0 20px" } },
          [
            _c("a", { staticClass: "landing-sect2" }, [
              _c("div", [
                _c("img", {
                  attrs: {
                    thumbnail: "",
                    fluid: "",
                    src: __webpack_require__(/*! ../assets/img/LANDING1.png */ "./resources/js/assets/img/LANDING1.png")
                  }
                })
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row section3 fondo-transparente" }, [
      _c(
        "div",
        {
          staticClass: "col-md-5",
          staticStyle: {
            padding: "40px 40px 10px 70px",
            "font-size": "20px",
            "line-height": "140%"
          }
        },
        [
          _c("label", [
            _c("b", [_vm._v("Liv4T Skool")]),
            _vm._v(" es una plataforma "),
            _c("br"),
            _vm._v(" Sistema de gestión de contenido de "),
            _c("br"),
            _vm._v(" aprendizaje (LCMS) que apoya los procesos "),
            _c("br"),
            _vm._v(" administrativos y pedagógicos, y que "),
            _c("br"),
            _vm._v(" permite flexibilizar, conexión remota y seguimiento.")
          ]),
          _vm._v(" "),
          _c("label", [
            _vm._v("Diseñada por profesores y administradores escolares")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-7", staticStyle: { padding: "20px 0 0 20px" } },
        [
          _c("a", { staticClass: "landing-sect3" }, [
            _c("div", [
              _c("img", {
                attrs: {
                  thumbnail: "",
                  fluid: "",
                  src: __webpack_require__(/*! ../assets/img/LANDING2.png */ "./resources/js/assets/img/LANDING2.png")
                }
              })
            ])
          ])
        ]
      )
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
      ])
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
    return _c("div", { staticClass: "centrado2" }, [
      _c(
        "div",
        {
          staticClass: "col img-section4 text-center",
          staticStyle: { padding: "20px 0 0 20px" }
        },
        [
          _c("a", { staticClass: "landing-sect4" }, [
            _c("div", [
              _c("img", {
                attrs: {
                  thumbnail: "",
                  fluid: "",
                  src: __webpack_require__(/*! ../assets/img/LANDING3.png */ "./resources/js/assets/img/LANDING3.png")
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-section4" }, [
              _c("label", [_vm._v("Sabías qué..?")])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "centrado3" }, [
      _c("div", [
        _c("label", { staticClass: "text-sect5" }, [
          _vm._v(
            "Realizar un auto cuestionario luego de estudiar ayudará a tu cerebro a recuperar la información cuando la necesites."
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/LANDING1.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/LANDING1.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/LANDING1.png?c0c0014fe6c81c02c70e0a68d9bf83a4";

/***/ }),

/***/ "./resources/js/assets/img/LANDING2.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/LANDING2.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/LANDING2.png?0dce99e928e1605b9bc664d004c40012";

/***/ }),

/***/ "./resources/js/assets/img/LANDING3.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/LANDING3.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/LANDING3.png?e80a1e8a9a593a29d994c09cee89cb87";

/***/ }),

/***/ "./resources/js/assets/img/LANDING5.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/LANDING5.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/LANDING5.png?ce1981297ae0bdc555a03aebb65e78d1";

/***/ }),

/***/ "./resources/js/assets/img/LANDING6.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/LANDING6.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/LANDING6.png?402d15e7cdaa432cfec8990b76b81427";

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
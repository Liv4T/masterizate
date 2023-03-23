(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContractViewComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContractViewComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {
      date: "",
      name: "",
      type: "",
      idnumber: "",
      answer: "",
      answer1: "",
      pdf: "",
      contract: [],
      myOptions: ["Cedula de Ciudadania", "Cedula de extranjeria"],
      events: {
        register_loading: false
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    var urlr = "getContract";
    axios.get(urlr).then(function (response) {
      _this.contract = response.data;
      console.log(_this.contract);
      _this.pdf = _this.contract.url;
      console.log(_this.pdf);
    });
  },
  methods: {
    RegisterEvent: function RegisterEvent() {
      var _this2 = this;

      this.events.register_loading = true;
      axios.put("/updateContract", {
        read_terms: this.answer,
        agree: this.answer1
      }).then(function (response) {
        toastr.success("Contracto guardado exitosamente");

        _this2.getInicio();
      })["catch"](function (error) {
        toastr.info(error);
      });
    },
    RegisterValidForm: function RegisterValidForm() {
      return this.answer == 1 && this.answer1 == 1;
    },
    getInicio: function getInicio() {
      window.location = "/calendar";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n* {\r\n  font-family: \"Montserrat\";\n}\nh4 {\r\n  margin-top: 20px;\n}\n.border-bottom-1 {\r\n  border-bottom: 1px solid #818181;\n}\nform {\r\n  margin-top: 20px;\r\n  padding: 10px;\n}\n.form-check-label {\r\n  width: 90%;\n}\n.mgr {\r\n  margin-right: 25px;\n}\n.radiobt {\r\n  align-items: baseline;\n}\niframe:not(.md-image){\r\n    height:500px !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ContractViewComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContractViewComponent.vue?vue&type=template&id=783f738b&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContractViewComponent.vue?vue&type=template&id=783f738b& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "row justify-content-center margin-top-20" }, [
      _c("div", { staticClass: "col-md-10" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-10 col-md-10" }, [
              _c("form", { attrs: { onSubmit: "return false;" } }, [
                _c("div", { attrs: { align: "center" } }, [
                  _c("iframe", {
                    staticClass: "text-center",
                    attrs: { src: _vm.pdf, width: "100%", frameborder: "0" }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h5", { staticClass: "margin-top-20" }, [
                    _vm._v(
                      "De acuerdo con todo lo anterior, EL CONTRATISTA declara que hizo lectura del contrato"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row justify-content-center radiobt" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.answer,
                            expression: "answer"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          id: "si",
                          name: "answer",
                          value: "1",
                          required: ""
                        },
                        domProps: { checked: _vm._q(_vm.answer, "1") },
                        on: {
                          change: function($event) {
                            _vm.answer = "1"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("h5", { staticClass: "mgr" }, [_vm._v("Si")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.answer,
                            expression: "answer"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          id: "no",
                          name: "answer",
                          value: "0"
                        },
                        domProps: { checked: _vm._q(_vm.answer, "0") },
                        on: {
                          change: function($event) {
                            _vm.answer = "0"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("No")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("h5", { staticClass: "margin-top-20" }, [
                    _vm._v(
                      "\n                  Conoce las obligaciones y tarifas que de este se desprenden, conociendo esto, EL CONTRATISTA acepta los términos del contrato, acepta el valor de las comisiones acordadas y de los posibles costos adicionales que pueda incurrir por el uso de la plataforma.\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row justify-content-center radiobt" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.answer1,
                            expression: "answer1"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          id: "si",
                          name: "answer1",
                          value: "1",
                          required: ""
                        },
                        domProps: { checked: _vm._q(_vm.answer1, "1") },
                        on: {
                          change: function($event) {
                            _vm.answer1 = "1"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("h5", { staticClass: "mgr" }, [_vm._v("Si")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.answer1,
                            expression: "answer1"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          id: "no",
                          name: "answer1",
                          value: "0"
                        },
                        domProps: { checked: _vm._q(_vm.answer1, "0") },
                        on: {
                          change: function($event) {
                            _vm.answer1 = "0"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("No")])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "form-group content-button col-md-12" },
                    [
                      !_vm.events.register_loading
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-Azul",
                              attrs: { disabled: !_vm.RegisterValidForm() },
                              on: {
                                click: function($event) {
                                  return _vm.RegisterEvent()
                                }
                              }
                            },
                            [_vm._v("Acepto")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.events.register_loading
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { disabled: true }
                            },
                            [_vm._v("Cargando...")]
                          )
                        : _vm._e()
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 text-center" }, [
        _c("h4", [_vm._v("Contrato")]),
        _vm._v(" "),
        _c("h6", [_vm._v("Para continuar revise el contrato")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ContractViewComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/ContractViewComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContractViewComponent_vue_vue_type_template_id_783f738b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContractViewComponent.vue?vue&type=template&id=783f738b& */ "./resources/js/components/ContractViewComponent.vue?vue&type=template&id=783f738b&");
/* harmony import */ var _ContractViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContractViewComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ContractViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ContractViewComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContractViewComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContractViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContractViewComponent_vue_vue_type_template_id_783f738b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContractViewComponent_vue_vue_type_template_id_783f738b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ContractViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ContractViewComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ContractViewComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContractViewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContractViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ContractViewComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContractViewComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ContractViewComponent.vue?vue&type=template&id=783f738b&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ContractViewComponent.vue?vue&type=template&id=783f738b& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_template_id_783f738b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContractViewComponent.vue?vue&type=template&id=783f738b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContractViewComponent.vue?vue&type=template&id=783f738b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_template_id_783f738b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractViewComponent_vue_vue_type_template_id_783f738b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesTeacher.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clasesTeacher.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");
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
  components: {
    pdf: vue_pdf__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["user"],
  data: function data() {
    return {
      clases: [],
      areas: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: [],
      activetab: 1,
      nameArea: "",
      planifications: "",
      idArea: "",
      idClassroom: "",
      idAreaClass: "",
      planif: "clase"
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/lectives").then(function (response) {
      _this.planifications = response.data;
    });
    var url = "/GetArearByUser";
    axios.get(url).then(function (response) {
      _this.areas = response.data;
      console.log(_this.areas);
    });
    console.log("Component mounted.");
  },
  methods: {
    modaliniciar: function modaliniciar() {
      var _this2 = this;

      var url = window.location.origin + "/SaveTerms";
      axios.post(url, {
        status: 1
      }).then(function (response) {
        _this2.errors = [];
        $("#modalini").modal("hide");
      })["catch"](function (error) {
        _this2.errors = error.response.data;
      });
    },
    ShowSelected: function ShowSelected(data) {
      var dataArea = JSON.parse(data.target.value);
      this.idArea = dataArea.id;
      this.idClassroom = dataArea.id_classroom;
      this.idAreaClass = dataArea.id + '/' + dataArea.id_classroom;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mg-btn {\n  margin: 10px;\n  min-width: 165px;\n}\n.width-r {\n  max-width: 97%;\n  border: 1px solid #cccccc82;\n  border-radius: 10px;\n  box-shadow: 3px 3px 3px 3px #b0acac;\n}\n.tabs {\n  margin-top: 10px;\n  overflow: hidden;\n  margin-left: 100px;\n  margin-bottom: -2px;\n}\n.tabs ul {\n  list-style-type: none;\n  margin-left: 5px;\n}\n.tabs a {\n  float: left;\n  cursor: pointer;\n  padding: 0px 16px;\n  transition: background-color 0.2s;\n  border: 1px solid #ccc;\n  border-right: none;\n  background-color: #bfbfbf;\n  border-radius: 10px 10px 0 0;\n  font-weight: bold;\n  color: #fff !important;\n}\n.tabs a:last-child {\n  border-right: 1px solid #ccc;\n}\n.pd-20 {\n  padding: 20px;\n}\n\n/* Change background color of tabs on hover */\n.tabs a:hover {\n  background-color: #aaa;\n  color: #fff;\n}\n\n/* Styling for active tab */\n.tabs a.active {\n  background-color: #00cbcec1;\n  color: #fff;\n  border-bottom: 2px solid #fff;\n  cursor: default;\n}\n.tabcontent {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  box-shadow: 3px 3px 6px #e1e1e1;\n}\n.content-azul {\n  background-color: #00cbcec6;\n}\n.flotante {\n  position: fixed;\n  top: 380px;\n  z-index: 1020;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./clasesTeacher.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesTeacher.vue?vue&type=template&id=38bab29e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clasesTeacher.vue?vue&type=template&id=38bab29e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("div", [
      _c("div", { staticClass: "form-group col-md-4 mx-auto" }, [
        _c("div", { staticClass: "text-center" }, [
          _c(
            "select",
            {
              staticClass: "btn btn-warning letra-boldfont",
              attrs: { name: "type" },
              on: { change: _vm.ShowSelected }
            },
            [
              _c(
                "option",
                {
                  attrs: { disabled: "", selected: "", hidden: "", value: "" }
                },
                [_vm._v("CURSOS")]
              ),
              _vm._v(" "),
              _vm._l(_vm.areas, function(area, key) {
                return _c(
                  "option",
                  { key: key, domProps: { value: JSON.stringify(area) } },
                  [
                    _vm._v(
                      _vm._s(area.user_type === 7 ? area.area_name : area.text)
                    )
                  ]
                )
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-9 mx-auto", attrs: { id: "tabs" } }, [
          _c("div", { staticClass: "tabs text-center" }, [
            _vm.user.type_user === 1 || _vm.user.type_user === 2
              ? _c(
                  "a",
                  {
                    class: [_vm.activetab === 1 ? "active" : ""],
                    on: {
                      click: function($event) {
                        _vm.activetab = 1
                      }
                    }
                  },
                  [
                    _c("h4", { staticStyle: { "font-size": "15px" } }, [
                      _vm._v("CLASES")
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.user.type_user === 1 || _vm.user.type_user === 2
              ? _c(
                  "a",
                  {
                    class: [_vm.activetab === 2 ? "active" : ""],
                    on: {
                      click: function($event) {
                        _vm.activetab = 2
                      }
                    }
                  },
                  [
                    _c("h4", { staticStyle: { "font-size": "15px" } }, [
                      _vm._v("ACTIVIDADES")
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.user.type_user === 1 || _vm.user.type_user === 2
              ? _c(
                  "a",
                  {
                    class: [_vm.activetab === 3 ? "active" : ""],
                    on: {
                      click: function($event) {
                        _vm.activetab = 3
                      }
                    }
                  },
                  [
                    _c("h4", { staticStyle: { "font-size": "15px" } }, [
                      _vm._v("NOTAS")
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.user.type_user === 1 || _vm.user.type_user === 2
              ? _c(
                  "a",
                  {
                    class: [_vm.activetab === 4 ? "active" : ""],
                    on: {
                      click: function($event) {
                        _vm.activetab = 4
                      }
                    }
                  },
                  [
                    _c("h4", { staticStyle: { "font-size": "15px" } }, [
                      _vm._v("ENTREGAS")
                    ])
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", [
            _vm.activetab === 1
              ? _c("div", { staticClass: "tabcontent" }, [
                  _vm.idArea != "" || _vm.user.type_user === 7
                    ? _c(
                        "div",
                        [
                          _c(
                            "h3",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.user.type_user === 7,
                                  expression: "user.type_user === 7"
                                }
                              ],
                              staticClass: "card-header fondo"
                            },
                            [_vm._v("Mis Cursos")]
                          ),
                          _vm._v(" "),
                          _c("cycle-list", {
                            attrs: {
                              idArea: _vm.idAreaClass,
                              planif: _vm.planif,
                              user: _vm.user
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.activetab === 2
              ? _c("div", { staticClass: "tabcontent" }, [
                  _vm.idArea != "" && _vm.idClassroom != ""
                    ? _c(
                        "div",
                        [
                          _c("activities-teacher", {
                            attrs: {
                              idArea: _vm.idArea,
                              idClassroom: _vm.idClassroom
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.activetab === 3
              ? _c("div", { staticClass: "tabcontent" }, [
                  _vm.idArea != "" && _vm.idClassroom != ""
                    ? _c(
                        "div",
                        [
                          _c("teacher-students", {
                            attrs: {
                              idArea: _vm.idArea,
                              idClassroom: _vm.idClassroom
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.activetab === 4
              ? _c("div", { staticClass: "tabcontent" }, [
                  _vm.idArea != "" && _vm.idClassroom != ""
                    ? _c(
                        "div",
                        [
                          _c("repository-component", {
                            attrs: {
                              idArea: _vm.idArea,
                              idClassroom: _vm.idClassroom
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/clasesTeacher.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/clasesTeacher.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clasesTeacher_vue_vue_type_template_id_38bab29e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clasesTeacher.vue?vue&type=template&id=38bab29e& */ "./resources/js/components/clasesTeacher.vue?vue&type=template&id=38bab29e&");
/* harmony import */ var _clasesTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clasesTeacher.vue?vue&type=script&lang=js& */ "./resources/js/components/clasesTeacher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _clasesTeacher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clasesTeacher.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _clasesTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clasesTeacher_vue_vue_type_template_id_38bab29e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clasesTeacher_vue_vue_type_template_id_38bab29e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/clasesTeacher.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/clasesTeacher.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/clasesTeacher.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./clasesTeacher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesTeacher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./clasesTeacher.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesTeacher.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/clasesTeacher.vue?vue&type=template&id=38bab29e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/clasesTeacher.vue?vue&type=template&id=38bab29e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_template_id_38bab29e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./clasesTeacher.vue?vue&type=template&id=38bab29e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesTeacher.vue?vue&type=template&id=38bab29e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_template_id_38bab29e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesTeacher_vue_vue_type_template_id_38bab29e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
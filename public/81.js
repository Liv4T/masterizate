(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAcademic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsAcademic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      activetab: null
    };
  },
  methods: {
    showSection: function showSection(section) {
      this.activetab = section;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tabs {\n  margin-top: 10px;\n  overflow: hidden;\n  margin-left: 30px;\n  margin-bottom: -2px;\n}\n.tabs ul {\n  list-style-type: none;\n  margin-left: 5px;\n}\n.tabs a {\n  float: left;\n  cursor: pointer;\n  padding: 1px 20px;\n  transition: background-color 0.2s;\n  border: 1px solid #ccc;\n  border-right: none;\n  background-color: #bfbfbf;\n  border-radius: 10px 10px 0 0;\n  font-weight: bold;\n  color: #fff !important;\n}\n.tabs a:last-child {\n  border-right: 1px solid #ccc;\n}\n/* Change background color of tabs on hover */\n.tabs a:hover {\n  background-color: #aaa;\n  color: #fff;\n}\n\n/* Styling for active tab */\n.tabs a.active {\n  background-color: #00cbcec1;\n  color: #fff;\n  border-bottom: 2px solid #fff;\n  cursor: default;\n}\n.tabcontent {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  box-shadow: 3px 3px 6px #e1e1e1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsAcademic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAcademic.vue?vue&type=template&id=8e716820&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsAcademic.vue?vue&type=template&id=8e716820& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "tabs" }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("planifGen")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Planificación General")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("cyclesClass")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Ciclos Y Clases")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("notes")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Notas")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("utils")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Útiles")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("pedagogic")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Salidas Pedagógicas")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("adminElectivs")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Administrar Electivas")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("electivsClass")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Clases Electivas")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("assistantsMotives")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Creación de Motivos de Asistencia")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("trimestresCreate")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Creación de Trimestres")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("reportPlanif")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Informe Planificación")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("cycleReport")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Informe Ciclos y Clases")
                ])
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-11 mx-auto", attrs: { id: "tabs" } }, [
        _vm.activetab === "planifGen"
          ? _c("div", [_c("vplan-adm")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "cyclesClass"
          ? _c("div", [_c("clases-teacher", { attrs: { user: _vm.user } })], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "notes"
          ? _c("div", [_c("notasd-component")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "utils"
          ? _c("div", [_c("utils-coord", { attrs: { user: _vm.user } })], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "pedagogic"
          ? _c(
              "div",
              [_c("pedagogical-course", { attrs: { user: _vm.user } })],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "adminElectivs"
          ? _c("div", [_c("lectives-teacher-planning")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "electivsClass"
          ? _c("div", [_c("lectives-teacher-courses")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "assistantsMotives"
          ? _c("div", [_c("motive-assistants")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "trimestresCreate"
          ? _c("div", [_c("trimestre-component")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "reportPlanif"
          ? _c("div", [_c("admin-report-planification")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "cycleReport"
          ? _c("div", [_c("admin-report-cycle")], 1)
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tabsAcademic.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/tabsAcademic.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabsAcademic_vue_vue_type_template_id_8e716820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabsAcademic.vue?vue&type=template&id=8e716820& */ "./resources/js/components/tabsAcademic.vue?vue&type=template&id=8e716820&");
/* harmony import */ var _tabsAcademic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabsAcademic.vue?vue&type=script&lang=js& */ "./resources/js/components/tabsAcademic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tabsAcademic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabsAcademic.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tabsAcademic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabsAcademic_vue_vue_type_template_id_8e716820___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabsAcademic_vue_vue_type_template_id_8e716820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tabsAcademic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tabsAcademic.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/tabsAcademic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsAcademic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAcademic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsAcademic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAcademic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/tabsAcademic.vue?vue&type=template&id=8e716820&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/tabsAcademic.vue?vue&type=template&id=8e716820& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_template_id_8e716820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsAcademic.vue?vue&type=template&id=8e716820& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAcademic.vue?vue&type=template&id=8e716820&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_template_id_8e716820___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAcademic_vue_vue_type_template_id_8e716820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAdministrative.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsAdministrative.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tabs {\n  margin-top: 10px;\n  overflow: hidden;\n  margin-left: 30px;\n  margin-bottom: -2px;\n}\n.tabs ul {\n  list-style-type: none;\n  margin-left: 5px;\n}\n.tabs a {\n  float: left;\n  cursor: pointer;\n  padding: 1px 20px;\n  transition: background-color 0.2s;\n  border: 1px solid #ccc;\n  border-right: none;\n  background-color: #bfbfbf;\n  border-radius: 10px 10px 0 0;\n  font-weight: bold;\n  color: #fff !important;\n}\n.tabs a:last-child {\n  border-right: 1px solid #ccc;\n}\n/* Change background color of tabs on hover */\n.tabs a:hover {\n  background-color: #aaa;\n  color: #fff;\n}\n\n/* Styling for active tab */\n.tabs a.active {\n  background-color: #00cbcec1;\n  color: #fff;\n  border-bottom: 2px solid #fff;\n  cursor: default;\n}\n.tabcontent {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  box-shadow: 3px 3px 6px #e1e1e1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsAdministrative.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAdministrative.vue?vue&type=template&id=59fa7852&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsAdministrative.vue?vue&type=template&id=59fa7852& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
                    return _vm.showSection("institutions")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Instituciones")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("quarter")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Trimestre")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("classroom")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Salones")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("piarStudents")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Estudiantes PIAR")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("users")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Usuarios")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("noteParameters")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Parametros de Notas")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("nursing")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Enfermería")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("feeding")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Alimentación")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("transport")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Transporte")
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
        _vm.activetab === "institutions"
          ? _c("div", [_c("institu-adm")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "quarter"
          ? _c("div", [_c("trimestres")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "classroom"
          ? _c("div", [_c("cursos-adm")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "piarStudents"
          ? _c("div", [_c("piar-component")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "users" ? _c("div", [_c("salon-adm")], 1) : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "noteParameters"
          ? _c("div", [_c("admin-configuration")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "nursing"
          ? _c("div", [_c("nursing-component")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "feeding"
          ? _c("div", [_c("food-component")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "transport"
          ? _c(
              "div",
              [_c("pedagogical-course", { attrs: { user: _vm.user } })],
              1
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tabsAdministrative.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/tabsAdministrative.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabsAdministrative_vue_vue_type_template_id_59fa7852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabsAdministrative.vue?vue&type=template&id=59fa7852& */ "./resources/js/components/tabsAdministrative.vue?vue&type=template&id=59fa7852&");
/* harmony import */ var _tabsAdministrative_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabsAdministrative.vue?vue&type=script&lang=js& */ "./resources/js/components/tabsAdministrative.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tabsAdministrative_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabsAdministrative.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tabsAdministrative_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabsAdministrative_vue_vue_type_template_id_59fa7852___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabsAdministrative_vue_vue_type_template_id_59fa7852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tabsAdministrative.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tabsAdministrative.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/tabsAdministrative.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsAdministrative.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAdministrative.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsAdministrative.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAdministrative.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/tabsAdministrative.vue?vue&type=template&id=59fa7852&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/tabsAdministrative.vue?vue&type=template&id=59fa7852& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_template_id_59fa7852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsAdministrative.vue?vue&type=template&id=59fa7852& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsAdministrative.vue?vue&type=template&id=59fa7852&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_template_id_59fa7852___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsAdministrative_vue_vue_type_template_id_59fa7852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
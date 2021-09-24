(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsFormation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsFormation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsFormation.vue?vue&type=template&id=7cbfbd18&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabsFormation.vue?vue&type=template&id=7cbfbd18& ***!
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
  return _c("div", [
    _c("div", { staticClass: "form-group width-r mx-auto" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "tabs" }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("permission")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Permisos")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("observer")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Observador")
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
        _vm.activetab === "permission"
          ? _c("div", [_c("permission-pedagogic")], 1)
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === "observer"
          ? _c(
              "div",
              [_c("observer-component", { attrs: { user: _vm.user } })],
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

/***/ "./resources/js/components/tabsFormation.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/tabsFormation.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabsFormation_vue_vue_type_template_id_7cbfbd18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabsFormation.vue?vue&type=template&id=7cbfbd18& */ "./resources/js/components/tabsFormation.vue?vue&type=template&id=7cbfbd18&");
/* harmony import */ var _tabsFormation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabsFormation.vue?vue&type=script&lang=js& */ "./resources/js/components/tabsFormation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabsFormation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabsFormation_vue_vue_type_template_id_7cbfbd18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabsFormation_vue_vue_type_template_id_7cbfbd18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tabsFormation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tabsFormation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/tabsFormation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsFormation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsFormation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsFormation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsFormation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tabsFormation.vue?vue&type=template&id=7cbfbd18&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/tabsFormation.vue?vue&type=template&id=7cbfbd18& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsFormation_vue_vue_type_template_id_7cbfbd18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tabsFormation.vue?vue&type=template&id=7cbfbd18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabsFormation.vue?vue&type=template&id=7cbfbd18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsFormation_vue_vue_type_template_id_7cbfbd18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabsFormation_vue_vue_type_template_id_7cbfbd18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
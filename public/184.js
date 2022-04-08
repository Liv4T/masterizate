(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[184],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportVisits.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportVisits.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id_student"],
  data: function data() {
    return {
      reports: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var url = "/getReportStudent/" + this.id_student;
    axios.get(url).then(function (response) {
      _this.reports = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportVisits.vue?vue&type=template&id=a4396eb2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportVisits.vue?vue&type=template&id=a4396eb2& ***!
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
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _c("div", { staticClass: "card text-center" }, [
          _c("h3", { staticClass: "card-header fondo" }, [
            _vm._v("Reporte de Psicología")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "table",
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.reports, function(report, t) {
                  return _c("tr", { key: t }, [
                    _c("td", [_vm._v(_vm._s(report.classroom))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(report.reason))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(report.person_inv))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(report.person_report))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(report.grade))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(report.description))])
                  ])
                })
              ],
              2
            )
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
    return _c("tr", [
      _c("th", [_vm._v("Salón")]),
      _vm._v(" "),
      _c("th", [_vm._v("Motivo")]),
      _vm._v(" "),
      _c("th", [_vm._v("Persona Involucrada")]),
      _vm._v(" "),
      _c("th", [_vm._v("Persona que reporta")]),
      _vm._v(" "),
      _c("th", [_vm._v("Grado")]),
      _vm._v(" "),
      _c("th", [_vm._v("Descripción")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reportVisits.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/reportVisits.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportVisits_vue_vue_type_template_id_a4396eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportVisits.vue?vue&type=template&id=a4396eb2& */ "./resources/js/components/reportVisits.vue?vue&type=template&id=a4396eb2&");
/* harmony import */ var _reportVisits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportVisits.vue?vue&type=script&lang=js& */ "./resources/js/components/reportVisits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reportVisits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportVisits_vue_vue_type_template_id_a4396eb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reportVisits_vue_vue_type_template_id_a4396eb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reportVisits.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportVisits.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/reportVisits.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportVisits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./reportVisits.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportVisits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportVisits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportVisits.vue?vue&type=template&id=a4396eb2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/reportVisits.vue?vue&type=template&id=a4396eb2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportVisits_vue_vue_type_template_id_a4396eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./reportVisits.vue?vue&type=template&id=a4396eb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportVisits.vue?vue&type=template&id=a4396eb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportVisits_vue_vue_type_template_id_a4396eb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportVisits_vue_vue_type_template_id_a4396eb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
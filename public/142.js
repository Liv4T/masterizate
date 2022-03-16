(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/areasToDuplicateGeneral.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/areasToDuplicateGeneral.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      areas: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var url = window.location.origin + "/GetArearByUser";
    axios.get(url).then(function (response) {
      _this.areas = response.data;
      console.log(response.data);
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/areasToDuplicateGeneral.vue?vue&type=template&id=41ea4ea3&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/areasToDuplicateGeneral.vue?vue&type=template&id=41ea4ea3& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { attrs: { id: "accordion" } },
                  _vm._l(_vm.areas, function(area, key) {
                    return _c("div", { key: key, staticClass: "card" }, [
                      _c(
                        "div",
                        {
                          staticClass: "card-header",
                          attrs: { id: "headingOne" + key }
                        },
                        [
                          _c("h5", { staticClass: "mb-0" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-link",
                                attrs: {
                                  "data-toggle": "collapse",
                                  "data-target": "#collapseOne" + key,
                                  "aria-expanded": "true",
                                  "aria-controls": "collapseOne" + key
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                " +
                                    _vm._s(area.text) +
                                    "\n                                            "
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "collapse",
                          attrs: {
                            id: "collapseOne" + key,
                            "aria-labelledby": "headingOne" + key,
                            "data-parent": "#accordion"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("duplicar-component", {
                                attrs: {
                                  id_area: area.id_area,
                                  id_classroom: area.id_classroom,
                                  rol: "teacher"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  }),
                  0
                )
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
    return _c("div", { staticClass: "card-header fondo" }, [
      _c("h2", [_vm._v("Duplicación de Planificación General")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/areasToDuplicateGeneral.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/areasToDuplicateGeneral.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _areasToDuplicateGeneral_vue_vue_type_template_id_41ea4ea3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areasToDuplicateGeneral.vue?vue&type=template&id=41ea4ea3& */ "./resources/js/components/areasToDuplicateGeneral.vue?vue&type=template&id=41ea4ea3&");
/* harmony import */ var _areasToDuplicateGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./areasToDuplicateGeneral.vue?vue&type=script&lang=js& */ "./resources/js/components/areasToDuplicateGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _areasToDuplicateGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _areasToDuplicateGeneral_vue_vue_type_template_id_41ea4ea3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _areasToDuplicateGeneral_vue_vue_type_template_id_41ea4ea3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/areasToDuplicateGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/areasToDuplicateGeneral.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/areasToDuplicateGeneral.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areasToDuplicateGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./areasToDuplicateGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/areasToDuplicateGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areasToDuplicateGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/areasToDuplicateGeneral.vue?vue&type=template&id=41ea4ea3&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/areasToDuplicateGeneral.vue?vue&type=template&id=41ea4ea3& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areasToDuplicateGeneral_vue_vue_type_template_id_41ea4ea3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./areasToDuplicateGeneral.vue?vue&type=template&id=41ea4ea3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/areasToDuplicateGeneral.vue?vue&type=template&id=41ea4ea3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areasToDuplicateGeneral_vue_vue_type_template_id_41ea4ea3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areasToDuplicateGeneral_vue_vue_type_template_id_41ea4ea3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
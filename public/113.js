(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportsGovernment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportsGovernment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {
    getStudentsReport: function getStudentsReport() {
      window.open("reportStudents", "_self");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportsGovernment.vue?vue&type=template&id=4395cb56&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportsGovernment.vue?vue&type=template&id=4395cb56& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "back" },
    [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { attrs: { id: "accordion" } }, [
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse",
                      attrs: {
                        id: "collapseFour",
                        "aria-labelledby": "headingFour",
                        "data-parent": "#accordion"
                      }
                    },
                    [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "form-group text-center" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: { click: _vm.getStudentsReport }
                            },
                            [_vm._v("Reporte de Estudiantes")]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal-docente"),
      _vm._v(" "),
      _c("modal-planif-docente"),
      _vm._v(" "),
      _c("modal-course"),
      _vm._v(" "),
      _c("modal-materias")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header fondo" }, [
      _c("strong", [_vm._v("Reportes")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header", attrs: { id: "headingOne" } }, [
        _c("h5", { staticClass: "mb-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link",
              attrs: {
                "data-toggle": "collapse",
                "data-target": "#collapseOne",
                "aria-expanded": "true",
                "aria-controls": "collapseOne"
              }
            },
            [
              _vm._v(
                "\n                                        Reporte de Docentes\n                                    "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse show",
          attrs: {
            id: "collapseOne",
            "aria-labelledby": "headingOne",
            "data-parent": "#accordion"
          }
        },
        [
          _c("div", { staticClass: "card-body text-center" }, [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#reportTeacherModal"
                  }
                },
                [_vm._v("Reporte de Notas")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#reportTeacherPlanifModal"
                  }
                },
                [_vm._v("Reporte de Planeación")]
              )
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
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header", attrs: { id: "headingTwo" } }, [
        _c("h5", { staticClass: "mb-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-target": "#collapseTwo",
                "aria-expanded": "false",
                "aria-controls": "collapseTwo"
              }
            },
            [
              _vm._v(
                "\n                                        Reporte de Curso\n                                    "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse",
          attrs: {
            id: "collapseTwo",
            "aria-labelledby": "headingTwo",
            "data-parent": "#accordion"
          }
        },
        [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "form-group text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#reportTeacherCourseModal"
                  }
                },
                [_vm._v("Reporte de Curso")]
              )
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
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header", attrs: { id: "headingThree" } }, [
        _c("h5", { staticClass: "mb-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-target": "#collapseThree",
                "aria-expanded": "false",
                "aria-controls": "collapseThree"
              }
            },
            [
              _vm._v(
                "\n                                        Reporte de Materias\n                                    "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse",
          attrs: {
            id: "collapseThree",
            "aria-labelledby": "headingThree",
            "data-parent": "#accordion"
          }
        },
        [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "form-group text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#reportMateriasModal"
                  }
                },
                [_vm._v("Reporte de Materias")]
              )
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
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingFour" } },
      [
        _c("h5", { staticClass: "mb-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-target": "#collapseFour",
                "aria-expanded": "false",
                "aria-controls": "collapseFour"
              }
            },
            [
              _vm._v(
                "\n                                        Reporte de Estudiantes\n                                    "
              )
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reportsGovernment.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/reportsGovernment.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportsGovernment_vue_vue_type_template_id_4395cb56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportsGovernment.vue?vue&type=template&id=4395cb56& */ "./resources/js/components/reportsGovernment.vue?vue&type=template&id=4395cb56&");
/* harmony import */ var _reportsGovernment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportsGovernment.vue?vue&type=script&lang=js& */ "./resources/js/components/reportsGovernment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reportsGovernment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportsGovernment_vue_vue_type_template_id_4395cb56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reportsGovernment_vue_vue_type_template_id_4395cb56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reportsGovernment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportsGovernment.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/reportsGovernment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportsGovernment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./reportsGovernment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportsGovernment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportsGovernment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportsGovernment.vue?vue&type=template&id=4395cb56&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/reportsGovernment.vue?vue&type=template&id=4395cb56& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportsGovernment_vue_vue_type_template_id_4395cb56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./reportsGovernment.vue?vue&type=template&id=4395cb56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportsGovernment.vue?vue&type=template&id=4395cb56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportsGovernment_vue_vue_type_template_id_4395cb56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportsGovernment_vue_vue_type_template_id_4395cb56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
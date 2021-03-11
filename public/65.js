(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchoolGov.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SchoolGov.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchoolGov.vue?vue&type=template&id=41a0759f&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SchoolGov.vue?vue&type=template&id=41a0759f& ***!
  \************************************************************************************************************************************************************************************************************/
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
    [_vm._m(0), _vm._v(" "), _c("modal-school-component")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("\n                    Reportes\n                ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { attrs: { id: "accordion" } }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-header", attrs: { id: "headingOne" } },
                  [
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
                            "\n                                        Docentes\n                                    "
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
                    staticClass: "collapse show",
                    attrs: {
                      id: "collapseOne",
                      "aria-labelledby": "headingOne",
                      "data-parent": "#accordion"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("table", [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("Reporte de Notas")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Planeación")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Exámenes")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Recuperación")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": ".bd-example-modal-lg"
                                  }
                                },
                                [_vm._v("Notas")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": ".bd-example-modal-lg"
                                  }
                                },
                                [_vm._v("Planeación")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": ".bd-example-modal-lg"
                                  }
                                },
                                [_vm._v("Exámenes")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": ".bd-example-modal-lg"
                                  }
                                },
                                [_vm._v("Recuperación")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "button",
                                { staticClass: "btn btn-info btn-xs" },
                                [_vm._v("Show")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "btn btn-success btn-xs" },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "btn btn-danger btn-xs" },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-header", attrs: { id: "headingTwo" } },
                  [
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
                            "\n                                        Cursos\n                                    "
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
                      id: "collapseTwo",
                      "aria-labelledby": "headingTwo",
                      "data-parent": "#accordion"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("table", [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("Reporte de Notas")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Planeación")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Exámenes")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Recuperación")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Notas")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Planeación")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Exámenes")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Recuperación")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "button",
                                { staticClass: "btn btn-info btn-xs" },
                                [_vm._v("Show")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "btn btn-success btn-xs" },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "btn btn-danger btn-xs" },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-header", attrs: { id: "headingThree" } },
                  [
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
                            "\n                                        Materias\n                                    "
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
                      id: "collapseThree",
                      "aria-labelledby": "headingThree",
                      "data-parent": "#accordion"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("table", [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("Reporte de Notas")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Planeación")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Exámenes")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Recuperación")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Notas")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Planeación")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Exámenes")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Recuperación")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "button",
                                { staticClass: "btn btn-info btn-xs" },
                                [_vm._v("Show")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "btn btn-success btn-xs" },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "btn btn-danger btn-xs" },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-header", attrs: { id: "headingThree" } },
                  [
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
                            "\n                                        Estudiantes\n                                    "
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
                      id: "collapseThree",
                      "aria-labelledby": "headingThree",
                      "data-parent": "#accordion"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("table", [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("Reporte de Notas")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Planeación")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Exámenes")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Reporte de Recuperación")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Notas")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Planeación")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Exámenes")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v("Recuperación")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "button",
                                { staticClass: "btn btn-info btn-xs" },
                                [_vm._v("Show")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "btn btn-success btn-xs" },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                { staticClass: "btn btn-danger btn-xs" },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/SchoolGov.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/SchoolGov.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SchoolGov_vue_vue_type_template_id_41a0759f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchoolGov.vue?vue&type=template&id=41a0759f& */ "./resources/js/components/SchoolGov.vue?vue&type=template&id=41a0759f&");
/* harmony import */ var _SchoolGov_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchoolGov.vue?vue&type=script&lang=js& */ "./resources/js/components/SchoolGov.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SchoolGov_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SchoolGov_vue_vue_type_template_id_41a0759f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SchoolGov_vue_vue_type_template_id_41a0759f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SchoolGov.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SchoolGov.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/SchoolGov.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolGov_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SchoolGov.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchoolGov.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolGov_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SchoolGov.vue?vue&type=template&id=41a0759f&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SchoolGov.vue?vue&type=template&id=41a0759f& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolGov_vue_vue_type_template_id_41a0759f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SchoolGov.vue?vue&type=template&id=41a0759f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SchoolGov.vue?vue&type=template&id=41a0759f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolGov_vue_vue_type_template_id_41a0759f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolGov_vue_vue_type_template_id_41a0759f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
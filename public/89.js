(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      legislationData: [],
      members: []
    };
  },
  mounted: function mounted() {
    this.getLegislation();
    this.getMembers();
  },
  methods: {
    getLegislation: function getLegislation() {
      var _this = this;

      axios.get('/getLegislation').then(function (response) {
        _this.legislationData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getMembers: function getMembers() {
      var _this2 = this;

      axios.get('/members').then(function (members) {
        _this2.members = members.data;
      });
    }
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
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "text-center card-header fondo" }, [
            _vm._v("\n                    Gobierno Escolar\n                ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { attrs: { id: "accordion" } }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(0),
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
                      _c("div", { staticClass: "row" }, [
                        _vm.members.length > 0
                          ? _c(
                              "div",
                              { staticClass: "col-12" },
                              _vm._l(_vm.members, function(data, id) {
                                return _c(
                                  "div",
                                  {
                                    key: id,
                                    staticClass: "list-group",
                                    attrs: { id: "list-tab", role: "tablist" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: data.modeInsert == "1",
                                            expression: "data.modeInsert == '1'"
                                          }
                                        ],
                                        staticClass: "mb-5"
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "list-group-item",
                                            attrs: {
                                              id: "list-home-list",
                                              "data-toggle": "list",
                                              role: "tab",
                                              "aria-controls": "home"
                                            }
                                          },
                                          [
                                            _c("div", [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex mb-2 justify-content-center"
                                                },
                                                [
                                                  _c("img", {
                                                    staticStyle: {
                                                      height: "160px"
                                                    },
                                                    attrs: {
                                                      src:
                                                        data.imageSchoolGovernment,
                                                      alt: ""
                                                    }
                                                  })
                                                ]
                                              )
                                            ])
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: data.modeInsert == "2",
                                            expression: "data.modeInsert == '2'"
                                          }
                                        ]
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "list-group-item",
                                            attrs: {
                                              id: "list-home-list",
                                              "data-toggle": "list",
                                              role: "tab",
                                              "aria-controls": "home"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-center mb-3"
                                              },
                                              [
                                                _c("img", {
                                                  staticStyle: {
                                                    height: "160px"
                                                  },
                                                  attrs: {
                                                    src: data.image,
                                                    alt: ""
                                                  }
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "text-center mt-2"
                                              },
                                              [
                                                _c(
                                                  "strong",
                                                  {
                                                    staticClass:
                                                      "h3 mb-2 text-uppercase"
                                                  },
                                                  [_vm._v(_vm._s(data.member))]
                                                ),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _c(
                                                    "p",
                                                    { staticClass: "h3" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(data.position)
                                                      )
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("p", { staticClass: "h4" }, [
                                                  _vm._v(
                                                    _vm._s(data.description)
                                                  )
                                                ])
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          : _c("div", [_vm._m(1)])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse show",
                    attrs: {
                      id: "collapseTwo",
                      "aria-labelledby": "headingOne",
                      "data-parent": "#accordion"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _vm.legislationData.length > 0
                        ? _c(
                            "div",
                            { staticClass: "card-body" },
                            _vm._l(_vm.legislationData, function(data, id) {
                              return _c("div", { key: id }, [
                                _c("p", [_vm._v(_vm._s(data.legislation))]),
                                _vm._v(" "),
                                _c("br")
                              ])
                            }),
                            0
                          )
                        : _c("div", { staticClass: "card-body" }, [
                            _c("p", [
                              _vm._v("Crea La Legislación del Gobierno Escolar")
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
                "\n                                        Quiénes lo Conforman\n                                    "
              )
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("p", [_vm._v("Crea los integrantes del Gobierno Escolar")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
                "data-target": "#collapseTwo",
                "aria-expanded": "true",
                "aria-controls": "collapseTwo"
              }
            },
            [
              _vm._v(
                "\n                                        Legislación\n                                    "
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
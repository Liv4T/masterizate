(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalDocenteReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modalDocenteReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component("multiselect", vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      type_export: true,
      teachersOptions: [],
      areaOptions: [],
      saveArea: {},
      DataToExport: [],
      saveTeachers: {}
    };
  },
  mounted: function mounted() {
    this.getTeachers();
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    getTeachers: function getTeachers() {
      var _this = this;

      axios.get('getTeachers').then(function (response) {
        response.data.forEach(function (element) {
          _this.teachersOptions.push({
            id: element.id,
            text: "".concat(element.name) + " ".concat(element.last_name)
          });
        });
      });
    },
    getAreaOrClassroom: function getAreaOrClassroom() {
      var _this2 = this;

      if (this.type_export === true) {
        axios.get("GetAreaTeacher/".concat(this.saveTeachers.id)).then(function (response) {
          var area = response.data;
          area.forEach(function (element) {
            _this2.areaOptions.push({
              id: element.id,
              id_area: element.id_area,
              id_classroom: element.id_classroom,
              text: element.text
            });
          });
        });
      } else {
        axios.get("getClassroom").then(function (response) {
          var areaOrClassroom = response.data;
          console.log(areaOrClassroom);
          areaOrClassroom.forEach(function (element) {
            _this2.areaOptions.push({
              id: element.id,
              text: element.clasroom
            });
          });
        });
      }
    },
    exportData: function exportData() {
      if (this.type_export === true) {
        window.open("reportNotes/".concat(parseInt(this.saveArea.id), "/").concat(parseInt(this.saveArea.id_classroom), "/").concat(this.saveTeachers.text, "/").concat(this.saveArea.text), "_self");
      } else {
        window.open("reportAllCourse/".concat(parseInt(this.saveArea.id)), "_self");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalDocenteReport.vue?vue&type=template&id=2c17d944&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modalDocenteReport.vue?vue&type=template&id=2c17d944& ***!
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
  return _c(
    "div",
    {
      staticClass: "modal fade bd-example-modal-lg",
      attrs: {
        id: "reportTeacherModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "myLargeModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "form-goup" }, [
              _c("div", { staticClass: "form-check mb-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.type_export,
                      expression: "type_export"
                    }
                  ],
                  staticClass: "form-check-input",
                  attrs: { type: "checkbox", id: "defaultCheck1" },
                  domProps: {
                    checked: Array.isArray(_vm.type_export)
                      ? _vm._i(_vm.type_export, null) > -1
                      : _vm.type_export
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.type_export,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.type_export = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.type_export = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.type_export = $$c
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(1)
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.type_export === true,
                      expression: "type_export === true"
                    }
                  ]
                },
                [
                  _c("label", [_vm._v("Docente")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    attrs: {
                      options: _vm.teachersOptions,
                      multiple: false,
                      "close-on-select": false,
                      "clear-on-select": false,
                      "preserve-search": true,
                      placeholder: "Seleccione una",
                      label: "text",
                      "track-by": "id",
                      "preselect-first": true
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selection",
                        fn: function(ref) {
                          var values = ref.values
                          var isOpen = ref.isOpen
                          return [
                            values.length && !isOpen
                              ? _c(
                                  "span",
                                  { staticClass: "multiselect__single" },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(values.length) +
                                        "\n                                        opciones\n                                        selecionadas\n                                    "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.saveTeachers,
                      callback: function($$v) {
                        _vm.saveTeachers = $$v
                      },
                      expression: "saveTeachers"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.type_export === false,
                    expression: "type_export === false"
                  }
                ]
              },
              [
                _c("p", [
                  _vm._v("Consulta el salon requerido y realiza la exportación")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary mt-2 mb-2",
                  on: {
                    click: function($event) {
                      return _vm.getAreaOrClassroom()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                       " +
                      _vm._s(
                        _vm.type_export === true
                          ? "Consultar Area"
                          : "Consultar Salon"
                      ) +
                      "\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm.areaOptions.length > 0
              ? _c(
                  "div",
                  { staticClass: "form-goup" },
                  [
                    _vm.type_export === true
                      ? _c("div", [_c("label", [_vm._v("Areas Consultadas")])])
                      : _c("div", [
                          _c("label", [_vm._v("Salones Consultados")])
                        ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: {
                        options: _vm.areaOptions,
                        multiple: false,
                        "close-on-select": false,
                        "clear-on-select": false,
                        "preserve-search": true,
                        placeholder: "Seleccione una",
                        label: "text",
                        "track-by": "id",
                        "preselect-first": true
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "selection",
                            fn: function(ref) {
                              var values = ref.values
                              var isOpen = ref.isOpen
                              return [
                                values.length && !isOpen
                                  ? _c(
                                      "span",
                                      { staticClass: "multiselect__single" },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(values.length) +
                                            "\n                                    opciones\n                                    selecionadas\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        1821651511
                      ),
                      model: {
                        value: _vm.saveArea,
                        callback: function($$v) {
                          _vm.saveArea = $$v
                        },
                        expression: "saveArea"
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.areaOptions.length > 0,
                    expression: "areaOptions.length > 0"
                  }
                ],
                staticClass: "btn btn-primary",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.exportData()
                  }
                }
              },
              [_vm._v("Exportar")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [_vm._v("Cerrar")]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Reporte de Notas")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-check-label", attrs: { for: "defaultCheck1" } },
      [
        _c("span", { staticClass: "dot dot_orange" }),
        _vm._v(" Reporte de Notas por Docente\n                        ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/modalDocenteReport.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/modalDocenteReport.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalDocenteReport_vue_vue_type_template_id_2c17d944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalDocenteReport.vue?vue&type=template&id=2c17d944& */ "./resources/js/components/modalDocenteReport.vue?vue&type=template&id=2c17d944&");
/* harmony import */ var _modalDocenteReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalDocenteReport.vue?vue&type=script&lang=js& */ "./resources/js/components/modalDocenteReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modalDocenteReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalDocenteReport_vue_vue_type_template_id_2c17d944___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalDocenteReport_vue_vue_type_template_id_2c17d944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modalDocenteReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modalDocenteReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/modalDocenteReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDocenteReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./modalDocenteReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalDocenteReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDocenteReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modalDocenteReport.vue?vue&type=template&id=2c17d944&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/modalDocenteReport.vue?vue&type=template&id=2c17d944& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDocenteReport_vue_vue_type_template_id_2c17d944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./modalDocenteReport.vue?vue&type=template&id=2c17d944& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalDocenteReport.vue?vue&type=template&id=2c17d944&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDocenteReport_vue_vue_type_template_id_2c17d944___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDocenteReport_vue_vue_type_template_id_2c17d944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportAdmin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportAdmin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      weeklyPlan: [],
      annual: [],
      downloading: false
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('ReportWeeklyPlan').then(function (response) {
        _this.weeklyPlan = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('ReportAnnualPlanification').then(function (response) {
        _this.annual = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    download: function download() {
      var _this2 = this;

      this.downloading = true;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'pt', 'letter');
      setTimeout(function () {
        pdf.autoTable({
          html: '#tableReport',
          columnStyles: {
            0: {
              columnWidth: 110
            },
            1: {
              columnWidth: 110
            },
            2: {
              columnWidth: 110
            },
            3: {
              columnWidth: 110
            },
            4: {
              columnWidth: 110
            }
          }
        });
        pdf.save("Informe Actividades.pdf");
        _this2.downloading = false;
      }, 1000);
    },
    download2: function download2() {
      var _this3 = this;

      this.downloading = true;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'pt', 'letter');
      setTimeout(function () {
        pdf.autoTable({
          html: '#tableReport2',
          columnStyles: {
            0: {
              columnWidth: 110
            },
            1: {
              columnWidth: 110
            },
            2: {
              columnWidth: 110
            },
            3: {
              columnWidth: 110
            },
            4: {
              columnWidth: 110
            }
          }
        });
        pdf.save("Informe Planificaci\xF3n Anual.pdf");
        _this3.downloading = false;
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportAdmin.vue?vue&type=template&id=6d766c00&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportAdmin.vue?vue&type=template&id=6d766c00& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.downloading,
            expression: "downloading"
          }
        ]
      },
      [
        _c(
          "div",
          { staticClass: "alert alert-success", attrs: { role: "alert" } },
          [_vm._v("\n            Descargando Reporte\n        ")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "button",
      { staticClass: "btn btn-primary", on: { click: _vm.download } },
      [_vm._v("\n        Descargar Actividades\n    ")]
    ),
    _vm._v(" "),
    _c(
      "button",
      { staticClass: "btn btn-primary", on: { click: _vm.download2 } },
      [_vm._v("\n        Descargar Planificación Anual\n    ")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "accordion", attrs: { id: "accordionExample" } }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse",
            attrs: {
              id: "collapseOne",
              "aria-labelledby": "headingOne",
              "data-parent": "#accordionExample"
            }
          },
          [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-striped table-hover table-responsive",
                  attrs: { id: "tableReport" }
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.weeklyPlan, function(data, key) {
                      return _c("tr", { key: key }, [
                        _c("td", [
                          _vm._v(
                            _vm._s(data.area_name + " " + data.classroom_name)
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.class_name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.class_description))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.driving_question))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(data.user_name + " " + data.user_last_name)
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _vm._m(3),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse",
            attrs: {
              id: "collapseTwo",
              "aria-labelledby": "headingTwo",
              "data-parent": "#accordionExample"
            }
          },
          [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-striped table-hover table-responsive",
                  attrs: { id: "tableReport2" }
                },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.annual, function(data, key) {
                      return _c("tr", { key: key }, [
                        _c("td", [_vm._v(_vm._s(data.area_name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(data.achievement_planification))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.classroom_name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(data.user_name + " " + data.user_last_name)
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.created_at))])
                      ])
                    }),
                    0
                  )
                ]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header fondo" }, [
        _vm._v(
          "\n            Reportes de actividades y planificación anual\n        "
        )
      ])
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
        _c("h2", { staticClass: "mb-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link btn-block text-left",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#collapseOne",
                "aria-expanded": "false",
                "aria-controls": "collapseOne"
              }
            },
            [
              _vm._v(
                "\n                        Actividades\n                    "
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Area / Salon")]),
        _vm._v(" "),
        _c("th", [_vm._v("Clase")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actividad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Docente")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingTwo" } },
      [
        _c("h2", { staticClass: "mb-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link btn-block text-left collapsed",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#collapseTwo",
                "aria-expanded": "falsee",
                "aria-controls": "collapseTwo"
              }
            },
            [
              _vm._v(
                "\n                    Planificación Anual\n                    "
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Area")]),
        _vm._v(" "),
        _c("th", [_vm._v("Logro")]),
        _vm._v(" "),
        _c("th", [_vm._v("Salon de Clase")]),
        _vm._v(" "),
        _c("th", [_vm._v("Docente")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha de Creación")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reportAdmin.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/reportAdmin.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportAdmin_vue_vue_type_template_id_6d766c00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportAdmin.vue?vue&type=template&id=6d766c00& */ "./resources/js/components/reportAdmin.vue?vue&type=template&id=6d766c00&");
/* harmony import */ var _reportAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportAdmin.vue?vue&type=script&lang=js& */ "./resources/js/components/reportAdmin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reportAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportAdmin_vue_vue_type_template_id_6d766c00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reportAdmin_vue_vue_type_template_id_6d766c00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reportAdmin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportAdmin.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/reportAdmin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./reportAdmin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportAdmin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportAdmin.vue?vue&type=template&id=6d766c00&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/reportAdmin.vue?vue&type=template&id=6d766c00& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportAdmin_vue_vue_type_template_id_6d766c00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./reportAdmin.vue?vue&type=template&id=6d766c00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportAdmin.vue?vue&type=template&id=6d766c00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportAdmin_vue_vue_type_template_id_6d766c00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportAdmin_vue_vue_type_template_id_6d766c00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
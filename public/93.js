(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

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
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _ExportPDF_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExportPDF/export */ "./resources/js/components/ExportPDF/export.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dateToExport: "",
      teachersOptions: [],
      studentsOptions: [],
      dataToExport: [],
      saveStudents: {},
      saveTeachers: {}
    };
  },
  mounted: function mounted() {
    this.getTeachers();
    this.getStudents();
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
    getStudents: function getStudents() {
      var _this2 = this;

      axios.get('getStudents').then(function (response) {
        response.data.forEach(function (element) {
          _this2.studentsOptions.push({
            id: element.id,
            text: "".concat(element.name) + " ".concat(element.last_name)
          });
        });
      });
    },
    exportData: function exportData() {
      var _this3 = this;

      axios.get("GetAreaToReport/".concat(this.saveTeachers.id)).then(function (response) {
        var areas = response.data;
        areas.forEach(function (area) {
          axios.get("/api/teacher/area/".concat(parseInt(area.id), "/classroom/").concat(parseInt(area.id_classroom), "/student/").concat(parseInt(_this3.saveStudents.id))).then(function (response) {
            var classRoom = response.data;

            _this3.dataToExport.push({
              clase: area.text,
              Estudiante: classRoom.name,
              Progreso: "".concat(classRoom.progress === -1 ? 0 : classRoom.progress.toString(), " %"),
              Nota: "".concat(classRoom.score === -1 ? 0 : classRoom.score.toString(), " / ").concat(classRoom.score_base.toString())
            });
          });
        });
        var headers = Object(_ExportPDF_export__WEBPACK_IMPORTED_MODULE_2__["CreateHeaders"])(["id", "clase", "Estudiante", "Progreso", "Nota"]);

        if (_this3.dataToExport.length > 0) {
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]({
            putOnlyUsedFonts: true,
            orientation: "landscape"
          });
          doc.table(1, 1, Object(_ExportPDF_export__WEBPACK_IMPORTED_MODULE_2__["GenerateData"])(_this3.dataToExport), headers, {
            autoSize: true
          });
          doc.save("ReporteNotas.pdf");
          _this3.dataToExport = [];
        } else {
          toastr.info("No hay datos disponibles");
        }
      });
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
              _c("label", [_vm._v("Fecha")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.dateToExport,
                      expression: "dateToExport"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.dateToExport = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "1" } }, [_vm._v("Un Mes")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "2" } }, [
                    _vm._v("Tres Meses")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "3" } }, [
                    _vm._v("Seis Meses")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "4" } }, [_vm._v("Un Año")])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-goup" },
              [
                _c("label", [_vm._v("Estudiante")]),
                _vm._v(" "),
                _c("multiselect", {
                  attrs: {
                    options: _vm.studentsOptions,
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
                  ]),
                  model: {
                    value: _vm.saveStudents,
                    callback: function($$v) {
                      _vm.saveStudents = $$v
                    },
                    expression: "saveStudents"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-goup" },
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
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
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
              [_vm._v("Datos")]
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ExportPDF/export.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/ExportPDF/export.js ***!
  \*****************************************************/
/*! exports provided: GenerateData, CreateHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateData", function() { return GenerateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHeaders", function() { return CreateHeaders; });
function GenerateData(data) {
  var result = [];

  for (var i = 0; i < data.length; i += 1) {
    data[i].id = (i + 1).toString();
    result.push(Object.assign({}, data[i]));
  }

  return result;
}
function CreateHeaders(keys) {
  var result = [];

  for (var i = 0; i < keys.length; i += 1) {
    result.push({
      id: keys[i],
      name: keys[i],
      prompt: keys[i],
      width: 65,
      align: "center",
      padding: 0
    });
  }

  return result;
}

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
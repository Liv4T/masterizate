(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/assistance.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/assistance.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["user"],
  data: function data() {
    return {
      studentsOption: [],
      student: {},
      motive: '',
      other_motive: false,
      assistance: false,
      excuse: false,
      area_option: [],
      areaSave: {},
      assistants: [],
      updated: false,
      student_name: '',
      course_registred: '',
      id_to_update: '',
      search_filter: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.getAssistants();
    axios.get('/GetArearByUser').then(function (response) {
      _this.areas = response.data;

      if (_this.areas.length > 0) {
        _this.area_option = _this.areas;
      }
    });
  },
  methods: {
    getAssistants: function getAssistants() {
      var _this2 = this;

      axios.get('/getAssistants').then(function (response) {
        _this2.assistants = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getStudents: function getStudents() {
      var _this3 = this;

      this.studentsOption = [];
      axios.get("/api/teacher/area/".concat(this.areaSave.id, "/classroom/").concat(this.areaSave.id_classroom, "/student")).then(function (response) {
        var students = response.data;
        students.forEach(function (student) {
          _this3.studentsOption.push({
            id: student.user_id,
            text: student.user_name
          });
        });
      });
    },
    activeMotive: function activeMotive() {
      var other_motive_check = $('input[id="flexRadioDefault3"]:checked').val();
      var assistance = $('input[id="flexRadioDefault1"]:checked').val();
      var excuse = $('input[id="flexRadioDefault2"]:checked').val();
      this.assistance = assistance === 'on' ? true : false, this.excuse = excuse === 'on' ? true : false, this.other_motive = other_motive_check === 'on' ? true : false;

      if (this.other_motive === false) {
        this.motive = '';
      }
    },
    saveAssistants: function saveAssistants() {
      var _this4 = this;

      if (this.updated === false) {
        axios.post('assistance', {
          id_student: this.student.id,
          id_teacher: this.user.id,
          assistance: this.assistance,
          excuse: this.excuse,
          other_motive: this.other_motive,
          motive: this.motive,
          course: this.areaSave.text
        }).then(function (response) {
          toastr.success(response.data);

          _this4.getAssistants();
        })["catch"](function (error) {
          toastr.info('Ha ocurrido algo, Intenta de nuevo mas tarde');
          console.log(error);
        });
      } else if (this.updated === true) {
        axios.put("assistance/".concat(this.id_to_update), {
          assistance: this.assistance,
          excuse: this.excuse,
          other_motive: this.other_motive,
          motive: this.motive
        }).then(function (response) {
          toastr.success(response.data);

          _this4.getAssistants();

          _this4.updated = false;
          $('#createAssistants').modal('hide');
        })["catch"](function (error) {
          toastr.info('Ha ocurrido algo, Intenta de nuevo mas tarde');
          console.log(error);
        });
      }
    },
    updateData: function updateData(id) {
      var _this5 = this;

      this.id_to_update = id;
      axios.get("assistance/".concat(id)).then(function (response) {
        var assistant = response.data;
        assistant.forEach(function (assist) {
          _this5.student_name = assist.student_name;

          if (assist.assistance === 1) {
            _this5.assistance = true;
            $('input[id="flexRadioDefault1"]').prop("checked", true);
          } else {
            _this5.assistance = false;
          }

          if (assist.excuse === 1) {
            _this5.excuse = true;
            $('input[id="flexRadioDefault2"]').prop("checked", true);
          } else {
            _this5.excuse = false;
          }

          if (assist.other_motive === 1) {
            _this5.other_motive = true;
            $('input[id="flexRadioDefault3"]').prop("checked", true);
          } else {
            _this5.other_motive = false;
          }

          _this5.motive = assist.motive, _this5.course_registred = assist.course;
        });
      });
      this.updated = true;
      $('#createAssistants').modal('show');
    },
    deleteData: function deleteData(id) {
      var _this6 = this;

      axios["delete"]("assistance/".concat(id)).then(function (response) {
        toastr.success(response.data);

        _this6.getAssistants();
      })["catch"](function (error) {
        toastr.info('No se ha podido eliminar el dato, Intenta de nuevo mas tarde');
        console.log(error);
      });
    },
    filterNameStudent: function filterNameStudent(studentName) {
      return studentName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/assistance.vue?vue&type=template&id=8c7d287a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/assistance.vue?vue&type=template&id=8c7d287a& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-11 mx-auto" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary mt-3 mb-3",
            attrs: {
              "data-toggle": "modal",
              "data-target": "#createAssistants"
            }
          },
          [_vm._v("Crear Asistencia")]
        ),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search_filter,
                    expression: "search_filter"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  placeholder: "Buscar Por Nombre del Estudiante"
                },
                domProps: { value: _vm.search_filter },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search_filter = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "table table-stripped table-hover" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._l(_vm.assistants, function(assistant, key) {
                    return _c(
                      "tbody",
                      { key: key, staticClass: "card-header" },
                      [
                        _vm.search_filter == "" ||
                        _vm.filterNameStudent(assistant.student_name)
                          ? _c("tr", [
                              _c("td", [
                                _vm._v(_vm._s(assistant.student_name))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(assistant.course))]),
                              _vm._v(" "),
                              assistant.assistance === 1
                                ? _c("td", [_vm._v("Asistencia Confirmada")])
                                : assistant.excuse === 1
                                ? _c("td", [_vm._v("Excusa Presentada")])
                                : assistant.other_motive === 1
                                ? _c("td", [_vm._v(_vm._s(assistant.motive))])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(assistant.created_at.date))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    on: {
                                      click: function($event) {
                                        return _vm.updateData(assistant.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Actualizar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger",
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteData(assistant.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Eliminar")]
                                )
                              ])
                            ])
                          : _vm._e()
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "createAssistants",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "createAssistantsLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm.updated === false
                    ? _c(
                        "div",
                        [
                          _c("label", { attrs: { for: "students" } }, [
                            _vm._v("Areas")
                          ]),
                          _vm._v(" "),
                          _c("multiselect", {
                            attrs: {
                              options: _vm.area_option,
                              multiple: false,
                              "close-on-select": false,
                              "clear-on-select": false,
                              "preserve-search": true,
                              placeholder: "Seleccione una o varias",
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
                                            {
                                              staticClass: "multiselect__single"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(values.length) +
                                                  "\n                                                opciones\n                                                selecionadas\n                                            "
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
                              4211883726
                            ),
                            model: {
                              value: _vm.areaSave,
                              callback: function($$v) {
                                _vm.areaSave = $$v
                              },
                              expression: "areaSave"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary mt-2",
                              on: { click: _vm.getStudents }
                            },
                            [_vm._v("Consultar Estudiantes")]
                          ),
                          _vm._v(" "),
                          _vm.studentsOption.length > 0
                            ? _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "students" } }, [
                                    _vm._v("Estudiante")
                                  ]),
                                  _vm._v(" "),
                                  _c("multiselect", {
                                    attrs: {
                                      options: _vm.studentsOption,
                                      multiple: false,
                                      "close-on-select": false,
                                      "clear-on-select": false,
                                      "preserve-search": true,
                                      placeholder: "Seleccione una o varias",
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
                                                    {
                                                      staticClass:
                                                        "multiselect__single"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(values.length) +
                                                          "\n                                                    opciones\n                                                    selecionadas\n                                                "
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
                                      1927334094
                                    ),
                                    model: {
                                      value: _vm.student,
                                      callback: function($$v) {
                                        _vm.student = $$v
                                      },
                                      expression: "student"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _c("div", [
                        _c("p", [
                          _vm._v("Estudiante: " + _vm._s(_vm.student_name))
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Curso / Salon: " + _vm._s(_vm.course_registred)
                          )
                        ])
                      ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "flexRadioDefault1" } }, [
                    _vm._v("Asistió")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-check-input ml-3",
                    attrs: {
                      type: "radio",
                      name: "flexRadioDefault",
                      id: "flexRadioDefault1"
                    },
                    on: { click: _vm.activeMotive }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "flexRadioDefault2" } }, [
                    _vm._v("Excusa")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-check-input ml-3",
                    attrs: {
                      type: "radio",
                      name: "flexRadioDefault",
                      id: "flexRadioDefault2"
                    },
                    on: { click: _vm.activeMotive }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "flexRadioDefault3" } }, [
                    _vm._v("Otro Motivo")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-check-input ml-3",
                    attrs: {
                      type: "radio",
                      name: "flexRadioDefault",
                      id: "flexRadioDefault3"
                    },
                    on: { click: _vm.activeMotive }
                  }),
                  _vm._v(" "),
                  _vm.other_motive === true
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.motive,
                            expression: "motive"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.motive },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.motive = $event.target.value
                          }
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Cerrar")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.saveAssistants }
                  },
                  [_vm._v("Guardar Asistencia")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header fondo text-center" }, [
        _c("h3", [_vm._v("Asistencias")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", [_vm._v("Curso")]),
        _vm._v(" "),
        _c("th", [_vm._v("Asistencia")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "createAssistantsLabel" } },
        [_vm._v("Asistencia")]
      ),
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

/***/ "./resources/js/components/assistance.vue":
/*!************************************************!*\
  !*** ./resources/js/components/assistance.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assistance_vue_vue_type_template_id_8c7d287a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assistance.vue?vue&type=template&id=8c7d287a& */ "./resources/js/components/assistance.vue?vue&type=template&id=8c7d287a&");
/* harmony import */ var _assistance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistance.vue?vue&type=script&lang=js& */ "./resources/js/components/assistance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _assistance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assistance_vue_vue_type_template_id_8c7d287a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assistance_vue_vue_type_template_id_8c7d287a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/assistance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/assistance.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/assistance.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assistance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./assistance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/assistance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assistance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/assistance.vue?vue&type=template&id=8c7d287a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/assistance.vue?vue&type=template&id=8c7d287a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assistance_vue_vue_type_template_id_8c7d287a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./assistance.vue?vue&type=template&id=8c7d287a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/assistance.vue?vue&type=template&id=8c7d287a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assistance_vue_vue_type_template_id_8c7d287a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assistance_vue_vue_type_template_id_8c7d287a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
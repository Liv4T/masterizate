(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteClassAndCicles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/deleteClassAndCicles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

Vue.component("multiselect", vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      saveClass: [],
      ClassOptions: [],
      CicleOptions: [],
      saveCicle: [],
      dataToIterate: [],
      date: '',
      date_end: '',
      is_updated: false,
      id_to_update: ''
    };
  },
  mounted: function mounted() {
    this.getArea();
    this.getPermissions();
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    getPermissions: function getPermissions() {
      var _this = this;

      axios.get('getPermissions').then(function (response) {
        _this.dataToIterate = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getArea: function getArea() {
      var _this2 = this;

      axios.get("GetArearByUser").then(function (response) {
        var className = response.data;

        for (var i = 0; i < className.length; i++) {
          _this2.ClassOptions.push({
            id: className[i].id + className[i].id_classroom,
            id_area: className[i].id,
            id_classroom: className[i].id_classroom,
            text: className[i].text
          });
        }
      });
    },
    getCicles: function getCicles($id_cicle) {
      var _this3 = this;

      if (this.saveClass.length > 0) {
        this.CicleOptions = [];
        this.saveClass.forEach(function (clas) {
          axios.get("editGetWeek/".concat(clas.id_area, "/").concat(clas.id_classroom)).then(function (response) {
            var cicles = response.data;

            if (!cicles.length) {
              toastr.info("No se encuentran ciclos registrados a la clase ".concat(clas.text));
            }

            for (var i = 0; i < cicles.length; i++) {
              _this3.CicleOptions.push({
                id: cicles[i].id,
                text: clas.text + ' - ' + cicles[i].text,
                "class": clas.text,
                class_selected: clas.id_classroom,
                area_selected: clas.id_area
              });
            }

            if ($id_cicle !== null) {
              for (var _i = 0; _i < cicles.length; _i++) {
                if ($id_cicle === cicles[_i].id) {
                  _this3.saveCicle.push({
                    id: cicles[_i].id,
                    text: clas.text + ' - ' + cicles[_i].text,
                    "class": clas.text,
                    class_selected: clas.id_classroom,
                    area_selected: clas.id_area
                  });
                }
              }
            }
          });
        });
      }
    },
    savePermission: function savePermission() {
      var _this4 = this;

      if (this.is_updated === false) {
        if (this.saveCicle.length > 0) {
          this.saveCicle.forEach(function (cicle) {
            axios.post('activeElimination', {
              id_cicle: cicle.id,
              date_to_activate_btn: _this4.date,
              date_to_deactivate_btn: _this4.date_end,
              text: cicle.text,
              class_selected: cicle.class_selected,
              area_selected: cicle.area_selected
            }).then(function (response) {
              _this4.date = '', _this4.date_end = '', _this4.saveCicle = [];
              toastr.success(response.data);
            })["catch"](function (error) {
              toastr.info('Intentalo de nuevo mas tarde');
            });
          });
        }

        this.getPermissions();
        $('#createRegister').modal('hide');
      } else {
        if (this.saveCicle.length > 0) {
          this.saveCicle.forEach(function (cicle) {
            axios.put("activeElimination/".concat(_this4.id_to_update), {
              id_cicle: cicle.id,
              date_to_activate_btn: _this4.date,
              date_to_deactivate_btn: _this4.date_end,
              text: cicle.text,
              class_selected: cicle.class_selected,
              area_selected: cicle.area_selected
            }).then(function (response) {
              _this4.date = '', _this4.date_end = '', _this4.saveCicle = [];
              toastr.success(response.data);
            })["catch"](function (error) {
              toastr.info('Intentalo de nuevo mas tarde');
            });
          });
        }

        this.getPermissions();
        this.saveClass = [];
        this.saveCicle = [];
        $('#createRegister').modal('hide');
      }
    },
    update: function update(data) {
      this.is_updated = true;
      this.date = data.date_to_activate_btn;
      this.date_end = data.date_to_deactivate_btn;
      this.saveClass.push({
        id: data.area_selected + data.class_selected,
        id_area: data.area_selected,
        id_classroom: data.class_selected,
        text: data.text
      });
      this.id_to_update = data.id;
      this.getCicles(data.id_cicle);
      $('#createRegister').modal('show');
    },
    dropData: function dropData(id) {
      var _this5 = this;

      axios["delete"]("activeElimination/".concat(id)).then(function (response) {
        toastr.info(response.data);

        _this5.getPermissions();
      })["catch"](function (error) {
        toastr.error('Hubo un problema, intentelo de nuevo mas tarde');
        console.log(error);

        _this5.getPermissions();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteClassAndCicles.vue?vue&type=template&id=3def1e32&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/deleteClassAndCicles.vue?vue&type=template&id=3def1e32& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "row justify-content-center", attrs: { id: "crud" } },
      [
        _c("div", { staticClass: "col-sm-10" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-responsive-xl table-hover table-striped"
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._l(_vm.dataToIterate, function(data, key) {
                    return _c("tbody", { key: key }, [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(data.text))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.date_to_activate_btn))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.date_to_deactivate_btn))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary mb-2 mr-2",
                              on: {
                                click: function($event) {
                                  return _vm.update(data)
                                }
                              }
                            },
                            [_vm._v("Actualizar")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  return _vm.dropData(data.id)
                                }
                              }
                            },
                            [_vm._v("Eliminar")]
                          )
                        ])
                      ])
                    ])
                  })
                ],
                2
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "createRegister",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "createRegisterLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "selectClass" } }, [
                      _vm._v("Clase")
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: {
                        name: "selectClass",
                        options: _vm.ClassOptions,
                        multiple: true,
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
                        value: _vm.saveClass,
                        callback: function($$v) {
                          _vm.saveClass = $$v
                        },
                        expression: "saveClass"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mb-2",
                    on: { click: _vm.getCicles }
                  },
                  [_vm._v("Consultar Ciclo")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.CicleOptions.length > 0,
                        expression: "CicleOptions.length > 0"
                      }
                    ],
                    staticClass: "form-group"
                  },
                  [
                    _c("label", { attrs: { for: "cicleSelect" } }, [
                      _vm._v("Ciclo")
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: {
                        name: "cicleSelect",
                        options: _vm.CicleOptions,
                        multiple: true,
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
                        value: _vm.saveCicle,
                        callback: function($$v) {
                          _vm.saveCicle = $$v
                        },
                        expression: "saveCicle"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "date" } }, [
                    _vm._v("Fecha para activar el permiso de eliminar")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.date,
                        expression: "date"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "date", type: "date" },
                    domProps: { value: _vm.date },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.date = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "date_end" } }, [
                    _vm._v("Fecha para desactivar el permiso de eliminar")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.date_end,
                        expression: "date_end"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "date_end", type: "date" },
                    domProps: { value: _vm.date_end },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.date_end = $event.target.value
                      }
                    }
                  })
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
                    on: { click: _vm.savePermission }
                  },
                  [_vm._v("Guardar Cambios")]
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
    return _c("div", { staticClass: "card-header fondo text-center mb-3" }, [
      _c("h4", [_vm._v("Activación de permiso para eliminar Ciclo")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary mb-3",
          attrs: { "data-toggle": "modal", "data-target": "#createRegister" }
        },
        [_vm._v("Crear Registro")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Ciclos")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Inicio de permiso para Eliminar Dato")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Fin de permiso para Eliminar Dato")]),
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
        { staticClass: "modal-title", attrs: { id: "createRegisterLabel" } },
        [_vm._v("Creación de Permiso")]
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

/***/ "./resources/js/components/deleteClassAndCicles.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/deleteClassAndCicles.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteClassAndCicles_vue_vue_type_template_id_3def1e32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteClassAndCicles.vue?vue&type=template&id=3def1e32& */ "./resources/js/components/deleteClassAndCicles.vue?vue&type=template&id=3def1e32&");
/* harmony import */ var _deleteClassAndCicles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteClassAndCicles.vue?vue&type=script&lang=js& */ "./resources/js/components/deleteClassAndCicles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deleteClassAndCicles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deleteClassAndCicles_vue_vue_type_template_id_3def1e32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deleteClassAndCicles_vue_vue_type_template_id_3def1e32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/deleteClassAndCicles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/deleteClassAndCicles.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/deleteClassAndCicles.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteClassAndCicles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./deleteClassAndCicles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteClassAndCicles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteClassAndCicles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/deleteClassAndCicles.vue?vue&type=template&id=3def1e32&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/deleteClassAndCicles.vue?vue&type=template&id=3def1e32& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteClassAndCicles_vue_vue_type_template_id_3def1e32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./deleteClassAndCicles.vue?vue&type=template&id=3def1e32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/deleteClassAndCicles.vue?vue&type=template&id=3def1e32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteClassAndCicles_vue_vue_type_template_id_3def1e32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteClassAndCicles_vue_vue_type_template_id_3def1e32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
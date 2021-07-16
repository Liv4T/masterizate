(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parentsPedagogic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parentsPedagogic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      getPermission: [],
      pedagogical_activity: '',
      departure_time: '',
      time_arrival: '',
      description: '',
      permission: null,
      id_to_update: ''
    };
  },
  mounted: function mounted() {
    this.getPedagogics();
  },
  methods: {
    getPedagogics: function getPedagogics() {
      var _this = this;

      axios.get('/getPedagogicalToAprove').then(function (response) {
        var getPermission = response.data;
        getPermission.forEach(function (element) {
          axios.get("permissionPedagogics/".concat(element.id_student)).then(function (response) {
            if (response.data.permission !== undefined) {
              _this.getPermission.push({
                id_to_update: response.data.id,
                pedagogical_activity: element.pedagogical_activity,
                departure_time: element.departure_time,
                time_arrival: element.time_arrival,
                description: element.description,
                pedagogical_id: element.pedagogical_id,
                id_student: element.id_student,
                name_student: element.name_student,
                parent_id: element.parent_id,
                permission: response.data.permission === "1" ? true : false
              });
            } else {
              _this.getPermission.push({
                pedagogical_activity: element.pedagogical_activity,
                departure_time: element.departure_time,
                time_arrival: element.time_arrival,
                description: element.description,
                pedagogical_id: element.pedagogical_id,
                id_student: element.id_student,
                name_student: element.name_student,
                parent_id: element.parent_id
              });
            }
          });
        });
      });
    },
    aprobalReject: function aprobalReject(data) {
      this.id_to_update = data.id_to_update, //datos por defecto en el modal
      this.pedagogical_activity = data.pedagogical_activity, this.departure_time = data.departure_time, this.time_arrival = data.time_arrival, this.description = data.description, //Datos ids para guardar en tabla
      this.pedagogical_id = data.pedagogical_id;
      this.id_student = data.id_student;
      this.parent_id = data.parent_id;
      this.permission = data.permission;
      $('#exampleModal').modal('show');
    },
    savePermission: function savePermission() {
      if (this.id_to_update) {
        axios.put("/permissionPedagogics/".concat(this.id_to_update), {
          pedagogical_activity: this.pedagogical_activity,
          pedagogical_id: this.pedagogical_id,
          id_student: this.id_student,
          parent_id: this.parent_id,
          permission: this.permission
        }).then(function (response) {
          toastr.success(response.data);
          window.location = '/parentsPedagogic';
        })["catch"](function (error) {
          toastr.info('Ups, algo ha sucedido, intenta mas tarde');
          console.log(error);
        });
      } else {
        axios.post('/permissionPedagogics', {
          pedagogical_activity: this.pedagogical_activity,
          pedagogical_id: this.pedagogical_id,
          id_student: this.id_student,
          parent_id: this.parent_id,
          permission: this.permission
        }).then(function (response) {
          toastr.success(response.data);
          window.location = '/parentsPedagogic';
        })["catch"](function (error) {
          toastr.info('Ups, algo ha sucedido, intenta mas tarde');
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parentsPedagogic.vue?vue&type=template&id=21ad37ae&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parentsPedagogic.vue?vue&type=template&id=21ad37ae& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "table",
              {
                staticClass:
                  "table table-responsive-xl table-hover table-striped center"
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._l(_vm.getPermission, function(pedag, key) {
                  return _c("tbody", { key: key }, [
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(pedag.pedagogical_activity))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(pedag.departure_time))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(pedag.time_arrival))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(pedag.name_student))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(pedag.description))]),
                      _vm._v(" "),
                      _c("th", [
                        _vm._v(
                          _vm._s(
                            pedag.permission === true
                              ? "Permitido"
                              : "Sin Permiso"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: function($event) {
                                return _vm.aprobalReject(pedag)
                              }
                            }
                          },
                          [_vm._v("Aprobar / Rechazar")]
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
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Actividad: ")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [_vm._v(_vm._s(_vm.pedagogical_activity))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha / Hora Salida: ")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [_vm._v(_vm._s(_vm.departure_time))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha / Hora Llegada: ")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [_vm._v(_vm._s(_vm.time_arrival))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Descripción: ")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [_vm._v(_vm._s(_vm.description))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Permiso")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.permission,
                        expression: "permission"
                      }
                    ],
                    attrs: { type: "radio", name: "gender" },
                    domProps: {
                      value: true,
                      checked: _vm._q(_vm.permission, true)
                    },
                    on: {
                      change: function($event) {
                        _vm.permission = true
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", [_vm._v("Permitir")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.permission,
                        expression: "permission"
                      }
                    ],
                    attrs: { type: "radio", name: "gender" },
                    domProps: {
                      value: false,
                      checked: _vm._q(_vm.permission, false)
                    },
                    on: {
                      change: function($event) {
                        _vm.permission = false
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", [_vm._v("Denegar")]),
                  _c("br")
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
                  [_vm._v("Guardar")]
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
      _c("h4", [_vm._v("Académico")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Actividad Pedagogica")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha / hora de Salida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha / hora de LLegada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estudiante Invitado")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Permiso")]),
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
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Permiso de Salida")]
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

/***/ "./resources/js/components/parentsPedagogic.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/parentsPedagogic.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parentsPedagogic_vue_vue_type_template_id_21ad37ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parentsPedagogic.vue?vue&type=template&id=21ad37ae& */ "./resources/js/components/parentsPedagogic.vue?vue&type=template&id=21ad37ae&");
/* harmony import */ var _parentsPedagogic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parentsPedagogic.vue?vue&type=script&lang=js& */ "./resources/js/components/parentsPedagogic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _parentsPedagogic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _parentsPedagogic_vue_vue_type_template_id_21ad37ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _parentsPedagogic_vue_vue_type_template_id_21ad37ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parentsPedagogic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parentsPedagogic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/parentsPedagogic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_parentsPedagogic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./parentsPedagogic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parentsPedagogic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_parentsPedagogic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parentsPedagogic.vue?vue&type=template&id=21ad37ae&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/parentsPedagogic.vue?vue&type=template&id=21ad37ae& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parentsPedagogic_vue_vue_type_template_id_21ad37ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./parentsPedagogic.vue?vue&type=template&id=21ad37ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parentsPedagogic.vue?vue&type=template&id=21ad37ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parentsPedagogic_vue_vue_type_template_id_21ad37ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parentsPedagogic_vue_vue_type_template_id_21ad37ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
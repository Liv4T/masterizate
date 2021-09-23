(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[188],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorCodeVinculation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorCodeVinculation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      code: "",
      codes: [],
      contentData: {},
      isEmpty: true,
      id_to_edit: ""
    };
  },
  mounted: function mounted() {
    this.getCodes();
  },
  methods: {
    getCodes: function getCodes() {
      var _this = this;

      axios.get('vinculationsTutor').then(function (response) {
        var codes = response.data;
        codes.forEach(function (element) {
          axios.get("api/tutor/".concat(element.id_tutor, "/profile")).then(function (response) {
            _this.codes.push({
              id: element.id,
              code_vinculated: element.code_vinculated,
              name_tutor: response.data.name + ' ' + response.data.last_name
            });
          });
        });
      });
    },
    consultCode: function consultCode() {
      var _this2 = this;

      axios.get("codes/".concat(this.code)).then(function (response) {
        _this2.contentData = response.data;

        if (Object.keys(response.data).length === 0) {
          _this2.isEmpty = true;
        } else {
          _this2.isEmpty = false;
        }
      });
    },
    edit: function edit(data) {
      this.code = data.code_vinculated, this.id_to_edit = data.id;
      $("#code").modal("show");
    },
    saveCodes: function saveCodes() {
      var _this3 = this;

      if (this.id_to_edit === "") {
        axios.post('vinculationsTutor', {
          id_tutor: this.contentData.id_tutor,
          id_student: this.user.id,
          code_vinculated: this.code
        }).then(function (response) {
          toastr.success(response.data);
          _this3.code = "";
          window.location = "/tutorCodeVinculation";
          $("#code").modal("hide");
        })["catch"](function (error) {
          toastr.info("Upss ha ocurrido un error, intenta de nuevo mas tarde");
          console.log(error);
        });
      } else {
        axios.patch("vinculationsTutor/".concat(this.id_to_edit), {
          id_tutor: this.contentData.id_tutor,
          id_student: this.user.id,
          code_vinculated: this.code
        }).then(function (response) {
          toastr.success(response.data);
          _this3.id_to_edit = "";
          _this3.code = "";
          window.location = "/tutorCodeVinculation";
          $("#code").modal("hide");
        })["catch"](function (error) {
          toastr.info("Upss ha ocurrido un error, intenta de nuevo mas tarde");
          console.log(error);
        });
      }
    },
    dropVinculation: function dropVinculation(id) {
      if (window.confirm("Seguro que desea eliminar este dato?")) {
        axios["delete"]("vinculationsTutor/".concat(id)).then(function (response) {
          toastr.success(response.data);
          window.location = "/tutorCodeVinculation";
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorCodeVinculation.vue?vue&type=template&id=4e2bb71e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorCodeVinculation.vue?vue&type=template&id=4e2bb71e& ***!
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary mt-2 mb-2",
            attrs: {
              type: "button",
              "data-toggle": "modal",
              "data-target": "#code"
            }
          },
          [_vm._v("\n                Vincular Codigo\n            ")]
        ),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "table table-striped table-hover" },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._l(_vm.codes, function(code, key) {
              return _c("tbody", { key: key }, [
                _c("tr", [
                  _c("td", [_vm._v(_vm._s(code.name_tutor))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(code.code_vinculated))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: {
                          click: function($event) {
                            return _vm.edit(code)
                          }
                        }
                      },
                      [_vm._v("Editar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function($event) {
                            return _vm.dropVinculation(code.id)
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
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "code",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "codeLabel",
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
                      _c("label", { attrs: { for: "code" } }, [
                        _vm._v("Codigo")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.code,
                            expression: "code"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", name: "code" },
                        domProps: { value: _vm.code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.code = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.consultCode }
                        },
                        [_vm._v("Consultar Codigo")]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.isEmpty === true
                      ? _c("div", [
                          _c("p", [
                            _vm._v("No se encuentra información del codigo")
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isEmpty === false
                      ? _c("div", [
                          _c("p", [
                            _vm._v(
                              "Codigo Encontrado, Puedes vincular el codigo dando click en Guardar"
                            )
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isEmpty === false,
                          expression: "isEmpty === false"
                        }
                      ],
                      staticClass: "modal-footer"
                    },
                    [
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
                          on: { click: _vm.saveCodes }
                        },
                        [_vm._v("Guardar")]
                      )
                    ]
                  )
                ])
              ]
            )
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
    return _c("div", { staticClass: "card-header text-center fondo" }, [
      _c("h4", [_vm._v("Codigos Vinculados")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre Tutor")]),
        _vm._v(" "),
        _c("th", [_vm._v("Codigo")]),
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
      _c("h5", { staticClass: "modal-title", attrs: { id: "codeLabel" } }, [
        _vm._v("Codigo a Vincular")
      ]),
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

/***/ "./resources/js/components/tutorCodeVinculation.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/tutorCodeVinculation.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tutorCodeVinculation_vue_vue_type_template_id_4e2bb71e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorCodeVinculation.vue?vue&type=template&id=4e2bb71e& */ "./resources/js/components/tutorCodeVinculation.vue?vue&type=template&id=4e2bb71e&");
/* harmony import */ var _tutorCodeVinculation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorCodeVinculation.vue?vue&type=script&lang=js& */ "./resources/js/components/tutorCodeVinculation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tutorCodeVinculation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tutorCodeVinculation_vue_vue_type_template_id_4e2bb71e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tutorCodeVinculation_vue_vue_type_template_id_4e2bb71e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tutorCodeVinculation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tutorCodeVinculation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/tutorCodeVinculation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeVinculation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tutorCodeVinculation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorCodeVinculation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeVinculation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tutorCodeVinculation.vue?vue&type=template&id=4e2bb71e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/tutorCodeVinculation.vue?vue&type=template&id=4e2bb71e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeVinculation_vue_vue_type_template_id_4e2bb71e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tutorCodeVinculation.vue?vue&type=template&id=4e2bb71e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorCodeVinculation.vue?vue&type=template&id=4e2bb71e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeVinculation_vue_vue_type_template_id_4e2bb71e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeVinculation_vue_vue_type_template_id_4e2bb71e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
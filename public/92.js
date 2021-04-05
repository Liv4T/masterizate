(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asistencia.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/asistencia.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr/toastr.scss */ "./node_modules/toastr/toastr.scss");
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


(function () {
  "use strict";

  window.addEventListener("load", function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation"); // Loop over them and prevent submission

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener("submit", function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      }, false);
    });
  }, false);
})();

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      names: [],
      newName: "",
      newLastName: "",
      newAge: "",
      newBirthday: "",
      newPassword: "",
      newEmail: "",
      newUserName: "",
      newId_subcategories: "",
      newType_user: "",
      newAddress: "",
      newPicture: "",
      newPhone: "",
      newId_number: "",
      newCountry: "",
      fillNames: {
        id: "",
        name: "",
        last_name: "",
        age: "",
        birthday: "",
        password: "",
        email: "",
        user_name: "",
        id_categories: "",
        id_subcategories: "",
        type_user: "",
        address: "",
        picture: "",
        phone: "",
        id_number: "",
        country: ""
      },
      errors: [],
      Category: "",
      Subcategory: "",
      Type: "",
      newContry: "",
      categories: [],
      subcategories: [],
      TypeUsers: [],
      edad: "",
      offset: 3
    };
  },
  created: function created() {
    this.getNames();
  },
  computed: {},
  mounted: function mounted() {
    this.getNames();
    console.log("Component mounted.");
  },
  methods: {
    //metodos del CRUD
    getNames: function getNames() {
      var _this = this;

      var urlUsers = "users";
      axios.get(urlUsers).then(function (response) {
        _this.names = response.data;
        console.log(_this.names);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asistencia.vue?vue&type=template&id=e6d35a36&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/asistencia.vue?vue&type=template&id=e6d35a36& ***!
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
    _c(
      "div",
      { staticClass: "row justify-content-center", attrs: { id: "crud" } },
      [
        _c("div", { staticClass: "col-sm-10" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Usuarios estudiantes")
            ]),
            _vm._v(" "),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> develop
            _c("div", { staticClass: "card-body" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-responsive-xl table-hover table-striped"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.names, function(name, k) {
                    return _c("tbody", { key: k }, [
                      name.type_user == "3"
                        ? _c("tr", [
                            _vm._m(1, true),
<<<<<<< HEAD
=======
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isSynchronized,
                    expression: "!isSynchronized"
                  }
                ]
              },
              [_vm._v("(Hay cambios que no han sido guardados)")]
            ),
            _vm._v(" "),
            _c(
              "form",
              { staticClass: "needs-validation", attrs: { novalidate: "" } },
              [
                _c(
                  "form-wizard",
                  {
                    attrs: {
                      title: "",
                      subtitle: "",
                      color: "#ffc107",
                      "next-button-text": "Siguiente",
                      "back-button-text": "Atrás",
                      "finish-button-text": "Guardar y enviar"
                    },
                    on: { "on-complete": _vm.createCourses }
                  },
                  [
                    _vm.isLoading
                      ? _c("span", {
                          staticClass: "spinner-border spinner-border",
                          attrs: { role: "status", "aria-hidden": "true" }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      { attrs: { title: "Anual" } },
                      _vm._l(_vm.inputs1, function(input1, t) {
                        return _c(
                          "div",
                          { key: t, staticClass: "form-group mx-auto" },
                          [
                            _c(
                              "div",
                              { staticClass: "classroom-planning-section" },
                              [
                                _c("strong", [_vm._v("Logro:")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: input1.porcentaje,
                                      expression: "input1.porcentaje"
                                    }
                                  ],
                                  staticClass: "form-control form-control-sm",
                                  staticStyle: { width: "50px" },
                                  attrs: { type: "number" },
                                  domProps: { value: input1.porcentaje },
                                  on: {
                                    change: function($event) {
                                      return _vm.annualContentUpdateEvent(
                                        $event,
                                        t,
                                        "inputs1"
                                      )
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        input1,
                                        "porcentaje",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v("%\n                    "),
                                _c("span", [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            t > 0 &&
                                            _vm.inputs1_saved.length <= t,
                                          expression:
                                            "(t>0 && inputs1_saved.length<=t)"
                                        }
                                      ],
                                      staticClass: "badge badge-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.remove1(t)
                                        }
                                      }
                                    },
                                    [_vm._v("-")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t == _vm.inputs1.length - 1,
                                          expression: "t == inputs1.length -1"
                                        }
                                      ],
                                      staticClass: "badge badge-primary",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.add1(t)
                                        }
                                      }
                                    },
                                    [_vm._v("+")]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input1.logro,
                                  expression: "input1.logro"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "welcome", required: "" },
                              domProps: { value: input1.logro },
                              on: {
                                change: function($event) {
                                  return _vm.annualContentUpdateEvent(
                                    $event,
                                    t,
                                    "inputs1",
                                    "logro"
                                  )
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(input1, "logro", $event.target.value)
                                }
                              }
                            }),
>>>>>>> 4a83d3a4cd430aa6033ce621f5b1104d21e43758
=======
>>>>>>> develop
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(name.name + " " + name.last_name) +
                                  "\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "select",
                                {
                                  ref: "seleccionado",
                                  refInFor: true,
                                  staticClass: "form-control",
                                  attrs: { required: "" }
                                },
                                [
                                  _c("option", { attrs: { value: "id" } }, [
                                    _vm._v(
                                      "\n                                            Llego tarde\n                                        "
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        : _vm._e()
                    ])
                  })
                ],
                2
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Asistencia")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Motivo")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("input", {
        attrs: { type: "radio", id: "male", name: "gender", value: "male" }
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "male" } }, [_vm._v("No")]),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "radio", id: "female", name: "gender", value: "female" }
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "female" } }, [_vm._v("Si")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/asistencia.vue":
/*!************************************************!*\
  !*** ./resources/js/components/asistencia.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asistencia_vue_vue_type_template_id_e6d35a36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia.vue?vue&type=template&id=e6d35a36& */ "./resources/js/components/asistencia.vue?vue&type=template&id=e6d35a36&");
/* harmony import */ var _asistencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia.vue?vue&type=script&lang=js& */ "./resources/js/components/asistencia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _asistencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _asistencia_vue_vue_type_template_id_e6d35a36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _asistencia_vue_vue_type_template_id_e6d35a36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/asistencia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/asistencia.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/asistencia.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_asistencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./asistencia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asistencia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_asistencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/asistencia.vue?vue&type=template&id=e6d35a36&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/asistencia.vue?vue&type=template&id=e6d35a36& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asistencia_vue_vue_type_template_id_e6d35a36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./asistencia.vue?vue&type=template&id=e6d35a36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asistencia.vue?vue&type=template&id=e6d35a36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asistencia_vue_vue_type_template_id_e6d35a36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_asistencia_vue_vue_type_template_id_e6d35a36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
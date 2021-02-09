(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsignarPerfil.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AsignarPerfil.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

$(function () {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var hidden = $("#hidden_fields1");
  hidden.hide();
  checkbox.change(function () {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});



Vue.use(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default.a);
Vue.component("multiselect", vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      myOptions: [],
      optionse: [],
      nameUnit: "",
      description: "",
      nameFile: "",
      nameUrl: "",
      newDocument: [],
      semanal: false,
      Newrol: "",
      textoM: "",
      errors: [],
      seccion: "",
      cestudiante: [],
      estudiantes: [],
      inputs: [{
        name: ""
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    var urlUsers = "getStudents";
    axios.get(urlUsers).then(function (response) {
      _this.optionse = response.data;
    });
    var urlUsers = "getSections";
    axios.get(urlUsers).then(function (response) {
      _this.myOptions = response.data;
      console.log(_this.myOptions);
    });
  },
  methods: {
    addTage: function addTage(newTag) {
      var tag = {
        name: newTag,
        id: newTag
      };
      this.optionse.push(tag);
    },
    getMenu: function getMenu() {
      window.location = "/instituciones_adm";
    },
    createAs: function createAs() {
      var _this2 = this;

      var url = "aisgn";

      if (this.cestudiante.length >= 1) {
        for (var i = 0; i < this.cestudiante.length; i++) {
          this.estudiantes.push(this.cestudiante[i].id);
        }
      }

      axios.post(url, {
        rol: this.Newrol,
        users: this.estudiantes,
        id_secction: this.seccion
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nueva asignacion creada exitosamente");

        _this2.getMenu();
      })["catch"](function (error) {
        _this2.errors = error.response.data;
=======
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      que_id: this.question.id,
      isFavorited: this.question.favorites.is_favorited,
      isSignedIn: this.auth.name,
      favoriteCount: this.question.favorites_count
    };
  },
  props: ["question", "auth"],
  computed: {
    classes: function classes() {
      return ["favorite", "mt-2", !this.isSignedIn ? "off" : this.isFavorited ? "favorited" : ""];
    }
  },
  methods: {
    favCountOperation: function favCountOperation() {
      this.isFavorited ? this.decrease() : this.increase();
    },
    decrease: function decrease() {
      var _this = this;

      axios["delete"]("/questions/".concat(this.que_id, "/favorite")).then(function (response) {
        _this.favoriteCount--;
        _this.isFavorited = false;
      })["catch"](function (error) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: error.response.data.message
        });
      });
    },
    increase: function increase() {
      var _this2 = this;

      axios.post("/questions/".concat(this.que_id, "/favorite")).then(function (response) {
        _this2.favoriteCount++;
        _this2.isFavorited = true;
      })["catch"](function (error) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: error.response.data.message
        });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
      });
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsignarPerfil.vue?vue&type=template&id=2a782720&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AsignarPerfil.vue?vue&type=template&id=2a782720& ***!
  \****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
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
<<<<<<< HEAD
  return _c("div", [
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Perfiles")
            ]),
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
                    on: { "on-complete": _vm.createAs }
                  },
                  [
                    _c("tab-content", [
                      _c("div", { staticClass: "form-group row mx-auto" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "" } }, [_vm._v("Rol:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.Newrol,
                                  expression: "Newrol"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { required: "" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.Newrol = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "4" } }, [
                                _vm._v("Coordinador")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Sección")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.seccion,
                                    expression: "seccion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { required: "" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.seccion = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              _vm._l(_vm.myOptions.sections, function(option) {
                                return _c(
                                  "option",
                                  { domProps: { value: option.id } },
                                  [
                                    _vm._v(
                                      "\n                          " +
                                        _vm._s(option.name) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Nombre")
                            ]),
                            _vm._v(" "),
                            _c("multiselect", {
                              attrs: {
                                options: _vm.optionse,
                                "tag-placeholder": "Add this as new tag",
                                placeholder: "Search or add a tag",
                                label: "name",
                                "track-by": "id",
                                multiple: true,
                                taggable: true
                              },
                              on: { tag: _vm.addTage },
                              model: {
                                value: _vm.cestudiante,
                                callback: function($$v) {
                                  _vm.cestudiante = $$v
                                },
                                expression: "cestudiante"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Please fill out this field")
                            ])
                          ],
                          1
                        )
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
=======
  return _vm.isSignedIn ? _c("div") : _vm._e()
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/AsignarPerfil.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/AsignarPerfil.vue ***!
  \***************************************************/
=======
/***/ "./resources/js/components/FavoriteQuestion.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue ***!
  \******************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _AsignarPerfil_vue_vue_type_template_id_2a782720___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsignarPerfil.vue?vue&type=template&id=2a782720& */ "./resources/js/components/AsignarPerfil.vue?vue&type=template&id=2a782720&");
/* harmony import */ var _AsignarPerfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsignarPerfil.vue?vue&type=script&lang=js& */ "./resources/js/components/AsignarPerfil.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& */ "./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&");
/* harmony import */ var _FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FavoriteQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _AsignarPerfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AsignarPerfil_vue_vue_type_template_id_2a782720___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AsignarPerfil_vue_vue_type_template_id_2a782720___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
=======
  _FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "649c01e6",
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/AsignarPerfil.vue"
=======
component.options.__file = "resources/js/components/FavoriteQuestion.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/AsignarPerfil.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AsignarPerfil.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
=======
/***/ "./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignarPerfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AsignarPerfil.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsignarPerfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignarPerfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AsignarPerfil.vue?vue&type=template&id=2a782720&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/AsignarPerfil.vue?vue&type=template&id=2a782720& ***!
  \**********************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FavoriteQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& ***!
  \*************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignarPerfil_vue_vue_type_template_id_2a782720___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AsignarPerfil.vue?vue&type=template&id=2a782720& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsignarPerfil.vue?vue&type=template&id=2a782720&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignarPerfil_vue_vue_type_template_id_2a782720___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignarPerfil_vue_vue_type_template_id_2a782720___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);
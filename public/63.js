(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/duplicarGeneral.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/duplicarGeneral.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/estudianteAdm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/estudianteAdm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr/toastr.scss */ "./node_modules/toastr/toastr.scss");
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0__);
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

<<<<<<< HEAD
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
=======
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id_area", "id_classroom"],
  data: function data() {
<<<<<<< HEAD
    var _ref;

    return _ref = {
      inputs: [{
        name: "",
        contenido: ""
      }],
      inputs1: [{
        logro: "",
        porcentaje: ""
      }],
      newTrimestre: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: ""
    }, _defineProperty(_ref, "newTrimestre", []), _defineProperty(_ref, "newLogro", []), _defineProperty(_ref, "trimestre", false), _defineProperty(_ref, "logro_1", ""), _defineProperty(_ref, "logro_2", ""), _defineProperty(_ref, "logro_3", ""), _defineProperty(_ref, "logro_4", ""), _defineProperty(_ref, "fillC", []), _defineProperty(_ref, "anual", []), _defineProperty(_ref, "newAnual", []), _defineProperty(_ref, "materia", ""), _defineProperty(_ref, "myOptions", []), _defineProperty(_ref, "errors", []), _ref;
  },
  mounted: function mounted() {
    var _this = this;

    var urlsel = window.location.origin + "/coursePlanification/" + this.id_area + "/" + this.id_classroom;
    axios.get(urlsel).then(function (response) {
      _this.fillC = response.data;

      if (_this.fillC.quaterly.length > 0) {
        _this.trimestre = true;
      } else {
        _this.trimestre = false;
      }
    });
    var url = window.location.origin + "/GetArearByUser";
    axios.get(url).then(function (response) {
      _this.myOptions = response.data;
    });
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/actividad_g";
    },
    add: function add(index) {
      this.inputs.push({
        name: "",
        contenido: ""
      });
    },
    remove: function remove(index) {
      this.inputs.splice(index, 1);
    },
    add1: function add1(index) {
      this.inputs1.push({
        logro: "",
        porcentaje: ""
      });
    },
    remove1: function remove1(index) {
      this.inputs1.splice(index, 1);
    },
    duplicar: function duplicar(id) {
      var _this2 = this;

      this.fillC = [];
      var urlsel = window.location.origin + "/coursePlanification/" + id;
      axios.get(urlsel).then(function (response) {
        _this2.fillC = response.data;
      });
    },
    createCourses: function createCourses() {
      var _this3 = this;

      this.newLogro = [];
      this.newTrimestre = [];
      var url = window.location.origin + "/Courses";

      if (this.fillC.quaterly.length >= 1) {
        for (var i = 0; i < this.fillC.quaterly.length; i++) {
          this.newTrimestre.push(this.fillC.quaterly[i]);
        }
      }

      if (this.fillC.achievements.length >= 1) {
        for (var _i = 0; _i < this.fillC.achievements.length; _i++) {
          this.newLogro.push(this.fillC.achievements[_i]);
        }
      }

      axios.post(url, {
        //Cursos generales
        id_area: this.id_area,
        id_classroom: this.id_classroom,
        logros: this.newLogro,
        trimestres: this.newTrimestre,
        duplicate: 1
      }).then(function (response) {
        _this3.errors = [];
        toastr.success("Nuevo plan general creado exitosamente");

        _this3.getMenu();
      })["catch"](function (error) {
        _this3.errors = error.response.data;
      });
    },
    updateCourses: function updateCourses() {
      window.location = "/actividad_g";
    },
    editNames: function editNames(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createZ").modal("show");
=======
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
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/duplicarGeneral.vue?vue&type=template&id=c3b3a896&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/duplicarGeneral.vue?vue&type=template&id=c3b3a896& ***!
  \******************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/estudianteAdm.vue?vue&type=template&id=1e96c93d&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/estudianteAdm.vue?vue&type=template&id=1e96c93d& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Duplicar planificación general")
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.trimestre == false,
                    expression: "trimestre == false"
                  }
                ]
              },
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
                    _c("tab-content", { attrs: { title: "Anual" } }, [
                      _c(
                        "div",
                        [
                          _c("div", { staticClass: "form-group row mx-auto" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.materia,
                                      expression: "materia"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { required: "" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.materia = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    }
                                  }
                                },
                                _vm._l(_vm.myOptions, function(option) {
                                  return _c(
                                    "option",
                                    {
                                      domProps: {
                                        value:
                                          option.id + "/" + option.id_classroom
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(option.text) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-warning",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.duplicar(_vm.materia)
                                    }
                                  }
                                },
                                [_vm._v("Duplicar")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.fillC.achievements, function(option, k) {
                            return _c(
                              "div",
                              { key: k, staticClass: "form-group mx-auto" },
                              [
                                _c("div", { attrs: { align: "center" } }, [
                                  _c("strong", [
                                    _vm._v(
                                      "\n                        Logro " +
                                        _vm._s(k + 1) +
                                        "\n                        "
                                    ),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: option.percentage,
                                          expression: "option.percentage"
                                        }
                                      ],
                                      staticStyle: { width: "50px" },
                                      attrs: { type: "number", required: "" },
                                      domProps: { value: option.percentage },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            option,
                                            "percentage",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v("%\n                      ")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: option.achievement,
                                      expression: "option.achievement"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { name: "welcome", required: "" },
                                  domProps: { value: option.achievement },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        option,
                                        "achievement",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v("Please fill out this field")
                                ])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      { attrs: { title: "Trimestral" } },
                      _vm._l(_vm.fillC.quaterly, function(input, t) {
                        return _c(
                          "div",
                          { key: t, staticClass: "form-group row mx-auto" },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Indicador")
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: input.unit_name,
                                      expression: "input.unit_name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "objetive1",
                                    placeholder: "Nombre de la unidad",
                                    required: ""
                                  },
                                  domProps: { value: input.unit_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        input,
                                        "unit_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Contenido")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input.content,
                                    expression: "input.content"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "competences",
                                  placeholder:
                                    "Es la explicacion o sintesis de la unidad.",
                                  required: ""
                                },
                                domProps: { value: input.content },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input,
                                      "content",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Please fill out this field")
                              ])
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "h2",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.trimestre == true,
                    expression: "trimestre == true"
                  }
                ]
              },
              [_vm._v("La planificación anual y trimestral ya fue creada")]
            )
=======
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
                            _c("td", [_vm._v(_vm._s(name.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(name.last_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(name.id_number))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(name.email))]),
                            _vm._v(" "),
                            _vm._m(1, true)
                          ])
                        : _vm._e()
                    ])
                  })
                ],
                2
              )
            ])
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
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
<<<<<<< HEAD
    return _c("head", [
      _c("link", {
        attrs: {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.8.2/css/solid.css",
          integrity:
            "sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs",
          crossorigin: "anonymous"
        }
      }),
      _vm._v(" "),
      _c("link", {
        attrs: {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.8.2/css/brands.css",
          integrity:
            "sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ",
          crossorigin: "anonymous"
        }
      }),
      _vm._v(" "),
      _c("link", {
        attrs: {
          rel: "stylesheet",
          href:
            "https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css",
          integrity:
            "sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J",
          crossorigin: "anonymous"
        }
      })
=======
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Apellido")]),
        _vm._v(" "),
        _c("th", [_vm._v("Identificación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "float-right" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-sm",
          staticStyle: { color: "grey" },
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "fa fa-eye" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-sm",
          staticStyle: { color: "grey" },
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "fa fa-edit" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-sm",
          staticStyle: { color: "grey" },
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "fa fa-trash" })]
      )
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    ])
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/duplicarGeneral.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/duplicarGeneral.vue ***!
  \*****************************************************/
=======
/***/ "./resources/js/components/estudianteAdm.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/estudianteAdm.vue ***!
  \***************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _duplicarGeneral_vue_vue_type_template_id_c3b3a896___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duplicarGeneral.vue?vue&type=template&id=c3b3a896& */ "./resources/js/components/duplicarGeneral.vue?vue&type=template&id=c3b3a896&");
/* harmony import */ var _duplicarGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duplicarGeneral.vue?vue&type=script&lang=js& */ "./resources/js/components/duplicarGeneral.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _estudianteAdm_vue_vue_type_template_id_1e96c93d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estudianteAdm.vue?vue&type=template&id=1e96c93d& */ "./resources/js/components/estudianteAdm.vue?vue&type=template&id=1e96c93d&");
/* harmony import */ var _estudianteAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estudianteAdm.vue?vue&type=script&lang=js& */ "./resources/js/components/estudianteAdm.vue?vue&type=script&lang=js&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _duplicarGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _duplicarGeneral_vue_vue_type_template_id_c3b3a896___WEBPACK_IMPORTED_MODULE_0__["render"],
  _duplicarGeneral_vue_vue_type_template_id_c3b3a896___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _estudianteAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _estudianteAdm_vue_vue_type_template_id_1e96c93d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _estudianteAdm_vue_vue_type_template_id_1e96c93d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/duplicarGeneral.vue"
=======
component.options.__file = "resources/js/components/estudianteAdm.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/duplicarGeneral.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/duplicarGeneral.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
=======
/***/ "./resources/js/components/estudianteAdm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/estudianteAdm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_duplicarGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./duplicarGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/duplicarGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_duplicarGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/duplicarGeneral.vue?vue&type=template&id=c3b3a896&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/duplicarGeneral.vue?vue&type=template&id=c3b3a896& ***!
  \************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_estudianteAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./estudianteAdm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/estudianteAdm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_estudianteAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/estudianteAdm.vue?vue&type=template&id=1e96c93d&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/estudianteAdm.vue?vue&type=template&id=1e96c93d& ***!
  \**********************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_duplicarGeneral_vue_vue_type_template_id_c3b3a896___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./duplicarGeneral.vue?vue&type=template&id=c3b3a896& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/duplicarGeneral.vue?vue&type=template&id=c3b3a896&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_duplicarGeneral_vue_vue_type_template_id_c3b3a896___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_duplicarGeneral_vue_vue_type_template_id_c3b3a896___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_estudianteAdm_vue_vue_type_template_id_1e96c93d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./estudianteAdm.vue?vue&type=template&id=1e96c93d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/estudianteAdm.vue?vue&type=template&id=1e96c93d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_estudianteAdm_vue_vue_type_template_id_1e96c93d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_estudianteAdm_vue_vue_type_template_id_1e96c93d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);
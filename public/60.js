(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearMemoria.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crearMemoria.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
=======
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



Vue.use(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id_area", "id_classroom"],
  data: function data() {
    return {
      myOptions: [],
<<<<<<< HEAD
      myOptions2: [],
      name: "",
      city: "",
      state: "",
      address: "",
      streaming: "",
      semanal: false,
      seleccionadoStreaming: "",
      textoM: "",
      errors: [],
      year: "",
      section: [],
      period: [],
      inputs: [{
        name: ""
      }],
      inputs1: [{
        name: "",
        date_from: "",
        date_to: ""
      }]
=======
      nameUnit: "",
      description: "",
      nameFile: "",
      nameUrl: "",
      nameUrl1: "",
      nameUrl2: "",
      newDocument: [],
      newDocument1: [],
      newDocument2: [],
      semanal: false,
      newVideo: "",
      newVideo1: "",
      newVideo2: "",
      numero: "",
      nameArea: "",
      errors: [],
      message: ""
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    };
  },
  mounted: function mounted() {
    var _this = this;

<<<<<<< HEAD
    var urlsel = "getState";
    axios.get(urlsel).then(function (response) {
      _this.myOptions = response.data;
      console.log(_this.myOptions);
    });
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/instituciones_adm";
    },
    mensaje: function mensaje() {
      this.seleccionadoStreaming = this.$refs.seleccionadoStreaming.value;

      if (this.seleccionadoStreaming != 1) {
        this.textoM = "Recomendamos el uso de Google Meet como streaming";
        console.log("aqui");
      } else {
        this.textoM = "";
      }
    },
    createInstitution: function createInstitution() {
      var _this2 = this;

      var url = "createInstitution";

      if (this.inputs.length >= 1) {
        for (var i = 0; i < this.inputs.length; i++) {
          this.section.push(this.inputs[i]);
        }
      }

      if (this.inputs1.length >= 1) {
        for (var _i = 0; _i < this.inputs1.length; _i++) {
          this.period.push(this.inputs1[_i]);
        }
      }

      axios.post(url, {
        //Cursos generales
        name: this.name,
        state: this.state,
        city: this.city,
        streaming: this.streaming,
        year: this.year,
        address: this.address,
        sections: this.section,
        periods: this.period
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nueva institución creada exitosamente");
=======
    var url = window.location.origin + "/GetNameArea/" + this.id_area + "/" + this.id_classroom;
    axios.get(url).then(function (response) {
      _this.nameArea = response.data;
    });
    var urlsel = window.location.origin + "/editOneWeek/" + this.id_area + "/" + this.id_classroom;
    axios.get(urlsel).then(function (response) {
      _this.myOptions = response.data;
    });
    this.messageVideo = "";
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/clases_d";
    },
    click1: function click1() {
      this.$refs.input1.click();
    },
    createSemanal: function createSemanal() {
      var _this2 = this;

      var url = window.location.origin + "/Class";
      this.seleccionado = this.$refs.seleccionado.value;
      axios.post(url, {
        //Cursos generales
        id_weekly_plan: this.seleccionado,
        name: this.nameUnit,
        description: this.description,
        name_document: this.nameFile,
        document: this.newDocument,
        document1: this.newDocument1,
        document2: this.newDocument2,
        url: this.nameUrl,
        url1: this.nameUrl1,
        url2: this.nameUrl2,
        video: this.newVideo,
        video1: this.newVideo1,
        video2: this.newVideo2,
        hourly_intensity: this.numero
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nueva clase creada exitosamente");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0

        _this2.getMenu();
      })["catch"](function (error) {
        _this2.errors = error.response.data;
      });
    },
<<<<<<< HEAD
    add: function add(index) {
      this.inputs.push({
        name: ""
      });
    },
    remove: function remove(index) {
      this.inputs.splice(index, 1);
    },
    add1: function add1(index) {
      this.inputs1.push({
        name: ""
      });
    },
    remove1: function remove1(index) {
      this.inputs1.splice(index, 1);
    },
    getCity: function getCity() {
      var _this3 = this;

      var urlse = "getCity/" + this.$refs.state1.value;
      axios.get(urlse).then(function (response) {
        _this3.myOptions2 = response.data;
        console.log(_this3.myOptions2);
=======
    onFlieChange: function onFlieChange(file) {
      var _this3 = this;

      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        var _file = files[0]; // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 1);
        this.newDocument = data;
        axios.post("/fileDocument", data).then(function (response) {
          _this3.emitMessage(response);
        });
      }
    },
    onFlieChange1: function onFlieChange1(file) {
      var _this4 = this;

      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        var _file2 = files[0]; // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 2);
        this.newDocument1 = data;
        axios.post("/fileDocument", data).then(function (response) {
          _this4.emitMessage(response);
        });
      }
    },
    onFlieChange2: function onFlieChange2(file) {
      var _this5 = this;

      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        var _file3 = files[0]; // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 3);
        this.newDocument2 = data;
        axios.post("/fileDocument", data).then(function (response) {
          _this5.emitMessage(response);
        });
      }
    },
    updateSemanal: function updateSemanal() {
      var _this6 = this;

      var url = "updateCourseWeekly";

      if (this.fillS.length >= 1) {
        for (var i = 0; i < this.fillS.length; i++) {
          this.newSemanal.push(this.fillS[i]);
        }
      }

      axios.put(url, {
        //Cursos generales
        id_materia: "1",
        semana: this.newSemanal
      }).then(function (response) {
        _this6.errors = [];
        toastr.success("Actualizado plan semanal exitosamente");

        _this6.getMenu();
      })["catch"](function (error) {
        _this6.errors = error.response.data;
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
      });
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca& ***!
  \*********************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
<<<<<<< HEAD
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Instituciones")
            ]),
=======
            _c("h3", { staticClass: "card-header fondo" }, [_vm._v("Memoria")]),
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
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
<<<<<<< HEAD
                    on: { "on-complete": _vm.createInstitution }
                  },
                  [
                    _c(
                      "tab-content",
                      { attrs: { title: "Institución" } },
                      [
                        _c("div", { staticClass: "form-group mx-auto" }, [
                          _c("div", { attrs: { align: "center" } }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Nombre:")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.name,
                                    expression: "name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: _vm.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.name = $event.target.value
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Departamento")
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
                                      value: _vm.state,
                                      expression: "state"
                                    }
                                  ],
                                  ref: "state1",
                                  staticClass: "form-control",
                                  attrs: { required: "" },
                                  on: {
                                    input: function($event) {
                                      return _vm.getCity()
                                    },
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
                                      _vm.state = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    }
                                  }
                                },
                                _vm._l(_vm.myOptions, function(option) {
                                  return _c(
                                    "option",
                                    { domProps: { value: option.id_state } },
                                    [_vm._v(_vm._s(option.name))]
                                  )
                                }),
                                0
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Municipio/Ciudad")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.city,
                                    expression: "city"
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
                                    _vm.city = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              _vm._l(_vm.myOptions2, function(option) {
                                return _c(
                                  "option",
                                  { domProps: { value: option.id } },
                                  [_vm._v(_vm._s(option.text))]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Please fill out this field")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group row" },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Dirección de sede")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.address,
                                    expression: "address"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: _vm.address },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.address = $event.target.value
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.inputs, function(input, t) {
                              return _c(
                                "div",
                                { key: t, staticClass: "col-md-6" },
                                [
                                  _c("label", { attrs: { for: "name" } }, [
                                    _vm._v("Sección")
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _c(
                                      "a",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              t ||
                                              (!t && _vm.inputs.length > 1),
                                            expression:
                                              "\n                                                      t ||\n                                                          (!t &&\n                                                              inputs.length >\n                                                                  1)\n                                                  "
                                          }
                                        ],
                                        staticClass: "badge badge-danger",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.remove(t)
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
                                            value: t == _vm.inputs.length - 1,
                                            expression:
                                              "\n                                                      t == inputs.length - 1\n                                                  "
                                          }
                                        ],
                                        staticClass: "badge badge-primary",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.add(t)
                                          }
                                        }
                                      },
                                      [_vm._v("+")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: input.name,
                                        expression: "input.name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "objetive1",
                                      required: ""
                                    },
                                    domProps: { value: input.name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          input,
                                          "name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Streaming")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.streaming,
                                    expression: "streaming"
                                  }
                                ],
                                ref: "seleccionadoStreaming",
                                staticClass: "form-control",
                                attrs: { required: "" },
                                on: {
                                  change: [
                                    function($event) {
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
                                      _vm.streaming = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.mensaje()
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Google Meet")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("Zoom")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("Microsoft Teams")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "4" } }, [
                                  _vm._v("Otro")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", { staticStyle: { color: "orange" } }, [
                              _vm._v(_vm._s(_vm.textoM))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Año")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.year,
                                  expression: "year"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                name: "objetive1",
                                required: ""
                              },
                              domProps: { value: _vm.year },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.year = $event.target.value
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.inputs1, function(input1, k) {
                          return _c("div", { key: k, staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Periodos")
                              ]),
                              _vm._v(" "),
                              _c("span", [
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          k || (!k && _vm.inputs1.length > 1),
                                        expression:
                                          "\n                                                      k ||\n                                                          (!k &&\n                                                              inputs1.length >\n                                                                  1)\n                                                  "
                                      }
                                    ],
                                    staticClass: "badge badge-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.remove1(k)
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
                                        value: k == _vm.inputs1.length - 1,
                                        expression:
                                          "\n                                                      k == inputs1.length - 1\n                                                  "
                                      }
                                    ],
                                    staticClass: "badge badge-primary",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.add1(k)
                                      }
                                    }
                                  },
                                  [_vm._v("+")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input1.name,
                                    expression: "input1.name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: input1.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input1,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Desde")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input1.date_from,
                                    expression: "input1.date_from"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: input1.date_from },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input1,
                                      "date_from",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Hasta")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input1.date_to,
                                    expression: "input1.date_to"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: input1.date_to },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input1,
                                      "date_to",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        })
                      ],
                      2
                    )
=======
                    on: { "on-complete": _vm.createSemanal }
                  },
                  [
                    _c("tab-content", { attrs: { title: "Memoria" } }, [
                      _c("div", { staticClass: "form-group mx-auto" }, [
                        _c("div", { attrs: { align: "center" } })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row mx-auto" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*1. Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*2. Archivo ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*3. Archivo ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*4. Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*5. Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*6. Archivo ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*7. Archivo ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*8. Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("strong", [_vm._v("* Campos requeridos")])
                    ])
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/crearInstituciones.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/crearInstituciones.vue ***!
  \********************************************************/
=======
/***/ "./resources/js/components/crearMemoria.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/crearMemoria.vue ***!
  \**************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crearInstituciones.vue?vue&type=template&id=c8556bca& */ "./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca&");
/* harmony import */ var _crearInstituciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crearInstituciones.vue?vue&type=script&lang=js& */ "./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crearMemoria.vue?vue&type=template&id=62223654& */ "./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654&");
/* harmony import */ var _crearMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crearMemoria.vue?vue&type=script&lang=js& */ "./resources/js/components/crearMemoria.vue?vue&type=script&lang=js&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _crearInstituciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _crearMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__["render"],
  _crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/crearInstituciones.vue"
=======
component.options.__file = "resources/js/components/crearMemoria.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
=======
/***/ "./resources/js/components/crearMemoria.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/crearMemoria.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./crearInstituciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca& ***!
  \***************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./crearMemoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearMemoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654& ***!
  \*********************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./crearInstituciones.vue?vue&type=template&id=c8556bca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./crearMemoria.vue?vue&type=template&id=62223654& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);
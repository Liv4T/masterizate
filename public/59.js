(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/courseComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/courseComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
<<<<<<< HEAD
    var _ref;

    return _ref = {
      serialLocalStorage: '9f284918-f0f6-4369-a368-eaf6321b6807',
      inputs: [{
        name: "",
        contenido: ""
      }],
      inputs1: [{
        logro: "",
        porcentaje: "0"
      }],
      inputs1_saved: [],
      inputs_saved: [],
      newTrimestre: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: ""
    }, _defineProperty(_ref, "newTrimestre", []), _defineProperty(_ref, "newLogro", []), _defineProperty(_ref, "trimestre", false), _defineProperty(_ref, "logro_1", ""), _defineProperty(_ref, "logro_2", ""), _defineProperty(_ref, "logro_3", ""), _defineProperty(_ref, "logro_4", ""), _defineProperty(_ref, "fillC", []), _defineProperty(_ref, "anual", []), _defineProperty(_ref, "newAnual", []), _defineProperty(_ref, "errors", []), _defineProperty(_ref, "isSynchronized", true), _defineProperty(_ref, "isLoading", false), _ref;
=======
    return {
      myOptions: [],
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
    };
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  },
  mounted: function mounted() {
    var _this = this;

<<<<<<< HEAD
    //load from localstorage
    this.serialLocalStorage = this.serialLocalStorage + "-" + this.id_area + "-" + this.id_classroom;
    var urlsel = window.location.origin + "/coursePlanification/" + this.id_area + "/" + this.id_classroom;
    axios.get(urlsel).then(function (response) {
      _this.fillC = response.data; //set current data

      if (response.data.achievements.length > 0 && response.data.quaterly.length > 0) {
        _this.inputs1 = [];
        response.data.achievements.forEach(function (e) {
          _this.inputs1.push({
            id_plannification: e.id_planification,
            id_achievement: e.id,
            logro: e.achievement,
            porcentaje: e.percentage
          });
        });
        _this.inputs1_saved = JSON.parse(JSON.stringify(_this.inputs1));
        _this.inputs = [];
        response.data.quaterly.forEach(function (e) {
          _this.inputs.push({
            id_quaterly: e.id,
            name: e.unit_name,
            contenido: e.content
          });
        });
        _this.inputs_saved = JSON.parse(JSON.stringify(_this.inputs));
      } else {
        if (localStorage.getItem(_this.serialLocalStorage)) {
          var savedInputModel = JSON.parse(decodeURIComponent(escape(window.atob(localStorage.getItem(_this.serialLocalStorage)))));

          if (JSON.stringify(savedInputModel.inputs) != JSON.stringify(_this.inputs)) {
            _this.inputs = savedInputModel.inputs;
            _this.isSynchronized = false;
          }

          if (JSON.stringify(savedInputModel.inputs1) != JSON.stringify(_this.inputs1)) {
            _this.inputs1 = savedInputModel.inputs1;
            _this.isSynchronized = false;
          }
        }
      }

      if (_this.fillC.quaterly.length > 0) {
        _this.trimestre = true;
      } else {
        _this.trimestre = false;
      }
=======
    var urlsel = "getState";
    axios.get(urlsel).then(function (response) {
      _this.myOptions = response.data;
      console.log(_this.myOptions);
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    });
  },
  methods: {
    annualContentUpdateEvent: function annualContentUpdateEvent(e, i, type) {
      var property = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (type == 'inputs') {
        this.inputs[i][property] = this.inputs[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      } else if (type == 'inputs1') {
        this.inputs1[i][property] = this.inputs1[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      } //console.log(l.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1"));
      //serialize data on localstorage


      localStorage.setItem(this.serialLocalStorage, window.btoa(unescape(encodeURIComponent(JSON.stringify({
        inputs1: this.inputs1,
        inputs: this.inputs
      })))));
      this.isSynchronized = false;
    },
    getMenu: function getMenu() {
<<<<<<< HEAD
      window.location = "/actividad_g";
      this.isLoading = false;
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
        porcentaje: "0"
      });
    },
    remove1: function remove1(index) {
      this.inputs1.splice(index, 1);
    },
    isLoadingEvent: function isLoadingEvent() {
      return this.isLoading;
    },
    createCourses: function createCourses() {
      var _this2 = this;

      this.isLoading = true;
      var url = window.location.origin + "/Courses";
      if (this.inputs.length < 1 || this.inputs1.length < 1) return;
      this.newTrimestre = [];
      this.newLogro = [];

      if (this.inputs.length >= 1) {
        for (var i = 0; i < this.inputs.length; i++) {
          this.newTrimestre.push(this.inputs[i]);
        }
      }

      if (this.inputs1.length >= 1) {
        for (var _i = 0; _i < this.inputs1.length; _i++) {
          this.newLogro.push(this.inputs1[_i]);
        }
      }

      axios.post(url, {
        //Cursos generales
        id_area: this.id_area,
        id_classroom: this.id_classroom,
        logros: this.newLogro,
        trimestres: this.newTrimestre
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nuevo plan general creado exitosamente");

        _this2.getMenu();
      })["catch"](function (error) {
        _this2.errors = error.response.data;
        _this2.isLoading = false;
=======
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

        _this2.getMenu();
      })["catch"](function (error) {
        _this2.errors = error.response.data;
      });
    },
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
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
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
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/courseComponent.vue?vue&type=template&id=ee39a2b2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/courseComponent.vue?vue&type=template&id=ee39a2b2& ***!
  \******************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
<<<<<<< HEAD
              _vm._v("Planificación general")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "classroom-label" }, [
              _vm._v(_vm._s(_vm.fillC.classroom_name))
            ]),
            _vm._v(" "),
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
=======
              _vm._v("Instituciones")
            ]),
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
=======
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
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                            _vm._v(" "),
                            _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Please fill out this field")
                            ])
<<<<<<< HEAD
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      { attrs: { title: "Trimestral" } },
                      _vm._l(_vm.inputs, function(input, t) {
                        return _c(
                          "div",
                          { key: t, staticClass: "form-group row mx-auto" },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Indicador")
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
                                          t > 0 && _vm.inputs_saved.length <= t,
                                        expression:
                                          "(t>0 && inputs_saved.length<=t)"
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
=======
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
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
<<<<<<< HEAD
                                        value: t == _vm.inputs.length - 1,
                                        expression: "t == inputs.length - 1"
                                      }
                                    ],
                                    staticClass: "badge badge-primary",
=======
                                        value:
                                          k || (!k && _vm.inputs1.length > 1),
                                        expression:
                                          "\n                                                      k ||\n                                                          (!k &&\n                                                              inputs1.length >\n                                                                  1)\n                                                  "
                                      }
                                    ],
                                    staticClass: "badge badge-danger",
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
<<<<<<< HEAD
                                        return _vm.add(t)
                                      }
                                    }
                                  },
                                  [_vm._v("+")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: input.name,
                                      expression: "input.name"
=======
                                        return _vm.remove1(k)
                                      }
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "objetive1",
                                    placeholder: "Nombre de la unidad",
                                    required: ""
                                  },
<<<<<<< HEAD
                                  domProps: { value: input.name },
                                  on: {
                                    change: function($event) {
                                      return _vm.annualContentUpdateEvent(
                                        $event,
                                        t,
                                        "inputs",
                                        "name"
                                      )
                                    },
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
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Contenido")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
=======
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
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
<<<<<<< HEAD
                                    value: input.contenido,
                                    expression: "input.contenido"
=======
                                    value: input1.name,
                                    expression: "input1.name"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
<<<<<<< HEAD
                                  name: "competences",
                                  placeholder:
                                    "Es la explicacion o sintesis de la unidad.",
                                  required: ""
                                },
                                domProps: { value: input.contenido },
                                on: {
                                  change: function($event) {
                                    return _vm.annualContentUpdateEvent(
                                      $event,
                                      t,
                                      "inputs",
                                      "contenido"
                                    )
                                  },
=======
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
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
<<<<<<< HEAD
                                      input,
                                      "contenido",
=======
                                      input1,
                                      "date_from",
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                      $event.target.value
                                    )
                                  }
                                }
<<<<<<< HEAD
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
=======
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
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                    )
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
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
    ])
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/courseComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/courseComponent.vue ***!
  \*****************************************************/
=======
/***/ "./resources/js/components/crearInstituciones.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/crearInstituciones.vue ***!
  \********************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _courseComponent_vue_vue_type_template_id_ee39a2b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courseComponent.vue?vue&type=template&id=ee39a2b2& */ "./resources/js/components/courseComponent.vue?vue&type=template&id=ee39a2b2&");
/* harmony import */ var _courseComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courseComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/courseComponent.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crearInstituciones.vue?vue&type=template&id=c8556bca& */ "./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca&");
/* harmony import */ var _crearInstituciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crearInstituciones.vue?vue&type=script&lang=js& */ "./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _courseComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _courseComponent_vue_vue_type_template_id_ee39a2b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _courseComponent_vue_vue_type_template_id_ee39a2b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _crearInstituciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/courseComponent.vue"
=======
component.options.__file = "resources/js/components/crearInstituciones.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/courseComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/courseComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
=======
/***/ "./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courseComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./courseComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/courseComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courseComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/courseComponent.vue?vue&type=template&id=ee39a2b2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/courseComponent.vue?vue&type=template&id=ee39a2b2& ***!
  \************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./crearInstituciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearInstituciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca& ***!
  \***************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseComponent_vue_vue_type_template_id_ee39a2b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./courseComponent.vue?vue&type=template&id=ee39a2b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/courseComponent.vue?vue&type=template&id=ee39a2b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseComponent_vue_vue_type_template_id_ee39a2b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseComponent_vue_vue_type_template_id_ee39a2b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./crearInstituciones.vue?vue&type=template&id=c8556bca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearInstituciones.vue?vue&type=template&id=c8556bca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearInstituciones_vue_vue_type_template_id_c8556bca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);
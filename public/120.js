(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TrimComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TrimComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["idArea"],
  data: function data() {
    var _ref;

    return _ref = {
      serialLocalStorage: '9f284918-f0f6-4369-a368-eaf6321b6807',
      inputs: [{
        name: "",
        logro: "",
        contenido: ""
      }],
      inputs1: [{
        logro: "",
        porcentaje: "0"
      }],
      inputsPIAR: [{
        logroPIAR: "",
        porcentajePIAR: "0"
      }],
      inputsPIAR1: [{
        namePIAR: "",
        logroPIAR: "",
        contenidoPIAR: ""
      }],
      inputs1_saved: [],
      inputsPIAR_saved: [],
      inputsP1_saved: [],
      inputs_saved: [],
      newTrimestre: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: ""
    }, _defineProperty(_ref, "newTrimestre", []), _defineProperty(_ref, "newLogro", []), _defineProperty(_ref, "trimestre", false), _defineProperty(_ref, "logro_1", ""), _defineProperty(_ref, "logro_2", ""), _defineProperty(_ref, "logro_3", ""), _defineProperty(_ref, "logro_4", ""), _defineProperty(_ref, "fillC", []), _defineProperty(_ref, "anual", []), _defineProperty(_ref, "newAnual", []), _defineProperty(_ref, "errors", []), _defineProperty(_ref, "isSynchronized", true), _defineProperty(_ref, "isLoading", false), _defineProperty(_ref, "showPiarPlan", false), _defineProperty(_ref, "showPIARPlanTrimestral", false), _defineProperty(_ref, "activityForAllStudents", false), _defineProperty(_ref, "activityForPIARStudents", false), _defineProperty(_ref, "activityForSelectStudents", false), _defineProperty(_ref, "studentsOptions", []), _defineProperty(_ref, "saveStudent", []), _defineProperty(_ref, "piarStudents", []), _ref;
  },
  watch: {
    activityForAllStudents: function activityForAllStudents(newVal) {
      if (newVal == true) {
        this.activityForPIARStudents = false;
        this.activityForSelectStudents = false;
      }
    },
    activityForPIARStudents: function activityForPIARStudents(newVal) {
      if (newVal == true) {
        this.activityForAllStudents = false;
        this.activityForSelectStudents = false;
        this.selectedStudentsData = this.piarStudents;
      }
    },
    activityForSelectStudents: function activityForSelectStudents(newVal) {
      if (newVal == true) {
        this.activityForPIARStudents = false;
        this.activityForAllStudents = false;
        this.selectedStudentsData = this.studentsOptions;
      }
    },
    idArea: function idArea(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getData();
      }
    }
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/PIARStudentsByArea/".concat(this.idArea)).then(function (response) {
        _this.piarStudents = Object.values(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get("/StudentsByArea/".concat(this.idArea)).then(function (response) {
        var data = response.data;
        data.forEach(function (e) {
          _this.studentsOptions.push({
            id: e.id_student,
            text: e.name
          });
        });
      });
      axios.get('/getPlanificationPiar').then(function (response) {
        var data = response.data;

        if (data.length > 0) {
          _this.inputsPIAR1.splice(0);

          _this.inputsPIAR.splice(0);

          data.forEach(function (el) {
            var logros = JSON.parse(el.logros);
            console.log("data piar: ", JSON.parse(el.logros));
            var trimestres = JSON.parse(el.trimestres);
            _this.saveStudent = JSON.parse(el.students);
            logros.forEach(function (lg) {
              _this.inputsPIAR1.push({
                contenidoPIAR: lg.contenidoPIAR,
                logroPIAR: lg.logroPIAR,
                namePIAR: lg.namePIAR
              });
            });
            trimestres.forEach(function (lg) {
              _this.inputsPIAR.push({
                logroPIAR: lg.logroPIAR,
                porcentajePIAR: lg.porcentajePIAR
              });
            });
          });
          _this.showPiarPlan = true, _this.showPIARPlanTrimestral = true, _this.activityForAllStudents = true;
        }
      }); //load from localstorage

      this.serialLocalStorage = this.serialLocalStorage + "-" + this.idArea;
      var urlsel = window.location.origin + "/coursePlanification/" + this.idArea;
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
              contenido: e.content,
              logro: e.logro
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
      });
    },
    annualContentUpdateEvent: function annualContentUpdateEvent(e, i, type) {
      var property = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (type == 'inputs') {
        this.inputs[i][property] = this.inputs[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      } else if (type == 'inputs1') {
        this.inputs1[i][property] = this.inputs1[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      } else if (type == 'inputsPIAR') {
        this.inputsPIAR[i][property] = this.inputsPIAR[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      } else if (type == 'inputsPIAR1') {
        this.inputsPIAR1[i][property] = this.inputsPIAR1[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      } //console.log(l.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1"));
      //serialize data on localstorage


      localStorage.setItem(this.serialLocalStorage, window.btoa(unescape(encodeURIComponent(JSON.stringify({
        inputs1: this.inputs1,
        inputs: this.inputs,
        inputsPIAR: this.inputsPIAR
      })))));
      this.isSynchronized = false;
    },
    showPIARPlan: function showPIARPlan() {
      this.showPiarPlan = !this.showPiarPlan;
    },
    showPIARPlanT: function showPIARPlanT() {
      this.showPIARPlanTrimestral = !this.showPIARPlanTrimestral;
    },
    add: function add(index) {
      this.inputs.push({
        name: "",
        logro: "",
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
    addPIAR: function addPIAR(index) {
      this.inputsPIAR.push({
        logroPIAR: "",
        porcentajePIAR: "0"
      });
    },
    removePIAR: function removePIAR(index) {
      this.inputsPIAR.splice(index, 1);
    },
    addP1: function addP1(index) {
      this.inputsPIAR1.push({
        namePIAR: "",
        logroPIAR: "",
        contenidoPIAR: ""
      });
    },
    removeP1: function removeP1(index) {
      this.inputsPIAR1.splice(index, 1);
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
        id_area: this.idArea.substring(0, this.idArea.lastIndexOf("/")),
        id_classroom: this.idArea[2],
        logros: this.newLogro,
        trimestres: this.newTrimestre
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nuevo plan general creado exitosamente");
        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.errors = error.response.data;
        _this2.isLoading = false;
      });

      if (this.activityForPIARStudents === true) {
        if (this.inputsPIAR.length > 0 || this.inputsPIAR1.length > 0) {
          this.isLoading = true;
          if (this.inputsPIAR.length < 1 || this.inputsPIAR1.length < 1) return;
          this.newTrimestre = [];
          this.newLogro = [];

          if (this.inputsPIAR.length > 0) {
            for (var _i2 = 0; _i2 < this.inputsPIAR.length; _i2++) {
              this.newTrimestre.push(this.inputsPIAR[_i2]);
            }
          }

          if (this.inputsPIAR1.length > 0) {
            for (var _i3 = 0; _i3 < this.inputsPIAR1.length; _i3++) {
              this.newLogro.push(this.inputsPIAR1[_i3]);
            }
          }

          axios.post('/piarAnualPlanification', {
            //Cursos generales
            id_area: this.idArea.substring(0, this.idArea.lastIndexOf("/")),
            id_classroom: this.idArea[2],
            logros: JSON.stringify(this.newLogro),
            trimestres: JSON.stringify(this.newTrimestre),
            students: JSON.stringify(this.saveStudent)
          }).then(function (response) {
            _this2.errors = [];
            toastr.success(response.data);
            _this2.isLoading = false;
          })["catch"](function (error) {
            _this2.errors = error.response.data;
            _this2.isLoading = false;
          });
        }
      }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TrimComponent.vue?vue&type=template&id=e74b15c0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TrimComponent.vue?vue&type=template&id=e74b15c0& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("div", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Planificación Trimestral")
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
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 mt-2" }, [
                _vm._m(1),
                _c("br"),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.activityForAllStudents,
                      expression: "activityForAllStudents"
                    }
                  ],
                  attrs: { type: "checkbox", id: "students", name: "students" },
                  domProps: {
                    checked: Array.isArray(_vm.activityForAllStudents)
                      ? _vm._i(_vm.activityForAllStudents, null) > -1
                      : _vm.activityForAllStudents
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.activityForAllStudents,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            (_vm.activityForAllStudents = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.activityForAllStudents = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.activityForAllStudents = $$c
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { staticClass: "mr-3", attrs: { for: "piar" } }, [
                  _vm._v(" Todos los Estudiantes")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.piarStudents.length > 0,
                      expression: "piarStudents.length > 0"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.activityForPIARStudents,
                      expression: "activityForPIARStudents"
                    }
                  ],
                  attrs: { type: "checkbox", id: "piar", name: "students" },
                  domProps: {
                    checked: Array.isArray(_vm.activityForPIARStudents)
                      ? _vm._i(_vm.activityForPIARStudents, null) > -1
                      : _vm.activityForPIARStudents
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.activityForPIARStudents,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            (_vm.activityForPIARStudents = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.activityForPIARStudents = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.activityForPIARStudents = $$c
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _vm.piarStudents.length == 0
                  ? _c(
                      "label",
                      { staticClass: "mr-3", attrs: { for: "piar" } },
                      [_vm._v(" No se encuentran Estudiantes PIAR")]
                    )
                  : _c(
                      "label",
                      { staticClass: "mr-3", attrs: { for: "piar" } },
                      [_vm._v(" Estudiantes PIAR")]
                    ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.activityForSelectStudents,
                      expression: "activityForSelectStudents"
                    }
                  ],
                  attrs: { type: "checkbox", id: "specific", name: "students" },
                  domProps: {
                    checked: Array.isArray(_vm.activityForSelectStudents)
                      ? _vm._i(_vm.activityForSelectStudents, null) > -1
                      : _vm.activityForSelectStudents
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.activityForSelectStudents,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            (_vm.activityForSelectStudents = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.activityForSelectStudents = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.activityForSelectStudents = $$c
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "specific" } }, [
                  _vm._v(" Estudiantes en Especifico")
                ]),
                _vm._v(" "),
                (_vm.activityForPIARStudents == true &&
                  _vm.piarStudents.length > 0) ||
                _vm.activityForSelectStudents == true
                  ? _c(
                      "div",
                      [
                        _c("label", [_vm._v("Selecciona Los estudiantes")]),
                        _vm._v(" "),
                        _c("multiselect", {
                          attrs: {
                            options: _vm.selectedStudentsData,
                            multiple: true,
                            "close-on-select": false,
                            "clear-on-select": false,
                            "preserve-search": true,
                            placeholder: "Seleccione una o varias",
                            label: "text",
                            "track-by": "id",
                            "preselect-first": false
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
                                                "\n                                                    opciones\n                                                    selecionadas\n                                            "
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
                            3178573262
                          ),
                          model: {
                            value: _vm.saveStudent,
                            callback: function($$v) {
                              _vm.saveStudent = $$v
                            },
                            expression: "saveStudent"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
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
                      { attrs: { title: "Trimestral" } },
                      [
                        _vm._l(_vm.inputs, function(input, t) {
                          return _c(
                            "div",
                            { key: t, staticClass: "form-group row mx-auto" },
                            [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("Logro")
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
                                            t > 0 &&
                                            _vm.inputs_saved.length <= t,
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
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t == _vm.inputs.length - 1,
                                          expression: "t == inputs.length - 1"
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
                                _c("div", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: input.logro,
                                        expression: "input.logro"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "objetive1",
                                      placeholder: "Nombre de la unidad",
                                      required: ""
                                    },
                                    domProps: { value: input.logro },
                                    on: {
                                      change: function($event) {
                                        return _vm.annualContentUpdateEvent(
                                          $event,
                                          t,
                                          "inputs",
                                          "logro"
                                        )
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          input,
                                          "logro",
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
                                  _vm._v("Indicador de logro")
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
                                            t > 0 &&
                                            _vm.inputs_saved.length <= t,
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
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t == _vm.inputs.length - 1,
                                          expression: "t == inputs.length - 1"
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
                                _c("div", [
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
                                      placeholder: "Nombre de la unidad",
                                      required: ""
                                    },
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
                                ]),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("Contenidos")
                                ]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: input.contenido,
                                      expression: "input.contenido"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
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
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        input,
                                        "contenido",
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
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  _vm.activityForPIARStudents == true &&
                                  _vm.piarStudents.length > 0,
                                expression:
                                  "(activityForPIARStudents == true && piarStudents.length > 0)"
                              }
                            ],
                            staticClass: "btn btn-primary",
                            on: { click: _vm.showPIARPlanT }
                          },
                          [
                            _vm._v(
                              "Crear Planificación General Estudiantes PIAR"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  _vm.activityForPIARStudents == true &&
                                  _vm.piarStudents.length > 0,
                                expression:
                                  "(activityForPIARStudents == true && piarStudents.length > 0)"
                              }
                            ],
                            staticClass: "mt-3"
                          },
                          _vm._l(_vm.inputsPIAR1, function(inputsP1, keyy) {
                            return _c(
                              "div",
                              {
                                key: keyy,
                                staticClass: "form-group row mx-auto"
                              },
                              [
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c("label", { attrs: { for: "name" } }, [
                                    _vm._v("Logro")
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
                                              keyy > 0 &&
                                              _vm.inputsP1_saved.length <= keyy,
                                            expression:
                                              "(keyy > 0 && inputsP1_saved.length<=keyy)"
                                          }
                                        ],
                                        staticClass: "badge badge-danger",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.removeP1(keyy)
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
                                            value:
                                              keyy ==
                                              _vm.inputsPIAR1.length - 1,
                                            expression:
                                              "keyy == inputsPIAR1.length -1"
                                          }
                                        ],
                                        staticClass: "badge badge-primary",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.addP1(keyy)
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
                                          value: inputsP1.logroPIAR,
                                          expression: "inputsP1.logroPIAR"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "objetive1",
                                        placeholder: "Nombre de Logro",
                                        required: ""
                                      },
                                      domProps: { value: inputsP1.logroPIAR },
                                      on: {
                                        change: function($event) {
                                          return _vm.annualContentUpdateEvent(
                                            $event,
                                            keyy,
                                            "inputsPIAR1",
                                            "logroPIAR"
                                          )
                                        },
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            inputsP1,
                                            "logroPIAR",
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
                                    _vm._v("Indicador de logro")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: inputsP1.namePIAR,
                                          expression: "inputsP1.namePIAR"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "objetive1",
                                        placeholder: "Nombre de la unidad",
                                        required: ""
                                      },
                                      domProps: { value: inputsP1.namePIAR },
                                      on: {
                                        change: function($event) {
                                          return _vm.annualContentUpdateEvent(
                                            $event,
                                            keyy,
                                            "inputsPIAR1",
                                            "namePIAR"
                                          )
                                        },
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            inputsP1,
                                            "namePIAR",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: "name" } }, [
                                    _vm._v("Contenidos")
                                  ]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: inputsP1.contenidoPIAR,
                                        expression: "inputsP1.contenidoPIAR"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "competences",
                                      placeholder:
                                        "Es la explicacion o sintesis de la unidad.",
                                      required: ""
                                    },
                                    domProps: { value: inputsP1.contenidoPIAR },
                                    on: {
                                      change: function($event) {
                                        return _vm.annualContentUpdateEvent(
                                          $event,
                                          keyy,
                                          "inputsPIAR1",
                                          "contenidoPIAR"
                                        )
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          inputsP1,
                                          "contenidoPIAR",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Please fill out this field")]
                                  )
                                ])
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      2
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _c("span", { staticClass: "required" }, [_vm._v("*")]),
      _vm._v("Planificación Para :")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TrimComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/TrimComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrimComponent_vue_vue_type_template_id_e74b15c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrimComponent.vue?vue&type=template&id=e74b15c0& */ "./resources/js/components/TrimComponent.vue?vue&type=template&id=e74b15c0&");
/* harmony import */ var _TrimComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrimComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/TrimComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrimComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrimComponent_vue_vue_type_template_id_e74b15c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrimComponent_vue_vue_type_template_id_e74b15c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TrimComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TrimComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/TrimComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrimComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TrimComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TrimComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrimComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TrimComponent.vue?vue&type=template&id=e74b15c0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/TrimComponent.vue?vue&type=template&id=e74b15c0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrimComponent_vue_vue_type_template_id_e74b15c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TrimComponent.vue?vue&type=template&id=e74b15c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TrimComponent.vue?vue&type=template&id=e74b15c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrimComponent_vue_vue_type_template_id_e74b15c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrimComponent_vue_vue_type_template_id_e74b15c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
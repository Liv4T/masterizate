(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["id_lective_planification"],
  data: function data() {
    var _ref;

    return _ref = {
<<<<<<< HEAD
      inputs: [{
        name: "",
        contenido: ""
      }],
      inputs1: [{
        name: "",
        rate: ""
      }],
      newTrimestre: [],
      tipo_act: "",
      rate: ""
    }, _defineProperty(_ref, "newTrimestre", []), _defineProperty(_ref, "newLogro", []), _defineProperty(_ref, "trimestre", false), _defineProperty(_ref, "logro_1", ""), _defineProperty(_ref, "logro_2", ""), _defineProperty(_ref, "logro_3", ""), _defineProperty(_ref, "logro_4", ""), _defineProperty(_ref, "planification", {
      lective: {}
    }), _defineProperty(_ref, "indicators", []), _defineProperty(_ref, "anual", []), _defineProperty(_ref, "newAnual", []), _defineProperty(_ref, "errors", []), _defineProperty(_ref, "id_logro", ""), _defineProperty(_ref, "id_indicator", 0), _defineProperty(_ref, "index", 0), _defineProperty(_ref, "id_lective_achievement", 0), _ref;
=======
      serialLocalStorage: '5t284918-f0f6-4369-a368-eaf6321b6855',
      planification: {
        lective: {},
        achievements: [],
        quarterlies: []
      },
      quarterlies: [{
        name: "",
        content: "",
        order: 1,
        observation: ''
      }],
      achievements: [{
        content: "",
        rate: 0
      }],
      achievements_saved: [],
      quarterlies_saved: [],
      newquaterly: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: ""
    }, _defineProperty(_ref, "newquaterly", []), _defineProperty(_ref, "newLogro", []), _defineProperty(_ref, "quaterly", false), _defineProperty(_ref, "logro_1", ""), _defineProperty(_ref, "logro_2", ""), _defineProperty(_ref, "logro_3", ""), _defineProperty(_ref, "logro_4", ""), _defineProperty(_ref, "anual", []), _defineProperty(_ref, "newAnual", []), _defineProperty(_ref, "errors", []), _defineProperty(_ref, "isSynchronized", true), _defineProperty(_ref, "isLoading", false), _ref;
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  },
  mounted: function mounted() {
    var _this = this;

<<<<<<< HEAD
    var urlsel = "/api/lectives/planification/" + this.id_lective_planification;
    axios.get(urlsel).then(function (response) {
      _this.planification = response.data;
    });
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/api/lectives/planification";
    },
    returnToHome: function returnToHome() {
      window.location = "/teacher/lectives/planning/".concat(this.id_lective_planification, "/indicators");
    },
    getIndicador: function getIndicador(id_achievement) {
      var _this2 = this;

      this.id_lective_achievement = id_achievement;
      this.indicators = [];
      var urli = "/api/lectives/planification/" + this.id_lective_planification + "/achievement/" + id_achievement;
      axios.get(urli).then(function (response) {
        _this2.indicators = response.data;
      });
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
        name: "",
        rate: ""
      });
    },
    remove1: function remove1(index) {
      this.inputs1.splice(index, 1);
    },
    createIndicator: function createIndicator() {
      var _this3 = this;

      axios.put("/api/lectives/planification/" + this.id_lective_planification + "/achievement", {
        //Cursos generales
        id_indicator: this.id_indicator,
        id_lective_achievement: this.id_lective_achievement,
        type_activity: this.tipo_act,
        id_annual: this.id_annual,
        id_achievement: this.id_logro,
        rate: this.rate
      }).then(function (response) {
        _this3.errors = [];
        toastr.success("Nueva actividad creada exitosamente");

        _this3.returnToHome();
      })["catch"](function (error) {
        _this3.errors = error.response.data;
      });
    },
    updateCourses: function updateCourses() {
      this.returnToHome();
    },
    showAddModal: function showAddModal(id) {
      this.id_indicator = 0;
      this.tipo_act = '';
      this.rate = '';
      $("#createZ").modal("show");
    },
    showEdit: function showEdit(id_rate, tipo_act, rate) {
=======
    //load from localstorage
    this.serialLocalStorage = this.serialLocalStorage + "-" + this.id_lective_planification;
    var urlsel = "/api/lectives/planification/" + this.id_lective_planification;
    axios.get(urlsel).then(function (response) {
      _this.planification = response.data; //set current data

      if (_this.planification.achievements.length > 0) {
        _this.achievements = _this.planification.achievements.map(function (p) {
          return {
            id: p.id,
            content: p.content,
            rate: "".concat(p.rate)
          };
        });
        _this.achievements_saved = JSON.parse(JSON.stringify(_this.achievements));
      }

      if (_this.planification.quarterlies.length > 0) {
        _this.quarterlies = _this.planification.quarterlies.map(function (p) {
          return {
            id: p.id,
            content: p.content,
            name: p.name,
            order: p.order
          };
        });
        _this.quarterlies_saved = JSON.parse(JSON.stringify(_this.quarterlies));
      }

      console.log(_this.achievements);

      if (localStorage.getItem(_this.serialLocalStorage)) {
        var savedPlanificationModel = JSON.parse(decodeURIComponent(escape(window.atob(localStorage.getItem(_this.serialLocalStorage)))));

        if (JSON.stringify(savedPlanificationModel.quarterlies) !== JSON.stringify(_this.quarterlies_saved)) {
          _this.quarterlies = savedPlanificationModel.quarterlies;
          _this.isSynchronized = false;
        }

        if (JSON.stringify(savedPlanificationModel.achievements) !== JSON.stringify(_this.achievements_saved)) {
          _this.achievements = savedPlanificationModel.achievements;
          _this.isSynchronized = false;
        }
      }

      console.log(_this.achievements);

      if (_this.planification.quarterlies.length > 0) {
        _this.quaterly = true;
      } else {
        _this.quaterly = false;
      }
    });
  },
  methods: {
    contentUpdateEvent: function contentUpdateEvent(index, property) {
      this.inputs[index][property] = this.inputs[index][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
    },
    planificationContentUpdateEvent: function planificationContentUpdateEvent(e, i, type) {
      var property = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (type == 'achievements') {
        this.achievements[i][property] = this.achievements[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      } else if (type == 'quarterlies') {
        this.quarterlies[i][property] = this.quarterlies[i][property].replace(/[^a-zA-Z0-9-.ñáéíóú_*+-/=&%$#!()?¡¿ ]/g, "|");
      } //serialize data on localstorage


      localStorage.setItem(this.serialLocalStorage, window.btoa(unescape(encodeURIComponent(JSON.stringify({
        achievements: this.achievements,
        quarterlies: this.quarterlies
      })))));
      this.isSynchronized = false;
    },
    returnToMenu: function returnToMenu() {
      var _this2 = this;

      setTimeout(function () {
        _this2.isLoading = false;
        window.location = "/teacher/lectives/planning";
      }, 2000);
    },
    addQuarterly: function addQuarterly(index) {
      this.quarterlies.push({
        name: "",
        content: "",
        order: this.quarterlies.length,
        observation: ''
      });
    },
    removeQuarterly: function removeQuarterly(index) {
      this.quarterlies.splice(index, 1);
    },
    addAchievement: function addAchievement(index) {
      this.achievements.push({
        content: '',
        rate: 0
      });
    },
    removeAchievement: function removeAchievement(index) {
      this.achievements.splice(index, 1);
    },
    isLoadingEvent: function isLoadingEvent() {
      return this.isLoading;
    },
    saveData: function saveData() {
      var _this3 = this;

      this.isLoading = true;
      var url = "/api/lectives/planification";
      if (this.quarterlies.length == 0 || this.achievements.length == 0) return;
      axios.put(url, {
        id_planification: this.planification.id_planification,
        achievements: this.achievements,
        quarterlies: this.quarterlies
      }).then(function (response) {
        _this3.errors = [];
        toastr.success("Nuevo plan general creado exitosamente");

        _this3.returnToMenu();
      })["catch"](function (error) {
        _this3.errors = error.response.data;
        _this3.isLoading = false;
      });
    },
    updateCourses: function updateCourses() {
      window.location = "/actividad_g";
    },
    editNames: function editNames(clas) {
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
<<<<<<< HEAD
      this.id_indicator = id_rate;
      this.tipo_act = tipo_act;
      this.rate = rate;
      $("#createZ").modal("show");
    },
    showDeleted: function showDeleted(id_indicator) {
      this.id_indicator = id_indicator;
      $("#deleteZ").modal("show");
    },
    deleteIndicator: function deleteIndicator() {
      var _this4 = this;

      axios["delete"]("/api/lectives/planification/".concat(this.id_lective_planification, "/indicator/").concat(this.id_indicator), {}).then(function (response) {
        _this4.errors = [];
        $("#deleteZ").modal("hide");
        toastr.success("Actividad eliminada exitosamente");

        _this4.returnToHome();
      })["catch"](function (error) {
        _this4.errors = error.response.data;
      });
=======
      $("#createZ").modal("show");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=template&id=2d195887&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=template&id=2d195887& ***!
  \*************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=template&id=da5f3db8&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=template&id=da5f3db8& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
=======
              _vm._v("Planificación general")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "classroom-label" }, [
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
              _vm._v(
                "Planificación general " +
                  _vm._s(_vm.planification.lective.name) +
                  " Trimestre " +
                  _vm._s(_vm.planification.period_consecutive) +
                  " "
              )
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
                ],
                staticClass: "needs-validation",
                attrs: { novalidate: "" }
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
                      "finish-button-text": "Guardar"
                    },
                    on: { "on-complete": _vm.updateCourses }
                  },
                  [
<<<<<<< HEAD
                    _c("tab-content", { attrs: { title: "rate de notas" } }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c(
                          "div",
                          {
                            staticClass: "accordion",
                            attrs: { id: "accordionExample" }
                          },
                          _vm._l(_vm.planification.achievements, function(
                            option,
                            t
                          ) {
                            return _c("div", { key: t, staticClass: "card" }, [
                              _c("div", { staticClass: "card-header" }, [
                                _c("h2", { staticClass: "mb-0" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-link",
                                      attrs: {
                                        type: "button",
                                        "data-toggle": "collapse",
                                        "data-target": "#collapse" + t,
                                        "aria-expanded": "false",
                                        "aria-controls": "collapse"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.getIndicador(option.id)
                                        }
=======
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
                      _vm._l(_vm.achievements, function(achievement, t) {
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
                                      value: achievement.rate,
                                      expression: "achievement.rate"
                                    }
                                  ],
                                  staticClass: "form-control form-control-sm",
                                  staticStyle: { width: "50px" },
                                  attrs: { type: "number" },
                                  domProps: { value: achievement.rate },
                                  on: {
                                    change: function($event) {
                                      return _vm.planificationContentUpdateEvent(
                                        $event,
                                        t,
                                        "achievements",
                                        "rate"
                                      )
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        achievement,
                                        "rate",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v("%\r\n                    "),
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
                                            _vm.achievements_saved.length <= t,
                                          expression:
                                            "(t>0 && achievements_saved.length<=t)"
                                        }
                                      ],
                                      staticClass: "badge badge-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.removeAchievement(t)
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
                                            t == _vm.achievements.length - 1,
                                          expression:
                                            "t == achievements.length -1"
                                        }
                                      ],
                                      staticClass: "badge badge-primary",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.addAchievement(t)
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
                                  value: achievement.content,
                                  expression: "achievement.content"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "welcome", required: "" },
                              domProps: { value: achievement.content },
                              on: {
                                change: function($event) {
                                  return _vm.planificationContentUpdateEvent(
                                    $event,
                                    t,
                                    "achievements",
                                    "content"
                                  )
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    achievement,
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
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      { attrs: { title: "Trimestral" } },
                      _vm._l(_vm.quarterlies, function(quarterly, t) {
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
                                          t > 0 &&
                                          _vm.quarterlies_saved.length <= t,
                                        expression:
                                          "(t>0 && quarterlies_saved.length<=t)"
                                      }
                                    ],
                                    staticClass: "badge badge-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.removeQuarterly(t)
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
                                        value: t == _vm.quarterlies.length - 1,
                                        expression:
                                          "t == quarterlies.length - 1"
                                      }
                                    ],
                                    staticClass: "badge badge-primary",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.addQuarterly(t)
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                      }
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticStyle: {
                                            "text-overflow": "ellipsis",
                                            width: "450px",
                                            "white-space": "nowrap",
                                            overflow: "hidden"
                                          }
                                        },
                                        [_vm._v(_vm._s(option.content))]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: option.rate,
                                            expression: "option.rate"
                                          }
                                        ],
                                        staticStyle: { width: "50px" },
                                        attrs: { type: "number", disabled: "" },
                                        domProps: { value: option.rate },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              option,
                                              "rate",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(
                                        "\n                            %\n                          "
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
<<<<<<< HEAD
                              _c(
                                "div",
                                {
                                  staticClass: "collapse hide",
                                  attrs: {
                                    id: "collapse" + t,
                                    "aria-labelledby": "heading",
                                    "data-parent": "#accordionExample"
=======
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: quarterly.name,
                                      expression: "quarterly.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "objetive1",
                                    placeholder: "Nombre de la unidad",
                                    required: ""
                                  },
                                  domProps: { value: quarterly.name },
                                  on: {
                                    change: function($event) {
                                      return _vm.planificationContentUpdateEvent(
                                        $event,
                                        t,
                                        "quarterlies",
                                        "name"
                                      )
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        quarterly,
                                        "name",
                                        $event.target.value
                                      )
                                    }
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                  }
                                },
                                [
                                  _c("div", { staticClass: "card-body" }, [
                                    _c(
                                      "table",
                                      {
                                        staticClass:
                                          "table table-responsive-xl table-hover table-striped center"
                                      },
                                      [
                                        _c(
                                          "tbody",
                                          [
                                            _c("tr", [
                                              _c("td", [_vm._v("Actividad")]),
                                              _vm._v(" "),
                                              _c("td", [_vm._v("rate")]),
                                              _vm._v(" "),
                                              _c("td", [_vm._v("Editar")]),
                                              _vm._v(" "),
                                              _c("td", [_vm._v("Eliminar")])
                                            ]),
                                            _vm._v(" "),
                                            _vm._l(_vm.indicators, function(
                                              opt,
                                              i
                                            ) {
                                              return _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(opt.type_activity)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(opt.rate))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c("a", {
                                                    staticClass: "fas fa-edit",
                                                    on: {
                                                      click: function($event) {
                                                        $event.preventDefault()
                                                        return _vm.showEdit(
                                                          opt.id,
                                                          opt.type_activity,
                                                          opt.rate
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c("a", {
                                                    staticClass:
                                                      "fas fa-trash-alt",
                                                    on: {
                                                      click: function($event) {
                                                        $event.preventDefault()
                                                        return _vm.showDeleted(
                                                          opt.id
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { attrs: { align: "right" } }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-warning",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.showAddModal(option.id)
                                            }
                                          }
                                        },
                                        [_vm._v("Agregar")]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ])
                          }),
                          0
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal fade", attrs: { id: "createZ" } }, [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      staticClass: "needs-validation",
                      attrs: { novalidate: "" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "form-group row mx-auto" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-8 text-center mx-auto" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Tipo de actividad")
                            ]),
                            _vm._v(" "),
<<<<<<< HEAD
                            _c("div", [
                              _c("input", {
=======
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Contenido")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
<<<<<<< HEAD
                                    value: _vm.tipo_act,
                                    expression: "tipo_act"
=======
                                    value: quarterly.content,
                                    expression: "quarterly.content"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                  }
                                ],
                                staticClass: "form-control",
                                staticStyle: { background: "gainsboro" },
                                attrs: {
<<<<<<< HEAD
                                  type: "text",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: _vm.tipo_act },
                                on: {
=======
                                  name: "competences",
                                  placeholder:
                                    "Es la explicacion o sintesis de la unidad.",
                                  required: ""
                                },
                                domProps: { value: quarterly.content },
                                on: {
                                  change: function($event) {
                                    return _vm.planificationContentUpdateEvent(
                                      $event,
                                      t,
                                      "quarterlies",
                                      "content"
                                    )
                                  },
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
<<<<<<< HEAD
                                    _vm.tipo_act = $event.target.value
                                  }
                                }
                              })
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row mx-auto" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-8 text-center mx-auto" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Porcentaje total")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.rate,
                                    expression: "rate"
                                  }
                                ],
                                staticClass: "form-control",
                                staticStyle: { background: "gainsboro" },
                                attrs: {
                                  type: "number",
                                  name: "objetive1",
                                  required: ""
                                },
                                domProps: { value: _vm.rate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.rate = $event.target.value
                                  }
                                }
                              })
=======
                                    _vm.$set(
                                      quarterly,
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
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c("input", {
                          staticClass: "btn btn-warning",
                          attrs: { type: "submit", value: "Guardar" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.createIndicator()
                            }
                          }
                        })
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal fade", attrs: { id: "deleteZ" } }, [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("label", [_vm._v("¿Desea eliminar el indicador?")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c("input", {
                      staticClass: "btn btn-warning",
                      attrs: { type: "submit", value: "Confirmar" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.deleteIndicator()
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
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
<<<<<<< HEAD
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v("\n                Porcentaje\n                "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v("\n                Eliminar Indicador\n                "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
=======
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/lectivesTeacherIndicatorsComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherIndicatorsComponent.vue ***!
  \************************************************************************/
=======
/***/ "./resources/js/components/lectivesTeacherPlanningEditComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherPlanningEditComponent.vue ***!
  \**************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _lectivesTeacherIndicatorsComponent_vue_vue_type_template_id_2d195887___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lectivesTeacherIndicatorsComponent.vue?vue&type=template&id=2d195887& */ "./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=template&id=2d195887&");
/* harmony import */ var _lectivesTeacherIndicatorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lectivesTeacherIndicatorsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _lectivesTeacherPlanningEditComponent_vue_vue_type_template_id_da5f3db8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lectivesTeacherPlanningEditComponent.vue?vue&type=template&id=da5f3db8& */ "./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=template&id=da5f3db8&");
/* harmony import */ var _lectivesTeacherPlanningEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lectivesTeacherPlanningEditComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=script&lang=js&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _lectivesTeacherIndicatorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lectivesTeacherIndicatorsComponent_vue_vue_type_template_id_2d195887___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lectivesTeacherIndicatorsComponent_vue_vue_type_template_id_2d195887___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _lectivesTeacherPlanningEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lectivesTeacherPlanningEditComponent_vue_vue_type_template_id_da5f3db8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lectivesTeacherPlanningEditComponent_vue_vue_type_template_id_da5f3db8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/lectivesTeacherIndicatorsComponent.vue"
=======
component.options.__file = "resources/js/components/lectivesTeacherPlanningEditComponent.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
=======
/***/ "./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherIndicatorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./lectivesTeacherIndicatorsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherIndicatorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=template&id=2d195887&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=template&id=2d195887& ***!
  \*******************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherPlanningEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./lectivesTeacherPlanningEditComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherPlanningEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=template&id=da5f3db8&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=template&id=da5f3db8& ***!
  \*********************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherIndicatorsComponent_vue_vue_type_template_id_2d195887___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./lectivesTeacherIndicatorsComponent.vue?vue&type=template&id=2d195887& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherIndicatorsComponent.vue?vue&type=template&id=2d195887&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherIndicatorsComponent_vue_vue_type_template_id_2d195887___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherIndicatorsComponent_vue_vue_type_template_id_2d195887___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherPlanningEditComponent_vue_vue_type_template_id_da5f3db8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./lectivesTeacherPlanningEditComponent.vue?vue&type=template&id=da5f3db8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lectivesTeacherPlanningEditComponent.vue?vue&type=template&id=da5f3db8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherPlanningEditComponent_vue_vue_type_template_id_da5f3db8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lectivesTeacherPlanningEditComponent_vue_vue_type_template_id_da5f3db8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);
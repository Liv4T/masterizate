(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./connectionDbFirebase.js":
/*!*********************************!*\
  !*** ./connectionDbFirebase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");

var firebaseConfig = {
  apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
  authDomain: "liv4t-skool.firebaseapp.com",
  databaseURL: "https://liv4t-skool.firebaseio.com",
  projectId: "liv4t-skool",
  storageBucket: "liv4t-skool.appspot.com",
  messagingSenderId: "346718353628",
  appId: "1:346718353628:web:abc0666c41b66fa472dc19",
  measurementId: "G-7L14TG5RRZ"
}; // Initialize Firebase

firebase__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
firebase__WEBPACK_IMPORTED_MODULE_0__["default"].analytics();
/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../connectionDbFirebase */ "./connectionDbFirebase.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // var firebaseConfig = {
//             apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
//             authDomain: "liv4t-skool.firebaseapp.com",
//             databaseURL: "https://liv4t-skool.firebaseio.com",
//             projectId: "liv4t-skool",
//             storageBucket: "liv4t-skool.appspot.com",
//             messagingSenderId: "346718353628",
//             appId: "1:346718353628:web:abc0666c41b66fa472dc19",
//             measurementId: "G-7L14TG5RRZ"
//  };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

Vue.use(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id_area", "idClassroom", "backComponent"],
  data: function data() {
    return {
      myOptions: [],
      nameUnit: "",
      description: "",
      newdate: "",
      date_limit: "",
      nameArea: "",
      errors: [],
      nameFile: '',
      imageData: null,
      message: "",
      activity: "",
      quarterly_plan: "",
      fillC: [],
      fillI: []
    };
  },
  mounted: function mounted() {
    this.getArea();
    this.getDataPlanification();
  },
  methods: {
    getArea: function getArea() {
      var _this = this;

      var url = "GetArearByUser";
      axios.get(url).then(function (response) {
        _this.myOptions = response.data;
      });
    },
    getMenu: function getMenu() {
      window.location = "/repository";
    },
    indicador: function indicador(id) {
      var _this2 = this;

      if (id != '') {
        var ids = id.split("/");
        var idInd = ids[0];
      }

      var urli = window.location.origin + "/getIndicator/" + idInd;
      axios.get(urli).then(function (response) {
        _this2.fillI = response.data;
      });
    },
    getDataPlanification: function getDataPlanification() {
      var _this3 = this;

      var urlsel = window.location.origin + "/coursePlanification/" + this.id_area + "/" + this.idClassroom;
      axios.get(urlsel).then(function (response) {
        _this3.fillC = response.data;
      });
    },
    createSemanal: function createSemanal() {
      var _this4 = this;

      axios.post("/saveRepository", {
        id_classroom: this.idClassroom,
        id_area: this.id_area,
        id_quarterly_plan: this.quarterly_plan,
        id_indicator: this.activity,
        name: this.nameUnit,
        description: this.description,
        file: this.nameFile,
        date: this.newdate,
        date_limit: this.date_limit
      }).then(function (response) {
        _this4.errors = [];
        toastr.success("Nueva tarea creada exitosamente"); // this.getMenu();
      })["catch"](function (error) {
        _this4.errors = error.response.data;
        toastr.danger("Complete todos los campos requeridos");
      });
    },
    click1: function click1() {
      this.$refs.input1.click();
    },
    previewImage: function previewImage(event) {
      this.uploadValue = 0;
      this.nameFile = null;
      this.imageData = event.target.files[0];
      this.message = null;
      this.onUpload();
    },
    onUpload: function onUpload() {
      var _this5 = this;

      this.nameFile = null;
      var storageRef = _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref("".concat(this.imageData.name)).put(this.imageData);
      storageRef.on("state_changed", function (snapshot) {
        _this5.uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      }, function (error) {
        console.log(error.message);
      }, function () {
        _this5.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then(function (url) {
          _this5.nameFile = url;
          _this5.message = _this5.imageData.name;
          console.log(_this5.nameFile);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431& ***!
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
  return _c("div", [
    _c("div", [
      _c("div", [
        _c("div", { staticClass: "col-md-12 mx-auto" }, [
          _c(
            "div",
            { staticClass: "custom-card text-center" },
            [
              _c("h3", { staticClass: "card-header fondo" }, [
                _vm._v("Entregas")
              ]),
              _vm._v(" "),
              _c(
                "form-wizard",
                {
                  attrs: {
                    title: "",
                    subtitle: "",
                    color: "#ffc107",
                    "next-button-text": "Siguiente",
                    "finish-button-text": "Guardar"
                  },
                  on: { "on-complete": _vm.createSemanal }
                },
                [
                  _c("tab-content", { attrs: { title: "Crear entrega" } }, [
                    _c("div", { staticClass: "form-group row mx-auto" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("*Título")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.nameUnit,
                                expression: "nameUnit"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "objetive1",
                              required: ""
                            },
                            domProps: { value: _vm.nameUnit },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.nameUnit = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("*Instrucciones")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.description,
                              expression: "description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "competences",
                            placeholder:
                              "Es la explicacion o sintesis de la clase.",
                            required: ""
                          },
                          domProps: { value: _vm.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.description = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("div", { staticClass: "form-group row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*Fecha")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newdate,
                                  expression: "newdate"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "date",
                                name: "objetive1",
                                required: ""
                              },
                              domProps: { value: _vm.newdate },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.newdate = $event.target.value
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("label", [_vm._v("*Fecha Limite")]),
                          _vm._v(" "),
                          _c("div", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.date_limit,
                                  expression: "date_limit"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "datetime-local", required: "" },
                              domProps: { value: _vm.date_limit },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.date_limit = $event.target.value
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Archivo")
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
                      _c("div", { staticClass: "form-group row" }, [
                        _c("div", { staticClass: "col-8" }, [
                          _c("label", [
                            _c("span", { staticClass: "required" }, [
                              _vm._v("*")
                            ]),
                            _vm._v("Logro:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.quarterly_plan,
                                  expression: "quarterly_plan"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.quarterly_plan = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  function($event) {
                                    return _vm.indicador(_vm.quarterly_plan)
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("-- Seleccione --")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.fillC.quaterly, function(
                                quarterly,
                                k_quarterly
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: k_quarterly,
                                    domProps: {
                                      value:
                                        quarterly.id +
                                        "/" +
                                        quarterly.id_achievement
                                    }
                                  },
                                  [_vm._v(_vm._s(quarterly.logro))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("label", [
                            _c("span", { staticClass: "required" }, [
                              _vm._v("*")
                            ]),
                            _vm._v("Evaluación:")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.activity,
                                  expression: "activity"
                                }
                              ],
                              staticClass: "form-control",
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
                                  _vm.activity = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("-- Seleccione --")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.fillI, function(act, k_activity) {
                                return _c(
                                  "option",
                                  {
                                    key: k_activity,
                                    domProps: { value: act.id }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(act.type_activity) +
                                        " (" +
                                        _vm._s(act.activity_rate) +
                                        " %)"
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("strong", [_vm._v("* Campos requeridos")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "float-left" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.backComponent }
                        },
                        [_vm._v("Volver")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/repositoryCreate.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/repositoryCreate.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repositoryCreate.vue?vue&type=template&id=018ac431& */ "./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431&");
/* harmony import */ var _repositoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repositoryCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _repositoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__["render"],
  _repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/repositoryCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./repositoryCreate.vue?vue&type=template&id=018ac431& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/repositoryCreate.vue?vue&type=template&id=018ac431&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repositoryCreate_vue_vue_type_template_id_018ac431___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminCoursesComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminCoursesComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
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
<<<<<<< HEAD
=======
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_area', 'id_classroom', 'id_activity'],
  data: function data() {
    return {
<<<<<<< HEAD
      activity: {},
      data: {}
=======
      clases: [],
      areas: [],
      descripcion: "",
      logro: "",
      fechaE: "",
      fechaR: "",
      id_act: "",
      errors: [],
      fillS: []
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

<<<<<<< HEAD
    axios.get("/getActivityById/".concat(this.id_activity)).then(function (response) {
      _this.activity = response.data;
=======
    var url = "/GetArearByUser";
    axios.get(url).then(function (response) {
      _this.areas = response.data;
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    });
    console.log("Component mounted.");
  },
  methods: {
<<<<<<< HEAD
    FinishActivity: function FinishActivity() {
      axios.put("/area/".concat(this.id_area, "/clase/").concat(this.id_classroom, "/actividad/").concat(this.id_activity), this.data).then(function (response) {
        toastr.success("Enviada");
        location.href = "/Actividad";
      });
    },
    RefreshData: function RefreshData(data) {
      this.data = data;
=======
    botones: function botones(area, classroom) {
      var _this2 = this;

      var urlsel = "/editGetWeek/" + area + "/" + classroom;
      axios.get(urlsel).then(function (response) {
        _this2.clases = response.data;
      });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0& ***!
  \*******************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminCoursesComponent.vue?vue&type=template&id=3bea0659&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminCoursesComponent.vue?vue&type=template&id=3bea0659& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-10 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v(_vm._s(_vm.activity.activity_name))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row margin-top-20" }, [
        _c("div", { staticClass: "col-md-10 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _vm._v(
              "\n                  " +
                _vm._s(_vm.activity.activity_desc) +
                "\n                "
=======
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _c("div", { staticClass: "card text-center" }, [
          _c("h3", { staticClass: "card-header fondo" }, [
            _vm._v("Mis clases")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "accordion", attrs: { id: "accordionExample" } },
              _vm._l(_vm.areas, function(area, t) {
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
                              return _vm.botones(area.id, area.id_classroom)
                            }
                          }
                        },
                        [_c("label", [_vm._v(_vm._s(area.text))])]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse hide",
                      attrs: {
                        id: "collapse" + t,
                        "aria-labelledby": "heading",
                        "data-parent": "#accordionExample"
                      }
                    },
                    [
                      _c(
                        "table",
                        {
                          staticClass:
                            "table table-responsive-xl table-hover table-striped center"
                        },
                        [
                          _vm._m(0, true),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.clases, function(clas, k) {
                              return clas.id_classroom == area.id_classroom &&
                                clas.id_area == area.id
                                ? _c("tr", { key: k }, [
                                    _c("td", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            href:
                                              "/act_semana/" +
                                              clas.id_area +
                                              "/" +
                                              clas.id_classroom
                                          }
                                        },
                                        [_vm._v("Editar")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(clas.text))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            href: "/admin/modulo/" + clas.id
                                          }
                                        },
                                        [_vm._v("Ir a Ciclo")]
                                      )
                                    ])
                                  ])
                                : _vm._e()
                            }),
                            0
                          )
                        ]
                      )
                    ]
                  )
                ])
              }),
              0
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row margin-top-20" }, [
        _c(
          "div",
          { staticClass: "col-md-10 mx-auto" },
          [
            _vm.activity.activity_type == "complete_sentence"
              ? _c("activity-complete-sentence", {
                  attrs: { previewMode: true, data: _vm.activity.content },
                  on: { "refresh-data": _vm.RefreshData }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.activity.activity_type == "questionary_open_questions"
              ? _c("activity-open-question", {
                  attrs: { previewMode: true, data: _vm.activity.content },
                  on: { "refresh-data": _vm.RefreshData }
                })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row margin-top-20" }, [
        _c("div", { staticClass: "col-md-10 mx-auto" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: { click: _vm.FinishActivity }
            },
            [_vm._v("Finalizar")]
          )
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
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Ciclo de aprendizaje")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/activityStudentPlayComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activityStudentPlayComponent.vue ***!
  \******************************************************************/
=======
/***/ "./resources/js/components/adminCoursesComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/adminCoursesComponent.vue ***!
  \***********************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0& */ "./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0&");
/* harmony import */ var _activityStudentPlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activityStudentPlayComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _adminCoursesComponent_vue_vue_type_template_id_3bea0659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminCoursesComponent.vue?vue&type=template&id=3bea0659& */ "./resources/js/components/adminCoursesComponent.vue?vue&type=template&id=3bea0659&");
/* harmony import */ var _adminCoursesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminCoursesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/adminCoursesComponent.vue?vue&type=script&lang=js&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _activityStudentPlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _adminCoursesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminCoursesComponent_vue_vue_type_template_id_3bea0659___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminCoursesComponent_vue_vue_type_template_id_3bea0659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/activityStudentPlayComponent.vue"
=======
component.options.__file = "resources/js/components/adminCoursesComponent.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
=======
/***/ "./resources/js/components/adminCoursesComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/adminCoursesComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./activityStudentPlayComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityStudentPlayComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0& ***!
  \*************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminCoursesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./adminCoursesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminCoursesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminCoursesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/adminCoursesComponent.vue?vue&type=template&id=3bea0659&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/adminCoursesComponent.vue?vue&type=template&id=3bea0659& ***!
  \******************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityStudentPlayComponent.vue?vue&type=template&id=f72a22b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityStudentPlayComponent_vue_vue_type_template_id_f72a22b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminCoursesComponent_vue_vue_type_template_id_3bea0659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./adminCoursesComponent.vue?vue&type=template&id=3bea0659& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminCoursesComponent.vue?vue&type=template&id=3bea0659&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminCoursesComponent_vue_vue_type_template_id_3bea0659___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminCoursesComponent_vue_vue_type_template_id_3bea0659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);
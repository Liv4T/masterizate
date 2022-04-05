(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorCodeStudent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorCodeStudent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_simple_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-simple-drawer */ "./node_modules/vue-simple-drawer/dist/vue-simple-drawer.umd.min.js");
/* harmony import */ var vue_simple_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_simple_drawer__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      classrooms: [],
      open: false,
      steps: [{
        target: '[data-v-step="0"]',
        header: {
          title: 'Mis estudiantes'
        },
        content: "Desde aqui podras <strong>ver el listado de programas con los estudiantes vinculados a cada programa</strong>, solo debes hacer click sobre el nombre del programa y se desplegar\xE1 un listado con los estudiantes vinculados!",
        params: {
          placement: 'bottom',
          // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          enableScrolling: false
        }
      }],
      condition: "my_students"
    };
  },
  components: {
    Drawer: vue_simple_drawer__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  mounted: function mounted() {
    this.getCodes();
  },
  methods: {
    toggle: function toggle() {
      this.open = !this.open;
    },
    getCodes: function getCodes() {
      var _this = this;

      axios.get('getVinculationsTutor').then(function (response) {
        _this.classrooms = response.data;
        console.log(_this.classrooms);
      });
    },
    groupData: function groupData(data) {
      var result = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(data).groupBy("code_vinculated").value();

      this.codes = result;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorCodeStudent.vue?vue&type=template&id=3fd44cc3&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorCodeStudent.vue?vue&type=template&id=3fd44cc3& ***!
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
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-sm-10", attrs: { id: "crud" } },
        [
          _c(
            "div",
            {
              staticClass: "card-header text-center fondo mb-2 row",
              attrs: { "data-v-step": "0" }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticStyle: { "margin-left": "auto" } }, [
                _c("a", { staticClass: "btn", on: { click: _vm.toggle } }, [
                  _c("i", {
                    staticClass: "fa fa-question-circle",
                    staticStyle: { "font-size": "35px", color: "orange" }
                  })
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("tour-configuration", {
            attrs: { step: _vm.steps, condition: _vm.condition }
          }),
          _vm._v(" "),
          _c(
            "Drawer",
            {
              attrs: {
                align: "right",
                maskClosable: true,
                zIndex: 1003,
                closeable: true
              },
              on: { close: _vm.toggle }
            },
            [
              _vm.open
                ? _c("div", [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("h1", [_vm._v("Mis estudiantes")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "El modulo mis estudiantes permite ver a todos los estudiantes vinculados a cada aula de clase."
                          )
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          staticStyle: { "margin-bottom": "10px" },
                          attrs: {
                            src: __webpack_require__(/*! ../assets/img/my_students.png */ "./resources/js/assets/img/my_students.png"),
                            alt: "my_students",
                            width: "350px",
                            height: "350px"
                          }
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Se listan todas las aulas de clase de cada tutor y haciendo click sobre una en especifico se abre un listado de estudiantes vinculados a esa aula."
                          )
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          staticStyle: { "margin-bottom": "10px" },
                          attrs: {
                            src: __webpack_require__(/*! ../assets/img/student_list.png */ "./resources/js/assets/img/student_list.png"),
                            alt: "student_list",
                            width: "350px",
                            height: "350px"
                          }
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "En caso de no haber estudiantes vinculados a un aula de clase se muestra un mensaje notificando que aun no hay estudiantes vinculados en esa aula de clase."
                          )
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          staticStyle: { "margin-bottom": "10px" },
                          attrs: {
                            src: __webpack_require__(/*! ../assets/img/students_nul.png */ "./resources/js/assets/img/students_nul.png"),
                            alt: "students_nul",
                            width: "350px",
                            height: "350px"
                          }
                        })
                      ])
                    ])
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { id: "accordion" } },
            _vm._l(_vm.classrooms, function(classroom, key) {
              return _c("div", { key: key, staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-header", attrs: { id: "headingOne" } },
                  [
                    _c("h5", { staticClass: "mb-0" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-link",
                          attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#collapseOne" + key,
                            "aria-expanded": "true",
                            "aria-controls": "collapseOne" + key
                          }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(classroom.area_name) +
                              "\n                            "
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseOne" + key,
                      "aria-labelledby": "headingOne",
                      "data-parent": "#accordion"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      classroom.students.length > 0
                        ? _c("div", [
                            _c(
                              "table",
                              {
                                staticClass: "table table-striped table-hover"
                              },
                              [
                                _vm._m(1, true),
                                _vm._v(" "),
                                _vm._l(classroom.students, function(
                                  student,
                                  key_s
                                ) {
                                  return _c("tbody", { key: key_s }, [
                                    _c("tr", [
                                      _c("td", [_vm._v(_vm._s(key_s + 1))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(student.student_name))
                                      ])
                                    ])
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        : _c("div", [
                            _c("h3", [_vm._v("No hay estudiantes registrados")])
                          ])
                    ])
                  ]
                )
              ])
            }),
            0
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-center" }, [
      _c("label", { staticClass: "card-text" }, [_vm._v("Mis estudiantes")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombre Estudiante")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/my_students.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/img/my_students.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/my_students.png?4285baf703574926572023f5f4806b83";

/***/ }),

/***/ "./resources/js/assets/img/student_list.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/student_list.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/student_list.png?ca2e45679c65818e9b0801fb4c8cf223";

/***/ }),

/***/ "./resources/js/assets/img/students_nul.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/img/students_nul.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/students_nul.png?d437a3fa8040d586bde020534f724ac9";

/***/ }),

/***/ "./resources/js/components/tutorCodeStudent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/tutorCodeStudent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tutorCodeStudent_vue_vue_type_template_id_3fd44cc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorCodeStudent.vue?vue&type=template&id=3fd44cc3& */ "./resources/js/components/tutorCodeStudent.vue?vue&type=template&id=3fd44cc3&");
/* harmony import */ var _tutorCodeStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorCodeStudent.vue?vue&type=script&lang=js& */ "./resources/js/components/tutorCodeStudent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tutorCodeStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tutorCodeStudent_vue_vue_type_template_id_3fd44cc3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tutorCodeStudent_vue_vue_type_template_id_3fd44cc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tutorCodeStudent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tutorCodeStudent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/tutorCodeStudent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tutorCodeStudent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorCodeStudent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tutorCodeStudent.vue?vue&type=template&id=3fd44cc3&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/tutorCodeStudent.vue?vue&type=template&id=3fd44cc3& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeStudent_vue_vue_type_template_id_3fd44cc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tutorCodeStudent.vue?vue&type=template&id=3fd44cc3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorCodeStudent.vue?vue&type=template&id=3fd44cc3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeStudent_vue_vue_type_template_id_3fd44cc3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorCodeStudent_vue_vue_type_template_id_3fd44cc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FoodComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FoodCreateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoodCreateComponent */ "./resources/js/components/FoodCreateComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    foodCreateComponent: _FoodCreateComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      getDataFoods: []
    };
  },
  mounted: function mounted() {
    this.getFoods();
  },
  methods: {
    getFoods: function getFoods() {
      var _this = this;

      axios.get('getFoods').then(function (response) {
        _this.getDataFoods = response.data;
      });
    },
    groupData: function groupData(data) {
      var result = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(data).groupBy("grade").value();

      this.utils = result;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodCreateComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FoodCreateComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component("multiselect", vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      getDataFoods: [],
      saveStudents: {},
      studentsOptions: [],
      diet: "",
      other_diet: "",
      observation: ""
    };
  },
  mounted: function mounted() {
    this.getCoursesAndStudents();
  },
  methods: {
    getCoursesAndStudents: function getCoursesAndStudents() {
      var _this = this;

      axios.get('getCoursesAndStudents').then(function (response) {
        var coursesStudents = response.data;

        var result = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(coursesStudents).groupBy("grade").value();

        var students = Object.values(result);
        students.forEach(function (element) {
          console.log();
          element.forEach(function (el) {
            _this.studentsOptions.push({
              id: el.id_student,
              id_student: el.id_student,
              text: "".concat(el.name_student) + '' + "".concat(el.lastName_student),
              grade: el.grade,
              id_grade: el.id_grade,
              id_classroom: el.id_classroom
            });
          });
        });
      });
    },
    saveFood: function saveFood() {
      console.log({
        name_student: this.saveStudents.text,
        diet: this.diet === 'otro' ? this.other_diet : this.diet,
        observation: this.observation,
        id_classroom: this.saveStudents.id_classroom,
        id_course: this.saveStudents.id_grade,
        course: this.saveStudents.grade
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodComponent.vue?vue&type=template&id=ae99c338&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FoodComponent.vue?vue&type=template&id=ae99c338& ***!
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
  return _c("div", { staticClass: "back row justify-content-center" }, [
    _c("div", { staticClass: "col-sm-10" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "mb-4 btn btn-primary",
          attrs: { "data-toggle": "modal", "data-target": "#modalFoodCreate" }
        },
        [_vm._v("Crear Registro")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "accordion" } },
        [_vm._m(1), _vm._v(" "), _c("food-create-component")],
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
    return _c("div", { staticClass: "card text-center" }, [
      _c("div", { staticClass: "card-header fondo" }, [
        _c("h4", [_vm._v("Alimentos")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header", attrs: { id: "headingOne" } }, [
        _c("h5", { staticClass: "mb-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link",
              attrs: {
                "data-toggle": "collapse",
                "data-target": "#collapseOne",
                "aria-expanded": "true",
                "aria-controls": "collapseOne"
              }
            },
            [
              _vm._v(
                "\n                    Collapsible Group Item #1\n                    "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse show",
          attrs: {
            id: "collapseOne",
            "aria-labelledby": "headingOne",
            "data-parent": "#accordion"
          }
        },
        [
          _c("div", { staticClass: "card-body" }, [
            _vm._v(
              "\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                "
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodCreateComponent.vue?vue&type=template&id=3ccbaf88&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FoodCreateComponent.vue?vue&type=template&id=3ccbaf88& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "modalFoodCreate",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "modalFoodCreateLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { attrs: { for: "" } }, [_vm._v("Estudiante")]),
                _vm._v(" "),
                _c("multiselect", {
                  attrs: {
                    options: _vm.studentsOptions,
                    multiple: false,
                    "close-on-select": false,
                    "clear-on-select": false,
                    "preserve-search": true,
                    placeholder: "Seleccione una o varias",
                    label: "text",
                    "track-by": "id",
                    "preselect-first": true
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "selection",
                      fn: function(ref) {
                        var values = ref.values
                        var isOpen = ref.isOpen
                        return [
                          values.length && !isOpen
                            ? _c(
                                "span",
                                { staticClass: "multiselect__single" },
                                [
                                  _vm._v(
                                    _vm._s(values.length) +
                                      " \n                                        opciones\n                                        selecionadas\n                                "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.saveStudents,
                    callback: function($$v) {
                      _vm.saveStudents = $$v
                    },
                    expression: "saveStudents"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "dieta" } }, [_vm._v("Alimento")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.diet,
                      expression: "diet"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "dieta" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.diet = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "Normal" } }, [
                    _vm._v(
                      "\n                            Normal\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "Vegetariano" } }, [
                    _vm._v(
                      "\n                            Vegetariano\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "otro" } }, [
                    _vm._v(
                      "\n                            Otro\n                        "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.diet === "otro"
                ? _c("div", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.other_diet,
                          expression: "other_diet"
                        }
                      ],
                      staticClass: "form-control mt-2",
                      attrs: { type: "text", placeholder: "Ej: Veganismo" },
                      domProps: { value: _vm.other_diet },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.other_diet = $event.target.value
                        }
                      }
                    })
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "observation" } }, [
                _vm._v("Observación")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.observation,
                    expression: "observation"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "observation" },
                domProps: { value: _vm.observation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.observation = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [_vm._v("Close")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button" },
                on: { click: _vm.saveFood }
              },
              [_vm._v("Save changes")]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "modalFoodCreateLabel" } },
        [_vm._v("Creación de Alimentos")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FoodComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/FoodComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoodComponent_vue_vue_type_template_id_ae99c338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoodComponent.vue?vue&type=template&id=ae99c338& */ "./resources/js/components/FoodComponent.vue?vue&type=template&id=ae99c338&");
/* harmony import */ var _FoodComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoodComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/FoodComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FoodComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FoodComponent_vue_vue_type_template_id_ae99c338___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FoodComponent_vue_vue_type_template_id_ae99c338___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FoodComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FoodComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FoodComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FoodComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FoodComponent.vue?vue&type=template&id=ae99c338&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FoodComponent.vue?vue&type=template&id=ae99c338& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodComponent_vue_vue_type_template_id_ae99c338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FoodComponent.vue?vue&type=template&id=ae99c338& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodComponent.vue?vue&type=template&id=ae99c338&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodComponent_vue_vue_type_template_id_ae99c338___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodComponent_vue_vue_type_template_id_ae99c338___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FoodCreateComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/FoodCreateComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoodCreateComponent_vue_vue_type_template_id_3ccbaf88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoodCreateComponent.vue?vue&type=template&id=3ccbaf88& */ "./resources/js/components/FoodCreateComponent.vue?vue&type=template&id=3ccbaf88&");
/* harmony import */ var _FoodCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoodCreateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/FoodCreateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FoodCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FoodCreateComponent_vue_vue_type_template_id_3ccbaf88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FoodCreateComponent_vue_vue_type_template_id_3ccbaf88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FoodCreateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FoodCreateComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FoodCreateComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FoodCreateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodCreateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FoodCreateComponent.vue?vue&type=template&id=3ccbaf88&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/FoodCreateComponent.vue?vue&type=template&id=3ccbaf88& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodCreateComponent_vue_vue_type_template_id_3ccbaf88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FoodCreateComponent.vue?vue&type=template&id=3ccbaf88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodCreateComponent.vue?vue&type=template&id=3ccbaf88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodCreateComponent_vue_vue_type_template_id_3ccbaf88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodCreateComponent_vue_vue_type_template_id_3ccbaf88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
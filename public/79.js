(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

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
/* harmony import */ var _FoodUpdateComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FoodUpdateComponent */ "./resources/js/components/FoodUpdateComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    foodCreateComponent: _FoodCreateComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    foodUpdateComponent: _FoodUpdateComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      getDataFoods: [],
      saveStudents: {},
      id_to_update: "",
      diet: "",
      other_diet: "",
      observation: ""
    };
  },
  mounted: function mounted() {
    this.getFoods();
  },
  methods: {
    getFoods: function getFoods() {
      var _this = this;

      axios.get('getFoods').then(function (response) {
        var getDataFoods = response.data;

        _this.groupData(getDataFoods);
      });
    },
    groupData: function groupData(data) {
      var result = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(data).groupBy("course").value();

      this.getDataFoods = result;
    },
    editFood: function editFood(data) {
      this.id_to_update = data.id, this.saveStudents = {
        id: data.id_student,
        id_student: data.id_student,
        text: "".concat(data.name_student),
        grade: data.course,
        id_grade: data.id_course,
        id_classroom: data.id_classroom
      };

      if (data.diet !== 'Normal' || data.diet !== 'Vegetariano') {
        this.diet = 'otro';
        this.other_diet = data.diet;
      } else {
        this.diet = data.diet;
      }

      this.observation = data.observation;
      $("#modalFoodUpdate").modal('show');
    },
    deleteFood: function deleteFood(id) {
      var _this2 = this;

      if (window.confirm("Desea Eliminar El dato?")) {
        axios["delete"]("foods/".concat(id)).then(function (response) {
          toastr.info(response.data);

          _this2.getFoods();
        });
      }
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
        [
          _vm._l(_vm.getDataFoods, function(food, key) {
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
                          "data-target": "#collapse" + key,
                          "aria-expanded": "true",
                          "aria-controls": "collapse" + key
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(key) +
                            "\n                    "
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
                  staticClass: "collapse show",
                  attrs: {
                    id: "collapse" + key,
                    "aria-labelledby": "headingOne",
                    "data-parent": "#accordion"
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "table",
                      { staticClass: "table table-striped table-hover" },
                      [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(food, function(fod, key) {
                            return _c("tr", { key: key }, [
                              _c("td", [_vm._v(_vm._s(fod.name_student))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(fod.diet))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(fod.observation))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    on: {
                                      click: function($event) {
                                        return _vm.editFood(fod)
                                      }
                                    }
                                  },
                                  [_vm._v("Editar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger",
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteFood(fod.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Eliminar")]
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          }),
          _vm._v(" "),
          _c("food-create-component"),
          _vm._v(" "),
          _c("food-update-component", {
            attrs: {
              saveStudents: _vm.saveStudents,
              diet: _vm.diet,
              other_diet: _vm.other_diet,
              observation: _vm.observation,
              id_to_update: _vm.id_to_update
            }
          })
        ],
        2
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dieta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Observación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
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



/***/ })

}]);
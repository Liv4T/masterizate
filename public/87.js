(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MateriasCoord.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MateriasCoord.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["user"],
  data: function data() {
    return {
      materias: []
    };
  },
  mounted: function mounted() {
    this.getMaterias();
  },
  methods: {
    getMaterias: function getMaterias() {
      var _this = this;

      if (this.user.new_coord_area === "Primaria") {
        axios.get('showPrimaryStudents').then(function (response) {
          _this.groupData(response.data);
        });
      } else if (this.user.new_coord_area === "Secundaria") {
        axios.get('showSecundaryStudents').then(function (response) {
          _this.groupData(response.data);
        });
      } else if (this.user.new_coord_area === "General") {
        axios.get('showStudentsGrade').then(function (response) {
          _this.groupData(response.data);
        });
      }
    },
    groupData: function groupData(data) {
      var result = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(data).groupBy("grade").value();

      this.materias = result;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MateriasCoord.vue?vue&type=template&id=a8c8fae8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MateriasCoord.vue?vue&type=template&id=a8c8fae8& ***!
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
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "div",
            { attrs: { id: "accordion" } },
            _vm._l(_vm.materias, function(materias, grade) {
              return _c("div", { key: grade, staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-header", attrs: { id: "" + grade } },
                  [
                    _c("h5", { staticClass: "mb-0" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-link",
                          attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#heading" + grade,
                            "aria-expanded": "true",
                            "aria-controls": "collapseOne"
                          }
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(grade) +
                              "\n                                "
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
                    staticClass: "collapse hide",
                    attrs: {
                      id: "heading" + grade,
                      "aria-labelledby": "" + grade,
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
                          _vm._l(materias, function(mat, key) {
                            return _c("tbody", { key: key }, [
                              _c("tr", [
                                _c("td", [_vm._v(_vm._s(mat.materia))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      mat.teacher_name +
                                        " " +
                                        mat.teacher_lastName
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(mat.annual_planification))
                                ])
                              ])
                            ])
                          })
                        ],
                        2
                      )
                    ])
                  ]
                )
              ])
            }),
            0
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
    return _c("div", { staticClass: "card text-center" }, [
      _c("div", { staticClass: "card-header fondo" }, [
        _c("h4", [_vm._v("Materias")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Materia")]),
        _vm._v(" "),
        _c("th", [_vm._v("Profesor")]),
        _vm._v(" "),
        _c("th", [_vm._v("Planificación Anual")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/MateriasCoord.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/MateriasCoord.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MateriasCoord_vue_vue_type_template_id_a8c8fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MateriasCoord.vue?vue&type=template&id=a8c8fae8& */ "./resources/js/components/MateriasCoord.vue?vue&type=template&id=a8c8fae8&");
/* harmony import */ var _MateriasCoord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MateriasCoord.vue?vue&type=script&lang=js& */ "./resources/js/components/MateriasCoord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MateriasCoord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MateriasCoord_vue_vue_type_template_id_a8c8fae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MateriasCoord_vue_vue_type_template_id_a8c8fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MateriasCoord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MateriasCoord.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/MateriasCoord.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MateriasCoord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MateriasCoord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MateriasCoord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MateriasCoord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MateriasCoord.vue?vue&type=template&id=a8c8fae8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/MateriasCoord.vue?vue&type=template&id=a8c8fae8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MateriasCoord_vue_vue_type_template_id_a8c8fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MateriasCoord.vue?vue&type=template&id=a8c8fae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MateriasCoord.vue?vue&type=template&id=a8c8fae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MateriasCoord_vue_vue_type_template_id_a8c8fae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MateriasCoord_vue_vue_type_template_id_a8c8fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
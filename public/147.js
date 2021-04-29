(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "back row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10" }, [
        _c("div", { staticClass: "card text-center" }, [
          _c("div", { staticClass: "card-header fondo" }, [
            _c("h4", [_vm._v("Alimentos")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "mb-4 btn btn-primary",
            attrs: { "data-toggle": "modal", "data-target": "#exampleModal" }
          },
          [_vm._v("Crear Registro")]
        ),
        _vm._v(" "),
        _c("div", { attrs: { id: "accordion" } }, [
          _c("div", { staticClass: "card" }, [
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
              ]
            ),
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
        ])
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
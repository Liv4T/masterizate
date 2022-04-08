(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[198],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vueTourConfiguration.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vueTourConfiguration.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['step', 'condition'],
  data: function data() {
    return {
      steps: this.step,
      errors: []
    };
  },
  mounted: function mounted() {
    console.log(this.steps);
    this.enableTour();
  },
  methods: {
    enableTour: function enableTour() {
      var _this = this;

      var url = "/enableTour/" + this.condition;
      axios.get(url).then(function (response) {
        if (response.data) {
          _this.$tours['myTour'].start();
        }
      })["catch"](function (error) {
        _this.errors = error.response.data;
      });
    },
    disableTour: function disableTour() {
      var _this2 = this;

      var url = "/disableTour/" + this.condition;
      axios.put(url).then(function (response) {
        _this2.errors = [];

        _this2.$tours['myTour'].stop();
      })["catch"](function (error) {
        console.log(error);
        _this2.errors = error.response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vueTourConfiguration.vue?vue&type=template&id=3303fd63&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vueTourConfiguration.vue?vue&type=template&id=3303fd63& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("v-tour", {
    attrs: { name: "myTour", steps: _vm.steps },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(tour) {
          return [
            _c(
              "transition",
              { attrs: { name: "fade" } },
              [
                tour.steps[tour.currentStep]
                  ? _c(
                      "v-step",
                      {
                        key: tour.currentStep,
                        attrs: {
                          step: tour.steps[tour.currentStep],
                          "previous-step": tour.previousStep,
                          "next-step": tour.nextStep,
                          stop: tour.stop,
                          skip: tour.skip,
                          "is-first": tour.isFirst,
                          "is-last": tour.isLast,
                          labels: tour.labels
                        }
                      },
                      [
                        tour.isLast
                          ? [
                              _c(
                                "div",
                                { attrs: { slot: "actions" }, slot: "actions" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "v-step__button",
                                      on: { click: tour.previousStep }
                                    },
                                    [_vm._v("Anterior")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "v-step__button",
                                      on: { click: _vm.disableTour }
                                    },
                                    [_vm._v("Finalizar")]
                                  )
                                ]
                              )
                            ]
                          : [
                              _c(
                                "div",
                                { attrs: { slot: "actions" }, slot: "actions" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "v-step__button",
                                      on: { click: tour.previousStep }
                                    },
                                    [_vm._v("Anterior")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "v-step__button",
                                      on: { click: tour.nextStep }
                                    },
                                    [_vm._v("Siguiente")]
                                  )
                                ]
                              )
                            ]
                      ],
                      2
                    )
                  : _vm._e()
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/vueTourConfiguration.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/vueTourConfiguration.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vueTourConfiguration_vue_vue_type_template_id_3303fd63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vueTourConfiguration.vue?vue&type=template&id=3303fd63& */ "./resources/js/components/vueTourConfiguration.vue?vue&type=template&id=3303fd63&");
/* harmony import */ var _vueTourConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vueTourConfiguration.vue?vue&type=script&lang=js& */ "./resources/js/components/vueTourConfiguration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vueTourConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vueTourConfiguration_vue_vue_type_template_id_3303fd63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vueTourConfiguration_vue_vue_type_template_id_3303fd63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vueTourConfiguration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vueTourConfiguration.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/vueTourConfiguration.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueTourConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./vueTourConfiguration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vueTourConfiguration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueTourConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vueTourConfiguration.vue?vue&type=template&id=3303fd63&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/vueTourConfiguration.vue?vue&type=template&id=3303fd63& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vueTourConfiguration_vue_vue_type_template_id_3303fd63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./vueTourConfiguration.vue?vue&type=template&id=3303fd63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vueTourConfiguration.vue?vue&type=template&id=3303fd63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vueTourConfiguration_vue_vue_type_template_id_3303fd63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vueTourConfiguration_vue_vue_type_template_id_3303fd63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
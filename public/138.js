(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equationComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/equationComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mathlive_dist_mathlive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mathlive/dist/mathlive */ "./node_modules/mathlive/dist/mathlive.mjs");
/* harmony import */ var mathlive_dist_vue_mathlive_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathlive/dist/vue-mathlive.mjs */ "./node_modules/mathlive/dist/vue-mathlive.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(mathlive_dist_vue_mathlive_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], mathlive_dist_mathlive__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["content"],
  data: function data() {
    return {
      content_editor: "",
      keystroke: "",
      formula: ""
    };
  },
  methods: {
    ping: function ping() {
      console.log("ping");
    },
    displayKeystroke: function displayKeystroke(keystroke, _ev) {
      this.keystroke = keystroke;
      return true;
    },
    asSpokenText: function asSpokenText() {
      return this.$refs.mathfield ? this.$refs.mathfield.getValue("spoken") : "";
    },
    method_executed: function method_executed() {
      this.$emit('updateText', this.content_editor);
    }
  },
  mounted: function mounted() {
    this.content_editor = this.content;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equationComponent.vue?vue&type=template&id=5bb9b054&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/equationComponent.vue?vue&type=template&id=5bb9b054& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "mathlive-mathfield",
        {
          ref: "mathfield",
          attrs: {
            id: "mf",
            options: {
              smartFence: false,
              virtualKeyboardMode: "manual",
              virtualKeyboardTheme: "material"
            },
            "on-keystroke": _vm.displayKeystroke
          },
          on: { input: _vm.method_executed },
          model: {
            value: _vm.content_editor,
            callback: function($$v) {
              _vm.content_editor = $$v
            },
            expression: "content_editor"
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.content_editor) + "\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/equationComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/equationComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _equationComponent_vue_vue_type_template_id_5bb9b054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equationComponent.vue?vue&type=template&id=5bb9b054& */ "./resources/js/components/equationComponent.vue?vue&type=template&id=5bb9b054&");
/* harmony import */ var _equationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/equationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _equationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _equationComponent_vue_vue_type_template_id_5bb9b054___WEBPACK_IMPORTED_MODULE_0__["render"],
  _equationComponent_vue_vue_type_template_id_5bb9b054___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/equationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/equationComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/equationComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_equationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./equationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_equationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/equationComponent.vue?vue&type=template&id=5bb9b054&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/equationComponent.vue?vue&type=template&id=5bb9b054& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_equationComponent_vue_vue_type_template_id_5bb9b054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./equationComponent.vue?vue&type=template&id=5bb9b054& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equationComponent.vue?vue&type=template&id=5bb9b054&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_equationComponent_vue_vue_type_template_id_5bb9b054___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_equationComponent_vue_vue_type_template_id_5bb9b054___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
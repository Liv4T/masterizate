(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notificationComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      events: []
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/event/today').then(function (response) {
      _this.events = response.data;
      var spanCounter = document.getElementById('span-counter');
      spanCounter.innerHTML = _this.events.length;
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "dropdown-menu dropdown-menu-right",
        attrs: { "aria-labelledby": "navbarDropdown" }
      },
      _vm._l(_vm.events, function(event, k_event) {
        return _c(
          "a",
          {
            key: k_event,
            staticClass: "dropdown-item",
            attrs: { href: event.hangout }
          },
          [
            _vm._v(
              "[" +
                _vm._s(event.area) +
                " " +
                _vm._s(event.classroom) +
                "] " +
                _vm._s(event.name)
            )
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        pre: true,
        attrs: {
          id: "navbarDropdown",
          class: "nav-link dropdown-toggle",
          href: "#",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", {
          pre: true,
          attrs: { style: "color:#ffc039", class: "fas fa-bell" }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            pre: true,
            attrs: { id: "span-counter", class: "badge badge-light" }
          },
          [_vm._v("0")]
        ),
        _vm._v(" "),
        _c("span", { pre: true, attrs: { class: "caret" } })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/notificationComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/notificationComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationComponent.vue?vue&type=template&id=92f71bd2& */ "./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2&");
/* harmony import */ var _notificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/notificationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notificationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/notificationComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/notificationComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./notificationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./notificationComponent.vue?vue&type=template&id=92f71bd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabComunication.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabComunication.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
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
      activetab: null,
      type_u: null,
      groups: [],
      htmlForum: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.type_u = this.user.type_user;
    axios.get('/chat2').then(function (response) {
      _this.groups = response.data;
    });
    axios.get('questions').then(function (response) {
      _this.htmlForum = response.data;
    });
  },
  methods: {
    showSection: function showSection(section) {
      this.activetab = section;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabComunication.vue?vue&type=template&id=a51df28a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabComunication.vue?vue&type=template&id=a51df28a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "form-group width-r mx-auto" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "tabs" }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("messages")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Mensajes")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("calendar")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Calendario")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("foro")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Foro")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.showSection("chat")
                  }
                }
              },
              [
                _c("h4", { staticClass: "letra-poppins-bold" }, [
                  _vm._v("Chat")
                ])
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-11 mx-auto text-center", attrs: { id: "tabs" } },
        [
          _vm.activetab === "messages"
            ? _c(
                "div",
                [_c("mensajes-component", { attrs: { user: _vm.user } })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.activetab === "calendar"
            ? _c(
                "div",
                [
                  _c("calendar-component", {
                    attrs: { type_u: _vm.type_u, user: _vm.user }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.activetab === "foro"
            ? _c("div", [
                _c("div", { domProps: { innerHTML: _vm._s(_vm.htmlForum) } })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.activetab === "chat"
            ? _c(
                "div",
                [
                  _c("groups", {
                    attrs: { "initial-groups": _vm.groups, user: _vm.user }
                  })
                ],
                1
              )
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tabComunication.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/tabComunication.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabComunication_vue_vue_type_template_id_a51df28a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabComunication.vue?vue&type=template&id=a51df28a& */ "./resources/js/components/tabComunication.vue?vue&type=template&id=a51df28a&");
/* harmony import */ var _tabComunication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabComunication.vue?vue&type=script&lang=js& */ "./resources/js/components/tabComunication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabComunication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabComunication_vue_vue_type_template_id_a51df28a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabComunication_vue_vue_type_template_id_a51df28a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tabComunication.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tabComunication.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/tabComunication.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tabComunication.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabComunication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tabComunication.vue?vue&type=template&id=a51df28a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/tabComunication.vue?vue&type=template&id=a51df28a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_template_id_a51df28a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tabComunication.vue?vue&type=template&id=a51df28a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabComunication.vue?vue&type=template&id=a51df28a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_template_id_a51df28a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_template_id_a51df28a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
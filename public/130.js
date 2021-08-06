(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeLanguageComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/changeLanguageComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  created: function created() {},
  mounted: function mounted() {
    this.typeUser();
  },
  methods: {
    typeUser: function typeUser() {
      var _this = this;

      var url = "userType";
      axios.get(url).then(function (response) {
        if (response.data == 3) {
          _this.$i18n.locale = "en";
          _this.$i18n.fallbackLocale = "en";
        }
      });
    },
    changeLanguage: function changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.$i18n.fallbackLocale = lang;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeLanguageComponent.vue?vue&type=template&id=66f593ba&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/changeLanguageComponent.vue?vue&type=template&id=66f593ba& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "li",
    {
      staticClass: "nav-link dropdown-toggle nav-item dropdown",
      attrs: {
        id: "navbarDropdown",
        href: "#",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }
    },
    [
      _c(
        "button",
        {
          staticClass: "btn btn-default btn-2xd btn-sm btn-circle",
          staticStyle: { padding: "0px" }
        },
        [
          _c("img", {
            staticStyle: { width: "26px" },
            attrs: { src: "images/" + _vm.$i18n.locale + ".svg", alt: "" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "dropdown-menu dropdown-menu-right",
          attrs: { "aria-labelledby": "navbarDropdown" }
        },
        [
          _c("li", [
            _c(
              "a",
              {
                attrs: { href: "" },
                on: {
                  click: function($event) {
                    return _vm.changeLanguage("es")
                  }
                }
              },
              [
                _c("img", { attrs: { src: "images/es.svg", alt: "" } }),
                _vm._v(" "),
                _c("span", { staticStyle: { color: "black" } }, [
                  _vm._v("Español")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: { href: "" },
                on: {
                  click: function($event) {
                    return _vm.changeLanguage("en")
                  }
                }
              },
              [
                _c("img", { attrs: { src: "images/en.svg", alt: "" } }),
                _vm._v(" "),
                _c("span", { staticStyle: { color: "black" } }, [
                  _vm._v("English")
                ])
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/changeLanguageComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/changeLanguageComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changeLanguageComponent_vue_vue_type_template_id_66f593ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeLanguageComponent.vue?vue&type=template&id=66f593ba& */ "./resources/js/components/changeLanguageComponent.vue?vue&type=template&id=66f593ba&");
/* harmony import */ var _changeLanguageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeLanguageComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/changeLanguageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _changeLanguageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _changeLanguageComponent_vue_vue_type_template_id_66f593ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _changeLanguageComponent_vue_vue_type_template_id_66f593ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/changeLanguageComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/changeLanguageComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/changeLanguageComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changeLanguageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./changeLanguageComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeLanguageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changeLanguageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/changeLanguageComponent.vue?vue&type=template&id=66f593ba&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/changeLanguageComponent.vue?vue&type=template&id=66f593ba& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeLanguageComponent_vue_vue_type_template_id_66f593ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./changeLanguageComponent.vue?vue&type=template&id=66f593ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeLanguageComponent.vue?vue&type=template&id=66f593ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeLanguageComponent_vue_vue_type_template_id_66f593ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeLanguageComponent_vue_vue_type_template_id_66f593ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
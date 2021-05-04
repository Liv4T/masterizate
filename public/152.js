(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[152],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newMenuSchoolGov.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newMenuSchoolGov.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    logout: function logout() {
      axios.post("logout").then(function (response) {
        if (response.status === 302 || 401) {
          window.location.href = "/login";
        } else {// throw error and go to catch block
        }
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newMenuSchoolGov.vue?vue&type=template&id=c69f7e34&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newMenuSchoolGov.vue?vue&type=template&id=c69f7e34& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "a",
        { staticClass: "btn btn-secondary", attrs: { href: "/perfil_d" } },
        [_vm._v("\n        Mi Perfil\n    ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-secondary dropdown-toggle",
            attrs: {
              type: "button",
              id: "comunication",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            }
          },
          [_vm._v("\n            Comunicaciones\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu",
            attrs: { "aria-labelledby": "comunication" }
          },
          [
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/mensajes" } },
              [_vm._v("Mensajes")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/chat" } },
              [_vm._v("Chat")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-secondary",
          attrs: { href: "/governmentMembers" }
        },
        [_vm._v("\n        Quienes lo Conforman\n    ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "btn btn-secondary", attrs: { href: "/legislation" } },
        [_vm._v("\n        Legislación\n    ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "btn btn-secondary", attrs: { href: "/staments" } },
        [_vm._v("\n        Estamentos Escolares\n    ")]
      ),
      _vm._v(" "),
      _c("a", { staticClass: "btn btn-secondary", attrs: { href: "#" } }, [
        _vm._v("\n        Actas y Circulares\n    ")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "btn btn-secondary", attrs: { href: "manual" } }, [
        _vm._v("\n        PEI Y Manual de Convivencia\n    ")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-secondary",
          attrs: { href: "../../uploads/Terminos _Condiciones_liv4t.pdf" }
        },
        [_vm._v("\n        Terminos y Condiciones\n    ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/newMenuSchoolGov.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/newMenuSchoolGov.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newMenuSchoolGov_vue_vue_type_template_id_c69f7e34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newMenuSchoolGov.vue?vue&type=template&id=c69f7e34& */ "./resources/js/components/newMenuSchoolGov.vue?vue&type=template&id=c69f7e34&");
/* harmony import */ var _newMenuSchoolGov_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newMenuSchoolGov.vue?vue&type=script&lang=js& */ "./resources/js/components/newMenuSchoolGov.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newMenuSchoolGov_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newMenuSchoolGov_vue_vue_type_template_id_c69f7e34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newMenuSchoolGov_vue_vue_type_template_id_c69f7e34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/newMenuSchoolGov.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/newMenuSchoolGov.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/newMenuSchoolGov.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuSchoolGov_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./newMenuSchoolGov.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newMenuSchoolGov.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuSchoolGov_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/newMenuSchoolGov.vue?vue&type=template&id=c69f7e34&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/newMenuSchoolGov.vue?vue&type=template&id=c69f7e34& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuSchoolGov_vue_vue_type_template_id_c69f7e34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./newMenuSchoolGov.vue?vue&type=template&id=c69f7e34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newMenuSchoolGov.vue?vue&type=template&id=c69f7e34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuSchoolGov_vue_vue_type_template_id_c69f7e34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuSchoolGov_vue_vue_type_template_id_c69f7e34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[201],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.boton-conoce-mas{\n    position: absolute;\n    z-index: 2;\n    left: 1000px;\n    top: 650px;\n}\n.btn-conoce-mas{\n    background:#f93636;\n    height: 60px;\n    width: 190px;\n    font-size: 25px;\n    color: white;\n}\n.phone {\n    display: none;\n}\n.whatsapp {\n    position:fixed;\n    width:60px;\n    height:60px;\n    bottom:40px;\n    right:40px;\n    background-color:#25d366;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    font-size:30px;\n    z-index:100;\n}\n.whatsapp a{\n      color: white;\n}\n.whatsapp-icon {\n    margin-top:13px;\n}\n@media (max-width: 600px) {\n.boton-conoce-mas{\n        position: absolute;\n        z-index: 2;\n        left: 10px;\n        top: 370px;\n}\n.btn-conoce-mas{\n        background:#f93636;\n        height: 30px;\n        width: 90px;\n        font-size: 9px;\n}\n.phone {\n        display: block;\n}\n.desktop {\n        display: none;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landingCanadaHighComponent.vue?vue&type=template&id=96d4057e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landingCanadaHighComponent.vue?vue&type=template&id=96d4057e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    return _c("div", [
      _c("div", { staticClass: "desktop" }, [
        _c("div", { staticClass: "row img-canada" }, [
          _c("a", { attrs: { href: "" } }, [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../assets/img/landing-canada-high.png */ "./resources/js/assets/img/landing-canada-high.png"),
                alt: "Estuia_canada"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "boton-conoce-mas",
            staticStyle: { padding: "0", margin: "0" }
          },
          [
            _c(
              "a",
              {
                staticClass: "btn btn-conoce-mas",
                attrs: {
                  href:
                    "https://wa.me/57317575606?text=Me%20gustaría%20saber%20más%20sobre%20Canada",
                  target: "_blank"
                }
              },
              [_vm._v("Conoce más")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "phone" }, [
        _c("div", { staticClass: "img-canada" }, [
          _c("a", { attrs: { href: "" } }, [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../assets/img/landing-canada-high-phone.jpeg */ "./resources/js/assets/img/landing-canada-high-phone.jpeg"),
                alt: "Estuia_canada"
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "a",
          {
            staticClass: "whatsapp",
            attrs: {
              href:
                "https://wa.me/57317575606?text=Me%20gustaría%20saber%20más%20sobre%20Canada",
              target: "_blank"
            }
          },
          [_c("i", { staticClass: "fa fa-whatsapp whatsapp-icon" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/landing-canada-high-phone.jpeg":
/*!****************************************************************!*\
  !*** ./resources/js/assets/img/landing-canada-high-phone.jpeg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/landing-canada-high-phone.jpeg?f7d53f3c1650d541e3851889cd850072";

/***/ }),

/***/ "./resources/js/assets/img/landing-canada-high.png":
/*!*********************************************************!*\
  !*** ./resources/js/assets/img/landing-canada-high.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/landing-canada-high.png?c373a03c7bfeb063ba4ec7a9d1515837";

/***/ }),

/***/ "./resources/js/components/landingCanadaHighComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/landingCanadaHighComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landingCanadaHighComponent_vue_vue_type_template_id_96d4057e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingCanadaHighComponent.vue?vue&type=template&id=96d4057e& */ "./resources/js/components/landingCanadaHighComponent.vue?vue&type=template&id=96d4057e&");
/* harmony import */ var _landingCanadaHighComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _landingCanadaHighComponent_vue_vue_type_template_id_96d4057e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _landingCanadaHighComponent_vue_vue_type_template_id_96d4057e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/landingCanadaHighComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landingCanadaHighComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/landingCanadaHighComponent.vue?vue&type=template&id=96d4057e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/landingCanadaHighComponent.vue?vue&type=template&id=96d4057e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_template_id_96d4057e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./landingCanadaHighComponent.vue?vue&type=template&id=96d4057e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landingCanadaHighComponent.vue?vue&type=template&id=96d4057e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_template_id_96d4057e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landingCanadaHighComponent_vue_vue_type_template_id_96d4057e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
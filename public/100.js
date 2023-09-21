(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/theaterLandingComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/theaterLandingComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flux */ "./node_modules/vue-flux/dist/vue-flux.umd.min.js");
/* harmony import */ var vue_flux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flux__WEBPACK_IMPORTED_MODULE_1__);
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
    VueFlux: vue_flux__WEBPACK_IMPORTED_MODULE_1__["VueFlux"],
    FluxImages: vue_flux__WEBPACK_IMPORTED_MODULE_1__["FluxImages"],
    FluxCaption: vue_flux__WEBPACK_IMPORTED_MODULE_1__["FluxCaption"],
    FluxControls: vue_flux__WEBPACK_IMPORTED_MODULE_1__["FluxControls"],
    FluxIndex: vue_flux__WEBPACK_IMPORTED_MODULE_1__["FluxIndex"],
    FluxPagination: vue_flux__WEBPACK_IMPORTED_MODULE_1__["FluxPagination"],
    FluxPreloader: vue_flux__WEBPACK_IMPORTED_MODULE_1__["FluxPreloader"]
  },
  data: function data() {
    return {
      options: {
        allowFullscreen: false,
        allowToSkipTransition: false,
        autohideTime: 2500,
        autoplay: true,
        bindKeys: false,
        delay: 18000,
        enableGestures: false,
        infinite: true,
        lazyLoad: true,
        lazyLoadAfter: 3 //aspectRatio: '4:5',

      },
      images: [],
      transitions: ['cube']
    };
  },
  mounted: function mounted() {
    this.screenWidth();
  },
  computed: {},
  methods: {
    screenWidth: function screenWidth() {
      if (screen.width < 600) {
        this.images = ['/images/teatro1_phone.png', '/images/teatro2_phone.png', '/images/teatro3_phone.png'];
      } else {
        this.images = ['/images/teatro1.png', '/images/teatro2.png', '/images/teatro3.png'];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.phone {\n    display: none;\n}\n.whatsapp a{\n    color: white;\n}\n.whatsapp-icon {\n    margin-top:13px;\n}\n.vue-flux{\n    width: 1280px;\n    height: 1020px;\n    background-position: 0px 0px !important;\n}\n.flux-image{\n    width: 100% !important;\n    height: 1020px !important;\n    background-size: 100% 1020px !important;\n    background-position: bottom;\n}\n@media (max-width: 600px) {\n.desktop {\n        display: none;\n}\n.phone {\n        display: block;\n}\n.whatsapp a{\n    color: white;\n}\n.whatsapp-icon {\n        margin-top:13px;\n}\n.vue-flux{\n        width: 390px;\n        height: 840px;\n        background-position: 0px 0px !important;\n}\n.flux-image{\n        width: 100% !important;\n        height: 840px !important;\n        background-size: 100% 840px !important;\n        background-position: 0px 0px !important;\n        background-position: bottom;\n}\n}\n  ", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./theaterLandingComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/theaterLandingComponent.vue?vue&type=template&id=155faa48&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/theaterLandingComponent.vue?vue&type=template&id=155faa48& ***!
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
  return _c("div", [
    _c("div", { staticClass: "desktop" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-lg-12",
            staticStyle: { padding: "20px 0px 10px 0px", "margin-left": "50px" }
          },
          [
            _c("vue-flux", {
              attrs: {
                images: _vm.images,
                options: _vm.options,
                transitions: _vm.transitions
              },
              scopedSlots: _vm._u([
                {
                  key: "preloader",
                  fn: function() {
                    return [_c("flux-preloader")]
                  },
                  proxy: true
                },
                {
                  key: "controls",
                  fn: function() {
                    return [_c("flux-controls")]
                  },
                  proxy: true
                },
                {
                  key: "pagination",
                  fn: function() {
                    return [_c("flux-pagination")]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "phone" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c("vue-flux", {
              attrs: {
                images: _vm.images,
                options: _vm.options,
                transitions: _vm.transitions
              },
              scopedSlots: _vm._u([
                {
                  key: "preloader",
                  fn: function() {
                    return [_c("flux-preloader")]
                  },
                  proxy: true
                },
                {
                  key: "controls",
                  fn: function() {
                    return [_c("flux-controls")]
                  },
                  proxy: true
                },
                {
                  key: "pagination",
                  fn: function() {
                    return [_c("flux-pagination")]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        {
          staticClass: "whatsapp",
          attrs: {
            href:
              "https://wa.me/573165268709?text=Me%20gustaría%20saber%20más%20de%20los%20planes",
            target: "_blank"
          }
        },
        [_c("i", { staticClass: "fa fa-whatsapp whatsapp-icon" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/theaterLandingComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/theaterLandingComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theaterLandingComponent_vue_vue_type_template_id_155faa48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theaterLandingComponent.vue?vue&type=template&id=155faa48& */ "./resources/js/components/theaterLandingComponent.vue?vue&type=template&id=155faa48&");
/* harmony import */ var _theaterLandingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theaterLandingComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/theaterLandingComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _theaterLandingComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theaterLandingComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _theaterLandingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _theaterLandingComponent_vue_vue_type_template_id_155faa48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _theaterLandingComponent_vue_vue_type_template_id_155faa48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/theaterLandingComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/theaterLandingComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/theaterLandingComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./theaterLandingComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/theaterLandingComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./theaterLandingComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/theaterLandingComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/theaterLandingComponent.vue?vue&type=template&id=155faa48&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/theaterLandingComponent.vue?vue&type=template&id=155faa48& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_template_id_155faa48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./theaterLandingComponent.vue?vue&type=template&id=155faa48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/theaterLandingComponent.vue?vue&type=template&id=155faa48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_template_id_155faa48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theaterLandingComponent_vue_vue_type_template_id_155faa48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
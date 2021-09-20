(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[194],{

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
      groups: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.type_u = this.user.type_user;
    axios.get('/chat2').then(function (response) {
      _this.groups = response.data;
    });
  },
  methods: {
    showSection: function showSection(section) {
      this.activetab = section;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mg-btn {\r\n  margin: 10px;\r\n  min-width: 165px;\n}\n.width-r {\r\n  max-width: 97%;\r\n  border: 1px solid #cccccc82;\r\n  border-radius: 10px;\r\n  box-shadow: 3px 3px 3px 3px #b0acac;\n}\n.tabs {\r\n  margin-top: 20px;\r\n  overflow: hidden;\r\n  margin-left: 90px;\r\n  margin-bottom: -2px;\n}\n.tabs ul {\r\n  list-style-type: none;\r\n  margin-left: 20px;\n}\n.tabs a {\r\n  float: left;\r\n  cursor: pointer;\r\n  padding: 12px 24px;\r\n  transition: background-color 0.2s;\r\n  border: 1px solid #ccc;\r\n  border-right: none;\r\n  background-color: #bfbfbf;\r\n  border-radius: 10px 10px 0 0;\r\n  font-weight: bold;\r\n  color: #fff !important;\n}\n.tabs a:last-child {\r\n  border-right: 1px solid #ccc;\n}\r\n/* Change background color of tabs on hover */\n.tabs a:hover {\r\n  background-color: #aaa;\r\n  color: #fff;\n}\r\n\r\n/* Styling for active tab */\n.tabs a.active {\r\n  background-color: #00cbcec1;\r\n  color: #fff;\r\n  border-bottom: 2px solid #fff;\r\n  cursor: default;\n}\n.tabcontent {\r\n  border: 1px solid #ccc;\r\n  border-radius: 10px;\r\n  box-shadow: 3px 3px 6px #e1e1e1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tabComunication.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css&");

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
          _c(
            "a",
            {
              staticClass: "btn btn-warning mg-btn",
              staticStyle: {
                "background-color": "#FFB466",
                "border-color": "#FFB466",
                "box-shadow": "3px 3px 3px 3px #b0acac"
              },
              on: {
                click: function($event) {
                  return _vm.showSection("messages")
                }
              }
            },
            [
              _c(
                "h6",
                {
                  staticClass: "letra-poppins-bold",
                  staticStyle: { color: "black" }
                },
                [_vm._v("Mensajes")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-warning mg-btn",
              staticStyle: {
                "background-color": "#FFB466",
                "border-color": "#FFB466",
                "box-shadow": "3px 3px 3px 3px #b0acac"
              },
              on: {
                click: function($event) {
                  return _vm.showSection("calendar")
                }
              }
            },
            [
              _c(
                "h6",
                {
                  staticClass: "letra-poppins-bold",
                  staticStyle: { color: "black" }
                },
                [_vm._v("Calendario")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-warning mg-btn",
              staticStyle: {
                "background-color": "#FFB466",
                "border-color": "#FFB466",
                "box-shadow": "3px 3px 3px 3px #b0acac"
              },
              on: {
                click: function($event) {
                  return _vm.showSection("foro")
                }
              }
            },
            [
              _c(
                "h6",
                {
                  staticClass: "letra-poppins-bold",
                  staticStyle: { color: "black" }
                },
                [_vm._v("Foro")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-warning mg-btn",
              staticStyle: {
                "background-color": "#FFB466",
                "border-color": "#FFB466",
                "box-shadow": "3px 3px 3px 3px #b0acac"
              },
              on: {
                click: function($event) {
                  return _vm.showSection("chat")
                }
              }
            },
            [
              _c(
                "h6",
                {
                  staticClass: "letra-poppins-bold",
                  staticStyle: { color: "black" }
                },
                [_vm._v("Chat")]
              )
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-11 mx-auto", attrs: { id: "tabs" } }, [
        _c("div", [
          _vm.activetab === "messages"
            ? _c(
                "div",
                { staticClass: "tabcontent" },
                [_c("mensajes-component", { attrs: { user: _vm.user } })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.activetab === "calendar"
            ? _c(
                "div",
                { staticClass: "tabcontent" },
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
            ? _c("div", { staticClass: "tabcontent" }, [
                _vm._v("\n                    'Foro'\n                ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.activetab === "chat"
            ? _c(
                "div",
                { staticClass: "tabcontent" },
                [
                  _c("groups", {
                    attrs: { "initial-groups": _vm.groups, user: _vm.user }
                  })
                ],
                1
              )
            : _vm._e()
        ])
      ])
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
/* empty/unused harmony star reexport *//* harmony import */ var _tabComunication_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabComunication.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tabComunication.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tabComunication.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tabComunication_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
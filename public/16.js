(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {
      template_header: "",
      template_footer: "",
      template_path: "",
      header_loading: false,
      footer_loading: false,
      loading: false
    };
  },
  mounted: function mounted() {
    this.getTemplateHeader();
    this.getTemplateFooter();
    this.getTemplatePath();
  },
  methods: {
    getTemplateHeader: function getTemplateHeader() {
      var _this = this;

      this.header_loading = true;
      axios.get("/api/admin/configuration/property/TEMPLATE_NOTESHEET_HEADER").then(function (response) {
        if (response.data && response.data.content) {
          _this.template_header = response.data.content;
        }

        _this.header_loading = false;
      }, function (error) {
        console.error(error);
        _this.header_loading = false;
      });
    },
    getTemplateFooter: function getTemplateFooter() {
      var _this2 = this;

      this.footer_loading = true;
      axios.get("/api/admin/configuration/property/TEMPLATE_NOTESHEET_FOOTER").then(function (response) {
        if (response.data && response.data.content) {
          _this2.template_footer = response.data.content;
        }

        _this2.footer_loading = false;
      }, function (error) {
        console.error(error);
        _this2.footer_loading = false;
      });
    },
    getTemplatePath: function getTemplatePath() {
      var _this3 = this;

      this.loading = true;
      axios.get("/api/admin/configuration/property/TEMPLATE_NOTESHEET_PATH").then(function (response) {
        if (response.data && response.data.content) {
          _this3.template_path = response.data.content;
        }

        _this3.loading = false;
      }, function (error) {
        console.error(error);
        _this3.loading = false;
      });
    },
    updateTemplateHeader: function updateTemplateHeader() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.header_loading = true;
        axios.put("/api/admin/configuration/property/TEMPLATE_NOTESHEET_HEADER", {
          value: _this4.template_header
        }).then(function (response) {
          console.log(response);

          if (response.status == 200) {
            toastr.success("Header actualizado correctamente");
          }

          _this4.header_loading = false;
          resolve();
        }, function (error) {
          console.error(error);
          _this4.header_loading = false;
          reject(error);
        });
      });
    },
    updateTemplateFooter: function updateTemplateFooter() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.footer_loading = true;
        axios.put("/api/admin/configuration/property/TEMPLATE_NOTESHEET_FOOTER", {
          value: _this5.template_footer
        }).then(function (response) {
          console.log(response);

          if (response.status == 200) {
            toastr.success("Footer actualizado correctamente");
          }

          _this5.footer_loading = false;
          resolve();
        }, function (error) {
          console.error(error);
          _this5.footer_loading = false;
          reject(error);
        });
      });
    },
    updateTemplatePath: function updateTemplatePath() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        _this6.loading = true;
        axios.put("/api/admin/configuration/property/TEMPLATE_NOTESHEET_PATH", {
          value: _this6.template_path
        }).then(function (response) {
          console.log(response);

          if (response.status == 200) {
            toastr.success("Plantilla actualizado correctamente");
          }

          _this6.loading = false;
          resolve();
        }, function (error) {
          console.error(error);
          _this6.loading = false;
          reject(error);
        });
      });
    },
    SetTemplateHeaderEvent: function SetTemplateHeaderEvent(content) {
      this.template_header = content;
    },
    SetTemplateFooterEvent: function SetTemplateFooterEvent(content) {
      this.template_footer = content;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.template-container[data-v-7cc63e45] {\n  padding: 10px;\n}\n.template-creator[data-v-7cc63e45] {\n  width: 100%;\n}\nh4[data-v-7cc63e45]{font-size: 1.1em;font-weight: 600;margin: 10px;}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=template&id=7cc63e45&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=template&id=7cc63e45&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "template-container" },
    [
      _vm.header_loading ? _c("content-loader") : _vm._e(),
      _vm._v(" "),
      !_vm.header_loading
        ? _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-sm-12" },
              [
                _c("h4", [_vm._v("Encabezado de página")]),
                _vm._v(" "),
                _c("editor-component", {
                  attrs: { content: _vm.template_header },
                  on: {
                    updateText: function($event) {
                      return _vm.SetTemplateHeaderEvent($event)
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: {
                    click: function($event) {
                      return _vm.updateTemplateHeader()
                    }
                  }
                },
                [_vm._v("Guardar Encabezado")]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.footer_loading ? _c("content-loader") : _vm._e(),
      _vm._v(" "),
      !_vm.footer_loading
        ? _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-sm-12" },
              [
                _c("h4", [_vm._v("Pie de página")]),
                _vm._v(" "),
                _c("editor-component", {
                  attrs: { content: _vm.template_footer },
                  on: {
                    updateText: function($event) {
                      return _vm.SetTemplateFooterEvent($event)
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: {
                    click: function($event) {
                      return _vm.updateTemplateFooter()
                    }
                  }
                },
                [_vm._v("Guardar Pie de Página")]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          !_vm.loading
            ? _c("div", { staticClass: "parameter" }, [
                _c("span", { staticClass: "parameter-label" }, [
                  _vm._v("Plantilla")
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.template_path,
                        expression: "template_path"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.template_path },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.template_path = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function($event) {
                        return _vm.updateTemplatePath()
                      }
                    }
                  },
                  [_vm._v("Guardar")]
                )
              ])
            : _vm._e()
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/adminConfigurationTemplateNotes.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/adminConfigurationTemplateNotes.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adminConfigurationTemplateNotes_vue_vue_type_template_id_7cc63e45_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminConfigurationTemplateNotes.vue?vue&type=template&id=7cc63e45&scoped=true& */ "./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=template&id=7cc63e45&scoped=true&");
/* harmony import */ var _adminConfigurationTemplateNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminConfigurationTemplateNotes.vue?vue&type=script&lang=js& */ "./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _adminConfigurationTemplateNotes_vue_vue_type_style_index_0_id_7cc63e45_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css& */ "./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adminConfigurationTemplateNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminConfigurationTemplateNotes_vue_vue_type_template_id_7cc63e45_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminConfigurationTemplateNotes_vue_vue_type_template_id_7cc63e45_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cc63e45",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/adminConfigurationTemplateNotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./adminConfigurationTemplateNotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_style_index_0_id_7cc63e45_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=style&index=0&id=7cc63e45&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_style_index_0_id_7cc63e45_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_style_index_0_id_7cc63e45_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_style_index_0_id_7cc63e45_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_style_index_0_id_7cc63e45_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_style_index_0_id_7cc63e45_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=template&id=7cc63e45&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=template&id=7cc63e45&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_template_id_7cc63e45_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./adminConfigurationTemplateNotes.vue?vue&type=template&id=7cc63e45&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminConfigurationTemplateNotes.vue?vue&type=template&id=7cc63e45&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_template_id_7cc63e45_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminConfigurationTemplateNotes_vue_vue_type_template_id_7cc63e45_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
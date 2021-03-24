(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comunicates.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comunicates.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      filter: "",
      data: [{
        id: 1,
        title: "Informe",
        content: "Fecha Final",
        image: "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"
      }, {
        id: 2,
        title: "Avisos",
        content: "Fecha de Vacaciones",
        image: "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"
      }, {
        id: 3,
        title: "Aviso",
        content: "Fecha de Ingreso",
        image: "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    highlightMatches: function highlightMatches(text) {
      var matchExists = text.toLowerCase().includes(this.filter.toLowerCase());
      if (!matchExists) return text;
      var re = new RegExp(this.filter, "ig");
      return text.replace(re, function (matchedText) {
        return "<strong style=\"text-decoration: underline;\">".concat(matchedText, "</strong>");
      });
    }
  },
  computed: {
    filteredRows: function filteredRows() {
      return this.data.filter(function (row) {
        var title = row.title.toString().toLowerCase();
        var content = row.content.toString().toLowerCase();
        return title.includes(searchTerm) || content.includes(searchTerm);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comunicates.vue?vue&type=template&id=35efd8fa&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comunicates.vue?vue&type=template&id=35efd8fa& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-11 mx-auto" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.filter,
              expression: "filter"
            }
          ],
          staticClass: "form-control col-md-3",
          attrs: { placeholder: "Buscar Comunicado", type: "text" },
          domProps: { value: _vm.filter },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.filter = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "card", staticStyle: { width: "65rem" } }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            _vm._l(_vm.data, function(data, t) {
              return _c(
                "div",
                {
                  key: t,
                  staticClass: "card",
                  staticStyle: { width: "30rem", "margin-left": "12rem" }
                },
                [
                  _c("img", {
                    staticClass: "card-img-top",
                    staticStyle: { width: "30rem", height: "15rem" },
                    attrs: { src: data.image, alt: "Card image cap" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "h5",
                      {
                        staticClass: "card-title",
                        domProps: {
                          innerHTML: _vm._s(_vm.highlightMatches(data.title))
                        }
                      },
                      [_vm._v(_vm._s(data.title))]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "card-text",
                        domProps: {
                          innerHTML: _vm._s(_vm.highlightMatches(data.content))
                        }
                      },
                      [_vm._v(_vm._s(data.content))]
                    )
                  ])
                ]
              )
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header fondo text-center" }, [
      _c("h4", [_vm._v("Comunicados")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Comunicates.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Comunicates.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comunicates_vue_vue_type_template_id_35efd8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comunicates.vue?vue&type=template&id=35efd8fa& */ "./resources/js/components/Comunicates.vue?vue&type=template&id=35efd8fa&");
/* harmony import */ var _Comunicates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comunicates.vue?vue&type=script&lang=js& */ "./resources/js/components/Comunicates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comunicates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comunicates_vue_vue_type_template_id_35efd8fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comunicates_vue_vue_type_template_id_35efd8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comunicates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comunicates.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Comunicates.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comunicates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Comunicates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comunicates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comunicates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comunicates.vue?vue&type=template&id=35efd8fa&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Comunicates.vue?vue&type=template&id=35efd8fa& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comunicates_vue_vue_type_template_id_35efd8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Comunicates.vue?vue&type=template&id=35efd8fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comunicates.vue?vue&type=template&id=35efd8fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comunicates_vue_vue_type_template_id_35efd8fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comunicates_vue_vue_type_template_id_35efd8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
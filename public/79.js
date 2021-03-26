(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StamentsChat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StamentsChat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      staments: [],
      chat: ""
    };
  },
  mounted: function mounted() {
    this.getStaments();
  },
  methods: {
    getStaments: function getStaments() {
      var _this = this;

      axios.get('/getChatAsigment').then(function (response) {
        var chat = response.data;
        var hash = {};
        chat = chat.filter(function (current) {
          var exists = !hash[current.stament];
          hash[current.stament] = true;
          return exists;
        });
        _this.staments = chat;
      });
    },
    sendTitleMessage: function sendTitleMessage(title) {
      this.chat = title;
      $('#chatModal').modal('show');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StamentsChat.vue?vue&type=template&id=42792718&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StamentsChat.vue?vue&type=template&id=42792718& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "back" },
    [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.user.type_user === 6,
                  expression: "user.type_user === 6"
                }
              ],
              staticClass: "form-group"
            },
            [
              _c(
                "a",
                {
                  staticClass: "btn btn-primary",
                  attrs: { href: "/staments" }
                },
                [_vm._v("Volver")]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "carb-body" }, [
              _c(
                "table",
                { staticClass: "table table-hover" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._l(_vm.staments, function(stament, key) {
                    return _c("tbody", { key: key }, [
                      _c("tr", [
                        _c("th", [_vm._v(_vm._s(stament.stament))]),
                        _vm._v(" "),
                        _c("th", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  return _vm.sendTitleMessage(stament.stament)
                                }
                              }
                            },
                            [_vm._v("Abrir Chat")]
                          )
                        ])
                      ])
                    ])
                  })
                ],
                2
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal-chat", { attrs: { chat: _vm.chat, user: _vm.user } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header fondo" }, [
      _c("strong", [_vm._v("Chats Disponibles")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Estamento")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/StamentsChat.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/StamentsChat.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StamentsChat_vue_vue_type_template_id_42792718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StamentsChat.vue?vue&type=template&id=42792718& */ "./resources/js/components/StamentsChat.vue?vue&type=template&id=42792718&");
/* harmony import */ var _StamentsChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StamentsChat.vue?vue&type=script&lang=js& */ "./resources/js/components/StamentsChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StamentsChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StamentsChat_vue_vue_type_template_id_42792718___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StamentsChat_vue_vue_type_template_id_42792718___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StamentsChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/StamentsChat.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/StamentsChat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StamentsChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StamentsChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StamentsChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StamentsChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StamentsChat.vue?vue&type=template&id=42792718&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/StamentsChat.vue?vue&type=template&id=42792718& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StamentsChat_vue_vue_type_template_id_42792718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StamentsChat.vue?vue&type=template&id=42792718& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StamentsChat.vue?vue&type=template&id=42792718&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StamentsChat_vue_vue_type_template_id_42792718___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StamentsChat_vue_vue_type_template_id_42792718___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./connectionDbFirebase.js":
/*!*********************************!*\
  !*** ./connectionDbFirebase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");

var firebaseConfig = {
  apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
  authDomain: "liv4t-skool.firebaseapp.com",
  databaseURL: "https://liv4t-skool.firebaseio.com",
  projectId: "liv4t-skool",
  storageBucket: "liv4t-skool.appspot.com",
  messagingSenderId: "346718353628",
  appId: "1:346718353628:web:abc0666c41b66fa472dc19",
  measurementId: "G-7L14TG5RRZ"
}; // Initialize Firebase

firebase__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
firebase__WEBPACK_IMPORTED_MODULE_0__["default"].analytics();
/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalChat.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modalChat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../connectionDbFirebase */ "./connectionDbFirebase.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: ['chat', 'user'],
  data: function data() {
    return {
      message: [],
      allChat: [],
      fullName: this.user.name + ' ' + this.user.last_name,
      showButton: false
    };
  },
  watch: {
    chat: function chat() {
      this.getChat();
    }
  },
  methods: {
    getChat: function getChat() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var starCountRef;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                starCountRef = _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref("chatGovernment/".concat(_this.chat));
                starCountRef.on('value', function (snapshot) {
                  _this.allChat = snapshot.val();
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    sendMessage: function sendMessage(message) {
      var _this2 = this;

      var data = {
        chat: this.chat,
        message: message,
        member: this.user.name + ' ' + this.user.last_name
      };
      _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref("chatGovernment/".concat(this.chat)).push(data).then(function () {
        _this2.getChat();

        _this2.message = [];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteMessage: function deleteMessage(key) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref("chatGovernment/".concat(_this3.chat, "/").concat(key)).remove();

                _this3.getChat();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    mouseover: function mouseover(key) {
      $("#drop".concat(key)).css('display', 'flex');
    },
    mouseleave: function mouseleave(key) {
      $("#drop".concat(key)).css('display', 'none');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalChat.vue?vue&type=template&id=fd07f92c&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modalChat.vue?vue&type=template&id=fd07f92c& ***!
  \************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal fade bd-example-modal-lg",
      attrs: {
        id: "chatModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "myLargeModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c("h5", { staticClass: "modal-title" }, [
              _vm._v(_vm._s(_vm.chat))
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-body" },
            _vm._l(_vm.allChat, function(infoChat, key) {
              return _c("div", { key: key }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.fullName !== infoChat.member,
                        expression: "fullName !== infoChat.member"
                      }
                    ],
                    staticClass: "col-md-7 float-left mb-3",
                    staticStyle: {
                      "background-color": "#278080",
                      "border-radius": "8px",
                      color: "white"
                    }
                  },
                  [
                    _c("strong", [_vm._v(_vm._s(infoChat.member))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(infoChat.message))])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.fullName === infoChat.member,
                        expression: "fullName === infoChat.member"
                      }
                    ],
                    staticClass: "form-group col-md-7 float-right text-center",
                    staticStyle: {
                      "background-color": "#F39405",
                      "border-radius": "8px",
                      color: "white",
                      display: "flex"
                    },
                    on: {
                      mouseover: function($event) {
                        return _vm.mouseover(key)
                      },
                      mouseleave: function($event) {
                        return _vm.mouseleave(key)
                      }
                    }
                  },
                  [
                    _c("p", [_vm._v(_vm._s(infoChat.message))]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "btn-group dropright",
                        staticStyle: { display: "none", "margin-left": "79px" },
                        attrs: { id: "drop" + key }
                      },
                      [
                        _c("button", {
                          staticClass: "btn dropdown-toggle",
                          staticStyle: { color: "white" },
                          attrs: {
                            type: "button",
                            id: "dropdownMenuButton",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu",
                            attrs: { "aria-labelledby": "dropdownMenuButton" }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteMessage(key)
                                  }
                                }
                              },
                              [_vm._v("Eliminar")]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.message,
                  expression: "message"
                }
              ],
              staticClass: "col-md-12 form-control",
              attrs: { type: "textbox", placeholder: "Escribe tu mensaje" },
              domProps: { value: _vm.message },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return (function(e) {
                    return _vm.sendMessage(e.target.value)
                  })($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.message = $event.target.value
                }
              }
            })
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/modalChat.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/modalChat.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalChat_vue_vue_type_template_id_fd07f92c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalChat.vue?vue&type=template&id=fd07f92c& */ "./resources/js/components/modalChat.vue?vue&type=template&id=fd07f92c&");
/* harmony import */ var _modalChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalChat.vue?vue&type=script&lang=js& */ "./resources/js/components/modalChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalChat_vue_vue_type_template_id_fd07f92c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalChat_vue_vue_type_template_id_fd07f92c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modalChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modalChat.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/modalChat.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./modalChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modalChat.vue?vue&type=template&id=fd07f92c&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/modalChat.vue?vue&type=template&id=fd07f92c& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalChat_vue_vue_type_template_id_fd07f92c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./modalChat.vue?vue&type=template&id=fd07f92c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modalChat.vue?vue&type=template&id=fd07f92c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalChat_vue_vue_type_template_id_fd07f92c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalChat_vue_vue_type_template_id_fd07f92c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
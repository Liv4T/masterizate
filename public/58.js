(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Observer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Observer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      data: [{
        id: 1,
        course: 1001,
        student: [{
          name: 'name',
          observer: 'observer'
        }, {
          name: 'name2',
          observer: 'observer'
        }],
        user_creator: 'docente'
      }, {
        id: 2,
        course: 1002,
        student: [{
          name: 'name',
          observer: 'observer'
        }],
        user_creator: 'docente'
      }],
      students: [],
      parents: [],
      observers: []
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  filters: {
    addPrhase: function addPrhase(value) {
      console.log(value);
      return "uno" + value;
    }
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get('/dataUsers').then(function (response) {
        var $data = response.data;
        _this.students = $data[2];
        _this.parents = $data[1];
        _this.observers = $data[0];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getInformation: function getInformation(value) {
      console.log(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Observer.vue?vue&type=template&id=02ed0d41&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Observer.vue?vue&type=template&id=02ed0d41& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _c("h1", { staticClass: "text-center mb-4" }, [
          _vm._v("Observaciones")
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary mb-3",
            attrs: { "data-toggle": "modal", "data-target": "#createModal" }
          },
          [_vm._v("\n                Crear Observación\n            ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { id: "accordion" } },
          _vm._l(_vm.data, function(data, id) {
            return _c("div", { key: id, staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-header", attrs: { id: "headingOne" } },
                [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#uno" + data.id,
                          "aria-expanded": "true",
                          "aria-controls": _vm._f("addPrhase")(data.id)
                        }
                      },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(data.course) +
                            "\n                            "
                        )
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse show",
                  attrs: {
                    id: _vm._f("addPrhase")(data.id),
                    "aria-labelledby": "headingOne",
                    "data-parent": "#accordion"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    _vm._l(data["student"], function(student, id) {
                      return _c("table", { key: id }, [
                        _vm._m(0, true),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [_vm._v(_vm._s(student.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(student.observer))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(data.user_creator))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.getInformation(student)
                                    }
                                  }
                                },
                                [_vm._v("Ver")]
                              )
                            ])
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                ]
              )
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Estudiante")]),
        _vm._v(" "),
        _c("th", [_vm._v("Detalle de la Observación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Creador de la Observación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "createModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLabel" }
                  },
                  [_vm._v("Modal title")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._v("\n                    ...\n                ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "button" } },
                  [_vm._v("Save changes")]
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Observer.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Observer.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observer_vue_vue_type_template_id_02ed0d41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.vue?vue&type=template&id=02ed0d41& */ "./resources/js/components/Observer.vue?vue&type=template&id=02ed0d41&");
/* harmony import */ var _Observer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer.vue?vue&type=script&lang=js& */ "./resources/js/components/Observer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Observer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Observer_vue_vue_type_template_id_02ed0d41___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Observer_vue_vue_type_template_id_02ed0d41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Observer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Observer.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Observer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Observer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Observer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Observer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Observer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Observer.vue?vue&type=template&id=02ed0d41&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Observer.vue?vue&type=template&id=02ed0d41& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Observer_vue_vue_type_template_id_02ed0d41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Observer.vue?vue&type=template&id=02ed0d41& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Observer.vue?vue&type=template&id=02ed0d41&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Observer_vue_vue_type_template_id_02ed0d41___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Observer_vue_vue_type_template_id_02ed0d41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
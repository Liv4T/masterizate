(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalEditGovernmentMember.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalEditGovernmentMember.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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

if (!firebase__WEBPACK_IMPORTED_MODULE_0__["default"].apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
} else {
  firebase__WEBPACK_IMPORTED_MODULE_0__["default"].app(); // if already initialized, use that one
}

firebase__WEBPACK_IMPORTED_MODULE_0__["default"].analytics();

Vue.component("multiselect", vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['memberEdit', 'getMembers'],
  data: function data() {
    return {
      nameOptions: {},
      myOptions: [],
      imageData: []
    };
  },
  watch: {
    memberEdit: function memberEdit(newMember, oldMember) {
      if (newMember !== oldMember) {
        this.memberEdit = newMember;
        this.getUsers();
      }
    }
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: {
    getImage: function getImage(image) {
      var files = image.target.files || image.dataTransfer.files;

      if (!files.length) {
        return;
      }

      this.imageData = files[0];
    },
    updateMembers: function updateMembers() {
      var _this = this;

      if (this.memberEdit.modeInsert == '2') {
        axios.put("/members/".concat(this.memberEdit.id), {
          member: this.nameOptions.text,
          position: this.memberEdit.position,
          description: this.memberEdit.description,
          order: this.memberEdit.order,
          user_id: this.nameOptions.id,
          image: this.nameOptions.image,
          modeInsert: this.memberEdit.modeInsert
        }).then(function (response) {
          toastr.success(response.data);
          $('#editModal').modal("hide");

          _this.getMembers();
        })["catch"](function (error) {
          toastr.danger(error);
          console.log(error);
        });
      } else if (this.memberEdit.modeInsert == '1') {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_0__["default"].storage().ref("images/schoolGovernment/".concat(this.imageData.name)).put(this.imageData);
        storageRef.on("images/schoolGovernment/", function (snapshot) {
          _this.uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        }, function (error) {
          console.log(error.message);
        }, function () {
          _this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(function (url) {
            axios.put("/members/".concat(_this.memberEdit.id), {
              imageSchoolGovernment: url,
              modeInsert: _this.memberEdit.modeInsert
            }).then(function (response) {
              _this.imageData = [];
              toastr.success(response.data);
              $('#editModal').modal("hide");

              _this.getMembers();
            });
          });
        });
      }
    },
    getUsers: function getUsers() {
      var _this2 = this;

      axios.get('getUsers').then(function (response) {
        response.data.forEach(function (e) {
          if (_this2.memberEdit.user_id === e.id) {
            _this2.nameOptions = {
              id: e.id,
              user_id: e.id,
              text: "".concat(e.name) + " ".concat(e.last_name),
              image: e.picture
            };
          }

          _this2.myOptions.push({
            id: e.id,
            user_id: e.id,
            text: "".concat(e.name) + " ".concat(e.last_name),
            image: e.picture
          });
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalEditGovernmentMember.vue?vue&type=template&id=4bb43b87&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalEditGovernmentMember.vue?vue&type=template&id=4bb43b87& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        id: "editModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "myLargeModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "mb-3" }, [
              _c("label", [
                _vm._v("Selecciona forma de inserción de Gobierno Escolar")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.memberEdit.modeInsert,
                      expression: "memberEdit.modeInsert"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "changeSave", id: "membersGovernment" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.memberEdit,
                        "modeInsert",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "1" } }, [
                    _vm._v("Insertar Imagen")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "2" } }, [
                    _vm._v("Crear Miembros de Gobierno Escolar")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.memberEdit.modeInsert == "2",
                    expression: "memberEdit.modeInsert == '2'"
                  }
                ]
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Nombre")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: {
                        options: _vm.myOptions,
                        multiple: false,
                        "close-on-select": false,
                        "clear-on-select": false,
                        "preserve-search": true,
                        placeholder: "Seleccione una o varias",
                        label: "text",
                        "track-by": "id",
                        "preselect-first": true
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "selection",
                          fn: function(ref) {
                            var values = ref.values
                            var isOpen = ref.isOpen
                            return [
                              values.length && !isOpen
                                ? _c(
                                    "span",
                                    { staticClass: "multiselect__single" },
                                    [
                                      _vm._v(
                                        _vm._s(values.length) +
                                          " opciones\n                                        selecionadas"
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.nameOptions,
                        callback: function($$v) {
                          _vm.nameOptions = $$v
                        },
                        expression: "nameOptions"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Posición")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.memberEdit.position,
                        expression: "memberEdit.position"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.memberEdit.position },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.memberEdit,
                          "position",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Descripción")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.memberEdit.description,
                        expression: "memberEdit.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.memberEdit.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.memberEdit,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Orden en listado")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.memberEdit.order,
                        expression: "memberEdit.order"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.memberEdit.order },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.memberEdit, "order", $event.target.value)
                      }
                    }
                  })
                ])
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
                    value: _vm.memberEdit.modeInsert == "1",
                    expression: "memberEdit.modeInsert == '1'"
                  }
                ]
              },
              [
                _c("label", { attrs: { for: "imageGovernment" } }, [
                  _vm._v("Actualiza la Imagen Organigrama Del Gobierno Escolar")
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control-file",
                  attrs: { type: "file", id: "imageGovernment", required: "" },
                  on: { change: _vm.getImage }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.updateMembers()
                  }
                }
              },
              [_vm._v("Save changes")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [_vm._v("Close")]
            )
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
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Actualización de Miembros de Gobierno Escolar")
      ]),
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
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ModalEditGovernmentMember.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ModalEditGovernmentMember.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalEditGovernmentMember_vue_vue_type_template_id_4bb43b87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEditGovernmentMember.vue?vue&type=template&id=4bb43b87& */ "./resources/js/components/ModalEditGovernmentMember.vue?vue&type=template&id=4bb43b87&");
/* harmony import */ var _ModalEditGovernmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalEditGovernmentMember.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalEditGovernmentMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModalEditGovernmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalEditGovernmentMember_vue_vue_type_template_id_4bb43b87___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalEditGovernmentMember_vue_vue_type_template_id_4bb43b87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalEditGovernmentMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalEditGovernmentMember.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ModalEditGovernmentMember.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditGovernmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalEditGovernmentMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalEditGovernmentMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditGovernmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalEditGovernmentMember.vue?vue&type=template&id=4bb43b87&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ModalEditGovernmentMember.vue?vue&type=template&id=4bb43b87& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditGovernmentMember_vue_vue_type_template_id_4bb43b87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalEditGovernmentMember.vue?vue&type=template&id=4bb43b87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalEditGovernmentMember.vue?vue&type=template&id=4bb43b87&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditGovernmentMember_vue_vue_type_template_id_4bb43b87___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditGovernmentMember_vue_vue_type_template_id_4bb43b87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
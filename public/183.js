(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[183],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/proceedingsGeneralComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/proceedingsGeneralComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      typeEvent: 1,
      loading: false,
      title: "",
      body: "",
      data: "",
      id_managed: "",
      students: [],
      custom_toolbar: [["bold", "italic", "underline"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }]]
    };
  },
  mounted: function mounted() {
    this.getUsers();
  },
  methods: {
    saveProceedings: function saveProceedings() {
      var _this = this;

      this.loading = true;
      var url = "/saveProceedings/general";
      axios.post(url, {
        type: this.typeEvent,
        title: this.title,
        body: this.body,
        id_user_managed: JSON.stringify(this.students)
      }).then(function (response) {
        toastr.success("Nueva acta cargada exitosamente");

        _this.getMenu();
      })["catch"](function (error) {});
    },
    onFileChange: function onFileChange(file) {
      var files = file.target.files || file.dataTransfer.files;
      this.data = new FormData();

      if (files.length > 0) {
        //console.log('evento');
        var _file = files[0];

        var _fileNameSplit = _file.name.split("."); // if uploaded file is valid with validation rules


        var file_extension = _fileNameSplit[_fileNameSplit.length - 1];

        var file_name = _file.name.replace(".".concat(file_extension), '');

        this.data.append("file", files[0]);
        this.data.append("name", file_name);
      }

      console.log(this.data);
    },
    getUsers: function getUsers() {
      var _this2 = this;

      var url = "/getStudentsPerTutor";
      axios.get(url).then(function (response) {
        var arrayData = response.data;
        arrayData.forEach(function (e) {
          _this2.students.push(e.id_student);
        });
        console.log(_this2.students);
      })["catch"](function (error) {
        toastr.error("No hay padres cargados");
      });
    },
    getMenu: function getMenu() {
      window.location = "/list/proceedings/general";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/proceedingsGeneralComponent.vue?vue&type=template&id=414e7899&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/proceedingsGeneralComponent.vue?vue&type=template&id=414e7899& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c(
              "h3",
              {
                staticClass: "card-header fondo",
                staticStyle: { "margin-bottom": "1rem" }
              },
              [_vm._v("Crear acta")]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "needs-validation",
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.saveProceedings($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12", staticStyle: { height: "200px" } },
                    [
                      _c("vue-editor", {
                        staticStyle: { height: "80px" },
                        attrs: { editorToolbar: _vm.custom_toolbar },
                        model: {
                          value: _vm.title,
                          callback: function($$v) {
                            _vm.title = $$v
                          },
                          expression: "title"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("vue-editor", {
                        attrs: { editorToolbar: _vm.custom_toolbar },
                        model: {
                          value: _vm.body,
                          callback: function($$v) {
                            _vm.body = $$v
                          },
                          expression: "body"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "text-right",
                    staticStyle: { "margin-top": "10px" }
                  },
                  [
                    !_vm.loading
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Guardar")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loading
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary letra-boldfont",
                            attrs: { disabled: "" }
                          },
                          [_vm._v("Guardando...")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          ])
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
    return _c("div", { staticClass: "col-12" }, [
      _c("h3", {}, [_vm._v("Titulo")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h3", {}, [_vm._v("Contenido")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/proceedingsGeneralComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/proceedingsGeneralComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proceedingsGeneralComponent_vue_vue_type_template_id_414e7899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proceedingsGeneralComponent.vue?vue&type=template&id=414e7899& */ "./resources/js/components/proceedingsGeneralComponent.vue?vue&type=template&id=414e7899&");
/* harmony import */ var _proceedingsGeneralComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proceedingsGeneralComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/proceedingsGeneralComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _proceedingsGeneralComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _proceedingsGeneralComponent_vue_vue_type_template_id_414e7899___WEBPACK_IMPORTED_MODULE_0__["render"],
  _proceedingsGeneralComponent_vue_vue_type_template_id_414e7899___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/proceedingsGeneralComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/proceedingsGeneralComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/proceedingsGeneralComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsGeneralComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./proceedingsGeneralComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/proceedingsGeneralComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsGeneralComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/proceedingsGeneralComponent.vue?vue&type=template&id=414e7899&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/proceedingsGeneralComponent.vue?vue&type=template&id=414e7899& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsGeneralComponent_vue_vue_type_template_id_414e7899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./proceedingsGeneralComponent.vue?vue&type=template&id=414e7899& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/proceedingsGeneralComponent.vue?vue&type=template&id=414e7899&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsGeneralComponent_vue_vue_type_template_id_414e7899___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proceedingsGeneralComponent_vue_vue_type_template_id_414e7899___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
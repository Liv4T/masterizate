(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newMenuAdm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newMenuAdm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    logout: function logout() {
      axios.post("logout").then(function (response) {
        if (response.status === 302 || 401) {
          window.location.href = "/login";
        } else {// throw error and go to catch block
        }
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newMenuAdm.vue?vue&type=template&id=0b798fd4&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newMenuAdm.vue?vue&type=template&id=0b798fd4& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "mb-3 text-center" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-sm btn-secondary",
          attrs: { href: "/perfil_d" }
        },
        [_vm._v("\n        Mi Perfil\n    ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-secondary dropdown-toggle",
            attrs: {
              type: "button",
              id: "admin",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            }
          },
          [_vm._v("\n            Administrativo\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu",
            attrs: { "aria-labelledby": "admin" }
          },
          [
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "instituciones_adm" }
              },
              [_vm._v("Crear Instituciones")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "trimestre_adm" }
              },
              [_vm._v("Crear Trimestre")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "general_adm" } },
              [_vm._v("Crear Salones")]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Crear Perfiles")
            ]),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/piar" } },
              [_vm._v("Estudiantes PIAR")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/salon_adm" } },
              [_vm._v("Crear Usuarios")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "/admin/configuracion" }
              },
              [_vm._v("Parametros de Notas")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/nursing" } },
              [_vm._v("Enfermería")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/foods" } },
              [_vm._v("Alimentación")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/pedagogic" } },
              [_vm._v("Transporte")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-secondary dropdown-toggle",
            attrs: {
              type: "button",
              id: "comunication",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            }
          },
          [_vm._v("\n            Comunicaciones\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu",
            attrs: { "aria-labelledby": "comunication" }
          },
          [
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/mensajes" } },
              [_vm._v("Mensajes")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/calendar" } },
              [_vm._v("Calendario")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/questions" } },
              [_vm._v("Foro")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/chat" } },
              [_vm._v("Chat")]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Universidades")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-secondary dropdown-toggle",
            attrs: {
              type: "button",
              id: "academic",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            }
          },
          [_vm._v("\n            Académico\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu",
            attrs: { "aria-labelledby": "academic" }
          },
          [
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "/planificacion" }
              },
              [_vm._v("Planificación General")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "/docente/clases" }
              },
              [_vm._v("Ciclos Y Clases")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "/deleteClassAndCicles" }
              },
              [_vm._v("Permisos Eliminar Ciclos")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/notas_d" } },
              [_vm._v("Notas")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/utils" } },
              [_vm._v("Útiles")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/pedagogic" } },
              [_vm._v("Salidas Pedagógicas")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "/teacher/lectives/planning" }
              },
              [_vm._v("Administrar Electivas")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "/teacher/lectives/courses" }
              },
              [_vm._v("Clases Electivas")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "/motiveAssistants" }
              },
              [_vm._v("Creación de Motivos de Asistencia")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/quarters" } },
              [_vm._v("Creación de Trimestres")]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Exalumnos")
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Informes")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-secondary dropdown-toggle",
            attrs: {
              type: "button",
              id: "formation",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            }
          },
          [_vm._v("\n            Formación\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu",
            attrs: { "aria-labelledby": "formation" }
          },
          [
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/mensajes" } },
              [_vm._v("Psicología")]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Casos")
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "permissionPedagogic" }
              },
              [_vm._v("Permisos")]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Proyectos Transversales")
            ]),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/observer" } },
              [_vm._v("Observador del Alumno")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-secondary dropdown-toggle",
            attrs: {
              type: "button",
              id: "electives",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false"
            }
          },
          [_vm._v("\n            Gobierno Escolar\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu",
            attrs: { "aria-labelledby": "electives" }
          },
          [
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/chat" } },
              [_vm._v("Chat")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "/governmentMembers" }
              },
              [_vm._v("Quiénes lo Conforman")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "dropdown-item", attrs: { href: "/legislation" } },
              [_vm._v("Legislación")]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Actas y Circulares")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "/reportAdmin" } }, [
        _c("button", { staticClass: "btn btn-sm btn-secondary" }, [
          _vm._v("\n            Mis Reportes\n        ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/newMenuAdm.vue":
/*!************************************************!*\
  !*** ./resources/js/components/newMenuAdm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newMenuAdm_vue_vue_type_template_id_0b798fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newMenuAdm.vue?vue&type=template&id=0b798fd4& */ "./resources/js/components/newMenuAdm.vue?vue&type=template&id=0b798fd4&");
/* harmony import */ var _newMenuAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newMenuAdm.vue?vue&type=script&lang=js& */ "./resources/js/components/newMenuAdm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newMenuAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newMenuAdm_vue_vue_type_template_id_0b798fd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newMenuAdm_vue_vue_type_template_id_0b798fd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/newMenuAdm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/newMenuAdm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/newMenuAdm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./newMenuAdm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newMenuAdm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/newMenuAdm.vue?vue&type=template&id=0b798fd4&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/newMenuAdm.vue?vue&type=template&id=0b798fd4& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuAdm_vue_vue_type_template_id_0b798fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./newMenuAdm.vue?vue&type=template&id=0b798fd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newMenuAdm.vue?vue&type=template&id=0b798fd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuAdm_vue_vue_type_template_id_0b798fd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newMenuAdm_vue_vue_type_template_id_0b798fd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
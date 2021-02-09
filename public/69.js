(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mensajes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/mensajes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js"));
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      messages: [],
      editorData: "<p>Escribir...</p>",
      editor: _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1___default.a,
      emessages: [],
      emisor: "",
      asunto: ""
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    var urlUsers = " getReceivedMessage";
    axios.get(urlUsers).then(function (response) {
      _this.messages = response.data;
      console.log(_this.messages.men);
    });
  },
  methods: {
    editMessage: function editMessage(mess) {
      var _this2 = this;

      var urlr = "getMessage/" + mess;
      axios.get(urlr).then(function (response) {
        _this2.emessages = response.data;
        _this2.emisor = _this2.emessages.emisor;
        _this2.asunto = _this2.emessages.subject;
        _this2.editorData = _this2.emessages.message;
        console.log(_this2.emessages);
      });
      $("#createMessage").modal("show");
    },
    onReady: function onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82& ***!
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
        _c("div", { staticClass: "card text-center" }, [
          _c("h3", { staticClass: "card-header fondo" }, [_vm._v("Mensajes")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-warning float-right",
                attrs: { href: "/redactar" }
              },
              [_vm._v("Redactar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-warning float-left",
                attrs: { href: "/enviados" }
              },
<<<<<<< HEAD
              [_vm._v("Mensajes enviados")]
=======
              [
                _c(
                  "form-wizard",
                  {
                    attrs: {
                      title: "",
                      subtitle: "",
                      color: "#ffc107",
                      "next-button-text": "Siguiente",
                      "back-button-text": "Atrás",
                      "finish-button-text": "Guardar y enviar"
                    },
                    on: { "on-complete": _vm.createCourses }
                  },
                  [
                    _c("tab-content", { attrs: { title: "Anual" } }, [
                      _c("div", { staticClass: "form-group mx-auto" }, [
                        _c("div", { attrs: { align: "center" } }, [
                          _c("strong", [_vm._v("Logro 1")])
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newLogro1,
                              expression: "newLogro1"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "welcome", required: "" },
                          domProps: { value: _vm.newLogro1 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.newLogro1 = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Please fill out this field")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mx-auto" }, [
                        _c("div", { attrs: { align: "center" } }, [
                          _c("strong", [_vm._v("Logro 2")])
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newLogro2,
                              expression: "newLogro2"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "intentioned", required: "" },
                          domProps: { value: _vm.newLogro2 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.newLogro2 = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Please fill out this field")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mx-auto" }, [
                        _c("div", { attrs: { align: "center" } }, [
                          _c("strong", [_vm._v("Logro 3")])
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newLogro3,
                              expression: "newLogro3"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "intentioned", required: "" },
                          domProps: { value: _vm.newLogro3 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.newLogro3 = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Please fill out this field")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mx-auto" }, [
                        _c("div", { attrs: { align: "center" } }, [
                          _c("strong", [_vm._v("Logro 4")])
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newLogro4,
                              expression: "newLogro4"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "competences", required: "" },
                          domProps: { value: _vm.newLogro4 },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.newLogro4 = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Please fill out this field")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      { attrs: { title: "Trimestral" } },
                      _vm._l(_vm.inputs, function(input, t) {
                        return _c(
                          "div",
                          { key: t, staticClass: "form-group row mx-auto" },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Unidad")
                              ]),
                              _vm._v(" "),
                              _c("span", [
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          t || (!t && _vm.inputs.length > 1),
                                        expression:
                                          "\r\n                                                        t ||\r\n                                                            (!t &&\r\n                                                                inputs.length >\r\n                                                                    1)\r\n                                                    "
                                      }
                                    ],
                                    staticClass: "badge badge-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.remove(t)
                                      }
                                    }
                                  },
                                  [_vm._v("-")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: t == _vm.inputs.length - 1,
                                        expression:
                                          "\r\n                                                        t == inputs.length - 1\r\n                                                    "
                                      }
                                    ],
                                    staticClass: "badge badge-primary",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.add(t)
                                      }
                                    }
                                  },
                                  [_vm._v("+")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: input.name,
                                      expression: "input.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "objetive1",
                                    placeholder: "Nombre de la unidad",
                                    required: ""
                                  },
                                  domProps: { value: input.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        input,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Contenido")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input.contenido,
                                    expression: "input.contenido"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "competences",
                                  placeholder:
                                    "Es la explicacion o sintesis de la unidad.",
                                  required: ""
                                },
                                domProps: { value: input.contenido },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input,
                                      "contenido",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Please fill out this field")
                              ])
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                )
              ],
              1
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass:
                  "table table-responsive-xl table-hover table-striped center"
              },
              [
<<<<<<< HEAD
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.messages, function(option, k) {
                  return _c("tbody", { key: k }, [
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(option.emisor))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(option.asunto))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(
                              _vm._f("moment")(
                                option.fecha.date,
                                "dddd, MMMM Do YYYY"
=======
                _c(
                  "form-wizard",
                  {
                    attrs: {
                      title: "",
                      subtitle: "",
                      color: "#ffc107",
                      "next-button-text": "Siguiente",
                      "back-button-text": "Atrás",
                      "finish-button-text": "Guardar"
                    },
                    on: { "on-complete": _vm.updateCourses }
                  },
                  [
                    _c("tab-content", { attrs: { title: "Anual" } }, [
                      _c("div", [
                        _c("div", { staticClass: "form-group mx-auto" }, [
                          _c("div", { attrs: { align: "center" } }, [
                            _c("strong", [
                              _vm._v(
                                "\r\n                        Logro 1   20%   \r\n                        "
                              ),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-success btn-sm",
                                  attrs: {
                                    onclick:
                                      "confirm('Seguro de confirmar el cumplimiento del logro')",
                                    type: "submit"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-danger btn-sm",
                                  attrs: {
                                    onclick: "confirm('Esta seguro?')",
                                    type: "submit"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  })
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.logro_1,
                                expression: "logro_1"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "welcome" },
                            domProps: { value: _vm.logro_1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.logro_1 = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v("Please fill out this field")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group mx-auto" }, [
                          _c("div", { attrs: { align: "center" } }, [
                            _c("strong", [
                              _vm._v(
                                "\r\n                        Logro 2    40%   \r\n                        "
                              ),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-success btn-sm",
                                  attrs: {
                                    onclick:
                                      "confirm('Seguro de confirmar el cumplimiento del logro')",
                                    type: "submit"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-danger btn-sm",
                                  attrs: {
                                    onclick: "confirm('Esta seguro?')",
                                    type: "submit"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  })
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.logro_2,
                                expression: "logro_2"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "welcome" },
                            domProps: { value: _vm.logro_2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.logro_2 = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v("Please fill out this field")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group mx-auto" }, [
                          _c("div", { attrs: { align: "center" } }, [
                            _c("strong", [
                              _vm._v(
                                "\r\n                        Logro 3    20%   \r\n                        "
                              ),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-success btn-sm",
                                  attrs: {
                                    onclick:
                                      "confirm('Seguro de confirmar el cumplimiento del logro')",
                                    type: "submit"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-danger btn-sm",
                                  attrs: {
                                    onclick: "confirm('Esta seguro?')",
                                    type: "submit"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  })
                                ]
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                              )
                            ) +
                            "\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "float-right" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm",
                            staticStyle: { color: "grey" },
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editMessage(option.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-eye" })]
                        )
                      ])
                    ])
                  ])
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "createMessage" } },
          [
            _c("div", { staticClass: "modal-dialog modal-lg" }, [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("div", { staticClass: "form-group row" }, [
                        _vm._m(2),
                        _vm._v(" "),
<<<<<<< HEAD
                        _c("div", { staticClass: "col-md-10" }, [
                          _c("input", {
=======
                        _c("div", { staticClass: "form-group mx-auto" }, [
                          _c("div", { attrs: { align: "center" } }, [
                            _c("strong", [
                              _vm._v(
                                "\r\n                        Logro 4    20%   \r\n                        "
                              ),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-success btn-sm",
                                  attrs: {
                                    onclick:
                                      "confirm('Seguro de confirmar el cumplimiento del logro')",
                                    type: "submit"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-danger btn-sm",
                                  attrs: {
                                    onclick: "confirm('Esta seguro?')",
                                    type: "submit"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  })
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.emisor,
                                expression: "emisor"
                              }
                            ],
                            staticClass: "input-mensaje",
                            attrs: {
                              id: "nombre",
                              name: "nombre",
                              placeholder: "Asunto",
                              disabled: ""
                            },
                            domProps: { value: _vm.emisor },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.emisor = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-10" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.asunto,
                                expression: "asunto"
                              }
                            ],
                            staticClass: "input-mensaje",
                            attrs: {
                              id: "nombre",
                              name: "nombre",
                              placeholder: "Asunto",
                              disabled: ""
                            },
                            domProps: { value: _vm.asunto },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.asunto = $event.target.value
                              }
                            }
                          })
                        ])
<<<<<<< HEAD
                      ]),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c("ckeditor", {
                        attrs: { editor: _vm.editor },
                        on: { ready: _vm.onReady },
                        model: {
                          value: _vm.editorData,
                          callback: function($$v) {
                            _vm.editorData = $$v
                          },
                          expression: "editorData"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        )
=======
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      { attrs: { title: "Trimestral" } },
                      _vm._l(_vm.fillC.quaterly, function(input, t) {
                        return _c(
                          "div",
                          { key: t, staticClass: "form-group row mx-auto" },
                          [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v(
                                  "\r\n                      Unidad    \r\n                      "
                                ),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-success btn-sm",
                                    attrs: {
                                      onclick:
                                        "confirm('Seguro de confirmar el cumplimiento del logro')",
                                      type: "submit"
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-check-circle"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-danger btn-sm",
                                    attrs: {
                                      onclick: "confirm('Esta seguro?')",
                                      type: "submit"
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-times-circle"
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: input.unit_name,
                                      expression: "input.unit_name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "objetive1",
                                    placeholder: "Nombre de la unidad"
                                  },
                                  domProps: { value: input.unit_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        input,
                                        "unit_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Contenido")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input.content,
                                    expression: "input.content"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "competences",
                                  placeholder:
                                    "Es la explicacion o sintesis de la unidad."
                                },
                                domProps: { value: input.content },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input,
                                      "content",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Please fill out this field")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Observación")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input.observation,
                                    expression: "input.observation"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "competences",
                                  placeholder: "Comentarios"
                                },
                                domProps: { value: input.observation },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input,
                                      "observation",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Please fill out this field")
                              ])
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Asunto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-header fondo text-center" }, [
      _vm._v(
        "\n                                Mensaje\n                                "
      ),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2" }, [
      _c("label", { staticClass: "label-mensaje", attrs: { for: "nombre" } }, [
        _vm._v("De:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2" }, [
      _c("label", { staticClass: "label-mensaje", attrs: { for: "nombre" } }, [
        _vm._v("Asunto:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("label", { attrs: { for: "mensaje" } }, [_vm._v("Mensaje:")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/mensajes.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/mensajes.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensajes.vue?vue&type=template&id=c3ea8e82& */ "./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82&");
/* harmony import */ var _mensajes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensajes.vue?vue&type=script&lang=js& */ "./resources/js/components/mensajes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mensajes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/mensajes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/mensajes.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/mensajes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mensajes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mensajes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./mensajes.vue?vue&type=template&id=c3ea8e82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mensajes.vue?vue&type=template&id=c3ea8e82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mensajes_vue_vue_type_template_id_c3ea8e82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
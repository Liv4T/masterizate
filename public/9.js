(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['module', 'disabled', 'playing'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    /*
    if(this.module)
    {
        this.module.sentences=JSON.parse(this.data).sentences;
        this.module.sentences.forEach(s=>{
            if(!s.responses) s.responses=[];
              s.properties.forEach(p=>{
                s.responses.push('');
            })
        });
    }
    else{
        this.module.sentences=[];
    }*/
    //this.module.sentences=[];
  },
  methods: {
    AddSentenceEvent: function AddSentenceEvent() {
      this.module.sentences.push({
        content: '',
        properties: []
      });
    },
    AddInputEvent: function AddInputEvent(i_sentence, sentence) {
      sentence.content = "".concat(sentence.content, " ~input~");
      this.EvaluateContent(i_sentence);
    },
    RefreshContent: function RefreshContent(i_sentence, sentence) {
      sentence.content = "".concat(sentence.content, " ");
      this.EvaluateContent(i_sentence);
    },
    RefreshResponse: function RefreshResponse(i_sentence) {
      var d = {
        sentences: [],
        complete: false,
        score: 0
      };
      var total = 0;
      var corrects = 0;
      this.module.sentences.forEach(function (s) {
        var res = [];
        var i = 0;
        s.responses.forEach(function (r) {
          var responses_correct = s.properties[i].text.split(',');
          var isCorrect = responses_correct.filter(function (p) {
            return p.toLowerCase() == r.toLowerCase();
          }).length > 0;

          if (isCorrect) {
            corrects++;
          }

          total++;
          res.push({
            response: r,
            isCorrect: isCorrect
          });
          i++;
        });
      });
      d.complete = this.module.sentences[i_sentence].responses.filter(function (p) {
        return p == '';
      }).length == 0;
      d.score = corrects * 5 / total;
      d.sentences = this.module.sentences;
      +this.$emit('refresh-data', d);
    },
    EvaluateContent: function EvaluateContent(i_sentence) {
      var _this = this;

      if (!this.module.sentences[i_sentence].content) return;
      this.module.sentences[i_sentence].content_array = [];
      var i = 0;
      this.module.sentences[i_sentence].content.split(/(\~input\~)/g).forEach(function (e) {
        if (e != '~input~') {
          _this.module.sentences[i_sentence].content_array.push({
            text: e
          });
        } else {
          if (_this.module.sentences[i_sentence].properties.length <= i) {
            _this.module.sentences[i_sentence].properties.push({
              text: ''
            });
          }

          i++;
        }
      });
      var dif = this.module.sentences[i_sentence].properties.length - i;

      for (var j = 0; j < dif; j++) {
        this.module.sentences[i_sentence].properties.splice(this.module.sentences[i_sentence].properties.length - 1 - j, 1);
      }

      this.$emit('refresh-data', {
        sentences: this.module.sentences,
        complete: this.module.sentences[i_sentence].properties.filter(function (p) {
          return p.text == '';
        }).length == 0
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.complete-sentence{\r\n    background-color:#e9ecefb5;\r\n    padding:5px;\n}\n.input-word{\r\n    height:30px ;\r\n    border-radius: 5px;\r\n    background-color:rgb(179, 209, 255);\r\n    border-width: 0px;\r\n    padding: 0px 15px;\r\n    color:black;\n}\n.paragraph-sentence>p{\r\n    line-height: 3.5;\r\n    font-weight: 700;\r\n    text-align: justify;\n}\n.paragraph-sentence-preview>p{\r\n    line-height: 3.0;\r\n    font-weight: 600;\r\n    text-align: justify;\r\n    font-size: 1.2em;\n}\n.input-color{\r\n    background-color:#fffde7;\n}\n.label-preview{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\n}\n.label-preview_button{\r\n     -webkit-animation-duration: 5s;\r\n             animation-duration: 5s;\r\n     outline:none;\n}\n.label-preview_button:hover{\r\n    transform: rotate(360deg) ;\n}\n.label-preview_button:hover>svg{\r\n    fill:#61f174;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=template&id=44b6a397&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=template&id=44b6a397& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "complete-sentence" },
    [
      _c("div", { staticClass: "row " }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 text-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button", disabled: _vm.disabled },
              on: { click: _vm.AddSentenceEvent }
            },
            [_vm._v("Agregar oración")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.module.sentences, function(sentence, k_sentence) {
        return _c("div", { key: k_sentence, staticClass: "row" }, [
          _c("div", { staticClass: "col-sm " }, [
            _c("div", { staticClass: "card padding-10" }, [
              !_vm.disabled
                ? _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12  col-lg-6 padding-10" },
                      [
                        _c("label", [_vm._v("Contenido de la oración:")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: sentence.content,
                              expression: "sentence.content"
                            }
                          ],
                          staticClass: "form-control input-color",
                          attrs: { rows: "4", placeholder: "Contenido" },
                          domProps: { value: sentence.content },
                          on: {
                            change: function($event) {
                              return _vm.EvaluateContent(k_sentence, sentence)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(sentence, "content", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm text-left" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-link",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.AddInputEvent(
                                      k_sentence,
                                      sentence
                                    )
                                  }
                                }
                              },
                              [_vm._v("Agregar campo")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._l(sentence.properties, function(
                          property,
                          k_property
                        ) {
                          return _c(
                            "div",
                            { key: k_property, staticClass: "row" },
                            [
                              _c("div", { staticClass: "col-sm padding-10" }, [
                                _c("label", [
                                  _vm._v(
                                    "Respuesta del campo " +
                                      _vm._s(k_property + 1) +
                                      ":"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: property.text,
                                      expression: "property.text"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "opción1,opción2 "
                                  },
                                  domProps: { value: property.text },
                                  on: {
                                    change: function($event) {
                                      return _vm.EvaluateContent(
                                        k_sentence,
                                        sentence
                                      )
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        property,
                                        "text",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12  col-lg-6 padding-10" }, [
                      _c("div", { staticClass: "label-preview" }, [
                        _c("label", [_vm._v("Previsualización:")]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-default label-preview_button",
                            on: {
                              click: function($event) {
                                return _vm.RefreshContent(k_sentence, sentence)
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  fill: "black",
                                  width: "18px",
                                  height: "18px"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: { d: "M0 0h24v24H0z", fill: "none" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "paragraph-sentence" }, [
                        _c(
                          "p",
                          _vm._l(
                            _vm.module.sentences[k_sentence].content_array,
                            function(property, k_content) {
                              return _c("span", { key: k_content }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(property.text) +
                                    " "
                                ),
                                sentence.properties[k_content]
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            sentence.properties[k_content].text,
                                          expression:
                                            "sentence.properties[k_content].text"
                                        }
                                      ],
                                      staticClass: "input-word",
                                      attrs: {
                                        type: "text",
                                        placeholder:
                                          "Respuesta " + (k_content + 1)
                                      },
                                      domProps: {
                                        value:
                                          sentence.properties[k_content].text
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            sentence.properties[k_content],
                                            "text",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ])
                            }
                          ),
                          0
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.disabled
                ? _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 padding-10" }, [
                      _c("label", [_vm._v("Completar las oraciones:")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "paragraph-sentence-preview" }, [
                        _c(
                          "p",
                          _vm._l(
                            _vm.module.sentences[k_sentence].content_array,
                            function(property, k_content) {
                              return _c("span", { key: k_content }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(property.text) +
                                    "  "
                                ),
                                sentence.properties[k_content]
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: sentence.responses[k_content],
                                          expression:
                                            "sentence.responses[k_content]"
                                        }
                                      ],
                                      staticClass: "input-word",
                                      attrs: {
                                        type: "text",
                                        placeholder:
                                          "Respuesta " + (k_content + 1)
                                      },
                                      domProps: {
                                        value: sentence.responses[k_content]
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.RefreshResponse(k_sentence)
                                        },
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            sentence.responses,
                                            k_content,
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ])
                            }
                          ),
                          0
                        )
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 text-left" }, [
      _c("h4", [_vm._v("Completar la oración")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/activityCompleteSentenceComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/activityCompleteSentenceComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activityCompleteSentenceComponent_vue_vue_type_template_id_44b6a397___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activityCompleteSentenceComponent.vue?vue&type=template&id=44b6a397& */ "./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=template&id=44b6a397&");
/* harmony import */ var _activityCompleteSentenceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activityCompleteSentenceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _activityCompleteSentenceComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _activityCompleteSentenceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activityCompleteSentenceComponent_vue_vue_type_template_id_44b6a397___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activityCompleteSentenceComponent_vue_vue_type_template_id_44b6a397___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/activityCompleteSentenceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCompleteSentenceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=template&id=44b6a397&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=template&id=44b6a397& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_template_id_44b6a397___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCompleteSentenceComponent.vue?vue&type=template&id=44b6a397& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCompleteSentenceComponent.vue?vue&type=template&id=44b6a397&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_template_id_44b6a397___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCompleteSentenceComponent_vue_vue_type_template_id_44b6a397___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
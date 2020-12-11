(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['module', 'disabled'],
  data: function data() {
    return {
      loading_component: true,
      rows: 15,
      cols: 15,
      table: [],
      words: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.module.table === undefined) {
      this.module.table = [];
      this.table = [];

      for (var r = 0; r < this.rows; r++) {
        var cols = [];

        for (var c = 0; c < this.cols; c++) {
          cols.push({
            index: c,
            letter: ''
          });
        }

        this.table.push({
          index: r,
          cols: cols
        });
        cols = [];
      }
    } else {
      this.table = [];
      this.words = this.module.words;
      this.module.table.forEach(function (r) {
        var col = [];
        r.cols.forEach(function (c) {
          if (c.letter == null) {
            c.letter = '';
          }

          col.push(c);
        });
        r.cols = col;

        _this.table.push(r);
      });
      this.validateWords();
    }

    this.loadingComponent();
  },
  methods: {
    loadingComponent: function loadingComponent() {
      var _this2 = this;

      this.loading_component = true;
      setTimeout(function () {
        _this2.loading_component = false;
      }, 1000);
    },
    downEvent: function downEvent(k_row, k_col) {
      if (this.cols == k_col + 1) return;
      var refs = this.$refs;
      var input = '';
      eval('input=refs.input_' + k_row + '_' + (k_col + 1));
      input[0].focus();
      input[0].select();
    },
    rightEvent: function rightEvent(k_row, k_col) {
      if (this.rows == k_row + 1) return;
      var refs = this.$refs;
      var input = '';
      eval('input=refs.input_' + (k_row + 1) + '_' + k_col);
      input[0].focus();
      input[0].select();
    },
    topEvent: function topEvent(k_row, k_col) {
      if (0 == k_col) return;
      var refs = this.$refs;
      var input = '';
      eval('input=refs.input_' + k_row + '_' + (k_col - 1));
      input[0].focus();
      input[0].select();
    },
    leftEvent: function leftEvent(k_row, k_col) {
      if (0 == k_row) return;
      var refs = this.$refs;
      var input = '';
      eval('input=refs.input_' + (k_row - 1) + '_' + k_col);
      input[0].focus();
      input[0].select();
    },
    InputChanged: function InputChanged(k_row, k_col) {
      this.module.table = this.table;
    },
    validateWords: function validateWords() {
      var word = '';
      var existLetter = false;
      var letters = [];

      for (var r = 0; r < this.rows; r++) {
        for (var c = 0; c < this.cols; c++) {
          var cell = this.table[r].cols[c];
          word += cell.letter;
          letters.push({
            r: r,
            c: c
          });

          if (cell.letter != '' && !existLetter) {
            word = cell.letter;
            letters = [{
              r: r,
              c: c
            }];
          } else if (cell.letter == '' && existLetter && word.length > 1) {
            if (this.words.filter(function (p) {
              return p.word === word.trim();
            }).length == 0) {
              this.words.push({
                word: word,
                content: '',
                letters: letters
              });
            }

            existLetter = false;
            word = '';
            letters = [];
          }

          existLetter = cell.letter != '';
        }
      }

      for (var _c = 0; _c < this.cols; _c++) {
        for (var _r = 0; _r < this.rows; _r++) {
          var _cell = this.table[_r].cols[_c];
          word += _cell.letter;
          letters.push({
            r: _r,
            c: _c
          });

          if (_cell.letter != '' && !existLetter) {
            word = _cell.letter;
            letters = [{
              r: _r,
              c: _c
            }];
          } else if (_cell.letter == '' && existLetter && word.length > 1) {
            if (this.words.filter(function (p) {
              return p.word === word.trim();
            }).length == 0) {
              this.words.push({
                word: word,
                content: '',
                letters: letters
              });
            }

            existLetter = false;
            word = '';
            letters = [];
          }

          existLetter = _cell.letter != '';
        }
      }

      if (this.words.length == 0) {
        alert('Por favor ingrese las palabras del crucigrama en la tabla.');
      } else {
        this.module.words = this.words;
        this.module.table = this.table;
      }
    },
    SetWordContentEvent: function SetWordContentEvent(content, k_word) {
      this.words[k_word].content = content;
      this.module.words = this.words;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.crossword{\n    background-color:#e9ecefb5;\n    padding:5px;\n}\n.crossword_table{\n    width:100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n.crossword_table_row{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.crossword_table_col{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    border:1px solid #e2e2e2;\n}\n.crossword_table_col_input{\n    width:40px;\n    height: 40px;\n    text-align: center;\n    border:2px solid #fff;\n    text-transform: uppercase;\n}\n.crossword_table_col_input-active\n{\n    border:2px solid #4b87f7;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "crossword" },
    [
      _vm._m(0),
      _vm._v(" "),
      !_vm.disabled ? _c("div", { staticClass: "row" }, [_vm._m(1)]) : _vm._e(),
      _vm._v(" "),
      _vm.loading_component
        ? _c("div", { staticClass: "row" }, [_vm._m(2)])
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading_component
        ? [
            _c("div", { staticClass: "card padding-10" }, [
              _c(
                "div",
                { staticClass: "crossword_table" },
                _vm._l(_vm.table, function(row, k_row) {
                  return _c(
                    "div",
                    { key: k_row, staticClass: "crossword_table_row" },
                    _vm._l(row.cols, function(col, k_col) {
                      return _c(
                        "div",
                        { key: k_col, staticClass: "crossword_table_col" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: col.letter,
                                expression: "col.letter"
                              }
                            ],
                            ref: "input_" + k_row + "_" + k_col,
                            refInFor: true,
                            staticClass: "crossword_table_col_input ",
                            class: {
                              "crossword_table_col_input-active":
                                col.letter != "" && col.letter != null
                            },
                            attrs: { maxlength: 1, type: "text" },
                            domProps: { value: col.letter },
                            on: {
                              change: function($event) {
                                return _vm.InputChanged(k_row, k_col)
                              },
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(col, "letter", $event.target.value)
                                },
                                function($event) {
                                  col.letter = $event.target.value.toUpperCase()
                                }
                              ],
                              keyup: [
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "down",
                                      40,
                                      $event.key,
                                      ["Down", "ArrowDown"]
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.downEvent(k_row, k_col)
                                },
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "right",
                                      39,
                                      $event.key,
                                      ["Right", "ArrowRight"]
                                    )
                                  ) {
                                    return null
                                  }
                                  if (
                                    "button" in $event &&
                                    $event.button !== 2
                                  ) {
                                    return null
                                  }
                                  return _vm.rightEvent(k_row, k_col)
                                },
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "up",
                                      38,
                                      $event.key,
                                      ["Up", "ArrowUp"]
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.topEvent(k_row, k_col)
                                },
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "left",
                                      37,
                                      $event.key,
                                      ["Left", "ArrowLeft"]
                                    )
                                  ) {
                                    return null
                                  }
                                  if (
                                    "button" in $event &&
                                    $event.button !== 0
                                  ) {
                                    return null
                                  }
                                  return _vm.leftEvent(k_row, k_col)
                                }
                              ]
                            }
                          })
                        ]
                      )
                    }),
                    0
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm padding-10 text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.validateWords }
                    },
                    [_vm._v("Ingresar contenido")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card padding-10" },
              [
                _vm._m(3),
                _vm._v(" "),
                _vm._l(_vm.words, function(word, k_word) {
                  return _c("div", { key: k_word, staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4 padding-10" }, [
                      _c("label", [_vm._v("Palabra:")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: word.word,
                            expression: "word.word"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: true },
                        domProps: { value: word.word },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(word, "word", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-8 padding-10" },
                      [
                        _c("label", [_vm._v("Pregunta")]),
                        _vm._v(" "),
                        _c("editor-component", {
                          attrs: {
                            content: word.content,
                            readonly: _vm.disabled
                          },
                          on: {
                            updateText: function($event) {
                              return _vm.SetWordContentEvent($event, k_word)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ])
                })
              ],
              2
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-8 text-left" }, [
        _c("h4", [_vm._v("Crucigrama")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm padding-10" }, [
      _c("p", [
        _vm._v(
          "*Ingrese cada letra de cada palabra en el orden vertical u horizontal que desee."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm padding-10" }, [
      _c("span", [_vm._v("Cargando...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-8 text-left" }, [
        _c("h4", [_vm._v("Preguntas del crucigrama")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/activityCrosswordComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/activityCrosswordComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd& */ "./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd&");
/* harmony import */ var _activityCrosswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activityCrosswordComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _activityCrosswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/activityCrosswordComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCrosswordComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCrosswordComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/activityCrosswordComponent.vue?vue&type=template&id=1f48e3cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activityCrosswordComponent_vue_vue_type_template_id_1f48e3cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
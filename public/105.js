(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AnswerVote.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AnswerVote.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loggedUserId: this.login,
      votes: this.answer.votes_count,
      answerId: this.answer.id
    };
  },
  props: ['answer', 'login'],
  computed: {
    classes: function classes() {
      return this.loggedUserId === 0 ? 'off' : '';
    }
  },
  methods: {
    voteIncrease: function voteIncrease() {
      var _this = this;

      if (this.loggedUserId !== this.answer.user_id) {
        axios.post("/answers/".concat(this.answerId, "/vote"), {
          'vote': 1
        }).then(function (response) {
          Swal.fire('great', response.data.message, 'success');
          _this.votes = response.data.votes;
        })["catch"](function (error) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: _this.loggedUserId === 0 ? 'please sign in' : error.response.data.message
          });
        });
      }
    },
    voteDecrease: function voteDecrease() {
      var _this2 = this;

      if (this.loggedUserId !== this.answer.user_id) {
        axios.post("/answers/".concat(this.answerId, "/vote"), {
          'vote': this.vote--
        }).then(function (response) {
          _this2.votes--;
          Swal.fire('oh!', 'your vote is canceled', 'success');
          _this2.votes = response.data.votes;
        })["catch"](function (error) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: _this2.loggedUserId === 0 ? 'please sign in' : error.response.data.message
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AnswerVote.vue?vue&type=template&id=50a98073&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AnswerVote.vue?vue&type=template&id=50a98073&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _c(
      "a",
      {
        staticClass: "vote-up classes",
        attrs: { title: "this answer is useful" },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.voteIncrease($event)
          }
        }
      },
      [_c("i", { staticClass: "fa fa-caret-up fa-3x" })]
    ),
    _vm._v(" "),
    _c("span", { staticClass: "vote-count" }, [_vm._v(_vm._s(_vm.votes))]),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "vote-down off",
        attrs: { title: "this answer is not useful" },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.voteDecrease($event)
          }
        }
      },
      [_c("i", { staticClass: "fa fa-caret-down fa-3x" })]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AnswerVote.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AnswerVote.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnswerVote_vue_vue_type_template_id_50a98073_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnswerVote.vue?vue&type=template&id=50a98073&scoped=true& */ "./resources/js/components/AnswerVote.vue?vue&type=template&id=50a98073&scoped=true&");
/* harmony import */ var _AnswerVote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerVote.vue?vue&type=script&lang=js& */ "./resources/js/components/AnswerVote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnswerVote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnswerVote_vue_vue_type_template_id_50a98073_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnswerVote_vue_vue_type_template_id_50a98073_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "50a98073",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AnswerVote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AnswerVote.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/AnswerVote.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerVote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AnswerVote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AnswerVote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerVote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AnswerVote.vue?vue&type=template&id=50a98073&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/AnswerVote.vue?vue&type=template&id=50a98073&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerVote_vue_vue_type_template_id_50a98073_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AnswerVote.vue?vue&type=template&id=50a98073&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AnswerVote.vue?vue&type=template&id=50a98073&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerVote_vue_vue_type_template_id_50a98073_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerVote_vue_vue_type_template_id_50a98073_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
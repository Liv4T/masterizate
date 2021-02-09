(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuestionVote.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuestionVote.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
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
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      que_id: this.question.id,
      isFavorited: this.question.favorites.is_favorited,
      isSignedIn: this.auth.name,
      favoriteCount: this.question.favorites_count
    };
  },
  props: ["question", "auth"],
  computed: {
    classes: function classes() {
      return ["favorite", "mt-2", !this.isSignedIn ? "off" : this.isFavorited ? "favorited" : ""];
    }
  },
  methods: {
    favCountOperation: function favCountOperation() {
      this.isFavorited ? this.decrease() : this.increase();
    },
    decrease: function decrease() {
      var _this = this;

      axios["delete"]("/questions/".concat(this.que_id, "/favorite")).then(function (response) {
        _this.favoriteCount--;
        _this.isFavorited = false;
      })["catch"](function (error) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: error.response.data.message
        });
      });
    },
    increase: function increase() {
      var _this2 = this;

      axios.post("/questions/".concat(this.que_id, "/favorite")).then(function (response) {
        _this2.favoriteCount++;
        _this2.isFavorited = true;
      })["catch"](function (error) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: error.response.data.message
        });
      });
=======
//
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
      votes: this.question.votes_count,
      questionId: this.question.id
    };
  },
  props: ["question", "login"],
  computed: {
    classes: function classes() {
      return this.loggedUserId === 0 ? "off" : "";
    }
  },
  methods: {
    voteUp: function voteUp() {
      var _this = this;

      if (this.question.user_id !== this.loggedUserId) {
        axios.post("/questions/".concat(this.questionId, "/vote"), {
          vote: 1
        }).then(function (response) {
          Swal.fire("great", response.data.message, "success");
          _this.votes = response.data.votes;
        })["catch"](function (error) {
          Swal.fire({
            type: "error",
            title: "Oops...",
            text: _this.loggedUserId === 0 ? "please sign in" : error.response.data.message
          });
        });
      }
    },
    voteDown: function voteDown() {
      var _this2 = this;

      if (this.question.user_id !== this.loggedUserId) {
        axios.post("/questions/".concat(this.questionId, "/vote"), {
          vote: this.vote--
        }).then(function (response) {
          Swal.fire("great", "your vote is canceled", "success");
          _this2.votes = response.data.votes;
        })["catch"](function (error) {
          Swal.fire({
            type: "error",
            title: "Oops...",
            text: _this2.loggedUserId === 0 ? "please sign in" : error.response.data.message
          });
        });
      }
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuestionVote.vue?vue&type=template&id=1f809bdb&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuestionVote.vue?vue&type=template&id=1f809bdb&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
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
<<<<<<< HEAD
  return _vm.isSignedIn ? _c("div") : _vm._e()
=======
  return _c("div")
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/FavoriteQuestion.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue ***!
  \******************************************************/
=======
/***/ "./resources/js/components/QuestionVote.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/QuestionVote.vue ***!
  \**************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& */ "./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&");
/* harmony import */ var _FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FavoriteQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _QuestionVote_vue_vue_type_template_id_1f809bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionVote.vue?vue&type=template&id=1f809bdb&scoped=true& */ "./resources/js/components/QuestionVote.vue?vue&type=template&id=1f809bdb&scoped=true&");
/* harmony import */ var _QuestionVote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionVote.vue?vue&type=script&lang=js& */ "./resources/js/components/QuestionVote.vue?vue&type=script&lang=js&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "649c01e6",
=======
  _QuestionVote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionVote_vue_vue_type_template_id_1f809bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuestionVote_vue_vue_type_template_id_1f809bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f809bdb",
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/FavoriteQuestion.vue"
=======
component.options.__file = "resources/js/components/QuestionVote.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
=======
/***/ "./resources/js/components/QuestionVote.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/QuestionVote.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FavoriteQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& ***!
  \*************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionVote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuestionVote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuestionVote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionVote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuestionVote.vue?vue&type=template&id=1f809bdb&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/QuestionVote.vue?vue&type=template&id=1f809bdb&scoped=true& ***!
  \*********************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FavoriteQuestion.vue?vue&type=template&id=649c01e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteQuestion_vue_vue_type_template_id_649c01e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionVote_vue_vue_type_template_id_1f809bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuestionVote.vue?vue&type=template&id=1f809bdb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuestionVote.vue?vue&type=template&id=1f809bdb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionVote_vue_vue_type_template_id_1f809bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionVote_vue_vue_type_template_id_1f809bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);
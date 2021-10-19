(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorRegister.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorRegister.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../connectionDbFirebase */ "./connectionDbFirebase.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component("multiselect", vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      name: "",
      last_name: "",
      email: "",
      user_name: "",
      id_number: "",
      password: "",
      country: "",
      city: "",
      address: "",
      phone: "",
      description: "",
      twitter_profile: "",
      facebook_profile: "",
      instagram_profile: "",
      linkedin_profile: "",
      picture: "",
      documento_certificacion: "",
      documento_recomendacion: "",
      areas: [],
      section_education: [],
      section_experience: [],
      classes: [],
      keywords: [],
      person: {
        profile: {
          EDUCACION: [],
          EXPERIENCIA: [],
          PAIS: ""
        }
      }
    };
  },
  mounted: function mounted() {
    this.getArea();
  },
  methods: {
    getArea: function getArea() {
      var _this = this;

      axios.get('/getArea').then(function (response) {
        var area = response.data;

        for (var i = 0; i < area.length; i++) {
          _this.areas.push({
            id: area[i].id,
            text: area[i].area
          });
        }
      });
    },
    addData: function addData() {
      axios.post('tutorRegister', {
        email: this.email,
        user_name: this.user_name,
        password: this.password,
        name: this.name,
        last_name: this.last_name,
        id_number: this.id_number,
        country: this.country,
        city: this.city,
        address: this.address,
        phone: this.phone,
        picture: this.picture,
        description: this.description,
        twitter_profile: this.twitter_profile,
        facebook_profile: this.facebook_profile,
        instagram_profile: this.instagram_profile,
        linkedin_profile: this.linkedin_profile,
        section_education: JSON.stringify(this.section_education),
        section_experience: JSON.stringify(this.section_experience),
        documento_certificacion: this.documento_certificacion,
        documento_recomendacion: this.documento_recomendacion,
        classes: JSON.stringify(this.classes),
        keywords: this.keywords.toString()
      }).then(function (response) {
        console.log(response.data);
        window.location = '/inicio';
      })["catch"](function (error) {
        toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
        console.log(error);
      });
    },
    previewFiles: function previewFiles(event) {
      var _this2 = this;

      var files = event.target.files[0];
      var storageRef = _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_0__["default"].storage().ref("images/tutorProfile/".concat(this.id_number)).put(files);
      storageRef.on("images/tutorProfile/".concat(this.id_number), function () {
        storageRef.snapshot.ref.getDownloadURL().then(function (url) {
          _this2[event.target.name] = url;
        });
      });
    },
    AddEducation: function AddEducation() {
      this.section_education.push({
        titulo: "",
        universidad: "",
        fechagrado: "",
        descripcion: ""
      });
    },
    RemoveEducation: function RemoveEducation(k) {
      this.section_education.splice(k, 1);
    },
    AddExperience: function AddExperience() {
      this.section_experience.push({
        institucion: "",
        fechainicio: "",
        fechafin: "",
        materias: [""],
        descripcion: ""
      });
    },
    RemoveExperience: function RemoveExperience(k) {
      this.section_experience.splice(k, 1);
    },
    AddAssignature: function AddAssignature(k_item) {
      this.section_experience[k_item].materias.push("");
    },
    RemoveAssignature: function RemoveAssignature(k_item, k_assignature) {
      this.section_experience[k_item].materias.splice(k_assignature, 1);
    },
    AddClasses: function AddClasses() {
      this.classes.push({
        type: "",
        description: ""
      });
    },
    RemoveClasses: function RemoveClasses(k_item) {
      this.classes.splice(k_item, 1);
    },
    AddKeyWord: function AddKeyWord() {
      this.keywords.push("");
    },
    RemoveKeyWord: function RemoveKeyWord(index) {
      this.keywords.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.padding-content{\r\n    padding-left: 109px; \r\n    padding-right: 109px;\n}\n@media (max-width: 600px) {\n.padding-content{\r\n        padding-left: 10px; \r\n        padding-right: 20px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tutorRegister.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorRegister.vue?vue&type=template&id=2b79cb3e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorRegister.vue?vue&type=template&id=2b79cb3e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "padding-content" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-12", attrs: { id: "crud" } }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("form", [
              _c("div", { staticClass: "container" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row shadow p-3 mb-5 bg-body rounded" },
                  [
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Email")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email", id: "email" },
                          domProps: { value: _vm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Nombre de Usuario")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user_name,
                              expression: "user_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email", id: "email" },
                          domProps: { value: _vm.user_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.user_name = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "password" } }, [
                          _vm._v("Contraseña")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "password", id: "password" },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.password = $event.target.value
                            }
                          }
                        })
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "row row-cols-3 shadow p-3 mb-5 bg-body rounded"
                  },
                  [
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Nombre")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "name", id: "name" },
                          domProps: { value: _vm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "last_name" } }, [
                          _vm._v("Apellido")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.last_name,
                              expression: "last_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "last_name", id: "last_name" },
                          domProps: { value: _vm.last_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.last_name = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "id_number" } }, [
                          _vm._v("Identificación")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.id_number,
                              expression: "id_number"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "id_number", id: "id_number" },
                          domProps: { value: _vm.id_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.id_number = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "country" } }, [
                          _vm._v("Pais")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.country,
                              expression: "country"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "country" },
                          domProps: { value: _vm.country },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.country = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "city" } }, [
                          _vm._v("Ciudad")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.city,
                              expression: "city"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "city" },
                          domProps: { value: _vm.city },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.city = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "address" } }, [
                          _vm._v("Dirección")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.address,
                              expression: "address"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "address" },
                          domProps: { value: _vm.address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.address = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "phone" } }, [
                          _vm._v("Telefono")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.phone,
                              expression: "phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "number", id: "phone" },
                          domProps: { value: _vm.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.phone = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _vm.picture
                          ? _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-primary btn-block letra-poppins",
                                attrs: { href: _vm.picture, target: "_blank" }
                              },
                              [_vm._v("Foto cargada")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "picture" } }, [
                          _vm._v("Foto")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control-file",
                          attrs: {
                            type: "file",
                            name: "picture",
                            id: "picture"
                          },
                          on: { change: _vm.previewFiles }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "description" } }, [
                          _vm._v("Descripción")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.description,
                              expression: "description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "description", rows: "3" },
                          domProps: { value: _vm.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.description = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col mt-5" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "twitter_profile" } }, [
                          _vm._v("Perfil de Twitter")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.twitter_profile,
                              expression: "twitter_profile"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "twitter_profile" },
                          domProps: { value: _vm.twitter_profile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.twitter_profile = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col mt-5" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "facebook_profile" } }, [
                          _vm._v("Perfil de Facebook")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.facebook_profile,
                              expression: "facebook_profile"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "facebook_profile" },
                          domProps: { value: _vm.facebook_profile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.facebook_profile = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col mt-5" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "instagram_profile" } }, [
                          _vm._v("Perfil de Instagram")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.instagram_profile,
                              expression: "instagram_profile"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "instagram_profile" },
                          domProps: { value: _vm.instagram_profile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.instagram_profile = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "linkedin_profile" } }, [
                          _vm._v("Perfil de Linkedin")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.linkedin_profile,
                              expression: "linkedin_profile"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "linkedin_profile" },
                          domProps: { value: _vm.linkedin_profile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.linkedin_profile = $event.target.value
                            }
                          }
                        })
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "card-background" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12 col-sm-6" }, [
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _vm._l(_vm.section_education, function(
                                item,
                                k_item
                              ) {
                                return _c("div", { key: k_item }, [
                                  k_item > 0
                                    ? _c(
                                        "div",
                                        { staticClass: "form-group text-left" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-secondary letra-boldfont",
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return (function() {
                                                    return _vm.RemoveEducation(
                                                      k_item
                                                    )
                                                  })($event)
                                                }
                                              }
                                            },
                                            [_vm._v("-")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.section_education[k_item]
                                              .titulo,
                                          expression:
                                            "section_education[k_item].titulo"
                                        }
                                      ],
                                      staticClass:
                                        "form-control letra-boldfont",
                                      attrs: {
                                        type: "text",
                                        name: "title",
                                        placeholder: "Titulo"
                                      },
                                      domProps: {
                                        value:
                                          _vm.section_education[k_item].titulo
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.section_education[k_item],
                                            "titulo",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.section_education[k_item]
                                              .universidad,
                                          expression:
                                            "section_education[k_item].universidad"
                                        }
                                      ],
                                      staticClass:
                                        "form-control letra-boldfont",
                                      attrs: {
                                        type: "text",
                                        name: "university",
                                        placeholder: "Universidad"
                                      },
                                      domProps: {
                                        value:
                                          _vm.section_education[k_item]
                                            .universidad
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.section_education[k_item],
                                            "universidad",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group text-left" },
                                    [
                                      _vm._m(4, true),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.section_education[k_item]
                                                .fechagrado,
                                            expression:
                                              "section_education[k_item].fechagrado"
                                          }
                                        ],
                                        staticClass:
                                          "form-control letra-boldfont",
                                        attrs: {
                                          type: "date",
                                          name: "gradeDate",
                                          id: "gradeDate",
                                          placeholder: "Fecha grado"
                                        },
                                        domProps: {
                                          value:
                                            _vm.section_education[k_item]
                                              .fechagrado
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.section_education[k_item],
                                              "fechagrado",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.section_education[k_item]
                                              .descripcion,
                                          expression:
                                            "section_education[k_item].descripcion"
                                        }
                                      ],
                                      staticClass:
                                        "form-control letra-boldfont",
                                      attrs: {
                                        rows: "4",
                                        name: "description",
                                        placeholder: "Descripción"
                                      },
                                      domProps: {
                                        value:
                                          _vm.section_education[k_item]
                                            .descripcion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.section_education[k_item],
                                            "descripcion",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              }),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-primary letra-poppins",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return (function() {
                                          return _vm.AddEducation()
                                        })($event)
                                      }
                                    }
                                  },
                                  [_vm._v("Agregar otra educación")]
                                )
                              ])
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-sm-6" }, [
                          _vm._m(5),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _vm._l(_vm.section_experience, function(
                                item,
                                k_item
                              ) {
                                return _c("div", { key: k_item }, [
                                  k_item > 0
                                    ? _c(
                                        "div",
                                        { staticClass: "form-group text-left" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-secondary letra-boldfont",
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return (function() {
                                                    return _vm.RemoveExperience(
                                                      k_item
                                                    )
                                                  })($event)
                                                }
                                              }
                                            },
                                            [_vm._v("-")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.section_experience[k_item]
                                              .institucion,
                                          expression:
                                            "section_experience[k_item].institucion"
                                        }
                                      ],
                                      staticClass:
                                        "form-control letra-boldfont",
                                      attrs: {
                                        type: "text",
                                        id: "institucion",
                                        placeholder: "Institución"
                                      },
                                      domProps: {
                                        value:
                                          _vm.section_experience[k_item]
                                            .institucion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.section_experience[k_item],
                                            "institucion",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        { staticClass: "col-6 text-left" },
                                        [
                                          _vm._m(6, true),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.section_experience[k_item]
                                                    .fechainicio,
                                                expression:
                                                  "section_experience[k_item].fechainicio"
                                              }
                                            ],
                                            staticClass:
                                              "form-control letra-boldfont",
                                            attrs: {
                                              type: "date",
                                              name: "initialDate",
                                              id: "initialDate",
                                              placeholder: "Fecha inicio"
                                            },
                                            domProps: {
                                              value:
                                                _vm.section_experience[k_item]
                                                  .fechainicio
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.section_experience[
                                                    k_item
                                                  ],
                                                  "fechainicio",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-6 text-left" },
                                        [
                                          _vm._m(7, true),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.section_experience[k_item]
                                                    .fechafin,
                                                expression:
                                                  "section_experience[k_item].fechafin"
                                              }
                                            ],
                                            staticClass:
                                              "form-control letra-boldfont",
                                            attrs: {
                                              type: "date",
                                              name: "endDate",
                                              id: "endDate",
                                              placeholder: "Fecha fin"
                                            },
                                            domProps: {
                                              value:
                                                _vm.section_experience[k_item]
                                                  .fechafin
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.section_experience[
                                                    k_item
                                                  ],
                                                  "fechafin",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "div",
                                      { staticClass: "row" },
                                      [
                                        _vm._l(
                                          _vm.section_experience[k_item]
                                            .materias,
                                          function(assignature, k_assignature) {
                                            return _c(
                                              "div",
                                              {
                                                key: k_assignature,
                                                staticClass: "col-6 col-sm-4"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group mb-3"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm
                                                              .section_experience[
                                                              k_item
                                                            ].materias[
                                                              k_assignature
                                                            ],
                                                          expression:
                                                            "section_experience[k_item].materias[k_assignature]"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control letra-boldfont",
                                                      attrs: {
                                                        type: "text",
                                                        placeholder: "Materia",
                                                        "aria-label": "Materia"
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm
                                                            .section_experience[
                                                            k_item
                                                          ].materias[
                                                            k_assignature
                                                          ]
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm
                                                              .section_experience[
                                                              k_item
                                                            ].materias,
                                                            k_assignature,
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    k_assignature > 0
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "input-group-append"
                                                          },
                                                          [
                                                            _c(
                                                              "button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-outline-secondary letra-boldfont",
                                                                attrs: {
                                                                  type: "button"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    $event.preventDefault()
                                                                    return (function() {
                                                                      return _vm.RemoveAssignature(
                                                                        k_item,
                                                                        k_assignature
                                                                      )
                                                                    })($event)
                                                                  }
                                                                }
                                                              },
                                                              [_vm._v("-")]
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ]
                                                )
                                              ]
                                            )
                                          }
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-6 col-sm-4 text-center"
                                          },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary letra-boldfont",
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return (function() {
                                                      return _vm.AddAssignature(
                                                        k_item
                                                      )
                                                    })($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("+")]
                                            )
                                          ]
                                        )
                                      ],
                                      2
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.section_experience[k_item]
                                              .descripcion,
                                          expression:
                                            "section_experience[k_item].descripcion"
                                        }
                                      ],
                                      staticClass:
                                        "form-control letra-boldfont",
                                      attrs: {
                                        rows: "4",
                                        placeholder: "Descripción del cargo"
                                      },
                                      domProps: {
                                        value:
                                          _vm.section_experience[k_item]
                                            .descripcion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.section_experience[k_item],
                                            "descripcion",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col-6" }, [
                                        _vm.documento_certificacion
                                          ? _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-block letra-poppins",
                                                attrs: {
                                                  href:
                                                    _vm.documento_certificacion,
                                                  target: "_blank"
                                                }
                                              },
                                              [_vm._v("Certificación cargada")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "custom-file" },
                                          [
                                            _c("input", {
                                              staticClass: "custom-file-input",
                                              attrs: {
                                                type: "file",
                                                name: "documento_certificacion",
                                                id: "documentCertifyFile"
                                              },
                                              on: { change: _vm.previewFiles }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "custom-file-label letra-boldfont",
                                                attrs: {
                                                  for: "documentCertifyFile"
                                                }
                                              },
                                              [_vm._v("Cargar certificación")]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-6 text-center" },
                                        [
                                          _vm.documento_recomendacion
                                            ? _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-primary btn-block letra-poppins",
                                                  attrs: {
                                                    href:
                                                      _vm.documento_recomendacion,
                                                    target: "_blank"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Recomendación cargada"
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "custom-file" },
                                            [
                                              _c("input", {
                                                staticClass:
                                                  "custom-file-input",
                                                attrs: {
                                                  type: "file",
                                                  name:
                                                    "documento_recomendacion",
                                                  id:
                                                    "documentRecommendationFile"
                                                },
                                                on: { change: _vm.previewFiles }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "custom-file-label letra-boldfont",
                                                  attrs: {
                                                    for:
                                                      "documentRecommendationFile"
                                                  }
                                                },
                                                [_vm._v("Cargar recomendación")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              }),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-primary letra-poppins",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return (function() {
                                          return _vm.AddExperience()
                                        })($event)
                                      }
                                    }
                                  },
                                  [_vm._v("Agregar otra experiencia")]
                                )
                              ])
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-sm-6" }, [
                          _vm._m(8),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _vm._l(_vm.classes, function(classs, k_class) {
                                return _c("section", { key: k_class }, [
                                  k_class
                                    ? _c(
                                        "div",
                                        { staticClass: "form-group text-left" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-secondary letra-boldfont",
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return (function() {
                                                    return _vm.RemoveClasses(
                                                      k_class
                                                    )
                                                  })($event)
                                                }
                                              }
                                            },
                                            [_vm._v("-")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("multiselect", {
                                        attrs: {
                                          name: "type",
                                          options: _vm.areas,
                                          multiple: false,
                                          "close-on-select": false,
                                          "clear-on-select": false,
                                          "preserve-search": false,
                                          placeholder: "Seleccione una",
                                          label: "text",
                                          "track-by": "id",
                                          "preselect-first": false
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "selection",
                                              fn: function(ref) {
                                                var values = ref.values
                                                var isOpen = ref.isOpen
                                                return [
                                                  values.length && !isOpen
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "multiselect__single"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                                    " +
                                                              _vm._s(
                                                                values.length
                                                              ) +
                                                              "\n                                                                    opciones\n                                                                    selecionadas\n                                                                "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        ),
                                        model: {
                                          value: classs.type,
                                          callback: function($$v) {
                                            _vm.$set(classs, "type", $$v)
                                          },
                                          expression: "classs.type"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: classs.description,
                                          expression: "classs.description"
                                        }
                                      ],
                                      staticClass:
                                        "form-control letra-boldfont",
                                      attrs: {
                                        rows: "4",
                                        placeholder: "Descripción"
                                      },
                                      domProps: { value: classs.description },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            classs,
                                            "description",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              }),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-primary letra-poppins",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return (function() {
                                          return _vm.AddClasses()
                                        })($event)
                                      }
                                    }
                                  },
                                  [_vm._v("Agregar otra clase")]
                                )
                              ])
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-sm-6" }, [
                          _vm._m(9),
                          _vm._v(" "),
                          _c("div", [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "div",
                                { staticClass: "row" },
                                [
                                  _vm._l(_vm.keywords, function(word, k_word) {
                                    return _c(
                                      "div",
                                      {
                                        key: k_word,
                                        staticClass: "col-6 col-sm-4"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "input-group mb-3" },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.keywords[k_word],
                                                  expression: "keywords[k_word]"
                                                }
                                              ],
                                              staticClass:
                                                "form-control letra-boldfont",
                                              attrs: {
                                                type: "text",
                                                placeholder: "Palabra",
                                                "aria-label": "Materia"
                                              },
                                              domProps: {
                                                value: _vm.keywords[k_word]
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.keywords,
                                                    k_word,
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            k_word > 0
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-append"
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline-secondary letra-boldfont",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return (function() {
                                                              return _vm.RemoveKeyWord(
                                                                k_word
                                                              )
                                                            })($event)
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("-")]
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-6 col-sm-4 text-center"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary letra-boldfont",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return (function() {
                                                return _vm.AddKeyWord()
                                              })($event)
                                            }
                                          }
                                        },
                                        [_vm._v("+")]
                                      )
                                    ]
                                  )
                                ],
                                2
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return (function() {
                        return _vm.addData()
                      })($event)
                    }
                  }
                },
                [_vm._v("Registrarme")]
              )
            ])
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
    return _c("div", { staticClass: "card-header fondo" }, [
      _c("h2", [_vm._v("Registro de Tutor")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h4", [_vm._v("Datos de Usuario")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h4", [_vm._v("Datos Personales")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header_info" }, [
      _c("img", {
        attrs: {
          width: "35px",
          src:
            "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/TAREAS_naranja.png?alt=media&token=0ffb3c21-349a-4615-b57c-50dac3db8285",
          alt: "icon"
        }
      }),
      _vm._v(" "),
      _c("h5", [_vm._v("Educación")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "gradeDate" } }, [
      _c("small", [_vm._v("Fecha grado:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header_info" }, [
      _c("img", {
        attrs: {
          width: "35px",
          src:
            "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b",
          alt: "icon"
        }
      }),
      _vm._v(" "),
      _c("h5", [_vm._v("Experiencia como educador")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "gradeDate" } }, [
      _c("small", [_vm._v("Fecha inicio:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "endDate" } }, [
      _c("small", [_vm._v("Fecha de finalización:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header_info" }, [
      _c("img", {
        attrs: {
          width: "35px",
          src:
            "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b",
          alt: "icon"
        }
      }),
      _vm._v(" "),
      _c("h5", [_vm._v("Clases a ofrecer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header_info" }, [
      _c("img", {
        attrs: {
          width: "35px",
          src:
            "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b",
          alt: "icon"
        }
      }),
      _vm._v(" "),
      _c("h5", [_vm._v("Palabras clave")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tutorRegister.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/tutorRegister.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tutorRegister_vue_vue_type_template_id_2b79cb3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorRegister.vue?vue&type=template&id=2b79cb3e& */ "./resources/js/components/tutorRegister.vue?vue&type=template&id=2b79cb3e&");
/* harmony import */ var _tutorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorRegister.vue?vue&type=script&lang=js& */ "./resources/js/components/tutorRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tutorRegister_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorRegister.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tutorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tutorRegister_vue_vue_type_template_id_2b79cb3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tutorRegister_vue_vue_type_template_id_2b79cb3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tutorRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tutorRegister.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/tutorRegister.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tutorRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tutorRegister.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorRegister.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/tutorRegister.vue?vue&type=template&id=2b79cb3e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/tutorRegister.vue?vue&type=template&id=2b79cb3e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_template_id_2b79cb3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tutorRegister.vue?vue&type=template&id=2b79cb3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorRegister.vue?vue&type=template&id=2b79cb3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_template_id_2b79cb3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tutorRegister_vue_vue_type_template_id_2b79cb3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
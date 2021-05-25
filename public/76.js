(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      education_information: "",
      certification: "",
      experience_information: "",
      recommendation: "",
      picture: "",
      class_offer: "",
      key_words: ""
    };
  },
  methods: {
    addData: function addData() {
      axios.post('tutorRegister', {
        name: this.name,
        last_name: this.last_name,
        description: this.description,
        id_number: this.id_number,
        document: this.id_number,
        picture: this.picture,
        address: this.address,
        phone: this.phone,
        twitter_profile: this.twitter_profile,
        facebook_profile: this.facebook_profile,
        instagram_profile: this.instagram_profile,
        linkedin_profile: this.linkedin_profile,
        country: this.country,
        city: this.city,
        education_information: this.education_information,
        experience_education: this.experience_information,
        certification: this.certification,
        recommendation: this.recommendation,
        class_offer: this.class_offer,
        key_words: this.key_words,
        email: this.email,
        user_name: this.user_name,
        password: this.password
      }).then(function (response) {
        console.log(response.data);
        window.location = '/inicio';
      })["catch"](function (error) {
        toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
        console.log(error);
      });
    },
    previewFiles: function previewFiles(event) {
      var _this = this;

      var files = event.target.files[0];
      var storageRef = _connectionDbFirebase__WEBPACK_IMPORTED_MODULE_0__["default"].storage().ref("images/tutorProfile/".concat(this.name + '-' + this.last_name)).put(files);
      storageRef.on("images/tutorProfile/".concat(this.name + ' ' + this.last_name), function () {
        storageRef.snapshot.ref.getDownloadURL().then(function (url) {
          _this[event.target.name] = url;
        });
      });
    }
  }
});

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
  return _c(
    "div",
    { staticStyle: { "padding-left": "109px", "padding-right": "109px" } },
    [
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
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "row row-cols-2 shadow p-3 mb-5 bg-body rounded"
                    },
                    [
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { attrs: { for: "education_information" } },
                            [_vm._v("Información de Educación")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.education_information,
                                expression: "education_information"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "education_information", rows: "3" },
                            domProps: { value: _vm.education_information },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.education_information = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "certification" } }, [
                            _vm._v("Certificado de Educacion")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control-file",
                            attrs: {
                              type: "file",
                              name: "certification",
                              id: "certification"
                            },
                            on: { change: _vm.previewFiles }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { attrs: { for: "experience_information" } },
                            [_vm._v("Información de Experiencia")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.experience_information,
                                expression: "experience_information"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "experience_information", rows: "3" },
                            domProps: { value: _vm.experience_information },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.experience_information = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "recommendation" } }, [
                            _vm._v("Recomendación")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control-file",
                            attrs: {
                              type: "file",
                              name: "recommendation",
                              id: "recommendation"
                            },
                            on: { change: _vm.previewFiles }
                          })
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "row row-cols-1 shadow p-3 mb-5 bg-body rounded"
                    },
                    [
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "class_offer" } }, [
                            _vm._v("Clase Ofrecida")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.class_offer,
                                expression: "class_offer"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "class_offer" },
                            domProps: { value: _vm.class_offer },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.class_offer = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "key_words" } }, [
                            _vm._v("Palabras Clave")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.key_words,
                                expression: "key_words"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "key_words" },
                            domProps: { value: _vm.key_words },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.key_words = $event.target.value
                              }
                            }
                          })
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit" },
                  on: { click: _vm.addData }
                },
                [_vm._v("Registrarme")]
              )
            ])
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
    return _c("div", { staticClass: "text-center" }, [
      _c("h4", [_vm._v("Datos Profesionales")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h4", [_vm._v("Busqueda en plataforma")])
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
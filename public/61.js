(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearMemoria.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crearMemoria.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docenteAdm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docenteAdm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr/toastr.scss */ "./node_modules/toastr/toastr.scss");
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_0__);
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


(function () {
  "use strict";

  window.addEventListener("load", function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation"); // Loop over them and prevent submission

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener("submit", function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      }, false);
    });
  }, false);
})();

<<<<<<< HEAD


Vue.use(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default.a);
=======
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
<<<<<<< HEAD
      myOptions: [],
      nameUnit: "",
      description: "",
      nameFile: "",
      nameUrl: "",
      nameUrl1: "",
      nameUrl2: "",
      newDocument: [],
      newDocument1: [],
      newDocument2: [],
      semanal: false,
      newVideo: "",
      newVideo1: "",
      newVideo2: "",
      numero: "",
      nameArea: "",
      errors: [],
      message: ""
=======
      names: [],
      newName: "",
      newLastName: "",
      newAge: "",
      newBirthday: "",
      newPassword: "",
      newEmail: "",
      newUserName: "",
      newId_subcategories: "",
      newType_user: "",
      newAddress: "",
      newPicture: "",
      newPhone: "",
      newId_number: "",
      newCountry: "",
      fillNames: {
        id: "",
        name: "",
        last_name: "",
        age: "",
        birthday: "",
        password: "",
        email: "",
        user_name: "",
        id_categories: "",
        id_subcategories: "",
        type_user: "",
        address: "",
        picture: "",
        phone: "",
        id_number: "",
        country: ""
      },
      errors: [],
      Category: "",
      Subcategory: "",
      Type: "",
      newContry: "",
      categories: [],
      subcategories: [],
      TypeUsers: [],
      edad: "",
      offset: 3
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    };
  },
  created: function created() {},
  computed: {},
  mounted: function mounted() {
<<<<<<< HEAD
    var _this = this;

    var url = window.location.origin + "/GetNameArea/" + this.id_area + "/" + this.id_classroom;
    axios.get(url).then(function (response) {
      _this.nameArea = response.data;
    });
    var urlsel = window.location.origin + "/editOneWeek/" + this.id_area + "/" + this.id_classroom;
    axios.get(urlsel).then(function (response) {
      _this.myOptions = response.data;
    });
    this.messageVideo = "";
  },
  methods: {
    getMenu: function getMenu() {
      window.location = "/clases_d";
    },
    click1: function click1() {
      this.$refs.input1.click();
    },
    createSemanal: function createSemanal() {
      var _this2 = this;

      var url = window.location.origin + "/Class";
      this.seleccionado = this.$refs.seleccionado.value;
      axios.post(url, {
        //Cursos generales
        id_weekly_plan: this.seleccionado,
        name: this.nameUnit,
        description: this.description,
        name_document: this.nameFile,
        document: this.newDocument,
        document1: this.newDocument1,
        document2: this.newDocument2,
        url: this.nameUrl,
        url1: this.nameUrl1,
        url2: this.nameUrl2,
        video: this.newVideo,
        video1: this.newVideo1,
        video2: this.newVideo2,
        hourly_intensity: this.numero
      }).then(function (response) {
        _this2.errors = [];
        toastr.success("Nueva clase creada exitosamente");

        _this2.getMenu();
      })["catch"](function (error) {
        _this2.errors = error.response.data;
      });
    },
    onFlieChange: function onFlieChange(file) {
      var _this3 = this;

      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        var _file = files[0]; // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 1);
        this.newDocument = data;
        axios.post("/fileDocument", data).then(function (response) {
          _this3.emitMessage(response);
        });
      }
    },
    onFlieChange1: function onFlieChange1(file) {
      var _this4 = this;

      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        var _file2 = files[0]; // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 2);
        this.newDocument1 = data;
        axios.post("/fileDocument", data).then(function (response) {
          _this4.emitMessage(response);
        });
      }
    },
    onFlieChange2: function onFlieChange2(file) {
      var _this5 = this;

      var files = file.target.files || file.dataTransfer.files;
      var data = new FormData();

      if (files.length > 0) {
        var _file3 = files[0]; // if uploaded file is valid with validation rules

        data.append("file", files[0]);
        data.append("name", this.nameUnit);
        data.append("count", 3);
        this.newDocument2 = data;
        axios.post("/fileDocument", data).then(function (response) {
          _this5.emitMessage(response);
        });
      }
    },
    updateSemanal: function updateSemanal() {
      var _this6 = this;

      var url = "updateCourseWeekly";

      if (this.fillS.length >= 1) {
        for (var i = 0; i < this.fillS.length; i++) {
          this.newSemanal.push(this.fillS[i]);
        }
      }

      axios.put(url, {
        //Cursos generales
        id_materia: "1",
        semana: this.newSemanal
      }).then(function (response) {
        _this6.errors = [];
        toastr.success("Actualizado plan semanal exitosamente");

        _this6.getMenu();
      })["catch"](function (error) {
        _this6.errors = error.response.data;
=======
    this.getNames();
  },
  methods: {
    //metodos del CRUD
    getNames: function getNames() {
      var _this = this;

      var urlUsers = "getUsersAssigned";
      axios.get(urlUsers).then(function (response) {
        _this.names = response.data;
        console.log(_this.names);
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
      });
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654& ***!
  \***************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docenteAdm.vue?vue&type=template&id=666435c3&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/docenteAdm.vue?vue&type=template&id=666435c3& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "back" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [_vm._v("Memoria")]),
            _vm._v(" "),
            _c(
              "form",
              { staticClass: "needs-validation", attrs: { novalidate: "" } },
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
                    on: { "on-complete": _vm.createSemanal }
                  },
                  [
                    _c("tab-content", { attrs: { title: "Memoria" } }, [
                      _c("div", { staticClass: "form-group mx-auto" }, [
                        _c("div", { attrs: { align: "center" } })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row mx-auto" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*1. Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*2. Archivo ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*3. Archivo ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*4. Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*5. Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*6. Archivo ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*7. Archivo ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("*8. Archivo")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "form-control",
                              on: { click: _vm.click1 }
                            },
                            [_vm._v("Seleccione un archivo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "input1",
                            staticStyle: { display: "none" },
                            attrs: { type: "file" },
                            on: { change: _vm.previewImage }
                          }),
                          _vm._v(" "),
                          _vm.message != "" && _vm.message != null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-size": "20px"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Archivo cargado con exito nombre:" +
                                        _vm._s(_vm.message) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.message == null
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "18px"
                                    }
                                  },
                                  [_vm._v("Espere estamos cargando su archivo")]
                                )
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("strong", [_vm._v("* Campos requeridos")])
                    ])
                  ],
                  1
                )
              ],
              1
            )
=======
  return _c("div", { staticClass: "back" }, [
    _c(
      "div",
      { staticClass: "row justify-content-center", attrs: { id: "crud" } },
      [
        _c("div", { staticClass: "col-sm-10" }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c("h3", { staticClass: "card-header fondo" }, [
              _vm._v("Usuarios asignados")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-responsive-xl table-hover table-striped"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.names.estudiantes, function(name, k) {
                        return _c("tr", { key: k }, [
                          _c("td", [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(name.student_name) +
                                "\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(name.type))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(name.classroom_name))])
                        ])
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.names.profesores, function(option) {
                        return _c("tr", [
                          _c("td", [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(option.student_name) +
                                "\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(option.type))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(option.classroom_name))])
                        ])
                      })
                    ],
                    2
                  )
                ]
              )
            ])
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
          ])
        ])
      ]
    )
  ])
}
<<<<<<< HEAD
var staticRenderFns = []
=======
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre Completo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Salón")])
      ])
    ])
  }
]
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/crearMemoria.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/crearMemoria.vue ***!
  \**************************************************/
=======
/***/ "./resources/js/components/docenteAdm.vue":
/*!************************************************!*\
  !*** ./resources/js/components/docenteAdm.vue ***!
  \************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crearMemoria.vue?vue&type=template&id=62223654& */ "./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654&");
/* harmony import */ var _crearMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crearMemoria.vue?vue&type=script&lang=js& */ "./resources/js/components/crearMemoria.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _docenteAdm_vue_vue_type_template_id_666435c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docenteAdm.vue?vue&type=template&id=666435c3& */ "./resources/js/components/docenteAdm.vue?vue&type=template&id=666435c3&");
/* harmony import */ var _docenteAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docenteAdm.vue?vue&type=script&lang=js& */ "./resources/js/components/docenteAdm.vue?vue&type=script&lang=js&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _crearMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__["render"],
  _crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _docenteAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _docenteAdm_vue_vue_type_template_id_666435c3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _docenteAdm_vue_vue_type_template_id_666435c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/crearMemoria.vue"
=======
component.options.__file = "resources/js/components/docenteAdm.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/crearMemoria.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/crearMemoria.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
=======
/***/ "./resources/js/components/docenteAdm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/docenteAdm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./crearMemoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearMemoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654& ***!
  \*********************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_docenteAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./docenteAdm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docenteAdm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_docenteAdm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/docenteAdm.vue?vue&type=template&id=666435c3&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/docenteAdm.vue?vue&type=template&id=666435c3& ***!
  \*******************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./crearMemoria.vue?vue&type=template&id=62223654& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crearMemoria.vue?vue&type=template&id=62223654&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crearMemoria_vue_vue_type_template_id_62223654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docenteAdm_vue_vue_type_template_id_666435c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./docenteAdm.vue?vue&type=template&id=666435c3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/docenteAdm.vue?vue&type=template&id=666435c3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docenteAdm_vue_vue_type_template_id_666435c3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_docenteAdm_vue_vue_type_template_id_666435c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);
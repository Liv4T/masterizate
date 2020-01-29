<template>
    <div class="backgroun1">
        <div class="row justify-content-center">
            <div id="crud" class="col-md-11">
                <div class="card text-center">
                    <h3 class="card-header">Hoja de vida</h3>
                    <form class="needs-validation" novalidate>
                        <div class= "card-body">
                           <div class="form-group mx-auto"> 
                                <strong>Perfil profesional</strong>
                                <textarea  name="description" v-model="newDescription" class="form-control"  maxlength="200" required></textarea>
                                <div class = " invalid-feedback ">Please fill out this field </div>
                            </div>
                            <div class="container">
                                <div class="form-group mx-auto"> 
                                     <strong>Formacion Academica</strong>
                                </div>
                                <div class="form-group row"> 
                                    <div class="col">                        
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input class="custom-control-input" type="checkbox" id="gridCheck1" required>
                                            <label class="custom-control-label" for="gridCheck1">Bachiller</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input class="custom-control-input" type="checkbox" id="gridCheck2">
                                            <label class="custom-control-label" for="gridCheck2">Tecnico</label>   
                                        </div>     
                                        <div class="custom-control custom-checkbox custom-control-inline">          
                                            <input class="custom-control-input" type="checkbox" id="gridCheck3">
                                            <label class="custom-control-label" for="gridCheck3">Profesional</label>   
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input class="custom-control-input" type="checkbox" id="gridCheck4" >
                                            <label class="custom-control-label" for="gridCheck4">Especializado</label>   
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input class="custom-control-input" type="checkbox" id="gridCheck5" >
                                            <label class="custom-control-label" for="gridCheck5">Maestria</label>   
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline" >
                                            <input class="custom-control-input" type="checkbox" id="gridCheck6" >
                                            <label class="custom-control-label" for="gridCheck6">Doctorado</label>   
                                        </div>
                                    </div>
                                </div>   
                                <div id="hidden_fields1">
                                    <div  class="form-group row"> 
                                        <strong>Bachiller</strong>
                                    </div>       
                                    <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                            <label for="country">Modalidad Academica</label>
                                            <input type="text" name="country" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>  
                                        <div class="col-md-6"> 
                                            <label for="institution">Titulo Obtenido</label>
                                            <input type="text" name="c" class="form-control" v-model="newInstitutionB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6"> 
                                            <label for="country">Institución</label>
                                            <input type="text" name="institution" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                        <div class="col-md-6"> 
                                            <label for="date">Fecha del titulo</label>
                                            <input type="date" name="date" class="form-control" v-model="newDateB" required>
                                            <div class = " invalid-feedback ">Please fill out this field</div>
                                        </div>  
                                    </div> 
                                </div>
                                <div id="hidden_fields2">
                                    <div  class="form-group row"> 
                                        <strong>Tecnico</strong>
                                    </div>
                                    <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                            <label for="country">Modalidad Academica</label>
                                            <input type="text" name="country" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>  
                                        <div class="col-md-6"> 
                                            <label for="institution">Titulo Obtenido</label>
                                            <input type="text" name="c" class="form-control" v-model="newInstitutionB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6"> 
                                            <label for="country">Institución</label>
                                            <input type="text" name="institution" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                        <div class="col-md-6"> 
                                            <label for="date">Fecha del titulo</label>
                                            <input type="date" name="date" class="form-control" v-model="newDateB" required>
                                            <div class = " invalid-feedback ">Please fill out this field</div>
                                        </div>  
                                    </div> 
                                </div>
                                <div id="hidden_fields3">
                                    <div  class="form-group row"> 
                                        <strong>Profesional</strong>
                                    </div>
                                     <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                            <label for="country">Modalidad Academica</label>
                                            <input type="text" name="country" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>  
                                        <div class="col-md-6"> 
                                            <label for="institution">Titulo Obtenido</label>
                                            <input type="text" name="c" class="form-control" v-model="newInstitutionB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6"> 
                                            <label for="country">Institución</label>
                                            <input type="text" name="institution" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                        <div class="col-md-6"> 
                                            <label for="date">Fecha del titulo</label>
                                            <input type="date" name="date" class="form-control" v-model="newDateB" required>
                                            <div class = " invalid-feedback ">Please fill out this field</div>
                                        </div>  
                                    </div> 
                                </div>
                                 <div id="hidden_fields4">
                                    <div  class="form-group row"> 
                                        <strong>Especializado</strong>
                                    </div>
                                    <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                            <label for="country">Modalidad Academica</label>
                                            <input type="text" name="country" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>  
                                        <div class="col-md-6"> 
                                            <label for="institution">Titulo Obtenido</label>
                                            <input type="text" name="c" class="form-control" v-model="newInstitutionB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6"> 
                                            <label for="country">Institución</label>
                                            <input type="text" name="institution" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                        <div class="col-md-6"> 
                                            <label for="date">Fecha del titulo</label>
                                            <input type="date" name="date" class="form-control" v-model="newDateB" required>
                                            <div class = " invalid-feedback ">Please fill out this field</div>
                                        </div>  
                                    </div> 
                                </div>
                                <div id="hidden_fields5">
                                    <div  class="form-group row"> 
                                        <strong>Maestria</strong>
                                    </div>
                                    <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                            <label for="country">Modalidad Academica</label>
                                            <input type="text" name="country" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>  
                                        <div class="col-md-6"> 
                                            <label for="institution">Titulo Obtenido</label>
                                            <input type="text" name="c" class="form-control" v-model="newInstitutionB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6"> 
                                            <label for="institution">Institución</label>
                                            <input type="text" name="institution" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                        <div class="col-md-6"> 
                                            <label for="date">Fecha del titulo</label>
                                            <input type="date" name="date" class="form-control" v-model="newDateB" required>
                                            <div class = " invalid-feedback ">Please fill out this field</div>
                                        </div>  
                                    </div> 
                                </div>
                                <div id="hidden_fields6">
                                    <div  class="form-group row"> 
                                        <strong>Doctorado</strong>
                                    </div>
                                     <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                            <label for="country">Modalidad Academica</label>
                                            <input type="text" name="country" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>  
                                        <div class="col-md-6"> 
                                            <label for="institution">Titulo Obtenido</label>
                                            <input type="text" name="c" class="form-control" v-model="newInstitutionB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6"> 
                                            <label for="country">Institución</label>
                                            <input type="text" name="institution" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                        <div class="col-md-6"> 
                                            <label for="date">Fecha del titulo</label>
                                            <input type="date" name="date" class="form-control" v-model="newDateB" required>
                                            <div class = " invalid-feedback ">Please fill out this field</div>
                                        </div>  
                                    </div> 
                                </div>
                                <div id="hidden_fields7">
                                    <div  class="form-group row"> 
                                        <div class="col-md-4">
                                            <strong>Otro</strong>
                                            <input type="text" name="institution" class="form-control" v-model="newOther">
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                    </div>
                                     <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                            <label for="country">Modalidad Academica</label>
                                            <input type="text" name="country" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>  
                                        <div class="col-md-6"> 
                                            <label for="institution">Titulo Obtenido</label>
                                            <input type="text" name="c" class="form-control" v-model="newInstitutionB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6"> 
                                            <label for="country">Institución</label>
                                            <input type="text" name="institution" class="form-control" v-model="newCountryB" required>
                                            <div class = " invalid-feedback ">Please fill out this field </div>
                                        </div>
                                        <div class="col-md-6"> 
                                            <label for="date">Fecha del titulo</label>
                                            <input type="date" name="date" class="form-control" v-model="newDateB" required>
                                            <div class = " invalid-feedback ">Please fill out this field</div>
                                        </div>  
                                    </div> 
                                </div>
                            </div>
                            <div class="container">
                                <div class="form-group mx-auto">
                                    <strong>Experiencia Profesional Docente</strong>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Entidad</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Cargo</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                        <label for="company">Actividades desarrolladas</label>
                                        <input type="text" name="company" class="form-control" v-model="newCompany" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="time">Año</label>
                                        <input type="text" name="time" class="form-control" v-model="newTime" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Entidad</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Cargo</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                        <label for="company">Actividades desarrolladas</label>
                                        <input type="text" name="company" class="form-control" v-model="newCompany" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="time">Año</label>
                                        <input type="text" name="time" class="form-control" v-model="newTime" required>
                                    </div>
                                </div> 
                            </div>
                             <div class="container">
                                <div class="form-group mx-auto">
                                    <strong>Experiencia Profesional No Docente</strong>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Entidad</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Cargo</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                        <label for="company">Actividades desarrolladas</label>
                                        <input type="text" name="company" class="form-control" v-model="newCompany" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="time">Año</label>
                                        <input type="text" name="time" class="form-control" v-model="newTime" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Entidad</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Cargo</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                        <label for="company">Actividades desarrolladas</label>
                                        <input type="text" name="company" class="form-control" v-model="newCompany" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="time">Año</label>
                                        <input type="text" name="time" class="form-control" v-model="newTime" required>
                                    </div>
                                </div> 
                            </div>
                             <div class="container">
                                <div class="form-group mx-auto">
                                    <strong>Cursos y seminarios</strong>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Entidad</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Nombre</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                        <label for="company">Descripción</label>
                                        <input type="text" name="company" class="form-control" v-model="newCompany" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="time">Año</label>
                                        <input type="text" name="time" class="form-control" v-model="newTime" required>
                                    </div>
                                    </div>
                                    <div class="form-group row">
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Entidad</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="jobtitle">Nombre</label>
                                        <input type="text" name="jobTitle" class="form-control" v-model="newJobtitle" required>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                        <div class="col-md-6"> 
                                        <label for="company">Actividades desarrolladas</label>
                                        <input type="text" name="company" class="form-control" v-model="newCompany" required>
                                    </div>
                                    <div class="col-md-6"> 
                                        <label for="time">Año</label>
                                        <input type="text" name="time" class="form-control" v-model="newTime" required>
                                    </div>
                                </div> 
                                <div class="form-group row">                        
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input class="custom-control-input" type="checkbox" id="gridCheck12" required>
                                        <label class="custom-control-label" for="gridCheck12">Para todos los efectos legales, certifico que todas las respuestas e información anotadas por mí, en la presente hoja de vida son veraces (C. S. T.)  Art. 62 Núm. 1°  Régimen Laboral Colombiano § 1057 (Legis).</label>
                                    </div>
                                </div>
                                <div class="form-group mx-auto">                        
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input class="custom-control-input" type="checkbox" id="gridCheck13" required>
                                        <label class="custom-control-label" for="gridCheck13">Voluntaria y expresamente autorizo a ILive4Teach, a verificar mis antecedentes disciplinarios y judiciales.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="submit" @click="createResumes" class="btn btn-primary" value="Guardar"> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "toastr/toastr.scss";
    $(function() {
  
        // Get the form fields and hidden div
        var checkbox  = $("#gridCheck1");
        var checkbox1 = $("#gridCheck2");
        var checkbox2 = $("#gridCheck3");
        var checkbox3 = $("#gridCheck4");
        var checkbox4 = $("#gridCheck5");
        var checkbox5 = $("#gridCheck6");
        var checkbox6 = $("#gridCheck7");
        var hidden    = $("#hidden_fields1");
        var hidden1   = $("#hidden_fields2");
        var hidden2   = $("#hidden_fields3");
        var hidden3   = $("#hidden_fields4");
        var hidden4   = $("#hidden_fields5");
        var hidden5   = $("#hidden_fields6");
        var hidden6   = $("#hidden_fields7");
 
        hidden.hide();
        hidden1.hide();
        hidden2.hide();
        hidden3.hide();
        hidden4.hide();
        hidden5.hide();
        hidden6.hide();

        checkbox.change(function() {
            if (checkbox.is(':checked')) {
            // Show the hidden fields.
            hidden.show();
        } else {
            hidden.hide();
        }
        });
        checkbox1.change(function() {
            if (checkbox1.is(':checked')) {
            // Show the hidden fields.
            hidden1.show();
        } else {
            hidden1.hide();
        }
        });
        checkbox2.change(function() {
            if (checkbox2.is(':checked')) {
            // Show the hidden fields.
            hidden2.show();
          } else {
              hidden2.hide();
          }
        });
        checkbox3.change(function() {
            if (checkbox3.is(':checked')) {
            // Show the hidden fields.
            hidden3.show();
          } else {
              hidden3.hide();
          }
        });
        checkbox4.change(function() {
            if (checkbox4.is(':checked')) {
            // Show the hidden fields.
            hidden4.show();
          } else {
              hidden4.hide();
          }
        });
        checkbox5.change(function() {
            if (checkbox5.is(':checked')) {
            // Show the hidden fields.
            hidden5.show();
          } else {
              hidden5.hide();
          }
        });
        checkbox6.change(function() {
            if (checkbox6.is(':checked')) {
            // Show the hidden fields.
            hidden6.show();
          } else {
              hidden6.hide();
          }
        });
});
(function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
export default {
 
  data() {
            return { 
        resumen: [],
        newDescription: '',
        newLanguage: '',
        newInstitutionB: '',
        newInstitutionT: '',
        newInstitutionP: '',
        newInstitutionE: '',
        newInstitutionM: '',
        newInstitutionD: '',
        newInstitutionO: '',
        newDateB: '',
        newDateT: '',
        newDateP: '',
        newDateE: '',
        newDateM: '',
        newDateD: '',
        newDateO: '',
        newCountryB: '',
        newCountryT: '',
        newCountryP: '',
        newCountryE: '',
        newCountryM: '',
        newCountryD: '',
        newCountryO: '',
        newJobtitle: '',
        newJobtitle1: '',
        newJobtitle2: '',
        newCompany: '',
        newCompany1: '',
        newCompany2: '',
        newTime: '',
        newTime1: '',
        newTime2: '',
        newId_user:'',
        newOther:'',
        fillResumes: {'id': '', 'id_user': '','description': '', 'language':'', 'institutionB':'', 'institutionT':'', 'institutionP':'', 'institutionE':'', 'institutionM':'', 'institutionD':'', 'institutionO':'',  'dateB': '', 'dateT': '', 'dateP': '', 'dateE': '', 'dateM': '', 'dateD': '', 'dateO': '', 'countryB': '', 'countryT': '', 'countryP': '', 'countryE': '', 'countryM': '', 'countryD': '', 'countryO': '', 'jobTitle': '', 'jobTitle1': '', 'jobTitle2': '', 'company': '', 'company1': '', 'company2': '', 'time': '', 'time1': '', 'time2': '', 'other':''},
        errors: [],
        offset: 3
        }
    },
    created() {
        this.getResumes();
    },
    computed:{
    },
    mounted() {
        console.log("Component mounted.");
    },
    methods: { //metodos del CRUD
           getResumes(){
                var urlr = 'resumes/';
                axios.get(urlr).then(response=> {
                    this.resumen = response.data.resum.data
                });
            },
            editResumes(resume){
                this.fillResumes.id = name.id;
                this.fillResumes.description = name.description;
                this.fillResumes.id_user = name.id_user;
                this.fillResumes.language = name.language;
                this.fillResumes.institutionB = name.institutionB;
                this.fillResumes.institutionT = name.institutionT;
                this.fillResumes.institutionP = name.institutionP;
                this.fillResumes.institutionE = name.institutionE;
                this.fillResumes.institutionM = name.institutionM;
                this.fillResumes.institutionD = name.institutionD;
                this.fillResumes.institutionO = name.institutionO;
                this.fillResumes.dateB = name.dateB;
                this.fillResumes.dateT = name.dateT;
                this.fillResumes.dateP = name.dateP;
                this.fillResumes.dateE = name.dateE;
                this.fillResumes.dateM = name.dateM;
                this.fillResumes.dateD = name.dateD;
                this.fillResumes.dateO = name.dateE;
                this.fillResumes.countryB = name.countryB;
                this.fillResumes.countryT = name.countryT;
                this.fillResumes.countryP = name.countryP;
                this.fillResumes.countryE = name.countryE;
                this.fillResumes.countryM = name.countryM;
                this.fillResumes.countryD = name.countryO;
                this.fillResumes.countryO = name.countryO;     
                this.fillResumes.jobTitle = name.jobTitle;
                this.fillResumes.jobTitle1 = name.jobTitle1;
                this.fillResumes.jobTitle2 = name.jobTitle2;
                this.fillResumes.company = name.company;
                this.fillResumes.company1 = name.company1;
                this.fillResumes.company2 = name.company2;
                this.fillResumes.time = name.time;
                this.fillResumes.time1 = name.time1;
                this.fillResumes.time2 = name.time2;
                this.fillResumes.other = name.other;
            },
            updateResumes(id) {
                var url = 'resumes/'+ id;
                axios.put(url, this.fillResumes).then(response=> {
                    this.getResumes();
                    this.fillResumes = {'id': '', 'id_user': '','description': '', 'language':'', 'institutionB':'', 'institutionT':'', 'institutionP':'', 'institutionE':'', 'institutionM':'', 'institutionD':'', 'institutionO':'',  'dateB': '', 'dateT': '', 'dateP': '', 'dateE': '', 'dateM': '', 'dateD': '', 'dateO': '', 'countryB': '', 'countryT': '', 'countryP': '', 'countryE': '', 'countryM': '', 'countryD': '', 'countryO': '', 'jobTitle': '', 'jobTitle1': '', 'jobTitle2': '', 'company': '', 'company1': '', 'company2': '', 'time': '', 'time1': '', 'time2': '', 'other':''},
                    this.errors = [];
                    $('#editu').modal('hide');
                    toastr.success('Resume editado con exito');
                    }).catch(error => {
                    this.errors = error.response.data
                    });
            },
            deleteResumes(resume) {
                var url = 'resumes/' + name.id;
                axios.delete(url).then(response=>{ // eliminamos
                    this.getResumes(); //listamos
                    toastr.success('Eliminado correctamente');//mensaje
                });
            },
            createResumes() {
                var url = 'resumes';
                 this.newId_user= 36;
                axios.post(url, {
                    id_user     :this.newId_user,
                    description :this.newDescription,
                    language    :this.newLanguage,
                    institutionB:this.newInstitutionB,
                    institutionT:this.newInstitutionT,
                    institutionP:this.newInstitutionP,
                    institutionE:this.newInstitutionE, 
                    institutionM:this.newInstitutionM,
                    institutionD:this.newInstitutionD,
                    institutionO:this.newInstitutionO,
                    dateB:this.newDateB,   
                    dateT:this.newDateT,
                    dateP:this.newDateP,
                    dateE:this.newDateE,
                    dateM:this.newDateM,
                    dateD:this.newDateD,
                    dateO:this.newDateE,
                    countryB:this.newCountryB, 
                    countryT:this.newCountryT, 
                    countryP:this.newCountryP,   
                    countryE:this.newCountryE,  
                    countryM:this.newCountryM,   
                    countryD:this.newCountryO,     
                    countryO:this.newCountryO,         
                    jobTitle :this.newJobtitle,     
                    jobTitle1:this.newJobtitle1,  
                    jobTitle2:this.newJobtitle2,     
                    company :this.newCompany,   
                    company1:this.newCompany1,        
                    company2:this.newCompany2,        
                    time :this.newTime,  
                    time1:this.newTime1,    
                    time2:this.newTime2,
                    other:this.newOther,
                }).then(response => {
                    this.getResumes();
                    this.newDescription = '';
                    this.newId_user = '';
                    this.newLanguage = '';
                    this.newInstitutionB = '';
                    this.newInstitutionT = '';
                    this.newInstitutionP = '';
                    this.newInstitutionE = '';
                    this.newInstitutionM = '';
                    this.newInstitutionD = '';
                    this.newInstitutionO = '';
                    this.newDateB = '';
                    this.newDateT = '';
                    this.newDateP = '';
                    this.newDateE = '';
                    this.newDateM = '';
                    this.newDateD = '';
                    this.newDateE = '';
                    this.newCountryB = '';
                    this.newCountryT = '';
                    this.newCountryP = '';
                    this.newCountryE = '';
                    this.newCountryM = '';
                    this.newCountryO = '';
                    this.newCountryO = '';     
                    this.newJobtitle  = '';
                    this.newJobtitle2 = '';
                    this.newJobtitle2 = '';
                    this.newCompany  = '';
                    this.newCompany1 = '';
                    this.newCompany2 = '';
                    this.newTime  = '';
                    this.newTime1 = '';
                    this.newTime2 = '';
                    this.newOther = '';
                    this.errors = [];
                    toastr.success('Nuevo resume Creado con exito');
                    }).catch(error => {
                    this.errors = error.response.data
               });
            },
     }    
}
</script>
<style>
.background1{
  background: url(../assets/img/Fondo5.jpg);
  background-attachment: fixed;
}
</style>
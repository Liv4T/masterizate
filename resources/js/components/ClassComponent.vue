<template>
    <div class="container">
        <div class="row">
            <div id="crud" class="col-xl-12">
                <div class="card">
                    <h1 class="card-header">Clase</h1>
                    <div class= "card-body">
                        <a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create">Nueva Clase</a>
                        <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Semana</th>
                                    <th>Nombre</th>
                                    <th>Categoria</th>
                                    <th>Tema</th>
                                    <th>Objetivo</th>
                                    <th>Indicador</th>
                                    <th>%</th>
                                    <th>Medicion</th>
                                    <th colspan="2">
                                        &nbsp;
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="10px">1</td>
                                    <td>15/03/2019-22/03/2019</td>
                                    <td>zsfdffxgdfh</td>
                                    <td>Matematica</td>
                                    <td>Matematica 1</td>
                                    <td>Ecuaciones</td>
                                    <td>dsfdsfrf sfrfgsdffds</td>
                                    <td width="10px">20</td>
                                    <td>Quiz</td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-warning btn-sm">/</a>
                                    </td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-danger btn-sm" >-</a>
                                    </td>
                                </tr>
                                <tr >
                                    <td width="10px">2</td>
                                    <td>15/04/2019-22/04/2019</td>
                                    <td>zsfdffxgdfh</td>
                                    <td>Matematica</td>
                                    <td>Matematica 1</td>
                                    <td>Ecuaciones</td>
                                    <td>dsfdsfrf sfrfgsdffds</td>
                                    <td width="10px">20</td>
                                    <td>Quiz</td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-warning btn-sm" >/</a>
                                    </td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-danger btn-sm" >-</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="10px">3</td>
                                    <td>15/05/2019-22/05/2019</td>
                                    <td>zsfdffxgdfh</td>
                                    <td>Matematica</td>
                                    <td>Matematica 1</td>
                                    <td>Ecuaciones</td>
                                    <td>dsfdsfrf sfrfgsdffds</td>
                                    <td width="10px">20</td>
                                    <td>Quiz</td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editClasses(classes)">/</a>
                                    </td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-danger btn-sm"  v-on:click.prevent="deleteClasses(classes)">-</a>
                                    </td>
                                </tr>
                                <tr >
                                    <td width="10px">4</td>
                                    <td>15/06/2019-22/06/2019</td>
                                    <td>zsfdffxgdfh</td>
                                    <td>Matematica</td>
                                    <td>Matematica 1</td>
                                    <td>Ecuaciones</td>
                                    <td>dsfdsfrf sfrfgsdffds</td>
                                    <td width="10px">20</td>
                                    <td>Quiz</td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-warning btn-sm" >/</a>
                                    </td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-danger btn-sm" >-</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bd-example-modal-xl" id="create">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="card">
                        <h1 class="card-header">Clase
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button> 
                        </h1>
                        <form class="needs-validation" novalidate>
                            <div class= "card-body">
                                 <div class="form-group row"> 
                                    <div class="col">                        
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input class="custom-control-input" type="checkbox" id="gridCheck1" v-model="newLocal" required>
                                            <label class="custom-control-label" for="gridCheck1">Local</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input class="custom-control-input" type="checkbox" id="gridCheck2" v-model="newRegional">
                                            <label class="custom-control-label" for="gridCheck2">Regional</label>   
                                        </div>     
                                        <div class="custom-control custom-checkbox custom-control-inline">          
                                            <input class="custom-control-input" type="checkbox" id="gridCheck3" v-model="newWorld">
                                            <label class="custom-control-label" for="gridCheck3">Mundial</label>   
                                        </div>
                                    </div>
                                 </div>   
                                <div class="form-group row"> 
                                <!--<span v-for="error in errors" class="text-danger">{{ error }}</span>-->
                                    <div class="col"> 
                                        <label for="name">Nombre</label>
                                        <input type="text" name="name"  class="form-control" v-model="newName" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col"> 
                                        <label for="description">Descripción</label>
                                        <textarea  name="description" v-model="newDescription" class="form-control"  maxlength="200" required></textarea>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                    <div class="col"> 
                                        <label for="">Categorias</label>
                                        <select2 :options="categories" v-model="Category" @input="getSubcategories" required></select2>
                                    </div>
                                    <div class="col"> 
                                        <label for="">Subcategorias</label>
                                        <select2 :options="subcategories" v-model="newId_subcategories" required></select2>
                                    </div>  
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6"> 
                                        <label for="subject">Tema</label>
                                        <input type="text" name="subject" class="form-control" v-model="newSubject" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k"> 
                                        <label for="objetive">Objetivo del tema</label>
                                        <span>
                                            <button class="badge badge-danger" @click.prevent="remove(k)" v-show="k || ( !k && inputs.length > 1)">-</button>
                                            <button class="badge badge-primary" @click.prevent="add(k)" v-show="k == inputs.length-1">+</button>
                                        </span>
                                        <input type="text" name="objetive" class="form-control" v-model="newObjetive" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                </div>
                                <div  class="form-group row"> 
                                    <div  class="col"> 
                                        <strong>Semana</strong>
                                    </div>
                                    <div class="col"> 
                                        <strong>Horario</strong>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                    <div class="col-md-3"> 
                                        <label for="fromW">Desde</label>
                                        <input type="date" name="fromW" class="form-control" v-model="newFromW" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-3"> 
                                        <label for="toW">Hasta</label>
                                        <input type="date" name="toW" class="form-control" v-model="newToW" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-3"> 
                                        <label for="">Desde</label>
                                        <select2 :options="subcategories" v-model="newHour" required></select2>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-3"> 
                                        <label for="">Hasta</label>
                                        <select2 :options="subcategories" v-model="newFromH" required></select2>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k"> 
                                        <label for="quiz">Medicion</label>
                                        <span>
                                            <button class="badge badge-danger" @click.prevent="remove1(k)" v-show="k || ( !k && inputs1.length > 1)">-</button>
                                            <button class="badge badge-primary" @click.prevent="add1(k)" v-show="k == inputs1.length-1">+</button>
                                        </span>
                                        <input type="text" name="quiz" class="form-control" v-model="newQuiz" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div> 
                                    <div class="col-md-4" v-for="(input,k) in inputs2" :key="k" > 
                                        <label for="indicator">Indicadores</label>
                                        <span>
                                            <button class="badge badge-danger" border-color="blue" @click.prevent="remove2(k)" v-show="k || ( !k && inputs2.length > 1)">-</button>
                                            <button class="badge badge-primary" @click.prevent="add2(k)" v-show="k == inputs2.length-1">+</button>
                                        </span>
                                        <input type="text" name="indicator" class="form-control" v-model="newIndicator" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-2"> 
                                        <label for="percent">%</label>
                                        <input type="number" name="percent" class="form-control" v-model="newPercent" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" @click="createClasses" class="btn btn-primary" value="Guardar"> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bd-example-modal-xl" id="edit">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="card">
                        <h1 class="card-header">Clase
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button> 
                        </h1>
                        <form class="needs-validation" novalidate>
                            <div class= "card-body">
                                 <div class="form-group row"> 
                                    <div class="col">                        
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input class="custom-control-input" type="checkbox" id="gridCheck1" v-model="fillC.local" required>
                                            <label class="custom-control-label" for="gridCheck1">Local</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input class="custom-control-input" type="checkbox" id="gridCheck2" v-model="fillC.reginal">
                                            <label class="custom-control-label" for="gridCheck2">Regional</label>   
                                        </div>     
                                        <div class="custom-control custom-checkbox custom-control-inline">          
                                            <input class="custom-control-input" type="checkbox" id="gridCheck3" v-model="fillC.world">
                                            <label class="custom-control-label" for="gridCheck3">Mundial</label>   
                                        </div>
                                    </div>
                                 </div>   
                                <div class="form-group row"> 
                                <!--<span v-for="error in errors" class="text-danger">{{ error }}</span>-->
                                    <div class="col"> 
                                        <label for="name">Nombre</label>
                                        <input type="text" name="name"  class="form-control" v-model="fillC.name" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col"> 
                                        <label for="description">Descripción</label>
                                        <textarea  name="description" v-model="fillC.description" class="form-control"  maxlength="200" required></textarea>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                    <div class="col"> 
                                        <label for="">Categorias</label>
                                        <select2 :options="categories" v-model="Category" @input="getSubcategories" required></select2>
                                    </div>
                                    <div class="col"> 
                                        <label for="">Subcategorias</label>
                                        <select2 :options="subcategories" v-model="newId_subcategories" required></select2>
                                    </div>  
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6"> 
                                        <label for="subject">Tema</label>
                                        <input type="text" name="subject" class="form-control" v-model="fillC.subject" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k"> 
                                        <label for="objetive">Objetivo del tema</label>
                                        <span>
                                            <button class="badge badge-danger" @click.prevent="remove(k)" v-show="k || ( !k && inputs.length > 1)">-</button>
                                            <button class="badge badge-primary" @click.prevent="add(k)" v-show="k == inputs.length-1">+</button>
                                        </span>
                                        <input type="text" name="objetive" class="form-control" v-model="fillC.objetive" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                </div>
                                <div  class="form-group row"> 
                                    <div  class="col"> 
                                        <strong>Semana</strong>
                                    </div>
                                    <div class="col"> 
                                        <strong>Horario</strong>
                                    </div>
                                </div>
                                <div class="form-group row"> 
                                    <div class="col-md-3"> 
                                        <label for="fromW">Desde</label>
                                        <input type="date" name="fromW" class="form-control" v-model="fillC.fromW" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-3"> 
                                        <label for="toW">Hasta</label>
                                        <input type="date" name="toW" class="form-control" v-model="fillC.toW" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-3"> 
                                        <label for="">Desde</label>
                                        <select2 :options="subcategories" v-model="fillC.fromH" required></select2>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-3"> 
                                        <label for="">Hasta</label>
                                        <select2 :options="subcategories" v-model="fillC.toH" required></select2>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k"> 
                                        <label for="quiz">Medicion</label>
                                        <span>
                                            <button class="badge badge-danger" @click.prevent="remove1(k)" v-show="k || ( !k && inputs1.length > 1)">-</button>
                                            <button class="badge badge-primary" @click.prevent="add1(k)" v-show="k == inputs1.length-1">+</button>
                                        </span>
                                        <input type="text" name="quiz" class="form-control" v-model="fillC.quiz" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div> 
                                    <div class="col-md-4" v-for="(input,k) in inputs2" :key="k" > 
                                        <label for="indicator">Indicadores</label>
                                        <span>
                                            <button class="badge badge-danger" border-color="blue" @click.prevent="remove2(k)" v-show="k || ( !k && inputs2.length > 1)">-</button>
                                            <button class="badge badge-primary" @click.prevent="add2(k)" v-show="k == inputs2.length-1">+</button>
                                        </span>
                                        <input type="text" name="indicator" class="form-control" v-model="fillC.indicator" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                    <div class="col-md-2"> 
                                        <label for="percent">%</label>
                                        <input type="number" name="percent" class="form-control" v-model="fillC.percent" required>
                                        <div class = " invalid-feedback ">Please fill out this field</div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" @click="updateClasses" class="btn btn-primary" value="Actualizar"> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
            inputs: [
            {
                name: ''
            }
            ],
              inputs1: [
            {
                name: ''
            }
            ],
              inputs2: [
            {
                name: ''
            }
            ],
            categories: [],
            subcategories: [],
            TypeUsers: [],
             classes: [],
        newDescription: '',
        newName: '',
        newId_subcategories: '',
        newSubject: '',
        newObjetive: '',
        newFromW: '',
        newToW: '',
        newFormH: '',
        newToH: '',
        newQuiz: '',
        newIndicator: '',
        newPercent: '',
        newLocal: '',
        newRegional: '',
        newWorld: '',
        newId_user:'',
        fillC: {'id': '', 'name': '','description': '','id_user':'', 'id_category':'', 'id_subcategory':'','subject':'', 'objetive':'', 'fromW':'', 'toW':'', 'fromH':'', 'toH':'', 'quiz':'',  'indicator': '', 'percent': '', 'local': '', 'regional': '', 'world': ''},
        errors: [],
        }
        
    },
    mounted() {
        var urlsel = 'GetCategories';
        axios.get(urlsel).then((response)=>{
            this.categories = response.data;
        });
        var urlsel = 'GetTypeU';
        axios.get(urlsel).then((response)=>{
            this.TypeUsers = response.data;
        });
        console.log("Component mounted.");
    },
    methods: {
        add(index) {
            this.inputs.push({ name: '' });
           
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },
         add1(index) {
            this.inputs1.push({ name: '' });
           
        },
        remove1(index) {
            this.inputs1.splice(index, 1);
        },
         add2(index) {
            this.inputs2.push({ name: '' });
           
        },
        remove2(index) {
            this.inputs2.splice(index, 1);
        },
        getClasses(){
            var urlr = 'classes/';
            axios.get(urlr).then(response=> {
                this.classes = response.data.classes.data
            });
        },
        editClasses(classes){
            this.fillC.id = name.id;
            this.fillC.description = name.description;
            this.fillC.name = name.name;
            this.fillC.id_user = name.id_user;
            this.fillC.id_category = name.id_category;
            this.fillC.id_subcategory = name.id_subcategory;
            this.fillC.subject = name.subject;
            this.fillC.objetive = name.objetive;
            this.fillC.fromW = name.fromW;
            this.fillC.toW = name.toW;
            this.fillC.fromH = name.fromH;
            this.fillC.toH = name.toH;
            this.fillC.quiz = name.quiz;
            this.fillC.indicator = name.indicator;
            this.fillC.percent = name.percent;
            this.fillC.local = name.local;
            this.fillC.regional = name.regional;
            this.fillC.world = name.world;
        },
        updateClasses(id) {
            var url = 'classes/'+ id;
            axios.put(url, this.fillC).then(response=> {
                this.getClasses();
                this.fillC= {'id': '', 'name': '','description': '','id_user':'','id_category':'', 'id_subcategory':'','subject':'', 'objetive':'', 'fromW':'', 'toW':'', 'fromH':'', 'toH':'', 'quiz':'',  'indicator': '', 'percent': '', 'local': '', 'regional': '', 'world': ''},
                this.errors = [];
                $('#edit').modal('hide');
                toastr.success('Class successfully edited');
                }).catch(error => {
                this.errors = error.response.data
                });
        },
        deleteClasses(classes) {
            var url = 'classes/' + name.id;
            axios.delete(url).then(response=>{ // eliminamos
                this.getResumes(); //listamos
                toastr.success('Successfully removed');//mensaje
            });
        },
        createClasses() {
            var url = 'classes';
            this.newId_user= 36;
            axios.post(url, {
                id_user     :this.newId_user,
                description :this.newDescription,
                name    :this.newName,
                id_category:this.Category,
                id_subcategory:this.newId_subcategories,
                subject:this.newSubject,
                objetive:this.newObjetive, 
                fromW:this.newFromW,
                toW:this.newToW,
                fromH:this.newFormH,
                toH:this.newToH,   
                quiz:this.newQuiz,
                indicator:this.newIndicator,
                percent:this.newPercent,
                local:this.newLocal,
                regional:this.newRegional,
                world:this.newWorld
            }).then(response => {
                this.getResumes();
                this.newDescription = '';
                this.newId_user = '';
                this.newName = '';
                this.newId_subcategories = '';
                this.newSubject = '';
                this.newObjetive = '';
                this.newToW = '';
                this.newFromW= '';
                this.newFormH = '';
                this.newToH = '';
                this.newQuiz = '';
                this.newIndicator = '';
                this.newPercent = '';
                this.newLocal = '';
                this.newRegional = '';
                this.newWorld = '';
                this.errors = [];
                toastr.success('New class created successfully');
                }).catch(error => {
                this.errors = error.response.data
                });
            },
            getSubcategories(){
                var urlse = 'GetSubcategories/'+this.Category;
                axios.get(urlse).then((response)=>{
                this.subcategories = response.data;  
                });
            },
 }
    
}
</script>
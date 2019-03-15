<template>
     <div class="container">
        <div class="row justify-content-center">
            <div id="crud" class="col-md-11">
                <div class="card">
                    <h1 class="card-header">Clase</h1>
                    <form class="needs-validation" novalidate>
                        <div class= "card-body">
                            <div class="form-group row"> 
                                <!--<span v-for="error in errors" class="text-danger">{{ error }}</span>-->
                                 <div class="col"> 
                                    <label for="name">Nombre</label>
                                    <input type="text" name="name"  class="form-control" v-model="newName" required>
                                    <div class = " invalid-feedback ">Please fill out this field </div>
                                </div>
                                <div class="col"> 
                                    <label for="description">Descripción</label>
                                    <textarea  name="description" v-model="newDescription" class="form-control"  maxlength="200" required></textarea>
                                    <div class = " invalid-feedback ">Please fill out this field </div>
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
                                <div class="col-md-4"> 
                                    <label for="subject">Tema</label>
                                    <input type="text" name="subject" class="form-control" v-model="newSubject" required>
                                    <div class = " invalid-feedback ">Please fill out this field </div>
                                </div>  
                            </div>
                            <div  class="form-group row"> 
                                <strong>Semana</strong>
                            </div>
                            <div class="form-group row"> 
                                <div class="col-md-4"> 
                                    <label for="from">Desde</label>
                                    <input type="date" name="from" class="form-control" v-model="newFrom">
                                    <div class = " invalid-feedback ">Please fill out this field </div>
                                </div>
                                <div class="col-md-4"> 
                                    <label for="to">Hasta</label>
                                    <input type="date" name="to" class="form-control" v-model="newTo">
                                    <div class = " invalid-feedback ">Please fill out this field</div>
                                </div>
                                  <div class="col-md-4"> 
                                    <label for="">Horario</label>
                                    <select2 :options="subcategories" v-model="newHour" required></select2>
                                    <div class = " invalid-feedback ">Please fill out this field </div>
                                </div>
                            </div>
                            <div class="form-group row"> 
                                <div class="col-md-6"> 
                                    <label for="indicator">Indicadores</label>
                                    <input type="text" name="indicator" class="form-control" v-model="newIndicator">
                                    <div class = " invalid-feedback ">Please fill out this field </div>
                                </div>
                                <div class="col-md-2"> 
                                    <label for="percent">%</label>
                                    <input type="number" name="percent" class="form-control" v-model="newPercent">
                                    <div class = " invalid-feedback ">Please fill out this field</div>
                                </div>
                                <div class="col-md-4"> 
                                    <label for="quiz">Medicion</label>
                                    <input type="text" name="quiz" class="form-control" v-model="newQuiz">
                                    <div class = " invalid-feedback ">Please fill out this field </div>
                                </div>  
                            </div> 
                            <div class="form-group row">
                                <div class="col-md-4"> 
                                    <label for="objetive">Objetivo del tema</label>
                                    <input type="text" name="objetive" class="form-control" v-model="newObjetive">
                                    <div class = " invalid-feedback ">Please fill out this field </div>
                               </div>
                            </div>
                                </div>
                        <div class="modal-footer">
                            <input type="submit" @click="createResumes" class="btn btn-primary" value="Agregar"> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
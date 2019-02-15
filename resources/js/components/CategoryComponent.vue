<template>
    <div id="crud" class="row">
    <div class="col-sm-12">
        <h1 class="page-header">CRUD Categorias</h1>
    </div>
    <div class="col-sm-7">
        <a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#createc">Agregar</a>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th colspan="2">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
             <!-- for para recorrer el arreglo de categorias -->
                <tr v-for="namec in names_c">
                    <td width="10px">{{ namec.id }}</td>
                    <td>{{ namec.name_category }}</td>

                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editNamec(namec)">Editar</a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteNamec(namec)">Eliminar</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="modal fade" id="createc">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4>Crear</h4>
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>  
            </div>
            <div class="modal-body">
                <label for="keep">Categoria</label>
                <input type="text" name="name_category" class="form-control" v-model="newName_category">
                <label for="keep">Subcategoria</label>
                <input type="text" name="name_subcategory" class="form-control" v-model="newName_subcategory">
                <span v-for="error in errors" class="text-danger">{{ error }}</span>
            </div>
            <div class="modal-footer">
                <input type="submit" @click="createNamec()" class="btn btn-primary" value="Guardar">
        
            </div>
        </div>
    </div>
    
</div>
<div class="modal fade" id="editc">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4>Editar</h4>
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>  
            </div>
            <div class="modal-body">
                <label for="keep">Categoria</label>
                <input type="text" name="name_category" class="form-control" v-model="fillNamec.name_category">
                <label for="keep">Subcategoria</label>
                <input type="text" name="name_subcategory" class="form-control" v-model="fillNamec.name_subcategory">
                <span v-for="error in errors" class="text-danger">{{ error }}</span>
            </div>
            <div class="modal-footer">
                <input type="submit" @click="updateNamec(fillNamec.id)" class="btn btn-primary" value="Actualizar">
            </div>
        </div>
    </div>
</div>
    </div>
 </div>
</template>
<script>
export default {
    data() {
        return { 
        names_c:[],
        newName_category: '',
        newName_subcategory: '',
        fillNamec: {'id': '', 'name_category': ''},
        errors: [],
        offset: 3,
        Category: '',
        Subcategory: '',
        categories:[],
        subcategories : [],
        }
    },
     mounted() {
          var urlsel = 'GetCategories';
            axios.get(urlsel).then((response)=>{
            this.categories = response.data;
            });
    console.log("Component mounted.");
  },
  created() {
    this.getNamec();
  },

   methods: { //metodos del CRUD

    getNamec: function(page){
            var urlCat = 'categories?page='+page;
            axios.get(urlCat).then(response=> {
                this.names_c = response.data.categories.data,
                this.pagination = response.data.pagination
            });
        },
        editNamec: function (namec){
            this.fillNamec.id = namec.id;
            this.fillNamec.name_category = namec.name_category;
            $('#editc').modal('show');
        },
        updateNamec: function(id) {
            var url = 'categories/'+ id;
            axios.put(url, this.fillNamec).then(response=> {
                this.getNamec();
                this.fillNamec= {'id': '', 'name_category': ''};
                this.errors = [];
                $('#editc').modal('hide');
               // toastr.success('Categoria editada con exito');
                //}).catch(error => {
                //    this.errors = error.response.data
                });
        },

        deleteNamec: function(namec) {
            var url = 'categories/' + namec.id;
            axios.delete(url).then(response=>{ // eliminamos
                this.getNamec(); //listamos
                //toastr.success('Eliminado correctamente');//mensaje
            });
        },
        createNamec() {
            var url = 'categories';
            axios.post(url, {
                name_category: this.newName_category,
                }).then(response => {
                    this.getNamec();
                    this.newName_category= '';
                    this.errors = [];
                $('#createc').modal('hide');
             //   toastr.success('Nueva categoria creada con exito');
           // }).catch(error => {
           //     this.errors = error.response.data
            });
        },
        changePage(page) {
            this.pagination.current_page = page;
            this.getNamec(page);
        },
        selectCategory(id) {
            var urlCat = 'categories?page='+page;
            axios.get(urlCat).then(response=> {
                this.names_c = response.data.categories.data
            });
         }
    
      
   }
};

</script>

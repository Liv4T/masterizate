  <template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Mis clases</h3>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Buscar Clase" v-model="search_filter">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </span>
                    </div>
                </div>
              <div class="card" v-for="(area,t) in areas" :key="t">
                <div v-if="search_filter =='' || filterClass(area.text)" class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapse'+t"
                      aria-expanded="false"
                      @click.prevent="botones(area.id, area.id_classroom)"
                      aria-controls="collapse"
                    >
                      <label class="btn-link_bold">{{ area.text }}</label>
                    </button>
                  </h2>
                </div>
                <div
                  :id="'collapse'+t"
                  class="collapse hide"
                  aria-labelledby="heading"
                  data-parent="#accordionExample"
                >
                <div class="input-group mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Buscar Ciclo" v-model="search_filter_cicle">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </span>
                    </div>
                </div>
                  <table class="table table-responsive-xl table-hover table-striped center">
                    <thead>
                      <tr>
                            <th></th>
                            <th class="text-center">Ciclo de aprendizaje</th>
                            <th class="text-center">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                        <template  v-for="(clas, k) in clases">
                        <tr :key="k" v-if="clas.id_classroom==area.id_classroom && clas.id_area==area.id && search_filter_cicle =='' || filterCicle(clas.text)"
                      >
                         <td> <a class="btn btn-primary"  :href="'/act_semana/'+clas.id_area+'/'+clas.id_classroom">Editar</a> </td>
                        <td>{{ clas.text }}</td>
                        <td>
                          <a
                            class="btn btn-primary"
                            :href="'/docente/modulo/'+clas.id"
                          >Ir a Ciclo</a>
                          <button v-if="clas.activateButton" v-on:click="ClassAndCicle(clas.id)" class="btn btn-primary">Eliminar</button>
                        </td>

                      </tr>
                        </template>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="infoClass" tabindex="-1" role="dialog" aria-labelledby="infoClassLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="infoClassLabel">Información de Clases del Ciclo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div v-if="clase_to_delete.length > 0">
                        <p class="mb-4">Se eliminarán las siguientes Clases del Ciclo: </p>
                        <table class="table table-stripped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(clasDelete, key) in clase_to_delete" :key="key">
                                    <td>{{clasDelete.name}}</td>
                                    <td>{{clasDelete.description}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-else>
                        No hay Clases asignadas al Ciclo
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="deleteClassAndCicles">Eliminar de todas Formas</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
moment.tz.setDefault("America/Bogota");
moment.locale('es');

export default {
  data() {
    return {
        search_filter:'',
        search_filter_cicle:'',
        clases: [],
        areas: [],
        descripcion: "",
        logro: "",
        fechaE: "",
        fechaR: "",
        id_act: "",
        errors: [],
        fillS: [],
        clase_to_delete:[],
        id_module:''
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  methods: {
        getData(){
            var url = "/GetArearByUser";
            axios.get(url).then((response) => {
                this.areas = response.data;
            });
        },
        botones(area, classroom) {
            var urlsel = "/editGetWeek/" + area + "/" + classroom;
            axios.get(urlsel).then((response) => {
                let clases = response.data

                axios.get('/getPermissions').then((response)=>{
                    let permissions = response.data;

                    for(let i =0; i < permissions.length; i++){
                        for(let a = 0; a < clases.length; a++){
                            if(permissions[i] && permissions[i].id_cicle === clases[a].id){
                                if(permissions[i].date_to_deactivate_btn >= moment(new Date()).format('YYYY-MM-DD')){                                    
                                    clases[a].activateButton = true
                                }else if(moment(new Date()).format('YYYY-MM-DD') >= permissions[i].date_to_activate_btn){
                                    clases[a].activateButton = false
                                }
                            }
                        }
                    }
                    this.clases = clases;
                });
            });
        },
        filterClass(class_name){
            return class_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        },

        filterCicle(cicle_name){
            return cicle_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_filter_cicle.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        },
        ClassAndCicle(id_module){
            axios.get(`/showClass/${id_module}`).then(response => {
                this.clase_to_delete = response.data.clase;
                this.id_module = id_module;
                $('#infoClass').modal('show');
            })
        },
        deleteClassAndCicles(){
            this.clase_to_delete.forEach((clas)=>{ 
                axios.delete(`/deleteClasses/${clas.id}`)
            })

            axios.delete(`/DeleteCicle/${this.id_module}`).then((response)=> {
                this.clase_to_delete =[];
                this.id_module= '';
                
                if(this.clase_to_delete.length > 0){
                    toastr.success(`Clases y ${response.data}`)
                }else{
                    toastr.success('Ciclo Eliminado')
                }

                window.location = "/docente/clases";
            });
        }
    },
};
</script>
<style>
</style>

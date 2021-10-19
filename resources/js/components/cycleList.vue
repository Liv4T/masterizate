<template>
<div v-if="showCycle === 'true' " style="margin: 30px">
    <div class="row justify-content-center">
        <div id="crud" class="col-sm-12">
            <div class="accordion" id="accordionExample" >
              <div class="card" v-for="(trimestre,t) in trimestres" :key="t">
                <div class="card-header">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#collapse'+t"
                      aria-expanded="false"
                      @click="getCycles(trimestre.id)"
                      aria-controls="collapse"
                    >
                      <label>Ciclo {{ trimestre.nombre }}</label>
                    </button>
                  </h2>
                </div>
                <div
                    :id="'collapse'+t"
                    class="collapse hide"
                    aria-labelledby="heading"
                    data-parent="#accordionExample"
                >
                    <div v-if="user.type_user !== 3" class="float-left" style="padding:20px;">
                        <a v-on:click="getOrderCycle(trimestre.id,t+1)" class="btn btn-warning float-left">Crear</a>
                    </div>
                    <div class="float-right" style="padding:20px;">                    
                        <input class="form-control" type="text" placeholder="Buscar Ciclo" v-model="filter" />
                    </div>
                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <tbody>
                                <tr>
                                    <td>{{ $t('lang.grades.cycleName') }}</td>

                                    <td v-show="!user.type_user === 3">{{ $t('lang.general.observation') }}</td>
                                    <td>{{ $t('lang.class.action') }}</td>

                                </tr>
                                <tr v-for="(cycle,k) in filteredRows" :key="k">                                
                                    <td>{{ cycle.driving_question }}</td>

                                    <td v-show="!user.type_user === 3">{{ cycle.observation }}</td>

                                    <td v-if="planification === 'clase'">
                                        <p>
                                            <button class="btn btn-warning" v-on:click="()=>getCycle(cycle)">Ir a Ciclo</button>
                                        </p>
                                    </td>
                                    <td v-else-if="planification === 'general'">
                                        <p>
                                            <button class="btn btn-warning" v-on:click="()=>getEditCycle(cycle, k+1, trimestre.id,t+1)">Editar</button>                  
                                            <button class="btn btn-primary" v-on:click="()=>ClassAndCicle(cycle.id, cycle.driving_question)" >Eliminar</button>                                        
                                        </p>
                                    </td>
                                    <td v-else-if="planification === 'claseEst'">
                                        <p>
                                            <button class="btn btn-warning" v-on:click="showModuleStudent(cycle)">Ir a Ciclo</button>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
                        <p class="mb-4">Se eliminarán las siguientes Clases del Ciclo <strong>{{cicle_name}}</strong> </p>
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
                        No hay Clases asignadas al Ciclo <strong>{{cicle_name}}</strong>
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
<div v-else-if="showCycle === 'teacherModule'">
    <teacher-module :id_module="idModule" :id_trimestre="idTrimestre" :cleanIdModule="cleanIdModule"></teacher-module>
</div>
<div v-else-if="showCycle === 'semanalAct' ">
    <semanalact-component :id_area="id_area" :id_classroom="id_classroom" :cleanIdModule="cleanIdModule" :id_cycle="id_cicle" :orden="orden" :cycle_number="cycle_number"></semanalact-component>
</div>
<div v-else-if="showCycle==='student'">
    <student-module :clasId="clasId" :cleanClasId="cleanIdModule" :moduleId="moduleId"></student-module>
</div>
<div v-else-if="showCycle==='courseSemanal'">
    <semanal-component :id_area="id_area" :id_classroom="id_classroom" :id_trimestre="idTrimestre" :orden="orden" :cleanClasId="cleanIdModule"></semanal-component>
</div>
</template>
<script>
export default {
    props:["idArea","planif","moduleId","user"],
    data() {
        return {
            cycles:[],
            trimestres: [],
            planification:"",
            idModule:"",
            id_area: "",
            id_classroom:"",
            showCycle:"true",
            clasId:"",
            idTrimestre:"",
            orden:"",
            clase_to_delete:[],
            id_cicle:"",
            filter: '',
            cycle_number:0,
            cicle_name:"",
        };
    },
    mounted(){        
        this.planification= this.planif;
        this.getData();
    },
    methods: {
        getData(){
            var url="/getTrimestres";
            axios.get(url).then((response) =>{
                this.trimestres=response.data;
            });
        },
        getCycles(id_trimestre) {
            this.idTrimestre = id_trimestre;            
            var url="/cycle/teacher/"+this.idArea+"/"+id_trimestre;
            axios.get(url).then((response) => {
                this.cycles = response.data;
                /* if(this.planif === 'claseEst'){
                    var urlsel = "/viewGetWeek/" + this.idArea +'/'+id_trimestre;
                    axios.get(urlsel).then((response) => {
                       let data = response.data;                       
                       data.forEach((element)=>{
                           this.cycles.push({
                                driving_question: element.text,
                                class: element.class,
                                id: element.id,
                                observation: element.observation
                           })
                       })
                    });
                } */
            });
        },

        getCycle(cycle){
            this.idModule = cycle.id
            this.showCycle ="teacherModule"
        },
        
        cleanIdModule(){
            this.idModule="";
            this.id_area="";
            this.id_classroom="";
            this.showCycle ="true";
            this.clasId="";
            this.idTrimestre="";
            this.orden="";
            this.getData();
        },
        
        getEditCycle(cycle, cycle_number, orden){
            let data = this.idArea.split("/");
            this.id_area=data[0];
            this.cycle_number = cycle_number;
            this.orden=orden;
            this.id_classroom = data[1];
            this.showCycle ="semanalAct";
            this.id_cicle = cycle.id;
        },

        RequestPermissions(data, curso){            
            axios.post('/requestPermission',{
                cicle: data.text,
                id_area: data.id_area,
                id_classroom: data.id_classroom,
                id_cicle: data.id,
                course: curso
            }).then((response)=>{
                toastr.success(response.data);
            }).catch((error)=>{
                toastr.info('El dato ya fue creado, Consulte con el Administrador')
                console.log(error);
            })
        },

        ClassAndCicle(id_module, cicle_name){
            axios.get(`/showClass/${id_module}`).then(response => {
                this.clase_to_delete = response.data.clase;
                this.cicle_name = cicle_name;
                this.id_module = id_module;
                $('#infoClass').modal('show');
            })
        },

        deleteClassAndCicles(){
            if(window.confirm(`Seguro que desea Eliminar el ciclo ${this.cicle_name} Junto con sus clases ?`)){
                this.clase_to_delete.forEach((clas)=>{ 
                    axios.delete(`/deleteClasses/${clas.id}`)
                })

                axios.delete(`/DeleteCicle/${this.id_module}`).then((response)=> {
                    this.clase_to_delete =[];
                    this.id_module= '';
                    
                    if(this.clase_to_delete.length > 0){
                        toastr.success(`Clases y ${response.data}`);                        
                        this.getCycles(this.idTrimestre);
                        $('#infoClass').modal('hide');
                    }else{
                        toastr.success('Ciclo Eliminado');                        
                        this.getCycles(this.idTrimestre);
                        $('#infoClass').modal('hide');
                    }
                });
            }            
        },
        showModuleStudent(cycle){
            this.showCycle = "student";
            this.clasId = cycle.id;
            console.log(cycle)
        },
        getOrderCycle(id_trimestre, orden){
            let data = this.idArea.split("/");
            this.id_area=data[0];
            this.id_classroom = data[1];
            this.idTrimestre= id_trimestre;
            this.orden=orden;
            this.showCycle = "courseSemanal"
        }
    },
    computed: {
        filteredRows() {
            if(!this.cycles.filter) return false;
            return this.cycles.filter((row) => {
                const name = row.driving_question.toString().toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return name.includes(searchTerm);
            });
        },
    },
};
</script>
<style>
.item-cycle {
    height: 50px;
    overflow: hidden;
    color: white;
    background: #00cbcec1;
    margin: 8px;
    line-height: 50px;
    margin-bottom: 2rem;
    border-radius: 10px;
}
.menu-cycle{
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 28px;
}
</style>
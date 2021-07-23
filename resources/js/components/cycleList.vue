<template>
<div v-if="idModule === ''" style="margin: 30px">
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
                <div class="card-body">
                    <table class="table table-responsive-xl table-hover table-striped center">
                        <tbody>
                            <tr>
                                <td>Nombre Cyclo</td>

                                <td>Observaciones</td>
                                <td>Acción</td>

                            </tr>
                            <tr v-for="(cycle,k) in cycles" :key="k">
                                <td>{{ cycle.driving_question }}</td>

                                <td>{{ cycle.observation }}</td>

                                <td v-if="planification === 'clase'">
                                    <p>
                                        <button class="btn btn-warning" v-on:click="()=>getCycle(cycle)">Ir a Ciclo</button>
                                    </p>
                                </td>
                                <td v-else-if="planification === 'general'">
                                    <p>
                                        <button class="btn btn-warning">Editar</button>
                                        <button class="btn btn-warning">Solicitar Permiso para Eliminar</button>
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
</div>
<div v-else>
    <teacher-module :id_module="idModule" :cleanIdModule="cleanIdModule"></teacher-module>
</div>
</template>
<script>
export default {
    props:["idArea","planif"],
    data() {
        return {
            cycles:[],
            trimestres: [],
            planification:"",
            idModule:""
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
    
            var url="/cycle/teacher/"+this.idArea+"/"+id_trimestre;
            axios.get(url).then((response) => {
                this.cycles = response.data;
            });
            console.log(this.cycles);
        },
        getCycle(cycle){
            this.idModule = cycle.id
        },
        cleanIdModule(){
            this.idModule=""
        }
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
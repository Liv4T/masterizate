<template>            
    <div v-show="showPermission == true" class="card">
        <div>
            <div>
                <div class="card-header fondo text-center mb-3">
                    <h4>Permisos Solicitados</h4>
                </div>
            </div>
            <div class="card-body">                            
                <input type="text" class="form-control mb-2" placeholder="Buscar Por Materia - Salon" v-model="search_urgent_class">
                <div id="accordion" v-for="(urgentP, key) in urgentPermissons" :key="key">
                    <div class="card" v-if="search_urgent_class =='' || filterUrgentClass(key)">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse1${key.replace(/ /g, '')}`" aria-expanded="true" :aria-controls="`collapse1${key.replace(/ /g, '')}`">
                                    {{key}}
                                </button>
                            </h5>
                        </div>

                        <div :id="`collapse1${key.replace(/ /g, '')}`" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <input type="text" class="form-control" placeholder="Buscar Por Ciclo" v-model="search_urgent_filter">
                                <table class="table table-responsive-xl table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>Ciclos</th>
                                            <th>Materia - Salon</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>                                
                                    <tbody v-for="(data, key) in urgentP" :key="key">
                                        <tr v-if="search_urgent_filter =='' || filterUrgentCicle(data.cicle)">
                                            <td>{{data.cicle}}</td>
                                            <td>{{data.course}}</td>
                                            <td v-if="data.responded_at === null">                                                                                            
                                                <button class="btn btn-primary" v-on:click="createUrgentPermission(data)">Crear</button>                                                                    
                                            </td>
                                            <td v-else> 
                                                <p>Respondido</p>
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
</template>
<script>
    export default {
        props:['showPermission'],
        data() {
            return {
                urgentPermissons:[],
                search_urgent_class:"",
                search_urgent_filter:""
            }
        },
        mounted() {
            this.getPermissions();
        },
        
        methods: {
            getPermissions(){
                axios.get('requestPermission').then((response)=>{
                    this.groupUrgentData(response.data);
                })
            },
            groupUrgentData(data){
                const result = _.chain(data).groupBy("course").value();
                this.urgentPermissons = result;
            },
            filterUrgentCicle(cicleUrgentName){
                return cicleUrgentName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_urgent_filter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            },

            filterUrgentClass(UrgentClass){
                return UrgentClass.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search_urgent_class.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            },
        }
    }
</script>
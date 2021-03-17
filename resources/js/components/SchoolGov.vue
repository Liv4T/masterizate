<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="text-center card-header fondo">
                        Gobierno Escolar
                    </div>
                    <div class="card-body">
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            Quiénes lo Conforman
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <div class="row">
                                            <div v-if="members.length > 0" class="col-12">
                                                <div class="list-group" id="list-tab" role="tablist" v-for="(data, id) in members" :key="id">
                                                    <div class="mb-5" v-show="data.modeInsert == '1'">
                                                        <a class="list-group-item" id="list-home-list" data-toggle="list" role="tab" aria-controls="home">
                                                            <div>
                                                                <div class="mb-3 d-flex justify-content-center">
                                                                    <strong>Organigrama de Gobierno Escolar</strong>
                                                                </div> 
                                                                <div class="d-flex justify-content-center">
                                                                    <img                                                                       
                                                                        style="height:160px;"
                                                                        :src="data.imageSchoolGovernment" 
                                                                        alt=""                                                            
                                                                    >
                                                                </div>                                                               
                                                                
                                                            </div>                                                        
                                                        </a>
                                                    </div>
                                                    <div v-show="data.modeInsert == '2'">
                                                        <a class="list-group-item" id="list-home-list" data-toggle="list" role="tab" aria-controls="home">
                                                            <div class="d-flex justify-content-center">
                                                                <img                                                                       
                                                                style="height:160px;"
                                                                :src="data.image" 
                                                                alt=""                                                            
                                                                >
                                                            </div>
                                                            <div class="text-center mt-2">
                                                                <strong class="h3 mb-2 text-uppercase">{{data.member}}</strong>
                                                                <div>
                                                                    <p class="h3">{{data.position}}</p>
                                                                </div>
                                                                <p class="h4">{{data.description}}</p>
                                                            </div>                                                        
                                                        </a>
                                                    </div>                                                
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div class="text-center">
                                                    <p>Crea los integrantes del Gobierno Escolar</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo"
                                            aria-expanded="true" aria-controls="collapseTwo">
                                            Legislación
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <div class="card-body" v-if="legislationData.length > 0">
                                            <div v-for="(data, id) in legislationData" :key="id">
                                                <p>{{data.legislation}}</p>
                                                <br>
                                            </div>
                                        </div>
                                        <div class="card-body" v-else>
                                            <p>Crea La Legislación del Gobierno Escolar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <modal-school-component></modal-school-component> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                legislationData: [],
                members: []
            }
        },
        mounted() {
            this.getLegislation();
            this.getMembers();
        },
        methods: {
            getLegislation() {
                axios.get('/getLegislation').then((response) => {
                    this.legislationData = response.data
                }).catch((error) => {
                    console.log(error);
                })
            },
            getMembers(){
                axios.get('/members').then(members =>{
                    this.members = members.data
                })
            },
        }
    }

</script>

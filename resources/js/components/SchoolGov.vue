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
                                    <div class="card-body" v-if="integrates.length > 0">
                                        <p>{{integrates.text}}</p>
                                    </div>

                                    <div class="card-body" v-else>
                                        <p>Crea a los Integrantes del Gobierno Escolar</p>
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
        <modal-school-component></modal-school-component>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                legislationData: [],
                integrates: []
            }
        },
        mounted(){
            this.getLegislation();
        },
        methods:{
            getLegislation(){
                axios.get('/getLegislation').then((response)=>{
                    this.legislationData = response.data
                }).catch((error)=>{
                    console.log(error);
                })
            },
        }
    }

</script>

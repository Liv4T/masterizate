<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <div class="card">
                            <div class="card-header fondo">
                                <h2>Duplicación de Planificación General</h2>
                            </div>
                            <div class="card-body">
                                <div id="accordion">
                                    <div class="card" v-for="(area, key) in areas" :key="key">
                                        <div class="card-header" :id="`headingOne${key}`">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapseOne${key}`" aria-expanded="true" :aria-controls="`collapseOne${key}`">
                                                    {{area.text}}
                                                </button>
                                            </h5>
                                        </div>

                                        <div :id="`collapseOne${key}`" class="collapse" :aria-labelledby="`headingOne${key}`" data-parent="#accordion">
                                            <div class="card-body">
                                                <duplicar-component :id_area="area.id_area" :id_classroom="area.id_classroom" :rol="'teacher'"></duplicar-component>
                                            </div>
                                        </div>
                                    </div>                            
                                </div>
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
    data() {
        return {
            areas:[]
        };
    },
    mounted() {
        var url = window.location.origin + "/GetArearByUser";
        axios.get(url).then((response) => {
            this.areas = response.data;
            console.log(response.data)
        });
    },
    methods: {
        
    },
};
</script>
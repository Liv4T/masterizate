<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-12">
                <div class="card text-center">
                    <h3 class="card-header fondo">Grados</h3>
                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <tbody v-for="(option, k) in fillG" :key="k">
                                <tr
                                    data-toggle="collapse"
                                    data-target="#accordion"
                                    class="clickable"
                                >
                                    <td>{{ option.name }}</td>
                                </tr>
                            </tbody>
                        </table>
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
            clases: [],
            descripcion: "",
            logro: "",
            name: [],
            grado: [],
            errors: [],
            fillS: [],
            section: "",
            materia: [],
            fillG: [],
            inputs: [
                {
                    name: ""
                }
            ]
        };
    },
    created() {},
    mounted() {
        var urlr = "getGradeTutor";
        axios.get(urlr).then(response => {
            this.fillG = response.data;
        });
        console.log("Component mounted.");
    },
    methods: {
        getMenu() {
            window.location = "/general_adm";
        },
    }
};
</script>
<style>
.background2 {
    background: url(../assets/img/Fondo5.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
</style>

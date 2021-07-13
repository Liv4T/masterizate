<template>
    <div class="row justify-content-center">
        <div id="crud" class="col-sm-12">
            <div class="card text-center">
                <h3 class="card-header fondo">Entregas</h3>
                <div class="card-body">

                    <div class="float-right">
                        <label for="">Buscar</label>
                        <input type="text" placeholder="Buscar" v-model="filter" />
                    </div>
                    
                    <div class="table-responsive" style="border-radius: 20px">
                        <table class="table table-hover table-striped" style="border-collapse: separate !important">
                            <thead >
                                <tr>
                                    <th>Fecha</th>
                                    <th>Tarea</th>
                                    <th>Estado</th>
                                    <th>-</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in filteredRows" :key="index">
                                    <td
                                        style="font-size: 18px"
                                        v-html="highlightMatches(row.date)"
                                    >
                                    </td>

                                    <td
                                        style="font-size: 18px"
                                        v-html="highlightMatches(row.name)"
                                    >
                                    </td>
                                    
                                    <td
                                        style="font-size: 18px"
                                        v-html="highlightMatches(row.status)"
                                    >
                                    </td>

                                    <td>
                                        <a v-show="row.status!='Calificado'"
                                            class="btn btn-warning"
                                            :href="'/repository/student/upload/'+row.id"
                                            >Ver más</a
                                        >
                                        <a
                                            class="btn btn-info"
                                            :href="'/repository/student/comment/'+row.id"
                                            >Retroalimentación</a
                                        >

                                    </td>
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
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
    components: { Multiselect },
    props: ["nameArea"],
    data() {
        return {
            clases: [],
            area_classroom: "",
            value: [{ name: "Todos", code: "js" }],
            descripcion: "",
            logro: "",
            fechaE: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillS: [],
            area: null,
            filter: "",
        };
    },
    mounted() {
        this.getData();
    },
    watch:{
        nameArea(old_value, new_value){
            if(old_value != new_value){
                this.getData();
            }
        }
    },
    methods: {
        getData(){
            this.clases = []
            axios.get("/GetArearByUser").then((response) => {
                let myOptions = response.data.filter(e => e.text === this.nameArea);
                myOptions.forEach(e=>{
                    this.areaClassroom(e.id, e.id_classroom)
                })
            });

            // console.log("Component mounted.");
        },
        areaClassroom(area_id, classroom_id){
            axios.get(`/getRepoStudent/${area_id}/${classroom_id}`).then((response) => {
                this.clases = response.data;
            });
        },
        highlightMatches(texto) {
            const matchExists = texto
                .toLowerCase()
                .includes(this.filter.toLowerCase());
            if (!matchExists) return texto;

            const re = new RegExp(this.filter, "ig");
            return texto.replace(
                re,
                (matchedText) => `<strong>${matchedText}</strong>`
            );
        },
    },
    computed: {
        filteredRows() {
            return this.clases.filter((row) => {
                const text = row.name.toString().toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return text.includes(searchTerm);
            });
        },
    },
};
</script>
<style>

</style>

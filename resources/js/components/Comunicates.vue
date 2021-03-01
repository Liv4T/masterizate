<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <input class="form-control col-md-3" placeholder="Buscar" type="text" v-model="filter" />
                <div class="card" style="width: 65rem;">
                    <div class="card-header fondo text-center">
                        <h4>Comunicados</h4>
                    </div>
                    <div class="card-body">
                        <div class="card" style="width: 30rem; margin-left:12rem;" v-for="(data,t) in data" :key="t">
                            <img class="card-img-top" :src="data.image" alt="Card image cap"
                                style="width: 30rem; height: 15rem;">
                            <div class="card-body">
                                <h5 class="card-title" v-html="highlightMatches(data.title)">{{data.title}}</h5>
                                <p class="card-text" v-html="highlightMatches(data.content)">{{data.content}}</p>
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
                filter: "",
                data: [{
                    id: 1,
                    title: "Informe",
                    content: "Fecha Final",
                    image: "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"
                }, {
                    id: 2,
                    title: "Avisos",
                    content: "Fecha de Vacaciones",
                    image: "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"
                }, {
                    id: 3,
                    title: "Aviso",
                    content: "Fecha de Ingreso",
                    image: "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"
                }]
            }
        },
        mounted() {

        },
        methods: {
            highlightMatches(text) {
                const matchExists = text
                    .toLowerCase()
                    .includes(this.filter.toLowerCase());
                if (!matchExists) return text;

                const re = new RegExp(this.filter, "ig");
                return text.replace(
                    re,
                    (matchedText) => `<strong style="text-decoration: underline;">${matchedText}</strong>`
                );
            },
        },
        computed: {
            filteredRows() {
                return this.data.filter((row) => {
                    const title = row.title.toString().toLowerCase();
                    const content = row.content.toString().toLowerCase();

                    return (
                        title.includes(searchTerm) ||
                        content.includes(searchTerm)
                    );
                });
            },
        },
    }

</script>

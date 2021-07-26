<template>
    <div>
        <div class="card card-header">
            Trimestres
        </div>
        <div class="card-body">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(trim, key) in trimestres"  :key="key">
                        <td>{{trim.name}}</td>
                        <td>
                            <button class="btn btn-primary" v-on:click="editTrim(trim)">Editar</button>
                            <button class="btn btn-danger" v-on:click="deleteTrim(trim.id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            trimestres:[]
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            axios.get('/trimestres').then((response)=>{
                this.trimestres = response.data
            })  
        },
    },
};
</script>
<style></style>

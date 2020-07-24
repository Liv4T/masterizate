<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Mensajes</h3>

                    <div class="card-body">
                        <a href="/redactar" class="btn btn-warning float-right"
                            >Redactar</a
                        >
                        <br />
                        <br />
                        <br />
                        <table
                            class="table table-responsive-xl table-hover table-striped center"
                        >
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Asunto</th>
                                    <th>Fecha</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody v-for="(option, k) in messages" :key="k">
                                <tr>
                                    <td width="200px">
                                        <ul
                                            v-for="(destinatario,
                                            k) in option.destinatarios"
                                            :key="k"
                                            style="display: inline;
                                                         overflow: hidden;
                                                         font-size:10px;"
                                        >
                                            {{
                                                destinatario.email
                                            }}
                                        </ul>
                                    </td>
                                    <td>{{ option.asunto }}</td>
                                    <td>
                                        {{
                                            option.fecha.date
                                                | moment("dddd, MMMM Do YYYY")
                                        }}
                                    </td>
                                    <td class="float-right">
                                        <a
                                            class="btn btn-sm"
                                            href="#"
                                            style="color: grey;"
                                        >
                                            <i class="fa fa-eye"></i>
                                        </a>
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
import Vue from "vue";

Vue.use(require("vue-moment"));
export default {
    data() {
        return {
            messages: []
        };
    },
    created() {},
    mounted() {
        var urlUsers = " getReceivedMessage";
        axios.get(urlUsers).then(response => {
            this.messages = response.data;
            console.log(this.messages);
        });
    },
    methods: {}
};
</script>
<style></style>

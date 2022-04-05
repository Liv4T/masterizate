<template>
    <div v-if="showSection === 'inicio'" class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header text-center fondo mb-2 row" data-v-step="0" style="margin:0">
                        <div class="card-center">
                            <label class="card-text">{{ $t('lang.messages.messages') }}</label>
                        </div>
                        <div style="margin-left:auto">
                            <a class="btn" @click="toggle">
                                <i class="fa fa-question-circle" style="font-size:35px; color:orange;"></i>
                            </a>
                        </div>
                    </div>
                    <tour-configuration :step="steps" :condition="condition"></tour-configuration>
                    <Drawer @close="toggle" align="right" :maskClosable="true" :zIndex="1003" :closeable="true">
                        <div v-if="open">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1>Mensajes</h1>
                                    <p>Los mensajes permiten comunicarnos con otros docentes o estudiantes a traves de mensajes privados.</p>
                                    <p>Podemos redactar mensajes para otros usuarios, visualizar mensajes recibidos o ver los mensajes enviados.</p>
                                    <img src="../assets/img/inbox.png" alt="inbox" width="350px" height="350px" style="margin-bottom:10px">
                                    <p>Haciendo click sobre mensajes enviados lo lleva a una bandeja de salida que muestra todos los mensajes que ha enviado, los destinatarios que han recibido los mensajes y si han leido o no los mensajes.</p>
                                    <img src="../assets/img/send_messages.png" alt="send_messages" width="350px" height="350px" style="margin-bottom:10px">
                                    <p>El botón Redactar lo lleva a la vista para redactar mensajes, donde deberá seleccionar si quiere redactar mensaje a un docente o un estudiante y escribir el asunto y el cuerpo del mensaje.</p>
                                    <img src="../assets/img/write_message.png" alt="write_message" width="350px" height="350px" style="margin-bottom:10px">
                                </div>
                            </div>
                        </div>
                    </Drawer>
                    <div class="card-body">
                        <a v-on:click="setShowSection('redactar')" class="btn btn-warning float-right" data-v-step="2">
                            {{ $t('lang.messages.write') }}
                        </a>

                        <a v-on:click="setShowSection('sendMessage')" class="btn btn-warning float-left" data-v-step="1">
                            {{ $t('lang.messages.messages_sent') }}
                        </a
                        >
                        <br />
                        <br />
                        <br />
                        <table
                            class="table table-responsive-xl table-hover table-striped center"
                        >
                            <thead>
                                <tr>
                                    <th>
                                        {{ $t('lang.table.name') }}
                                    </th>
                                    <th>
                                        {{ $t('lang.table.subject') }}
                                    </th>
                                    <th>
                                        {{ $t('lang.table.date') }}
                                    </th>
                                    <th>
                                        {{ $t('lang.table.message_viewed') }}
                                    </th>
                                    <th>
                                        {{ $t('lang.table.action') }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-for="(option, k) in messages" :key="k">
                                <tr>
                                    <td>{{ option.emisor }}</td>
                                    <td>{{ option.asunto }}</td>
                                    <td>
                                        {{
                                            option.fecha.date
                                                | moment("dddd, MMMM Do YYYY")
                                        }}
                                    </td>
                                    <td>{{ option.visto }}</td>
                                    <td class="float-right">
                                        <a
                                            class="btn btn-sm"
                                            href="#"
                                            style="color: grey;"
                                            v-on:click.prevent="
                                                editMessage(option.id)
                                            "
                                        >
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal fade" id="createMessage">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="card">
                                <h3 class="card-header fondo text-center">
                                    Mensaje
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                    >
                                        <span>&times;</span>
                                    </button>
                                </h3>
                                <div class="card-body">
                                    <div class="form-group row">
                                        <div class="col-sm-2">
                                            <label for="nombre" class="label-mensaje">
                                                {{ $t('lang.messages.from') }}:
                                            </label>
                                        </div>
                                        <div class="col-md-10">
                                            <input
                                                class="input-mensaje"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Asunto"
                                                v-model="emisor"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-2">
                                            <label for="nombre" class="label-mensaje">
                                                {{ $t('lang.table.subject') }}:
                                            </label
                                            >
                                        </div>
                                        <div class="col-md-10">
                                            <input
                                                class="input-mensaje"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Asunto"
                                                v-model="asunto"
                                                disabled
                                            />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-6">
                                            <label for="mensaje">
                                                {{ $t('lang.messages.message') }}:
                                            </label
                                            >
                                        </div>
                                    </div>

                                    <ckeditor
                                        :editor="editor"
                                        v-model="editorData"
                                        @ready="onReady"
                                    ></ckeditor>
                                    <!-- <div class="modal-footer">
                                        <a
                                            href="#"
                                            class="btn btn-warning float-right"
                                            @click="saveM()"
                                            >Enviar</a
                                        >
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="showSection === 'redactar'">
        <redactar-component :user="user" :cleanShowSection="cleanShowSection"></redactar-component>
    </div>
    <div v-else-if="showSection === 'sendMessage'">
        <mensajesenv-component :user="user" :cleanShowSection="cleanShowSection"></mensajesenv-component>
    </div>
</template>
<script>
import Vue from "vue";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import Drawer from "vue-simple-drawer";
Vue.use(require("vue-moment"));
export default {
    props:["user"],
    data() {
        return {
            messages: [],
            editorData: "<p>Escribir...</p>",
            editor: DecoupledEditor,
            emessages: [],
            emisor: "",
            asunto: "",
            showSection: "inicio",
            open: false,
            steps: [
                {
                    target: '[data-v-step="0"]',
                    header: {
                        title: 'Mis mensajes',
                    },
                    content: `Desde aqui podras ver tu bandeja de entrada y revisar tus mensajes recibidos.`,
                    params: {
                        placement: 'bottom', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                        enableScrolling: false
                    }
                },
                {
                    target: '[data-v-step="1"]',
                    content: 'Aqui puedes ir a la bandeja de mensajes enviados y confirmar si ya fueron leidos.',
                    params: {
                        placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                        enableScrolling: false,
                    }
                },
                {
                    target: '[data-v-step="2"]',
                    content: 'Aqui puedes redactar mensajes para tutores o estudiantes.',
                    params: {
                        placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
                        enableScrolling: false
                    }
                }
            ],
            condition:"message",
        };
    },
    components: {
        Drawer
    },
    created() {},
    mounted() {
        var urlUsers = " getReceivedMessage";
        axios.get(urlUsers).then(response => {
            this.messages = response.data;
            console.log(this.messages.men);
        });
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        editMessage(mess) {
            var urlr = "getMessage/" + mess;
            axios.get(urlr).then(response => {
                axios.put(`updateMessajeView/${response.data.id}`,{visualized: 1}).then((response)=>{
                    console.log(response.data);
                });

                this.emessages = response.data;
                this.emisor = this.emessages.emisor;
                this.asunto = this.emessages.subject;
                this.editorData = this.emessages.message;
                console.log(this.emessages);
            });

            $("#createMessage").modal("show");
        },
        onReady(editor) {
            // Insert the toolbar before the editable area.
            editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
        },
        cleanShowSection(){
            this.showSection = 'inicio';
        },
        setShowSection(data){
            this.showSection = data;
        }
    }
};
</script>
<style></style>

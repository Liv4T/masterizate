<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="custom-card text-center">
                    <h3 class="card-header fondo">Redactar Mensaje</h3>
                    <div class="container-mensaje">
                        <div class="row">
                            <h5>Destinatarios</h5>
                        </div>
                        <div class="row">
                            <h6>Tus contactos</h6>
                            <a
                                class="btn btn-info float-left"
                                href="#"
                                v-on:click.prevent="btD()"
                                style="margin: 10px;"
                                >Docentes</a
                            >
                            <a
                                class="btn btn-info float-left"
                                href="#"
                                v-on:click.prevent="btE()"
                                style="margin: 10px;"
                                >Estudiantes</a
                            >
                            <a
                                class="btn btn-info float-left"
                                href="#"
                                v-on:click.prevent="btA()"
                                style="margin: 10px;"
                                >Acudientes</a
                            >
                        </div>
                        <div v-show="docente == true">
                            <label for="">Docentes</label>
                            <multiselect
                                v-model="value"
                                :options="options"
                                tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag"
                                label="name"
                                track-by="code"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTag"
                            ></multiselect>
                        </div>
                        <br />
                        <div v-show="estudiante == true">
                            <label for="">Estudiantes</label>
                            <multiselect
                                v-model="value"
                                :options="options"
                                tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag"
                                label="name"
                                track-by="code"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTag"
                            ></multiselect>
                        </div>
                        <br />
                        <div v-show="acudiente == true">
                            <label for="">Acudientes</label>
                            <multiselect
                                v-model="value"
                                :options="options"
                                tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag"
                                label="name"
                                track-by="code"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTag"
                            ></multiselect>
                        </div>
                        <br />
                        <div class="row">
                            <label for="nombre" class="label-mensaje"
                                >Asunto:</label
                            >
                            <input
                                class="input-mensaje"
                                id="nombre"
                                name="nombre"
                                placeholder="Asunto"
                            />
                        </div>

                        <div class="row">
                            <label for="mensaje">Mensaje:</label>
                        </div>

                        <ckeditor
                            :editor="editor"
                            v-model="editorData"
                            @ready="onReady"
                        ></ckeditor>
                        <div class="modal-footer">
                            <a href="#" class="btn btn-warning float-right"
                                >Enviar</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
// register globally
Vue.component("multiselect", Multiselect);
export default {
    // OR register locally
    components: { Multiselect },
    data() {
        return {
            editor: DecoupledEditor,
            editorData: "<p>Escribir...</p>",
            dataBoard: {},
            value: [{ name: "Todos", code: "js" }],

            options: [
                { name: "nombre1", code: "vu" },
                { name: "Todos", code: "js" },
                { name: "Nombre2", code: "os" }
            ],
            docente: false,
            estudiante: false,
            acudiente: false
        };
    },
    methods: {
        addTag(newTag) {
            const tag = {
                name: newTag,
                code:
                    newTag.substring(0, 2) +
                    Math.floor(Math.random() * 10000000)
            };
            this.options.push(tag);
            this.value.push(tag);
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
        btD() {
            if (this.docente == false) {
                this.docente = true;
            } else {
                this.docente = false;
            }
        },
        btE() {
            if (this.estudiante == false) {
                this.estudiante = true;
            } else {
                this.estudiante = false;
            }
        },
        btA() {
            if (this.acudiente == false) {
                this.acudiente = true;
            } else {
                this.acudiente = false;
            }
        }
    }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.label-mensaje {
    display: block;
}

.container-mensaje {
    display: block;
    margin: 0 auto;
    width: 710px;
    color: #666666;
    font-family: Arial;
}

.input-mensaje {
    width: 480px;
    height: 27px;
    background: #f5f5f5;
    border: 2px solid #f6f6f6;
    padding: 10px;
    color: black;
}

.mensajes {
    height: 150px;
}
</style>

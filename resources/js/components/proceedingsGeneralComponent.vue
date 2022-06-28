<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo" style="margin-bottom: 1rem">Crear acta</h3>
                        <form class="needs-validation" v-on:submit.prevent="saveProceedings" novalidate>
                            <div class="row" >
                                <div class="col-12">
                                    <h3 class="">Titulo</h3>
                                </div>
                                <div class="col-12" style="height: 200px">
                                    <vue-editor v-model="title" :editorToolbar="custom_toolbar" style="height: 80px"></vue-editor>
                                </div>
                                <div class="col-12">
                                    <h3 class="">Contenido</h3>
                                </div>
                                <div class="col-12">
                                    <vue-editor v-model="body" :editorToolbar="custom_toolbar"></vue-editor>
                                </div>
                            </div>
                            <div class="text-right" style="margin-top: 10px;">
                                <button class="btn btn-primary" type="submit" v-if="!loading">Guardar</button>
                                <button class="btn btn-primary letra-boldfont" v-if="loading" disabled>Guardando...</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            typeEvent: 1,
            loading: false,
            title: "",
            body: "",
            data: "",
            id_managed: "",
            students: [],
            custom_toolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }]]
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        saveProceedings(){
            this.loading = true;
            var url="/saveProceedings/general";
            axios.post(url, {
                type: this.typeEvent,
                title: this.title,
                body: this.body,
                id_user_managed: JSON.stringify(this.students),
                }).then((response) => {
                    toastr.success("Nueva acta cargada exitosamente");
                    this.getMenu();
                })
                .catch((error) => {});
        },
        onFileChange(file) {
            let files = file.target.files || file.dataTransfer.files;
            this.data = new FormData();
            if (files.length > 0) {
                //console.log('evento');
                let file = files[0];
                let _fileNameSplit=file.name.split(".");

                // if uploaded file is valid with validation rules
                let file_extension=_fileNameSplit[_fileNameSplit.length-1];
                let file_name=file.name.replace(`.${file_extension}`,'');

                this.data.append("file", files[0]);
                this.data.append("name", file_name);

            }
            console.log(this.data);
        },
        getUsers(){
            var url="/getStudentsPerTutor";
            axios.get(url).then((response) => {
                let arrayData=response.data;
                arrayData.forEach(e => {
                    this.students.push(e.id_student);
                });
                console.log(this.students);
            }).catch((error) => {
                toastr.error("No hay padres cargados");
            });
        },
        getMenu(){
            window.location = "/list/proceedings/general";
        },
    },
}
</script>

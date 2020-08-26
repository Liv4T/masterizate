<template>
    <div>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header fondo">Mis clases - Lectiva {{planification.lective.name}} Trimestre {{planification.period_consecutive}}</h3>
                    </div>

                    <div class="div-class">
                        <div></div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();

import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
    props: ["id_lective_planification", "id_weekly_plan"],
    data() {
        return {
            myOptions: [],
            nameUnit: "",
            description: "",
            nameFile: "",
            nameUrl: "",
            nameUrl1: "",
            nameUrl2: "",
            newDocument: [],
            newDocument1: [],
            newDocument2: [],
            semanal: false,
            newVideo: [],
            newVideo1: [],
            newVideo2: [],
            messageVideo: "",
            messageVideo1: "",
            messageVideo2: "",
            numero: "",
            nameArea: "",
            planification:{lective:{}},
            errors: [],
            weekly_plan:{},
            weekly_plan_detail:[]
        };
    },
    mounted() {
         axios.get(`/api/lectives/planification/${this.id_lective_planification}`).then((response) => {

            this.planification = response.data;

            //find weekly_plan
            this.weekly_plan=this.planification.weeklies.find(e=>e.id==this.id_weekly_plan);

        });

        
        axios.get(`/api/lectives/planification/${this.id_lective_planification}/weekly/${this.id_weekly_plan}/course`).then((response) => {


             this.weekly_plan_detail = response.data;

            if(this.weekly_plan_detail.length==0)
            {
                this.weekly_plan_detail.length.push({
                    
                    'name':'',
                    'description':'',
                    'hourly_intensity':0,
                    'state':1,
                    'content':[]

                });
            }

        });



    },
    methods: {
        getMenu() {
            window.location = "/clases_d";
        },
        onFlieChange(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];

                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 1);
                this.newDocument = data;

                axios.post("/fileDocument", data).then(response => {
                    this.emitMessage(response);
                });
            }
        },
        onFlieChange1(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];

                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 2);
                this.newDocument1 = data;

                axios.post("/fileDocument", data).then(response => {
                    this.emitMessage(response);
                });
            }
        },
        onFlieChange2(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];

                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 3);
                this.newDocument2 = data;

                axios.post("/fileDocument", data).then(response => {
                    this.emitMessage(response);
                });
            }
        },
        videoFile(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                this.messageVideo = "Espere estamos cargando el video";
                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 1);
                this.newVideo = data;

                axios.post("/fileDocument", data).then(response => {
                    console.log(response.data);

                    if (response.data == "ok") {
                        this.messageVideo = "Video cargado";
                    } else {
                        this.messageVideo =
                            "El video excede el límite, por favor reducir su peso";
                    }
                });
            }
        },
        videoFile1(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                this.messageVideo1 = "Espere estamos cargando el video";
                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 2);
                this.newVideo1 = data;

                axios.post("/fileDocument", data).then(response => {
                    console.log(response.data);

                    if (response.data == "ok") {
                        this.messageVideo1 = "Video cargado";
                    } else {
                        this.messageVideo1 =
                            "El video excede el límite, por favor reducir su peso";
                    }
                });
            }
        },
        videoFile2(file) {
            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                let file = files[0];
                this.messageVideo2 = "Espere estamos cargando el video";
                // if uploaded file is valid with validation rules

                data.append("file", files[0]);
                data.append("name", this.nameUnit);
                data.append("count", 3);
                this.newVideo2 = data;

                axios.post("/fileDocument", data).then(response => {
                    console.log(response.data);

                    if (response.data == "ok") {
                        this.messageVideo2 = "Video cargado";
                    } else {
                        this.messageVideo2 =
                            "El video excede el límite, por favor reducir su peso";
                    }
                });
            }
        }
    }
};
</script>
<style></style>

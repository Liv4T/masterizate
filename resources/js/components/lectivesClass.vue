<template>
    <div class="back" v-if="showPreview === false">
        <div>
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="custom-card text-center">
                        <h5 class="card-header fondo">{{ weekly_plan.name }}</h5>
                          <span class="classroom-label">{{ nameArea }}</span>
                    </div>

                    <div class="div-classes">
                        <div class="div-class">
                            <div class="title row">
                                <div class="col-12">
                                    <label><span class="required">*</span>Nombre de la clase:</label>
                                    <input type="text" class="form-control" v-model="course.name" v-bind:readonly="course.state==2"/>
                                </div>
                                <!-- <div class="col-4">
                                    <label><span class="required">*</span>Intensidad:</label>
                                    <input type="number" class="form-control" v-model="course.hourly_intensity" v-bind:readonly="course.state==2"/>
                                </div> -->
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label><span class="required">*</span>Descripción:</label>
                                    <textarea class="form-control" cols="40" rows="4" v-model="course.description" v-bind:readonly="course.state==2"></textarea>
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="work">
                                    Objetivos de la Clase
                                </label>
                                <input type="text" class="form-control" v-model="course.objetivesClass"/>
                                </div>

                            <div class="row">
                                <label><span class="required">*</span>Fecha Inicio de Clase:</label>
                                <input type="datetime-local" class="form-control" v-model="course.date_init_class" />
                                <input type="hidden" id="timezone" name="timezone" value="-05:00">
                            </div>
                            <div class="row">
                                <label><span class="required">*</span>Link de Clase</label>
                                <input type="text-local" class="form-control" v-model="course.url_class" />
                            </div>

                            <div class="col-12">
                                <label for="work">
                                    Tarea
                                </label>
                                <textarea class="form-control" v-model="course.work" name="work" id="work"></textarea>
                            </div>
                            <div class="col-12">
                                <label for="transversals">
                                    Habilidades Transversales
                                </label>
                                <textarea class="form-control" v-model="course.transversals" name="transversals" id="transversals"></textarea>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <label><span class="required">*</span>Actividad Para :</label>
                                    <div>
                                        <input type="checkbox" id="students" name="students" v-model="activityForAllStudents">
                                        <label for="piar"> Todos los Estudiantes</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="piar" name="students" v-model="activityForPIARStudents">
                                        <label for="piar"> Estudiantes PIAR</label><br>

                                        <input type="checkbox" id="specific" name="students" v-model="activityForSelectStudents">
                                        <label for="specific"> Estudiantes en Especifico</label>
                                    </div>

                                    <div v-if="activityForPIARStudents == true || activityForSelectStudents == true">
                                        <label>Selecciona Los estudiantes</label>
                                        <multiselect v-model="saveStudent" :options="selectedStudentsData" :multiple="true"
                                            :close-on-select="false" :clear-on-select="false"
                                            :preserve-search="true" placeholder="Seleccione una o varias"
                                            label="text" track-by="id" :preselect-first="false">
                                                <template slot="selection" slot-scope="{ values, isOpen }">
                                                    <span
                                                        class="multiselect__single"
                                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }}
                                                            opciones
                                                            selecionadas
                                                    </span>
                                                </template>
                                        </multiselect>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                  <div class="col-5 div-resource" v-for="(item_content,key_c) in course.content" v-bind:key="key_c">

                                    <span class="closed-icon" v-on:click="removeResource(key_c)"><i v-if="key_c>2" class="fa fa-minus" ></i></span>
                                    <h4 v-if="item_content.content_type === 'DOCUMENT'">Documento</h4>
                                    <h4 v-else-if="item_content.content_type === 'LINK'">Enlace</h4>
                                    <h4 v-else-if="item_content.content_type === 'VIDEO'">Video</h4>
                                    <h4 v-else-if="item_content.content_type === 'YOUTUBE'">Video Youtube</h4>
                                    <div class="form-item">
                                        <label>Descripción</label>
                                        <input class="form-control" type="text" v-model="item_content.description" v-bind:readonly="course.state==2"/>
                                    </div>
                                    <div class="form-item">
                                        <label v-if="item_content.content_type === 'DOCUMENT'" >Archivo</label>
                                        <label v-else-if="item_content.content_type === 'LINK'" >Enlace</label>
                                        <label v-else-if="item_content.content_type === 'VIDEO'" >Video (.mp4)</label>
                                        <label v-else-if="item_content.content_type === 'YOUTUBE'" >Link Youtube</label>
                                        <!-- upload -->
                                        <input v-if="item_content.content_type === 'DOCUMENT'" class="form-control" type="file" @change="onFileChange($event,key_c)" v-bind:readonly="course.state==2"/>
                                        <input v-if="item_content.content_type === 'VIDEO'" class="form-control" type="file" @change="onFileChange($event,key_c)" v-bind:readonly="course.state==2"/>
                                        <input  v-if="item_content.content_type == 'LINK'" class="form-control" type="text" v-model="item_content.content" v-bind:readonly="course.state==2"/>
                                         <input  v-if="item_content.content_type == 'YOUTUBE'" class="form-control" type="text" v-model="item_content.content" v-bind:readonly="course.state==2"/>
                                        <!-- link -->
                                         <div class="progress">
                                            <div class="progress-bar" v-if="course.content[key_c].progress_bar_percent>0" v-bind:style="{width: (course.content[key_c].progress_bar_percent?course.content[key_c].progress_bar_percent:0)+'%'}"></div>
                                        </div>
                                        <a v-if="item_content.content_type === 'DOCUMENT' && item_content.content!=''" v-bind:href="item_content.content" target="_blank" v-bind:readonly="course.state==2">{{item_content.description}}</a>
                                        <a v-if="item_content.content_type === 'VIDEO' && item_content.content!=''" v-bind:href="item_content.content" target="_blank" v-bind:readonly="course.state==2">{{item_content.description}}</a>
                                        <a v-if="item_content.content_type === 'YOUTUBE' && item_content.content!=''" v-bind:href="item_content.content" target="_blank" v-bind:readonly="course.state==2">{{item_content.description}}</a>
                                    </div>
                                    <div class="form-item text-center">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="isRequiredCheck" v-model="item_content.is_required" >
                                            <label class="form-check-label" for="isRequiredCheck" >Recurso obligatorio para el estudiante</label>
                                        </div>
                                    </div>

                                </div>
                                 <div class="col-5 div-resource">
                                    <div class="form-item" >
                                        <span v-on:click="addResource('DOCUMENT')" v-if="course.state==1">+ Agregar Documento</span>
                                        <span v-on:click="addResource('LINK')" v-if="course.state==1">+ Agregar Enlace</span>
                                        <span v-on:click="addResource('YOUTUBE')" v-if="course.state==1">+ Agregar Video Youtube</span>
                                        <span v-on:click="addResource('VIDEO')" v-if="course.state==1">+ Agregar Video</span>
                                        <span class="blue" v-on:click="addActivity()" v-if="course.state==1">+ Agregar Actividad</span>
                                    </div>
                                </div>


                            </div>
                           <div class="row justify-content-center margin-top-50" v-for="(activity,key_a) in course.activities" v-bind:key="key_a">
                                <div class="col-10">
                                    <div class="card" >
                                            <div class="card-header card-title">
                                                <h5>Actividad {{key_a+1}}</h5>
                                                <span class="closed-icon" v-on:click="removeActivity(key_a)"><i class="fa fa-minus" ></i></span>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-8">
                                                        <label><span class="required">*</span>Nombre de la actividad:</label>
                                                        <input type="text" class="form-control" v-model="activity.name" v-bind:readonly="course.state==2"/>
                                                    </div>
                                                    <div class="col-4">
                                                        <label><span class="required">*</span>Tipo de actividad:</label>
                                                        <select id="activity_type" class="form-control"  @change="selectActivityType(key_a,activity);"   v-model="activity.activity_type" v-bind:readonly="course.state==2">
                                                                <option value="">-- Seleccione --</option>
                                                                <option value="CUESTIONARIO">Cuestionario</option>
                                                                <option value="COMPLETAR_ORACION">Completar la oración</option>
                                                                <option value="CRUCIGRAMA">Crucigrama</option>
                                                                <option value="RELACION">Relación</option>
                                                                <!--<option value="SOPA_LETRAS">Sopa de letras</option>-->
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <label><span class="required">*</span>Descripción:</label>

                                                        <textarea  class="form-control" v-model="activity.description" v-bind:readonly="course.state==2"></textarea>
                                                    </div>
                                                </div>
                                                <!-- <div class="row">
                                                    <div class="col-8">
                                                        <label><span class="required">*</span>Logro:</label>
                                                         <select class="form-control" v-model="activity.quarterly_plan" v-bind:readonly="course.state==2" @change="indicador(activity.quarterly_plan, key_a)">
                                                            <option value="">-- Seleccione --</option>
                                                            <option v-for="(quarterly,k_quarterly) in activity.fillC" v-bind:key="k_quarterly" :value="quarterly.id + '/' + quarterly.id_achievement">{{quarterly.logro}}</option>
                                                        </select>
                                                    </div>
                                                   <div class="col-4">
                                                        <label><span class="required">*</span>Evaluación:</label>
                                                         <select class="form-control" v-model="activity.activitys" v-bind:readonly="course.state==2">
                                                            <option value="">-- Seleccione --</option>
                                                            <option v-for="(act,k_activity) in activity.fillI" v-bind:key="k_activity"  v-bind:value="act.id">{{act.type_activity}} ({{act.activity_rate}} %)</option>
                                                        </select>
                                                    </div>
                                                </div> -->
                                                 <div class="row">
                                                    <div class="col-6">
                                                        <label><span class="required">*</span>Fecha máxima entrega:</label>
                                                        {{activity.delivery_max_date}}
                                                        <input type="datetime-local" class="form-control" v-model="activity.delivery_max_date" />
                                                        <input type="hidden" id="timezone" name="timezone" value="-05:00">
                                                    </div>
                                                    <div class="col-6">
                                                        <label><span class="required">*</span>Fecha retroalimentación:</label>
                                                        <input type="datetime-local" class="form-control" v-model="activity.feedback_date" />
                                                    </div>
                                                </div>
                                                <activity-questionary v-if="activity.activity_type=='CUESTIONARIO'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-questionary>
                                                <activity-complete-sentence v-if="activity.activity_type=='COMPLETAR_ORACION'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-complete-sentence>
                                                <activity-relationship v-if="activity.activity_type=='RELACION'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-relationship>
                                                <activity-crossword v-if="activity.activity_type=='CRUCIGRAMA'" v-bind:module="activity.module" v-bind:disabled="course.state==2"></activity-crossword>
                                            </div>
                                        </div>
                                    </div><!--card -->
                                </div>
                            </div>
                    </div>
                    <div class="div-weekly-plan-btn-save">
                       <a class="btn btn-warning" v-on:click="cleanCreateClas">Cancelar</a>
                       <a class="btn btn-primary" v-on:click="getPreview" >Previsualización de clase</a>
                       <button class="btn btn-primary" v-on:click="SaveDataEvent()" :disabled="is_loading" v-if="course.state==1">Guardar y enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="showPreview === true">
        <modal-preview :course="course" :backPreview="backPreview"></modal-preview>
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
import moment from "moment";
Vue.use(VueFormWizard);
export default {
    props: ["id_weekly_plan", "id_class","cleanCreateClas"],
    data() {
        return {
            showPreview:false,
            tmp:{},
            is_loading:false,
            weekly_plan:{},
            errors: [],
            selectedStudentsData:[],
            studentsOptions:[],
            saveStudent:[],
            weekly_plan_detail:[],
            activityForAllStudents:false,
            activityForPIARStudents: false,
            activityForSelectStudents: false,
            work: "",
            transversals:"",
            objetivesClass:"",
            course:{
                content:[
                    {
                        content_type:'YOUTUBE',
                        content:'',
                        description:''
                    },
                    {
                        content_type:'LINK',
                        content:'',
                        description:''
                    },
                    {
                        content_type:'DOCUMENT',
                        content:'',
                        description:''
                    }
                ],
                objetivesClass: "",
                work: "",
                transversals:"",
                activities:[],
                state:1
            },
            achievements:[],
            indicators:[],
            nameArea:'',
            classroom_id: '',
            area_id: '',
            custom_editor_toolbar_justify:[["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }],["image"]],
            piarStudents:[],
            fillC:[],
            id_achievement:'',
        };
    },
    watch: {
        course: function(newVal){
            if(newVal){
                this.course = newVal;
            }
        },
        activityForAllStudents: function(newVal){
            if(newVal == true){
                this.course.activityForPIARStudents = 0;
                this.course.activityForSelectStudents = 0;
                this.course.activityForAllStudents = 1;
                this.course.selectedStudents = "[]"

                this.activityForPIARStudents = false;
                this.activityForSelectStudents = false;
                this.saveStudent = []
            }
        },

        activityForPIARStudents: function(newVal){
            if(newVal == true){
                this.course.activityForPIARStudents = 1;
                this.course.activityForSelectStudents = 0;
                this.course.activityForAllStudents = 0;
                this.course.selectedStudents = JSON.stringify(this.saveStudent);

                this.activityForAllStudents = false;
                this.activityForSelectStudents = false;
                this.selectedStudentsData = this.piarStudents;
            }
        },

        activityForSelectStudents: function(newVal){
            if(newVal == true){
                this.course.activityForPIARStudents = 0;
                this.course.activityForSelectStudents = 1;
                this.course.activityForAllStudents = 0;
                this.course.selectedStudents = JSON.stringify(this.saveStudent);

                this.activityForPIARStudents = false;
                this.activityForAllStudents = false;
                this.selectedStudentsData = this.studentsOptions;
            }
        },

        saveStudent: function(newVal){
            if(this.activityForAllStudents == false && this.activityForPIARStudents == true || this.activityForSelectStudents == true && newVal){
                this.course.selectedStudents = JSON.stringify(this.saveStudent);
            }
        },

        work: function(newVal){
            if(newVal){
                this.course.work = this.work;
            }
        },

        transversals: function(newVal){
            if(newVal){
                this.course.transversals = this.transversals;
            }
        },

        objetivesClass:function(newVal){
            if(newVal){
                this.course.objetivesClass = this.objetivesClass;
            }
        }
    },
    mounted() {
        this.activityForAllStudents = true;
         var urlr = window.location.origin + "/api/lectives/class/" + this.id_weekly_plan;
            axios.get(urlr).then(response => {
                this.fillS = response.data.clase;
                this.achievements=response.data.achievements;
                this.id_achievement=response.data.achievements[0].id;
                this.area_id = response.data.area.id;
                //this.getDataPlanification();
                if (response.data.area)
                    this.nameArea = response.data.user_type === 7 ? response.data.area.name :`${response.data.area.name}`;

               /*  axios.get(`/PIARStudentsByArea/${response.data.area.id}/${response.data.classroom.id}`).then((response)=>{
                this.piarStudents = Object.values(response.data);
                }).catch((error)=>{
                    console.log(error)
                });

                axios.get(`/StudentsByArea/${response.data.area.id}/${response.data.classroom.id}`).then((response)=>{
                    let data = response.data;
                    data.forEach((e)=>{
                        this.studentsOptions.push({
                            id: e.id_student,
                            text: e.name
                        })
                    });
                }) */
            });

            axios.get(`/getNameLectiveWeekly/${this.id_weekly_plan}`).then((response) => {
                this.weekly_plan={name:response.data};
            });
        if(this.id_class !== 0)
        {
            axios.get(`/getDataClass/${this.id_weekly_plan}/${this.id_class}`).then((response) => {
                    this.course=response.data;
                    let activities = response.data.activities;
                    this.course.activities=[];
                    activities.forEach((e, i)=>{
                        this.course.activities.push({
                            activity_type: e.activity_type,
                            activitys: e.activitys,
                            delivery_max_date: e.delivery_max_date,
                            description: e.description,
                            feedback_date: e.feedback_date,
                            id: e.id,
                            id_lective_achievement: this.id_achievement,
                            interaction: e.interaction,
                            is_required: e.is_required,
                            module: e.module,
                            name: e.name,
                            /* id_quarterly_plan: e.quarterly_plan,
                            fillI: this.indicador(e.quarterly_plan + "/" + e.id_achievement, i),
                            fillC: this.getDataPlanification(i), */
                            rules: e.rules,
                            state: e.state,
                            updated_user: e.updated_user,
                        })
                    })
                    this.work = response.data.work;
                    this.transversals = response.data.transversals;
                    this.objetivesClass = response.data.objetivesClass;

                    this.activityForPIARStudents = this.course.activityForPIARStudents
                    this.activityForSelectStudents = this.course.activityForSelectStudents
                    this.activityForAllStudents = this.course.activityForAllStudents
                    this.saveStudent = JSON.parse(this.course.selectedStudents);

                if(this.course.content.length==0)
                    {
                        this.course.content=[
                                {
                                    content_type:'YOUTUBE',
                                    content:'',
                                    description:''
                                },
                                {
                                    content_type:'LINK',
                                    content:'',
                                    description:''
                                },
                                {
                                    content_type:'DOCUMENT',
                                    content:'',
                                    description:''
                                }
                            ];
                    }

                    if(this.course.activities.length>0)
                    {
                        this.course.activities.forEach(act=>{
                            act.delivery_max_date=act.delivery_max_date.replace(" ","T");
                            act.feedback_date=act.feedback_date.replace(" ","T");
                            //this.GetIndicatorsEvent(act);
                        });
                    }

                    if(this.course)
                    {
                        this.course.date_init_class =this.course.date_init_class.replace(" ","T");
                    }
            });
        }

    },
    methods: {
        returnPage() {
            this.cleanCreateClas(); //rvisar, viene del prop y es para volver a la pantalla anterior
        //   window.location =`/docente/modulo/${this.id_module}`;
        },
        addResource(resource_type){
            this.course.content.push({
                content_type:resource_type,
                content:'',
                description:''
            });
        },
        /* getDataPlanification(position){
            var urlsel = window.location.origin + "/coursePlanification/" + this.area_id + "/" + this.classroom_id;
            axios.get(urlsel).then((response) => {
                // if(this.id_class!=0){
                    this.course.activities[this.course.activities.length - 1].fillC=response.data.quaterly;
                //     this.course.activities[position].fillC=response.data.quaterly;
                // }else{
                //     this.course.activities[this.course.activities.length - 1].fillC=response.data.quaterly;
                // }
            });
        }, */
        removeResource(index){
           this.course.content.splice(index,1)
        },
        removeActivity(index){
            this.course.activities.splice(index,1);
        },
        addActivity(){
            this.course.activities.push({
                name:'',
                description:'',
                activity_type:'',
                id_lective_achievement: this.id_achievement,
                module:{},
                is_required:1,
                delivery_max_date:'',
                feedback_date:'',
                /* fillC:this.getDataPlanification(),
                fillI:[], */
            });
        },

        SaveDataEvent(){
            axios.put(`/api/lectives/${this.id_weekly_plan}/class`,this.course).then((response) => {
               toastr.success("Clases actualizadas correctamente");
               this.cleanCreateClas();
            },(error)=>{console.log(error);toastr.error("ERROR:Por favor valide que la información esta completa");});

            /* if(this.id_class==0){
                var initD= new Date(this.course.date_init_class);
                var initDateSave = moment(initD).format("YYYY-MM-DD H:mm:ss");
                var end=moment(initDateSave).add(2, 'hours').format("YYYY-MM-DD H:mm:ss");
                var url = "/createEvent";
                    axios
                        .post(url, {
                        //Cursos generales
                        name: this.course.name,
                        startDateTime: initDateSave,
                        endDateTime: end,
                        id_area: this.area_id,
                        id_classroom: this.classroom_id,
                        url: this.course.url_class,
                        id_padre: null,
                        })
                        .then((response) => {
                        toastr.success("Nuevo evento creado exitosamente");
                        this.returnPage();
                        })
                        .catch((error) => {});
            } */
        },
        selectActivityType(index_activity,activity){

            switch(activity.activity_type)
            {
                case 'CUESTIONARIO':
                    activity.module={
                        questions:[]
                    };
                break;
                case 'COMPLETAR_ORACION':
                    activity.module={
                        sentences:[]
                    };
                break;
                case 'RELACION':
                    activity.module={
                        items:[]
                    };
                break;
                case 'CRUCIGRAMA':
                    activity.module={
                        words:[]
                    };
                break;
                case 'SOPA_LETRAS':
                    activity.module={
                       words:[]
                    };
                break;

            }


        },
        onFileChange(file,item_index) {
            console.log(item_index);
            this.is_loading=true;

            let files = file.target.files || file.dataTransfer.files;
            let data = new FormData();
            if (files.length > 0) {
                this.course.content[item_index].progress_bar_percent=10;
                console.log('evento');
                this.initLoading(item_index,20);
                let file = files[0];
                let _fileNameSplit=file.name.split(".");

                // if uploaded file is valid with validation rules
                let file_extension=_fileNameSplit[_fileNameSplit.length-1];
                let file_name=file.name.replace(`.${file_extension}`,'');

                data.append("file", files[0]);
                data.append("name", file_name);
                data.append("count", `-class-${item_index}`);


                axios.post("/fileDocument", data).then(response => {
                this.course.content[item_index].content=`${window.location.origin}/uploads/clases/${file_name.split(' ').join('_')}-class-${item_index}.${file_extension}`;
                this.stopLooading(item_index);
                }).catch(err=>{this.stopLooading(item_index);});
            }else{
                this.stopLooading(item_index);
            }

        },
        initLoading(item_index,percent)
        {
            if(this.course.content[item_index].progress_bar_percent!=0 && this.course.content[item_index].progress_bar_percent<percent && percent<100 )
            {
                this.course.content[item_index].progress_bar_percent=this.course.content[item_index].progress_bar_percent+20;
                setTimeout(()=>{
                    this.initLoading(item_index,percent+20);
                },2000);
            }
        },
        stopLooading(item_index)
        {


            this.course.content[item_index].progress_bar_percent=100;

            setTimeout(()=>{
                    this.course.content[item_index].progress_bar_percent=0;
                      this.is_loading=false;
            },500);

        },
        /* GetIndicatorsEvent(activity)
        {
            if(!activity || !activity.activities) return;

             if(this.indicators==null)
                this.indicators=[];

            axios.get(`/api/achievement/${activity.id_achievement}/indicator`).then(response => {

                response.data.forEach(i=>{
                    if(this.indicators.filter(p=>p.id==i.id).length==0)
                    {
                        this.indicators.push(i);
                    }
                })

            }).catch(err=>{console.log(err);});
        }, */
        /* indicador(id, position) {
            if (id!=''){
                var ids=id.split("/");
                var idInd= ids[0];
                var urli = window.location.origin + "/getIndicator/" + idInd;

                axios.get(urli).then((response) => {
                    this.course.activities[position].fillI=response.data;
                });
            }
        }, */
        getPreview(){
            this.showPreview = true;
            $("#previewClassModal").modal("show");
        },
        backPreview(){
            this.showPreview = false;
            $("#previewClassModal").modal("hide");
        }

    },
    computed: {

    }
};
</script>
<style>
.div-weekly-plan{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding:10px;
}

.div-weekly-plan label{
    font-size:1.2em;
    font-weight:700;
}
.div-classes{
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding:5px;
}
.div-class{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    padding:5px;
}
.div-class>.title{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
}

.div-class>.content{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin-top:30px;
    flex-wrap: wrap;
}
.required{
    color:red;
}
.div-resource{
    padding:30px;
    background-color:#e9ecefb5;
    margin:5px;
}
.div-resource .form-item{
    width:100%;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
}
.div-resource .form-item>a{
    color:#007bff;
}
.div-resource .form-item>a:visited{
    color:#007bff;
}
.div-resource .form-item>span{
     padding:10px;
    font-size:1.2em;
    color:#233d68;
    font-weight:700;
    border:1px solid #233d68;
    border-radius:5px;
    margin:5px
}
.div-resource .form-item>span.blue{
    padding:10px;
    background-color:#edf8ff;
    font-size:1.2em;
    color:#233d68;
    font-weight:700;
    border:1px solid #233d68;
    border-radius:5px;
    margin:5px
}
.div-resource .form-item>span:hover{
    background-color:white;
    cursor:pointer;
}
.div-weekly-plan-btn-save{
    display:flex;
    padding:50px;
    justify-content:space-between;
    flex-direction:row;

}
.closed-icon{
    width:100%;
    display:flex;
    justify-content:flex-end;
    flex-direction:row;
    cursor:pointer;
    color:#233d68;
}
.margin-top-50{
    margin-top:50px;
}
.row{
    margin:10px 0px;
}

.icon-add:hover{ color:#233d68;background-color:white;border-color:#233d68;}
.card-title{display:flex;flex-direction:row;justify-content:space-between;}
.card-title>h5{width:50%;}
.div-check{display:flex;flex-direction:row;justify-content:center;  align-items:center;padding-top:20px;}
.progress{width:100%;display:flex;justify-content:flex-start;}
.classroom-label{font-size:1.5em;}




</style>

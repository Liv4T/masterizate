/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");
window.Vue = require("vue");
window.Bus = new Vue();
window.toastr = require("toastr");
import CKEditor from "@ckeditor/ckeditor5-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import fullCalendar from "vue-fullcalendar";
import Game from "./components/Game";
import store from "./vuex/store";

// the main entrance
/* eslint-disable no-new */

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("example-component", require("./components/ExampleComponent.vue").default);
// Vue.component('task-component', require('./components/TaskComponent.vue').default);
Vue.component("category-component", require("./components/CategoryComponent.vue").default);

Vue.component("select2", require("./components/Select2.vue").default);
Vue.component("user-component", require("./components/UserComponent.vue").default);
Vue.component("type-component", require("./components/TypeUserComponent.vue").default);
Vue.component("resume-component", require("./components/ResumeComponent.vue").default);
Vue.component("checkbox", require("./components/Checkbox.vue").default);
Vue.component("class-component", require("./components/ClassComponent.vue").default);

Vue.component("blog-component", require("./components/BlogComponent.vue").default);
Vue.component("draw-c", require("./components/draw.vue").default);

Vue.component("home", require("./components/home.vue").default);
Vue.component("board", require("./components/board.vue").default);
Vue.component("footers", require("./components/footer.vue").default);
Vue.component("unit-class", require("./components/unitComponent.vue").default);
Vue.component("free-component", require("./components/freeComponent.vue").default);
Vue.component("freeu-component", require("./components/freeUnitComponent.vue").default);
Vue.component("course-component", () => import ("./components/courseComponent.vue"));
Vue.component("course-view", require("./components/courseView.vue").default);
Vue.component("semanal-component", require("./components/courseSemanalComponet.vue").default);
Vue.component("semanalact-component", require("./components/courseSemanalAct.vue").default);
Vue.component("list-component", require("./components/listClassComponent.vue").default);
Vue.component("list-activity", require("./components/listActivity.vue").default);
Vue.component("actividad-docente", require("./components/ActividadDocente.vue").default);
Vue.component("sincro-component", require("./components/sincroEvent.vue").default);
Vue.component("cuestionario-component", require("./components/cuestionario.vue").default);
Vue.component("hangman-component", require("./components/hangman.vue").default);
Vue.component("evaluation-component", require("./components/EvaluationComponent.vue").default);
Vue.component("activ-component", require("./components/ActivityComponent.vue").default);
Vue.component("mycourse-component", require("./components/MyCourseComponent.vue").default);
Vue.component("consult-component", require("./components/ConsultComponent.vue").default);
Vue.component("frecuent-cuestions", require("./components/FrecuentCuestions.vue").default);
Vue.component("register-component", require("./components/RegisterComponent.vue").default);
Vue.component("mycourses-component", require("./components/MycoursesComponent.vue").default);
Vue.component("coursest-component", require("./components/CoursesStComponent.vue").default);
Vue.component("evaluationst-component", require("./components/EvaluationStComponent.vue").default);
Vue.component("activityst-component", require("./components/ActivityStComponent.vue").default);
Vue.component("listevaluationst-component", require("./components/listevaluationStComponent.vue").default);
Vue.component("plan-component", require("./components/PlanComponent.vue").default);
Vue.component("changepassword-component", require("./components/changepassword.vue").default);
Vue.component("perfil-component", require("./components/PerfilComponent.vue").default);
Vue.component("TextInput", require("./components/TextInput.vue").default);

Vue.component("resetpass", require("./components/ResetPassComponent.vue").default);
Vue.component("trivia-component", require("./components/TriviaComponent.vue").default);
Vue.component("quiz-component", require("./components/QuizActivity.vue").default);
Vue.component("complete-component", require("./components/CompleteSentence.vue").default);
Vue.component("open-component", require("./components/QuizOpen.vue").default);
Vue.component("menu-lateral", require("./components/menulateral.vue").default);
Vue.component("mensajes-component", require("./components/mensajes.vue").default);
Vue.component("mensajesenv-component", require("./components/mensajesEnv.vue").default);
Vue.component("actividad-component", require("./components/tareas.vue").default);
Vue.component("notas-component", require("./components/notas.vue").default);
Vue.component("boletin-component", require("./components/boletin.vue").default);
Vue.component("menu-docente", require("./components/menudocente.vue").default);
Vue.component("perfil-docente", require("./components/perfildocente.vue").default);
Vue.component("anuncio-docente", require("./components/anunciodocente.vue").default);
Vue.component("actividadg-docente", require("./components/actividadGDocente.vue").default);
Vue.component("anunciomc-component", require("./components/anunciomc.vue").default);
Vue.component("full-component", require("./components/fullCalendar.vue").default);
Vue.component("redactar-component", require("./components/redactar.vue").default);
Vue.component("vmensaje-component", require("./components/vistamensaje.vue").default);
Vue.component("duplicar-component", require("./components/duplicarGeneral.vue").default);
Vue.component("duplicarsemana-component", require("./components/duplicarSemana.vue").default);
Vue.component("game-component", require("./components/Game.vue").default);
Vue.component("juegos-component", require("./components/juegos.vue").default);
Vue.component("groups", require("./components/Groups.vue").default);
Vue.component("create-group", require("./components/CreateGroup.vue").default);
Vue.component("group-chat", require("./components/GroupChat.vue").default);
Vue.component("clasesst-component", require("./components/clasesSt.vue").default);
Vue.component("notasd-component", require("./components/notasDocente.vue").default);
Vue.component("actividadvd-component", require("./components/actividadVDocente.vue").default);
Vue.component("clasesd-component", require("./components/clasesDocente.vue").default);
Vue.component("crearc-component", require("./components/crearClase.vue").default);
Vue.component("editarc-component", () => import ("./components/editarClase.vue"));

Vue.component("inicio-component", require("./components/inicio.vue").default);
Vue.component("userinfo", require("./components/UserInfo").default);
Vue.component("answer", require("./components/Answer").default);
Vue.component("favoritequestion", require("./components/FavoriteQuestion").default);
Vue.component("porcentaje-component", require("./components/porcentajeNotas.vue").default);
Vue.component("acceptanswer", require("./components/AcceptAnswer").default);
Vue.component("answervote", require("./components/AnswerVote").default);
Vue.component("questionvote", require("./components/QuestionVote").default);
Vue.component("emoji-text", require("./components/text-emoji.vue").default);

Vue.component("estudiante-adm", require("./components/estudianteAdm.vue").default);
Vue.component("docente-adm", require("./components/docenteAdm.vue").default);
Vue.component("cursos-adm", require("./components/cursosAdm.vue").default);
Vue.component("semana-adm", require("./components/semanaAdm.vue").default);
Vue.component("plan-adm", require("./components/planAdm.vue").default);
Vue.component("planificacion-adm", require("./components/planificacionAdm.vue").default);
Vue.component("vplan-adm", require("./components/vplanAdm.vue").default);
Vue.component("reportes-adm", require("./components/reportesAdm.vue").default);
Vue.component("menu-adm", require("./components/menuAdm.vue").default);
Vue.component("chart-adm", require("./components/chart.vue").default);
Vue.component("vclases-adm", require("./components/clases_adm.vue").default);
Vue.component("institu-adm", require("./components/institucionesAdm.vue").default);
Vue.component("cinstitu-adm", require("./components/crearInstituciones.vue").default);
Vue.component("coordinador-adm", require("./components/coordinadorAdm.vue").default);
Vue.component("salon-adm", require("./components/salonAdm.vue").default);
Vue.component("matricula", require("./components/matricula.vue").default);
Vue.component("aperfil-adm", require("./components/AsignarPerfil.vue").default);
Vue.component("adocente-adm", require("./components/asignarDocente.vue").default);
Vue.component("aestudiante-adm", require("./components/asignarEstudiante.vue").default);
Vue.component("importar-adm", require("./components/importAdm.vue").default);
Vue.component("asistencia-adm", require("./components/asistencia.vue").default);


Vue.component("lectives-adm", ()=>import("./components/lectivesAdmComponent.vue"));
Vue.component("lectives-adm-assing-teacher", ()=>import("./components/lectivesAdmAssingTeacherComponent.vue"));
Vue.component("lectives-student-activities", ()=>import("./components/lectivesStudentActivitiesComponent.vue"));
Vue.component("lectives-student-courses", ()=>import("./components/lectivesStudentCoursesComponent.vue"));
Vue.component("lectives-teacher-planning", ()=>import("./components/lectivesTeacherPlanningComponent.vue"));
Vue.component("lectives-teacher-planning-edit", ()=>import("./components/lectivesTeacherPlanningEditComponent.vue"));
Vue.component("lectives-teacher-indicators", ()=>import("./components/lectivesTeacherIndicatorsComponent.vue"));
Vue.component("lectives-teacher-weekly", ()=>import("./components/lectivesTeacherWeeklyComponent.vue"));
Vue.component("lectives-teacher-courses", ()=>import("./components/lectivesTeacherCoursesComponent.vue"));
Vue.component("lectives-teacher-courses-edit", ()=>import("./components/lectivesTeacherCoursesEditComponent.vue"));
Vue.component("lectives-teacher-activities", ()=>import("./components/lectivesTeacherActivitiesComponent.vue"));
Vue.component("lectives-teacher-board", ()=>import("./components/lectivesTeacherBoardComponent.vue"));
Vue.component("lectives-teacher-students", ()=>import("./components/lectivesTeacherStudentsComponent.vue"));

Vue.component("lectives-teacher-notes", ()=>import("./components/lectivesTeacherNotesComponent.vue"));




Vue.use(CKEditor);
Vue.use(CKEditor);

const app = new Vue({el: "#app", data: {}, store});


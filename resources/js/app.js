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
import Vue from "vue";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import Game from "./components/Game";
import store from "./vuex/store";
import en from '../../src/lang/en_US.json'
import es from '../../src/lang/es_ES.json'

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  formatFallbackMessages: true,
  messages: {
    en: {
      lang: en
    },
    es: {
      lang: es
    }
  }
});


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
Vue.component("user-component", require("./components/Usercomponent.vue").default);
Vue.component("type-component", require("./components/TypeUserComponent.vue").default);
Vue.component("resume-component", require("./components/ResumeComponent.vue").default);
Vue.component("checkbox", require("./components/Checkbox.vue").default);
Vue.component("class-component", require("./components/ClassComponent.vue").default);
Vue.component("blog-component", require("./components/BlogComponent.vue").default);
Vue.component("draw-c", require("./components/draw.vue").default);

Vue.component("home", require("./components/home.vue").default);
Vue.component("home-skills", require("./components/homeSkills.vue").default);
Vue.component("new-home", require("./components/newHome.vue").default);
Vue.component("board", require("./components/board.vue").default);
Vue.component("equations", require("./components/equations.vue").default);
Vue.component("footers", require("./components/footer.vue").default);
Vue.component("footer-home", require("./components/footerHome.vue").default);
Vue.component("unit-class", require("./components/unitComponent.vue").default);
Vue.component("free-component", require("./components/freeComponent.vue").default);
Vue.component("freeu-component", require("./components/freeUnitComponent.vue").default);
Vue.component("course-component", () => import ("./components/courseComponent.vue"));
Vue.component("trim-component", () =>import("./components/TrimComponent.vue"));
Vue.component("course-view", require("./components/CourseView.vue").default);
Vue.component("semanal-component", require("./components/courseSemanalComponet.vue").default);
Vue.component("semanalact-component", require("./components/courseSemanalAct.vue").default);
Vue.component("list-component", require("./components/listClassComponent.vue").default);
Vue.component("list-activity", require("./components/listActivity.vue").default);
Vue.component("actividad-docente", require("./components/ActividadDocente.vue").default);
Vue.component("sincro-component", require("./components/SincroEvent.vue").default);
Vue.component("cuestionario-component", require("./components/Cuestionario.vue").default);
Vue.component("hangman-component", require("./components/hangman.vue").default);
Vue.component("evaluation-component", require("./components/EvaluationComponent.vue").default);
Vue.component("activ-component", require("./components/ActivityComponent.vue").default);
Vue.component("mycourse-component", require("./components/MyCourseComponent.vue").default);
Vue.component("consult-component", require("./components/ConsultComponent.vue").default);
Vue.component("frecuent-cuestions", require("./components/FrecuentCuestions.vue").default);
Vue.component("register-component", require("./components/RegisterComponent.vue").default);
Vue.component("mycourses-component", require("./components/MyCoursesComponent.vue").default);
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
Vue.component("mensajes-component",  () => import ("./components/mensajes.vue"));
Vue.component("mensajesenv-component", require("./components/mensajesEnv.vue").default);
Vue.component("actividad-component", require("./components/tareas.vue").default);
Vue.component("notas-component", require("./components/notas.vue").default);
Vue.component("boletin-component", require("./components/boletin.vue").default);
Vue.component("menu-docente", () => import ("./components/menudocente.vue"));
Vue.component("menu-psychology", () => import ("./components/menuPsyc.vue"));
Vue.component("perfil-docente", require("./components/perfildocente.vue").default);
Vue.component("perfil-psychology", require("./components/perfilPsy.vue").default);
Vue.component("anuncio-docente", require("./components/anunciodocente.vue").default);
Vue.component("actividadg-docente",  () => import ("./components/actividadGDocente.vue"));
Vue.component("anunciomc-component", require("./components/anunciomc.vue").default);

//Componente de Calendario separado
Vue.component("calendar-component", require("./components/calendarComponent.vue").default);
Vue.component("calendar-class-component", ()=> import("./components/calendarClassComponent.vue"));
Vue.component("calendar-modal-event", ()=> import("./components/ModalEventsCalendarComponent.vue"));
Vue.component("calendar-modal-edit-event", () => import("./components/ModalEventsEditCalendarComponent.vue"));

Vue.component("psychology-calendar-component", require("./components/psychologyComponent.vue").default);
Vue.component("student-calendar-component", require("./components/studentCalendarComponent.vue").default);
Vue.component("redactar-component", require("./components/redactar.vue").default);
Vue.component("vmensaje-component", require("./components/vistamensaje.vue").default);
Vue.component("classroom-component", require("./components/classroomComponent.vue").default);
Vue.component("studentbyclass-component", require("./components/studentClassroom.vue").default);
Vue.component("student-report-component", require("./components/studentReport.vue").default);
Vue.component("psychologymenu",  () => import ("./components/psychologyMenu.vue"));

Vue.component("duplicarsemana-component", require("./components/duplicarSemana.vue").default);
Vue.component("duplicarsemanaelectiva-component", require("./components/duplicarSemanaElectiva.vue").default);
Vue.component("game-component", require("./components/Game.vue").default);
Vue.component("juegos-component", require("./components/juegos.vue").default);
Vue.component("groups", require("./components/Groups.vue").default);
Vue.component("create-group", () => import("./components/CreateGroup.vue"));
Vue.component("group-chat", require("./components/GroupChat.vue").default);
Vue.component("clasesst-component", require("./components/clasesSt.vue").default);
Vue.component("notasd-component", require("./components/notasDocente.vue").default);
Vue.component("actividadvd-component", require("./components/actividadVDocente.vue").default);
Vue.component("clasesd-component",()=>import("./components/clasesDocente.vue"));
Vue.component("crearc-component", require("./components/crearClase.vue").default);
Vue.component("editarc-component", require("./components/editarClase.vue").default);

//Landing

Vue.component("landing-component",()=>import("./components/landing.vue"));
Vue.component("footer-landing",()=>import("./components/footerLanding.vue"));

Vue.component("general-teacher", () => import("./components/generalTeacher.vue"));
Vue.component("clases-teacher", ()=>import("./components/clasesTeacher.vue"));
Vue.component("inicio-component", ()=>import("./components/inicio.vue"));
Vue.component("userinfo", ()=>import("./components/UserInfo"));
Vue.component("answer", ()=>import("./components/Answer"));
Vue.component("favoritequestion", ()=>import("./components/FavoriteQuestion"));
Vue.component("porcentaje-component", ()=>import("./components/porcentajeNotas.vue"));
Vue.component("acceptanswer", ()=>import("./components/AcceptAnswer"));
Vue.component("answervote", ()=>import("./components/AnswerVote"));
Vue.component("questionvote", ()=>import("./components/QuestionVote"));
Vue.component("emoji-text", ()=>import("./components/text-emoji.vue"));

Vue.component("estudiante-adm", ()=>import("./components/estudianteAdm.vue"));
Vue.component("docente-adm", ()=>import("./components/docenteAdm.vue"));
Vue.component("cursos-adm", ()=>import("./components/cursosAdm.vue"));
Vue.component("semana-adm", ()=>import("./components/semanaAdm.vue"));
Vue.component("plan-adm", ()=>import("./components/planAdm.vue"));
Vue.component("planificacion-adm", ()=>import("./components/planificacionAdm.vue"));
Vue.component("vplan-adm", ()=>import("./components/vplanAdm.vue"));
Vue.component("reportes-adm", ()=>import("./components/reportesAdm.vue"));
Vue.component("menu-adm", ()=>import("./components/menuAdm.vue"));
Vue.component("menu-coord", ()=>import("./components/menuCoord.vue"));
Vue.component("chart-adm", ()=>import("./components/chart.vue"));
Vue.component("vclases-adm", ()=>import("./components/clases_adm.vue"));
Vue.component("institu-adm", ()=>import("./components/institucionesAdm.vue"));
Vue.component("cinstitu-adm", ()=>import("./components/crearInstituciones.vue"));
//componentes de coordinador
Vue.component("coordinador-adm", ()=>import("./components/coordinadorAdm.vue"));
Vue.component("create-coord", ()=>import("./components/coordinadorCreateAdm.vue"));
Vue.component("update-coord",() => import("./components/coordinadorUpdateAdm.vue"));
Vue.component("materias-coord",()=>import("./components/MateriasCoord.vue"));
Vue.component("courses-coord", () =>import("./components/CourseCoord.vue"));
Vue.component("utils-coord", () =>import("./components/UtilsCoord.vue"));
Vue.component("pedagogical-course", ()=>import("./components/PedagogicalCourse.vue"));
Vue.component("permission-pedagogic", ()=>import("./components/permissionPedagogic.vue"));

Vue.component("salon-adm", ()=>import("./components/salonAdm.vue"));
Vue.component("matricula", ()=>import("./components/matricula.vue"));
Vue.component("aperfil-adm", ()=>import("./components/AsignarPerfil.vue"));
Vue.component("adocente-adm", ()=>import("./components/asignarDocente.vue"));
Vue.component("aestudiante-adm", ()=>import("./components/asignarEstudiante.vue"));
Vue.component("aparent-adm", ()=>import("./components/asignarPariente.vue"));
Vue.component("importar-adm", ()=>import("./components/importAdm.vue"));
Vue.component("asistencia-adm", ()=>import("./components/asistencia.vue"));
Vue.component("motive-assistants", ()=>import("./components/motiveAssistants.vue"));


Vue.component("duplicar-component",  () => import ("./components/duplicarGeneral.vue"));
Vue.component("areas-dupli-general", () => import ("./components/areasToDuplicateGeneral.vue"));

//activities
Vue.component("activity-questionary", ()=>import("./components/activityQuestionaryComponent.vue"));
Vue.component("activity-complete-sentence", ()=>import("./components/activityCompleteSentenceComponent.vue"));
Vue.component("activity-crossword", ()=>import("./components/activityCrosswordComponent.vue"));
Vue.component("activity-relationship", ()=>import("./components/activityRelationshipComponent.vue"));

Vue.component("activity-student-play-component", ()=>import("./components/activityStudentPlayComponent.vue"));
Vue.component("editor-component", () => import("./components/editorComponent.vue"));
Vue.component("equation-component", () => import("./components/equationComponent.vue"));
Vue.component("process-ribbon-component", () =>   import("./components/processRibbonComponent.vue"));

Vue.component("lectives-adm", () => import ("./components/lectivesAdmComponent.vue"));
Vue.component("lectives-adm-assing-teacher", () => import ("./components/lectivesAdmAssingTeacherComponent.vue"));
Vue.component("lectives-teacher-course", () => import ("./components/lectivesClass.vue"));
Vue.component("lectives-student-activities", () => import ("./components/lectivesStudentActivitiesComponent.vue"));
Vue.component("lectives-student-courses", () => import ("./components/lectivesStudentCoursesComponent.vue"));
Vue.component("lectives-teacher-planning", () => import ("./components/lectivesTeacherPlanningComponent.vue"));
Vue.component("lectives-teacher-planning-edit", () => import ("./components/lectivesTeacherPlanningEditComponent.vue"));
Vue.component("lectives-teacher-indicators", () => import ("./components/lectivesTeacherIndicatorsComponent.vue"));
Vue.component("lectives-teacher-weekly", () => import ("./components/lectivesTeacherWeeklyComponent.vue"));
Vue.component("lectives-teacher-courses", () => import ("./components/lectivesTeacherCoursesComponent.vue"));
Vue.component("lectives-teacher-courses-edit", () => import ("./components/lectivesTeacherCoursesEditComponent.vue"));
Vue.component("lectives-teacher-activities", () => import ("./components/lectivesTeacherActivitiesComponent.vue"));
Vue.component("lectives-teacher-activity", () => import ("./components/lectivesTeacherActivityComponent.vue"));
Vue.component("lectives-teacher-board", () => import ("./components/lectivesTeacherBoardComponent.vue"));
Vue.component("lectives-teacher-students", () => import ("./components/lectivesTeacherStudentsComponent.vue"));
Vue.component("lectives-teacher-notes", () => import ("./components/lectivesTeacherNotesComponent.vue"));
Vue.component("lectives-teacher-module", () => import ("./components/lectivesTeacherModuleComponent.vue"));


Vue.component("repository-component", () => import("./components/repositoryComponent.vue"));
Vue.component("create-repository", () => import("./components/repositoryCreate.vue"));
Vue.component("repository-students", () => import("./components/repositoryStudents.vue"));
Vue.component("repository-comments", () => import("./components/repositoryComments.vue"));
Vue.component("student-comments", () => import("./components/repositoryStudentComments.vue"));

Vue.component("memory-create", () => import("./components/crearMemoria.vue"));

Vue.component("repo-student", () => import("./components/repositoryStudentView.vue"));
Vue.component("repository-upload", () => import("./components/repositoryStudentUpload.vue"));
Vue.component("test-firebase", () => import("./components/testFirebase.vue"));


//cursos
Vue.component("admin-configuration", () => import ("./components/adminConfiguration.vue"));
Vue.component("admin-configuration-parameters", () => import ("./components/adminConfigurationParameters.vue"));
Vue.component("admin-configuration-template-notes", () => import ("./components/adminConfigurationTemplateNotes.vue"));
Vue.component("admin-courses", () => import ("./components/adminCoursesComponent.vue"));
Vue.component("admin-module", () => import ("./components/adminModuleComponent.vue"));
Vue.component("teacher-courses", () => import ("./components/teacherCoursesComponent.vue"));
Vue.component("admin-report-planification", () => import ("./components/reportObjetivesPlanificationComponent.vue"));
Vue.component("admin-report-cycle", () => import ("./components/reportCycleComponent.vue"));
Vue.component("teacher-module", () => import ("./components/teacherModuleComponent.vue"));
Vue.component("teacher-course", () => import ("./components/teacherCourseComponent.vue"));
Vue.component("modal-preview",()=>import("./components/ModalPreviewClass.vue"));
Vue.component("student-courses", () => import ("./components/studentCoursesComponent.vue"));
Vue.component("student-module", () => import ("./components/studentModuleComponent.vue"));
Vue.component("student-course", () => import ("./components/studentCourseComponent.vue"));
Vue.component("teacher-students", () => import ("./components/teacherStudentsComponent.vue"));
Vue.component("teacher-student", () => import ("./components/teacherStudentComponent.vue"));
Vue.component("teacher-student-module-select", () => import ("./components/teacherStudentModuleSelectComponent.vue"));
Vue.component("teacher-student-class-select", () => import ("./components/teacherStudentClassSelectComponent.vue"));
Vue.component("teacher-student-class-content", () => import ("./components/teacherStudentClassContentComponent.vue"));
Vue.component("notification-component", () => import ("./components/notificationComponent.vue"));
Vue.component("language-component", () => import ("./components/changeLanguageComponent.vue"));
Vue.component("content-loader", () => import ("./components/contentLoaderComponent.vue"));

//Padres
Vue.component("menu-padres", () => import("./components/menuPadres.vue"));
Vue.component("parents-component", () => import("./components/parents.vue"));
Vue.component("event-parents-modal", () => import("./components/EventParentsModal.vue"));
Vue.component("modal-edit-parents-info", () => import("./components/ModalEditParentsInfo.vue"));
Vue.component("parents-observer", () => import("./components/ParentsObserver.vue"));
Vue.component("parents-pedagogic", ()=>import("./components/parentsPedagogic.vue"));

//Psicologia
Vue.component("comunicates-component", () => import("./components/Comunicates.vue"));
Vue.component("history-psicology-component", ()=> import("./components/HistorialPsicologia.vue"));
Vue.component("follow-ups-component", ()=>import("./components/Seguimientos.vue"))
Vue.component("modal-create-reason-component", () => import("./components/ModalReasonCreate.vue"));

//Tutor
Vue.component("menu-tutor", ()=>import("./components/menuTutor.vue"));
Vue.component("tutor-schedule", ()=>import("./components/tutorScheduleComponent.vue"));
Vue.component("student-schedule", ()=>import("./components/studentScheduleComponent.vue"));
Vue.component("tutor-profile", ()=>import("./components/tutorProfileComponent.vue"));
Vue.component("tutor-code", ()=>import("./components/tutorCode.vue"));
Vue.component("tutor-code-student", ()=>import("./components/tutorCodeStudent.vue"));
Vue.component("tutor-code-validation", ()=>import("./components/tutorCodeVinculation.vue"));
Vue.component("schedule-code-tutor", ()=>import("./components/tutorCodeScheduleComponent.vue"));
Vue.component("tutor-register", ()=>import("./components/tutorRegister.vue"));

//Observer
Vue.component("observer-component", () => import("./components/Observer.vue"));
Vue.component("modal-observer-component", () => import("./components/ModalObserver.vue"));
Vue.component("modal-edit-observer-component", () => import("./components/ModalEditObserver.vue"));
Vue.component("modal-view-observer-component", () => import("./components/ModalViewObserver.vue"));

// SchoolGovernment
Vue.component("menu-school", () =>import("./components/menuSchoolGov.vue"));
Vue.component("school-government-component", () =>import("./components/SchoolGov.vue"));
Vue.component("modal-school-component", () =>import("./components/ModalSchoolGov.vue"));
Vue.component("legislation-component", () =>import("./components/legislation.vue"));

//Report Psychology
Vue.component("report-visits-component", () => import("./components/reportVisits.vue"));
Vue.component("students-component", () => import("./components/students.vue"));
Vue.component("report-notes-component", () => import("./components/reportNotes.vue"));

//
Vue.component("government-members-component", () => import("./components/schoolGovernmentMembers.vue"));
Vue.component("modal-create-government-member", ()=>import("./components/ModalCreateGovernmentMember.vue"));
Vue.component("modal-edit-government-member", () => import("./components/ModalEditGovernmentMember.vue"));
Vue.component("reports-government", ()=> import("./components/reportsGovernment.vue"));
Vue.component("modal-docente", ()=> import("./components/modalDocenteReport.vue"));
Vue.component("modal-planif-docente", ()=> import("./components/modalDocentePlanifReport.vue"));
Vue.component("modal-course", ()=> import("./components/modalDocenteCurso.vue"));
Vue.component("modal-materias", ()=> import("./components/modalMaterias.vue"));
Vue.component("staments-component", ()=> import("./components/Staments.vue"));
Vue.component("modal-chat", ()=> import("./components/modalChat.vue"));
Vue.component("members-chat", ()=> import("./components/modalMembers.vue"));

//Tutorships
Vue.component("purchase-tutorial-resume", () => import ("./components/purchaseTutorshipsResumeComponent.vue"));

//Plans Purchase
Vue.component("purchase-plan-resume", () => import ("./components/purchasePlanResumeComponent.vue"));
Vue.component("purchase-login", require("./components/purchaseLogin.vue").default);

//Modulo para eliminar clases y ciclos
// Vue.component("component-delete-class-and-cicles", ()=> import("./components/deleteClassAndCicles.vue"));

//Modulo para registro de asistencia
Vue.component("assistance-component",()=>import("./components/assistance.vue"));

//Modulo de Efectividad
Vue.component("effectiveness-component", ()=>import("./components/effectiveness.vue"));

//Moodulo de Alimentos
Vue.component("food-component", ()=>import("./components/FoodComponent.vue"));

//Modulo de Enfermer??a Con men??
Vue.component("menu-nurse", ()=>import("./components/menuNurse.vue"));
Vue.component("nursing-component", ()=>import("./components/NurseComponent.vue"));
Vue.component("menu-adm-component", ()=>import("./components/newInicioMenuAdm.vue"));

//Modulo PIAR
Vue.component("piar-component", ()=>import("./components/PIARStudentSelect.vue"));
Vue.component("piar-planification", ()=>import("./components/PIARPlanification.vue"));
Vue.component("piar-anual-planification", ()=>import("./components/PIARAnualPlanificationComponent.vue"));
//Modulo Cliente
Vue.component("menu-cliente", ()=>import("./components/menuCliente.vue"));
//Error pay paypal
Vue.component("purchase-plan-pay-error", () => import ("./components/purchasePlanPayErrorComponent.vue"));
//Result pay paypal
Vue.component("purchase-pay-paypal-result", () => import ("./components/purchasePlanPayResultPaypalComponent.vue"));
//Actas Padres
Vue.component("proceedings-parents-component", () => import ("./components/proceedingsParentsComponent.vue"));
Vue.component("list-proceedings-parents-component", () => import ("./components/listProceedingsParents.vue"));
Vue.component("modal-update-proceedings", () => import ("./components/modalUpdateProceedings.vue"));
Vue.component("view-proceedings-pdf-component", () => import ("./components/viewProceedingsPdfComponent.vue"));
//Actas Generales
Vue.component("list-proceedings-general-component", () => import ("./components/listProceedingsGeneral.vue"));
Vue.component("proceedings-general-component", () => import ("./components/proceedingsGeneralComponent.vue"));

//Modulo envio de reporte a padres
Vue.component("report-send-parents",()=>import("./components/reportSendParents.vue"));
Vue.component("report-monthly-component", ()=>import("./components/mothlyReportParent.vue"));

Vue.component("report-admin", ()=>import("./components/reportAdmin.vue"));
Vue.component("lective_notes", ()=>import("./components/lectivesTeacherNotesComponent.vue"));

Vue.component("cycle-list", ()=>import("./components/cycleList.vue"));
Vue.component("modal-create-trimestre", ()=>import("./components/modalCreateTrimestre.vue"));
Vue.component("trimestres", ()=>import("./components/trimestreAdm.vue"));
Vue.component("activities-teacher",()=>import("./components/ActivityTeacherComponent.vue"));
Vue.component("trimestre-component",()=>import("./components/trimestreComponent.vue"));
Vue.component("create-lectives-courses",()=>import("./components/CreatelectivesTeacherCoursesComponent.vue"));
Vue.component("administ-tab", ()=>import("./components/tabsAdministrative.vue"));
Vue.component("academic-tab",()=>import("./components/tabsAcademic.vue"));
Vue.component("comunication-tab", ()=>import("./components/tabComunication.vue"));
Vue.component("formation-tab",()=>import("./components/tabsFormation.vue"));
Vue.component("school-gov-tab",()=>import("./components/tabsSchoolGov.vue"));
Vue.component("clases-client",()=>import("./components/clasesCliente.vue"));
Vue.use(CKEditor);


const app = new Vue({el: "#app", i18n, data: {}, store});

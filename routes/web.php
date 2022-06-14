<?php

use App\Message;
use App\User;
use App\Events\MessagePosted;
use App\Exports\ProductsExport;
use App\Exports\StudentsExport;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Excel;
use App\Exports\ClassExport;
use Maatwebsite\Excel\Facades\Excel;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::group(['middleware' => 'auth', function () {
//add all your routes here
Route::middleware('auth')->get('/user', function () {
    return view('user');
});
Route::middleware('auth')->get('/board', function () {
    return view('welcome');
});
Route::middleware('auth')->get('/memoria', function () {
    return view('memory');
});
Route::middleware('auth')->get('/task', function () {
    return view('class');
});
Route::middleware('auth')->get('/resume', function () {
    return view('resume');
});
Route::middleware('auth')->get('/class', function () {
    return view('class');
});
Route::middleware('auth')->get('/Clases', function () {
    return view('clasesSt');
});
Route::middleware('auth')->get('/notas_d', function () {
    return view('notasDocente');
});
Route::middleware('auth')->get('/actividad_docente', function () {
    return view('actividadVD');
});
// Route::get('/board', function () {
//     return view('board');
// });
// Route::get('/boards', function () {
//      return view('dboard');
// });

Route::get('/equations', function () {
    return view('equations');
});
Route::middleware('auth')->get('/reportPlanification', function () {
    return view('reportObjetivesPlanificationComponent');
});
Route::middleware('auth')->get('/reportCycle', function () {
    return view('reportCycleComponent');
});
Route::middleware('auth')->get('/free', function () {
    return view('free');
});
Route::middleware('auth')->get('/freeUnit', function () {
    return view('freeU');
});
Route::middleware('auth')->get('/course/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('course')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/duplicar/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('duplicarGeneral')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/duplicarGeneral', function () {
    return view('areasToDuplicateGeneral');
});
Route::middleware('auth')->get('/duplicar-semana/', function () {
    return view('duplicarSemana');
});
Route::middleware('auth')->get('/duplicar-semana-electiva/', function () {
    return view('duplicarSemanaElectiva');
});
Route::middleware('auth')->get('/crear_semana/{id_area}/{id_classroom}/{id_trimestre}/{orden}', function (String $id_area, String $id_classroom, String $id_trimestre, String $orden) {
    return view('semanal')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('id_trimestre', $id_trimestre)->with('orden', $orden);
});

Route::middleware('auth')->get('/crear_semana/{id_area}/{id_classroom}/{id_trimestre}/{orden}', function (String $id_area, String $id_classroom, String $id_trimestre, String $orden) {
    return view('semanal')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('id_trimestre', $id_trimestre)->with('orden', $orden);
});
Route::middleware('auth')->get('/cycle/list/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('cycleList')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/act_semana/{id_area}/{id_classroom}/{cycle_id}', function (String $id_area, String $id_classroom, String $cycle_id) {
    return view('semanalAct')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('cycle_id', $cycle_id);
});

Route::middleware('auth')->get('/unit', function () {
    return view('unit');
});
Route::middleware('auth')->get('/payments', function () {
    return view('car');
});
Route::middleware('auth')->get('/ccourse', function () {
    return view('list');
});
Route::middleware('auth')->get('/listactivity', function () {
    return view('lista');
});
Route::middleware('auth')->get('/actividad_g', function () {
    return view('actividadgd');
});
Route::middleware('auth')->get('/sincro', function () {
    return view('sincro');
});
Route::middleware('auth')->get('/evaluation', function () {
    return view('evaluation');
});
Route::middleware('auth')->get('/vcourse', function () {
    return view('view');
});
Route::middleware('auth')->get('/proceedings/parents', function () {
    return view('proceedingsParents');
});
Route::middleware('auth')->get('/proceedings/general', function () {
    return view('proceedingsGeneral');
});
Route::middleware('auth')->get('/list/proceedings/parents', function () {
    return view('listProceedingsParents')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/list/proceedings/general', function () {
    return view('listProceedingsGeneral')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/view/proceedings/{id}/{type_view}', function (int $id_proceeding, int $type_view) {
    return view('viewProceedingsPdf')->with('id_proceeding', $id_proceeding)->with('type_view', $type_view);
});
Route::middleware('auth')->get('/consult', function () {
    return view('consult');
});
Route::middleware('auth')->get('/manual', function () {
    return view('cuestions');
});
Route::middleware('auth')->get('/mycourse', function () {
    return view('mycourse');
});
Route::middleware('auth')->get('/mycourses', function () {
    return view('mycourses');
});
Route::middleware('auth')->get('/courseSt', function () {
    return view('coursesSt');
});
Route::middleware('auth')->get('/calificationSt', function () {
    return view('calificationSt');
});
Route::middleware('auth')->get('/activitySt', function () {
    return view('activitySt');
});
Route::middleware('auth')->get('/calification', function () {
    return view('listevaluationSt');
});
Route::middleware('auth')->get('/plan', function () {
    return view('plan');
});
Route::middleware('auth')->get('/changePassword', function () {
    return view('changepassword');
});
Route::middleware('auth')->get('/miPerfil', function () {
    return view('perfil');
});
Route::middleware('auth')->get('/resetPass', function () {
    return view('resetPass');
});

Route::middleware('auth')->get('/trivia', function () {
    return view('trivia');
});
Route::middleware('auth')->get('/triviaimg', function () {
    return view('triviaimg');
});
Route::middleware('auth')->get('/quiz', function () {
    return view('quizopen');
});
Route::middleware('auth')->get('/sentence', function () {
    return view('quiz');
});
Route::middleware('auth')->get('/mensajes', function () {
    return view('mensajes');
});
Route::middleware('auth')->get('/Actividad', function () {
    return view('activ');
});
Route::middleware('auth')->get('/notas', function () {
    return view('notas');
});
Route::middleware('auth')->get('/boletin', function () {
    return view('boletin');
});
Route::middleware('auth')->get('/calendar', function () {
    return view('calendar')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/psychology', function () {
    return view('psychology')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/psychology_menu', function () {
    return view('psychologyMenu');
});
Route::middleware('auth')->get('/classroom', function () {
    return view('classroom')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/student/{id_classroom}/{name_classroom}', function (String $id_classroom, String $name_classroom) {
    return view('studentsClassroom')->with('id_classroom', $id_classroom)->with('name_classroom', $name_classroom);
});
Route::middleware('auth')->get('/studentReport/{id_student}/{name_classroom}/{id_classroom}', function (String $id_student, String $name_classroom, String $id_classroom) {
    return view('studentReport')->with('id_student', $id_student)->with('name_classroom', $name_classroom)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/students/{tipo}', function (String $tipo) {
    return view('students')->with('tipo', $tipo);
});
Route::middleware('auth')->get('/notes/{id_student}', function (String $id_student) {
    return view('reportNotes')->with('id_student', $id_student);
});
Route::middleware('auth')->get('/reportVisits/{id_student}', function (String $id_student) {
    return view('reportVisits')->with('id_student', $id_student);
});
Route::middleware('auth')->get('/calendario', function () {
    return view('calendar')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/estudiante/calendario', function () {
    return view('studentCalendar')->with('type_user', Auth::user()->type_user);
});
Route::middleware('auth')->get('/perfil_d', function () {
    return view('perfild');
});
Route::middleware('auth')->get('/perfil_p', function () {
    return view('perfilp');
});
Route::middleware('auth')->get('/anuncio_d', function () {
    return view('anunciod');
});
Route::middleware('auth')->get('/anuncio_mc', function () {
    return view('anunciomc');
});
Route::middleware('auth')->get('/general', function () {
    return view('generalTeacher');
});
Route::middleware('auth')->get('/plan_clases', function () {
    return view('claseTeacher');
});
Route::middleware('auth')->get('/inicio', function () {
    return view('inicio');
});

Route::middleware('auth')->get('/juegos', function () {
    return view('juegos');
});
Route::middleware('auth')->get('/redactar', function () {
    return view('redactar');
});
Route::middleware('auth')->get('/vmensaje', function () {
    return view('vistamensaje');
});
Route::middleware('auth')->get('/clases_d', function () {
    return view('clasesDocente');
});

Route::middleware('auth')->get('/crear_clase/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('crearClase')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/editar_clase/{id_class}/{id_area}/{id_classroom}', function (String $id_class, String $id_area, String $id_classroom) {
    return view('editarClase')->with('id_class', $id_class)->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});

Route::middleware('auth')->get('/general_adm', function () {
    return view('cursosAdm');
});

Route::middleware('auth')->get('/semana_adm', function () {
    return view('semanaAdm');
});
Route::middleware('auth')->get('/planificacion', function () {
    return view('vplanAdm');
});
Route::middleware('auth')->get('/vclases_adm', function () {
    return view('vclasesAdm');
});
Route::middleware('auth')->get('/planeacion', function () {
    return view('planificacionAdm');
});
Route::middleware('auth')->get('/plan_adm', function () {
    return view('planAdm');
});
Route::middleware('auth')->get('/estudiante_adm', function () {
    return view('estudianteAdm');
});
Route::middleware('auth')->get('/docente_adm', function () {
    return view('docenteAdm');
});
Route::middleware('auth')->get('/reportes', function () {
    return view('reportesAdm');
});
Route::middleware('auth')->get('/instituciones_adm', function () {
    return view('institucionesAdm');
});
Route::middleware('auth')->get('/trimestre_adm', function () {
    return view('trimestre');
});
Route::middleware('auth')->get('/instituciones_crear', function () {
    return view('crearInstitucion');
});
Route::middleware('auth')->get('/perfil_asignar', function () {
    return view('asignarPerfil');
});
Route::middleware('auth')->get('/docente_asignar', function () {
    return view('asignarDocente');
});
Route::middleware('auth')->get('/estudiante_asignar', function () {
    return view('asignarEstudiante');
});
Route::middleware('auth')->get('/parent_asignar', function () {
    return view('asignarParent');
});
Route::middleware('auth')->get('/coordinador_adm', function () {
    return view('coordinadorAdm');
});
Route::middleware('auth')->get('/salon_adm', function () {
    return view('salonAdm');
});
Route::middleware('auth')->get('/asistencia', function () {
    return view('asistencia');
});
Route::middleware('auth')->get('/matricula', function () {
    return view('matricula');
});
/* Route::get('/skills', function () {
    return view('homeSkills');
}); */
Route::get('/compra/plan/{plan_type}/skills/ingresar/p/{payment_code}', function (string $plan_type,  String $payment_code) {
    return view('purchaseLogin')->with('plan_type', $plan_type)->with('payment_code', $payment_code);
});

Route::middleware('auth')->get('/porcentaje/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('porcentajeNotas')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});
Route::middleware('auth')->get('/planificacion/trimestral/{id}/{id_classroom}', function (String $id, String $id_classroom) {
    return view('planificacionTrim')->with('id', $id.'/'.$id_classroom)->with('id_classroom', $id_classroom);
});
Route::get('/compra/plan/tutoria/{tutor_schedule_student_id}/{tutorschedule_id}/resumen', function (int $tutor_schedule_student_id, int $tutorschedule_id) {
    return view('purchaseTutoriaResume')->with('tutor_schedule_student_id', $tutor_schedule_student_id)->with('tutorschedule_id', $tutorschedule_id);
});
Route::get('/compra/plan/{plan_type}/{payment_type}/{code}/resumen', function (String $plan_type, String $payment_type, String $code) {
    return view('purchasePlanResume')->with('plan_type', $plan_type)->with('payment_type', $payment_type)->with('code', $code);
});
Route::middleware('auth')->get('/chat', 'HomeController@CreateGroup')->name('chat');
Route::middleware('auth')->get('/chat2', 'HomeController@CreateGroup2');
// Lessons
Route::middleware('auth')->delete('lessons/destroy', 'LessonsController@massDestroy')->name('lessons.massDestroy');
Route::resource('lessons', 'LessonsController');

// School Classes
Route::middleware('auth')->delete('school-classes/destroy', 'SchoolClassesController@massDestroy')->name('school-classes.massDestroy');
Route::resource('school-classes', 'SchoolClassesController');

Route::get('horario', 'CalendarController@index')->name('calendar.index');
Route::put('/changePassword', 'UserController@changePassword')->name('changePassword');


Route::middleware('auth')->get('showUser', 'UserController@show')->name('users_save');
Route::post('img_user', 'UserController@uploadFile')->name('img_user');
Route::get('getAdministrators', 'UserController@getAdministrators');
Route::get('getParents', 'UserController@getParents');
Route::get('getPsicologist', 'UserController@getPsicologist');
Route::get('getSchoolGovernment', 'UserController@getSchoolGovernment');
Route::get('getTutor', 'UserController@getTutor');
Route::get('getCoordinador', 'UserController@getCoordinador');
Route::get('getNurse', 'UserController@getNurse');

Route::middleware('auth')->post('savePrintDoc', 'HomeController@savePrintDoc')->name('savePrintDoc');
Route::get('downloadFile', 'HomeController@downloadFile')->name('downloadFile');

Route::middleware('auth')->get('user_name/{id_user}', 'UserController@userName')->name('userName');
Route::middleware('auth')->get('info_user', 'UserController@show')->name('info_user');
Route::middleware('auth')->get('userType', 'UserController@typeUserLog');
Route::middleware('auth')->get('coursePlanification/{id_area}/{id_classroom}', 'CoursesController@index');
Route::middleware('auth')->get('coursePlanificationObjetives/{id_achievement}/{id_planification}', 'CoursesController@getReportPlanification');
Route::middleware('auth')->get('courseCycleAndClass/{id_area}/{id_classroom}/{id_trimestre}', 'CoursesController@getReportCycleAndClass');
Route::middleware('auth')->get('planification/objetives/{id_area}/{id_classroom}', 'CoursesController@objetivesByPlanification');
Route::middleware('auth')->get('GetCourses', 'CourseController@GetCourses');
Route::middleware('auth')->get('GetCategories', 'CategoryController@GetCategories');
Route::middleware('auth')->get('GetTypeU', 'CategoryController@GetTypeU');
Route::middleware('auth')->get('GetSubcategories/{id}', 'CategoryController@GetSubcategories');
/* Get unit and topic */
Route::get('GetUnits/{id}', 'courseController@GetUnits');
Route::get('GetTopics/{id}', 'courseController@GetTopics');
//Route::get('/home', 'HomeController@index')->name('home');
Route::get('testsendemail/{email}', 'TestingController@sendemail');
Auth::routes();

Route::resource('activities', 'ActivitiesController', ['except' => 'show', 'create', 'edit']);;
Route::resource('types', 'TypeUserController', ['except' => 'show', 'create', 'edit']);;
Route::resource('tasks', 'TaskController', ['except' => 'show', 'create', 'edit']);;
Route::resource('categories', 'CategoryController', ['except' => 'show', 'create', 'edit']);;
Route::resource('users', 'UserController', ['except' => 'show', 'create', 'edit']);;
Route::get('getStudentsByClassroom', 'UserController@getStudentsByClassroom');
Route::get('getTeachersByClassroom', 'UserController@getTeachersByClassroom');
Route::resource('resumes', 'ResumeController', ['except' => 'show', 'create', 'edit']);;
Route::resource('courses', 'courseController', ['except' => 'show', 'create', 'edit']);
Route::resource('Courses', 'CoursesController', ['except' => 'show', 'create', 'edit']);
Route::put('deleteObjetivePlanification/{id}', 'CoursesController@deleteObjetive');
Route::put('deleteLogroPlanification/{id}', 'CoursesController@deleteLogro');
Route::resource('Class', 'ClassController', ['except' => 'show', 'create', 'edit']);
Route::get('GetClass', 'ClassController@getClass');
Route::get('showClass/{id}', 'ClassController@show')->name('showClass');
Route::get('showClassByClassroom/{id_area}/{id_classroom}', 'ClassController@classesByClassroom');
Route::delete('deleteClasses/{id}', 'ClassController@destroy');

Route::put('test', 'ClassController@deactivateClass')->name('test');
Route::get('editClass/{id}', 'ClassController@findClass')->name('editClass');
Route::get('GetNameArea/{id_area}/{id_classroom}', 'ClassController@getNameArea')->name('GetNameArea');
Route::get('getActivity/{id_1}/{id_2}', 'ActivityController@indexActivityByArea')->name('getActivity');
Route::get('getActivityById/{id}', 'ActivityController@getActivityById')->name('getActivityById');
Route::resource('Activity', 'ActivityController', ['except' => 'show', 'create', 'edit']);
Route::get('trivia/getAllQuestions/{id}', 'ActivityController@getAllQuestions');
Route::get('trivia/{id}', 'ActivityController@activityId');
Route::post('actividad_d/Activity', 'ActivityController@store');
Route::get('showTrivia/{id}', 'ActivityController@showTrivia');

//Events

Route::post('createEvent', 'EventsController@createEvent')->name('createEvent');
Route::get('/getAllEvents', 'EventsController@indexEvents')->name('getAllEvents');
Route::get('/getAllEventsAdmin', 'EventsController@getAllEventsAdmin')->name('getAllEventsAdmin');
Route::get('editEvent/{id}', 'EventsController@findEvent')->name('editEvent');
Route::get('lastId', 'EventsController@lastID')->name('lastID');
Route::get('updatePadre/{id}', 'EventsController@Update_padre')->name('Update_padre');
Route::put('updateEvent', 'EventsController@updateEvent')->name('updateEvent');
Route::put('deleteEvent', 'EventsController@deleteEvent')->name('deleteEvent');

//Psychology

Route::get('/getAllUsers', 'PsychologyController@getUsersToInvitations')->name('getAllUsers');
Route::get('/getSolEvents', 'PsychologyController@eventsCalendarSol')->name('getSolEvents');
Route::get('/getSegEvents', 'PsychologyController@eventsCalendarSeg')->name('getSegEvents');
Route::get('/getCitaEvents', 'PsychologyController@eventsCalendarCita')->name('getCitaEvents');
Route::get('/getReuEvents', 'PsychologyController@eventsCalendarReu')->name('getReuEvents');
Route::post('createEventP', 'PsychologyController@createEvent')->name('createEventP');
Route::get('editEventP/{id}', 'PsychologyController@findEvent')->name('editEventP');
Route::put('updateEventP', 'PsychologyController@updateEvent')->name('updateEventP');
Route::put('deleteEventP', 'PsychologyController@deleteEvent')->name('deleteEventP');
Route::post('createReportP', 'StudentReportController@saveReport')->name('createReportP');
Route::post('/createReason', 'StudentReportController@createReason')->name('createReason');
Route::get('/getReason', 'StudentReportController@reasons')->name('getReason');
Route::get('/getAreasByNotes/{id}', 'StudentReportController@getAreas')->name('getAreasByNotes');

//Report Psychology
Route::get('/getStudentsList', 'StudentReportController@studentsVisits')->name('getStudentsList');
Route::get('/getReportStudent/{id}', 'StudentReportController@ReportVisits')->name('getReportStudent');

//Classroom and Students
Route::get('/getClassroomByInstitution/{id}', 'ClassroomController@classroomByInstitution')->name('getClassroomByInstitution');
Route::get('/getStudentByClassroom/{id}', 'ClassroomController@studentsForClassroom')->name('getStudentByClassroom');

Route::middleware('auth')->get('/actividad_d/{id}', 'ClassController@activityWeekId')->name('actividad_d');
Route::middleware('auth')->get('/actividad_d/getClass/{id}', 'ClassController@getClassId')->name('getClass');
Route::post('courseWeekly', 'CoursesController@courseWeekly')->name('courseWeekly');
Route::get('GetArearByUser', 'CoursesController@getAreaByUser')->name('GetArearByUser');
Route::get('getArearByTutor/{id}', 'CoursesController@getTutorAreas')->name('GetArearByTutor');
Route::get('GetAreasByStudent/{select}', 'CoursesController@getStudentNewAreas')->name('GetAreasByStudent');
//prueba push
// Rutas capturar actividades y entregas

Route::get('getAllActivitiesUser', 'ActivityController@getAllActivitiesRepositories')->name('getAllActivitiesUser');


Route::get('getEvenNearStudent/{id_area}/{id_classroom}', 'EventsController@eventNearStudent')->name('getEvenNearStudent');

Route::get('GetWeek', 'CoursesController@getWeek');
Route::delete('DeleteCicle/{id_cicle}', 'CoursesController@destroy');
Route::get('editGetWeek/{id_area}/{id_classroom}/{id_trimestre}', 'CoursesController@editGetWeek')->name('editGetWeek');
Route::get('editOneWeek/{id_area}/{id_classroom}/{id_trimestre}', 'CoursesController@editOneWeek')->name('editOneWeek');
Route::get('editOneCycle/{id}', 'CoursesController@oneCycle')->name('editOneCycle');
Route::get('viewGetWeek/{id_area}/{id_classrom}/{id_trimestre}', 'CoursesController@viewGetWeek')->name('viewGetWeek');
Route::get('showWeek/{id}', 'CoursesController@showWeek');
Route::put('updateCourseWeekly', 'CoursesController@updateCourseWeekly');
Route::resource('course_unit', 'Course_unitController', ['except' => 'show', 'create', 'edit']);;
Route::get('/home', 'HomeController@index')->name('home');
Route::post('/SaveTerms', 'HomeController@UserTerms')->name('SaveTerms');
Route::get('/getTerms', 'HomeController@getUserTerms')->name('getTerms');

//Almacenar las notas
Route::post('saveIndicator', 'ScoreController@saveIndicator')->name('saveIndicator');
Route::get('getIndicator/{id}', 'ScoreController@getIndicator')->name('getIndicator');
Route::post('saveScore', 'ScoreController@store')->name('saveScore');
Route::get('StudentsByArea/{id_1}/{id_2}', 'ScoreController@getStudentByArea')->name('StudentsByArea');
Route::post('deleteIndicator', 'ScoreController@deleteIndicator')->name('deleteIndicator');

// Chat
Route::resource('groups', 'GroupController');

Route::resource('conversations', 'ConversationController');

/* Capturar los mensahe de una conversacion */
Route::get('conversation/{id}', 'ConversationController@getConversation')->name('conversation');

Route::post('fileUpload', 'ConversationController@uploadFile')->name('fileUpload');


Route::post('fileDocument', 'ClassController@uploadFile')->name('fileDocument');
// actualizar documentos de las clases
Route::post('fileDocumentUpdate', 'ClassController@uploadFileUpdate')->name('fileDocumentUpdate');
// Actualizar una clase
Route::put('updateClass', 'ClassController@updateClass')->name('updateClass');

// Save audio Blop
Route::post('fileUploadAudio', 'ConversationController@saveAudio')->name('fileUploadAudio');

//Rutas foro

Route::get('/questions', 'QuestionController@index')->name('questions');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Route::resource('/questions_source', 'QuestionController');
Route::get('createQuestion', 'QuestionController@create')->name('createQuestion');

Route::post('storeQuestion', 'QuestionController@store')->name('storeQuestion');
Route::get('showQuestion/{id}', 'QuestionController@show')->name('showQuestion');

Route::get('editQuestion/{id}', 'QuestionController@edit')->name('editQuestion');
Route::post('updateQuestion', 'QuestionController@update')->name('updateQuestion');

Route::post('deleteQuestion/{id}', 'QuestionController@destroy')->name('deleteQuestion');
// route set for all answer for a particular question
// ---------------------------------------------------
Route::resource('/questions.answers', 'AnswerController')->except(['index', 'create', 'show']);

Route::post('storeAnswer', 'AnswerController@store')->name('storeAnswer');

/* Rutas de la mesajería
     */
Route::post('sendMessages', 'MessagingController@store')->name('sendMessages');
Route::put('updateMessages', 'MessagingController@update')->name('updateMessages');
Route::get('getReceivedMessage', 'MessagingController@showReceivedMessage')->name('showReceivedMessage');
Route::get('getSentMessage', 'MessagingController@showSentMessage')->name('showSentMessage');
Route::get('getMessage/{id}', 'MessagingController@showMessage')->name('getMessage');
Route::middleware('auth')->get('/enviados', function () {
    return view('mensajeEnv');
});
/* Rutas del administrador
     */

Route::get('getUsers', 'AdministratorController@indexUsers')->name('getUsers');
Route::get('getUsersClient', 'AdministratorController@getUsersClient')->name('getUsersClient');
Route::get('getUsersTutor', 'AdministratorController@getTutors')->name('getUsersTutor');
Route::get('getStudents', 'AdministratorController@indexStudents')->name('getStudents');
Route::get('getTeachers', 'AdministratorController@indexTeachers')->name('getTeachers');
Route::get('getAnyTeachers', 'AdministratorController@indexAnyTeachers')->name('getAnyTeachers');
Route::get('getUsersAssigned', 'AdministratorController@indexStudentsTeachersAssigned')->name('getUsersAssigned');
Route::post('assignStudents', 'AdministratorController@assignStudents')->name('assignStudents');
Route::put('assignParentToStudent/{id_student}', 'AdministratorController@assignParentsToStudent');
Route::post('assignTeachers', 'AdministratorController@assignTeachers')->name('assignTeachers');
Route::get('getState', 'AdministratorController@getAllState')->name('getState');
Route::get('getInstitution', 'AdministratorController@indexInstitution')->name('getInstitution');
Route::get('getSections', 'AdministratorController@getSections')->name('getSections');
Route::get('getCity/{id}', 'AdministratorController@findCity')->name('getCity');
Route::post('createInstitution', 'AdministratorController@createInstitution')->name('createInstitution');
Route::get('findInstitution/{id}', 'AdministratorController@findInstitution')->name('findInstitution');
Route::put('updateInstitution', 'AdministratorController@updateInstitution')->name('updateInstitution');
Route::post('createGrade', 'AdministratorController@createGrade')->name('createGrade');
Route::post('createClassroom', 'AdministratorController@createClassroom')->name('createClassroom');
Route::post('createArea', 'AdministratorController@createArea')->name('createArea');
Route::get('getGrade', 'AdministratorController@findGrade')->name('getGrade');
Route::get('getGradeTutor', 'AdministratorController@getClassroomTutor')->name('getGradeTutor');
Route::get('getArea', 'AdministratorController@findArea')->name('getArea');
Route::get('getClassroom', 'AdministratorController@findClassroom')->name('getClassroom');

//Landing
Route::get('/landing', function () {
    return view('landing');
});
Route::post('/createContact', 'LandingController@store')->name('createContact');

// route set for favorite answer
// -------------------------------
Route::post('/answers/{answer}/accept', 'AcceptAnswerController')->name('answers.accept');

// route set for favorite question mark
// -----------------------------------

Route::post('/questions/{question}/favorite', 'FavoriteQuestionController@store')->name('questions.favorite');
Route::delete('/questions/{question}/favorite', 'FavoriteQuestionController@destroy')->name('questions.favorite');

// voting the question
// --------------------

Route::post('/questions/{question}/vote', 'VoteQuestionController')->name('questions.vote');

// voting the answer
// --------------------
Route::post('/answers/{answer}/vote', 'VoteAnswerController')->name('answers.vote');

// excel
Route::get('/excel', function () {
    return Excel::download(new ProductsExport(2020), 'users.xlsx');
});
// chart
Route::get('chart', 'UserChartController@index');

//pdf
Route::get('pdfview', array('as' => 'pdfview', 'uses' => 'BestInterviewQuestionController@pdfview'));

//importacion profesores
$router->get('import', 'ImportController@importTeacherClassroom');
//importacion estudiantes
$router->get('importStudent', 'ImportController@importStudentClassroom');
// Carga masiva usuario
$router->get('importUsers', 'ImportController@importUsers');
Route::middleware('auth')->get('/importar_adm', function () {
    return view('imports.importB');
});
// }]);
// Modulo del repositorio de clases

Route::middleware('auth')->get('/repository', function () {
    return view('repository');
});
Route::middleware('auth')->get('/createrepository', function () {
    return view('repositoryCreate');
});
Route::middleware('auth')->get('/repository/students/{id_repo}', function (String $id_repo) {
    return view('repositoryStudents')->with('id_repo', $id_repo);
});
Route::middleware('auth')->get('/repository/comments/{id_student}/{id_repo}', function (String $id_student, String $id_repo) {
    return view('repositoryComments')->with('id_student', $id_student)->with('id_repo', $id_repo);
});
Route::middleware('auth')->get('/repository/student/comment/{id_repo}', function (String $id_repo) {
    return view('repositoryStudentComments')->with('id_repo', $id_repo);
});
Route::middleware('auth')->get('/repository/student', function () {
    return view('repositoryStudentView');
});
Route::middleware('auth')->get('/repository/student/upload/{id_repo}', function (String $id_repo) {
    return view('repositoryStudentUpload')->with('id_repo', $id_repo);
});
Route::post('/saveRepository', 'RepositoryController@store')->name('saveRepository');
Route::get('/getRepository/{id_area}/{id_classroom}', 'RepositoryController@show')->name('getRepository');
Route::get('/getRepoStudent/{id_area}/{id_classroom}', 'RepositoryController@showStudent')->name('getRepositoryStudent');
Route::get('/getRepositoryStudents/{id_repo}', 'RepositoryController@showRepositoryStudents')->name('getRepositoryStudents');
Route::get('/showRepository/{id_repo}', 'RepositoryController@showRepository')->name('showRepository');
Route::get('/showRepositoryComments/{id_student}/{id_repo}', 'RepositoryController@showRepositoryComments')->name('showRepositoryComments');
Route::get('/showRepositoryCommentsStudents/{id_repo}', 'RepositoryController@showRepositoryCommentsStudents')->name('showRepositoryCommentsStudents');
Route::get('/api/repository/student', 'RepositoryController@getPendingRepositories');

Route::post('/saveRepoComment', 'RepositoryController@storeRepositoryComment')->name('saveRepoComment');
Route::post('/saveRepoStUpload', 'RepositoryController@storeRepositoryStudent')->name('saveRepoStUpload');

/*login personalizado permite verificar suscripcion*/
Route::get('/', function () {
    return view('homeSkills');
});
Route::get('/loginNew', function () {
    return view('auth.login');
})->name('loginNew');
Route::get('/registerNew', function () {
    return view('auth.register');
})->name('registerNew');
Route::get('/tutorRegisterNew', function () {
    return view('tutorRegister');
})->name('tutorRegisterNew');
Route::post('/login2', 'UserController@loginWeb')->name('login2');
Route::post('/login/client/web', 'UserController@loginClientWeb')->name('login_client_web');
Route::post('/resetPassword', 'UserController@resetPassword')->name('resetPassword');
Route::post('users_save', 'UserController@store')->name('users_save');
Route::get('Courses_save', 'CoursesController@storeNew')->name('Courses_save');
Route::get('/logout2', 'UserController@logOut')->name('logout2');
Route::get('/showCoord', 'UserController@showCoordinator');
Route::delete('/destroyUser/{id_user}', 'UserController@destroy');
Route::get('/showSpecificCoord/{id}', 'UserController@showSpecificCoord');



//LECTIVAS
//Módulo de electivas usuario Administrador
Route::middleware('auth')->get('/admin/lectives', function () {
    return view('lectivesAdm');
});
Route::middleware('auth')->get('/admin/configuracion', function () {
    return view('configurationAdm');
});
Route::middleware('auth')->get('/admin/lectives-teacher', function () {
    return view('lectivesAdmAssingTeacher');
});
//Módulo de electivas usuario Docente
Route::middleware('auth')->get('/teacher/lectives/planning', function () {
    return view('lectivesTeacherPlanning');
});
Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}', function (int $id_lective_planification) {
    return view('lectivesTeacherPlanningEdit')->with('id_lective_planification', $id_lective_planification);
});
Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}/indicators', function (int $id_lective_planification) {
    return view('lectivesTeacherIndicators')->with('id_lective_planification', $id_lective_planification);
});

Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}/weekly', function (int $id_lective_planification) {
    return view('lectivesTeacherWeekly')->with('id_lective_planification', $id_lective_planification);
});

Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}/weekly/{id_weekly_plan}/course', function (int $id_lective_planification, int $id_weekly_plan) {
    return view('lectivesTeacherCoursesEdit')->with('id_lective_planification', $id_lective_planification)->with('id_weekly_plan', $id_weekly_plan);
});
Route::middleware('auth')->get('/teacher/lectives/planning/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_course}/activities', function (int $id_lective_planification, int $id_weekly_plan, $id_course) {
    return view('lectivesTeacherActivity')->with('id_lective_planification', $id_lective_planification)->with('id_weekly_plan', $id_weekly_plan)->with('id_course', $id_course);
});

Route::middleware('auth')->get('/teacher/lectives/activities', function () {
    return view('lectivesTeacherActivities');
});


Route::middleware('auth')->get('/teacher/lectives/courses', function () {
    return view('lectivesTeacherCourses');
});
Route::middleware('auth')->get('/teacher/lectives/students', function () {
    return view('lectivesTeacherStudents');
});

Route::middleware('auth')->get('/teacher/lectives/notes', function () {
    return view('lectivesTeacherNotes');
});
Route::middleware('auth')->get('/teacher/lectives/board', function () {
    return view('lectivesTeacherBoard');
});
//Módulo de electivas usuario Estudiante
Route::middleware('auth')->get('/student/lectives/courses', function () {
    return view('lectivesStudentCourses');
});

Route::middleware('auth')->get('/student/lectives/activities', function () {
    return view('lectivesStudentActivities');
});



// CLASES
Route::get('GetNameWeekly/{id_class}', 'ClassController@getWeeklyName')->name('GetNameWeekly');

Route::middleware('auth')->get('/docente/clases', function () {
    return view('teacherCourses');
});
Route::get('/admin/modulo/{id_module}', function (int $id_module) {
    return view('adminModule')->with('id_module', $id_module);
});

Route::middleware('auth')->get('/docente/modulo/{id_module}', function (int $id_module) {
    return view('teacherModule')->with('id_module', $id_module);
});

Route::middleware('auth')->get('/docente/modulo/{id_module}/clase/nueva', function (int $id_module) {
    return view('teacherCourse')->with('id_module', $id_module)->with('id_class', 0);
});

Route::middleware('auth')->get('/docente/modulo/{id_module}/clase/{id_class}', function (int $id_module, int $id_class) {
    return view('teacherCourse')->with('id_module', $id_module)->with('id_class', $id_class);
});

Route::middleware('auth')->get('/docente/estudiantes', function () {
    return view('teacherStudents');
});

Route::middleware('auth')->get('/docente/area/{id_area}/curso/{id_classroom}/estudiante/{id_student}', function (int $id_area, int $id_classroom, int $id_student) {
    return view('teacherStudent')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('id_student', $id_student);
});

Route::middleware('auth')->get('/docente/area/{id_area}/curso/{id_classroom}/estudiante/{id_student}/modulo/{id_module}', function (int $id_area, int $id_classroom, int $id_student, int $id_module) {
    return view('teacherStudent')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('id_student', $id_student)->with('id_module', $id_module);
});

Route::middleware('auth')->get('/docente/area/{id_area}/curso/{id_classroom}/estudiante/{id_student}/modulo/{id_module}/clase/{id_class}', function (int $id_area, int $id_classroom, int $id_student, int $id_module, int $id_class) {
    return view('teacherStudent')->with('id_area', $id_area)->with('id_classroom', $id_classroom)->with('id_student', $id_student)->with('id_module', $id_module)->with('id_class', $id_class);
});


Route::middleware('auth')->get('/estudiante/clases', function () {
    return view('studentCourses');
});

Route::middleware('auth')->get('/estudiante/modulo/{id_module}', function (int $id_module) {
    return view('studentModule')->with('id_module', $id_module);
});

Route::middleware('auth')->get('/estudiante/modulo/{id_module}/clase/nueva', function (int $id_module) {
    return view('studentCourse')->with('id_module', $id_module)->with('id_class', 0);
});

Route::middleware('auth')->get('/estudiante/modulo/{id_module}/clase/{id_class}', function (int $id_module, int $id_class) {
    return view('studentCourse')->with('id_module', $id_module)->with('id_class', $id_class);
});

Route::middleware('auth')->get('/admin/clases', function () {
    return view('adminCourses');
});
Route::middleware('auth')->get('/tutor/{tutor_id}/perfil', function (int $tutor_id) {
    return view('tutorProfile')->with('tutor_id',  $tutor_id);
});
Route::middleware('auth')->get('/tutor/cronograma', function () {
    return view('tutorSchedule');
});
Route::middleware('auth')->get('/tutor/evento/{scheduleStudent_id}', function (int $scheduleStudent_id) {
    return view('tutorEvent')->with('scheduleStudent_id', $scheduleStudent_id);
});
Route::middleware('auth')->get('/tutor/evento', function () {
    return view('tutorEvent')->with('scheduleStudent_id', 0);
});

//Ruta para crear codigos de vinculación
Route::middleware('auth')->get('/tutorCode', function () {
    return view('tutorCode')->with('user', Auth::user()->type_user);;
});

//Ruta para observar que estudiantes estan vinculados por codigo
Route::middleware('auth')->get('/tutorCodeStudent', function () {
    return view('tutorCodeStudent');
});

//Ruta de vinculación de codigo
Route::middleware('auth')->get('/tutorCodeVinculation', function () {
    return view('tutorCodeVinculation');
});
//Horario de tutorias vinculados con cotigo
Route::middleware('auth')->get('/tutorCodeSchedule', function () {
    return view('tutorCodeSchedule');
});
Route::resource('tutorRegister', 'TutorProfileController');

Route::middleware('auth')->get('/estudiante/tutorias/{scheduleStudent_id}', function (int $scheduleStudent_id) {
    return view('studentSchedule')->with('scheduleStudent_id', $scheduleStudent_id);
});
Route::middleware('auth')->get('/estudiante/tutorias', function () {
    return view('studentSchedule')->with('scheduleStudent_id', 0);
});
Route::middleware('auth')->get('/estudiante/nueva_clase', function () {
    return view('studentClassList');
});

Route::post('/paypal/purchase/complete', 'PaypalController@getOrder');

Route::put('/test', 'ClassController@deactivateClass')->name('test');

//api rest

Route::get('/api/achievement/{id_achievement}/indicator', 'IndicatorController@getByAchievement');
Route::get('/api/planification/{id_planification}/indicator/allForPlanification', 'IndicatorController@getByPlanification');
Route::put('/api/teacher/activity/{id_activity}/student/{id_student}/score', 'ActivityController@saveTeacherScore');
Route::get('/api/teacher/module/{id_module}/class/{id_course}', 'ClassController@getCourse');
Route::put('/api/teacher/module/{id_classroom}/class', 'ClassController@saveCourse');
Route::put('/api/student/module/{id_module}/class/{id_course}/resource/{id_resource}/interaction', 'ClassController@saveCourseContentInteraction');
Route::put('/api/student/module/{id_module}/class/{id_course}/activity/{id_activity}/interaction', 'ClassController@saveActivityInteraction');
Route::put('/api/student/module/{id_module}/class/{id_course}/activity/{id_activity}/question/{id_question}/response', 'ClassController@saveActivityQuestionResponse');
Route::post('/api/file/upload/editor-content', 'UploadController@uploadEditorContent');
Route::put('/api/admin/module/{id_module}/class/{id_course}/{state}', 'ClassController@updateClassEnableEdition');
Route::get('/api/student/activity', 'ActivityController@getByCurrentStudent');
Route::get('/api/student/event', 'EventsController@studentEvents');
Route::get('/api/event/getStudentsClass', 'EventsController@getStudentsClassForParents');
Route::put('/api/teacher/area/{area_id}/classroom/{classroom_id}/calification', 'CoursesController@teacherScoreUpdate');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student', 'CalificationController@getAllStudents');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student/{student_id}', 'CalificationController@getByStudent');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student/{student_id}/module', 'CalificationController@getAllModules');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student/{student_id}/module/{module_id}/class', 'CalificationController@getAllClasses');
Route::get('/api/student/{student_id}', 'StudentController@get');
Route::get('/api/student/classroom/{student_id}', 'StudentController@student');
Route::get('/api/teacher/area/{area_id}/classroom/{classroom_id}/student/{student_id}/module/{module_id}/class/{class_id}', 'CalificationController@getByClass');
Route::get('/api/event/today', 'EventsController@todayEvents');
Route::get('/api/admin/configuration/property/{code}', 'ConfigurationController@getPropertyByCode');
Route::put('/api/admin/configuration/property/{code}', 'ConfigurationController@setProperty');
Route::get('/api/student/{student_id}/calification-report', 'CalificationController@generateTemplateCalification');
Route::get('/api/tutor/area/{area_id}/classroom/{classroom_id}/schedule', 'TutorController@GetAllSchedule');
Route::post('/api/tutor/area/{area_id}/classroom/{classroom_id}/schedule', 'TutorController@AddSchedule');
Route::put('/api/tutor/area/{area_id}/classroom/{classroom_id}/schedule/{schedule_id}', 'TutorController@UpdateSchedule');
Route::delete('/api/tutor/area/{area_id}/classroom/{classroom_id}/schedule/{schedule_id}', 'TutorController@DeleteSchedule');
Route::get('/api/student/area/{area_id}/classroom/{classroom_id}/schedule/{date_find}', 'TutorController@GetAvailableSchedule');
Route::get('/api/student/area/{area_id}/code/{code_id}/schedule/{date_find}', 'TutorController@GetAvailableScheduleCode');
Route::put('/api/student/area/{area_id}/classroom/{classroom_id}/schedule/programe', 'TutorController@ProgrameSchedule');
Route::get('/api/tutor-schedule/event', 'TutorController@GetScheduleEvents');
Route::get('/api/tutor-schedule/event/getSchedulesByTeacher', 'TutorController@GetScheduleEventsTeacher');
Route::get('/api/tutor-schedule/event/{schedulestudent_id}', 'TutorController@GetScheduleStudent');
Route::get('/api/tutor/{user_id}/profile', 'UserProfileController@GetByUserId');
Route::put('/api/tutor-schedule/event/{schedulestudent_id}/link', 'TutorController@UpdateLinkMeet');
Route::get('/api/tutor-schedule/event/data/{schedule_id}/{schedulestudent_id}', 'TutorController@tutorScheduleData');
Route::get('/api/plan/event/data/{plan_type}', 'PlansController@getData');
Route::get('/getScheduleCode/{id_code}', 'TutorController@getScheduleCodes');
Route::resource('vinculationsTutor', 'VinculationTutorStudentController');
Route::get('getVinculationsTutor', 'VinculationTutorStudentController@getVinculationsTutor');
Route::get('getVinculationsTutorMessage', 'VinculationTutorStudentController@getVinculationsTutorMessage');
Route::get('/getClassroomAndStudent', 'TutorController@getClassroomAndUsers');

//TutorCode
Route::resource('codes', 'TutorCodeController');
Route::get('/validateCode/{code}', 'TutorCodeController@validateCode');
Route::get('/getCodesPerUser/{id}', 'TutorCodeController@codesPerUser');
Route::post('/sendMailCode', 'TutorCodeController@shareCodeEmail');

Route::get('/api/lectives', 'LectivesController@getLectives');
Route::get('/api/lectives/planification/{id_lective_planification}', 'LectivesController@getPlanificationDetail');
Route::put('/api/lectives/planification', 'LectivesController@savePlanificationDetail');
Route::put('/api/lectives/planification/{id_lective_planification}/weekly', 'LectivesController@saveWeeklyPlanification');
Route::get('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course', 'LectivesController@getWeeklyPlanificationDetail');
Route::put('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course', 'LectivesController@saveWeeklyPlanificationDetail');
Route::get('/api/lectives/planification/{id_lective_planification}/student', 'LectivesController@getPlanificationStudents');
Route::put('/api/lectives/planification/{id_lective_planification}/student', 'LectivesController@addStudents');
Route::delete('/api/lectives/planification/{id_lective_planification}/student/{id_student}', 'LectivesController@removeStudent');
Route::get('/api/lectives/student/find/{content}', 'LectivesController@findStudents');
Route::get('/api/lectives/planification/{id_lective_planification}/achievement/{id_lective_achievement}', 'LectivesController@getIndicatorByPlanificationAchievement');
Route::put('/api/lectives/planification/{id_lective_planification}/achievement', 'LectivesController@saveIndicator');
Route::put('/api/lectives/planification/{id_lective_planification}/achievement/{id_lective_indicator}', 'LectivesController@updateIndicator');
Route::delete('/api/lectives/planification/{id_lective_planification}/indicator/{id_lective_indicator}', 'LectivesController@removeIndicator');
Route::get('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_class}', 'LectivesController@getCourse');
Route::put('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_class}/activity', 'LectivesController@saveActivity');
Route::get('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_class}/activity', 'LectivesController@getActivities');
Route::get('/api/lectives/planification/{id_lective_planification}/activities', 'LectivesController@getActivitiesByPlan');
Route::put('/api/lectives/planification/{id_lective_planification}/weekly/{id_weekly_plan}/course/{id_class}/activity/{id_activity}/module/ENCUESTA_UNICA_RTA/question/{id_question}', 'QuestionController@responseQuestiononLective');
Route::put('/api/planification/copy', 'CoursesController@copyInformation');
Route::put('/api/lectives/planification/copy', 'CoursesController@copyInformationLectives');

//New Routes Class Lectives
Route::get('/api/lectives/class/{id_weekly_plan}', 'LectivesController@showDataClass');
Route::get('getWeeks/{id_lective_planification}', 'LectivesController@getWeeks')->name('getWeeks');
Route::put('/api/lectives/{id_weekly_plan}/class', 'LectivesController@saveClass');
Route::get('getNameLectiveWeekly/{id_class}', 'LectivesController@getLectiveWeeklyName')->name('GetNameWeekly');
Route::get('/getDataClass/{id_module}/{id_course}', 'LectivesController@getDataClass');

//parents

Route::resource('/parents', 'ParentsController');
Route::get('/getInvitations', 'ParentsController@getInvitatios');
Route::get('/getParents', 'ParentsController@getParents');
Route::get('/invitations', 'ParentsController@getUsersToInvitations');
Route::get('/getAreas', 'ParentsController@getAreas');
Route::get('/getNotes/{id_student}/{id_area}/{id_classroom}', 'ParentsController@getNotes');
Route::get('/dataObserver', 'ParentsController@getDataObserverStudents');
Route::view('/getParentsObserver', 'getParentsObserver');
//Ruta para aprovar la salida pedagogica para acudientes;
Route::get('getPedagogicalToAprove', 'ParentsController@getPedagogicToPermission');
Route::middleware('auth')->get('/parentsPedagogic', function () {
    return view('parentsPedagogic');
});

//Ruta para Permisos de salidas Pedagogicas
Route::resource('permissionPedagogics', 'PermissionToPedagogicsController');
Route::middleware('auth')->get('/permissionPedagogic', function () {
    return view('permissionPedagogic');
});

//psicology
Route::resource('/historyPsicology', 'HistoryPsicologyController');
Route::resource('/followUps', 'FollowUpsController');
Route::resource('/comunicates', 'ComunicatesController');

//Observer
Route::resource('/observer', 'ObserverController');
Route::get('/dataUsers', 'ObserverController@getDataParentsStudents');

//School Government
Route::resource('/schoolGobernment', 'SchoolGovernmentController');
Route::middleware('auth')->get('/legislation', function () {
    return view('legislation');
});
Route::middleware('auth')->get('/governmentMembers', function () {
    return view('gobernmentMembers');
});
Route::get('/getLegislation', 'SchoolGovernmentController@getLegislation');
Route::resource('/members', 'SchoolGovernmentMembersController');
Route::middleware('auth')->get('/reportsGovernment', function () {
    return view('reportsGovernment');
});

Route::post('GetCoursesInformation', 'SchoolGovernmentController@getCoursesInformation');
Route::get('showUser/{userid}', 'SchoolGovernmentController@user');
Route::get('getAllAreas', 'SchoolGovernmentController@getAllAreas');
Route::get('getAllStudents', 'SchoolGovernmentController@students');
Route::get('GetAreaTeacher/{idTeachers}', 'SchoolGovernmentController@areaTeacher');

//Route for download reports Government
Route::get('reportStudents', 'SchoolGovernmentController@getReportStudents');
Route::get('GetMateriasToReport', 'SchoolGovernmentController@reportAllMateriasTeachers');
Route::get('GetAreaToReport/{idTeachers}', 'SchoolGovernmentController@reportTeacher');
Route::get('reportCourse/{id_area}/{id_classroom}/{teacher}/{area}', 'SchoolGovernmentController@reportCourse');

Route::get('reportAllCourse/{classroom}', 'SchoolGovernmentController@reportAllCourse');
Route::get('reportNotes/{area_id}/{classroom_id}/{teacher_name}/{area_name}', 'SchoolGovernmentController@reportNotes');
Route::get('reportAllNotes', 'SchoolGovernmentController@reportAllNotes');


Route::get('GetPlanificationTeacher/{teacherId}/{id_area}/{id_classroom}/{teacher}', 'SchoolGovernMentController@reportPlanificationTeacher');
Route::get('GetPlanificationQuaterlyTeacher/{teacherId}/{id_area}/{id_classroom}/{teacher}', 'SchoolGovernMentController@reportPlanificationQuaterlyTeacher');
Route::get('GetPlanificationCoursesTeacher/{id_area}/{id_classroom}/{teacher}', 'SchoolGovernMentController@reportPlanificationCoursesTeacher');

//Staments Of Government School
Route::resource('staments', 'StamentsController');
Route::get('getStaments', 'StamentsController@getStaments');

//chat Stament
Route::get('/getChatAsigment', 'StamentsChatController@getStamentsByUser');
Route::get('getChat/{chat}', 'StamentsChatController@getChats');
Route::get('getAllStudents', 'SchoolGovernmentController@students');


//Modulo para habilitar eliminacion de clases o ciclos
// Route::resource('deleteClassAndCicles', 'DeleteClassAndCiclesController');
// Route::get('getPermissions', 'DeleteClassAndCiclesController@getPermissions');

//Modulo para registrar las asistencias
Route::resource('assistance/{id_area}/{id_classroom}', 'AssistanceController', ['parameters' => ['{id_class}' => 'idclass', '{id_classroom}' => 'idClassroom']]);
Route::get('getClassroom/{id_area}/{id_classromm}', 'AssistanceController@getClassroom');
Route::get('getAssistants/{classroom_name}', 'AssistanceController@showAssistance');
Route::get('assistance/{id_student}', 'AssistanceController@show');
Route::put('assistance/{id_assistance}', 'AssistanceController@update');
Route::delete('assistance/{id_assistance}', 'AssistanceController@destroy');

//Modulo de motivo de faltas de asistencias
Route::resource('motiveAssistants', 'AssitantsMotivesController');
Route::get('getMotives', 'AssitantsMotivesController@getMotives');

//Modulo de Efectividad

Route::resource('effectiveness', 'EffectivenessController');
Route::get('getEffectiveness', 'EffectivenessController@getEffectiveness');


//Coordinador
Route::middleware('auth')->get('/claseCoord', function () {
    return view('coursesCoord');
});
Route::resource('materiasCoord', 'CoordinatorController');
Route::get('showPrimaryStudents', 'CoordinatorController@showPrimaryStudents');
Route::get('showSecundaryStudents', 'CoordinatorController@showSecundaryStudents');
Route::get('showStudentsGrade', 'CoordinatorController@showStudentsGrade');
Route::get('showClassPrimary', 'CoordinatorController@getPrimaryCourses');
Route::get('showClassSecundary', 'CoordinatorController@getSecundaryCourses');
Route::get('showAllClass', 'CoordinatorController@getAllCourses');
Route::get('getStudentsPrimary', 'CoordinatorController@getStudentsPrimary');
Route::get('getStudentsSecundary', 'CoordinatorController@getStudentsSecundary');
Route::get('getAllStudents', 'CoordinatorController@getAllStudents');

Route::resource('utils', 'UtilsController');
Route::get('getUtils', 'UtilsController@getUtils');
Route::get('getGrades', 'UtilsController@getGrades');

Route::resource('pedagogic', 'PedagogicalCourseController');
Route::get('getPedagogic', 'PedagogicalCourseController@getPedagogic');
Route::middleware('auth')->post('/update/pedagogical/circular/{id}', 'PedagogicalCourseController@uploadFileUpdate');

//Ruta para permiso de elimminar Ciclo
Route::resource('requestPermission', 'RequestPermissionsController');
Route::put('updatedResponded_at/{id}', 'RequestPermissionsController@updatedResponded_at');

//Ruta para Componente de alimentos
Route::resource('foods', 'FoodComponentController');
Route::get('getFoods', 'FoodComponentController@getFoodInformation');
Route::get('getCoursesAndStudents', 'FoodComponentController@getCoursesAndStudents');

//Ruta para componente de Enfermeria
Route::resource('nursing', 'NursingComponentController');
Route::get('getNursing', 'NursingComponentController@getNursignData');

//Ruta para estudiantes PIAR
Route::resource('piar', 'PIARController');
Route::get('getPIARStudents', 'PIARController@getPIARStudents');
Route::get('PIARStudentsByArea/{id_1}/{id_2}', 'PIARController@getPIARStudentsArea');

// Route::resource('piarPlanification','PIARPlanificationController');
Route::middleware('auth')->get('/piarPlanification/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('piarPlanification')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});

Route::resource('piarAnualPlanification', 'PIARAnualPlanificationController');
Route::get('getPlanificationPiar', 'PIARAnualPlanificationController@getData');

Route::middleware('auth')->get('/piarAnualPlanification/{id_area}/{id_classroom}', function (String $id_area, String $id_classroom) {
    return view('piarAnualPlanification')->with('id_area', $id_area)->with('id_classroom', $id_classroom);
});

Route::resource('piarClass', 'PIARClassController');
Route::get('getClass', 'PIARClassController@getClass');

//Reporte a padres
Route::resource('resportSendParents', 'ReportsParentsController');
Route::get('getAllRecentActivities/{area_id}', 'ReportsParentsController@getAllRecentActivities');
Route::get('getAllAssistances/{user_name}/{id_area}/{id_classroom}', 'ReportsParentsController@getAllAssistances');
Route::get('getNotesBySudentAndArea/{student_id}', 'ReportsParentsController@getNotesBySudentAndArea');
Route::post('sendSingleMessage', 'ReportsParentsController@sendSingleMessage');
Route::get('getReportsByParent', 'ReportsParentsController@getReportsByParent');

// excel
Route::get('/excelClass', function () {
    return Excel::download(new ClassExport(2020), 'class.xlsx');
});
Route::get('sqlQuery', 'TestingController@sqlQuery')->name('sqlQuery');

Route::middleware('auth')->get('/monthlyReport', function () {
    return view('monthlyReportParents');
});

Route::get('ReportWeeklyPlan', 'AdminReportController@ReportWeeklyPlan');
Route::get('ReportAnnualPlanification', 'AdminReportController@ReportAnnualPlanification');

Route::middleware('auth')->get('/reportAdmin', function () {
    return view('reportAdmin');
});
Route::middleware('auth')->get('/downloadReportObjetives/{id_achievement}/{id_planification}/{objetivesName}/{areaName}', 'CoursesController@downloadReportObjetives');
Route::middleware('auth')->get('/downloadReportCycles/{id_area}/{id_classroom}/{id_trimestre}', 'CoursesController@downloadReportCycles');
//Paypal pay
Route::middleware('auth')->get('/compra/pagar/paypal/{data_string}', 'PurchasedController@payPaypal');
Route::middleware('auth')->get('/compra/pagar/plan/paypal/{data_string}', 'PurchasedController@payPaypalPlan');
Route::middleware('auth')->get('/compra/currencyExchange', 'PurchasedController@currencyExchange');

//Mercadopago
Route::middleware('auth')->get('/compra/pagar/mercadopago/{data_string}', 'PurchasedController@payMercadoPago');
Route::middleware('auth')->get('/compra/pagar/resultado/mercadopago/{data_string}', 'PurchasedController@resultMercadopago');

//Contract
Route::get('/contractData', function () {
    return view('contractData');
});
Route::get('/contractView', function () {
    return view('contractView');
});
Route::get('getContract', 'ContractController@show')->name('show');

Route::post('/contract', 'ContractController@downloadPDF');

Route::put('/updateContract', 'ContractController@updateContract');

//Actas Padres
Route::middleware('auth')->post('/saveProceedings', 'ProceedingsParentsController@save');
Route::middleware('auth')->post('/saveProceedingsFile', 'ProceedingsParentsController@uploadFile');
Route::middleware('auth')->get('/getProceedings', 'ProceedingsParentsController@indexProceedings');
Route::middleware('auth')->get('/getProceedingsUrl/{id}', 'ProceedingsParentsController@urlArchive');
Route::middleware('auth')->post('/update/acta/parents/{id}', 'ProceedingsParentsController@uploadFileUpdate');
Route::middleware('auth')->post('/update/acta/parents/firmar/{id}', 'ProceedingsParentsController@uploadFileUpdateSign');
Route::get('/api/proceedings/parents/pdf/{id}', 'ProceedingsParentsController@generatePdf');
Route::middleware('auth')->post('/updateViewedProceedings/{id}', 'ProceedingsParentsController@updateViewed');
Route::middleware('auth')->get('/api/proceedings/parents/download/{id}', 'ProceedingsParentsController@downloadProceedings');

//Actas Generales
Route::middleware('auth')->post('/saveProceedings/general', 'ProceedingsGeneralController@save');
Route::middleware('auth')->post('/saveProceedingsFile/general', 'ProceedingsGeneralController@uploadFile');
Route::middleware('auth')->get('/getProceedings/general', 'ProceedingsGeneralController@indexProceedings');
Route::middleware('auth')->get('/getProceedingsUrl/general/{id}', 'ProceedingsGeneralController@urlArchive');
Route::middleware('auth')->post('/update/acta/general/{id}', 'ProceedingsGeneralController@uploadFileUpdate');
Route::middleware('auth')->post('/update/acta/general/firmar/{id}', 'ProceedingsGeneralController@uploadFileUpdateSign');
Route::get('/api/proceedings/general/pdf/{id}', 'ProceedingsGeneralController@generatePdf');
Route::middleware('auth')->post('/updateViewedProceedings/general/{id}', 'ProceedingsGeneralController@updateViewed');
Route::middleware('auth')->get('/api/proceedings/general/download/{id}', 'ProceedingsGeneralController@downloadProceedings');
Route::middleware('auth')->get('/api/proceedings/general/users', 'ProceedingsGeneralController@getUsersToProceedings');

Route::resource('CalLectivesActivities', 'CalLectivesActivitiesController');
Route::get('getLectivesActivitiesCal/{lective_planification}', 'CalLectivesActivitiesController@getLectivesActivitiesCal');
Route::get('getNotesStudents', 'CalLectivesActivitiesController@getNotesStudents');
Route::middleware('auth')->get('/cycle/teacher/{id_area}/{id_classroom}/{id_trimestre}', 'TutorController@cyclesByTeacher');
Route::post('/createTrimestre', 'TrimestreController@createTrimestre');
Route::get('/getTrimestres', 'TrimestreController@getTrimestre');
Route::get('/getActivitiesTeacher/{id_area}/{id_classroom}', 'ActivityController@getActivitiesTeacher');

Route::resource('/trimestres', 'TrimestresController');
Route::middleware('auth')->get('/quarters', function () {
    return view('trimestres');
});
Route::get('getAreaByClient','CoursesController@getAreaByClient');
Route::get('getTutorCycle/{id_tutor}/{id_trimestre}/{id_area}','ClientController@getTutorCycle');
Route::get('getClass/{id_weekly_plan}','ClientController@getClass');
Route::middleware('auth')->get('/clasesClient', function () {
    return view('clasesCliente');
});
Route::middleware('auth')->get('/checkPay/{id_area}/{code}', 'EnableSubjectController@checkPay');
Route::resource('subject','EnableSubjectController');
Route::put('updateMessajeView/{id_sender}','ViewMessagesController@update');

//TutorClassroom
Route::middleware('auth')->get('nameClassroom/{id_classroom}', 'TutorClassroomController@nameClassroom');

//EnableTour
Route::middleware('auth')->get('enableTour/{condition}', 'EnableTourController@enableTour');
Route::put('disableTour/{condition}', 'EnableTourController@disableTour');

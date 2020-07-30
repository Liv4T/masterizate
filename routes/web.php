<?php

use App\Message;
use App\User;
use App\Events\MessagePosted;
use App\Exports\ProductsExport;
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


Route::get('/', function () {
    return view('home');
});
Route::get('/user', function () {
    return view('user');
});
Route::get('/board', function () {
    return view('welcome');
});
Route::get('/memoria', function () {
    return view('memory');
});
Route::get('/task', function () {
    return view('class');
});
Route::get('/resume', function () {
    return view('resume');
});
Route::get('/class', function () {
    return view('class');
});
Route::get('/Clases', function () {
    return view('clasesSt');
});
Route::get('/notas_d', function () {
    return view('notasDocente');
});
Route::get('/actividad_docente', function () {
    return view('actividadVD');
});
// Route::get('/board', function () {
//     return view('board');
// });
// Route::get('/boards', function () {
//      return view('dboard');
// });

Route::get('/free', function () {
    return view('free');
});
Route::get('/freeUnit', function () {
    return view('freeU');
});
Route::get('/course', function () {
    return view('course');
});
Route::get('/crear_semana', function () {
    return view('semanal');
});
Route::get('/act_semana', function () {
    return view('semanalAct');
});
Route::get('/unit', function () {
    return view('unit');
});
Route::get('/payments', function () {
    return view('car');
});
Route::get('/ccourse', function () {
    return view('list');
});
Route::get('/listactivity', function () {
    return view('lista');
});
Route::get('/actividad_g', function () {
    return view('actividadgd');
});
Route::get('/sincro', function () {
    return view('sincro');
});
Route::get('/evaluation', function () {
    return view('evaluation');
});
Route::get('/vcourse', function () {
    return view('view');
});
Route::get('/vactivity', function () {
    return view('activ');
});
Route::get('/consult', function () {
    return view('consult');
});
Route::get('/manual', function () {
    return view('cuestions');
});
Route::get('/mycourse', function () {
    return view('mycourse');
});
Route::get('/mycourses', function () {
    return view('mycourses');
});
Route::get('/courseSt', function () {
    return view('coursesSt');
});
Route::get('/calificationSt', function () {
    return view('calificationSt');
});
Route::get('/activitySt', function () {
    return view('activitySt');
});
Route::get('/calification', function () {
    return view('listevaluationSt');
});
Route::get('/plan', function () {
    return view('plan');
});
Route::get('/changePassword', function () {
    return view('changepassword');
});
Route::get('/miPerfil', function () {
    return view('perfil');
});
Route::get('/resetPass', function () {
    return view('resetPass');
});

Route::get('/trivia', function () {
    return view('trivia');
});
Route::get('/triviaimg', function () {
    return view('triviaimg');
});
Route::get('/quiz', function () {
    return view('quizopen');
});
Route::get('/sentence', function () {
    return view('quiz');
});
Route::get('/mensajes', function () {
    return view('mensajes');
});
Route::get('/Actividad', function () {
    return view('actividad');
});
Route::get('/notas', function () {
    return view('notas');
});
Route::get('/boletin', function () {
    return view('boletin');
});
Route::get('/calendar', function () {
    return view('calendar');
});
Route::get('/perfil_d', function () {
    return view('perfild');
});
Route::get('/anuncio_d', function () {
    return view('anunciod');
});
Route::get('/anuncio_mc', function () {
    return view('anunciomc');
});
Route::get('/inicio', function () {
    return view('inicio');
});
Route::get('/juegos', function () {
    return view('juegos');
});
Route::get('/redactar', function () {
    return view('redactar');
});
Route::get('/vmensaje', function () {
    return view('vistamensaje');
});
Route::get('/clases_d', function () {
    return view('clasesDocente');
});
Route::get('/crear_clase', function () {
    return view('crearClase');
});
Route::get('/general_adm', function () {
    return view('cursosAdm');
});
Route::get('/semana_adm', function () {
    return view('semanaAdm');
});
Route::get('/planificacion', function () {
    return view('vplanAdm');
});
Route::get('/vclases_adm', function () {
    return view('vclasesAdm');
});
Route::get('/planeacion', function () {
    return view('planificacionAdm');
});
Route::get('/plan_adm', function () {
    return view('planAdm');
});
Route::get('/estudiante_adm', function () {
    return view('estudianteAdm');
});
Route::get('/docente_adm', function () {
    return view('docenteAdm');
});
Route::get('/reportes', function () {
    return view('reportesAdm');
});
Route::get('/instituciones_adm', function () {
    return view('institucionesAdm');
});
Route::get('/instituciones_crear', function () {
    return view('crearinstitucion');
});
Route::get('/perfil_asignar', function () {
    return view('asignarPerfil');
});
Route::get('/docente_asignar', function () {
    return view('asignarDocente');
});
Route::get('/estudiante_asignar', function () {
    return view('asignarEstudiante');
});
Route::get('/coordinador_adm', function () {
    return view('coordinadorAdm');
});
Route::get('/salon_adm', function () {
    return view('salonAdm');
});
Route::get('/asistencia', function () {
    return view('asistencia');
});
Route::get('/matricula', function () {
    return view('matricula');
});
Route::get('/chat', 'HomeController@CreateGroup')->name('chat');
// Lessons
Route::delete('lessons/destroy', 'LessonsController@massDestroy')->name('lessons.massDestroy');
Route::resource('lessons', 'LessonsController');

// School Classes
Route::delete('school-classes/destroy', 'SchoolClassesController@massDestroy')->name('school-classes.massDestroy');
Route::resource('school-classes', 'SchoolClassesController');

Route::get('horario', 'CalendarController@index')->name('calendar.index');
/*login personalizado permite verificar suscripcion*/
Route::post('/login2', 'UserController@loginWeb')->name('login2');
Route::post('/resetPassword', 'UserController@resetPassword')->name('resetPassword');
Route::put('/changePassword', 'UserController@changePassword')->name('changePassword');


Route::post('users_save', 'UserController@store')->name('users_save');
Route::get('showUser', 'UserController@show')->name('users_save');
Route::post('users_save', 'UserController@store')->name('users_save');
Route::post('img_user', 'UserController@uploadFile')->name('img_user');

Route::post('savePrintDoc', 'HomeController@savePrintDoc')->name('savePrintDoc');
Route::get('downloadFile', 'HomeController@downloadFile')->name('downloadFile');


Route::get('info_user', 'UserController@show')->name('info_user');
Route::get('actividad_d/Courses', 'CoursesController@index');
Route::get('GetCourses', 'CourseController@GetCourses');
Route::get('GetCategories', 'CategoryController@GetCategories');
Route::get('GetTypeU', 'CategoryController@GetTypeU');
Route::get('GetSubcategories/{id}', 'CategoryController@GetSubcategories');
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
Route::resource('resumes', 'ResumeController', ['except' => 'show', 'create', 'edit']);;
Route::resource('courses', 'courseController', ['except' => 'show', 'create', 'edit']);
Route::resource('Courses', 'CoursesController', ['except' => 'show', 'create', 'edit']);
Route::resource('Class', 'ClassController', ['except' => 'show', 'create', 'edit']);
Route::get('GetClass', 'ClassController@getClass');
Route::get('showClass/{id}', 'ClassController@show')->name('showClass');
Route::resource('Activity', 'ActivityController', ['except' => 'show', 'create', 'edit']);
Route::get('trivia/getAllQuestions/{id}', 'ActivityController@getAllQuestions');
Route::get('trivia/{id}', 'ActivityController@activityId');
Route::post('actividad_d/Activity', 'ActivityController@store');
Route::get('showTrivia/{id}', 'ActivityController@showTrivia');



Route::post('createEvent', 'EventsController@createEvent')->name('createEvent');
Route::get('/getAllEvents', 'EventsController@indexEvents')->name('getAllEvents');


Route::get('/actividad_d/{id}', 'ClassController@activityWeekId')->name('actividad_d');
Route::get('/actividad_d/getClass/{id}', 'ClassController@getClassId')->name('getClass');
Route::post('courseWeekly', 'CoursesController@courseWeekly')->name('courseWeekly');
Route::get('GetWeek', 'CoursesController@getWeek');
Route::get('editGetWeek', 'CoursesController@editGetWeek');
Route::get('viewGetWeek', 'CoursesController@viewGetWeek');
Route::get('showWeek/{id}', 'CoursesController@showWeek');
Route::put('updateCourseWeekly', 'CoursesController@updateCourseWeekly');
Route::resource('course_unit', 'Course_unitController', ['except' => 'show', 'create', 'edit']);;
Route::get('/home', 'HomeController@index')->name('home');

// Chat
Route::resource('groups', 'GroupController');

Route::resource('conversations', 'ConversationController');

/* Capturar los mensahe de una conversacion */
Route::get('conversation/{id}', 'ConversationController@getConversation')->name('conversation');

Route::post('fileUpload', 'ConversationController@uploadFile')->name('fileUpload');


Route::post('fileDocument', 'ClassController@uploadFile')->name('fileDocument');
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
Route::get('/enviados', function () {
    return view('mensajeEnv');
});
/* Rutas del administrador
 */

Route::get('getUsers', 'AdministratorController@indexUsers')->name('getUsers');
Route::get('getStudents', 'AdministratorController@indexStudents')->name('getStudents');
Route::get('getTeachers', 'AdministratorController@indexTeachers')->name('getTeachers');
Route::get('getUsersAssigned', 'AdministratorController@indexStudentsTeachersAssigned')->name('getUsersAssigned');
Route::post('assignStudents', 'AdministratorController@assignStudents')->name('assignStudents');
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
Route::get('getArea', 'AdministratorController@findArea')->name('getArea');
Route::get('getClassroom', 'AdministratorController@findClassroom')->name('getClassroom');


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

//importacion

$router->get('import', 'ImportController@import');
Route::get('/importar_adm', function () {
    return view('imports.importB');
});

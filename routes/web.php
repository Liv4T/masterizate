<?php
use App\Message;
use App\User;
use App\Events\MessagePosted;
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
Route::get('/type', function () {
    return view('welcome');
});
Route::get('/category', function () {
    return view('category');
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
Route::get('/board', function () {
    return view('board');
});
Route::get('/boards', function () {
    return view('dboard');
});
Route::get('/chat', function () {
    return view('chat');
});
Route::get('/free', function () {
    return view('free');
});
Route::get('/freeUnit', function () {
    return view('freeU');
});
Route::get('/course', function () {
    return view('course');
});
Route::get('/courseUnit', function () {
    return view('courseU');
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
Route::get('/activity', function () {
    return view('activity');
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
Route::get('/cuestions', function () {
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
/*login personalizado permite verificar suscripcion*/
Route::post('/login2', 'UserController@loginWeb')->name('login2');
Route::get('GetCourses','CourseController@GetCourses');
Route::get('GetCategories','CategoryController@GetCategories');
Route::get('GetTypeU','CategoryController@GetTypeU');
Route::get('GetSubcategories/{id}','CategoryController@GetSubcategories');
//Route::get('/home', 'HomeController@index')->name('home');
Route::get('testsendemail/{email}', 'TestingController@sendemail');
Auth::routes();

Route::resource('types', 'TypeUserController', ['except'=> 'show','create','edit']);;
Route::resource('tasks', 'TaskController', ['except'=> 'show','create','edit']);;
Route::resource('categories', 'CategoryController', ['except'=> 'show','create','edit']);;
Route::resource('users', 'UserController', ['except'=> 'show','create','edit']);;
Route::resource('resumes', 'ResumeController', ['except'=> 'show','create','edit']);;
Route::resource('courses', 'courseController', ['except'=> 'show','create','edit']);;
Route::resource('course_unit', 'Course_unitController', ['except'=> 'show','create','edit']);;
Route::get('/home', 'HomeController@index')->name('home');
/*Route::get('/messages',function(){

	return response()->json([
	    'messages' => Message::with('user')->get(),
	    'user' => Auth::user()
	]);
	

})->middleware('auth');*/
/*Route::post('/message',function(){
	
	$user = Auth::user();
	
	$message = $user->message()->create([
		'message' => request()->get('message')
	]);

	broadcast(new MessagePosted($message,$user));

	return ['status' => 'OK'];
})->middleware('auth');*/
/*forum 
// log.activity middleware logs the time of user activity that any inclusive routes are hit
Route::group(['middleware' => ['log.activity']], function() {

    // use profile
    Route::get('/user/profile/@{user}', 'ProfileController@index')->name('user.profile.index');

    // auth routing
    Route::group(['middleware' => ['auth']], function () {

        // general auth routing
        Route::get('/home', 'HomeController@index')->name('home.index');

        Route::group(['prefix' => 'forum'], function() {
            // auth forum routes
            // topics
            Route::get('/topics/create', 'TopicsController@showCreateForm')->name('forum.topics.create.form');
            Route::post('/topics/create', 'TopicsController@create')->name('forum.topics.create.submit');

            // subscriptions
            Route::get('/topics/{topic}/subscription/status', 'SubscriptionsController@getSubscriptionStatus')->name('forum.topics.topic.subscription.status');
            Route::post('/topics/{topic}/subscription', 'SubscriptionsController@handleSubscription')->name('forum.topics.topic.subscription.submit');

            // posts
            Route::post('/topics/{topic}/posts/create', 'PostsController@create')->name('forum.topics.posts.create.submit');
            Route::get('/topics/{topic}/posts/{post}/edit', 'PostsController@edit')->name('forum.topics.topic.posts.post.edit');
            Route::post('/topics/{topic}/posts/{post}/update', 'PostsController@update')->name('forum.topics.topic.posts.post.update');
            Route::delete('/topics/{topic}/posts/{post}/delete', 'PostsController@destroy')->name('forum.topics.topic.posts.post.delete');

            // reports
            Route::post('/topics/{topic}/report', 'TopicsReportController@report')->name('forum.topics.topic.report.report');
            Route::post('/topics/{topic}/posts/{post}/report', 'PostsReportController@report')->name('forum.topics.topic.posts.post.report.report');

            // auth.elevated refers to moderator || admin roles
            Route::group(['middleware' => ['auth.elevated']], function() {
                Route::delete('/topics/{topic}', 'TopicsController@destroy')->name('forum.topics.topic.delete');
            });
        });

        // user routing
        Route::group(['prefix' => 'user'], function() {

            Route::group(['prefix' => 'chat/threads'], function() {
                // user messaging
                Route::get('/', 'MessagesThreadController@index')->name('user.chat.threads.index');
                Route::post('/create', 'MessagesThreadController@create')->name('user.chat.threads.create');

                Route::get('/@{user}/messages', 'MessagesController@index')->name('user.chat.threads.thread.messages.index');
                Route::get('/@{user}/messages/fetch', 'MessagesController@fetchMessages')->name('user.chat.threads.thread.messages.fetch');
                Route::post('/@{user}/messages', 'MessagesController@create')->name('user.chat.threads.thread.messages.create');
            });

            Route::group(['prefix' => 'profile'], function() {
                // user profile
                Route::get('/@{user}/settings', 'ProfileSettingsController@index')->name('user.profile.settings.index');
                Route::post('/@{user}/settings/update/', 'ProfileSettingsController@update')->name('user.profile.settings.update');
            });

        });

        // admin routing
        Route::group(['prefix' => 'admin', 'middleware' => ['auth.admin']], function () {
            // admin dashboard
            Route::get('/dashboard', 'AdministratorDashboardController@index')->name('admin.dashboard.index');
            Route::post('/dashboard/update', 'AdministratorDashboardController@update')->name('admin.dashboard.update');
            Route::post('/dashboard/invite', 'AdministratorDashboardController@invite')->name('admin.dashboard.invite');

            Route::delete('/dashboard/users/{user}', 'AdministratorDashboardController@destroy')->name('admin.dashboard.user.destroy');
        });

        // moderator dashboard, also accessible by admin (auth.elevated)
        Route::group(['prefix' => 'moderator', 'middleware' => ['auth.elevated']], function() {
            Route::get('/dashboard', 'ModeratorDashboardController@index')->name('moderator.dashboard.index');
            Route::delete('/dashboard/reports/{report}', 'ModeratorDashboardController@destroy')->name('moderator.dashboard.reports.report.destroy');
        });

    });

    // public forum routing
    Route::group(['prefix' => 'forum'], function() {
        // view topics and topic posts
        Route::get('/', 'TopicsController@index')->name('forum.topics.index');
        Route::get('/topics/{topic}', 'TopicsController@show')->name('forum.topics.topic.show');

        // check status of content, in relation to reporting
        Route::get('/topics/{topic}/report/status', 'TopicsReportController@status')->name('forum.topics.topic.report.status');
        Route::get('/topics/{topic}/posts/{post}/report/status', 'PostsReportController@status')->name('forum.topics.topic.posts.post.report.status');
    });

});
*/


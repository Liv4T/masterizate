<?php

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
    return view('home');
});
Route::get('/type', function () {
    return view('welcome');
});
Route::get('/category', function () {
    return view('category');
});
Route::get('/task', function () {
    return view('resume');
});

/*login personalizado permite verificar suscripcion*/
Route::post('/login2', 'UserController@loginWeb')->name('login2');

Route::get('GetCategories','CategoryController@GetCategories');
Route::get('GetTypeU','CategoryController@GetTypeU');
Route::get('GetSubcategories/{id}','CategoryController@GetSubcategories');
Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();

Route::resource('types', 'TypeUserController', ['except'=> 'show','create','edit']);;
Route::resource('tasks', 'TaskController', ['except'=> 'show','create','edit']);;
Route::resource('categories', 'CategoryController', ['except'=> 'show','create','edit']);;
Route::resource('users', 'UserController', ['except'=> 'show','create','edit']);;

Route::get('testsendemail/{email}', 'TestingController@sendemail');
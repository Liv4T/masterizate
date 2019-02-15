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
Route::get('/task', function () {
    return view('home');
});
Route::get('/category', function () {
    return view('category');
});
Route::get('GetCategories','CategoryController@GetCategories');
Route::get('GetSubcategories/{id}','CategoryController@GetSubcategories');
Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();

Route::resource('tasks', 'TaskController', ['except'=> 'show','create','edit']);;
Route::resource('categories', 'CategoryController', ['except'=> 'show','create','edit']);;
Route::resource('users', 'UserController', ['except'=> 'show','create','edit']);;

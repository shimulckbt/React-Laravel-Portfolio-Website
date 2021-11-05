<?php

use Illuminate\Support\Facades\Route;
/// contact data manage
Route::get('/contactList', 'App\Http\Controllers\ContactController@ContactList');
Route::post('/contactDelete', 'App\Http\Controllers\ContactController@ContactDelete');

///courses data manage
Route::get('/courseList', 'App\Http\Controllers\CourseController@CoursetList');
Route::post('/courseDelete', 'App\Http\Controllers\CourseController@CourseDelete');

//project data manage
Route::get('/projectList', 'App\Http\Controllers\ProjectController@ProjectList');
Route::post('/projectDelete', 'App\Http\Controllers\ProjectController@ProjectDelete');

//service data manage
Route::get('/serviceList', 'App\Http\Controllers\ServiceController@ServiceList');
Route::post('/serviceDelete', 'App\Http\Controllers\ServiceController@ServiceDelete');

//review data manage
Route::get('/reviewList', 'App\Http\Controllers\ReviewController@ClientAllReviewList');
Route::post('/reviewDelete', 'App\Http\Controllers\ReviewController@ReviewDelete');


////   default route should be at last because it causes some errors sometimes  ////
Route::get('/', function (){
    return view('index');
});


Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute', '.*');

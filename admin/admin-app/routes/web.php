<?php

use Illuminate\Support\Facades\Route;

Route::get('/contactList', 'App\Http\Controllers\ContactController@ContactList');

////   default route should be at last because it causes some errors sometimes  ////


Route::get('/', function (){
    return view('index');
});


Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute', '.*');

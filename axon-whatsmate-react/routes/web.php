<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{path?}', function($path = null){         return View::make('welcome');     })->where('path', '.*'); 
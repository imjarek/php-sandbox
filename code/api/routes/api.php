<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->get('/users', function (Request $request) {
    // proper CORS handling should be somewhere for all API calls
    header('Access-Control-Allow-Origin: *');
    // collection should go from DB
    return array(
        ['id' => 1, 'name' => 'Boombastic'],
        ['id' => 2, 'name' => 'FlashMan'],
        ['id' => 3, 'name' => 'Mario'],
        ['id' => 4, 'name' => 'Pacman']
    );
});

<?php

use App\Http\Controllers\Individual\AuditionController;
use App\Http\Controllers\Individual\CompanyController;
use App\Http\Controllers\Individual\HouseFileController;
use App\Http\Controllers\Individual\InfoCollectionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get("/map", function () {
    return view('map');
});
Route::get("/dashboard", function () {
    return view('layouts.dashboard');
});
Route::resource("Company",CompanyController::class)->except(['edit','create']);
Route::resource("InfoCollection",InfoCollectionController::class)->except(['edit','create']);
Route::resource("HouseFile",HouseFileController::class);

Route::group(['prefix'=>'Audition'], function(){
    Route::post('index/{id}', [AuditionController::class ,'index'])->name('audition.index');
});

Route::get("hash",function (){
    dd(\Illuminate\Support\Facades\Hash::make('1234'));
});

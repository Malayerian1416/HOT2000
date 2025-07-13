<?php

use App\Http\Controllers\Individual\AuditionController;
use App\Http\Controllers\Individual\CompanyController;
use App\Http\Controllers\Individual\HouseFileController;
use App\Http\Controllers\Individual\InfoCollectionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
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
})->name("dashboard");
Route::resource("Company",CompanyController::class)->except(['edit','create']);
Route::resource("InfoCollection",InfoCollectionController::class)->except(['edit','create']);
Route::resource("HouseFile",HouseFileController::class);

Route::group(['prefix'=>'Audition'], function(){
    Route::post('index/{id}', [AuditionController::class ,'index'])->name('audition.index');
});

Route::get("hash",function (){
    dd(\Illuminate\Support\Facades\Hash::make('1234'));
});

Route::get("word",function (){
    ini_set('max_execution_time', 0); // 3600 seconds = 60 minutes
    set_time_limit(0);
    $content=File::get(public_path("words.txt"));
    $lines = explode("\n", $content);
    $lines=array_slice($lines,
        array_keys(
            array_filter($lines,
                function($item){
                    return strpos($item,'AT') ;
                }))[0]

    );
    \App\Models\EnglishWord::query()->insert($lines);
});

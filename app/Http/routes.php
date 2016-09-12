<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    if(Session::get('uname')!=""){
        return redirect("index");
    }else{
        return view('login.login');
    }
});

Route::get('index','IndexController@index');
//登录提交信息
Route::post("login_in","LoginController@login_in");
//退出
Route::get("login_out","LoginController@login_out");

//获取验证码信息
Route::get('kit/captcha/{tmp}', 'LoginController@captcha');
//skinconf
Route::get("skinconf","IndexController@skinconf");
//文章列表
Route::get("article","ArticleController@index");




//用户中心管理--头像管理
Route::get("uhead","UserController@uhead");


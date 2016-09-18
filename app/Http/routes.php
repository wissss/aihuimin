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

//用户中心图片上传
Route::POST("file_upload","UserController@file_upload");

//用户中心图片列表
Route::get("albumlista","UserController@albumlista");

//用户修改密码页面
Route::get("upassw","UserController@upassw");

//用户中心修改密码
Route::post("update_pwd","UserController@update_pwd");

//个人头像上传页面
Route::get("upd_portrait","UserController@upd_portrait");

//用户头像上传操作
Route::post("add_portrait","UserController@add_portrait");

//权限添加
Route::get('padd',"PrivilegeController@padd");


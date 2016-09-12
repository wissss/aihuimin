<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class UserController extends Controller
{
    //user/uhead用户头像管理
    public function uhead()
    {
        return view("user.form_avatar");
    }
}

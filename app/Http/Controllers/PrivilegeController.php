<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class PrivilegeController extends Controller
{
    //权限添加页面
    public function padd()
    {
        return view("privilege.");
    }
}

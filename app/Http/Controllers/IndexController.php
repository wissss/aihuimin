<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis as Redis;
use App\Http\Requests;

class IndexController extends Controller
{
    //后台主页信息
    public function index()
    {

        return view('index.index');
    }
    //redis
    public function redis()
    {
        $redis = Redis::connection('default');
        $redis->set("name","Taylor");
        $red = $redis->get("name");
        print_r($red);

    }
    //skinconf
    public function skinconf()
    {
        return view('index.skin-config');
    }
}

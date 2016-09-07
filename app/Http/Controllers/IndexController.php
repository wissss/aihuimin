<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis as Redis;
use App\Http\Requests;

class IndexController extends Controller
{
    //redis
    public function index()
    {
        $redis = Redis::connection('default');
        $redis->set("name","Taylor");
        $red = $redis->get("name");
        print_r($red);
        
    }
}

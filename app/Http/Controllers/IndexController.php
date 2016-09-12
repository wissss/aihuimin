<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis as Redis;
use App\Http\Requests;
use App\Http\Model\User;
class IndexController extends Controller
{
    //后台主页信息
    public function index()
    {
        $User = new User;
        //当前用户权限 展示
        $data = $User->Urp();

        //显示当前用户左侧菜单
        $menu = $User->menu();

        //主页展示今日天气
        $weather = $User->weather();

        return view('index.index',["data"=>$data,"menu"=>$menu,"weather"=>$weather]);
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
    public function skinconf(){ return view('index.skin-config'); }
}

?>

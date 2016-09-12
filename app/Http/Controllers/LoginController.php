<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Model\Login;
use App\Http\Requests;
use Gregwar\Captcha\CaptchaBuilder;
use Illuminate\Support\Facades\Redis as Redis;
use Session;
class LoginController extends Controller
{
    /*
     *管理员登录 只有东哥能登录
     */
    public function login_in(Request $request)
    {
        //接受post值
        if(Session::get("uname")!=""){
            return redirect('index');
        }
        $data  = $request->all();
        $Login = new Login();
        $pro   = $Login->login_in($data);
        if($pro['msg']=="ok"){
            return redirect('index');
        }else{
            return view("login.login",['data'=>$pro['msg']]);
        }
    }
    /*
     * 登录验证码,显示
     */
    public function captcha($tmp)
    {
        //生成验证码图片的Builder对象，配置相应属性
        $builder = new CaptchaBuilder;
        //可以设置图片宽高及字体
        $builder->build($width = 100, $height = 40, $font = null);
        //获取验证码的内容
        $phrase = $builder->getPhrase('4');

        //把内容存入session
        Session::flash('milkcaptcha', $phrase);
        //生成图片
        header("Cache-Control: no-cache, must-revalidate");
        header('Content-Type: image/jpeg');
        $builder->output();
    }
    //退出
    public function login_out(Request $request)
    {
        //实例化redis
        $redis = Redis::connection('default');

        //删除redis中的部分数据
        $redis->del("menu");
        $redis->del("data");
        Session::flush();
        $url = $request->fullurl('/');
        $surl = strrpos($url,"/");
        $url = substr($url,0,$surl);
        echo "<script>alert('退出成功');location.href='$url';</script>";
    }
}

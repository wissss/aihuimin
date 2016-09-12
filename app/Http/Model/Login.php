<?php

namespace App\Http\Model;
use Validator,DB,Session;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis as Redis;
/*
 * 用户信息注册登录 model
 */

class Login extends Model
{
    /*
     * login reg 注册注册
     */
    public function login_reg($data)
    {
        $validator = Validator::make($data, [
            'username' => 'required|unique:users',
            'password' => 'required|unique:users',
        ]);
        //错误放回错误信息
        if($validator->errors()->all())
        {
            //获取用户注册错误信息
            $error = $validator->errors()->all();

            //返回用户注册错误信息
            $english = $this->Error($error);

            //调用英文翻译接口
            $url = "http://fanyi.youdao.com/openapi.do?keyfrom=qwe1123&key=710353888&type=data&doctype=json&version=1.1&q=".$english;

            //将内容读取出来
            $file = file_get_contents($url);
            return $file;
        }else{
            return true;
        }


    }

    public function login_in($data)
    {
        $name = $data['username'];
        $pwd = md5(md5($data['password']));
        if(Session::get("milkcaptcha") == $data['code']){
            $db = DB::table("users")
                ->where("username","$name")
                ->where("password","$pwd")
                ->first();
            if($db)
            {
                DB::table("users")
                ->where("user_id",$db['user_id'])
                ->update([
                    'code'=>$data['code']
                ]);
                Session::put("uid",$db['user_id']);
                Session::put("uname",$db['username']);
                //实例化redis
                $redis = Redis::connection('default');
                $redis->setex("uid","7200",json_encode($db['user_id']));
                $msg = array(
                    'msg'=>"ok"
                );
                return $msg;
            }else
            {
                $msg = array(
                    'msg'=>"密码错误"
                );
                return $msg;
            }
        }else{
            $Se = array(
                'msg'=>"验证码错误"
            );
            return $Se;
        }
    }
    //返回注册自动验证错误信息
    public function Error($error)
    {
        $error = implode(',',$error);
        Session::put('error',$error);
        $var   = Session::get('error');
        return $var;
    }

}

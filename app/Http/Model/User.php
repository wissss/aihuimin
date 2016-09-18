<?php
namespace App\Http\Model;

use DB,Session;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis as Redis;
/*
 * 用户 model
 */

class User extends Model
{
    //查询当前用户是什么角色 并将对应全选查出
    public function Urp()
    {
        //实例化redis
        $redis = Redis::connection('default');
        /*
         * 判断是否 为 管理员用户
         */
        $redis_uid = json_decode($redis->get("uid"));
        if($redis->get("data")){
            $data = $redis->get("data");
            $datas = json_decode($data,true);
            return $datas;
        }else{
            $uid = Session::get("uid");
            $pro = DB::table("users")
                ->join("user_role","users.user_id","=","user_role.user_id")
                ->join("role","user_role.role_id","=","role.role_id")
                ->join("role_privilege","role.role_id","=","role_privilege.role_id")
                ->join("privilege","role_privilege.privilege_id","=","privilege.p_id")
                ->select(
                    "users.user_id",
                    "users.username",
                    "role.role_name",
                    "privilege.p_id",
                    "privilege.p_name",
                    "privilege.p_root",
                    "privilege.p_way",
                    "role.role_name",
                    "users.user_filedir"
                )
                ->where("users.user_id",$uid)
                ->get();
            $redis->set("data",json_encode($pro));
            return $pro;
        }

    }

    //查询当前用户左侧菜单显示内容

    public function menu()
    {
        //实例化redis
        $redis = Redis::connection('default');
        /*
         * 利用redis 将主页 左侧菜单加入缓存
         * 判断redis里是否有菜单信息 设置时间存储7200秒 2小时
         */
        if($redis->get("menu")){
            $menu = $redis->get("menu");
            $data = json_decode($menu,true);
            return $data;
        }else{
            //查询权限 内容
            $data = DB::table("privilege")->get();
            //递归全部数据
            $menu = $this->privileges_one($data,$pid=0,$level=0);
            $redis->setex("menu","7200",json_encode($menu));
            return $menu;
        }
    }

    //递归方法
    public function privileges_one($ars,$pid=0,$level=0){
        //echo 1;
        //定义一个静态数据
        static $data = array();
        //print_r($ars);
        foreach($ars as $k=>$v){
            if($v['parent_id'] == $pid){
                $v['level']=$level;
                $data[]=$v;
                $this->privileges_one($ars,$v['p_id'],$v['level']+1);
            }
        }
        return $data;
    }

    //天气预报接口
    public function weather()
    {

        $redis = Redis::connection('default');
        $red = $redis->get("weather");
        $red = isset($red)?$red:"";
        if($red){
            $reds = $redis->get("weather");
            $msg = json_decode($reds,true);
            return $msg['result'][0];
        }else{
            $url="http://api.k780.com:88/?app=weather.future&weaid=1&&appkey=18797&sign=12b7acce2b7d69f163e68d9118b3ca7b&format=json";
            $file = file_get_contents($url);
            $msg = json_decode($file,true);
            $redis->setex("weather",7200,json_encode($msg));
            return $msg['result'][0];
        }
    }
    //user/update 用户修改密码
    public function update_pwd($data)
    {
        $uid = Session::get("uid");
        $oldpwd = md5(md5($data['old_password']));
        $newpwd = $data['new_password'];
        $renewpwd = $data['renew_password'];
        if(!preg_match('/^[a-zA-Z]{1}[a-zA-Z0-9_]{6,16}$/i',$newpwd)){
            $msg = array(
                "msg"=>"必须为字母开头"
            );
            return $msg;
        }
        if($newpwd!=$renewpwd){
            $s = array("msg"=>"确认密码与密码不一致");
            return $s;
        }else{
            $pro = DB::table("users")->where("password",$oldpwd)->first();
            if($pro['password']==md5(md5($newpwd))){
                $msg = array("msg"=>"新密码不能与原密码相同");
                return $msg;
            }
            if($pro['password']){
                $upd = DB::table("users")->where("user_id",$uid)->update([
                    'password'=>md5(md5($newpwd))
                ]);
                $msg = array(
                    "msg"=>"ok"
                );
                return $msg;
            }else{
                $s = array("msg"=>"当前密码不正确");
                return $s;
            }

        }
    }

}
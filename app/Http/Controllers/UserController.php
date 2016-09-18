<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Model\User;
use Session;
use DB;
class UserController extends Controller
{
    //user/uhead用户头像管理
    public function uhead()
    {
        return view("user.form_file_upload");
    }
    
    //用户图片上传处理
    public function file_upload(Request $request)
    {
        //用户session user_id
        $uid = Session::get("uid");

        //接收用户提交数据
        $file = $request->file('file');
        //显示上传格式
        $allowed_extensions = ["png", "jpg", "gif", "JPG"];
        //定义用户存储图片路径
        $fname = "upload/user_$uid";
        if(!file_exists($fname))
        {
            mkdir($fname,0777,true);
        }
        $dircount= scandir($fname);
        unset($dircount[0]);
        unset($dircount[1]);
        sort($dircount);
        if($dircount==""){
            $start = 0;
        }else{
            $start = count($dircount);
        }
//        print_r(count($file)+$start);die;
        for ($i = $start; $i < count($file)+$start;) {
            for($k=0; $k<count($file);$k++){
                //如果上传出错,返回错误信息   addslashes()
                if ($file[$k]->getClientOriginalExtension() && !in_array($file[$k]->getClientOriginalExtension(), $allowed_extensions)) {
                    return ['error' => 'You may only storage png, jpg or gif.'];
                }
                $uname = Session::get("uname");
                $destinationPath = "upload/user_$uid/";
                //获取图片后缀名
                $extension = $file[$k]->getClientOriginalExtension();
                //设置图片名称
                $code = $uid."-".md5($uname)."-".$i++;
                $fileName = $code . '.' . $extension;
                if ($file[$k]->move($destinationPath, $fileName)) {
                    /*
                     * 设置用户头像字段入库
                     */
                    $pro = DB::table("users")->where("user_id",$uid)->select("user_portrait")->first();
                    if($pro['user_portrait']==""){
                        $sql = "update users set user_portrait = '$destinationPath' where user_id = '$uid'";
                        DB::select($sql);
                    }else{
                        sleep(1);
                    }
                }
            }
        }
    }

    //用户中心图片列表
    public function albumlista()
    {
        //用户session user_id
        $uid = Session::get("uid");

        //获取数据库中的用户目录
        $dir = DB::table("users")->where("user_id",$uid)->select("user_portrait")->first();
        if($dir['user_portrait']!=""){
            //获取数据库中用户存入相册路径
            $dir_name = $dir['user_portrait'];
            //如果没有该路径默认创建一个
            if(!file_exists($dir_name))
            {
                mkdir($dir_name,0777,true);
            }
            //查询该目录下的所有图片
            $dircount= scandir($dir_name);
            unset($dircount[0]);
            unset($dircount[1]);
            sort($dircount);

            //将路径与图片拼接在一起
            foreach($dircount as $k=>$v){
                $dircount[$k]=$dir_name.$v;
            }

            return view("user.basic_gallery",['dirname'=>$dircount]);
        }else{
            $pro = array('0'=>"暂无图片");
            return view("user.basic_gallery",['dirname'=>$pro]);
        }
    }

    //显示修改密码页面
    public function upassw()
    {
        return view("user.repassword");
    }
    //修改密码逻辑操作
    public function update_pwd(Request $request)
    {
        //接值 post传值
        $requests = $request->input();
        //实例化user model;
        $user = new User();
        //调用修改密码方法
        $pro = $user ->update_pwd($requests);
        if($pro['msg']=="ok"){
            return view('user.repassword',['data'=>$pro['msg']]);
        }else{
            return view("user.repassword",['data'=>$pro['msg']]);
        }

    }

    //用户个人头像上传显示页面
    public function upd_portrait()
    {
        return view("user.upd_portrait");
    }

    //用户头像上传操作
    public function add_portrait(Request $request)
    {
        //用户session user_id
        $uid = Session::get("uid");

        //接收用户提交数据
        $file = $request->file('file');

        //显示上传格式
        $allowed_extensions = ["png", "jpg", "gif", "JPG"];
        //定义用户存储图片路径
        $fname = "upload/user_$uid";
        //如果当前目录不存在就创建一个目录
        if(!file_exists($fname))
        {
            mkdir($fname,0777,true);
        }
        if ($file[0]->getClientOriginalExtension() && !in_array($file[0]->getClientOriginalExtension(), $allowed_extensions)) {
            return ['error' => 'You may only storage png, jpg or gif.'];
        }
        $uname = Session::get("uname");
        $destinationPath = "upload/user_$uid/";
        //获取图片后缀名
        $extension = $file[0]->getClientOriginalExtension();
        //设置图片名称
        $code = $uid."-".md5($uid);
        $fileName = $code . '.' . $extension;
        //图片移动目录
        if ($file[0]->move($destinationPath, $fileName)) {
            //移动目录成功
            $filename = $destinationPath.$fileName;
            $pro = DB::table("users")->where("user_id",$uid)->select("user_filedir")->first();
            if($pro['user_filedir']==""){
                $sql = "update users set user_filedir = '$filename' where user_id = '$uid'";
                DB::select($sql);
            }
        }
    }
}

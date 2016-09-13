<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
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
        //如果上传出错,返回错误信息   addslashes()
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
        if($dir){
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
            return view("user.basic_gallery");
        }

    }
}

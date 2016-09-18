<?php
use Illuminate\Support\Facades\Redis as Redis;
$redis = Redis::connection('default');
$data  = json_decode($redis->get("data"),true);
$menu  = json_decode($redis->get("menu"),true);
$route = Request::fullurl('/');
$lastroute = substr($route,strrpos($route,"/")+1,555);
if(!Session::get('uname')){
    $url = Request::fullurl('/');
    $surl = strrpos($url,"/");
    $url = substr($url,0,$surl);
    echo "<script>alert('登录超时,请重新登录');location.href='$url'</script>";
}
?>

<input type="hidden" id="url" value="<?php echo Request::fullurl('/')?>"  />
<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <span>
                        <img alt="image" class="img-circle" src="{{$data[0]['user_filedir'] or "style/img/profile_small.jpg"}}" />
                    </span>
                    <a data-toggle="dropdown" class="dropdown-toggle" href="{{url("index")}}">
                        <span class="clear">
                            <span class="block m-t-xs">
                                <strong class="font-bold">{{Session::get('uname')}}</strong>
                            </span>
                            <span class="text-muted text-xs block">{{$data[0]['role_name']}} <b class="caret"></b></span>
                        </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="{{url("upd_portrait")}}">修改头像</a>
                        </li>
                        <li><a href="#">信箱</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="{{url("login_out")}}">安全退出</a>
                        </li>
                    </ul>
                </div>
                <div class="logo-element">
                    list
                </div>
            </li>
            @foreach($data as $kd=>$ks)
                <li class="active">
                    <a href="{{$ks['p_root'] or ""}}"><i class="fa fa-th-large"></i> <span class="nav-label">{{$ks['p_name'] or ""}}</span> <span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        @foreach($menu as $mk=>$ms)
                            @if($ks['p_id']==$ms['parent_id'])
                                <li class="<?php if($ms['p_way']==$lastroute){echo "active";}?>"><a href="{{URL("$ms[p_way]")}}">{{$ms['p_name'] or ""}}</a></li>
                            @endif
                        @endforeach
                    </ul>
                </li>
            @endforeach
        </ul>

    </div>
</nav>


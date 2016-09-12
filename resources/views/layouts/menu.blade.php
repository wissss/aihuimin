<?php
use Illuminate\Support\Facades\Redis as Redis;
$redis = Redis::connection('default');
$data  = json_decode($redis->get("data"),true);
$menu  = json_decode($redis->get("menu"),true);
?>
<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav" id="side-menu">
            <li class="nav-header">

                <div class="dropdown profile-element"> <span>
                            <img alt="image" class="img-circle" src="" />
                             </span>
                    <a data-toggle="dropdown" class="dropdown-toggle" href="{{url("index")}}">
                                <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">{{Session::get('uname')}}</strong>
                             </span> <span class="text-muted text-xs block">超级管理员 <b class="caret"></b></span> </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="form_avatar.html">修改头像</a>
                        </li>
                        <li><a href="profile.html">个人资料</a>
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
                                <li><a href="{{URL("$ms[p_way]")}}">{{$ms['p_name'] or ""}}</a></li>
                            @endif
                        @endforeach
                    </ul>
                </li>
            @endforeach
        </ul>

    </div>
</nav>


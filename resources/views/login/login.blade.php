<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="renderer" content="webkit">
    <title>HDHM_home</title>
    <meta name="keywords" content="HDHM_home">
    <meta name="description" content="HDHM_home">
    <link href="style/css/bootstrap.min.css?v=3.4.0" rel="stylesheet">
    <link href="style/font-awesome/css/font-awesome.css?v=4.3.0" rel="stylesheet">
    <link href="style/css/animate.css" rel="stylesheet">
    <link href="style/css/style.css?v=2.2.0" rel="stylesheet">
    <style>
        .gray-bg{
            background-image: url("style/img/929199.jpg");
            background-repeat: no-repeat;
        }
        .xin{
            color: #e6a121;
        }
        .code{  text-align: center; margin-bottom: 12px;  }
        .code a img{ width: 200px; }
        #mpse{ color:#f0f7fc;display: none;}
    </style>
</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen  animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name"><img width="190px;" class="imgs" height="190px;" src="style/img/piupiupiu.jpg"></h1>

            </div>
            <h3 class="xin">欢迎主人登录</h3>

            <span id="mpse">{{$data or ""}}</span>

            <form class="m-t" role="form" method="post" action="{{url("login_in")}}">

                <div class="form-group">
                    <input type="text" class="form-control" name="username" placeholder="用户名" required="required">
                    <input type="hidden" value="{{csrf_token()}}" name="_token" />
                    <input type="hidden" id="url" value="<?php echo Request::fullurl('/')?>"  />
                </div>

                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="密码" required="required">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="验证码" name="code" required="required">
                </div>
                <div class="code">
                    <a onclick="javascript:re_captcha();" >
                        <img src="{{ URL('kit/captcha/1') }}"  alt="验证码" title="刷新图片" width="100" height="40" id="c2c98f0de5a04167a9e427d883690ff6" border="0">
                    </a>
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">登 录</button>
                <p class="text-muted text-center"></p>
            </form>
        </div>
    </div>

    <!-- Mainly scripts -->
    <script src="style/js/jquery-2.1.1.min.js"></script>
    <script src="style/js/bootstrap.min.js?v=3.4.0"></script>

    <script type="text/javascript" src="http://tajs.qq.com/stats?sId=9051096" charset="UTF-8"></script><!--统计代码，可删除-->

</body>

</html>
<script src="style/js/jq.js"></script>
<script src="style/js/she.js"></script>
<script>
    function re_captcha() {
        $url = "{{ URL('kit/captcha') }}";
        $url = $url + "/" + Math.random();
        document.getElementById('c2c98f0de5a04167a9e427d883690ff6').src=$url;
    }
</script>
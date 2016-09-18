<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="renderer" content="webkit">

    <title>HDHM_HOME</title>
    <meta name="keywords" content="HDHM_HOME">
    <meta name="description" content="HDHM_HOME">

    <link href="style/css/bootstrap.min.css?v=3.4.0" rel="stylesheet">
    <link href="style/font-awesome/css/font-awesome.css?v=4.3.0" rel="stylesheet">
    <link href="style/css/animate.css" rel="stylesheet">
    <link href="style/css/style.css?v=2.2.0" rel="stylesheet">

</head>

<body>
    <div id="wrapper">

        <!--左侧菜单开始-->
        @include("layouts.menu")
        <!--左侧菜单结束-->

        <div id="page-wrapper" class="gray-bg dashbard-1">
            <div class="row border-bottom">

                <!--头部导航开始-->
                @include('layouts.nav')
                <!--头部导航结束-->

            </div>
            <div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-lg-10">
                    <h2>修改密码</h2>
                    <ol class="breadcrumb">
                        <li>
                            <a href="{{url("index")}}">主页</a>
                        </li>
                        <li>
                            <a>用户中心</a>
                        </li>
                        <li>
                            <strong>修改密码</strong>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-2">

                </div>
            </div>
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="ibox float-e-margins">
                            <div class="ibox-title">
                                <h5>修改密码</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-up"></i>
                                    </a>
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="form_basic.html#">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                    </ul>
                                    <a class="close-link">
                                        <i class="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ibox-content">
                                <span style="margin-left: 450px;" id="mpse">{{$data or ""}}</span>
                                <form class="form-horizontal m-t" id="signupForm" action="update_pwd" method="post">
                                    <!--开始当前密码-->
                                    <input type="hidden" name="_token" value="{{csrf_token()}}"/>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">当前密码：</label>
                                            <div class="col-sm-8">
                                                <input id="old_password" name="old_password" class="form-control" type="password" required="required">
                                            </div>
                                        </div>
                                    <!--结束当前密码-->

                                    <!--新密码开始-->
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">密码：</label>
                                            <div class="col-sm-8">
                                                <input id="new_password" name="new_password" class="form-control" type="password" required="required">
                                            </div>
                                        </div>
                                    <!--新密码结束-->

                                    <!--确认密码开始-->
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">确认密码：</label>
                                            <div class="col-sm-8">
                                                <input id="renew_password" name="renew_password" class="form-control" type="password" required="required">
                                            </div>
                                        </div>
                                    <!--确认密码结束-->

                                    <div class="form-group">
                                        <div class="col-sm-8 col-sm-offset-3">
                                            <button class="btn btn-primary" type="submit">提交</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                @include("layouts.footer")
            </div>
        </div>
    </div>
    </div>

    <!-- Mainly scripts -->
    <script src="style/js/jq.js"></script>
    <script src="style/js/she.js"></script>
    <script src="style/js/jquery-2.1.1.min.js"></script>
    <script src="style/js/bootstrap.min.js?v=3.4.0"></script>
    <script src="style/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="style/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="style/js/hplus.js?v=2.2.0"></script>
    <script src="style/js/plugins/pace/pace.min.js"></script>

    <!-- jQuery Validation plugin javascript-->
    <script src="style/js/plugins/validate/jquery.validate.min.js"></script>
    <script src="style/js/plugins/validate/messages_zh.min.js"></script>
    <script>
        //以下为修改jQuery Validation插件兼容Bootstrap的方法，没有直接写在插件中是为了便于插件升级
        $.validator.setDefaults({
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            success: function (element) {
                element.closest('.form-group').removeClass('has-error').addClass('has-success');
            },
            errorElement: "span",
            errorClass: "help-block m-b-none",
            validClass: "help-block m-b-none"
        });
         //以下为官方示例
        $().ready(function () {
            // validate the comment form when it is submitted
            $("#commentForm").validate();

            // validate signup form on keyup and submit
            $("#signupForm").validate({
                rules: {
                    password: {
                        required: true,
                        minlength: 5
                    },
                    confirm_password: {
                        required: true,
                        minlength: 5,
                        equalTo: "#password"
                    }
                },
                messages: {
                    password: {
                        required: "请输入您的密码",
                        minlength: "密码必须5个字符以上"
                    },
                    confirm_password: {
                        required: "请再次输入密码",
                        minlength: "密码必须5个字符以上",
                        equalTo: "两次输入的密码不一致"
                    }
                }
            });

            // propose username by combining first- and lastname
            $("#username").focus(function () {
                var firstname = $("#firstname").val();
                var lastname = $("#lastname").val();
                if (firstname && lastname && !this.value) {
                    this.value = firstname + "." + lastname;
                }
            });
        });
    </script>
</body>

</html>

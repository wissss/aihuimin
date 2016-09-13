<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="renderer" content="webkit">

    <title>HDHM_HOME - 相册列表</title>
    <meta name="keywords" content="HDHM_HOME - 相册列表">
    <meta name="description" content="HDHM_HOME - 相册列表">

    <link href="style/css/bootstrap.min.css?v=3.4.0" rel="stylesheet">
    <link href="style/font-awesome/css/font-awesome.css?v=4.3.0" rel="stylesheet">
    <link href="style/js/plugins/fancybox/jquery.fancybox.css" rel="stylesheet">
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
                    <h2>相册列表</h2>
                    <ol class="breadcrumb">
                        <li>
                            <a href="{{url("index")}}">主页</a>
                        </li>
                        <li>
                            <a>用户中心</a>
                        </li>
                        <li>
                            <strong>相册列表</strong>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-2">

                </div>
            </div>
            <div class="wrapper wrapper-content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox float-e-margins">
                            <div class="ibox-title">
                                <h5>Picutre <small></small></h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-up"></i>
                                    </a>
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="basic_gallery.html#">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                        {{--<li><a href="basic_gallery.html#">选项1</a>--}}
                                        {{--</li>--}}
                                        {{--<li><a href="basic_gallery.html#">选项2</a>--}}
                                        {{--</li>--}}
                                    </ul>
                                    <a class="close-link">
                                        <i class="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ibox-content">

                                @foreach($dirname as $k=>$v)
                                    <a class="fancybox" href="{{$v}}" title="<?php echo substr($v,strrpos($v,"/"),999)?>">
                                        <img alt="image" src="{{$v}}" />
                                    </a>
                                @endforeach
                            </div>
                        </div>
                    </div>

                </div>
                @include("layouts.footer")
            </div>
        </div>
    </div>


    <!-- Mainly scripts -->
    <script src="style/js/jquery-2.1.1.min.js"></script>
    <script src="style/js/bootstrap.min.js?v=3.4.0"></script>
    <script src="style/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="style/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Peity -->
    <script src="style/js/plugins/peity/jquery.peity.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="style/js/hplus.js?v=2.2.0"></script>
    <script src="style/js/plugins/pace/pace.min.js"></script>

    <!-- Fancy box -->
    <script src="style/js/plugins/fancybox/jquery.fancybox.js"></script>


    <script>
        $(document).ready(function () {
            $('.fancybox').fancybox({
                openEffect: 'none',
                closeEffect: 'none'
            });
        });
    </script>
</body>

</html>

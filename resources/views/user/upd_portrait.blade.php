<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="renderer" content="webkit">

    <title>HDHM_HOME - 头像上传</title>
    <meta name="keywords" content="HDHM_HOME - 头像上传">
    <meta name="description" content="HDHM_HOME - 头像上传">

    <link href="style/css/bootstrap.min.css?v=3.4.0" rel="stylesheet">
    <link href="style/font-awesome/css/font-awesome.css?v=4.3.0" rel="stylesheet">
    <link href="style/css/animate.css" rel="stylesheet">
    <link href="style/css/plugins/dropzone/basic.css" rel="stylesheet">
    <link href="style/css/plugins/dropzone/dropzone.css" rel="stylesheet">
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
                    <h2>头像上传</h2>
                    <ol class="breadcrumb">
                        <li>
                            <a href="{{url("index")}}">主页</a>
                        </li>
                        <li>
                            <a>管理</a>
                        </li>
                        <li>
                            <strong>头像上传</strong>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-2">

                </div>
            </div>
            <div class="wrapper wrapper-content animated fadeIn">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox float-e-margins">
                            <div class="ibox-title">
                                <h5>头像上传</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-up"></i>
                                    </a>
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                        <li><a href="#"></a>
                                        </li>
                                    </ul>
                                    <a class="close-link">
                                        <i class="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ibox-content">
                                <form id="my-awesome-dropzone" class="dropzone" action="{{URL("add_portrait")}}" method="post" >
                                    <input type="hidden" name="_token" value="{{csrf_token()}}"/>
                                    <div class="dropzone-previews"></div>
                                    <button type="submit" class="btn btn-primary pull-right">提交</button>
                                </form>
                                <div>
                                    <div class="m">请主人选择1张照片上传  ::★★★</div>
                                </div>
                            </div>
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

    <!-- Custom and plugin javascript -->
    <script src="style/js/hplus.js?v=2.2.0"></script>
    <script src="style/js/plugins/pace/pace.min.js"></script>

    <!-- DROPZONE -->
    <script src="style/js/plugins/dropzone/dropzone.js"></script>
    <script>
        $(document).ready(function () {

            Dropzone.options.myAwesomeDropzone = {

                autoProcessQueue: false,
                uploadMultiple: true,
                parallelUploads: 100,
                maxFiles: 100,

                // Dropzone settings
                init: function () {
                    var myDropzone = this;

                    this.element.querySelector("button[type=submit]").addEventListener("click", function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        myDropzone.processQueue();
                    });
                    this.on("sendingmultiple", function () {});
                    this.on("successmultiple", function (files, response) {});
                    this.on("errormultiple", function (files, response) {});
                }

            }

        });
    </script>


</body>

</html>

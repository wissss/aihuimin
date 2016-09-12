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
                    <h2>富头像上传编辑器</h2>
                    <ol class="breadcrumb">
                        <li>
                            <a href="index.html">主页</a>
                        </li>
                        <li>
                            <a>表单</a>
                        </li>
                        <li>
                            <strong>富头像上传编辑器</strong>
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
                                <h5>富头像上传编辑器</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-up"></i>
                                    </a>
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="form_editors.html#">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                        <li><a href="form_editors.html#">选项1</a>
                                        </li>
                                        <li><a href="form_editors.html#">选项2</a>
                                        </li>
                                    </ul>
                                    <a class="close-link">
                                        <i class="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="ibox-content">
                                <ul class="nav nav-tabs" id="avatar-tab">
                                    <li class="active" id="upload"><a href="javascript:;">本地上传</a>
                                    </li>
                                    <li id="webcam"><a href="javascript:;">视频拍照</a>
                                    </li>
                                    <li id="albums"><a href="javascript:;">相册选取</a>
                                    </li>
                                </ul>
                                <div class="m-t m-b">
                                    <div id="flash1">
                                        <p id="swf1">本组件需要安装Flash Player后才可使用，请从<a href="http://www.adobe.com/go/getflashplayer">这里</a>下载安装。</p>
                                    </div>
                                    <div id="editorPanelButtons" style="display:none">
                                        <p class="m-t">
                                            <label class="checkbox-inline">
                                                <input type="checkbox" id="src_upload">是否上传原图片？</label>
                                        </p>
                                        <p>
                                            <a href="javascript:;" class="btn btn-w-m btn-primary button_upload"><i class="fa fa-upload"></i> 上传</a>
                                            <a href="javascript:;" class="btn btn-w-m btn-white button_cancel">取消</a>
                                        </p>
                                    </div>
                                    <p id="webcamPanelButton" style="display:none">
                                        <a href="javascript:;" class="btn btn-w-m btn-info button_shutter"><i class="fa fa-camera"></i> 拍照</a>
                                    </p>
                                    <div id="userAlbums" style="display:none">
                                        <a href="style/img/a1.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a1.jpg" alt="示例图片1" />
                                        </a>
                                        <a href="style/img/a2.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a2.jpg" alt="示例图片2" />
                                        </a>
                                        <a href="style/img/a3.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a3.jpg" alt="示例图片2" />
                                        </a>
                                        <a href="style/img/a4.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a4.jpg" alt="示例图片2" />
                                        </a>
                                        <a href="style/img/a5.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a5.jpg" alt="示例图片2" />
                                        </a>
                                        <a href="style/img/a6.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a6.jpg" alt="示例图片2" />
                                        </a>
                                        <a href="style/img/a7.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a7.jpg" alt="示例图片2" />
                                        </a>
                                        <a href="style/img/a8.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a8.jpg" alt="示例图片2" />
                                        </a>
                                        <a href="style/img/a9.jpg" class="fancybox" title="选取该照片">
                                            <img src="style/img/a9.jpg" alt="示例图片2" />
                                        </a>>
                                    </div>
                                </div>
                                <div class="alert alert-warning alert-dismissable m-t">
                                    <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
                                    - 本示例不提供图片上传功能，如果需要测试，请访问官网：<a href="http://www.fullavatareditor.com/demo.html" target="_blank">http://www.fullavatareditor.com/demo.html</a>
                                    <br>- 测试 <b>视频拍照</b> 功能时，请注意允许<code>flash</code>和<code>浏览器</code>使用摄像头，否则可能会无法拍照。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox float-e-margins">

                            <div class="ibox-content">

                                <h2>
                                富头像上传编辑器简介
                            </h2>
                                <p>
                                    富头像上传编辑器是一款支持本地上传、预览、视频拍照和网络加载的flash头像编辑上传插件，可缩放、裁剪、旋转、定位和调色等...。
                                </p>

                                <div class="alert alert-info">
                                    官网：<a href="http://www.fullavatareditor.com/" target="_blank">http://www.fullavatareditor.com/</a>
                                </div>
                                <p><span class="label label-warning">注意：这是一款商业插件，如果需要，请在获得许可后使用！</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="pull-right">
                    By：<a href="http://www.zi-han.net" target="_blank">zihan's blog</a>
                </div>
                <div>
                    <strong>Copyright</strong> H+ &copy; 2014
                </div>
            </div>

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

    <!-- fullavatareditor -->
    <script type="text/javascript" src="style/plugins/fullavatareditor/scripts/swfobject.js"></script>
    <script type="text/javascript" src="style/plugins/fullavatareditor/scripts/fullAvatarEditor.js"></script>
    <script type="text/javascript" src="style/plugins/fullavatareditor/scripts/jQuery.Cookie.js"></script>
    <script type="text/javascript" src="style/plugins/fullavatareditor/scripts/test.js"></script>
</body>

</html>

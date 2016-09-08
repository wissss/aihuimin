requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './resources/js/app',
    urlArgs: "bust=" + (new Date()).getTime(),
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    map: {
        '*': {
            'css': 'lib/css'
        }
    },
    paths: {
    },
    shim: {
       // 'lib/toastr': ['css!../../../css/plugins/toastr/toastr.min.css']
    }
});
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
require(["page_load"],
        function (page_load) {
            page_load.init("side-menu");
        }
);

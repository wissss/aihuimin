//创建匿名元素方式的modal 用于程序当中 弹出新增删除窗口，用于选择窗口
define(["lib/wayjs_transform"], function (wayjs_transform) {
    function loadContent(url, container, initdata, initdata1) {
        $.ajaxSetup({
            cache: false //close AJAX cache
        });
        var sel = '#main_content';
        if (container) {
            sel = container;
        }
        $(sel).empty();
        $(sel).load(url, function () {
//            alert(url.replace(".html", ""));
            require(["page/" + url.replace(".html", "")],
                    function (obj) {
                        wayjs_transform.registerFilters();
                        way.set("init_obj1232323232", {});
                        way.registerBindings();
                        if (obj.pageInit) {
                            obj.pageInit(initdata, initdata1);
                        }

                    }
            );

        });
    }

    return {
        loadContent: loadContent
    }
});

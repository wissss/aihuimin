//使用了 wayjs 作为双向绑定的工具 
//所有的界面js都必须返回一个叫做pageInit的方法给page_loadjs. 以后提交表单用这个submitor就可以了
define(['service/kernel/application'], function (application) {
    function load() {
        application.load(function (result) {
            way.set("kernel.formdata", result);
        });
    }
    function bindEvent() {
        $('#appSave').on('click', function () {
            application.save(way.get("kernel.formdata"), function (result) {
                //就是为了演示。如果这里需要重新加载table数据 就可以table.reload();
                console.log(result);
            });
        });
        $('#appReset').unbind("click").click(function () {
            load();
        });
    }

    function pageInit() {
        load();
        bindEvent();
    }
    return {
        pageInit: pageInit
    };
});



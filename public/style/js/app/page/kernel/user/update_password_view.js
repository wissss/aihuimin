//使用了 wayjs 作为双向绑定的工具 
//所有的界面js都必须返回一个叫做pageInit的方法给page_loadjs. 以后提交表单用这个submitor就可以了
define(['service/kernel/update_password'], function (update_password) {

    function bindEvent() {
        
        $('#passwordSave').on('click', function () {
            update_password.save(way.get("kernel_password.formdata"));
        });
    }
    function pageInit() {
        
        way.set("kernel_password.formdata", {password1: "", password2: ""});
        bindEvent();
    }

    return {
        pageInit: pageInit
    };
});



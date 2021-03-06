/**
 * Created by fc on 2016/2/3.
 */
/*新增记录的方法 */
define(["service/kernel/user", 'lib/mymodal'], function (user, mymodal) {
    var addformdata = "kernel_ot_add.addform";
    //注册重置与保存事件
    function registerEvent(modal) {

        //添加重置按钮绑定调用初始化的方法
        $('#id-add-reset').unbind("click").click(function () {
            initAddForm();
        });
        //添加保存按钮绑定
        $("#id-add-save").click(function () {
            alert(0);
            console.log(way.get(addformdata));
            user.add(way.get(addformdata), function (result) {
                if (result.flag * 1 == 200) {
                    //保存完成关闭模态窗口
                    modal.close();
                }
            });
        });

    }
    //初始化表单
    function initAddForm(initData) {
        way.set(addformdata, {
            username: "",
            password: "",
            peoplename: "",
            sex: "",
            telephone: "",
            address: "",
            email: "",
        });
    }
    //初始化页面环境，在加载页面时加载。 第一个参数就是模态类自动传入的
    function pageInit(modal, initData) {
        initAddForm(initData);
        registerEvent(modal);
    }
    return {
        pageInit: pageInit
    };
});


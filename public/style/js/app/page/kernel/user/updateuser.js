/**
 * Created by fc on 2016/2/3.
 */
/*新增或者修改记录的方法 */
define(["service/kernel/user", 'lib/mymodal'], function (user, mymodal) {
    var addformdata = "kernel_ot_edit.addform";
    //注册重置与保存事件
    function registerEvent(modal, initData) {
        var locData = initData;
        //添加重置按钮绑定调用初始化的方法
        $('#ot_addReset').unbind("click").click(function () {
            console.log(initData);
            var oldObject = jQuery.extend({}, locData);
            initAddForm(oldObject);
        });
        //添加保存按钮绑定
        $("#ot_addSave").click(function () {
            console.log(way.get(addformdata));
            user.update(way.get(addformdata), function (result) {
                if (result.flag * 1 == 200) {
                    //保存完成关闭模态窗口
                    modal.close();
                }
            });
        });

    }
    //初始化表单
    function initAddForm(initData) {
        way.set(addformdata, initData);
    }
    //初始化页面环境，在加载页面时加载。 第一个参数就是模态类自动传入的
    function pageInit(modal, initData) {
        var oldObject = jQuery.extend({}, initData);
        initAddForm(initData);
        registerEvent(modal, oldObject);
    }
    return {
        pageInit: pageInit
    };
});


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*新增或者修改记录的方法 */
define(["service/kernel/permission", 'lib/mymodal'], function (permission, mymodal) {
    var addformdata = "kernel_per_add.addform";
    //注册重置与保存事件
    function registerEvent(modal) {
        //添加重置按钮绑定调用初始化的方法
        $('#per_addReset').unbind("click").click(function () {
            initAddForm();
        });
        //添加保存按钮绑定
        $("#per_addSave").click(function () {
            console.log(way.get(addformdata));
            permission.add(way.get(addformdata), function (result) {
                if (result.flag * 1 === 200) {
                    //保存完成关闭模态窗口
                    modal.close(); 
                }
            });
        });

    }
    //初始化表单
    function initAddForm(initData) {
        way.set(addformdata, {            
            typeId: "",
            title: "",
            itemText: "",            
            validFlag:""
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




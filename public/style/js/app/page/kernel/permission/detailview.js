/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*新增或者修改记录的方法 */
define(["service/kernel/permission", 'lib/mymodal'], function (permission, mymodal) {
    var data = "kernel_per_detail.data";
    //注册重置与保存事件
    function registerEvent(modal) {
        //添加重置按钮绑定调用初始化的方法
        $("#per_detail_colse").click(function () {
            modal.close();
        });

    }
    //初始化表单
    function initAddForm(initData) {
        way.set(data, initData);
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



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*新增或者修改记录的方法 */
define(["service/kernel/datadictionary", 'lib/mymodal'], function (datadictionary, mymodal) {
    var addformdata = "kernel_dic_options_edit.addform";
    var olddata = "kernel_dic_options_edit.olddata";
    //注册重置与保存事件
    function registerEvent(modal) {
        //添加重置按钮绑定调用初始化的方法
        $('#dic_options_editReset').unbind("click").click(function () {
            resetForm();
        });
        //添加保存按钮绑定
        $("#dic_options_editSave").click(function () {

            datadictionary.updateOption(way.get(addformdata), function (result) {
                if (result.flag * 1 === 200) {
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
    function resetForm() {
        way.set(addformdata + ".title", way.get(olddata + ".title"));
        way.set(addformdata + ".storeValue", way.get(olddata + ".storeValue"));
        way.set(addformdata + ".sortStr", way.get(olddata + ".sortStr"));
    }
    //初始化页面环境，在加载页面时加载。 第一个参数就是模态类自动传入的
    function pageInit(modal, initData) {
        var oldObject = jQuery.extend({}, initData);
        way.set(olddata, oldObject);
        initAddForm(initData);
        registerEvent(modal);
    }
    return {
        pageInit: pageInit
    };
});




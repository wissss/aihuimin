/*新增或者修改记录的方法 */
define(["service/kernel/organize", 'lib/mymodal'], function (organize, mymodal) {
    var addformdata = "kernel_ot_edit.addform";
    //注册重置与保存事件
    function registerEvent(modal, initData) {
        //添加保存按钮绑定
        $('#sel_organize_type').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
              mymodal.modal("选择组织机构类型", {url: "kernel/organize/subquery.html",
                callback: function (returnData) {
                    way.set(addformdata+".parentCnTitle", returnData.cnTitle);
                    way.set(addformdata+".parentId", returnData.id);
                    way.set(addformdata+".organizeTypeId", returnData.organizeTypeId);
                }
            });//
        });
        //添加重置按钮绑定调用初始化的方法
        var locData = initData;
        $('#ot_addReset').unbind("click").click(function () {
            console.log(locData);
            var oldObject = jQuery.extend({}, locData);
            initAddForm(oldObject);
        });
        //添加保存按钮绑定
        $("#ot_addSave").click(function () {
            console.log(way.get(addformdata));
            organize.update(way.get(addformdata), function (result) {
                if (result.flag * 1 == 200) {
                    //保存完成关闭模态窗口
                    modal.close(result);
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


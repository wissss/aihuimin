/*新增或者修改记录的方法 */
define(["service/kernel/jobrank", 'lib/mymodal'], function (jobrank, mymodal) {
    var addformdata = "kernel_jobrank_edit.editdata";
    //注册重置与保存事件
    function registerEvent(modal, initData) {
        //添加重置按钮绑定调用初始化的方法
        var locData = initData;
        $('#jobrank_editReset').unbind("click").click(function () {
            console.log(locData);
            var oldObject = jQuery.extend({}, locData);
            initAddForm(oldObject);
        });
        //添加保存按钮绑定
        $("#jobrank_editSave").click(function () {
            console.log(way.get(addformdata));
            jobrank.update(way.get(addformdata), function (result) {
                if (result.flag * 1 == 200) {
                    //保存完成关闭模态窗口
                    modal.close(result);
                }
            });
        });
        //修改页面的类型选择按钮新打开页面
        $('#sel_jobrank_Eot_type').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("选择组织机构类型", {url: "kernel/organizetype/sel.html",
                callback: function (returnData) {
                    var value = returnData.organizeTypeTitle;
                    console.log(value);
                    way.set(addformdata + ".organizeTypeTitle", returnData.title);
                    way.set(addformdata + ".organizeType", returnData.id);
                }
            });
        });
        //修改页面的职级选择按钮新打开页面
        $('#sel_jobrank_Erank_type').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("选择上级职级", {url: "kernel/jobrank/sel.html",
                callback: function (returnData) {
                    var value = returnData.cnTitle;
                    way.set(addformdata + ".parentTitle", returnData.cnTitle);
                    way.set(addformdata + ".parentId", returnData.id);
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


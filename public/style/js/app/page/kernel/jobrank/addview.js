/*新增或者修改记录的方法 */
/* global way */
define(["service/kernel/jobrank", 'lib/mymodal'], function (jobrank, mymodal) {
    var addformdata = "kernel_jobrank_add.jobrankForm";
    //注册重置与保存事件
    function registerEvent(modal) {
        //添加页面里的类型选择新打开的按钮
        $('#sel_jobrank_ot_type').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("选择组织机构类型", {url: "kernel/organizetype/sel.html",
                callback: function (returnData) {
                    way.set(addformdata + ".organizeTypeTitle", returnData.title);
                    way.set(addformdata + ".organizeType", returnData.id);
                }
            });
        });
        //添加页面里的职级选择新打开的按钮
        $('#sel_jobrank_rank_type').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("选择上级职级", {url: "kernel/jobrank/sel.html",
                callback: function (returnData) {
                    way.set(addformdata + ".parentTitle", returnData.cnTitle);
                    way.set(addformdata + ".parentId", returnData.id);
                }
            });
        });
        //添加重置按钮绑定调用初始化的方法
        $('#jr_addReset').unbind("click").click(function () {
            initAddForm();
        });
        //添加保存按钮绑定
        $("#jr_addSave").click(function () {
            //console.log("保存按键点下");
            console.log(way.get(addformdata));
            jobrank.add(way.get(addformdata), function (result) {
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
            organizeType: "",
            cnTitle: "",
            title: "",
            sortStr: "",
            parentId: "",
            //typeId:"",
            validFlag: "",
            description: ""
                    //id: 0
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


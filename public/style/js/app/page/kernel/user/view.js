/**
 * Created by fc on 2016/2/2.
 */

define(["service/kernel/user", 'lib/mymodal', 'lib/mytable'], function (user, mymodal, mytable) {
    //注册相应事件
    function registerEvent(table) {
        //给查询函数注册点击事件
        $("#kernel_user_query").click(function () {
            table.bootstrapTable('refresh');
        });
        $("#kernel_user_condition").click(function () {
            initQueryCondition();
        });
        //添加保存按钮绑定
        $('#kernel_user_add').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("添加用户信息", {url: "kernel/user/adduser.html",
                callback: function (returnData) {
                    //alert(returnData);
                }
            });//
        });
        //查看
        //kernel_organize_type_queryDetail
        $("#kernel_user_detail").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("查看用户信息", {url: "kernel/user/queryview.html",
                    initData:record,
                    callback: function (returnData) {
                        //alert(returnData);
                    }
                });//


            }

        });
        //修改记录
        //kernel_organize_type_queryChange
        $("#kernel_user_change").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改用户信息", {url: "kernel/user/updateuser.html",
                    initData:record,
                    callback: function (returnData) {
                        table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        //删除记录
        //kernel_user_type_queryDelete
        $("#kernel_user_delete").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除该用户吗");
                if (bool) {
                    user.del(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }


            }
        });
    }

    //初始化查询条件
    function initQueryCondition() {
        //设置查询条件到way.js。
        way.set("kernel_user.ot_querydata", {
            username: "",
            address: "",
            peoplename: "",
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["username"] = way.get("kernel_user.ot_querydata.username");
        src["peoplename"] = way.get("kernel_user.ot_querydata.peoplename");
        src["account"] = way.get("kernel_user.ot_querydata.account");
        src["password"] = way.get("kernel_user.ot_querydata.password");
        src["xb"] = way.get("kernel_user.ot_querydata.xb");
        src["email"] = way.get("kernel_user.ot_querydata.email");
        src["address"] = way.get("kernel_user.ot_querydata.address");
        src["telephone"] = way.get("kernel_user.ot_querydata.telephone");
        return src;
    }

    //初始化页面环境，在加载页面时加载。
    function pageInit() {
        initQueryCondition();
        var table = mytable.table({
            sel: "#user_list_table",
            queryParams: queryParams
        });
        registerEvent(table);

    }
    return {
        pageInit: pageInit
    };
});



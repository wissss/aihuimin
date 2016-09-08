/* global way */

define(["service/kernel/userrole", 'lib/mymodal', 'lib/mytable'], function (userrole, mymodal, mytable) {

    //注册相应事件
    function registerEvent(table) {
        //给查询函数注册点击事件
        $("#kernel_user_role_query").click(function () {

            table.bootstrapTable('refresh');
        });
        $("#kernel_user_role_queryCondition_reset").click(function () {
            initQueryCondition();
        });
        //添加保存按钮绑定
        $('#kernel_user_role_add').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("添加用户角色", {url: "kernel/userrole/addview.html",
                callback: function (returnData) {
                    //alert(returnData);
                }
            });//
        });
        //查看
        //kernel_user_role_queryDetail
        $("#kernel_user_role_queryDetail").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("查看用户角色", {url: "kernel/userrole/detailview.html",
                    initData:record,
                    callback: function (returnData) {
                        //alert(returnData);
                    }
                });


            }

        });
        //修改记录
        //kernel_user_role_queryChange
        $("#kernel_user_role_update").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改用户角色", {url: "kernel/userrole/editview.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        //删除记录
        //kernel_user_role_del
        $("#kernel_user_role_del").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除用户角色吗");
                if (bool) {
                    userrole.del(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }


            }
        });
//        -------------------------------------------------------
        $("#kernel_user_organize").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("维护所属机构类型", {url: "kernel/userrole/oranizetype.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        
        $("#kernel_user_role_permission").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("维护权限", {url: "kernel/userrole/permission.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        
        $("#kernel_user_role_maue").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("维护菜单", {url: "kernel/userrole/menu.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });//
            }

        });
//        -------------------------------------------------------        
    }

    //初始化查询条件
    function initQueryCondition() {
        //设置查询条件到way.js。
        way.set("kernel_userrole.ur_querydata", {
            title: ""


        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["title"] = way.get("kernel_userrole.ur_querydata.title");

        return src;
    }

    //初始化页面环境，在加载页面时加载。
    function pageInit() {
        initQueryCondition();
        var table = mytable.table({
            sel: "#userrole_list_table",
            queryParams: queryParams
        });
        registerEvent(table);

    }
    return {
        pageInit: pageInit
    };
});


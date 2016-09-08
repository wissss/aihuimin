/**
 * Created by fc on 2016/2/2.
 */

define(["service/kernel/menu", 'lib/mymodal', 'lib/mytable'], function (menu, mymodal, mytable) {
    //注册相应事件
    function registerEvent(table) {
        //给查询函数注册点击事件
        $("#kernel_menu_query").click(function () {
            table.bootstrapTable('refresh');
        });
        $("#kernel_menu_condition").click(function () {
            initQueryCondition();
        });
        //添加保存按钮绑定
        $('#kernel_menu_add').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("添加导航栏菜单", {url: "kernel/menu/addmenu.html",
                callback: function (returnData) {
                    //alert(returnData);
                }
            });//
        });
        //查看
        //kernel_organize_type_queryDetail
        $("#kernel_menu_detail").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("查看导航栏菜单", {url: "kernel/menu/queryview.html",
                    initData:record,
                    callback: function (returnData) {
                        //alert(returnData);
                    }
                });//


            }

        });
        //修改记录
        //kernel_organize_type_queryChange
        $("#kernel_menu_change").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改导航栏菜单", {url: "kernel/menu/updateview.html",
                    initData:record,
                    callback: function (returnData) {
                        table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        //删除记录
        //kernel_organize_type_queryDelete
        $("#kernel_menu_delete").click(function () {

            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除导航栏菜单吗");
                if (bool) {
                    menu.del(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }


            }
        });
    }

    //初始化查询条件
    function initQueryCondition() {
        //设置查询条件到way.js。
        way.set("kernel_menu.ot_querydata", {
            title: "",
            parentTitle: "",
            sortStr: "",
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["title"] = way.get("kernel_menu.ot_querydata.title");
        src["parentTitle"] = way.get("kernel_menu.ot_querydata.parentTitle");
        src["sortStr"] = way.get("kernel_menu.ot_querydata.sortStr");
        src["linkPage"] = way.get("kernel_menu.ot_querydata.linkPage");
        src["description"] = way.get("kernel_menu.ot_querydata.description");
        return src;
    }

    //初始化页面环境，在加载页面时加载。
    function pageInit() {
        initQueryCondition();
        var table = mytable.table({
            sel: "#menu_list_table",
            queryParams: queryParams
        });
        registerEvent(table);

    }
    return {
        pageInit: pageInit
    };
});



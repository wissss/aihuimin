/* global way */
define(["service/kernel/menu", 'lib/mymodal', 'lib/mytable'], function (menu, mymodal, mytable) {
    //注册相应事件
    function registerEvent(table) {
        //给查询函数注册点击事件
        $("#kernel_user_role_menu_save").click(function () {
           var allData = table.bootstrapTable('getData');
            console.log(allData);
            menu.menuSave(allData, function (result) {
                if (result.flag * 1 == 200) {
                    //保存完成关闭模态窗口
                    //modal.close();
                    table.bootstrapTable('refresh');
                }
            });
        });
        //给重置查询函数注册点击事件
        $("#kernel_user_role_menu_reset").click(function () {
            table.bootstrapTable('refresh');
        });
        //初始化界面给checkbox 选中
        table.on('load-success.bs.table', function (event, data) {
            var array = new Array();
            for (var i = 0; i < data.rows.length; i++) {
                if (data.rows[i].id != null
                        && data.rows[i].id != 0) {
                    array.push(data.rows[i].id);
                }
            }
            console.log("checkby:" + array);
            table.bootstrapTable("checkBy", {field: "id", values: array})

        });
    }
    //初始化查询条件
    function initQueryCondition(menudata) {
        way.set("kernel_menu_user_role.menu_query", menudata);
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["UserRoleId"] = way.get("kernel_menu_user_role.menu_query.id");
        return src;
    }

    //初始化页面环境，在加载页面时加载。
    function pageInit(modal, initData) {
        initQueryCondition(initData);
        var table = mytable.table({
            sel: "#menu_userorle_table",
            queryParams: queryParams,
            onLoadSuccess: function (data) { //初始化 checkbox
                alert("onLoadSuccess");
                console.log(data);

            }
        });

        registerEvent(table);

    }
    return {
        pageInit: pageInit
    };
});


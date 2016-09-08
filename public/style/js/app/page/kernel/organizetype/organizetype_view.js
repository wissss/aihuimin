/* global way */

define(["service/kernel/organizetype", 'lib/mymodal', 'lib/mytable'], function (organizetype, mymodal, mytable) {

    //注册相应事件
    function registerEvent(table) {
        //给查询函数注册点击事件
        $("#kernel_organize_type_query").click(function () {

            table.bootstrapTable('refresh');
        });
        $("#kernel_organize_type_queryCondition_reset").click(function () {

            initQueryCondition();
        });
        //添加保存按钮绑定
        $('#kernel_organize_queryAdd').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("添加组织机构类型", {url: "kernel/organizetype/addview.html",
                callback: function (returnData) {
                    table.bootstrapTable('refresh');
                }
            });//
        });
        //查看
        //kernel_organize_type_queryDetail
        $("#kernel_organize_type_queryDetail").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("查看组织机构类型", {url: "kernel/organizetype/detailview.html",
                    initData:record,
                    callback: function (returnData) {
                        //alert(returnData);
                    }
                });//


            }

        });
        //修改记录
        //kernel_organize_type_queryChange
        $("#kernel_organize_type_queryChange").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改组织机构类型", {url: "kernel/organizetype/editview.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        //删除记录
        //kernel_organize_type_queryDelete
        $("#kernel_organize_type_queryDelete").click(function () {

            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除组织机构类型吗");
                if (bool) {
                    organizetype.del(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }


            }
        });
    }

    //初始化查询条件
    function initQueryCondition() {
        //设置查询条件到way.js。
        way.set("kernel_organizetype.ot_querydata", {
            title: "",
            parentTitle: "",
            sortStr: ""
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["title"] = way.get("kernel_organizetype.ot_querydata.title");
        src["parentTitle"] = way.get("kernel_organizetype.ot_querydata.parentTitle");
        src["sortStr"] = way.get("kernel_organizetype.ot_querydata.sortStr");
        return src;
    }

    //初始化页面环境，在加载页面时加载。
    function pageInit() {
        initQueryCondition();
        var table = mytable.table({
            sel: "#organizetype_list_table",
            queryParams: queryParams
        });
        registerEvent(table);

    }
    return {
        pageInit: pageInit
    };
});


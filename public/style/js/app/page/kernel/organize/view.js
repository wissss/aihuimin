/* global way */

define(["service/kernel/organize", 'lib/mymodal', 'lib/mytable'], function (organize, mymodal, mytable) {

    //注册相应事件
    function registerEvent(table) {
        //给查询函数注册点击事件
        $("#kernel_organize_query").click(function () {

            table.bootstrapTable('refresh');
        });
        $("#kernel_organize_queryreset").click(function () {

            initQueryCondition();
        });
        //添加按钮绑定
        $('#kernel_organize_queryAdd').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("添加机构", {url: "kernel/organize/addview.html",
                callback: function (returnData) {
                    table.bootstrapTable('refresh');
                }
            });//
        });
        //查看
        //kernel_organize_type_queryDetail
//        $("#kernel_organize_type_queryDetail").click(function () {
//            var records = table.bootstrapTable('getSelections');
//            if (records.length > 0) {
//                var record = records[0];
//                //这个参数是控件自己加上的所以要删除.
//                record.state = undefined;
//                mymodal.modal("查看组织机构类型", {url: "kernel/organizetype/detailview.html",
//                    initData:record,
//                    callback: function (returnData) {
//                        //alert(returnData);
//                    }
//                });//
//
//
//            }
//
//        });
        //修改记录
        //kernel_organize_type_queryChange
        $("#kernel_organize_queryChange").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改机构", {url: "kernel/organize/editview.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        //删除记录
        //kernel_organize_type_queryDelete
        $("#kernel_organize_queryDelete").click(function () {

            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除机构吗");
                if (bool) {
                    organize.del(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }


            }
        });
    }

    //初始化查询条件
    function initQueryCondition() {
        //设置查询条件到way.js。
        way.set("kernel_organize.organize_querydata", {
            cnTitle: "",
            parentCnTitle: "",
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["cnTitle"] = way.get("kernel_organize.organize_querydata.cnTitle");
        src["parentCnTitle"] = way.get("kernel_organize.organize_querydata.parentCnTitle");
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


/* global way */

define(["service/kernel/datadictionary", 'lib/mymodal', 'lib/mytable'], function (datadictionary, mymodal, mytable) {

    //注册相应事件
    function registerEvent(table, initData) {
        kernel_datadictionary_options_Add
        //添加保存按钮绑定
        $('#kernel_datadictionary_options_Add').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("添加" + initData.title + "新选项", {url: "kernel/datadictionary/options/addfov.html",
                initData: initData,
                callback: function (returnData) {
                    table.bootstrapTable('refresh');
                }
            });//
        });
        //修改
        $("#kernel_datadictionary_options_Change").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改选项", {url: "kernel/datadictionary/options/editfov.html",
                    initData: record,
                    callback: function (returnData) {
                        table.bootstrapTable('refresh');
                    }
                });//
            }

        });


        $("#kernel_datadictionary_options_Delete").click(function () {

            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除数据吗");
                if (bool) {
                    datadictionary.delOption(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }


            }
        });

    }
    //初始化查询条件
    function initQueryCondition(initData) {
        //设置查询条件到way.js。
        way.set("kernel_datadictionary.options.initData", initData);
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["optionId"] = way.get("kernel_datadictionary.options.initData.id");
        return src;
    }

    //初始化页面环境，在加载页面时加载。
    function pageInit(modal, initData) {
        initQueryCondition(initData);
        var table = mytable.table({
            sel: "#datadictionary_options_list_table",
            queryParams: queryParams
        });
        registerEvent(table, initData);

    }
    return {
        pageInit: pageInit
    };
});



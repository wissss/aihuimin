/* global way */

define(["service/kernel/datadictionary", 'lib/mymodal', 'lib/mytable'], function (datadictionary, mymodal, mytable) {

    //注册相应事件
    function registerEvent(table) {
        //给查询函数注册点击事件
        $("#kernel_datadictionary_query").click(function () {
            table.bootstrapTable('refresh');
        });
        $("#kernel_datadictionary_queryCondition_reset").click(function () {
            initQueryCondition();
        });
        //添加保存按钮绑定
        $('#kernel_datadictionary_queryAdd').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("新增类别", {url: "kernel/datadictionary/adddatadictionary.html",
                callback: function (returnData) {
                    table.bootstrapTable('refresh');
                }
            });//
        });
        //查看
        //kernel_organize_type_queryDetail
        $("#kernel_datadictionary_queryDetail").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("查看类别", {url: "kernel/datadictionary/detailview.html",
                    initData:record,
                    callback: function (returnData) {
                        //alert(returnData);
                    }
                });//


            }

        });
        
        //修改
        $("#kernel_datadictionary_queryChange").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改数据字典维护", {url: "kernel/datadictionary/editview.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        //维护选项
        $("#kernel_datadictionary_options_action").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改类别", {url: "kernel/datadictionary/options/frequent_option_value_view.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });//
            }

        });
        //删除记录
        //kernel_organize_type_queryDelete
        $("#kernel_datadictionary_queryDelete").click(function () {

            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除数据吗");
                if (bool) {
                    datadictionary.del(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }


            }
        });
    }

    //初始化查询条件
    function initQueryCondition() {        
        //设置查询条件到way.js。
        way.set("kernel_datadictionary.dic_querydata", {
            title: "",            
            description: "",
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["title"] = way.get("kernel_datadictionary.dic_querydata.title");       
        src["description"] = way.get("kernel_datadictionary.dic_querydata.description");
        return src;
    } 

    //初始化页面环境，在加载页面时加载。
    function pageInit() {
        initQueryCondition();
        var table = mytable.table({
            sel: "#datadictionary_list_table",
            queryParams: queryParams
        });
        registerEvent(table);

    }
    return {
        pageInit: pageInit
    };
});



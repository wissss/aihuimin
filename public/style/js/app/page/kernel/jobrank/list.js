/* global way */
define(["service/kernel/jobrank", 'lib/mymodal', 'lib/mytable'], function (jobrank, mymodal, mytable) {
    //注册相应事件
    function registerEvent(table) {
        //给查询函数注册点击事件
        $("#kernel_jobrank_query").click(function () {
            table.bootstrapTable('refresh');
        });
        //给重置查询函数注册点击事件
        $("#kernel_jobrank_queryCondition_reset").click(function () {
            initQueryCondition();
        });
        //添加保存按钮绑定
        $('#kernel_jobrank_queryAdd').on('click', function () {
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("添加职级信息", {url: "kernel/jobrank/addview.html",
                callback: function (returnData) {
                    table.bootstrapTable('refresh');
                }
            });//
        });
        //查看
        //kernel_organize_type_queryDetail
        $("#kernel_jobrank_queryDetail").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("查看职级信息", {url: "kernel/jobrank/detailview.html",
                    initData: record,
                    callback: function (returnData) {
                        //alert(returnData);
                    }
                });//
            }
        });
        //修改记录
        //kernel_organize_type_queryChange
        $("#kernel_jobrank_queryChange").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改职级信息", {url: "kernel/jobrank/editview.html",
                    initData: record,
                    callback: function (returnData) {
                        table.bootstrapTable('refresh');
                    }
                });//
            }
        });
        $("#kernel_jobrank_asignRole").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("分配角色("+record.cnTitle+")", {url: "kernel/jobrank/userrole.html",
                    initData: record,
                    callback: function (returnData) {
                       
                    }
                });//
            }
        });
        //删除记录
        //kernel_organize_type_queryDelete
        $("#kernel_jobrank_queryDelete").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除职级信息吗");
                if (bool) {
                    jobrank.del(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }
            }
        });
    }
    //初始化查询条件
    function initQueryCondition() {
        //设置查询条件到way.js。
        way.set("kernel_jobrank.jobrank_querydata", {
            cnTitle: "",
            title: "",
            parentTitle: "",
            organizeTypeTitle: "",
            sortStr: ""
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["cnTitle"] = way.get("kernel_jobrank.jobrank_querydata.cnTitle");
        src["title"] = way.get("kernel_jobrank.jobrank_querydata.title");
        src["parentTitle"] = way.get("kernel_jobrank.jobrank_querydata.parentTitle");
        src["organizeTypeTitle"] = way.get("kernel_jobrank.jobrank_querydata.organizeTypeTitle");
        src["sortStr"] = way.get("kernel_jobrank.jobrank_querydata.sortStr");
        return src;
    }

    //初始化页面环境，在加载页面时加载。
    function pageInit() {
        initQueryCondition();
        var table = mytable.table({
            sel: "#jobrank_list_table",
            queryParams: queryParams
        });
        registerEvent(table);

    }
    return {
        pageInit: pageInit
    };
});


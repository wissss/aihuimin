/*新增或者修改记录的方法 */
define(["service/kernel/jobrank", 'lib/mymodal', 'lib/mytable'], function (jobrank, mymodal, mytable) {
    var addformdata = "kernel_jobranksel.addform";
    //sel.html
    //注册重置与保存事件
    function registerEvent(table,modal) {
        //给查询函数注册点击事件
        $("#kernel_jobrank_query_sel").click(function () {
            table.bootstrapTable('refresh');
        });
        //给重置查询函数注册点击事件
        $("#kernel_jobrank_queryCondition_reset_sel").click(function () {
            initQueryCondition();
        });
        table.on('check.bs.table', function (event, row, ttt) {
            console.log(row);
            modal.close(row);
        });
    }
    function initQueryCondition() {
        //设置查询条件到way.js。
        way.set("kernel_jobrank.jobrank_querydata", {
            cnTitle: "",
            title: "",
            parentId: "",
            organizeTypeTitle: "",
            sortStr: ""
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["cnTitle"] = way.get("kernel_jobrank.jobrank_querydata.cnTitle");
        src["title"] = way.get("kernel_jobrank.jobrank_querydata.title");
        src["parentId"] = way.get("kernel_jobrank.jobrank_querydata.parentId");
        src["organizeTypeTitle"] = way.get("kernel_jobrank.jobrank_querydata.organizeTypeTitle");
        src["sortStr"] = way.get("kernel_jobrank.jobrank_querydata.sortStr");
        return src;
    }

    //初始化页面环境，在加载页面时加载。 第一个参数就是模态类自动传入的
    function pageInit(modal, initData) {
        initQueryCondition();
        var table = mytable.table({
            sel: "#jobrank_list_table_sel",
            queryParams: queryParams

        });
        registerEvent(table, modal);
    }
    return {
        pageInit: pageInit
    };
});


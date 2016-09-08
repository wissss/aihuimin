/*新增或者修改记录的方法 */
define(["service/kernel/organizetype", 'lib/mymodal', 'lib/mytable'], function (organizetype, mymodal, mytable) {
    var addformdata = "kernel_ot_add.addform";
    //sel.html
    //注册重置与保存事件
    function registerEvent(table,modal) {
        //给查询函数注册点击事件
        $("#kernel_organize_type_query_sel").click(function () {

            table.bootstrapTable('refresh');
        });
        $("#kernel_organize_type_queryCondition_reset_sel").click(function () {

            initQueryCondition();
        });
//        table.bootstrapTable('onCheck',function(row){
//            row.state=undefined;
//            console.log(row);
//            aler(row);
//            
//        });
        table.on('check.bs.table', function (event, row, ttt) {
            console.log(row);
            modal.close(row);

        });
    }
    //初始化查询条件
    function initQueryCondition() {
        //设置查询条件到way.js。
        way.set("kernel_organizetype_query.ot_querydata", {
            title: "",
            parentTitle: "",
            sortStr: "",
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["title"] = way.get("kernel_organizetype_query.ot_querydata.title");
        src["parentTitle"] = way.get("kernel_organizetype_query.ot_querydata.parentTitle");
        src["sortStr"] = way.get("kernel_organizetype_query.ot_querydata.sortStr");
        return src;
    }

    //初始化页面环境，在加载页面时加载。 第一个参数就是模态类自动传入的
    function pageInit(modal, initData) {
        initQueryCondition();
        var table = mytable.table({
            sel: "#organizetype_list_table_sel",
            queryParams: queryParams

        });
        registerEvent(table, modal);
    }
    return {
        pageInit: pageInit
    };
});


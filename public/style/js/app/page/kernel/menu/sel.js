/*新增或者修改记录的方法 */
define(["service/kernel/menu", 'lib/mymodal', 'lib/mytable'], function (menu, mymodal, mytable) {
    var addformdata = "kernel_menu_query.ot_querydata";
    //sel.html
    //注册重置与保存事件
    function registerEvent(table, modal) {
        //给查询函数注册点击事件
        $("#kernel_menu_query_sel").click(function () {
            table.bootstrapTable('refresh');
        });
        $("#kernel_menu_queryCondition_reset_sel").click(function () {
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
        way.set("kernel_menu_query.ot_querydata", {
            title: "",
            parentTitle: "",
            sortStr: "",
            linkPage:"",
            description: "",
            id: 0,
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        src["title"] = way.get("kernel_menu_query.ot_querydata.title");
        src["parentTitle"] = way.get("kernel_menu_query.ot_querydata.parentTitle");
        src["sortStr"] = way.get("kernel_menu_query.ot_querydata.sortStr");
        src["linkPage"] = way.get("kernel_menu_query.ot_querydata.linkPage");
        src["description"] = way.get("kernel_menu_query.ot_querydata.description");
        return src;
    }

    //初始化页面环境，在加载页面时加载。 第一个参数就是模态类自动传入的
    function pageInit(modal, initData) {
        initQueryCondition();
        var table = mytable.table({
            sel: "#menu_sel_table",
            queryParams: queryParams

        });
        registerEvent(table, modal);
    }
    return {
        pageInit: pageInit
    };
});


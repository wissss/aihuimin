/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global way */

define(["service/kernel/permission", 'lib/mymodal', 'lib/mytable'], function (permission, mymodal, mytable) {
    //注册相应事件
    function registerEvent(table) {
        table.on('load-success.bs.table', function (event, data) {
            console.log(data);
        });
        //给查询函数注册点击事件
        $("#kernel_permission_query").click(function () {
           
            table.bootstrapTable('refresh');
        });
        $("#kernel_permission_queryCondition_reset").click(function () {
            
            initQueryCondition();
        });
        //添加保存按钮绑定
        $('#kernel_permission_queryAdd').on('click', function () {
             
            //打开新增的模态窗口 callback 就是新增完成后关闭窗口的回调方法
            mymodal.modal("添加权限", {url: "kernel/permission/addview.html",
                callback: function (returnData) {
                    //alert(returnData);
                }
            });//
        });
        //查看
        //kernel_organize_type_queryDetail
        $("#kernel_permission_queryDetail").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("查看权限", {url: "kernel/permission/detailview.html",
                    initData:record,
                    callback: function (returnData) {
                        //alert(returnData);
                    }
                });//
            }

        });
        //修改记录
        //kernel_organize_type_queryChange
        $("#kernel_permission_queryChange").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                mymodal.modal("修改权限", {url: "kernel/permission/editview.html",
                    initData:record,
                    callback: function (returnData) {
                       table.bootstrapTable('refresh');
                    }
                });
            }

        });
        //删除记录
        //kernel_organize_type_queryDelete
        $("#kernel_permission_queryDelete").click(function () {
            var records = table.bootstrapTable('getSelections');
            if (records.length > 0) {
                var record = records[0];
                //这个参数是控件自己加上的所以要删除.
                record.state = undefined;
                var bool = window.confirm("确认删除权限吗");
                if (bool) {
                    permission.del(record, function () {
                        table.bootstrapTable('refresh');
                    });
                }
            }
        });
    }

    //初始化查询条件
    function initQueryCondition() {     
       
        //设置查询条件到way.js。
        way.set("kernel_permission.per_querydata", {
            title: "",            
            itemText: ""
        });
        return 1;
    }
    //返回查询条件给表格组件
    function queryParams(src) {
        
        src["title"] = way.get("kernel_permission.per_querydata.title");       
        src["itemText"] = way.get("kernel_permission.per_querydata.itemText");
        return src;
    }

    //初始化页面环境，在加载页面时加载。
    function pageInit() {
         
        initQueryCondition();
        var table = mytable.table({
            sel: "#permission_list_table",
            queryParams: queryParams
        });
        registerEvent(table);

    }
    return {
        pageInit: pageInit
    };
});





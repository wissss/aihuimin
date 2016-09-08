/**
 * Created by fc on 2016/2/1.
 */

define(['lib/submitor', 'lib/dataloader'], function (submitor, dataloader) {
    function query(data, callback) {
        //kernel/appliaction/load.json
        dataloader.get({
            url: "kernel/menu/query.json",
            data: data,
            callback: callback
        });
    }
    function save(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/menu/update.json",
            success: success});
    }
    function menuSave(data, success) {
        submitor.submit(data, {url: "kernel/userrole/save_menu.json",
            success: success});
    }
    function add(data, success) {
        console.log(data);
        submitor.submit(data, {url: "kernel/menu/add.json",
            successAfter: success});
    }
    function del(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/menu/del.json",
            successAfter: success
        });
    }
//    function load(data, success) {
//        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
//        submitor.submit(data, {url: "kernel/appliaction/update.json",
//            successAfter: success
//        });
//    }


    return {
        query: query,
        update: save,
        add: add,
        del: del,
        menuSave:menuSave
    };
});



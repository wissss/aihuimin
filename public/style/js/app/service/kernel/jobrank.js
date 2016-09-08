
define(['lib/submitor', 'lib/dataloader'], function (submitor, dataloader) {
    function query(data, callback) {
        //kernel/appliaction/load.json
        dataloader.get({
            url: "kernel/jobrank/query.json",
            data: data,
            callback: callback
        });
    }
    function queryUserRole(data, callback) {
        //kernel/appliaction/load.json
        dataloader.get({
            url: "kernel/jobrank/userrole_query.json",
            data: data,
            callback: callback
        });
    }
    function saveUserRole(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/jobrank/save_userrole.json",
            success: success});
    }
    function save(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/jobrank/update.json",
            success: success});
    }
    function add(data, success) {
        submitor.submit(data, {url: "kernel/jobrank/add.json",
            successAfter: success});
    }
    function del(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/jobrank/del.json",
            successAfter: success
        });
    }
    return {
        query: query,
        update: save,
        add: add,
        del: del,
        saveUserRole:saveUserRole
    };
});



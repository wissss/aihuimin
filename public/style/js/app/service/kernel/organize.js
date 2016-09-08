
define(['lib/submitor', 'lib/dataloader'], function (submitor, dataloader) {
    function query(data, callback) {
        //kernel/appliaction/load.json
        dataloader.get({
            url: "kernel/organize/query.json",
            data: data,
            callback: callback
        });
    }
    function update(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/organize/update.json",
            success: success});
    }
    function add(data, success) {
        submitor.submit(data, {url: "kernel/organize/add.json",
            successAfter: success});
    }
    function del(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/organize/del.json",
            successAfter: success
        });
    }
    return {
        query: query,
        update: update,
        add: add,
        del: del
    };
});




define(['lib/submitor', 'lib/dataloader'], function (submitor, dataloader) {
    function query(data, callback) {
        alert("query");
        //kernel/appliaction/load.json
        dataloader.get({
            url: "kernel/organizetype/query.json",
            data: data,
            callback: callback
        });
    }
    function saveUserOrganizeType(data, success) {
        alert("saveUserOrganizeType");
         submitor.submit(data, {url: "kernel/userrole/save_organize_type.json",
            success: success});
    }
    function save(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/organizetype/update.json",
            success: success});
    }
    function add(data, success) {
        console.log(data);
        submitor.submit(data, {url: "kernel/organizetype/add.json",
            successAfter: success});
    }
    function del(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/organizetype/del.json",
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
        saveUserOrganizeType:saveUserOrganizeType
    };
});



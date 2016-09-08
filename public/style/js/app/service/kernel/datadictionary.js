/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['lib/submitor', 'lib/dataloader'], function (submitor, dataloader) {
    function query(data, callback) {
        //kernel/appliaction/load.json
        dataloader.get({
            url: "kernel/datadictionary/query.json",
            data: data,
            callback: callback
        });
    }
    function save(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/datadictionary/update.json",
            success: success});
    }
    function saveOption(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/datadictionary/options/update.json",
            success: success});
    }
    function add(data, success) {
        console.log(data);
        submitor.submit(data, {url: "kernel/datadictionary/add.json",
            successAfter: success});
    }
    function addOption(data, success) {
        console.log(data);
        submitor.submit(data, {url: "kernel/datadictionary/options/add.json",
            successAfter: success});
    }

    function del(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/datadictionary/del.json",
            successAfter: success
        });
    }
    function delOption(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/datadictionary/options/del.json",
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
        addOption: addOption,
        delOption: delOption,
        updateOption: saveOption
    };
});


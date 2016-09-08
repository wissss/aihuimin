//使用了 wayjs 作为双向绑定的工具 
//所有的界面js都必须返回一个叫做pageInit的方法给page_loadjs. 以后提交表单用这个submitor就可以了
define(['lib/submitor', 'lib/dataloader'], function (submitor, dataloader) {
    function load(callback) {
        //kernel/appliaction/load.json
        dataloader.get({
            url: "kernel/appliaction/load.json",
            
            callback: callback
        });

    }
    function save(data, success) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/appliaction/update.json",
            successAfter: success
        });
    }
    return {
        save: save,
        load: load
    };
});



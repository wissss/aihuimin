//使用了 wayjs 作为双向绑定的工具 
//所有的界面js都必须返回一个叫做pageInit的方法给page_loadjs. 以后提交表单用这个submitor就可以了，
define(['lib/submitor','lib/dataloader'], function (submitor, dataloader) {
      function save(data) {
        //successAfter 就是提供给调用者回调函数.例如新增一条记录需要刷新table或者干其他事情时候使用的.
        submitor.submit(data, {url: "kernel/user/update_password.json",
            successAfter: function (data) {
                console.log(data);
            }});
    }
    return {
        save: save
    };
});



//创建匿名元素方式的modal 用于程序当中 弹出新增删除窗口，用于选择窗口
define(function () {
    function table(options) {
        var table = $(options.sel).bootstrapTable({
            queryParams: function (params) {
                if (options.queryParams) {
                    var params = options.queryParams(params);
                }
                params.page = countPage(params);
                params.rows = params.limit;
                return params;
            }
        });
        return table;
    }
    function countPage(params) {
        var page = Math.ceil((params.offset + 1) / params.limit);
        if (page < 1) {
            page = 1;
        }
        return page
    }

    return {
        table: table
    }
});

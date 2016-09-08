define(function () {
    function get(op) {
        $.ajax({
            type: "GET",
            data: op.data,
            url: op.url,
            dataType: "json",
            error: function () {
                // alert("加载失败");
            },
            success: function (result) {
                op.callback(result);
            }
        });

    }
    return {
        get: get
    }
});

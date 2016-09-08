define(function () {
    function registerFilters() {
        way.registerTransform("null_text", function (data) {
            if (data) {
                return data;
            }
            else {
                return ""
            }
            ;
        });
        way.registerTransform("null", function (data) {
            if (data) {
                return data;
            }
            else {
                return ""
            }
            ;
        });
        way.registerTransform("null_number", function (data) {
            if (data) {
                return data;
            }
            else {
                return ""
            }
            ;
        });

    }
    return {
        registerFilters: registerFilters
    }
});

//创建匿名元素方式的modal 用于程序当中 弹出新增删除窗口，用于选择窗口
define(['lib/load_content'], function (load_content) {

    var defaults = {
        keyboard: false
    }

    function buildHtml(title) {
        return "<div class='modal inmodal fade' tabindex='-1' role='dialog'  aria-hidden='true' >" +
                "   <div class='modal-dialog modal-lg' role='document'>" +
                "       <div class='modal-content'>" +
                "  <div class='modal-header'>" +
                "  <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
                "  <h4 class='modal-title' id='myModalLabel'>" + title + "</h4>" +
                " </div>" +
                "         <div class='modal-body'>" +
                "         </div>" +
                "     </div>" +
                "  </div>" +
                "</div>";
    }
    /**
     * 
     * @param {type} title  模态窗口titte
     *   @param {type} options {
     *   url 要加载内容的网址
     *   initData 传入内容网址对应js的初始数据
     *   callback:打开模态窗口调用者传入的回调方法，在模态窗口关闭时执行
     * }
     * 
     * callback （param）{  param 是内容页返回的结果} 
     * close（param）      目的界面内容使用close方法关闭模态并且返回时间给调用者
     * @returns {undefined}
     */
    function myModal(title, options) {
        var html = buildHtml(title);
        var src = $(html).appendTo("body");
        var settings = $.extend(true, {}, defaults, options);
        var modal = src.modal(settings);
        src.close = function (returnData) {
            modal.modal("hide");
            if (settings.callback) {
                settings.callback(returnData);
            }
        }
        //这里把模态对象和 初始化数据传输的目的界面的js
        load_content.loadContent(settings.url, modal.find(".modal-body"), src, options.initData);
        modal.on('hidden.bs.modal', function (e) {
            src.remove();
        })
        //modal.modal("hide");
        //src.remove();
    }

    return {
        modal: myModal
    }
});

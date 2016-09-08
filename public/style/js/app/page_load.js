define(['lib/load_content'],function (load_content) {
    //------------------
    // For demo purpose - animation css script
    function animationHover(element, animation){
        element = $(element);
        element.hover(
            function() {
                element.addClass('animated ' + animation);
            },
            function(){
                //wait for animation to finish before removing classes
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, 2000);
            });
    }

// Minimalize menu when screen is less than 768px
    $(function() {
        $(window).bind("load resize", function() {
            if ($(this).width() < 769) {
                $('body').addClass('body-small')
            } else {
                $('body').removeClass('body-small')
            }
        })
    })

    function SmoothlyMenu(containerID) {
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#'+containerID).hide();
            // For smoothly turn on menu
            setTimeout(
                function () {
                    $('#'+containerID).fadeIn(500);
                }, 100);
        } else if ($('body').hasClass('fixed-sidebar')){
            $('#'+containerID).hide();
            setTimeout(
                function () {
                    $('#'+containerID).fadeIn(500);
                }, 300);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#'+containerID).removeAttr('style');
        }
    }

// Dragable panels
    function WinMove() {
        var element = "[class*=col]";
        var handle = ".ibox-title";
        var connect = "[class*=col]";
        $(element).sortable(
            {
                handle: handle,
                connectWith: connect,
                tolerance: 'pointer',
                forcePlaceholderSize: true,
                opacity: 0.8,
            })
            .disableSelection();
    };
    //------------------




    function getChildList(id, containerID) {
        $.ajax({
            type: "GET",
            url: "getMenu.json?id=" + id,
            dataType: "json",
            error: function () {
            },
            success: function (results) {
                console.log();
                var childHtml = '';
                for (var i = 0; i < results.length; i++) {
                    childHtml = childHtml+ '<li url="' + results[i].attributes.url + '" leaf="'
                        + results[i].attributes.leaf + '" menuid="'
                        + results[i].id + '">' +
                        ' <a href="#" class = "fu"><i class="' + results[i].attributes.iconCss + '"></i><span class="nav-label">'
                        + results[i].text + '</span><span class="fa arrow"></span></a>' +
                        ' <ul class="nav nav-second-level" >'
                    for(var j = 0;j<results[i].attributes.childrens.length;j++){
                        var child = results[i].attributes.childrens[j];
                        childHtml = childHtml+ "<li url=\"" +child.attributes.url + "\" leaf=\""
                            + "" + "\" menuid=\""
                            + "" + "\" path='"+results[i].text+"\\"+child.text+"'>" +
                            " <a href=\"#\"><i class=\"" + "" + "\"></i>"
                            + child.text + "</a>"
                    }
                    childHtml = childHtml+
                        '</ul>' +
                        '</li>'

                }
                //console.log(childHtml);
                $("#" + containerID).html(childHtml);
                var load_contentl=load_content;
                $("#" + containerID).find("li .nav-second-level li").each(
                    function(index,element){
                        $(element).on("click",function(){
                            load_contentl.loadContent($(element).attr("url"));
                        });
                    }

                );
                initMain(containerID);
                bindClick();
            }
        });
    }
    function bindClick(){
        $('#side-menu').find('li a ').on('click',function(){
          var fuji = $(this).attr('class');
            if('fu'==fuji){
                var _html = $(this).text();
                $('#showOnline').text(_html);
            }else{

                $('#showOnline').text( $(this).parent().attr("path"));
            }

        });
    }
    function initMain(containerID){

        // MetsiMenu
        $('#'+containerID).metisMenu();

        // Collapse ibox function
        $('.collapse-link').click( function() {
            var ibox = $(this).closest('div.ibox');
            var button = $(this).find('i');
            var content = ibox.find('div.ibox-content');
            content.slideToggle(200);
            button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
            ibox.toggleClass('').toggleClass('border-bottom');
            setTimeout(function () {
                ibox.resize();
                ibox.find('[id^=map-]').resize();
            }, 50);
        });

        // Close ibox function
        $('.close-link').click( function() {
            var content = $(this).closest('div.ibox');
            content.remove();
        });

        // Small todo handler
        $('.check-link').click( function(){
            var button = $(this).find('i');
            var label = $(this).next('span');
            button.toggleClass('fa-check-square').toggleClass('fa-square-o');
            label.toggleClass('todo-completed');
            return false;
        });

        // Append config box / Only for demo purpose
        $.get("skin-config.html", function (data) {
            $('body').append(data);
        });

        // minimalize menu
        $('.navbar-minimalize').click(function () {
            $("body").toggleClass("mini-navbar");
            SmoothlyMenu(containerID);
        })

        // tooltips
        $('.tooltip-demo').tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        })

        // Move modal to body
        // Fix Bootstrap backdrop issu with animation.css
        $('.modal').appendTo("body")

        // Full height of sidebar
        function fix_height() {
            var heightWithoutNavbar = $("body > #wrapper").height() - 61;
            $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
        }
        fix_height();

        // Fixed Sidebar
        // unComment this only whe you have a fixed-sidebar
        //    $(window).bind("load", function() {
        //        if($("body").hasClass('fixed-sidebar')) {
        //            $('.sidebar-collapse').slimScroll({
        //                height: '100%',
        //                railOpacity: 0.9,
        //            });
        //        }
        //    })

        $(window).bind("load resize click scroll", function() {
            if(!$("body").hasClass('body-small')) {
                fix_height();
            }
        })

        $("[data-toggle=popover]")
            .popover();

    }
    function init(containerID) {
        getChildList(0,containerID);

    }
    return {
        init: init
    }

});


/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-09 10:06:15
 * @version $Id$
 */
$(document).ready(function() {
    $(".q span").click(function() {
        var $b = $(this).index();
        $(".q span").eq($b).addClass('on').siblings().removeClass('on');
        $(".jylh_con li").eq($b).show().siblings().hide();
    });
    $(".q span").eq(0).trigger("click");



})
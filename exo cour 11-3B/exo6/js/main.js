$(document).ready(function(){
    $(".btn").click(function(){
        $("div").slideToggle(3000);
        jQuery.fx.off = true;
        jQuery.fx.off = false;
    });
});
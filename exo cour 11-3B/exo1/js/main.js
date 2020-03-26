$(document).ready(function(){
    $('.div1').animate({
        marginLeft: '50px',
    }, 1000);
    $('.div1').animate({
        marginLeft: '0px'
    }, 1000);
});


// solution et plus ... 

$("#left").click(function() {
    $(".block").animate({ left: "-=50px" }, "slow");
});
$("#right").click(function() {
    $(".block").animate({ left: "+=50px" }, "slow");
});
$("#top").click(function() {
    $(".block").animate({ top: "-=50px" }, "slow");
});
$("#bottom").click(function() {
    $(".block").animate({ top: "+=50px" }, "slow");
});
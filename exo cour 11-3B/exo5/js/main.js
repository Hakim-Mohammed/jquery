$(document).ready(function(){
    setInterval(function(){
        $('div').show(1000, function() {
        });
        $('div').hide(1000, function() {
        });
    });
});
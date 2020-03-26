$(document).ready(function(){
    $(".btn").click(function(){
      $(".divAnime").toggleClass("main");
      $(".divAnime").slideToggle(5000);
    });
  });


  // solution
  $("button").click(function() {
    $("div:animated").toggleClass("main ");
    //$(".divAnime").slideToggle(5000);
});
let animateIt = function() {
    $("#div1,#div2").slideToggle("slow", animateIt);
}

animateIt();
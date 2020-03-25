$(document).ready(function(){
    $(".btn").click(function(){
      $(".divAnime").toggleClass("main");
      $(".divAnime").slideToggle(5000);
    });
  });
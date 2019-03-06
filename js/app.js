$(document).ready(function(){


// TOP NAV MENU SCROLLING FUNCTION //

  $(".about").click(function() {
      $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 1000);
  });  
  $(".projects").click(function() {
      $('html, body').animate({
        scrollTop: $("#projects").offset().top
      }, 1000);
  });
  $(".skills").click(function() {
      $('html, body').animate({
        scrollTop: $("#skills").offset().top
      }, 1000);
  });
  $(".contact").click(function() {
      $('html, body').animate({
        scrollTop: $("#contact").offset().top
      }, 1000);
  });


// TOP NAV BACKGROUND COLOUR FUNCTION // 

  $(window).scroll(function () { 
      if ($(window).scrollTop() > 1) {
        $('nav').css({'background-color': '#fff', 'color': '#682d6a', 'box-shadow': '0px 1px 2px #bcbaba'});
      }
      if ($(window).scrollTop() < 2) {
        $('nav').css({'background-color': 'transparent', 'color': '#fff', 'box-shadow': 'none'});
      }
  });

});
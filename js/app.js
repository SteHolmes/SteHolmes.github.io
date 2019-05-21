$(document).ready(function(){
  $(".nav-item").fadeIn(1000);

// CLICK EVENTS //
 
  $("nav a").click(scroll);
  $(".contact-btn").click(scroll);
  $(".projects-btn").click(scroll);
  
  
// SCROLLING FUNCTION //
  function scroll() {
    var id = $(this)[0].hash.toLowerCase();
    $('html, body').animate({
        scrollTop: $(id).offset().top -20
      }, 1000);
    $(".navbar-collapse").removeClass("show");
  }
  
  
// TOP NAV BACKGROUND COLOUR FUNCTION // 
  $(window).scroll(function () { 
      if ($(window).scrollTop() > 1) {
        $('nav').css({'box-shadow': '0px 1px 2px #bcbaba'});
      }
      if ($(window).scrollTop() < 2) {
        $('nav').css({'box-shadow': 'none'});
      }
  });

});
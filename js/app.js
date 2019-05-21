$(document).ready(function(){
  $(".nav-item").fadeIn(1000);

// CLICK EVENTS //
  $("nav a").click(scroll($(this).text().toLowerCase()));
  $(".contact-btn").click(scroll("contact"));
  $(".projects-btn").click(scroll("projects"));
  
  
// SCROLLING FUNCTION //
  function scroll(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top -20
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
$(document).ready(function(){
  $(".nav-item").fadeIn(1000);

// TOP NAV MENU SCROLLING FUNCTION //

  $("nav a").click(scroll);
  
  function scroll() {
    var id = $(this).text().toLowerCase();
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top -20
      }, 1000);
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
$(document).ready(function() {
  $(window).resize(function() {
    if(window.innerWidth > 575) {
      $(".menu").removeClass('menu-active')
    }
  });
  
  $('.menu-btn').click(function() {
    $(".menu").toggleClass('menu-active');
  })
})
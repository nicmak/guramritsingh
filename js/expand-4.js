$(function() {
   $(window).scroll(function () {
     if ($(this).scrollTop() > 1900) {
        $('.portfolio-item-3').addClass('expand')
     }
     if ($(this).scrollTop() < 1900) {
        $('.portfolio-item-3').removeClass('expand')
     }

     if ($(this).scrollTop() > 2550) {
        $('.portfolio-item-3').removeClass('expand')
     }
   });
});
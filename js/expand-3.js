$(function() {
   $(window).scroll(function () {
     if ($(this).scrollTop() > 1200) {
        $('.portfolio-item-3').addClass('expand')
     }
     if ($(this).scrollTop() < 1200) {
        $('.portfolio-item-3').removeClass('expand')
     }

     if ($(this).scrollTop() > 1850) {
        $('.portfolio-item-3').removeClass('expand')
     }
   });
});

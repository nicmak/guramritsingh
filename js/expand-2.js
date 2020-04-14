$(function() {
   $(window).scroll(function () {
     if ($(this).scrollTop() > 750) {
        $('.portfolio-item-2').addClass('expand')
     }
     if ($(this).scrollTop() < 750) {
        $('.portfolio-item-2').removeClass('expand')
     }

     if ($(this).scrollTop() > 1200) {
        $('.portfolio-item-2').removeClass('expand')
     }
   });
});

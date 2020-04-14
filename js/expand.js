$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         $('.portfolio-item-1').addClass('expand')
      }
      if ($(this).scrollTop() < 200) {
         $('.portfolio-item-1').removeClass('expand')
      }

      if ($(this).scrollTop() > 750) {
         $('.portfolio-item-1').removeClass('expand')
      }
   });
});

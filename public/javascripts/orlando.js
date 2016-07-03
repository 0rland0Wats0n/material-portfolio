(function() {
  // make header sticky
  $(window).on('scroll', function() {
    if($(this).scrollTop() >= 60 && $(this).width() >= 600) {
      $('.header-navigation').addClass('is-sticky');
    } else {
      if($('.header-navigation').hasClass('is-sticky')) {
        $('.header-navigation').removeClass('is-sticky');
      }
    }
  });
})();

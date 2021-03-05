$(document).ready(function() {
  if (window.matchMedia('(max-width: 1024px)').matches) {
    $('.js-btn-trigger').on('click',function () {
      $('.js-menu').addClass('active');
      $('body').addClass('overflow');
    });

    $('.js-btn-close').on('click',function () {
      $('.js-menu').removeClass('active');
      $('body').removeClass('overflow');
    });

    $('.overlay').on('click',function () {
      $(this).removeClass('active');
      $('.js-menu').removeClass('active');
      $('body').removeClass('overflow');
    });

    $('.js-sub-menu').on('click',function () {
      $(this).toggleClass('active');
      $('.js-sub-menu').not(this).removeClass('active');
    });

    $('.js-footer-header').on('click',function () {
      $(this).toggleClass('active').next().slideToggle();
      $('.js-footer-header').not(this).removeClass('active').next().slideUp();
    });
  }

  $('.js-filter-button').on('click', function(e){
    e.preventDefault();

    var id = $(this).attr('id');

    if($(this).hasClass('active')){
      return false;
    } else {
      if(id === 'large-size') {
        $(this).addClass('active');
        $('#small-size').removeClass('active');
        $('.js-list').removeClass('small-size').addClass('large-size');
      }
      else if(id === 'small-size') {
        $(this).addClass('active');
        $('#large-size').removeClass('active');
        $('.js-list').removeClass('large-size').addClass('small-size');
      }
    }
  });

  $(function () {
    x=9;
    $('.js-list li').slice(0, 9).show();
    $('.js-load-more-button').on('click', function (e) {
      e.preventDefault();
      x = x+5;
      $('.js-list li').slice(0, x).slideDown();
    });
  });
});

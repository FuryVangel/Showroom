$(function() {
  x=9;
  $('.js-list li').slice(0, 9).show();
  $('.js-load-more-button').on('click', function (e) {
    e.preventDefault();
    x = x+5;
    $('.js-list li').slice(0, x).slideDown();
  });

  $('.js-filter-button').click(function(e){
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
});

// add class header
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('header').addClass('scroll');
  } else {
      $('header').removeClass('scroll');
  }
});

//плавный скролл
$(document).ready(function () {
  $('.go_to').click(function () {
      var scroll_el = $(this).attr('href');
      if ($(scroll_el).length != 0) {
          $('html, body').animate({
              scrollTop: $(scroll_el).offset().top
          }, 500);
      }
      return false;
  });
});
//плавный скролл end

// модальные окна (несколько)
$(document).ready(function () {
  var overlay = $('.overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal__close, .overlay');
  var modal = $('.modal__div');

  open_modal.click(function (event) {
      event.preventDefault();

      modal.css('display', 'none').animate({
        opacity: 0,
        top: '45%'
    }, 200);

      var div = $(this).attr('href');
      overlay.fadeIn(400,
          function () {
              $(div)
                  .css('display', 'flex')
                  .animate({
                      opacity: 1,
                      top: '50%'
                  }, 200);
          });
  });

  close.click(function () {
      modal
          .animate({
                  opacity: 0,
                  top: '45%'
              }, 200,
              function () {
                  $(this).css('display', 'none');
                  overlay.fadeOut(400);
              }
          );
  });
});
//end
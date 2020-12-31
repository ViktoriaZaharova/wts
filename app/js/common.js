// add class header
$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('header').addClass('scroll');
	} else {
		$('header').removeClass('scroll');
	}
});

//плавный скролл
$(document).ready(function () { //плавный скролл
	$(".go_to").on("click", function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top,
			headerHeight = $('header').height();

		$('body, html').animate({ scrollTop: top - headerHeight }, 500);
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

// mobile menu
$('.btn-menu').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
	$('.mobile-menu').fadeOut();
});

// animate
wow = new WOW(
	{
		boxClass: 'wow',      // default
		animateClass: 'animated', // default
		offset: 0,          // default
		mobile: false,       // default
		live: true        // default
	}
);
wow.init();
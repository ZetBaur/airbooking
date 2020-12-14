
$(document).ready(function () {
	// ==========================search-input===================================================================================================

	$('.header__search-btn').on('mouseover', function () {
		$('.header__search-input').addClass('active');
	});
	$(document).click(function (e) {
		if (!$(e.target).is('.header__search-btn, .header__search-input input')) {
			$('.header__search-input').removeClass('active');
		}
	});

	// ==========================Magnif Popup===================================================================================================
	$('.popup-link-1, .popup-link-2, .popup-link-3, .popup-link-4, .popup-link-5, .popup-link-6').magnificPopup({});

	// =======================================Slider=========================================================================================
	$('.testimonials__slider').slick({
		pauseOnHover: false,
		autoplay: true,
		fade: true,
		arrows: false,
	});

	// ================MENU and BURGER=============================================================================

	$('.header__burger').on('click', function () {
		$('.menu').addClass('open');
	});

	$('.menu__item, .menu__link, .menu__link span').on('click', function () {
		if ($('.menu').hasClass('open')) {
			$('.menu').removeClass('open');
		}
	});

	$('.menu__close').on('click', function () {
		$('.menu').removeClass('open');
	});

	$('html, body').on('click', function (e) {
		if ($('.menu').hasClass('open') && !$(e.target).is('.menu, .menu .open .menu-item, .burger, .header__burger-line')) {
			$('.menu').removeClass('open');
		}
	});

	// =====================SCROLL TO TOP================================================================================

	$(window).scroll(function () {
		if ($(this).scrollTop() > 900) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();

		}
	});
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	//====================IBG=============================================================================

	function ibg() {

		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();

});

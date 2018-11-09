(function ($) {
	$(document).on('click', '.js-flip', function (e) {
		if (!$('.spinner').length) {
			var spinner = new Spinner({
					color: '#fff',
					length: 3,
					radius: 4,
					width: 2
				}).spin(),
					delay = setTimeout(function () {
					$('.mobile-intro').addClass('flip');
					$('body').animate({scrollTop: 0}, 300);
				}, 2000);
			$('.mobile-welcome-submit-label').css({opacity: 0});
			$('.mobile-welcome-submit-spinner').addClass('spin').append(spinner.el);
		}
	});
})(jQuery);

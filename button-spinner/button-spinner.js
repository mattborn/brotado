(function () {
	$(document).on('click', '.pass-1', function (e) {
		if (!$('.spinner').length) {
			var self = $(this),
				spinner = new Spinner({
					color: '#fff',
					length: 3,
					radius: 4,
					width: 2
				}).spin(),
				delay = setTimeout(function () {
					self.removeClass('spin');
					spinner.stop();
				}, 2000);
			self.addClass('spin')
				.find('.button-spin').append(spinner.el);
		}
	});
	
	$(document).on('click', '.pass-2', function (e) {
		var self = $(this);
		if (!self.hasClass('spin')) {
			var delay = setTimeout(function () {
					self.removeClass('spin');
				}, 2000);
			self.addClass('spin');
		}
	});
})(jQuery);

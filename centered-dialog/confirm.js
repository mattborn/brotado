(function () {
	
	$('.demo a').click(function () {
		var t = $(this).data('target');
		$('.overlay:hidden').show();
		$('.'+ t).toggle();
		$(this).toggleClass('active');
		if ($('.demo .active').length > 1) {
			$('.demo').removeClass('single').addClass('multiple');
		} else if ($('.demo .active').length) {
			$('.demo').addClass('single').removeClass('multiple');
		} else {
			$('.demo').removeClass('single multiple');
			$('.overlay').hide();
		}
	});

})(jQuery);

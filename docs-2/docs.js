(function ($) {
	$('.menu a').click(function () {
		var id = $(this).data('id') || $(this).html(),
			ot = $('#'+ id).offset().top - 30;
		$('body').stop(true).animate({scrollTop: ot}, 100);
	});
})(jQuery);

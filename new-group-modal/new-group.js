(function () {

	$('.new-group .radio').change(function (event) {
		$('.new-group-method').removeClass('selected');
		$(this).parent().addClass('selected');
	});
	
	$('.new-group-button').click(function (event) {
		$('.new-group-button').removeClass('selected');
		$(this).addClass('selected');
		$('.new-group-img').hide();
		if ($(this).hasClass('connect-twitter-button')) {
			$('.new-group-img.twitter').show();
		} else {
			$('.new-group-img.facebook').show();
		}
	});
	
	$('.demo a').click(function () {
		var t = $(this).data('target');
		$('.'+ t).toggle();
	});
	
	$(document).click(function () {
		if ($('.new-group-top .error').is(':visible')) {
			$('.new-group-name').addClass('error-state');
		} else {
			$('.new-group-name').removeClass('error-state');
		}
	});

})(jQuery);

(function ($) {
	
	$('.dashboard').show();
	
	$('.primary-brand-link, .primary-route').click(function (e) {
		var t = $(this).data('target');
		e.preventDefault();
		$('.page').hide();
		$('.'+ t).show();
	});
	
})(jQuery);

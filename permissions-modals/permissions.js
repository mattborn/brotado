(function ($) {
	
	var Modal = {
		open: function (name) {
			$('html').addClass('modal-open blur');
			$('.'+ name).parent().show();
			$('.demo').hide();
		},
		close: function () {
			$('html').removeClass('modal-open blur');
			$('.modal').hide();
			$('.demo').show();
		},
		stop: function (e) {
			e.stopPropagation();
		}
	};
	
	$('.connect-item, .connect-link').click(function (e) {
		var t = $(this).data('target');
		if (!$(this).hasClass('connect-link')) {
			$('.connect-item').removeClass('selected');
			$(this).addClass('selected');
		}
		$('.connect-view').hide();
		$('.connect-'+ t).show();
	});
	$('.connect-action').click(function (e) {
		var t = $(this).data('target');
		Modal.close();
		if (t === 'facebook-pages' || t === 'google-pages') {
			alert('pages');
		} else {
			
			Modal.open('finish');
		}
	});
	
	$('.js-bulk').click(function () {
		var p = $(this).parents('.profiles-tr'),
			i = p.find('.js-bulk').index($(this)) + 2;
		p.siblings().find('.profiles-td:nth-child('+ i +') input').click();
	});
	
	$('.js-add').click(function () {
		$('.invite-form-error').show();
	});
	
	$('.invite-group').each(function () {
		var h = ['#444','#16a','#6b2','#0ae','#359','#d43','#f93'],
			r = Math.floor(Math.random()*h.length),
			c = h[r];
		$(this).css('backgroundColor', c);
	});
	
	$('.invite-group').click(function () {
		$(this).toggleClass('selected');
	});
	
	$('.js-connect').click(function () {
		Modal.open('connect');
		$('.connect-item-twitter').click();
	});
	$('.js-finish').click(function () {
		Modal.open('finish');
	});
	
	$('.js-invite').click(function () {
		Modal.open('invite');
	});
	
	$('.js-migrate').click(function () {
		Modal.open('migrate');
	});
	
	$('.modal, .js-dismiss, .js-done').click(function (e) {
		Modal.close();
	});
	
	$('.connect').click(function (e) {
		Modal.stop(e);
	});
	
	$('.finish').click(function (e) {
		Modal.stop(e);
	});
	
	$('.invite').click(function (e) {
		Modal.stop(e);
	});
	
	$('.migrate').click(function (e) {
		Modal.stop(e);
	});
	
})(jQuery);

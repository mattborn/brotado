(function ($) {
	$.extend($.easing, {
		easeOutExpo: function(x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		}
	});
	
	var stack = {
		open: function (title) {
			$('.stack-title').hide(0, function () {
				$('.stack-'+ title).show();
			});
			if ($('.js-stack-header').is(':hidden')) {
				$('.js-stack-header').slideDown(300, 'easeOutExpo');
			}
			if ($('.js-stack').is(':hidden')) {
				$('.js-stack').fadeIn(300);
			}
		}
	};
	
	$('.js-toggle-twitter').click(function () {
		stack.open('twitter');
	});
	
	$('.js-toggle-google').click(function () {
		stack.open('google');
	});
	
	$('.js-toggle-facebook').click(function () {
		stack.open('facebook');
	});
	
	$('.js-close').click(function () {
		$(this).parent().slideToggle(300, 'easeOutExpo');
		$('.js-stack').fadeOut(300);
	});
})(jQuery);

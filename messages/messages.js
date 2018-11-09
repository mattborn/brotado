(function ($) {
	$('html').scrollTop(0);
	
	$(document).keydown(function (e) {
		// console.log(e.which);
		if (e.which === 38) {
			e.preventDefault();
			State.prev();
		}
		if (e.which === 40) {
			e.preventDefault();
			State.next();
		}
		if (e.which === 39) {
			e.preventDefault();
			State.thread();
		}
		if (e.which === 13 || e.which === 82 && !e.metaKey) {
			State.reply();
		}
		if (e.which === 27) {
			State.deinit();
		}
	});
	
	$('.js-check').click(function (e) {
		$(this).find('[type=checkbox]').click();
	});
	
	$('[type=checkbox]').click(function (e) {
		e.stopPropagation();
	});
	
	window.State = {
		current: 0,
		last: 0,
		max: $('.message').length - 1,
		next: function () {
			this.last = this.current;
			this.current++;
			if (this.current > this.max) {
				this.current = 0;
			}
			this.init();
		},
		prev: function () {
			this.last = this.current;
			this.current--;
			if (this.current < 0) {
				this.current = this.max;
			}
			this.init();
		},
		init: function () {
			if (!this.started) {
				this.started = true;
				this.current = 0;
				$('.message').css({opacity: .5});
			}
			this.move();
		},
		deinit: function () {
			this.started = false;
			this.current = 0;
			$('.message').css({opacity: 1}).removeClass('selected');
		},
		move: function () {
			var  c = $('.message:eq('+ this.current +')'),
				h = $(window).height() / 2 * .8,
				t = c.offset().top - h;
			$('.message:eq('+ this.last +')').removeClass('selected');
			c.addClass('selected');
			$('body').stop(true).animate({scrollTop: t}, 200);
		},
		reply: function () {
			if (this.started) {
				alert('now replying to index '+ this.current);
			}
		},
		thread: function () {
			if (this.started) {
				alert('now viewing thread for index '+ this.current);
			}
		}
	}
})(jQuery);

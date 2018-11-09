(function ($) {
	$('<div class="safe">').appendTo('body');
	
	$(document).keyup(function (e) {
		// console.log(e.which);
		// if (e.which === 222) {
		// 	$('.safe').toggle();
		// }
		if (e.which === 37) {
			State.prev();
		}
		if (e.which === 39) {
			State.next();
		}
	});
	
	window.State = {
		current: 0,
		max: $('.state').length - 1,
		next: function () {
			this.current++;
			if (this.current > this.max) {
				this.current = 0;
			}
			this.move();
		},
		prev: function () {
			this.current--;
			if (this.current < 0) {
				this.current = this.max;
			}
			this.move();
		},
		move: function () {
			var state = $('.state:eq('+ this.current +')').data('state'),
				top = this.current * -50;
			$('.states-offset').animate({top: top}, 200);
			this[state]();
		},
		page: function (page) {
			$('.modal').hide();
			$('.page .center').hide();
			$('.js-'+ page).show();
		},
		modal: function (modal) {
			$('.modal').show();
			$('.modal > div').hide();
			$('.js-'+ modal).show();
		},
		dashboard: function () {
			this.page('dashboard');
		},
		messages: function () {
			this.page('messages');
		},
		tasks: function () {
			this.page('tasks');
		},
		reports: function () {
			this.page('reports');
		},
		settings: function () {
			this.page('settings');
		},
		dark: function () {
			this.modal('dark');
		},
		light: function () {
			this.modal('light');
		},
		scrodal: function () {
			this.modal('scrodal');
			$('html').css({overflow: none});
		},
		tallboy: function () {
			this.modal('tallboy');
		}
	};
	
	State.move();
	
	$('.primary-routes').on('click', 'a', function (e) {
		var a = $(e.target),
			stub = a.data('stub');
		a.siblings().removeClass('active');
		a.addClass('active');
		$('.page .center').hide();
		$('.js-'+ stub).show();
	});
})(jQuery);

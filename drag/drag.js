(function ($) {
	$('.message').draggable({
		revert: 'invalid',
		start: function (e, ui) {
			$('.buckets').show();
		},
		stop: function () {
			$('.buckets').fadeOut();
		}
	});
	$('.tasks-bucket, .sales-bucket, .support-bucket').droppable({
		hoverClass: 'this-bucket-is-fucking-ready',
		drop: function (e, ui) {
			ui.draggable.addClass('ui-draggable-dropped').slideUp(function () {
				$(this).remove();
			});
			if ($('.message').length === 1) {
				alert('you assigned all your shit! congrats, bro!');
			}
		}
	});
})(jQuery);

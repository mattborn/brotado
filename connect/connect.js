
//var console;

$.extend( $.easing, {
	easeOutExpo: function (x, t, b, c, d) {
		return (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}
} );

$(function(){

	$('#connect .network').click(function(e){
		var network = $(this).attr('class').split(' ')[1];
		e.preventDefault();
		$('#connect .network').removeClass('active');
		$(this).addClass('active');
		$('.stub:visible').hide();
		$('#'+network+'-add').show();
		$('.done:visible').hide();
		$('.cancel:hidden').css({display: 'inline'});
		$('.footer .or:hidden, .proceed:hidden').css({display: 'inline-block'});
	});

	//  development tests
	$('#add-test a').click(function(e){
		e.preventDefault();
		$('#connect-choose:visible').hide();
		$('#connect:hidden').css({opacity: 0, marginTop: -210}).show().stop(true)
			.animate({opacity: 1, marginTop: -240}, 500, 'easeOutExpo');
		// $('#connect:hidden').show();
		$('.networks .'+this.hash.substr(1)).trigger('click');
	});

	$('#success-test a').click(function(e){
		e.preventDefault();
		$('#connect-choose:visible').hide();
		$('#connect:hidden').show();
		$('#connect .network').removeClass('active');
		$('.stub:visible').hide();
		$('#'+this.hash.substr(1)+'-success').show();
		$('.cancel:visible, .footer .or:visible, .proceed:visible').hide();
		$('.done:hidden').css({display: 'inline-block'});
	});

	$('#custom-test a').click(function(e){
		var hash = this.hash.substr(1);
		e.preventDefault();
		$('#connect .network').removeClass('active');
		if (hash === 'limit') {
			$('#connect-choose:visible').hide();
			$('#connect:hidden').show();
			$('.stub:visible').hide();
			//$('#'+this.hash.substr(1)+'-success').show();
			$('#limit').show();
		} else if (hash === 'facebook-select') {
			$('#connect:visible').hide();
			$('#connect-choose:hidden').show();
		} else {
			$('#connect-choose:visible').hide();
			$('#connect:hidden').show();
			$('.loading').show().delay(1000).fadeOut();
		}
	});

	$('.cancel, .done').click(function(e){
		e.preventDefault();
		$('#connect, #connect-choose').css({opacity: 1}).stop(true)
			.animate({opacity: 0, marginTop: -210}, 500, 'easeOutExpo', function(){
				$(this).hide().css({opacity: 1, marginTop: -240});
			});
		// $('#connect, #connect-choose').hide();
	});

	$('.proceed').click(function(e){
		e.preventDefault();
		$('#connect').hide();
	});

	$('#facebook-add .personal').click(function(e){
		e.preventDefault();
		$('.stub:visible').hide();
		$('#personal-add').show();
	});

	$('#personal-add .facebook').click(function(e){
		e.preventDefault();
		$('.stub:visible').hide();
		$('#facebook-add').show();
	});

});

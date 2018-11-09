
$(function(){
	$('#left a').click(function(){
		var hash = this.hash.substr(1);
		$('#left a').removeClass('active');
		$(this).addClass('active');
		$('.report').hide();
		$('#'+hash+'-report').show();
		return false;
	});
	$('#left a:eq(0)').trigger('click');
});

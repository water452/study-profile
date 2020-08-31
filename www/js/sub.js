$(document).ready(function(){
	
	$('.hover a').on('mouseover mouseout focus blur click', function(){
		if(event.type == 'mouseover' || event.type == 'focus') {
			$(this).find('em').stop().fadeIn(200);
		} else if(event.type == 'mouseout' || event.type == 'blur') {
			$(this).find('em').stop().fadeOut(200);
		} else if(event.type == 'click') {
			$(this).siblings('.pop_detail').fadeIn(200);
		}
	});

	$('.pop_detail > span, .pop_detail .close_btn').on('click', function(){
		$(this).closest('li').find('.pop_detail').fadeOut(200);
	})

});
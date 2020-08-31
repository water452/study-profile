$(document).ready(function(){
	var _headerH = $('#header').height();

	/* container padding */
	$('#container').css({paddingTop : _headerH + 60});

	/* news 페이지 호출 */
	$('.news').load('../page/news.html');

	/* menu */
	$('#menu li a').append('<i></i>'); // 우선 추가해주고
	$('#menu li a').on('mouseover mouseout click focus blur', function() {
		var _ths = $(this).closest('li').width();
			_ani = $(this).find('i').stop();

		if(event.type == "mouseover" || event.type == "focus") {
			_ani.animate({width : _ths - 40}, 200);
		} else if(event.type == "mouseout" || event.type == "blur") {
			if($(this).hasClass('active')) {
				_ani.animate({width : _ths - 40}, 200);
			} else {
				_ani.animate({width : 0}, 200);
			}
		} else if(event.type == "click") {
			var _menuLnth = $('#menu li').length;

			$(this)
			.toggleClass('active')
			.closest('li').siblings('li')
			.find('a').removeClass('active')
			.find('i').stop().animate({width : 0}, 200); // 그냥 보기 쉽게 세로 나열

			/* animate */
			$('#header').stop().animate({height : 80}, 200);
			$('#header h1').stop().animate({bottom : 17, marginLeft : -430}, 200);
			$('#header h1 a').stop().animate({fontSize : 24 + 'px'}, 200);
			$('#header h1 a i').stop().animate({fontSize : 30 + 'px'}, 200);
			$('#container').stop().animate({paddingTop : 120}, 200);

			/* tab */
			for(i=0; i<=_menuLnth; i++) {
				(function(i2){
					$('.con_area > article').eq(i2).load('../page/page0'+ i2 +'.html'); // page 호출
					$('#menu li').eq(i2).click(function(){ // 메뉴 클릭시 페이지 전환
						$('.news').slideUp(200);
						$('.con_area > article').eq(i2).slideDown(200).siblings('article').slideUp(200);
					});
				})(i);
			}
		}
	});

	/* logo 누르고 페이지 복귀 */
	$('#header > h1 a').on('click', function() {
		/* animate */
		$('#header').stop().animate({height : "40%"}, 200);
		$('#header h1').stop().animate({bottom : 120, marginLeft : 0}, 200);
		$('#header h1 a').stop().animate({fontSize : 42 + 'px'}, 200);
		$('#header h1 a i').stop().animate({fontSize : 50 + 'px'}, 200);
		$('#menu li i').stop().animate({width : 0}, 200).closest('a').removeClass('active');
		$('#container').stop().animate({paddingTop : _headerH + 60}, 200);
		$('.con_area > article').slideUp(200);
		$('.news').slideDown(200);
	});

});

$(window).resize(function(){

	/* container padding */ // 반응형 용도로 추가
	var _headerH = $('#header').height();
	$('#container').css({'padding-top' : _headerH + 60});

});
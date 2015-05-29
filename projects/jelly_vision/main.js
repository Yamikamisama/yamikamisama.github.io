$(document).ready(function() {

	$(window).on('scroll', function(event) {
		if(document.body.scrollTop > 640 ){
			$('.buttons-row').addClass('fix-nav')
			$('.challenge').first().addClass('hidden-padding')
		} else {
			$('.buttons-row').removeClass('fix-nav')
			$('.challenge').first().removeClass('hidden-padding')
		}
	});

	$('button').on('click', function(){
		if($(window).width() > 1500) {
			if ($(this).text() == "Challenge 1" ){
				$('html, body').animate({scrollTop : 934},800);
				return false;
			} else if ( $(this).text() == "Challenge 2" ){
				$('html, body').animate({scrollTop : 2473},800);
				return false;
			} else if ( $(this).text() == "Challenge 3" ){
				$('html, body').animate({scrollTop : 4150},800);
				return false;
			} else if ( $(this).text() == "Challenge 4" ){
				$('html, body').animate({scrollTop : 5703},800);
				return false;
			} else if ( $(this).text() == "Challenge 5" ){
				$('html, body').animate({scrollTop : 7556},800);
				return false;
			} else if ( $(this).text() == "Challenge 6" ){
				$('html, body').animate({scrollTop : 10842},800);
				return false;
			}
		} else {
			if ($(this).text() == "Challenge 1" ){
				$('html, body').animate({scrollTop : 718},800);
				return false;
			} else if ( $(this).text() == "Challenge 2" ){
				$('html, body').animate({scrollTop : 2145},800);
				return false;
			} else if ( $(this).text() == "Challenge 3" ){
				$('html, body').animate({scrollTop : 3670},800);
				return false;
			} else if ( $(this).text() == "Challenge 4" ){
				$('html, body').animate({scrollTop : 5103},800);
				return false;
			} else if ( $(this).text() == "Challenge 5" ){
				$('html, body').animate({scrollTop : 6836},800);
				return false;
			} else if ( $(this).text() == "Challenge 6" ){
				$('html, body').animate({scrollTop : 9970},800);
				return false;
			}
		}
	});

});
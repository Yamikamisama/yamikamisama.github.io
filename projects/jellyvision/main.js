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
			if ($(this).text() == "Part 1" ){
				$('html, body').animate({scrollTop : 934},800);
				return false;
			} else if ( $(this).text() == "Part 2" ){
				$('html, body').animate({scrollTop : 3400},800);
				return false;
			} else if ( $(this).text() == "Part 3" ){
				$('html, body').animate({scrollTop : 8401},800);
				return false;
			}
		} else {
			if ($(this).text() == "Part 1" ){
				$('html, body').animate({scrollTop : 894},800);
				return false;
			} else if ( $(this).text() == "Part 2" ){
				$('html, body').animate({scrollTop : 3293},800);
				return false;
			} else if ( $(this).text() == "Part 3" ){
				$('html, body').animate({scrollTop : 8066},800);
				return false;
			}
		}
	});

});


// document.body.scrollTop
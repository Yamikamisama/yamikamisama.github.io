$(document).ready(function() {

	$(window).on('scroll', function(event) {
		if(document.body.scrollTop > 1060 ){
			$('.buttons-row').addClass('fix-nav')
			$('.challenge').first().addClass('hidden-padding')
		} else {
			$('.buttons-row').removeClass('fix-nav')
			$('.challenge').first().removeClass('hidden-padding')
		}
	});

	$('button').on('click', function(){
		if($(window).width() > 1000) {
			if ($(this).text() == "Reason 1" ){
				$('html, body').animate({scrollTop : 1063},800);
				return false;
			} else if ( $(this).text() == "Reason 2" ){
				$('html, body').animate({scrollTop : 1383},800);
				return false;
			} else if ( $(this).text() == "Reason 3" ){
				$('html, body').animate({scrollTop : 1771},800);
				return false;
			} else if ( $(this).text() == "Reason 4" ){
				$('html, body').animate({scrollTop : 2166},800);
				return false;
			} else if ( $(this).text() == "Reason 5" ){
				$('html, body').animate({scrollTop : 2681},800);
				return false;
			} else if ( $(this).text() == "Reason 6" ){
				$('html, body').animate({scrollTop : 3110},800);
				return false;
			}
		} else {
			if ($(this).text() == "Reason 1" ){
				$('html, body').animate({scrollTop : 1698},800);
				return false;
			} else if ( $(this).text() == "Reason 2" ){
				$('html, body').animate({scrollTop : 2120},800);
				return false;
			} else if ( $(this).text() == "Reason 3" ){
				$('html, body').animate({scrollTop : 2613},800);
				return false;
			} else if ( $(this).text() == "Reason 4" ){
				$('html, body').animate({scrollTop : 3079},800);
				return false;
			} else if ( $(this).text() == "Reason 5" ){
				$('html, body').animate({scrollTop : 3502},800);
				return false;
			} else if ( $(this).text() == "Reason 6" ){
				$('html, body').animate({scrollTop : 4855},800);
				return false;
			}
		}
	});

});
$(document).ready(function() {

	setInterval(function(){
		if ($('.logo-header').html() === "Casting to the People"){
			$('.logo-header').fadeOut('fast')
			$('.logo-header').html('Please Choose a Time')
			$('.logo-header').fadeIn('fast')
		} else {
			$('.logo-header').fadeOut('fast')
			$('.logo-header').html('Casting to the People')
			$('.logo-header').fadeIn('fast')
		}
	},3000)

$('body').on('click', 'button', function(){
	setTimeout(function(){
		$('.hidden-logo').fadeIn('fast')
	},2000)
	var time = $(this).html()
	$('.hidden-div h1').html("Casting to the People wishes you good luck on your audition at " + time)
	$('.hidden-div').fadeIn('fast')
	setTimeout(function(){
	$('.hidden-logo').fadeOut('fast')
	$('.hidden-div').fadeOut('fast')
	}, 3500)
})


});
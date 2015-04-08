$(document).ready(function() {
	
	$('.share').on('click', function(){
		console.log("hello")
		console.log($(this).parent("div").parent("div").parent("div"))
		debugger
		$(this).parent("div").parent("div").parent("div").find('.shareicons').toggle()
	});

	$('.comment-submit-button').on('click', function() {
		var $value = $('#comment').val();
		debugger
		$('.comment-box').append('<p>' + $value + '</p>')
		$('#comment').val("");
	});

});


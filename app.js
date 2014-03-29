$(document).ready(function(){
	$('.button').click(function(){
		$('.items').append($('<li>', {
			text: $('.texts').val()
	}))
	var new_Item = $('.texts').val();
		if (new_Item == ''){
			alert('Please Enter a Valid Item');
			return $('li').last().remove();
		}
	})
	$('ul').on('click', 'li', function(){
		$(this).toggleClass('complete');
	})
	$('div').on('click', '.delete', function(){
		$('li').hide();
	});
});
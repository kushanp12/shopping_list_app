$(document).ready(function(){
	// When new item is submitted, jQuery will append the item a <li> tag//
	$('.button').click(function(){
		$('.items').append($('<li>', {
			text: $('.texts').val()
	}))
	$('form').on('click', function(event){
		event.preventDefault();
		$('.texts').val('');
	})
	// If a null item is submitted, the app will alert the user to enter a proper, viable item //
	var new_Item = $('.texts').val();
		if (new_Item == ''){
			alert('Please Enter a Valid Item');
			return $('li').last().remove();
		}
		else if (new_Item == ' '){
			alert('Please Enter a Valid Item');
			return $('li').last().remove();
		}
	})
	// When a item that is already on the list is clicked, it will replace the <li> with a different class that will cross the item out//
	$('ul').on('click', 'li', function(){
		$(this).toggleClass('complete');
	})
	// This button deletes the entire list //
	$('div').on('click', '.delete', function(){
		$('li').hide();
	});
});
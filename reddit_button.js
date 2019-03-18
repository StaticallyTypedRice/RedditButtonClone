// main
function reddit_button_unlock(id) {
	var reddit_button_location = '#' + id + '-reddit_button_cover';
	
	$(reddit_button_location).addClass('activated');
	setTimeout(function () {
       $('.reddit_button_cover').addClass('x');
    }, 300);
}


// Button press message
var presses = 0;
var s = '';

function pressLog() {
	presses = presses + 1;
	if (presses == 1) {
		s = '';
	} else {
		s = 's'
	}
	$('#button_msg').replaceWith('<div id="button_msg"><p style="text-align: center;">You have pressed the button '+presses+' time'+s+'</p></div>');
}

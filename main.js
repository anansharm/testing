$(document).ready(function(){
	//sorting function
	$('ol').sortable();

	//To target thew second element and change the background color
	var $li = $('li:nth-child(2)');
	$li.css({'background-color':'red'});
});

//FizzBuzz Exercise or call it a game if you like
function fizz(i){
	    	if (i<=0 || i > 1000) {
	    		return "Enter a number between 1 and 1000";
	    	}
	    	
			if (i%3==0 && i%5==0) {
				return "FizzBuzz";
			}
			else if (i%3==0) {
				return "Fizz";
			}
			else if(i%5==0) {
				return "Buzz";
			}
			else{
				return "Neither Fizz nor Buzz"
			}	
	    }

document.getElementById('UserInputAmount').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if ( charCode == '13' ) {
      // Enter pressed
	    var x = document.getElementById("UserInputAmount").value;
		document.getElementById("demo").innerHTML = fizz(x);
	    return false;
    }
};

//Fun with jQuery part

$(document).ready(function(){
	$('.change').mouseenter(function(){
		$(this).animate({
			height: '+=10px'
		});
	});

	$('.change').mouseleave(function(){
		$(this).animate({
			height: '-=10px'
		});
	});
	$('.change').click(function(){	
		$(this).toggle(1000)
	});

});
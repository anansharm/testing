$(document).ready(function(){
	//sorting function
	$('ol').sortable();

	//To target thew second element and change the background color
	var $li = $('li:nth-child(2)');
	$li.css({'background-color':'red'});
});


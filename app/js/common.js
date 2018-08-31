$(function() {

	$('.menu').superfish({
		speed: 200,
		delay: 200
	});

});

$('.toggle-menu').click(function() {
	$('.menu--hidden').slideToggle();
});

$(document).ready(function() {
	updateFunction();
});


$(window).resize(function() {
	updateFunction();
});
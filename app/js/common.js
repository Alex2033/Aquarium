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

function updateFunction() {
	$(function(){

		if ($(window).width() < 768 ) {
			$('.header__btn').html('<img class="header__btn-img" src="img/header/btn-img.svg" alt="Button image"></img><span>Эл. билет</span>');
		} 
		else {
			$('.header__btn').html('<img class="header__btn-img" src="img/header/btn-img.svg" alt="Button image"></img><span>Электронный билет в Океанариум</span>');
		}

	});
	
}
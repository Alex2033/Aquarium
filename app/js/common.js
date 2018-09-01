$(function() {

	$('.menu').superfish({
		speed: 200,
		delay: 200
	});

});

$('.toggle-menu').click(function() {
	$('.menu--hidden').slideToggle();
});

$(function(){

	$('.children__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow: ".children-arrow--left",
		nextArrow: ".children-arrow--right",
		dotsClass: "children-buttons",
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<button class="children-button"></button>';
},
	});

});

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(".header").offset().top) {
			$("#scrollUp").fadeIn();
		}
		else {
			$("#scrollUp").fadeOut();
		}
	});
	$("#scrollUp").click(function() {
		$("body, html").animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});
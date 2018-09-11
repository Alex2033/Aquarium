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
		prevArrow: ".grey-arrow--left",
		nextArrow: ".grey-arrow--right",
		dotsClass: "slick-buttons",
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<button class="slick-button"></button>';
},
	});

});

$(function(){

	$('.expositions-s__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow: ".grey-arrow--left",
		nextArrow: ".grey-arrow--right",
		dotsClass: "slick-buttons",
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<button class="slick-button"></button>';
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

$(function() {
	$('.search__button').mouseover(function() {
		$('.search__input').css({
			'width': '200px',
			'opacity': '1',
			'visibility': 'visible'
		})
	});
});

$(function() {
	$('.search__input').mouseout(function() {
		$('.search__input').css({
			'width': '0',
			'opacity': '0',
			'visibility': 'hidden'
		})
	});
});

$('.inner-menu__sandwich').click(function() {
	$('.sidebar__list').slideToggle();
});


$(document).ready(function () {
    slick_slider();
});

$(window).resize(function() {
	slick_slider();
});

function slick_slider() {
    var wrapper = $(".inner-images");
    if ($(".slick-initialized").length) {
        wrapper.slick('unslick');
    }
    wrapper.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
		arrows: true,
		dotsClass: "slick-buttons",
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<button class="slick-button"></button>';
		},
		responsive: [
		{
			breakpoint: 99999,
			settings: "unslick"
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
	    	}
		}
		]
	});
};

$(function() {

	var listLength = $('.inhabitants__list').children().length;

	for (var i = 1; i <= listLength; i++) {
		
		console.log($('[data-modal="click-' + i + '"]'));
		
		$('[data-modal="click-' + i + '"]').click(function() {

			$('#modal-' + i).fadeIn(300);
			$('html, body').animate({
				scrollTop:  $(".modal").offset().top
			});
		
		});	
	}

});

/*
$('[data-modal="click-1"]').click(function() {
	$('#modal-1').fadeIn(300);
	$('html, body').animate({
		scrollTop:  $(".modal").offset().top
	});
});*/


/*
for (var i = 1; i <= 10; i++) {
	console.log('#modal-' + i);
	console.log('[data-modal="click-' + i + '"]')
}*/


$('.modal__exit').click(function() {
	$('.modal').fadeOut(300);
});

$('#mask').click(function() {
	$('.modal').fadeOut(300);
});

$(function(){

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		dotsClass: "slick-buttons",
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<button class="slick-button"></button>';
},
	});

});

$(function () {

	if ($('.sidebar__sublist-link').hasClass('active')) {
		$('.sidebar__link.link.active').removeClass('active');
	}

});
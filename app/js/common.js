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
		if ($(this).scrollTop() > 200) {
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
	var cards = $('.inhabitants__list').children();
	$(cards).on('click', function() {
		var str = $(this).data('modal');
		var numberModal = str.replace('click-', '');
		$('#modal-' + numberModal).fadeIn(300);
		$('html, body').animate({
			scrollTop:  $('#modal-' + numberModal).offset().top
		});
	});
});

$(function() {
	var cards = $('.adults__wrapper').children();
	$(cards).on('click', function() {
		var str = $(this).data('modal');
		var numberModal = str.replace('click-', '');
		$('#modal-' + numberModal).fadeIn(100);
		$('html, body').animate({
			scrollTop:  $('#modal-' + numberModal).offset().top
		});
	});
});

$(function() {
	var cards = $('.onecol-list').children();
	$(cards).on('click', function() {
		var str = $(this).data('modal');
		var numberModal = str.replace('click-', '');
		$('#modal-' + numberModal).fadeIn(100);
		$('html, body').animate({
			scrollTop:  $('#modal-' + numberModal).offset().top
		});
	});
});

$(function() {
	var cards = $('.animals__list').children();
	$(cards).on('click', function() {
		var str = $(this).data('modal');
		var numberModal = str.replace('click-', '');
		$('#modal-' + numberModal).fadeIn(100);
		$('html, body').animate({
			scrollTop:  $('#modal-' + numberModal).offset().top
		});
	});
});

$('.modal__exit').click(function() {
	$('.modal').fadeOut(300);
});

$('.mask').click(function() {
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

$(document).ready(function () {
    shortWords();
});

$(window).resize(function() {
	shortWords();
});

function shortWords() {

    if ($(window).width() >= 768) {
        var size = 137,
        newsContent= $('.cards__text p'),
        newsText = newsContent.text();
        
        if(newsText.length > size){
            newsContent.text(newsText.slice(0, size) + ' ...');
        }
    } 

}

$('.accordion__button').click(function () {

    $(this).toggleClass('active');
    $('.accordion__content + .accordion__button').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);

});

ymaps.ready(init);
      
function init(){ 
	var myMap = new ymaps.Map("map", {
		center: [59.918886, 30.339072],
		zoom: 16
	}); 
	
	var myPlacemark = new ymaps.Placemark([59.918886, 30.339072], {}, {
		preset: 'islands#redIcon'
	});
	
	myMap.geoObjects.add(myPlacemark);
}
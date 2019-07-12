// functions for show and hide burger-menu
function hideMenu() {
	$(".menu").slideToggle("slow", function () {
		$(".cross").hide();
		$(".hamburger").show();
	});
};

function showMenu() {
	$(".menu").slideToggle("slow", function () {
		$(".hamburger").hide();
		$(".cross").show();
	});
};


// burger menu
$(function () {
	$(".hamburger").click(function () {
		showMenu();
	});
	$(".cross").click(function () {
		hideMenu();
	});
});


// button to the top 

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() >= '750' && $(this).width() >= '480') {
			$('.button').fadeIn();
		} else {
			if ( $(this).scrollTop() >= '240' && $(this).width() < '480'){
				$('.button').fadeIn();
			}
			else{
				$('.button').fadeOut();
			}
			
		}
	});
});


// $(function() {
// 	$(window).scroll(function(){
// 		if($(this).scrollTop() >= 255 && $(this).width() >= 480) {
// 			$("nav").css({
// 				"position": "fixed",
// 				'top': '0',
// 				'bottom': 'initial',
// 				'left': '0',
// 			 	'align-content': 'center',
// 			 	'margin': '0',
// 			 	'width': '100%',
// 			 	'z-index': '1000',
// 				'box-shadow': '0 5px 5px rgba(0, 0, 0, .1)',
// 				'background': '#fff'
// 			});
// 			$('header').css({
// 				'box-shadow': '0 5px 5px rgba(0, 0, 0, .1)'
// 			});
// 		}
// 		else{
// 			$("nav").css({
// 				"position": "",
// 				'top': '',
// 				'bottom': '0',
// 				'box-shadow': '0 5px 5px rgba(0, 0, 0, .1)',
// 			// 	'padding': '0 0 20px',
// 			// 	'margin-top': '12px',
// 			// 	'background': 'none',
// 			});
// 			$('header').css({
// 				'box-shadow': '0 5px 5px rgba(0, 0, 0, .1)'
// 			});
// 		}
// 	})
// });

/* Make nav fixedable again */

$(function() {
	var wndw = $(this),
		header = $('header'),
		nav = $('nav')
		replacer = $('.nav-fixed-replacer');
	var offset = replacer.offset().top;

	window.addEventListener("orientationchange", function() {
	    setTimeout(function(){
	    	offset = replacer.offset().top;
	    	// console.log(offset);
	    }, 150);
	}, false);

	$(window).scroll(function(){
		if(wndw.scrollTop() >= offset) {
			nav.addClass('nav-fixed');
			header.addClass('header-nav-fixed');
		}
		else{
			nav.removeClass('nav-fixed');
			header.removeClass('header-nav-fixed');
		}
	})
});


$(".button").on("click", function () {
	$("html, body").animate({ scrollTop: 0 }, 500, function () {
		$(".button").fadeOut();
	});
});

//anchor scroll
// 60 - size of menu

$(".contacts").click(function () {
	let anchor = $(this).attr("href");
	$("html, body").animate({
		scrollTop: $(anchor).offset().top - 60
	}, 500);
	if ( $(window).width() <= '480'){
		hideMenu();
	}
	
});


// slider

$(".single-item").slick({
	infinite: true,
	dots: false,
	arrows: false,
	draggable: true,
	autoplay: true,
	autoplaySpeed: 2000,
});

// custom prev next buttons

$('.button_right').click(function () {
	$('.single-item').slick('slickNext');
});
$(".button_left").click(function () {
	$(".single-item").slick("slickPrev");
});

// nav buttons

$(".navButtonWrap__item").click(function(){
	let scrollTo = $(this).text();
	$('.single-item').slick('slickGoTo', scrollTo);
});

// remove active 
$(".single-item").on("beforeChange", function(){
	let currentPos = $('.single-item').slick('slickCurrentSlide');
	let arrayOfItems = document.getElementsByClassName("navButtonWrap__item");
	arrayOfItems[currentPos].classList.remove("navButtonWrap__item--active");
});

// add ative
$('.single-item').on('afterChange', function(){
	let currentPos = $('.single-item').slick('slickCurrentSlide');
	let arrayOfItems = document.getElementsByClassName("navButtonWrap__item");
	arrayOfItems[currentPos].classList.add("navButtonWrap__item--active");
	// $(".navButtonWrap__item").filter(function(){
	// 	return $(this).text() == $('.single-item').slick('slickCurrentSlide');
	// }).addClass("navButtonWrap__item--active");
});

$('#ivents').click(function() {
	alert("-Пейн, я не чувствую ИВЕНТОВ!!! \n  - У тебя их нет.");
});





























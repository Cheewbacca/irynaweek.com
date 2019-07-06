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
	$(".cross").hide();
	$(".menu").hide();
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


$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() >= '240' && $(this).width() >= 480) {
			$("nav").css({
				"position": "fixed",
				'top': '0',
				'left': '0',
				'background': '#fff',
				'align-content': 'center',
				'margin': '0',
				'padding': '15px',
				'width': '100%',
				'z-index': '1',
				'box-shadow': '0 5px 5px rgba(0, 0, 0, .1)',
			});
		}
		else{
			$("nav").css({
				"position": "relative",
				'top': '0',
				'box-shadow': 'none',
				'padding': '0 0 20px',
				'margin-top': '12px',
				'background': 'none',
			});
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


// $(function(){
// 	if( $(window).width() <= '500' ){
// 		$('#fb-post').css({
// 			'width': '320px',
// 			'margin': 'auto',
// 		});
// 	}
// });
































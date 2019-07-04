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
		if ($(this).scrollTop() >= 100) {
			$('.button').fadeIn();
		} else {
			$('.button').fadeOut();
		}
	});
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
	hideMenu();
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



































$(function() {

	// Fixed Header
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	// Nav Toggle
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(introH, scrollPos);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(introH, scrollPos);
	});

	function checkScroll(introH, scrollPos) {
		if(scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	// Smooth Scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);

		nav.removeClass("show");
	});


	// Nav Toggle
	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	})


	// Reviews: https://kenwheeler.github.io/slick/
	let slider = $("#reviewsSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		arrows: false,
		dots: true
	});

});
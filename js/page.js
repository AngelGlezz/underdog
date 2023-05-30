$(document).ready(function(){
    var windowHeight = $(window).height();
	var barraAltura = $('.navbar').innerHeight();
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > windowHeight) {
			$('.navbar').addClass('fixed-top');
			$('body').css({'margin-top': barraAltura+'px'})
		} else {
			$('.navbar').removeClass('fixed-top');
			$('body').css({'margin-top': '0px'})
		}
	});

	$('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});
	
	$(".nav-link").click(function(){
		$('#navbarTogglerDemo02').removeClass('show');
	});

	$(".navbar-brand").click(function() {
		$('body,html').animate({
            scrollTop: $('#cover').offset().top
        }, 1000);
        return false;
	});

	$(".who").click(function() {
		$('body,html').animate({
            scrollTop: $('#our-section').offset().top
        }, 1000);
        return false;
	});

	$("#line-cover").click(function() {
		$('body,html').animate({
            scrollTop: $('#our-section').offset().top
        }, 1000);
        return false;
	});

	$(".brands").click(function() {
		$('body,html').animate({
            scrollTop: $('#brands-section').offset().top
        }, 1000);
        return false;
	});

	$(".clients").click(function() {
		$('body,html').animate({
            scrollTop: $('#clients-section').offset().top
        }, 1000);
        return false;
	});

	$(".team").click(function() {
		$('body,html').animate({
            scrollTop: $('#team').offset().top
        }, 1000);
        return false;
	});

	$(".milestones").click(function() {
		$('body,html').animate({
            scrollTop: $('#milestones-section').offset().top
        }, 1000);
        return false;
	});

	$(".boards").click(function() {
		$('body,html').animate({
            scrollTop: $('#investors-section').offset().top
        }, 1000);
        return false;
	});

	$(".contact").click(function() {
		$('body,html').animate({
            scrollTop: $('#contact-section').offset().top
        }, 1000);
        return false;
	});

	$('.arrow').click(function () {
		if ($(this).hasClass('short')) {
			$(this).parent().css('height','auto');
			$(this).addClass('extend');
			$(this).removeClass('short');
			$(this).css('transform', 'rotate(180deg)');
		} else if ($(this).hasClass('extend')) {
			$(this).parent().css('height','245px');
			$(this).addClass('short');
			$(this).removeClass('extend');
			$(this).css('transform', 'rotate(0deg)');
		}
	});
});
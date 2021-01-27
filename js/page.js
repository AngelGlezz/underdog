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
        speed: 500,
        slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
    });
});
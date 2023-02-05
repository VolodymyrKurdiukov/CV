function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
$(document).ready(function () {
	$(window).scroll(function () {
		let top = $(document).scrollTop();
		if (top > 50) {

			$(".header").css({
				boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
				transition: ' all 0.3s ease',
				background: '#fff'
			});


		} else {
			$(".header").css({
				boxShadow: 'none',
				transition: ' all 0.3s ease',
				background: 'none'
			});
		}
	});

	$("a.header__link").on("click", function (e) {
		e.preventDefault();
		var anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - document.querySelector('header').offsetHeight
		}, 800);
	});
});
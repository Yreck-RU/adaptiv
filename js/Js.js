
let p = 1;
$(document).ready(function() {
	$('.slaid-1-buttton').click(function(event) {
		$('.slaid-2').toggleClass('one');
		$('.slaid-1').toggleClass('off');
		$(".test").toggleClass('a1');
	});
	$('.slaid-2-buttton').click(function(event) {
		$('.slaid-2').toggleClass('off');
		$('.slaid-5').toggleClass('one');
		$(".test").removeClass('a1');
		$('.test').toggleClass('a2');

		$('.slaib-2-progresbar-img').toggleClass('s1');

		if ($("#adiv1").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-5-buttton').click(function(event) {
		$('.slaid-6').toggleClass('one');
		$('.slaid-5').toggleClass('off');
		if ($("#adiv2").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-6-buttton').click(function(event) {
		$('.slaid-7').toggleClass('one');
		$('.slaid-6').toggleClass('off');
		if ($("#adiv3").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-7-buttton').click(function(event) {
		$('.slaid-8').toggleClass('one');
		$('.slaid-7').toggleClass('off');
		if ($("#adiv4").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-8-buttton').click(function(event) {
		$('.slaid-9').toggleClass('one');
		$('.slaid-8').toggleClass('off');
		if ($("#adiv5").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-9-buttton').click(function(event) {
		$('.slaid-10').toggleClass('one');
		$('.slaid-9').toggleClass('off');
		if ($("#adiv6").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-10-buttton').click(function(event) {
		$('.slaid-11').toggleClass('one');
		$('.slaid-10').toggleClass('off');
		if ($("#adiv7").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-11-buttton').click(function(event) {
		$('.slaid-12').toggleClass('one');
		$('.slaid-11').toggleClass('off');
		$(".test").removeClass('a2');
		$('.test').toggleClass('a3');
		if ($("#adiv8").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-12-buttton').click(function(event) {
		$('.slaid-3').toggleClass('one');
		$('.slaid-12').toggleClass('off');
		$(".test").removeClass('a3');
		$('.test').toggleClass('a4');
		if ($("#adiv9").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-3-buttton').click(function(event) {
		$('.slaid-13').toggleClass('one');
		$('.slaid-3').toggleClass('off');
		$(".test").removeClass('a4');
		$('.test').toggleClass('a2');

		$('.slaib-2-progresbar-img').removeClass('s1');
		$('.slaib-2-progresbar-img').toggleClass('s2');

		
	});

	$('.slaid-13-buttton').click(function(event) {
		$('.slaid-4').toggleClass('one');
		$('.slaid-13').toggleClass('off');
		$(".test").removeClass('a2');

		$('.slaib-2-progresbar-img').removeClass('s1');
		$('.slaib-2-progresbar-img').toggleClass('s2');


		if ($("#adiv10").is(":checked")) {
			p = p + 1;
		}
		if ($("#adiv11").is(":checked")) {
			p = p + 1;
		}
		if ($("#adiv12").is(":checked")) {
			p = p + 1;
		}
		if ($("#adiv13").is(":checked")) {
			p = p + 1;
		}
		if (p <= 4) {
			$('.slaid-16').toggleClass('one');
		} else if (p >= 5 && p <= 8) {
			$('.slaid-15').toggleClass('one');
		} else {
			$('.slaid-14').toggleClass('one');
		}
	});
	




	$('.slaid-4-buttton').click(function(event) {
		$(".slaid-2").removeClass('one');
		$(".slaid-3").removeClass('one');
		$(".slaid-4").removeClass('one');
		$(".slaid-5").removeClass('one');
		$(".slaid-6").removeClass('one');
		$(".slaid-7").removeClass('one');
		$(".slaid-8").removeClass('one');
		$(".slaid-9").removeClass('one');
		$(".slaid-10").removeClass('one');
		$(".slaid-11").removeClass('one');
		$(".slaid-12").removeClass('one');

		$(".slaid-1").removeClass('off');
		$(".slaid-2").removeClass('off');
		$(".slaid-3").removeClass('off');
		$(".slaid-4").removeClass('off');
		$(".slaid-5").removeClass('off');
		$(".slaid-6").removeClass('off');
		$(".slaid-7").removeClass('off');
		$(".slaid-8").removeClass('off');
		$(".slaid-9").removeClass('off');
		$(".slaid-10").removeClass('off');
		$(".slaid-11").removeClass('off');
		$(".slaid-12").removeClass('off');

		$(".test").removeClass('activ');
		$(".test").removeClass('acti');
		$('.slaib-2-progresbar-img').removeClass('s2');
	});



	















});

function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

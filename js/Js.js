
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

		$('.slaib-2-progresbar-img').toggleClass('s2');
		$('.slaib-2-progresbar-img').removeClass('s1');

		if ($("#adiv2").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-6-buttton').click(function(event) {
		$('.slaid-7').toggleClass('one');
		$('.slaid-6').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s3');
		$('.slaib-2-progresbar-img').removeClass('s2');
		if ($("#adiv3").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-7-buttton').click(function(event) {
		$('.slaid-8').toggleClass('one');
		$('.slaid-7').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s4');
		$('.slaib-2-progresbar-img').removeClass('s3');
		if ($("#adiv4").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-8-buttton').click(function(event) {
		$('.slaid-9').toggleClass('one');
		$('.slaid-8').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s5');
		$('.slaib-2-progresbar-img').removeClass('s4');
		if ($("#adiv5").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-9-buttton').click(function(event) {
		$('.slaid-10').toggleClass('one');
		$('.slaid-9').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s6');
		$('.slaib-2-progresbar-img').removeClass('s5');
		if ($("#adiv6").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-10-buttton').click(function(event) {
		$('.slaid-11').toggleClass('one');
		$('.slaid-10').toggleClass('off');

		$('.slaib-2-progresbar-img').toggleClass('s7');
		$('.slaib-2-progresbar-img').removeClass('s6');
		if ($("#adiv7").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-11-buttton').click(function(event) {
		$('.slaid-12').toggleClass('one');
		$('.slaid-11').toggleClass('off');
		$(".test").removeClass('a2');
		$('.test').toggleClass('a3');

		$('.slaib-2-progresbar-img').toggleClass('s8');
		$('.slaib-2-progresbar-img').removeClass('s7');
		if ($("#adiv8").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-12-buttton').click(function(event) {
		$('.slaid-3').toggleClass('one');
		$('.slaid-12').toggleClass('off');
		$(".test").removeClass('a3');
		$('.test').toggleClass('a4');

		$('.slaib-2-progresbar-img').toggleClass('s9');
		$('.slaib-2-progresbar-img').removeClass('s8');
		if ($("#adiv9").is(":checked")) {
			p = p + 1;
		}
	});
	$('.slaid-3-buttton').click(function(event) {
		$('.slaid-13').toggleClass('one');
		$('.slaid-3').toggleClass('off');
		$(".test").removeClass('a4');
		$('.test').toggleClass('a2');

		$('.slaib-2-progresbar-img').toggleClass('s10');
		$('.slaib-2-progresbar-img').removeClass('s9');

		$('.slaib-2-progresbar-img').removeClass('s1');
		$('.slaib-2-progresbar-img').toggleClass('s2');

		
	});

	$('.slaid-13-buttton').click(function(event) {
		$('.slaid-4').toggleClass('one');
		$('.slaid-13').toggleClass('off');
		$(".test").removeClass('a2');

		$('.slaib-2-progresbar-img').toggleClass('s11');
		$('.slaib-2-progresbar-img').removeClass('s10');

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

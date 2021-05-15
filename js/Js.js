
$(document).ready(function() {
	/*$('.slaid-1-buttton').click(function(event) {
		$('.slaid-2').toggleClass('one');
		$('.slaid-1').toggleClass('off');
		$(".test").toggleClass('activ2');
	});
	$('.slaid-2-buttton').click(function(event) {
		$('.slaid-2').toggleClass('off');
		$('.slaid-5').toggleClass('one');
		$('.test').toggleClass('activ3');

		$('.slaib-2-progresbar-img').toggleClass('s1');

	});
	$('.slaid-5-buttton').click(function(event) {
		$('.slaid-6').toggleClass('one');
		$('.slaid-5').toggleClass('off');
	});
	$('.slaid-6-buttton').click(function(event) {
		$('.slaid-7').toggleClass('one');
		$('.slaid-6').toggleClass('off');
	});
	$('.slaid-7-buttton').click(function(event) {
		$('.slaid-8').toggleClass('one');
		$('.slaid-7').toggleClass('off');
	});
	$('.slaid-8-buttton').click(function(event) {
		$('.slaid-9').toggleClass('one');
		$('.slaid-8').toggleClass('off');
	});
	$('.slaid-9-buttton').click(function(event) {
		$('.slaid-10').toggleClass('one');
		$('.slaid-9').toggleClass('off');
	});
	$('.slaid-10-buttton').click(function(event) {
		$('.slaid-11').toggleClass('one');
		$('.slaid-10').toggleClass('off');
	});
	$('.slaid-11-buttton').click(function(event) {
		$('.slaid-12').toggleClass('one');
		$('.slaid-11').toggleClass('off');
	});
	$('.slaid-12-buttton').click(function(event) {
		$('.slaid-3').toggleClass('one');
		$('.slaid-12').toggleClass('off');
	});
	$('.slaid-3-buttton').click(function(event) {
		$('.slaid-4').toggleClass('one');
		$('.slaid-3').toggleClass('off');
		$('.test').toggleClass('activ3');

		$('.slaib-2-progresbar-img').removeClass('s1');
		$('.slaib-2-progresbar-img').toggleClass('s2');
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
		$(".slaid-12").removeClass('off');

		$(".test").removeClass('activ');
		$(".test").removeClass('acti');
		$('.slaib-2-progresbar-img').removeClass('s2');
	});*/






















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

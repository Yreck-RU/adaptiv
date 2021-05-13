
$(document).ready(function() {
	$('.slaid-1-buttton').click(function(event) {
		$('.slaid-2').toggleClass('one');
		$('.slaid-1').toggleClass('off');
		$(".test").toggleClass('activ2');
	});
	$('.slaid-2-buttton').click(function(event) {
		$('.slaid-2').toggleClass('off');
		$('.slaid-3').toggleClass('one');
		$('.test').toggleClass('activ3');

		$(".test").removeClass('activ2');
		$(".test").removeClass('activ');

		$('.slaib-2-progresbar-img').toggleClass('s1');

	});
	$('.slaid-3-buttton').click(function(event) {
		$('.slaid-4').toggleClass('one');
		$('.slaid-3').toggleClass('off');
		$('.test').removeClass('activ');
		$('.test').toggleClass('activ3');

		$('.slaib-2-progresbar-img').removeClass('s1');
		$('.slaib-2-progresbar-img').toggleClass('s2');
	});
	$('.slaid-4-buttton').click(function(event) {
		$(".slaid-1").removeClass('one');
		$(".slaid-2").removeClass('one');
		$(".slaid-3").removeClass('one');
		$(".slaid-4").removeClass('one');
		$(".test").removeClass('activ');
		$(".slaid-1").removeClass('off');
		$(".slaid-2").removeClass('off');
		$(".slaid-3").removeClass('off');
		$(".slaid-4").removeClass('off');
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

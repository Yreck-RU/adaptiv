
$(document).ready(function() {
	$('.slaid-1-buttton').click(function(event) {
		$('.slaid-2').toggleClass('one');
		$('.slaid-1').toggleClass('off');
	});
	$('.slaid-2-buttton').click(function(event) {
		$('.slaid-2').toggleClass('off');
		$('.slaid-3').toggleClass('one');
		$('.test').toggleClass('activ');
	});
	$('.slaid-3-buttton').click(function(event) {
		$('.slaid-4').toggleClass('one');
		$('.slaid-3').toggleClass('off');
		$('.test').toggleClass('acti');
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

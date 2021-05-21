
$(document).ready(function() {
	$('.heder-menu__icon').click(function(event) {
		$('.heder-menu__icon,.heder-menu,.heder-fon').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.heder-fon').click(function(event) {
		$('.heder-menu__icon,.heder-menu,.heder-fon').removeClass('active');
	});
	$('.block__title').click(function(event) {
		if ($(".price-list-list").hasClass("one")) {
			$(".block__title").not($(this)).removeClass("active");
			$(".block__text").not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive:[
			{
				breakpoint: 1224,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	function adapuyt(){
		let rodit = $( "#rodit" ).offset();
		let l1 = $( "#port1" ).offset();
		let v1 = $( "#port1" ).height();

		let l2 = $( "#port2" ).offset();
		let v2 = $( "#port2" ).height();

		let l3 = $( "#port3" ).offset();
		let v3 = $( "#port3" ).height();

		let l4 = $( "#port4" ).offset();
		let v4 = $( "#port4" ).height();
		

		let cum1 = (+l1.top - +rodit.top)+ (v1 / 2);
		$('#line1').css("top", ""+cum1+"px");

		let cum2 = (+l2.top - +rodit.top)+ (v2 / 2);
		$('#line2').css("top", ""+cum2+"px");

		let cum3 = (+l3.top - +rodit.top)+ (v3 / 2);
		$('#line3').css("top", ""+cum3+"px");

		let cum4 = (+l4.top - +rodit.top)+ (v4 / 2);
		$('#line4').css("top", ""+cum4+"px");
	}
	adapuyt();
	window.addEventListener('resize' , function (event){
		const viewport_width =Math.max(document.documentElement.clientWidth);
		if (viewport_width > 1200) {
			adapuyt();
		}
		if (viewport_width <= 1200) {
			adapuyt();
		}
	});
});



























const parent_original = document.querySelector('.nav');
const parent = document.querySelector('.heder-menu');
const item = document.querySelector('.heder-body-nav-list');

const parent_original2 = document.querySelector('.foter-bottom-logo');
const parent2 = document.querySelector('.foter-bottom-adaptiv');
const item2 = document.querySelector('.foter-bottom-logo-p');
//Слушаем зменения размера браузера
const viewport_width2 =Math.max(document.documentElement.clientWidth);

if (viewport_width2 <= 767) {
	if (!item.classList.contains('done')) {
		parent.insertBefore(item, parent.children[2]);
		item.classList.add("done");
	}
} else {
	if (item.classList.contains('done')) {
		parent_original.insertBefore(item , parent_original.children[0]);
		item.classList.remove('done');
	}
}
if (viewport_width2 <= 767) {
	if (!item2.classList.contains('done')) {
		parent2.insertBefore(item2, parent2.children[2]);
		item2.classList.add("done");
	}
} else {
	if (item2.classList.contains('done')) {
		parent_original2.insertBefore(item2 , parent_original2.children[0]);
		item2.classList.remove('done');
	}
}
window.addEventListener('resize' , function (event){

	const viewport_width =Math.max(document.documentElement.clientWidth);

	if (viewport_width <= 767) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add("done");
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item , parent_original.children[0]);
			item.classList.remove('done');
		}
	}
	if (viewport_width <= 767) {
		if (!item2.classList.contains('done')) {
			parent2.insertBefore(item2, parent2.children[2]);
			item2.classList.add("done");
		}
	} else {
		if (item2.classList.contains('done')) {
			parent_original2.insertBefore(item2 , parent_original2.children[0]);
			item2.classList.remove('done');
		}
	}
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

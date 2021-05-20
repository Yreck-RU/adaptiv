
$(document).ready(function() {
	$('.heder-menu__icon').click(function(event) {
		$('.heder-menu__icon,.heder-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
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

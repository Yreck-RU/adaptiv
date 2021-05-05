function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
$(document).ready(function() {
	$('.heder-menu__icon').click(function(event) {
		$('.heder-menu__icon,.heder-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

const parent_original2 = document.querySelector('.foter-body-left');
const parent2 = document.querySelector('.foter-body-reght');
const item2 = document.querySelector('.foter-body-left-Logo');

const parent_original = document.querySelector('.heder-body');
const parent = document.querySelector('.heder-menu');
const item = document.querySelector('.heder-MainPart');

const viewport_width_n1 =Math.max(document.documentElement.clientWidth);
if (viewport_width_n1 <= 767) {
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
const viewport_width_n2 =Math.max(document.documentElement.clientWidth);
if (viewport_width_n2 <= 800) {
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

//Слушаем зменения размера браузера
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
	if (viewport_width <= 800) {
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
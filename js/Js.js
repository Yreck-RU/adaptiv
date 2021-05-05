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

const parent_original = document.querySelector('.heder-body');
const parent = document.querySelector('.heder-menu');
const item = document.querySelector('.heder-MainPart');

const parent_original2 = document.querySelector('.foter-body-reght-links');
const parent2 = document.querySelector('.footer-adaptiv-icon');
const item2 = document.querySelector('.foter-body-reght-links-list');

const parent_original3 = document.querySelector('.foter-body-left');
const parent3 = document.querySelector('.footer-adaptiv-logo');
const item3 = document.querySelector('.foter-body-left-Logo');

const parent_original4 = document.querySelector('.foter-body-reght-languages');
const parent4 = document.querySelector('.footer-adaptiv-languages');
const item4 = document.querySelector('.foter-body-reght-languages-list');

const parent_original5 = document.querySelector('.foter-body-left-meny');
const parent5 = document.querySelector('.footer-adaptiv-link');
const item5 = document.querySelector('.foter-body-left-links');

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
if (viewport_width_n1 <= 800) {
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
if (viewport_width_n1 <= 800) {
	if (!item3.classList.contains('done')) {
		parent3.insertBefore(item3, parent3.children[2]);
		item3.classList.add("done");
	}
} else {
	if (item3.classList.contains('done')) {
		parent_original3.insertBefore(item3 , parent_original3.children[0]);
		item3.classList.remove('done');
	}
}
if (viewport_width_n1 <= 800) {
	if (!item4.classList.contains('done')) {
		parent4.insertBefore(item4, parent4.children[2]);
		item4.classList.add("done");
	}
} else {
	if (item4.classList.contains('done')) {
		parent_original4.insertBefore(item4 , parent_original4.children[0]);
		item4.classList.remove('done');
	}
}
if (viewport_width_n1 <= 800) {
		if (!item5.classList.contains('done')) {
			parent5.insertBefore(item5, parent5.children[2]);
			item5.classList.add("done");
		}
	} else {
		if (item5.classList.contains('done')) {
			parent_original5.insertBefore(item5 , parent_original5.children[0]);
			item5.classList.remove('done');
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
	if (viewport_width <= 800) {
		if (!item3.classList.contains('done')) {
			parent3.insertBefore(item3, parent3.children[2]);
			item3.classList.add("done");
		}
	} else {
		if (item3.classList.contains('done')) {
			parent_original3.insertBefore(item3 , parent_original3.children[0]);
			item3.classList.remove('done');
		}
	}
	if (viewport_width <= 800) {
		if (!item4.classList.contains('done')) {
			parent4.insertBefore(item4, parent4.children[2]);
			item4.classList.add("done");
		}
	} else {
		if (item4.classList.contains('done')) {
			parent_original4.insertBefore(item4 , parent_original4.children[0]);
			item4.classList.remove('done');
		}
	}
	if (viewport_width <= 800) {
		if (!item5.classList.contains('done')) {
			parent5.insertBefore(item5, parent5.children[2]);
			item5.classList.add("done");
		}
	} else {
		if (item5.classList.contains('done')) {
			parent_original5.insertBefore(item5 , parent_original5.children[0]);
			item5.classList.remove('done');
		}
	}
});
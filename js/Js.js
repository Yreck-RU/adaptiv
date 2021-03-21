function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();



const cards = document.querySelectorAll(".container");

for (let i = 0; i < cards.length; i++){
	const card = cards[i];
	card.addEventListener("mousemove", strartRotate);
	card.addEventListener("mouseout", strartRotate);
}



function strartRotate(event) {
	const cardItem = this.querySelector(".cartinki");
	const halfHeight = cardItem.offsetHeight / 2;

	cardItem.style.transform = "rotateX(" + -(event.offsetY - halfHeight) / 5 + " deg)"
}


























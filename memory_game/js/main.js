
let cards = ["queen", "queen", "king", "king"];

cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay.length > 1) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  console.log("You found a match!");
		} else {
		  console.log("Sorry, try again.");
		}
	}
}

function flipCard(cardId) {
	let flippedCard = cards[cardId];
	console.log("User flipped " + flippedCard);
	cardsInPlay.push(flippedCard);
	checkForMatch();
	//return flippedCard;
}

flipCard(0)
flipCard(1)




//alert();
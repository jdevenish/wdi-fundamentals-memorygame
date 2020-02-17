
let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

cardsInPlay = [];

function printCardObj(cardObj) {
	console.log(cardObj.cardImage);
	console.log(cardObj.suit);
}

function checkForMatch(){
	if (cardsInPlay.length > 1) {
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		  console.log("You found a match!");
		  printCardObj(cardsInPlay[0]);
		  printCardObj(cardsInPlay[1])
		} else {
		  console.log("Sorry, try again.");
		}
	}
}

function flipCard(cardId) {
	let flippedCard = cards[cardId].rank;
	console.log("User flipped " + flippedCard);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	//return flippedCard;
}

flipCard(0)
flipCard(1)




//alert();

let cards = ["queen", "queen", "king", "king"];

let cardOne = cards[0];
let cardTwo = cards[1];

cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
	//console.log("User flipped " + cardsInPlay);
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else{
		alert("Sorry, try again.")
	}
}



//alert();
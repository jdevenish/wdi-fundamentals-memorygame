
/*
 * Define cards to be played with
 */
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
score = {
	player : 0,
	computer: 0
}

/*
 * Helper function that prints card image path and suit
 */
function printCardObj(cardObj) {
	console.log(cardObj.cardImage);
	console.log(cardObj.suit);
}

/*
 * Check for matching cards. 
 * Alert user with results.
 * Keep track of scores
 */
function checkForMatch(){
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		score.player += 1;
	  	alert("You found a match! \n "+
	  		"Player: " + score.player + "\n" +
	  		"Computer: " + score.computer);
	} else {
		score.computer += 1;
	  	alert("Sorry, try again! \n "+
	  		"Player: " + score.player + "\n" +
	  		"Computer: " + score.computer);
	}
	resetBoard();
	cardsInPlay = [];
}

/*
 * Flip card to selected state
 */
function flipCard() {
	let cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length > 1){
		checkForMatch();
	}
}

/*
 * Create a new board
 */
function createBoard() {
	for(let i=0; i<cards.length; i++){
		const board = document.getElementById("game-board");
		let tempCard = document.createElement('img');
		tempCard.setAttribute("src","images/back.png");
		tempCard.setAttribute("data-id", i);
		tempCard.addEventListener("click", flipCard);
		board.appendChild(tempCard);
	}
}

/*
 * Remove and rebuild the board
 */
function resetBoard() {
	for(let i=0; i<cards.length; i++){
		const board = document.getElementById("game-board");
		board.removeChild(board.childNodes[0]);
	}
	createBoard();
}


createBoard();
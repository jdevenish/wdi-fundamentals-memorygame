
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
	player : 0
}

/*
 * Check for matching cards. 
 * Alert user with results.
 * Keep track of scores
 */
function checkForMatch(){
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		score.player += 1;

	  	// alert("You found a match! \n "+
	  	// 	"Player: " + score.player + "\n" +
	  	// 	"Computer: " + score.computer);

	  	// setTimeout(function(){ alert("You found a match! \n "+
	  	// 	"Player: " + score.player + "\n" +
	  	// 	"Computer: " + score.computer); }, 750);

	  	// confirm("You found a match! \n "+
	  	// 	"Player: " + score.player + "\n" +
	  	// 	"Computer: " + score.computer);

	  	createResultsBoard(true);
	} else {
	  	// alert("Sorry, try again! \n "+
	  	// 	"Player: " + score.player + "\n" +
	  	// 	"Computer: " + score.computer);

	  	// setTimeout(function(){ alert("Sorry, try again! \n "+
	  	// 	"Player: " + score.player + "\n" +
	  	// 	"Computer: " + score.computer); }, 750);

	  	// confirm("Sorry, try again! \n "+
	  	// 	"Player: " + score.player + "\n" +
	  	// 	"Computer: " + score.computer);

	  	createResultsBoard(false);
	}
}


/*
 * Flip card to selected state
 */
function flipCard() {
	let cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId]);
	switch (cardsInPlay.length) {
		case 0: // No cards, get to playing!
			break; 
		case 1: // One card, keep going
			this.setAttribute("src", cards[cardId].cardImage);
			break;
		case 2: // Two cards, let's see how we did
			if (cardsInPlay[0] !== cardsInPlay[1]){ // Don't pick the same card
				this.setAttribute("src", cards[cardId].cardImage);
				checkForMatch();
			} else{
				cardsInPlay.pop();
			}
			break;
		default: // Ignore the click
			break;
	}
	
}

/*
 * Create Results Board
 */
function createResultsBoard(successValue) {
	const resultsBoard = document.getElementById("result-board");
	resultsBoard.classList.add("results");

	// Create outcome label
	const resultMessage = document.createElement('h2');
	resultMessage.classList.add("bannerHeading");
	if (successValue){
		resultMessage.textContent = "Match Found!";
	} else {
		resultMessage.textContent = "Sorry, Try Again!";
	}
	
	// Create scoreboard
	const resultTable = document.createElement('p');
	resultTable.classList.add("bannerHeading")
	resultTable.textContent = "Score: " + score.player;

	// Create button
	const acceptButton = document.createElement('Button');
	acceptButton.textContent = "Accept";
	acceptButton.addEventListener("click", resetBoard);

	// Build elements up
	resultsBoard.appendChild(resultMessage);
	resultsBoard.appendChild(resultTable);
	resultsBoard.appendChild(acceptButton);
}


/*
 * Create a new board
 */
function createBoard() {
	cards = shuffle(cards);
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
	// Reset Cards
	for(let i=0; i<cards.length; i++){
		const board = document.getElementById("game-board");
		board.removeChild(board.childNodes[0]);
	}

	// Reset Result Board
	const results = document.getElementById("result-board");
	while (results.firstChild) {
	    results.removeChild(results.lastChild);
	}
	results.classList.remove("results");

	// Reset cardsInPlay tracker
	cardsInPlay = [];

	// Reset board
	createBoard();
}

/*
 * shuffle cards
 * https://github.com/Daplie/knuth-shuffle
 */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

createBoard();
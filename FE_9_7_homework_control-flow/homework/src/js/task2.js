
let maxNumber = 5;
let prizeAmount = 0;
let possiblePrize = 10;
let attemptsNumber = 3;
let gameNumber = randomNumber(maxNumber)

console.log(gameNumber);

let userDecision = confirm('Do you want to play a game?');
userDecision ? game() : alert('You did not become a millionaire, but can.')

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}
function game() {
	while(attemptsNumber > 0) { 
        let userNumber = +prompt(`
        Enter a number from 0 to ${maxNumber}
        Attempts left: ${attemptsNumber}
        Total prize: ${prizeAmount}$
        Possible prize on current attempt: ${possiblePrize}$;
        `)
        console.log(gameNumber, userNumber)
        if(userNumber === gameNumber) { 
			alert('Congratulation! Your prize is: ' + Math.floor(possiblePrize));            
			if(confirm('You want to continue?')) {
                prizeAmount = Math.floor(possiblePrize) + prizeAmount;
                maxNumber *= 2; 
                possiblePrize *= 3;
                attemptsNumber = 3;
                gameNumber = randomNumber(maxNumber);
				return game() 
			} else {
				break;
			}
		} else {
            possiblePrize = Math.floor(possiblePrize / 2);
            --attemptsNumber;
        } // end of the if 
	} // end of the while loop
} // end of the function

alert(`Thank you for a game. Your prize is: ${prizeAmount} $ `)






let maxNumber = 5;

let prizeAmount = 0;
let possiblePrize = 10;
debugger
let attemptsNumber = 3;


let gameNumber = randomNumber(maxNumber)
console.log(gameNumber) // потім забрати бо це перевірка

let userDecision = confirm('Do you want to play a game?');
userDecision === true ? game() : alert ('You did not become a millionaire, but can.')
debugger
 

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
			alert('Congratulation!   Your prize is: ' + Math.floor(possiblePrize));            
			if(confirm('You want to continue?')) {
                prizeAmount = Math.floor(possiblePrize) + prizeAmount;
				maxNumber *= 2; 
                attemptsNumber = 3;
                gameNumber = randomNumber(maxNumber);
				return game() 
			} else {
				break;
			}
		} else {
            possiblePrize = Math.floor(possiblePrize / 2);
            attemptsNumber = --attemptsNumber;
        }
		
	}

}






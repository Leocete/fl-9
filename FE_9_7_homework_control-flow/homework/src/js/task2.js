
let maxNumber = 5;
let prizeAmount = 0;
let possiblePrize = 10;

let gameUpdate = {
    moneyMultiplier: 3,
    numberMultiplier: 2,
    attemptsNumber: 3
}

let gameNumber = randomNumber(maxNumber)

let userDecision = confirm('Do you want to play a game?');
userDecision === true ? game() : alert ('You did not become a millionaire, but can.')


console.log(randomNumber) // потім забрати бо це перевірка

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * ++maxNumber);
  }


function game() {

	while(attemptsNumber > 0) { 
        let userNumber = +prompt(`
        Enter a number from 0 to ${maxNumber}
        Attempts left: ${attemptsAmount}
        Total prize: ${prizeAmount}$
        Possible prize on current attempt: Math.floor(${possiblePrize})$;
        `)
        if(userNumber === userNumber) { 
			alert('Congratulation!   Your prize is: ' + Math.floor(possiblePrize));
			possiblePrize /= 2;
			if(confirm('You want to continue?')) {
				maxNumber *= 2; 
				possiblePrize *= 3; 
				return game() 
			} else {
				break;
			}
		}
		attemptsNumber--;
	}
	alert('Thank you for a game. Your prize is: ' + prizeAmount);
	if(!prizeAmount) {
		alert('You did not become a millionaire, but can.');
		if(confirm('Do you want to play again?')) {
		return game();
	} else {
		alert('You did not become a millionaire, but can.');
	}
	}
}






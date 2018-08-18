
let maxNumber = 5;
let prizeAmount = 0;
let possiblePrize = 10;
let gameNumber = randomNumber(maxNumber);

let userDecision = confirm('Do you want to play a game?');
userDecision ? game() : alert('You did not become a millionaire, but can.')

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}
function game() {
    for(let attemptsNumber = 3, currentPrize = possiblePrize; 
            attemptsNumber > 0; 
            attemptsNumber--, currentPrize = Math.floor(currentPrize / 2)) {
        let userNumber = +prompt(`
                Enter a number from 0 to ${maxNumber}
                Attempts left: ${attemptsNumber}
                Total prize: ${prizeAmount}$
                Possible prize on current attempt: ${currentPrize}$;
                `)
                console.log(gameNumber, userNumber)
                if(userNumber === gameNumber) {                             
                    if(confirm('Congratulation! Your prize is:'+ Math.floor(currentPrize) + 'You want to continue?')) {
                        prizeAmount += currentPrize;
                        maxNumber *= 2; 
                        possiblePrize *= 3;
                        attemptsNumber = 3;
                        gameNumber = randomNumber(maxNumber);
                        return game();
                    } else {
                        break;
                    } 
                } // end of main if clause
    } // end of the for loop
} // end of the function







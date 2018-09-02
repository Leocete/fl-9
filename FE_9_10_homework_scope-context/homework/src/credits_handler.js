const parameters = {
    tax: 0.05,
    cardsLimit: 3
}

function userCard(number) {
    const cardInformation = { 
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: number 
    }

    return console.log(cardInformation)

    // getCardOptions - return iformation about card
    function getCardOptions() {
      return cardInformation;
    }


    // putCredits
    function putCredits(amount) {
        cardInformation.balance = cardInformation.balance + amount;
        updateHistoryLogs('Received credits', amount)
    }

    // takeCredits
    function takeCredits(amount) {
            cardInformation.balance = cardInformation.balance - amount + amount * parameters.tax;
            updateHistoryLogs('Withdrawal of credits', amount);
    }

    // setTransactionLimit
    function setTransactionLimit(amount) {
        cardInformation.transactionLimit = amount;
        updateHistoryLogs('Transaction limit change', amount);
    }

    // transferCredits
    function transferCredits(amount, card) {
        let amountwithTaxes = amount + amount * parameters.tax;
        if (amountwithTaxes > cardInformation.balance) {
            console.log('Not enough money')
        } else if (amountwithTaxes > cardInformation.transactionLimit) {
            console.log('Amount exceed the Transaction limit')
        } else {
            this.takeCredits(amount);
            card.putCredits(amount);
        }
    }

    // Logs about past transactions
    function updateHistoryLogs(operation, credits) {
        let input = {
            operation,
            credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        cardInformation.historyLogs.push(input);
    }


}

// addCard/getcardbyKey
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (this.cards.length < parameters.cardsLimit) {
            console.log('You\'ve got too many cards')
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(number) {
        return this.cards[number - 1];
    }
}


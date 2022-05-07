function getUserChoice() {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock') {
        return ( userInput )
    } else if (userInput === 'paper') {
        return ( userInput )
    } else if (userInput === 'scissors') {
        return ( userInput )
    } else if (userInput === 'bomb') {
        return( userInput )  
    } else {
        return ( console.log('Invalid Selection') )
    }
};

function getComputerChoice () {
    let compInput = Math.floor(Math.random() * 3);

    if (compInput === 0) {
        return('rock')
    } else if (compInput === 1) {
        return('paper')
    } else if (compInput === 2) {
        return('scissors')
    }
};

function determineWinner (userChoice, compChoice) {
    if (userChoice === compChoice) {
        return('Tie')
    }
    if (userChoice === 'rock') {
        if (compChoice === 'paper') {
            return('AI wins')
        } else {
            return('You win')
        }
    }
    if (userChoice === 'paper') {
        if (compChoice === 'scissors') {
            return('AI wins')
        } else {
            return('You win')
        }
    }
    if (userChoice === 'scissors') {
        if (compChoice === 'rock') {
            return('AI wins')
        } else {
            return('You win')
        }
    }
    if (userChoice === 'bomb') {
        return('You win')
    }
}

function playGame () {
    var userChoice = getUserChoice(userInput);
    console.log(userChoice)

    var compChoice = getComputerChoice();
    console.log(compChoice)

    console.log(determineWinner(userChoice, compChoice))
};
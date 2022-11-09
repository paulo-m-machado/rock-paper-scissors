function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    choice = choice == false ? choice = 'rock' : choice == 1 ? choice = 'paper' :
    choice = 'scissors';

    return choice;
}

function playerChoice() {
    let choice = prompt('type rock, paper or scissors', 'rock');
    choice = choice.toLowerCase();

    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt('type a valid option: rock, paper or scissors', 'rock');
    }

    return choice;
}

function oneRound() {
    let player = playerChoice();
    let computer = getComputerChoice();

    if (player === computer) {
        console.log('DRAW');
    }
    else if (player === 'rock') {
        computer === 'paper' ? console.log('you lose') : console.log('you win');
    }
    else if (player === 'paper') {
        computer === 'scissors' ? console.log('you lose') : console.log('you win');
    }
    else {
        computer === 'rock' ? console.log('you lose') : console.log('you win');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        oneRound();
    }
}

game();
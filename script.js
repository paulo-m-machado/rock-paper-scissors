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

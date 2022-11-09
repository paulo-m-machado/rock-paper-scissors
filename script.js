function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    choice = choice == false ? choice = 'rock' : choice == 1 ? choice = 'paper' :
    choice = 'scissors';

    return choice;
}

function playerChoice(choice) {
    let possibleChoice = ['rock', 'paper', 'scissors'];
    choice = possibleChoice[choice];

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

const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

rock.addEventListener('click', () => {playerChoice(0)} );
paper.addEventListener('click', () => {playerChoice(1)} );
scissors.addEventListener('click', () => {playerChoice(2)} );
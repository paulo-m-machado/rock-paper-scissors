let pScore = 0;
let cScore = 0;

let results = document.querySelector('#results');

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

function oneRound(player) {
    let computer = getComputerChoice();
    let li = document.createElement('li');

    function result(re) {
        li.textContent = re;
        results.appendChild(li);
    }

    if (player === computer) {
        result('draw');
    }
    else if (player === 'rock') {
        computer === 'paper' ? result('you lose') : result('you win');
    }
    else if (player === 'paper') {
        computer === 'scissors' ? result('you lose') : result('you win');
    }
    else {
        computer === 'rock' ? result('you lose') : result('you win');
    }
}

const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

rock.addEventListener('click', () => {oneRound(playerChoice(0))} );
paper.addEventListener('click', () => {oneRound(playerChoice(1))} );
scissors.addEventListener('click', () => {oneRound(playerChoice(2))} );
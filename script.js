let pScore = 0;
let cScore = 0;

let results = document.querySelector('#results');
let div = document.querySelector('div');

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
        let possibleResults = ['draw', 'you win', 'you lose'];
        li.textContent = possibleResults[re];
        results.appendChild(li);

        re === 1 ? pScore++ : re === 2 ? cScore++ : null;
    }

    if (player === computer) {
        result(0);
    }
    else if (player === 'rock') {
        computer === 'paper' ? result(2) : result(1);
    }
    else if (player === 'paper') {
        computer === 'scissors' ? result(2) : result(1);
    }
    else {
        computer === 'rock' ? result(2) : result(1);
    }

    let anoun = document.createElement('h1');

    if (pScore > 4) {
        anoun.textContent = 'You won the BO5';
        div.appendChild(anoun);
        pScore = 0;
        cScore = 0;
    }
    else if (cScore > 4) {
        anoun.textContent = 'You lost the BO5';
        div.appendChild(anoun);
        pScore = 0;
        cScore = 0;
    }
    
}

const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

rock.addEventListener('click', () => {oneRound(playerChoice(0))} );
paper.addEventListener('click', () => {oneRound(playerChoice(1))} );
scissors.addEventListener('click', () => {oneRound(playerChoice(2))} );
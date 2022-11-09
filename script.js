function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    choice = choice == false ? choice = 'rock' : choice == 1 ? choice = 'paper' :
    choice = 'scissors';

    return choice;
}

console.log(getComputerChoice());
console.log('hi');

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

 function checkWinner(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
       return "Tie";
    }
    else if ((humanSelection == 'rock' && computerSelection == 'scissors') ||
               (humanSelection == 'paper' && computerSelection == 'rock') ||
               (humanSelection == 'scissors' && computerSelection == 'paper')) {
        return "Player";
    } 
    else {
        return "Computer"
    }
}

function playRound(humanSelection, computerSelection){
    const result = checkWinner(humanSelection, computerSelection)
    if (result == "Tie"){
        return "It's a Tie!"
    }
    else if (result == "Player"){
        return `You Win! ${humanSelection} beats ${computerSelection}`
    } 
    else {
        return `Computer Won! ${computerSelection} beats ${humanSelection}`
    }
}

function getHumanChoice(){
   let validatedInput = false;
   while(validatedInput == false){
    const choice = prompt("Rock Paper Scissors");
    if (choice == null){
        continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower;
    }
   }
 }

function game(){
    for(let i = 0; i < 5; i++){
        const humanselection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanselection, computerSelection));

    }
}

game()
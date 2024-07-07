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
               (humanSelection == 'scissors' && computerSelection == 'paper'))
               {
        return "Player";
    } 
    else {
        return "Computer";
    }
}

function playRound(humanSelection, computerSelection){
    const result = checkWinner(humanSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie!"
    }
    else if (result == "Player"){
        return `You Win! ${humanSelection} beats ${computerSelection}`
    } 
    else {
        return `You Lose! ${computerSelection} beats ${humanSelection}`
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
    let scorePlayer = 0;
    let scoreComputer = 0; 
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("----------")
        if(checkWinner(humanSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(humanSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }

    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner");
    }
    else if (scorePlayer < scoreComputer){
        console.log("Computer was the winner");
    }
    else {
        console.log("game was a Tie");
    }
}

game()
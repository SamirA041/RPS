
function getComputerChoice(){
   let randomNumber = (Math.floor(Math.random() * 100) +1);
   choice = ''
   if (randomNumber <= 33){
    choice = 'Rock'
   }
   else if (randomNumber > 33 && randomNumber <= 66){
    choice = 'Paper'
   }
   else{
    choice = 'Scissor'
   }
   return choice
}
console.log(getComputerChoice());

function getHumanChoice(){
   let humanChoice = prompt('Pick Rock, Paper or Scissors')
   return humanChoice
}
console.log(getHumanChoice())
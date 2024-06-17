
function getComputerChoice(){
   let randomNumber = (Math.floor(Math.random() * 100) +1);
   choice = ''
   if (randomNumber <= 33){
    choice = 'rock'
   }
   else if (randomNumber > 33 && randomNumber <= 66){
    choice = 'paper'
   }
   else{
    choice = 'scissor'
   }
   return choice
}
console.log(getComputerChoice())
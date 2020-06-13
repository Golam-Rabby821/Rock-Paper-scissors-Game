let userScore=0;
let computerScore=0;
let user_total=0;
let comp_total=0;
const show_div=document.getElementById("main");
const rock_div=document.getElementById("Rock");
const paper_div=document.getElementById("Paper");
const scissors_div=document.getElementById("Scissors");
const result_div=document.querySelector(".winning-message");
const user_score=document.getElementById("user-score");
const comp_score=document.getElementById("computer-score");

function winMessage() {
  userScore=0;
  computerScore=0;
  user_score.innerHTML=userScore;
  comp_score.innerHTML=computerScore;
  result_div.innerHTML="Rock beats Scissors. You win!! " 
  alert("🎉 CONGRATULATIONS 🎉"+"\n\n"+"You have won the match 👏");
  
}

function loseMessage() {
  userScore = 0;
  computerScore = 0;
  user_score.innerHTML = userScore;
  comp_score.innerHTML = computerScore;
  result_div.innerHTML="Rock beats Scissors. You win!! " 
  alert("Opps, buddy. You have lost the match 💔 " + "\n\n" + "Better luck next time. 🤞");

}


function win(userChoice,computerChoice) {
  
  const smallUser="user".fontsize(3).sub();
  const smallComp="comp".fontsize(3).sub();
  const slash_div=document.getElementById(userChoice);
   userScore++;
   user_total=userScore;
  user_score.innerHTML=userScore;
  result_div.innerHTML=`${userChoice}${smallUser} beats  ${computerChoice}${smallComp}. You win 🔥`;
  slash_div.classList.add("green-glow");
  setTimeout(function(){slash_div.classList.remove("green-glow");},300);
  if(user_total==5)
  winMessage();
}

function lose(userChoice, computerChoice) {
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const slash_div=document.getElementById(userChoice);

  computerScore++;
  comp_total=computerScore;
  comp_score.innerHTML=computerScore;
  result_div.innerHTML=`${userChoice}${smallUser} loses to  ${computerChoice}${smallComp}. You lost 🙈 `;
    slash_div.classList.add("red-glow");
    setTimeout(function() { slash_div.classList.remove("red-glow"); }, 300);
  if(comp_total==5)
  loseMessage();
}

function draw(userChoice, computerChoice) {
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const slash_div=document.getElementById(userChoice);
  result_div.innerHTML=`${userChoice}${smallUser} eqauls  ${computerChoice}${smallComp}. It's a draw... 👻 `;
    slash_div.classList.add("gray-glow");
    setTimeout(function() { slash_div.classList.remove("gray-glow"); }, 300);
}


function getComputerChoice() {
  const options=['Rock','Paper','Scissors'];
  const index=Math.floor(Math.random()* 3);
  return options[index];
}

function game(userChoice){
  const computerChoice=getComputerChoice();
  switch(userChoice + computerChoice){
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      win(userChoice,computerChoice);
      break;
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      lose(userChoice,computerChoice);
    break;
    default:
      draw(userChoice,computerChoice);
    break;
  }
  
}

function main(){
  rock_div.addEventListener('click',
  function(){
    game("Rock");
  })
  paper_div.addEventListener('click',
    function() {
    game("Paper");
    })
  scissors_div.addEventListener('click',
      function() {
    game("Scissors");
      })
}
main();






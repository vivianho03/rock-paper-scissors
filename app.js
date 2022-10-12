const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = documenet.querySelector(".result > p");
const rock_div = document.getElementById("fire");
const paper_div = document.getElementById("water");
const scissors_div = document.getElementById("air");

function convertToWord(letter){
  if (letter === "fire") return "Fire";
  if (letter === "water") return "Water";
  return "Air"
}

function getCompChoice() {
  const choices = ["fire", "water", "air"];
  console.log(Math.floor(math.random() *3));
  return choices[randomNumber];
}

function win(userChoice, compChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span = compScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {document.getElementById(userChoice).clssList.remove("green-glow") }, 1000);
}

function lose(userChoice, compChoice){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span = compScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(compChoice)}. You lost...`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function(){document.getElementById(userChoice).clssList.remove("red-glow") }, 1000);
}

function draw(userChoice, compChoice){
  
  result_p.innerHTML = `${convertToWord(userChoice)} tied with ${convertToWord(compChoice)}. You ended in a Draw!`;
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(function(){document.getElementById(userChoice).clssList.remove("grey-glow") }, 1000);
}
function game(userChoice) {
  const computerChoice = getCompChoice;
  switch (userChoice + compChoice){
    case "firewater":
    case "waterfire":
    case "airwater":
      win(userChoice, compChoice);
      break;
    case "firewater":
    case "waterair":
    case "airfire":
      lose(userChoice, compChoice);
      break;
   case "firefire":
   case "waterwater":
   case "airair":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {

    rock_div.addEventListener('click', function(){
      game("fire");
    })
    paper_div.addEventListener('click', function(){
      game("water");
    })
    scissors_div.addEventListener('click', function(){
      game("air");
    })

}

main();
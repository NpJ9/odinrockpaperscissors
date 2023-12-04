const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
let playeresult = document.getElementById("playeresult");
let computerresult = document.getElementById("computerresult");
let tiescounter = document.getElementById("tiescounter");
let computerMove = document.getElementById("computerchoice");
let playerMove = document.getElementById("playerchoice");
let resultsContainer = document.getElementById("resultscontainer");
let playerWins = 0;
let computerWins = 0;
let tieWins = 0;
let computerChoice = "";
let playerChoice = "";




rock.addEventListener("click", event => {
      resultsContainer.style.boxShadow = "0px 0px  0px rgb(14, 182, 37)";
      resultsContainer.style.transition ="all 0.5s ease";
      resultsContainer.style.transform = "scale(1.0)";
      computerSelection()
      playerChoice ="Rock";
      playerMove.innerHTML = playerChoice;
      computerMove.innerHTML = computerChoice;
      computerresult.innerText = computerWins;
      whoWon();
      playeresult.innerText = playerWins;
      computerresult.innerText = computerWins;
      tiescounter.innerText = tieWins;
      winCounter();
});



paper.addEventListener("click", event => {
      resultsContainer.style.boxShadow = "0px 0px  0px rgb(14, 182, 37)";
      resultsContainer.style.transition ="all 0.5s ease";
      resultsContainer.style.transform = "scale(1.0)";
      computerSelection()
      playerChoice ="Paper";
      playerMove.innerHTML = playerChoice;
      computerMove.innerHTML = computerChoice;
      whoWon();
      playeresult.innerText = playerWins;
      computerresult.innerText = computerWins;
      tiescounter.innerText = tieWins;
      winCounter();
});



scissors.addEventListener("click", event => {
      resultsContainer.style.boxShadow = "0px 0px  0px rgb(14, 182, 37)";
      resultsContainer.style.transition ="all 0.5s ease";
      resultsContainer.style.transform = "scale(1.0)";
    resultsContainer.style.boxShadow = "0px 0px  0px rgb(14, 182, 37)";
      computerSelection()
      playerChoice ="Scissors";
      playerMove.innerHTML = playerChoice;
      computerMove.innerHTML = computerChoice;
      whoWon();
      playeresult.innerText = playerWins;
      computerresult.innerText = computerWins;
      tiescounter.innerText = tieWins;
      winCounter();
});


function computerSelection() {
  const computerRandom = Math.floor(Math.random() * 3);
  console.log(computerRandom)
    if (computerRandom === 0) {
          computerMove.innerText = computerChoice
              computerChoice = "Rock"
    } else if (computerRandom === 1) {
          computerMove.innerText = computerChoice
              computerChoice ="Paper"
    } else if (computerRandom === 2) {
      computerMove.innerText = computerChoice
              computerChoice ="Scissors"
    }     
  };


  function whoWon(){
      // Rock
      if (playerChoice === "Rock" && computerChoice === "Rock") {
                tieWins = tieWins + 1;
      } else if (playerChoice === "Rock" && computerChoice === "Paper") {
                computerWins = computerWins + 1;
      } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
               playerWins = playerWins +  1;
        

      // Paper
      } else if (playerChoice === "Paper" && computerChoice === "Rock") {
                playerWins = playerWins + 1;
      } else if (playerChoice === "Paper" && computerChoice === "Paper") {
            tieWins = tieWins + 1;
      } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
                computerWins = computerWins +1;


      // Scissors
      } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
                computerWins = computerWins +1;
      } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
                   playerWins = playerWins + 1;
      } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
              tieWins = tieWins + 1;
      }
    };
    

    function winCounter(){
    if (playerWins === 5) {
          playeresult.innerText = "5! You won fella!";
          playerWins = 0;
          computerWins = 0;
          tieWins = 0;
          resultsContainer.style.transition ="all 0.5s ease";
          resultsContainer.style.boxShadow = "0px 0px 50px rgb(14, 182, 37)";
          resultsContainer.style.transform = "scale(1.1)";
        
    } else if (computerWins === 5){
          computerresult.innerText = "5! Computer wins you suck!";
          playerWins = 0;
          computerWins = 0;
          tieWins = 0;
          resultsContainer.style.transition ="all 0.5s ease";
          resultsContainer.style.boxShadow = "0px 0px 50px rgb(255, 0, 0)";
          resultsContainer.style.transform = "scale(1.1)";
        }
    };




    function endGame() {
      console.clear();
      playerWins = 0;
      computerWins = 0;
      tieWins = 0;
      playeresult.innerText = playerWins;
      computerresult.innerText = computerWins;
      tiescounter.innerText =tieWins;
      computerMove.innerText = "";
      playerMove.innerText = "";
      resultsContainer.style.boxShadow = "0px 0px  0px rgb(14, 182, 37)";
      resultsContainer.style.transition ="all 0.5s ease";
      resultsContainer.style.transform = "scale(1.0)";
    }



function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    
    
    if (choice === 0)
        {
            choice = 'rock';
        }
        else if (choice === 1)
            {
                choice = 'paper';
            }
            else
            {
                choice = 'scissors';
            }
    let computerChoice = choice;
    return computerChoice;
};

// console.log(getComputerChoice())


// function getHumanChoice()
// {
//     selection = prompt("Rock, Paper, or Scissors?");
//     selectionLowerCase = selection.toLowerCase();
//     // console.log(selectionLowerCase);
    

//     while(selectionLowerCase !== 'rock' && selectionLowerCase !== 'paper' && selectionLowerCase !== 'scissors'){
//         console.log("That is not a valid choice. Please make sure you typed it in correctly.")
//         selection = prompt("Rock, Paper, or Scissors?");
//         selectionLowerCase = selection.toLowerCase();
//     }

//     let humanChoice = selectionLowerCase;


//     return humanChoice;

// }





// playRound(humanSelection, computerSelection);

function playGame()
{   const scoreContainer = document.querySelector(".score");
    const userScoreID = document.querySelector("#user-score");
    const CompScoreID = document.querySelector("#computer-score");

    

    const humanScoreDisplay = document.createElement("div");
    const compScoreDisplay = document.createElement("div");
    let gamesPlayed =0
    let humanScore = 0;
    let computerScore = 0;
    
    humanScoreDisplay.textContent = humanScore;
    compScoreDisplay.textContent = computerScore;
    userScoreID.appendChild(humanScoreDisplay);
    CompScoreID.appendChild(compScoreDisplay);


    const userSymbol = document.querySelector("#user-symbol");
    // console.log(userSymbol.innerHTML);
    const computerSymbol = document.querySelector("#computer-symbol");
    function playRound(humanChoice, computerChoice)
    {
        if (humanChoice === 'rock')
            {
                userSymbol.innerHTML=`&#9994`;

                if (computerChoice === 'paper'){
                    computerSymbol.innerHTML = "&#9995";

                    console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    humanScoreDisplay.textContent = humanScore;
                    compScoreDisplay.textContent = computerScore;
                    isGameOver();



                    
                }
                else if (computerChoice === 'rock')
                    {
                        computerSymbol.innerHTML = "&#9994";
                        console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                    }
                    else {
                        computerSymbol.innerHTML = "&#9996"
                        console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                        humanScore++;
                        humanScoreDisplay.textContent = humanScore;
                        compScoreDisplay.textContent = computerScore;
                        isGameOver();

                    }
            }
        else if (humanChoice == 'paper')
            {
                userSymbol.innerHTML = "&#9995";

                if (computerChoice === 'paper'){

                    computerSymbol.innerHTML = "&#9995";
                    console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                    
                    
                    
                }
                else if (computerChoice === 'rock')
                    {
                        computerSymbol.innerHTML = "&#9994";
                        console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                        humanScore++;
                        humanScoreDisplay.textContent = humanScore;
                        compScoreDisplay.textContent = computerScore;
                        isGameOver();

                        
                    }
                    else {
                        computerChoice.innerHTML = "&#9996"
                        console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                        computerScore++;
                        humanScoreDisplay.textContent = humanScore;
                        compScoreDisplay.textContent = computerScore;
                        isGameOver();

                    } 

            }
            else
            {
                userSymbol.innerHTML = "&#9996"
                if (computerChoice === 'paper'){
                    computerSymbol.innerHTML = "&#9995";
                    console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                        humanScore++;
                        humanScoreDisplay.textContent = humanScore;
                        compScoreDisplay.textContent = computerScore;
                        isGameOver();

                }
                else if (computerChoice === 'rock')
                    {
                        computerSymbol.innerHTML = "&#9994";
                        console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                        computerScore++;
                        humanScoreDisplay.textContent = humanScore;
                        compScoreDisplay.textContent = computerScore;
                        isGameOver();
                    }
                    else {
                        computerSymbol.innerHTML = "&#9996";
                        console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                        
                    } 
            }
        
    }



    const buttonSelection = document.querySelector(".choice-buttons");

    buttonSelection.addEventListener('click', (event)=>
    {

        let target = event.target;

        switch(target.id)
        {
            case 'rock':
                playRound('rock', getComputerChoice());
                break;
            case 'paper':
                playRound('paper', getComputerChoice());
                break;
            case 'scissors':
                playRound('scissors', getComputerChoice());
                break;
        }
    });


    function isGameOver()
    {
        if (humanScore == 5){
            // console.log("entering if")
            const playerWins = document.createElement("div");
            playerWins.classList.add("highlight");
            playerWins.textContent = "PLAYER WINS!";
            userScoreID.append(playerWins);
            userSymbol.innerHTML = "&#128514";
            computerSymbol.innerHTML = "&#128557";
            return;
        }
        else if (computerScore == 5)
            {
                // console.log("entering if")
    
                const playerLoses = document.createElement("div");
                playerLoses.classList.add("highlight");
                playerLoses.textContent = "Player Loses!";
                CompScoreID.append(playerLoses);
                computerSymbol.innerHTML = "&#128514";
                userSymbol.innerHTML = "&#128557";
                return;
                
            };
    };

    // while(gamesPlayed < 5)
    //     {
    //         const humanSelection = getHumanChoice();
    //         const computerSelection = getComputerChoice();

    //         playRound(humanSelection, computerSelection)
    //         console.log(`Player Score: ${humanScore}   Computer Score: ${computerScore}`);
    //         gamesPlayed++;

    //     }
    

    

}

playGame();


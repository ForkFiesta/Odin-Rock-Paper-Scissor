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


function getHumanChoice()
{
    selection = prompt("Rock, Paper, or Scissors?");
    selectionLowerCase = selection.toLowerCase();
    // console.log(selectionLowerCase);
    

    while(selectionLowerCase !== 'rock' && selectionLowerCase !== 'paper' && selectionLowerCase !== 'scissors'){
        console.log("That is not a valid choice. Please make sure you typed it in correctly.")
        selection = prompt("Rock, Paper, or Scissors?");
        selectionLowerCase = selection.toLowerCase();
    }

    let humanChoice = selectionLowerCase;


    return humanChoice;

}



function playRound(humanChoice, computerChoice)
{
    if (humanChoice === 'rock')
        {
            if (computerChoice === 'paper'){
                console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                computerScore++;
                
            }
            else if (computerChoice === 'rock')
                {
                    console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                }
                else {
                    console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                }
        }
    else if (humanChoice == 'paper')
        {
            if (computerChoice === 'paper'){
                console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                
                
            }
            else if (computerChoice === 'rock')
                {
                    console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    
                }
                else {
                    console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                } 

        }
        else
        {
            if (computerChoice === 'paper'){
                console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
            }
            else if (computerChoice === 'rock')
                {
                    console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                }
                else {
                    console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                    
                } 
        }
    
}



// playRound(humanSelection, computerSelection);

function playGame()
{   console.log("Welcome to Rock Paper Scissors. You will play 5 rounds against the computer.")
    let gamesPlayed =0
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice)
    {
        if (humanChoice === 'rock')
            {
                if (computerChoice === 'paper'){
                    console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    
                }
                else if (computerChoice === 'rock')
                    {
                        console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                    }
                    else {
                        console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                        humanScore++;
                    }
            }
        else if (humanChoice == 'paper')
            {
                if (computerChoice === 'paper'){
                    console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                    
                    
                }
                else if (computerChoice === 'rock')
                    {
                        console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                        humanScore++;
                        
                    }
                    else {
                        console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                        computerScore++;
                    } 

            }
            else
            {
                if (computerChoice === 'paper'){
                    console.log(`Player wins! ${humanChoice} beats ${computerChoice}`);
                        humanScore++;
                }
                else if (computerChoice === 'rock')
                    {
                        console.log("Player Loses." + ` ${computerChoice} beats ${humanChoice}`);
                        computerScore++;
                    }
                    else {
                        console.log(`Tie! Player chose ${humanChoice} and Computer chose ${computerChoice}`);
                        
                    } 
            }
        
    }
    while(gamesPlayed < 5)
        {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection)
            console.log(`Player Score: ${humanScore}   Computer Score: ${computerScore}`);
            gamesPlayed++;

        }
    
    if (humanScore > computerScore){
        console.log("You Win!!!!!!");
    }
    else if (humanScore === computerScore)
        {
            console.log("You tie with computer");
        }
        else{
            console.log("You lose!!")
        }

}

playGame();


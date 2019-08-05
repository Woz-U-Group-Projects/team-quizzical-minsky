//sets the userscore to an initial value of 0
let userScore = 0;
//sets the computerscore to an initial value of 0
let computerScore = 0;
//pulls the sources and sets them equal to new constants that will be used later in the code
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.getElementById('reset-tag');

//genereates a reandom number from 0 - 3
function getComputerChoice() {
    //sets the three choices the computer can have
    const choices = ['r', 'p', 's'];
    //random number generater that generates a number less than 3 and rounds down
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

//Converts the letters to their coresponding words
function convertWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}
//resets the scores back to zero
function resetScores() {
    userScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore = 0;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = "The scores have been reset. Play Again!";

}

//When the user wins.
function win(userChoice, computerChoice) {
    //increments the userscore up
    userScore++;
    //sets the value of the scoreboard equal to the userscore
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //changes the text on screen to represent the results of the current game
    results_p.innerHTML = `Your ${convertWord(userChoice)} beats Comps ${convertWord(computerChoice)}. You win!`;
    //adds a green efect to the button selected by the user when they win
    document.getElementById(userChoice).classList.add("green-glow");
    //limits the time the effect is active
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 500);
}

//when the user loses
function lose(userChoice, computerChoice) {
    //increments the computerscore up
    computerScore++;
    userScore_span.innerHTML = userScore;
    //sets the value of the scoreboard equal to the userscore
    computerScore_span.innerHTML = computerScore;
    //changes the text on screen to represent the results of the current game
    results_p.innerHTML = `Your ${convertWord(userChoice)} lost to Comps ${convertWord(computerChoice)}. You lose...`;
    //adds a red efect to the button selected by the user when they lose
    document.getElementById(userChoice).classList.add("red-glow");
    //limits the time the effect is active
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 500);
}

//when its a draw
function draw(userChoice, computerChoice) {
    //changes the text on screen to represent the results of the current game
    results_p.innerHTML = `Your ${convertWord(userChoice)} equals Comps ${convertWord(computerChoice)}. Its a Draw!`;
    //adds a gray efect to the button selected by the user when they draw
    document.getElementById(userChoice).classList.add("gray-glow");
    //limits the time the effect is active
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 500);
}

//represents all possible win, lose, and draw outcomes
function game(userChoice) {
    //gets the computers choice
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        //winning options
        case "rs":
        case "pr":
        case "sp":
            //compares the userchoice with the userchoice to the winning options
            win(userChoice, computerChoice);
            break;
        //losing options
        case "rp":
        case "ps":
        case "sr":
            //compares the userchoice with the userchoice to the losing options
            lose(userChoice, computerChoice)
            break;
        //draw options
        case "rr":
        case "pp":
        case "ss":
            //compares the userchoice with the userchoice to the draw options
            draw(userChoice, computerChoice);
            break;
    }
}

//registers what option the user chooses
function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));

    reset_div.addEventListener('click', () => resetScores());
}

main();
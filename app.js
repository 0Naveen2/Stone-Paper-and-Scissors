let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "aquamarine";
}

const showWinner = (userWin , userchoice , compChoice)=>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore ;
        // console.log ("You win!");
        msg.innerText = (`You win!, Your ${userchoice} beats ${compChoice}`);
        msg.style.backgroundColor = "green"
    }else{
        // console.log("You lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = (`You lose!, ${compChoice} beats your's ${userchoice}`);
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    //Generate computer choice
    const compChoice =genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userchoice === compChoice){
        // Draw game
        drawGame();
    }else {
        let userWin = true;
        if(userchoice === "stone"){
            // computer have only two option because if computer chose the same option as usechoice tb to wo pele hi draw game bataa deta or ye if condition me nhi aata isliy wo be yshi do oprion me se le sakta hai scissors , paper .
            userWin = compChoice=== "paper"? false :true ;
        }else if (userchoice === "paper"){
            //scissors , rock
            userWin = compChoice === "scissors" ? false : true;
        }else {
            // use to pehle hi stone or paper le cuka hai mtln to bs scissor hi le sakta hai to fir computer ke pass bs yehi do optiokn bachta hai rock , paper .
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin, userchoice, compChoice);
    }

}
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log("choice is clicked", userchoice);
        playGame(userchoice)
    })
})
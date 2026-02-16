//DOM Elements
let startOverlay = document.body.querySelector(".start-overlay")
let nameBar = document.body.querySelector("#user-name");
let playBtn = document.body.querySelector("#play-btn");
let warningMsg = document.body.querySelector(".warning-msg")
let moves = document.body.querySelectorAll(".choice");
let drawScore = document.body.querySelector("#draw-score");
let computerScore = document.body.querySelector("#comp-score");
let userScore = document.body.querySelector("#user-score")

let userName;
let userChoice;
let computerChoice;

playBtn.addEventListener("click", () => {
    if(nameBar.value.trim() === "")
    {
        warningMsg.classList.remove("hide")
    }
    else {
        startOverlay.classList.add("hide")
        userName = nameBar.value;
    }
});

let computerMove = (computerChoice) => {
    let totalMoves = ["rock", "paper", "scissor"];
    computerChoice = totalMoves[Math.floor(Math.random()*3)];
}

let game = () => {
    if(userChoice === computerChoice){

    }
}

moves.forEach((move) => {
    move.addEventListener("click", () => {
        userChoice = move.getAttribute("id");
        computerMove();
        
    })
});


//DOM Elements
let startOverlay = document.body.querySelector(".start-overlay")
let nameBar = document.body.querySelector("#user-name");
let playBtn = document.body.querySelector("#play-btn");
let warningMsg = document.body.querySelector(".warning-msg")
let moves = document.body.querySelectorAll(".choice");
let drawScore = document.body.querySelector("#draw-score");
let computerScore = document.body.querySelector("#comp-score");
let userScore = document.body.querySelector("#user-score");
let userName = document.body.querySelector("#userName");
let resultMsg = document.body.querySelector("#result-msg");
let resultAnnouncement = document.body.querySelector("#result-announcement");
let resultInfo = document.body.querySelector("#result-info");
let endOverlay = document.body.querySelector(".end-overlay");
let playAgainBtn = document.body.querySelector("#play-again-btn");

//In-Game Varibales
let DrawCount = 0;
let userWinCount = 0;
let computerWinCount = 0; 
let userChoice;
let computerChoice;

playBtn.addEventListener("click", () => {
    if(nameBar.value.trim() === "")
    {
        warningMsg.classList.remove("hide")
    }
    else {
        let trimmedName = nameBar.value.trim().slice(0, 8)
        startOverlay.classList.add("hide")
        userName.innerText = trimmedName;
    }
});

const winMsg = () => {
    resultMsg.innerText = "Congratulations!"
    resultAnnouncement.innerText = "You Won!"
    resultInfo.innerText = `Your ${userChoice} beat computer ${computerChoice}`;
    endOverlay.classList.remove("hide");
}

const loseMsg = () => {
    resultMsg.innerText = "Oh No!"
    resultAnnouncement.innerText = "You Lost!"
    resultInfo.innerText = `Your ${userChoice} did not beat computer ${computerChoice}`;
    endOverlay.classList.remove("hide");
}

const drawMsg = () => {
    resultMsg.innerText = "Match draw!"
    resultAnnouncement.innerText = "Draw"
    resultInfo.innerText = `You and Computer both chosed ${userChoice}`;
    endOverlay.classList.remove("hide");
}

let computerScoreUpdate = () => {
    computerWinCount++;
    computerScore.innerText = computerWinCount;
    loseMsg();
}

let userScoreUpdate = () => {
    userWinCount++;
    userScore.innerText = userWinCount;
    winMsg();
}

let computerMove = () => {
    let totalMoves = ["rock", "paper", "scissor"];
    computerChoice = totalMoves[Math.floor(Math.random()*3)];
}

let game = () => {
    if(userChoice === computerChoice){
        DrawCount++;
        drawScore.innerText = DrawCount;
        drawMsg();
    }
    else {
        if(userChoice === "rock")
        {
            if(computerChoice === "scissor")
            {
                userScoreUpdate();
            }
            else {
                computerScoreUpdate();

            }
        }
        else if(userChoice === "paper")
        {
            if(computerChoice === "rock")
            {
                userScoreUpdate();
            }
            else {
                computerScoreUpdate();
            }
        }
        else {
            if(computerChoice === "rock")
            {
                computerScoreUpdate();
            }
            else {
                userScoreUpdate();
            }
        }
    }
}

moves.forEach((move) => {
    move.addEventListener("click", () => {
        userChoice = move.getAttribute("id");
        computerMove();
        game();
        console.log(`user = ${userChoice} ------- comp = ${computerChoice}`);
    })
});



playAgainBtn.addEventListener("click", () => {
    endOverlay.classList.add("hide");
});

let score = 0;
let time = 30;
let gameRunning = false;

const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function startGame() {
    score = 0;
    time = 30;
    gameRunning = true;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;

    target.style.display = "block";

    moveTarget();

    const timer = setInterval(() => {
        time--;
        timeDisplay.textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function moveTarget() {
    if (!gameRunning) return;

    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

target.addEventListener("click", () => {
    if (!gameRunning) return;

    score++;
    scoreDisplay.textContent = score;

    moveTarget();
});

function endGame() {
    gameRunning = false;
    target.style.display = "none";
    alert("Game Over! Your score: " + score);
}
const clickSound = new Audio("click.mp3");
clickSound.play();

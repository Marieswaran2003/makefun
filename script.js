let clickCount = 0;
let gameActive = false;
let timer;

document.getElementById('gameButton').addEventListener('click', () => {
    if (gameActive) {
        clickCount++;
        document.getElementById('clicks').textContent = clickCount;
    }
});

document.getElementById('startButton').addEventListener('click', () => {
    if (!gameActive) {
        startGame();
    }
});

function startGame() {
    gameActive = true;
    clickCount = 0;
    document.getElementById('clicks').textContent = clickCount;
    document.getElementById('gameButton').disabled = false;
    document.getElementById('startButton').disabled = true;

    let timeLeft = 10;
    document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameActive = false;
    document.getElementById('gameButton').disabled = true;
    document.getElementById('startButton').disabled = false;
    document.getElementById('timer').textContent = 'Time is up!';
    alert(`Game over! You clicked ${clickCount} times.`);
}

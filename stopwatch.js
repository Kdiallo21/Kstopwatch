let startTime, updatedTime, difference, timerInterval;
let paused = true;

const timerDisplay = document.querySelector('.timerDisplay');
const startButton = document.getElementById('startTimer');
const pauseButton = document.getElementById('pauseTimer');
const resetButton = document.getElementById('resetTimer');

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);
    timerDisplay.innerHTML = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(2, '0')}`;
}

startButton.onclick = function() {
    if (paused) {
        paused = false;
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTimer, 10);
    }
};

pauseButton.onclick = function() {
    if (!paused) {
        paused = true;
        clearInterval(timerInterval);
    }
};

resetButton.onclick = function() {
    paused = true;
    clearInterval(timerInterval);
    difference = 0;
    timerDisplay.innerHTML = "00 : 00 : 00 : 00";
};

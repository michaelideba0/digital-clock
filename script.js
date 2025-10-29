// DIGITAL CLOCK
function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// COUNTDOWN TIMER
const startBtn = document.getElementById('start-btn');
const timerDisplay = document.getElementById('timer');

startBtn.addEventListener('click', () => {
  const minutesInput = document.getElementById('minutes');
  let time = parseInt(minutesInput.value) * 60;
  if (isNaN(time) || time <= 0) {
    timerDisplay.textContent = "Enter valid minutes!";
    return;
  }

  minutesInput.value = "";
  startBtn.disabled = true;
  timerDisplay.textContent = formatTime(time);

  const countdown = setInterval(() => {
    time--;
    timerDisplay.textContent = formatTime(time);

    if (time <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "Time’s up!";
      startBtn.disabled = false;
    }
  }, 1000);
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
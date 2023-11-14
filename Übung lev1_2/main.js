let countdownValue = 100;
let countdownInterval;

function startCountdown() {

if (!countdownInterval) {
    countdownInterval = setInterval(function () {
    
    countdownValue--;

    
    document.getElementById('countdown').innerText = countdownValue + "%";

    
    if (countdownValue <= 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    }, 100); 
}
}

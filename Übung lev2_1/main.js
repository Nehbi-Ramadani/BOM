function countdown() {
    let countElement = document.getElementById('count');
    let count = parseInt(countElement.innerText);

    if (count > 0) {
        count--;
        countElement.innerText = count;
    } else {
        
        let messageElement = document.querySelector('.message');
        messageElement.innerHTML = '<p>Die Meldung ist verschwunden!</p>';
        clearInterval(intervalId);
    }
}


let intervalId = setInterval(countdown, 1000);

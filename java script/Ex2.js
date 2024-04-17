document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const countdownDisplay = document.getElementById('countdown');
    let timer; 

    startButton.addEventListener('click', function() {
        clearInterval(timer);

        let segundos = 10; 

        countdownDisplay.textContent = segundos;

        timer = setInterval(() => {
            segundos--; 

            if (segundos >= 0) {
                countdownDisplay.textContent = segundos; 
            } else {
                clearInterval(timer); 
                countdownDisplay.textContent = 'Foguete lançado!'; 
                
            }
        }, 1000); 
    });
});
const btnDice = document.getElementById('dice');

btnDice.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then( response => response.json())
    .then( response => {
        document.querySelector('#adviceNumber').innerHTML = response.slip.id;
        document.querySelector('#adviceText').innerHTML = response.slip.advice;
    });
})

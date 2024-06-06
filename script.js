let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber() {
    tries = tries + 1;
    displayTries.innerHTML = 'Versuche: ' + tries;
    if(numberToGuess == myNumber.value) {
        headline.innerHTML = 'Du hast gewonnen!!! 🥳🎉';
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
    }
    
    if(numberToGuess > myNumber.value) {
        headline.innerHTML = 'Die Zahl ist größer!';
    }

    if(numberToGuess < myNumber.value) {
        headline.innerHTML = 'Die Zahl ist kleiner!';
    }
    myNumber.value = '';
}
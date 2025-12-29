// Number Guessing (Higher / Lower / Correct)

function guessNumber(secret, guess) {
    if (guess == secret) return "Correct!";
    else if (guess > secret) return "Your Guess is Higher!";
    else return "Your Guess is Lower!";
}

let secret = 50;  // you can change this number
let guess = parseInt(prompt("Guess the number: "));
console.log(guessNumber(secret, guess));


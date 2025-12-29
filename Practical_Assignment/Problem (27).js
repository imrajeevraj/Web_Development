// Buzz Number

function isBuzz(num) {
    return num % 7 === 0 || num % 10 === 7;
}

let buzz = parseInt(prompt("Enter a number: "));
console.log("Is Number "+ buzz + " is Buzz: "+ isBuzz(buzz));



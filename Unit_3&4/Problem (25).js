// Same Last Digit (3 numbers)

function lastDigitSame(a, b, c) {
    return (a % 10 === b % 10) && (b % 10 === c % 10);
    
}

let num1 = parseInt(prompt("Enter 1st number: "));
let num2 = parseInt(prompt("Enter 2nd number: "));
let num3 = parseInt(prompt("Enter 3rd number: "));
console.log(lastDigitSame(num1, num2, num3));

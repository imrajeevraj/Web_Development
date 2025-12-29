// Find Closest Value to 100 from Two Numbers

function closestTo100(a, b) {
    return Math.abs(100 - a) < Math.abs(100 - b) ? a : b;
}

let A = parseInt(prompt("Enter first number: "));
let B = parseInt(prompt("Enter second number: "));
console.log("Closest to 100 is =", closestTo100(A, B));

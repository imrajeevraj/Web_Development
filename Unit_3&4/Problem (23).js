// Sum Two Integers (Triple if Equal)

function sumTriple(a, b) {
    return (a == b) ? 3 * (a + b) : (a + b);
}

let nA = parseInt(prompt("Enter first number: "));
let nB = parseInt(prompt("Enter second number: "));
console.log("Result =", sumTriple(nA, nB));

// Factorial using for loop

function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}

let fn = parseInt(prompt("Enter a number: "));
console.log("Factorial =", factorial(fn));

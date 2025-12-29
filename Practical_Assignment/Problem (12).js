// Sign of Product of Three Numbers

function signOfProduct(a, b, c) {
    let product = a * b * c;
    return product > 0 ? "The sign is +" : "The sign is -";
}

let x = parseFloat(prompt("Enter 1st number: "));
let y = parseFloat(prompt("Enter 2nd number: "));
let z = parseFloat(prompt("Enter 3rd number: "));
console.log(signOfProduct(x, y, z));


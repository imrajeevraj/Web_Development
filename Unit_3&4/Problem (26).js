// Neon Number

function isNeon(num) {
    let sq = num * num;
    let sum = 0;
    while (sq > 0) {
        sum += sq % 10;
        sq = Math.floor(sq / 10);
    }
    return sum === num;
}

let neon = parseInt(prompt("Enter a number: "));
console.log("Is Number "+ neon + " is neon: "+ isNeon(neon));

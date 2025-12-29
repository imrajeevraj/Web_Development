// Duck Number

let dk = prompt("Enter a number: ");
function duck(a) {
    return dk.includes("0") && dk[0] !== "0";
}
console.log("Is Number "+ dk + " is Duck number ; " + duck(dk));

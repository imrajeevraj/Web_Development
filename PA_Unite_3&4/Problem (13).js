// Sort Three Numbers

function sortThree(a, b, c) {
    let list = [a, b, c];
    list.sort((p, q) => p - q);
    return list;
}

let s1 = parseFloat(prompt("Enter 1st number: "));
let s2 = parseFloat(prompt("Enter 2nd number: "));
let s3 = parseFloat(prompt("Enter 3rd number: "));
console.log("Sorted Numbers:", sortThree(s1, s2, s3));

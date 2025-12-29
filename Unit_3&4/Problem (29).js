// Palindrome Number

let num = prompt("Enter your number = ");
let reverse = num.split("").reverse().join("");
console.log(num == reverse ? "Palindrome" : "Not Palindrome");
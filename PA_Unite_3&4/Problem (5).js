// Positive, Negative or Zero

let num = parseInt(prompt("Enter a number:"));
let result = num > 0 
  ? "The number is positive." 
  : num < 0 
    ? "The number is negative." 
    : "The number is zero.";

console.log(result);

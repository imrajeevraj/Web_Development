// BMI Calculator

function bmi(weight, height) {
    return weight / (height * height);
}

let weight = parseFloat(prompt("Enter weight (kg): "));
let heightCm = Number(prompt("Enter your height in centimeters: "));
let height = heightCm / 100; 
console.log("Height = " + height+" m");
console.log("Weight = " + weight+ " kg");
console.log("BMI =", bmi(weight, height).toFixed(2));

//Leap Year Check

function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
           ? "Leap Year" : "Not a Leap Year";
}

let year = parseInt(prompt("Enter a year: "));
console.log(year + " is " + isLeapYear(year));

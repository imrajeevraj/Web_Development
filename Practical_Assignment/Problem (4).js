//Day of the Week

function getDay(num) {
    switch(num) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day";
    }
}
let num = parseInt(prompt("Enter a Day between(1 to 7): "));
console.log("Day: " + getDay(num));
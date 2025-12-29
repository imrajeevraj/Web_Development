//Greeting Based on Time

function greet(time) {
    if (time < 12) return "Good Morning";
    else if (time < 18) return "Good Afternoon";
    else return "Good Evening";
}

let time = parseInt(prompt("Enter current hour (0-23):"));
console.log(greet(time));

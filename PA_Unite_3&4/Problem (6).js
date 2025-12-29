//Ticket Price Calculator (Age Based)

function ticketPrice(age) {
    if (age < 12) return 5;
    else if (age < 18) return 10;
    else if (age < 60) return 20;
    else return 15;
}

let age = parseInt(prompt("Enter your age: "));

if (isNaN(age) || age < 0) {
    alert("Please enter a valid age!");
} else {
    let price = ticketPrice(age);
    console.log("Ticket Price: ₹" + price);
}

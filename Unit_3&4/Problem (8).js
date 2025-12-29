//Discount Based on Price

function discount(price) {
    if (price >= 100) return 20;
    else if (price >= 50) return 10;
    else return 0;
}

let price = parseFloat(prompt("Enter purchase price: "));
console.log("Discount: " + discount(price) + "%");

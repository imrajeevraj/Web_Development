// Checking Prime Numbers using a while loop

const num = prompt("Enter a positive integer to check for prime: ");
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    let i = 3;
        
    while (i * i <= n) {
        if (n % i === 0) return false;
        i += 2; 
    }
    return true;
}
console.log (isPrime(num) ? (num + " is a prime number.") : (num + " is not a prime number."));

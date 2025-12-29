// Fibonacci 

let num = prompt("Enter your number = ");
let a1 = 0, a2 = 1;
console.log(a1);
console.log(a2);

for (let i = 3; i <= num; i++){
    let nextnum = a1 + a2;
    console.log(nextnum);
    a1 = a2;
    a2 = nextnum;
}
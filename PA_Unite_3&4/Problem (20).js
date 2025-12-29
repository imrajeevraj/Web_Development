// 3-Digit Armstrong Numbers

for (let num = 100; num <= 999; num++) {
    let sum = 0, temp = num;
    while (temp > 0) {
        let d = temp % 10;
        sum += d*d*d;
        temp = Math.floor(temp / 10);
    }
    if (sum === num) console.log(num);
}

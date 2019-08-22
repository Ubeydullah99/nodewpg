let number = 0;
let sum=0;

do {
    if (number % 2 !== 0)
        sum+=number;
        number++;
} while (number < 1000) {
}
console.log('Result:', number);
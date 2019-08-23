let number = 0;
let sum = [];

for (let number = 0; number < 1000; number++) {
    if (number % 2 !== 0){
        sum += number;
        console.log('Result:', number);
    } 
    sum.push(number);
}

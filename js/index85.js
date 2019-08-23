let number = 1;
let firstNumber = 0;
let secondNumber = 1;

do {
    const sum = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = sum;
    console.log(sum);
    number++;
} while (number <= 11)
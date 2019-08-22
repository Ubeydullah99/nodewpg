let number = 1;
do {
    let sum = 1;
    output = '';
    while (sum <= number) {
        output += '*';
        sum++;
    }
    console.log(output);
    number++;
} while (number < 10)
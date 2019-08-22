let number = 1;
while (number < 10) {
    let sum = 1;
    output = '';
    while (sum <= number) {
        output += '*';
        sum++;
    }
    console.log(output);
    number++;
}
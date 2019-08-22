let number = 11;
while (number >=0) {
    let sum = 0;
    output = '';
    while (sum <= number) {
        output += '*';
        sum++;
    }
    console.log(output);
    number--;
}
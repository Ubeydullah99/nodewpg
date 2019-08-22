let number = 11;
do {
    let sum = 0;
    output = '';
    while (sum <= number) {
        output += '*';
        sum++;
    }
    console.log(output);
    number--;
}while (number >=0)
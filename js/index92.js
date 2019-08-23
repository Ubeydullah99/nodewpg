let number = 10;
for (let i = 0; i <= number; i++) {
    let sum = 1;
    output = '';
    while (sum <= i) {
        output = output +'*';
        sum++;
    }
    console.log(output);
}

let number = 1;
for (let i = 10; i >= number; i--) {
    let sum = 1;
    output = '';
    while (sum <=i) {
        output = output + '*';
        sum++;
    }
    console.log(output);
}
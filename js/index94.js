let number = 11;

for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
        let sumOff = 1;
        output = '';
        while (sumOff <= i) {
            output = output + '*';
            sumOff++;
        }
        console.log(output);
    }
} 
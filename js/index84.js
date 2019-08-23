let number = 1;
let sumOff = 1;

do {
    let sumOff = 2;
    output = '';
    while (sumOff <= number) {
        output += '*';
        sumOff++;
    }
    sumOff += 1;
    console.log(output);
    number++
} while (number <= 7)
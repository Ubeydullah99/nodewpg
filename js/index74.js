let number = 1;
let sumOff=1;

while (number <= 7) {
    let sumOff = 1;
    output = '';
    while (sumOff <= number) {
        output += '**';
        sumOff++;
    }
    sumOff+=1;
    console.log(output);
    number++
}
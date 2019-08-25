function sort(number1, number2, number3, highToLow) {
    const number = [number1, number2, number3];
    for (let i = 0; i < number.length; i++) {
        if (number[i] > number[i + 1]) {
            const High = number[i];
            number[i] = number[i + 1];
            number[i + 1] = High;
        }
    }
    return (highToLow) ? number.reverse().join(',') : number.join(',');
}
console.log(sort(10, 8, 25, true));
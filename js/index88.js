let message = '';
for (let number = 0; number <= 100; number++) {
    message += (number % 2 === 0) ? `even number:${number}` : '';

}
console.log(message);
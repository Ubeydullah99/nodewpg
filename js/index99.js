let even = 0;
for (let index = 0; index < 1000; index++) {
    if (index % 2 === 0) {
        even++
        console.log(index)
    }
    if (even === 20) {
        break;
    }
}
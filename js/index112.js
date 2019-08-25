function showNumber(start, end) {

    if (typeof start === 'number' && typeof end === 'number') {
        if (start > end) {
            for (let i = start; i >= end; i--)
                console.log(i);
        } else if (end > start) {
            for (let i = start; i <= end; i++)
                console.log(i);
        } else if (start === end) {
            console.log(`${start}`);
        }else{
            console.log('Please make sure that you enter numbers')
        }
    }
}
showNumber(0,1000);
showNumber(1000,0);
showNumber(100,100);
showNumber(100,300);
showNumber('i', 300);
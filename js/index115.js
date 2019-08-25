function getLongerText(t1, t2) {
    if (t1.length > t2.length) {
        return t1;
    } else if (t1.length < t2.length) {
        return t2;
    } else {
        return 'The texts have the same length';
    } 
}
console.log(getLongerText('Sameday', 'Delivery was done on everyday'));
console.log(getLongerText('Telling', 'me'));
console.log(getLongerText('CHANGE', 'have'));

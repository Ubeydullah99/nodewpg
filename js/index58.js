const hour = 14;

if (hour >= 5 && hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
} else if (hour >= 18 && hour < 22) {
    console.log('Good evening');
} else if ((hour >= 22 && hour < 24) && (hour >= 1 && hour < 5)) {
    console.log('Good night');
} else {
    console.log('Enter a time between 1 and 24')
}


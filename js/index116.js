function getHexaColor(color) {
    switch (color) {
        case 'white':
            return ('#FFFFFF');
            break;
        case 'black':
            return ('#000000');
            break;
        case 'blue':
            return ('#0b24fb');
            break;
        case 'green':
            return (' #0e7e12');
            break;
        case 'yellow':
            return ('#fffd38');
            break;
        case 'pink':
            return ('#fec1cc');
            break;
        default:
            return ('Error:Please input a known color');

    }
}
console.log(getHexaColor('green'));
console.log(getHexaColor('yellow'));
console.log(getHexaColor('white'));
console.log(getHexaColor('pink'));
console.log(getHexaColor('blue'));
console.log(getHexaColor('black'));
console.log(getHexaColor('purple'));
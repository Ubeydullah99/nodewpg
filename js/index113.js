function getShapePerimeter(base, height) {
    const perimeter = (base === height) ? 4 * base : 2 * (height + base);
    let message = `${perimeter} is the shape perimeter \n`;
    message += (perimeter > 100) ? 'The perimiter is too big' : 'The perimiter is fine'
    return message;
}
console.log(getShapePerimeter(4,25));
console.log(getShapePerimeter(10,25));
console.log(getShapePerimeter(50,10));
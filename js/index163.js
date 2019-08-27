function add() {
    let result = 0;
    for (let i = 0; i <= arguments.length - 1; i++) {
        result = result + arguments[i];
    };
    return result;
};
console.log(add(7, 8, 15, 23, 6));
console.log(add(25, 17, 45, 10, 4, 7, 8, 9, 3, 12))
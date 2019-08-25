function revert(word) {
    let revertword = '';
    for (let i = word.length - 1; 1 >= 0; i--) {
        revertword = revertword + word[i];
    }
    return revertword;
}
console.log(revert('Ubeyd'));
console.log(revert('Hello'));
console.log(revert('Come here'));
console.log(revert('Welcome back'));
console.log(revert('Go home'));

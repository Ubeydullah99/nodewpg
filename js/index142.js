let firstPerson = ['Abdi', 'Hassan', '393 Kennedy', '32'];
let secondPerson = ['Hussen','Hassan','393 Kennedy', '32'];
const person1 = firstPerson.reduce(function (sum, first) {
    return sum + first;
});
const person2 = secondPerson.reduce(function (sum, second) {
    return sum + second;

});
console.log(person1);
console.log(person2);
if (person1 === person2) {
    console.log('They are the same');
} else {
    console.log('They are different');
}
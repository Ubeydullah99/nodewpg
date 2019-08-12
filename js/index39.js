const firstName= 'Ubeyd';
const lastName= 'Abdiweli';
const nameCharacters= firstName.length;
const lastNameCharacters= lastName.length;
const charsDiff= lastNameCharacters-nameCharacters;
const charsLonger= nameCharacters>lastNameCharacters;

console.log(`My first name is ${firstName} and it is ${nameCharacters} characters long`);
console.log(` My last name is ${lastName} and its ${lastNameCharacters} characters long`);
console.log(`The characters difference between my first name and last name is ${charsDiff}`);
console.log( 'My first name is longer than my last name:', charsLonger);
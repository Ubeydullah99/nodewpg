const mutants = ['Professor', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
const mutantsFind = []
mutants.forEach(mutant => {
    if (mutant === 'Iceman' || mutant === 'Logan' || mutant === 'Phoenix');
    mutantsFind.push(mutant);
});
const string = mutantsFind.toString();
console.log(string);
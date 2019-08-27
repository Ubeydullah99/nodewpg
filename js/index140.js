const mutants = ['Professor', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
const filteredMutants = mutants.filter(function (mutant) {
    return ((mutant !== 'Magneto') && (mutant !== 'Iceman') && (mutant !== 'Gambit'));
});
console.log('The mutnats:', mutants);
console.log('The filtered mutants:', filteredMutants);
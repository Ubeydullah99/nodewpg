const mutants = ['Professor', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
mutants.forEach(mutant=>{
    (mutants !=='Magneto')? console.log(mutants):deleteMagneto();
});
function deleteMagneto(){
    mutants.splice(mutants.indexOf('Magneto')-1);
    console.log(mutants);
}

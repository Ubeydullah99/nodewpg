const mutants = ['Professor', 'Cyclops', 'Iceman', 'Angel', 'Magento', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
const addingSymbols = mutants.map(function (addsymbol) {
    if ((addsymbol === 'Professor X')|| (addsymbol === 'Logan') || (addsymbol === 'Phoenix') || (addsymbol === 'Gambit')){
        return `<3 ${addsymbol}`;
    } else {
        return addsymbol;
    }
});
mutants.forEach(function(print,index){
    console.log(`The original mutant item:${print}`);
    console.log(`The mutant item: ${addingSymbols[index]}\n`);
})
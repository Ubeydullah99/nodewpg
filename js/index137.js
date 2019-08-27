const numbers=[];
for (let i=0; i<1000; i++) {
    numbers[i]=i+1;
};
const incrementNo=numbers.map(function(number){
    return number+10;
});
numbers.forEach(function(print,index){
    console.log(`index:${index+1}, original numbers: ${print}, incremented value: ${incrementNo[index]}`);
})
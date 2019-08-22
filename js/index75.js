let number= 1;
let firstNumber=0;
let secondNumber=1;

while(number<=11){
    const sum=firstNumber+secondNumber;
    firstNumber=secondNumber;
    secondNumber=sum;
    console.log(sum);
    number++;
}
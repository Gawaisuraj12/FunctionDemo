/*Write a program to find the sum of 1st 10 numbers of Lucas series i.e. 
2,1,3,4,7,11,18,…. Lucas series is such a series which starting from 2 and 
1, and subsequent numbers are the sum of the previous two numbers. */

let firstNumber=2;
let secondNumber=1;
let sum=0;
let thirdNumber;
sum=firstNumber+secondNumber;   
for(let i=1;i<=8;i++)
{
    thirdNumber=firstNumber+secondNumber;
    //console.log('Third Number is ' , thirdNumber);
    sum=sum+thirdNumber;
    firstNumber=secondNumber;
    secondNumber=thirdNumber;
 }
console.log('Sum of Lucas Series of first 10 numbers are ::',sum)
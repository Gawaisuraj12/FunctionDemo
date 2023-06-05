/*Write a program to input an integer and find its factorial. Factorial of a 
number is the product of all natural numbers till that number. For 
example factorial of 5 is 120 since 1×2×3×4×5=120.*/

let prompt=require('prompt-sync')()
let i,num,fact=1;
num=prompt('Enter the Interger Number ')
for(i=1;i<=num;i++)
{
fact=fact*i;
}
console.log('Factorial of a given Integer Number is ', fact);


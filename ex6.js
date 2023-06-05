/*Write a program to input the Principal, Rate and Time and calculate the 
Simple Interest */

let prompt=require('prompt-sync')()
let p,r,t,si;
p=prompt('Enter the Principle ');
r=prompt('Enter the Rate ');
t=prompt('Enter the time ');
si=(p*r*t)/100
console.log('Simple Interest is ', si);



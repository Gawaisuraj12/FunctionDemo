/*Write a program to find the sum of all 3 digit odd natural numbers, 
which are multiples of 5.*/

let i,s=0;
for(i=101;i<=999;i+=2)
{
    if(i%5==0)
    s=s+i;
    console.log(s)
}
//console.log(s)
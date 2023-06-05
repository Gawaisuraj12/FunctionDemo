/*Write a program to input an integer and check whether it is a prime 
number or no */

let prompt=require('prompt-sync')()
let i,n,count=0;
n=prompt('Enter Number to check whether Prime or Not ')
 
for(i=1;i<=n;i++)
{
if(n%i==0)
count++;
}
if(count==2)
{
        console.log('Prime Number')
}
else
{
    console.log('Not a Prime Number')
}
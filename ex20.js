/*Write a program to print the first 15 numbers of the Pell series. Pell 
series is such a series which starts from 1 and 2 , and subsequent 
numbers is the sum of twice the previous number and the number 
previous to the previous number. Pell series: 1, 2, 5, 12, 29, 70, 169, 408, 
985, 2378, 5741, 1386 */

let x=1,y=0,z;

console.log('First 15 pell number are ')

for(let i=1;i<=15;i++)
{
    z=x+2*y;
    x=y;
    y=z;
    console.log(z)
}



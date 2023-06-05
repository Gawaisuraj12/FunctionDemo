let prompt=require('prompt-sync')()
let taxableIncome;
let incomeTax;
let age=prompt('Enter Age :: ')
let gender=prompt('Enter Gender :: ')
taxableIncome=prompt('Enter taxable income :: ' );
if(age>65 || gender=='famale')
{
    console.log('Wrong Catagory')
}
else if ((age<=65 && gender=='male') && taxableIncome>800000)
{   //taxableIncome=prompt('Enter taxable income :: ' );
    incomeTax=(taxableIncome-800000)*30/100+94000;
    console.log('Income tax to be paid for this FY' , incomeTax);
}

else if (age<=65 && gender=='male' && taxableIncome<=800000 && taxableIncome>500000 )
{
    //taxableIncome=prompt('Enter taxable income :: ' );
    incomeTax=(taxableIncome-500000)*20/100+34000;
    console.log('Income tax to be paid for this FY' , incomeTax);
}
else if(age<=65 && gender=='male' && taxableIncome<=500000 && taxableIncome>160000)
{
    //taxableIncome=prompt('Enter taxable income :: ' );
    incomeTax=(taxableIncome-160000)*10/100;
    console.log('Income tax to be paid for this FY' , incomeTax);
}   
else{

    console.log('Nill')
}
let prompt=require('prompt-sync')()
let name,address,typeOfPurchase;
let purchaseAmount;
let discRate;
let discount,netAmount;
function custdata()
{
    console.log('Name :: ',name)
    console.log('Address :: ',address)
    console.log('Net Amount to be paid  ',netAmount)
    console.log('Thank You .... Visit Again')
}

typeOfPurchase=prompt('Enter the Type of Purchase :: L for Laptop and D for Desktop  :: ')


if(typeOfPurchase=='L')
{
name=prompt('Enter the name : ')
address=prompt('Enter the Address : ')
purchaseAmount=prompt('Enter the Purchase amount : ')

if(purchaseAmount>=100000)
{
discount=(10/100)*purchaseAmount;
netAmount=purchaseAmount-discount
custdata();
}
else if (purchaseAmount<100000 && purchaseAmount>=57001)
{
    discount=(7.5/100)*purchaseAmount;
    netAmount=purchaseAmount-discount;
    custdata();

}
else if (purchaseAmount<57000 && purchaseAmount>=25001)
{

    discount=(5/100)*purchaseAmount;
    netAmount=purchaseAmount-discount;
    custdata();

}
else
{

    discount=(0/100)*purchaseAmount;
    netAmount=purchaseAmount-discount;
    custdata();
}

}


if(typeOfPurchase=='D')
{
name=prompt('Enter the name : ')
address=prompt('Enter the Address : ')
purchaseAmount=prompt('Enter the Purchase amount')

if(purchaseAmount>=100000)
{
discount=(15/100)*purchaseAmount;
netAmount=purchaseAmount-discount
custdata();
}
else if (purchaseAmount<100000 && purchaseAmount>=57001)
{
    discount=(10/100)*purchaseAmount;
    netAmount=purchaseAmount-discount;
    custdata();

}
else if (purchaseAmount<57000 && purchaseAmount>=25001)
{
 
    discount=(7.5/100)*purchaseAmount;
    netAmount=purchaseAmount-discount;
    custdata();

}
else
{

    discount=(5/100)*purchaseAmount;
    netAmount=purchaseAmount-discount;
    custdata();
}

}
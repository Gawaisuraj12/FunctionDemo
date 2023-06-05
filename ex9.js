let prompt=require('prompt-sync')()
let v;
v=prompt('Enter the choice between 1,2,3 = ')

switch(v)
{
    case '1':
        console.log('Good');
        break;

    case '2':
        console.log('Better');
        break;
    case '3':
            console.log('Best');
            break;
    default :
         console.log('Invalid');
    }
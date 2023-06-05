let prompt=require('prompt-sync')()
let marks;
marks=prompt('Enter the Marks in Computer Science ')
if(marks>=90)
{

    console.log('Grade A')

}
else if(marks>=70 && marks<=89)
{

    console.log('Grade B')
}
else if(marks>=50 && marks<=69)
{
    console.log('Grade C')
}
else 
{
    console.log('Grade D')
}
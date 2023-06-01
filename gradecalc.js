let eng=60;
let math=70;
let physics=65;
let chemistry=76;
let bio=67;
let total_marks=eng+math+physics+chemistry+bio;

let percentage=total_marks/5;

if(percentage>90)
{
    console.log("You have a total marks are ", total_marks, " with percentage ", percentage);
    console.log("You are passed with A+ Grade");

}
else if(percentage<=90 && percentage>80 )
{
    console.log("You have a total marks are ", total_marks, " with percentage ", percentage);
    console.log("You are passed with B Grade");

}
else if(percentage<=80 && percentage>60)
{
    console.log("You have a total marks are ", total_marks, " with percentage ", percentage);
    console.log("You are passed with B+ Grade");

}
else if(percentage<=60 && percentage>50)
{
    console.log("You have a total marks are ", total_marks, " with percentage ", percentage);
    console.log("You are passed with B Grade");

}
else if(percentage<=50 && percentage<35)
{
    console.log("You have a total marks are ", total_marks, " with percentage ", percentage);
    console.log("You are passed with C Grade");

}
else{
    console.log("You have a total marks are ", total_marks, " with percentage ", percentage);
    console.log("You are Fail ...!!! ");

}
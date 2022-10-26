/* 2. Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays. */
const prompt=require("prompt-sync")();
let n=5;

let x=0,y=0;
let arr1=[];
let arr2=[];

for(let i=0;i<n;i++)
{
    arr1[i]=prompt("");
    if(arr1[i]=='4')
    x=1;
    arr2[i]=prompt("");
    if(arr2[i]=='4')
    y=1;
}




if(x & y)
console.log(" 4 Present in Both arrays")

else if(x & !y)
console.log(" Only in Arr1");

else if(!x & y)
console.log(" Only in Arr2");

else
console.log(" Not in Both");
/* 1. Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places. */

const prompt=require("prompt-sync")();

let num=prompt("Enter size of the array ");
const arr=[];
let evenSum=0,evenCount=0,oddCount=0,oddSum=0;


for(let i=1;i<=num;i++)
{
  arr[i]=prompt("");
  arr[i]=parseInt(arr[i]);
  if(i%2==1)
  {
    oddSum=(oddSum+arr[i]);
    oddCount=(oddCount+1);
  }
  else
  {
    evenSum+=arr[i];
    evenCount++;
  }
}

function gcd(x,y)
{
  while(x!=y)
  {

   if(x>y)
    x=x-y;
    else
    y=y-x;
  }

  return x;
    
}


console.log(`Differnce = ${oddSum-evenSum}`);

 console.log(`Odd Elements = ${oddCount} `);
 console.log(`Even Elements = ${evenCount} `);
 console.log(`Average = ${(oddSum+evenSum)/(oddCount+evenCount)}`);
 console.log(`Gcd = ${gcd(oddSum,evenSum)}`);

 
 
 
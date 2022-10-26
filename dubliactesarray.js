/* 
    4. Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array
Sample Input:
[ 1, 2, 3, 2, 3, 4, 5 ]
Output:
Duplicate Elements = [ 2, 3 ]
Array without duplicate elements = [ 1, 2, 3, 4, 5 ]

*/


const prompt=require("prompt-sync")();

let num=prompt(" Enter number of elements");
let arr=[];
let dublicate=[];
var set1=new Set();
for(let i=0;i<num;i++)
{
    arr[i]=prompt("");
    if(set1.has(arr[i]))
    {
        dublicate.push(arr[i]);
        arr.pop();
        i--;  num--;
    }
     
     else
        set1.add(arr[i]);
        
        
     
}
  
console.log(" Dublicate values :")
for(let i=0;i<dublicate.length;i++)
console.log(dublicate[i]);

console.log(" Array without duplicate elements =")
   for(let j=0;j<arr.length;j++)
   console.log(arr[j]);

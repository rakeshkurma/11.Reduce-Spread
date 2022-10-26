function thirdLargest(arr, arr_size)
{
/* There should be
at least three elements */
if (arr_size < 3)
{
console.log(" Invalid Input "); return;
}

       let first = arr[0];
for (let i = 1;i < arr_size ; i++)
{
    if (arr[i] > first)
    first=arr[i];
}

console.log(`First Largest Element ${first}`);


let second = 0; 

for (let i = 0;i < arr_size ; i++)
{
    if (arr[i] < first && arr[i] > second)
second=arr[i];
}

console.log(`second Largest Element ${second}`);

let third = 0;
 for (let i = 0;i < arr_size ; i++)
 {
    if (arr[i] > third && arr[i] < second)
   third = arr[i];
 }

console.log("The third Largest " + "element is ", third); 


}



let arr = [12, 13, 1, 10, 34, 16]; 
let n = arr.length;
thirdLargest(arr, n);
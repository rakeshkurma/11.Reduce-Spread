/*  
3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array.
Note: Do not use array.flat();
Sample Input:
[ 1, 2, [ 3, 4, [ 5 ] ] ]
Output:
[ 1, 2, 3, 4, 5 ]
   
*/



let arr1=[ 1,2,[3,4,[7,8] ]];
let item;


const fun = (arr)=>
{
    let result = arr.reduce((acc,item)=>
    {
        if(Array.isArray(item))
        {
            acc=acc.concat(fun(item));
        }
        else
        acc=[...acc,item];
        // acc.push(item);

        return acc;
    },[])

    return result;
}
  
console.log(fun(arr1));




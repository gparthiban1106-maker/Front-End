let arr=[1,2,2,3,4,5,5,5];
console.log(arr);
function printunique(arr)
{
let removed_duplicates=[];
for(let i=0;i<arr.length;i++)
{
    if(removed_duplicates.indexOf(arr[i])==-1)
    {
        removed_duplicates.push(arr[i]);
    }
}
return removed_duplicates;
}
let uvaule=printunique(arr);
console.log(uvaule);



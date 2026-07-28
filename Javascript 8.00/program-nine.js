let a=[1,2,3,4,5];
let b=7;
function findindex(a,b)
{   
    let op=[];
    for(let i=0;i<a.length;i++)
        for( let j=i+1;j<a.length;j++)
    {
        if(a[i]+a[j]==b)
        {
            op.push([i,j]);
        }
    }
return op;
}
let val=findindex(a,b);
console.log(val);

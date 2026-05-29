let a=5;
for (let i=1; i<=a;i++)
{
    let str='1 ';
    console.log(str.repeat(i));
}
for (let i=5; i>=1;i--)
{
    let str="2 ";
    console.log(str.repeat(i));
}


let n=4;
for (let i=1; i<=n;i++)
{   
    let str='*';
    let space=" ";
    console.log(space.repeat(n-i)+str.repeat(i) );
}

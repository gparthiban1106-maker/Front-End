function fact(num)
{
    if(num==0)
    {
        return 1;
    }
    let fact=1; //1, 2, 6, 24, 120
        for ( let i=1;i<=num;i++)
        {
            fact = fact*i;
        }
        return fact;
}     
let op=fact(5);
console.log("factorial of",op);


const sayhello=() =>
{
    console.log("arrow function call");  
};

sayhello();

/*
const sum=(a,b) =>
    {
    return a+b;
    };
*/
const sum=(a,b) => a+b;
let res=sum(5,10);
console.log(res);
``
//PROMISE SYNTAX
/*
let data=new Promise((resolve,reject)=>
{
    })
*/
// Promise => is the javascript object 
const examResult=new Promise((resolve,reject)=>
{
    const mark=20;
    if(mark>=35)
    {
        resolve("Pass");
    }
    else
    {
        reject("Fail");
    }
});

examResult
.then((result)=>
{
console.log("SUCCESS",result);
})
.catch((error)=>
{
    console.log("FAILURE",error);
})
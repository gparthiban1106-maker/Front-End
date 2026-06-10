// use of callback?
// it is used to handle async programming.
// callback: callback is function passed, as an argument to another function and 
// it is executed later or executed after current function is finished

function one(part)
{
    setTimeout(() => {
        console.log("IN FUNCTION ONE");
        part();
    }, 3000);
}

function two()
{
    setTimeout(() => {
        console.log("IN FUNCTION TWO");
    }, 1500);
}

one(two);
//two();
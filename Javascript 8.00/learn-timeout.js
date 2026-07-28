/* setTimeout(() => {
    console.log("set timeout");
}, 5000);
// it is a arrow function & whatever you write a project 

setInterval(() => {
    console.log("Hello Interval");
    
}, 2000);

//to terminate the execution use "Ctrl+c"
 */

function one()
{
    setTimeout(() => {
        console.log("IN FUNCTION ONE");
    }, 3000);
}

function two()
{
    setTimeout(() => {
        console.log("IN FUNCTION TWO");
    }, 1500);
}

one();
two();
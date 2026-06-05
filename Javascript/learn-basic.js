//after adding closure

function outer()
{
    let count=0;

    function inner() 
    {
        count++;
        console.log(count);
        
    }
    return inner;
}

const counter=outer();

counter();
counter();
counter();

//sample without closure

function outer()
{
let count=0;
function inner() 
{
count++;
console.log(count);
}  
inner();
}
outer();
outer();
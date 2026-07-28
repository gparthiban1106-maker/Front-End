let product="Five Star"; // global scope   //  global variable

function outer() 
{
    let p1 ="ramesh"; //local scope
    function inner()
    {
        let p2="Suresh"; // nested scope    
        if (true)
        {
            let message = "add Complete"; //block scope
            console.log("Product name",product);
            console.log("actor 1",p1);
            console.log("actor 2",p2);
        }
    }    
    inner();
}
outer();
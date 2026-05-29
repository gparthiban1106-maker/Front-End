let arr=[1,2,3,4];
//for-of ==> Loop print value   check the itration for value   single value
for ( let val of arr)
{
    console.log(val);
}

let str="Bangalore"
for ( let char of str)
{
    console.log(char);
    
}

//for-in 
// Object:that time using  for-in   multiple value

let obj={name:"Parthiban",city:"Bangalore"}
for(let key in obj)
{
    console.log(key+" "+obj[key]);
    
}



//No of occurrances of i

let para =" i live in Bangalore & my name is parthiban"
let newvalue=para.split("");
count=0
for (let i = 0; i < para.length; i++) 
{
    if (newvalue[i] === 'i') {
        count++;
    }
}
console.log(newvalue);
console.log("Lenght of string=>",newvalue.length);
console.log("Count of=>",count);




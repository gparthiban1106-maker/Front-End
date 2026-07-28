let str="hello morning";
function countvowels(sentence)
{
let arr=sentence.split("");
console.log(arr);
let vowels=['a','e','i','o','u'];
let count=0;
for (let i=0;i<arr.length;i++)
{
    if(vowels.includes(arr[i]))
    {
        count++;
    }
}
return count;
}
let op=countvowels(str);
console.log(op);
        





let str="Hello I am attending class";
function largeWord(s){
    let arr=s.split(" ");
    console.log(arr);
    console.log(arr.length);
    
    let large="";    

    for (let i=0;i<arr.length;i++){
        if (arr[i].length>large.length){
            large=arr[i];
            console.log(large);
            console.log(large.length);
        }
    }
    return large;
}
let value=largeWord(str);
console.log(value);

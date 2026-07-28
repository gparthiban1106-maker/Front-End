function largeWord(s){
    let arr=s.split(" ");    
    console.log(arr);
    let large="";    

    for (let i=0;i<arr.length;i++){
        if (arr[i].length>large.length){
            large=arr[i];
        }
    }
    return large;
}
let st="Hello I am attending class and my department cs";
let value=largeWord(st);
console.log("The Largest word is=>",value);  
let a="schoolmaster";
let b="theclassroom";

function isanagram(a,b){
    let word1=a.split("").sort().join("");
    console.log(word1);
    let word2=b.split("").sort().join("");
    console.log(word2);
    return word1==word2;
}
console.log("Output is",isanagram(a,b));

let text="madam";
function isPalindrome(str){
let rev=text.split("").reverse().join("");
console.log("Rev Value => ",rev);

return rev==text;
}
console.log("Output",isPalindrome(text));
